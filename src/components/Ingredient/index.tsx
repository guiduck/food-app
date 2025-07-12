import React from "react";
import { DolarSignIcon, PepperIcon, PlantIcon } from "@/components/Icon";
import { DishWarning } from "@/types/store-details";
import { cn } from "@/lib/utils";

interface IngredientProps {
  name: string;
  description: string;
  warning: DishWarning;
  price: number;
  originalPrice?: number;
  className?: string;
}

export default function Ingredient({
  name,
  description,
  warning,
  price,
  originalPrice,
  className = "",
}: IngredientProps) {
  const formatPrice = (price: number) =>
    `R$ ${price.toFixed(2).replace(".", ",")}`;

  const getWarningIcon = () => {
    if (warning.spicy) return <PepperIcon size={16} />;
    if (warning.vegan) return <PlantIcon size={16} />;
    if (warning.vegetarian && !warning.vegan) return "🥬🥚";
    if (warning.glutenFree) return "🚫🌾";
    return null;
  };

  const warningIcon = getWarningIcon();
  const hasPromotion = originalPrice && originalPrice > price;

  return (
    <div className={cn("py-s", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-xs mb-[4px]">
            <h4 className="text-neutral-900 dark:text-neutral-200 font-semibold text-s">
              {name}
            </h4>
            {warningIcon && (
              <span className="text-sm text-teal">{warningIcon}</span>
            )}
          </div>

          <p className="text-text-secondary text-xs ">{description}</p>
        </div>

        <div className="flex flex-col items-end ml-m">
          {hasPromotion && (
            <span className="text-text-secondary font-bold text-xs line-through">
              {formatPrice(originalPrice)}
            </span>
          )}

          <div className="flex items-center gap-[3.5px]">
            {hasPromotion && (
              <span className="text-success">
                <DolarSignIcon size={13} />
              </span>
            )}
            <span
              className={`font-bold text-s ${
                hasPromotion ? "text-success" : "text-primary"
              }`}
            >
              {formatPrice(price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
