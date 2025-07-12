import React from "react";
import { Dish } from "@/types/store-details";
import Image from "next/image";

interface DishCardProps {
  dish: Dish;
  className?: string;
  onAddToCart?: (dish: Dish) => void;
}

export default function DishCard({
  dish,
  className = "",
  onAddToCart,
}: DishCardProps) {
  const formatPrice = (price: number) =>
    `R$ ${price.toFixed(2).replace(".", ",")}`;

  const getWarningIcons = () => {
    const icons = [];
    if (dish.warning.spicy) icons.push("🌶️");
    if (dish.warning.vegan) icons.push("🌱");
    if (dish.warning.vegetarian && !dish.warning.vegan) icons.push("🥬");
    if (dish.warning.glutenFree) icons.push("🚫🌾");
    return icons;
  };

  return (
    <div
      className={`bg-card border border-border rounded-m p-l ${
        !dish.available ? "opacity-60" : ""
      } ${className}`}
    >
      <div className="flex gap-m">
        {/* Dish Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-xs">
            <h3 className="text-text-primary font-medium text-m truncate pr-s">
              {dish.name}
            </h3>
            {getWarningIcons().length > 0 && (
              <div className="flex gap-xxs text-xs">
                {getWarningIcons().map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
            )}
          </div>

          <p className="text-text-secondary text-s mb-s line-clamp-2">
            {dish.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xs">
              {dish.originalPrice && (
                <span className="text-text-secondary text-xs line-through">
                  {formatPrice(dish.originalPrice)}
                </span>
              )}
              <span className="text-text-primary font-bold text-m">
                {formatPrice(dish.price)}
              </span>
            </div>

            {dish.available && onAddToCart && (
              <button
                onClick={() => onAddToCart(dish)}
                className="bg-primary text-white px-m py-xs rounded-s text-s font-medium hover:bg-primary-dark transition-colors"
              >
                Adicionar
              </button>
            )}

            {!dish.available && (
              <span className="text-text-secondary text-xs font-medium">
                Indisponível
              </span>
            )}
          </div>
        </div>

        {/* Dish Image */}
        {dish.image && (
          <div className="w-20 h-20 rounded-m overflow-hidden flex-shrink-0">
            <Image
              src={dish.image}
              alt={dish.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
