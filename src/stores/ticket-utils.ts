import { TicketItem, TicketItemOption } from "./ticket-store";

export const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
};

export const formatQuantity = (quantity: number): string => {
  return `${quantity}x`;
};

export const getOptionsSummary = (options: TicketItemOption[]): string => {
  if (options.length === 0) return "";

  const summaryParts: string[] = [];

  options.forEach((option) => {
    if (option.selectedValues.length > 0) {
      // radio/checkbox
      const values = option.selectedValues.join(", ");
      summaryParts.push(`${option.optionTitle}: ${values}`);
    }

    // quantity
    const quantitySelections = Object.entries(option.quantities)
      .filter(([_, qty]) => qty > 0)
      .map(([value, qty]) => `${qty}x ${value}`)
      .join(", ");

    if (quantitySelections) {
      summaryParts.push(`${option.optionTitle}: ${quantitySelections}`);
    }
  });

  return summaryParts.join(" • ");
};

export const getOptionsPrice = (
  options: TicketItemOption[],
  mainQuantity: number
): number => {
  let totalOptionsPrice = 0;

  options.forEach((option) => {
    // radio/checkbox
    option.selectedValues.forEach((selectedValue) => {
      const price = option.prices[selectedValue] || 0;
      totalOptionsPrice += price * mainQuantity;
    });

    // quantity
    Object.entries(option.quantities).forEach(([value, qty]) => {
      const price = option.prices[value] || 0;
      totalOptionsPrice += price * qty;
    });
  });

  return totalOptionsPrice;
};

export const getBaseDishPrice = (item: TicketItem): number => {
  return item.dish.price * item.quantity;
};

export const hasItemPromotion = (item: TicketItem): boolean => {
  if (item.dish.originalPrice && item.dish.originalPrice > item.dish.price) {
    return true;
  }

  return item.options.some((option) => {
    return option.selectedValues.some((value) => {
      const dish = item.dish;
      if (!dish.options) return false;

      for (const optionGroup of dish.options) {
        for (const [key, optionData] of Object.entries(optionGroup)) {
          if (key === option.optionId) {
            const ingredient = optionData.ingredients.find(
              (ing) => ing.title === value
            );
            return (
              ingredient?.originalPrice &&
              ingredient.originalPrice > ingredient.price
            );
          }
        }
      }
      return false;
    });
  });
};

export const groupItemsByStore = (
  items: TicketItem[]
): Record<string, TicketItem[]> => {
  return items.reduce((acc, item) => {
    if (!acc[item.storeSlug]) {
      acc[item.storeSlug] = [];
    }
    acc[item.storeSlug].push(item);
    return acc;
  }, {} as Record<string, TicketItem[]>);
};

export const getItemDescription = (item: TicketItem): string => {
  const parts = [item.dish.name];

  if (item.quantity > 1) {
    parts.unshift(formatQuantity(item.quantity));
  }

  const optionsSummary = getOptionsSummary(item.options);
  if (optionsSummary) {
    parts.push(`(${optionsSummary})`);
  }

  if (item.notes) {
    parts.push(`Obs: ${item.notes}`);
  }

  return parts.join(" ");
};
