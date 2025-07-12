"use client";

import { useEffect, useMemo } from "react";
import RadioGroup from "@/components/RadioGroup";
import CheckboxGroup from "@/components/CheckboxGroup";
import QuantityGroup from "@/components/QuantityGroup";
import { Dish, DishOption } from "@/types/store-details";
import Divider from "@/components/ui/divider";
import { useDishStore } from "@/stores/dish-store";

interface TicketFormProps {
  dish: Dish;
}

// Add ID generator at the top of the file
let dishIdCounter = Date.now();

export default function TicketForm({ dish }: TicketFormProps) {
  const {
    currentDish,
    updateCurrentDish,
    clearCurrentDish,
    dishes,
    saveNewDish,
    updateDishQuantity,
    findSimilarDish,
  } = useDishStore();

  const hasFilledRequiredOptions = useMemo(() => {
    if (!currentDish?.options || !dish.options) return false;

    const requiredOptions = dish.options.filter((opt) => opt.required);

    return requiredOptions.every((reqOpt) => {
      const currentOption = currentDish.options!.find(
        (opt) => opt.title === reqOpt.title
      );
      if (!currentOption) return false;

      if (reqOpt.type === "quantity") {
        return currentOption.ingredients.some((ing) => (ing.quantity ?? 0) > 0);
      }
      return currentOption.ingredients.length > 0;
    });
  }, [dish.options, currentDish?.options]);

  const totalPrice = useMemo(() => {
    return dishes.reduce((total, storeDish) => {
      let dishPrice = storeDish.price;

      storeDish.options?.forEach((option) => {
        option.ingredients.forEach((ingredient) => {
          if (option.type === "quantity") {
            dishPrice += ingredient.price * (ingredient.quantity ?? 0);
          } else {
            dishPrice += ingredient.price;
          }
        });
      });

      return total + dishPrice * (storeDish.quantity || 1);
    }, 0);
  }, [dishes]);

  const dishCountInStore = useMemo(() => {
    if (!currentDish) return 0;

    const similarDish = findSimilarDish(currentDish);
    return similarDish?.quantity ?? 0;
  }, [currentDish, findSimilarDish]);

  useEffect(() => {
    clearCurrentDish(dish);

    return () => {
      clearCurrentDish();
    };
  }, [dish, clearCurrentDish]);

  const handleRadioChange = (optionTitle: string, selectedValue: string) => {
    if (!currentDish?.options) return;

    const originalOption = dish.options?.find(
      (opt) => opt.title === optionTitle
    );

    if (!originalOption) return;

    const selectedIngredient = originalOption.ingredients.find(
      (ing) => ing.title === selectedValue
    );

    if (!selectedIngredient) return;

    const updatedOptions = currentDish.options.map((opt) =>
      opt.title === optionTitle
        ? { ...opt, ingredients: [selectedIngredient] }
        : opt
    );

    updateCurrentDish({
      ...currentDish,
      options: updatedOptions,
    });
  };

  const handleCheckboxChange = (
    optionTitle: string,
    selectedValues: string[]
  ) => {
    if (!currentDish?.options) return;

    const originalOption = dish.options?.find(
      (opt) => opt.title === optionTitle
    );
    if (!originalOption) return;

    const selectedIngredients = originalOption.ingredients.filter((ing) =>
      selectedValues.includes(ing.title)
    );

    const updatedOptions = currentDish.options.map((opt) =>
      opt.title === optionTitle
        ? { ...opt, ingredients: selectedIngredients }
        : opt
    );

    updateCurrentDish({
      ...currentDish,
      options: updatedOptions,
    });
  };

  const handleQuantityChange = (
    optionTitle: string,
    value: string,
    quantity: number
  ) => {
    if (!currentDish?.options) return;

    const updatedOptions = currentDish.options.map((opt) =>
      opt.title === optionTitle
        ? {
            ...opt,
            ingredients: opt.ingredients.map((ing) =>
              ing.title === value ? { ...ing, quantity } : ing
            ),
          }
        : opt
    );

    updateCurrentDish({
      ...currentDish,
      options: updatedOptions,
    });
  };

  const handleDishQuantityChange = (newQuantity: number) => {
    if (!currentDish) return;

    const similarDish = findSimilarDish(currentDish);

    if (newQuantity === 0) {
      if (!similarDish) {
        clearCurrentDish(dish);
        return;
      }

      updateDishQuantity(similarDish.id!, 0);
      return;
    }

    if (!similarDish) {
      const dishToAdd: Dish = {
        ...currentDish,
        id: ++dishIdCounter,
        quantity: newQuantity,
      };

      saveNewDish(dishToAdd);
      clearCurrentDish(dish);
      return;
    }

    updateDishQuantity(similarDish.id!, newQuantity);
    clearCurrentDish(dish);
  };

  const handleNotesChange = (value: string) => {
    if (!currentDish) return;

    updateCurrentDish({
      ...currentDish,
      notes: value,
    });
  };

  const getSelectedRadioValue = (optionTitle: string): string => {
    const currentOption = currentDish?.options?.find(
      (opt) => opt.title === optionTitle
    );
    return currentOption?.ingredients[0]?.title || "";
  };

  const getSelectedCheckboxValues = (optionTitle: string): string[] => {
    const currentOption = currentDish?.options?.find(
      (opt) => opt.title === optionTitle
    );
    return currentOption?.ingredients.map((ing) => ing.title) || [];
  };

  const getIngredientQuantities = (
    optionTitle: string
  ): Record<string, number> => {
    const currentOption = currentDish?.options?.find(
      (opt) => opt.title === optionTitle
    );
    return (
      currentOption?.ingredients.reduce((acc, ing) => {
        acc[ing.title] = ing.quantity ?? 0;
        return acc;
      }, {} as Record<string, number>) ?? {}
    );
  };

  const renderOptionGroup = (option: DishOption) => {
    switch (option.type) {
      case "single" as const:
        return (
          <>
            <div className="px-m pb-m">
              <RadioGroup
                key={option.title}
                title={option.title}
                required={option.required}
                options={option.ingredients.map((ingredient) => ({
                  value: ingredient.title,
                  label: ingredient.title,
                  price: `R$ ${ingredient.price.toFixed(2).replace(".", ",")}`,
                  originalPrice: ingredient.originalPrice
                    ? `R$ ${ingredient.originalPrice
                        .toFixed(2)
                        .replace(".", ",")}`
                    : undefined,
                  hasPromotion: Boolean(
                    ingredient.originalPrice &&
                      ingredient.originalPrice > ingredient.price
                  ),
                }))}
                value={getSelectedRadioValue(option.title)}
                onValueChange={(value) =>
                  handleRadioChange(option.title, value)
                }
              />
            </div>
            <Divider />
          </>
        );

      case "multiple":
        return (
          <>
            <div className="px-m pb-m">
              <CheckboxGroup
                key={option.title}
                title={option.title}
                required={option.required}
                options={option.ingredients.map((ingredient) => ({
                  value: ingredient.title,
                  label: ingredient.title,
                  price: `R$ ${ingredient.price.toFixed(2).replace(".", ",")}`,
                  originalPrice: ingredient.originalPrice
                    ? `R$ ${ingredient.originalPrice
                        .toFixed(2)
                        .replace(".", ",")}`
                    : undefined,
                  hasPromotion: Boolean(
                    ingredient.originalPrice &&
                      ingredient.originalPrice > ingredient.price
                  ),
                }))}
                value={getSelectedCheckboxValues(option.title)}
                onValueChange={(values: string[]) =>
                  handleCheckboxChange(option.title, values)
                }
              />
            </div>
            <Divider />
          </>
        );

      case "quantity":
        return (
          <>
            <div className="px-m pb-m">
              <QuantityGroup
                key={option.title}
                title={option.title}
                required={option.required}
                options={option.ingredients.map((ingredient) => ({
                  value: ingredient.title,
                  label: ingredient.title,
                  price: `R$ ${ingredient.price.toFixed(2).replace(".", ",")}`,
                  originalPrice: ingredient.originalPrice
                    ? `R$ ${ingredient.originalPrice
                        .toFixed(2)
                        .replace(".", ",")}`
                    : undefined,
                  hasPromotion: Boolean(
                    ingredient.originalPrice &&
                      ingredient.originalPrice > ingredient.price
                  ),
                }))}
                quantities={getIngredientQuantities(option.title)}
                onQuantityChange={(value, quantity) =>
                  handleQuantityChange(option.title, value, quantity)
                }
              />
            </div>
            <Divider />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="rounded-m">
        <div className="flex items-center justify-between px-m mb-m">
          <div>
            <h3 className="text-text-primary font-bold text-m mb-xxs">
              quantos?
            </h3>
            <p className="text-text-secondary text-s">
              total R$ <b>{totalPrice.toFixed(2).replace(".", ",")}</b>
            </p>
          </div>

          <div className="flex items-center gap-s">
            {dishCountInStore > 0 && (
              <QuantityGroup
                title=""
                options={[
                  {
                    value: "dish",
                    label: "",
                  },
                ]}
                quantities={{ dish: dishCountInStore }}
                onQuantityChange={(_, quantity) =>
                  handleDishQuantityChange(quantity)
                }
              />
            )}

            {dishCountInStore === 0 && (
              <button
                onClick={() => handleDishQuantityChange(1)}
                disabled={!hasFilledRequiredOptions}
                className={`px-l py-s rounded-s text-s font-medium transition-colors ${
                  hasFilledRequiredOptions
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                }`}
              >
                adicionar
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-m">
        {dish.options?.map((option) => (
          <div key={option.title}>{renderOptionGroup(option)}</div>
        ))}
      </div>

      <div className="bg-card pt-[26px] px-[28px] rounded-m">
        <textarea
          value={currentDish?.notes ?? ""}
          onChange={(e) => handleNotesChange(e.target.value)}
          placeholder="alguma observação do item? • opcional
ex: tirar algum ingrediente, ponto do prato"
          className="w-full p-s border border-border rounded-s text-s placeholder:text-text-secondary resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          rows={3}
        />
      </div>
    </div>
  );
}
