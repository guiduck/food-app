import { Dish } from "@/types/store-details";
import { formatPrice } from "@/stores/ticket-utils";
import QuantityGroup from "@/components/QuantityGroup";
import { EditIcon } from "@/components/Icon";

interface CheckoutTicketProps {
  dish: Dish;
  onQuantityChange: (dishId: string, newQuantity: number) => void;
}

export default function CheckoutTicket({
  dish,
  onQuantityChange,
}: CheckoutTicketProps) {
  const formatOptionText = (option: any) => {
    const parts: string[] = [];

    if (option.selectedValues && option.selectedValues.length > 0) {
      parts.push(option.selectedValues.join(", "));
    }

    if (option.quantities && Object.keys(option.quantities).length > 0) {
      Object.entries(option.quantities).forEach(([item, qty]) => {
        parts.push(`${item} (${qty}x)`);
      });
    }

    return parts.join(", ");
  };

  const calculateDishPrice = (dish: Dish): number => {
    let dishPrice = dish.price;
    dish.options?.forEach((option) => {
      option.ingredients.forEach((ingredient) => {
        if (option.type === "quantity") {
          dishPrice += ingredient.price * (ingredient.quantity ?? 0);
        } else {
          dishPrice += ingredient.price;
        }
      });
    });
    return dishPrice;
  };

  const dishQuantity = dish.quantity || 1;

  return (
    <div className="p-m border-b border-neutral-100">
      <div className="flex items-start justify-between mb-s">
        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-xxs">
            <h4 className="font-bold text-text-primary text-sm">{dish.name}</h4>
            <div className="text-right">
              <p className="font-bold text-primary text-sm">
                {formatPrice(calculateDishPrice(dish) * dishQuantity)}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-end mb-xxs">
            <div className="flex gap-l">
              <span className="flex items-center gap-[4px] text-teal font-bold text-s">
                <EditIcon size={16} color="currentcolor" /> editar
              </span>
              <QuantityGroup
                options={[
                  {
                    value: dish.id?.toString() || "0",
                  },
                ]}
                quantities={{ [dish.id?.toString() || "0"]: dishQuantity }}
                onQuantityChange={(dishId, newQuantity) =>
                  onQuantityChange(dishId, newQuantity)
                }
              />
            </div>
          </div>

          {dish.options?.map((option) => (
            <div key={option.title} className="mt-xxs">
              <p className="text-text-secondary text-xs font-bold">
                • {option.title}
              </p>
              <p className="text-text-secondary text-xs ml-s">
                {formatOptionText({
                  selectedValues:
                    option.type !== "quantity"
                      ? option.ingredients.map((ing) => ing.title)
                      : [],
                  quantities:
                    option.type === "quantity"
                      ? option.ingredients.reduce((acc, ing) => {
                          if (ing.quantity && ing.quantity > 0) {
                            acc[ing.title] = ing.quantity;
                          }
                          return acc;
                        }, {} as Record<string, number>)
                      : {},
                })}
              </p>
            </div>
          ))}

          {dish.notes && (
            <p className="text-text-secondary text-xs mt-xxs bg-neutral-50 p-xxs rounded-s">
              <strong>observação:</strong> {dish.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
