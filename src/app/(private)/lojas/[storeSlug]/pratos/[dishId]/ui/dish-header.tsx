import Image from "next/image";
import { PepperIcon, PlantIcon } from "@/components/Icon";
import { Dish } from "@/types/store-details";

interface DishHeaderProps {
  dish: Dish;
}

export default function DishHeader({ dish }: DishHeaderProps) {
  const formatPrice = (price: number) =>
    `R$ ${price.toFixed(2).replace(".", ",")}`;

  const getWarningIcons = () => {
    const icons = [];
    if (dish.warning.spicy) {
      icons.push(<PepperIcon key="spicy" size={16} color="currentColor" />);
    }
    if (dish.warning.vegan) {
      icons.push(<PlantIcon key="vegan" size={16} color="currentColor" />);
    }
    if (dish.warning.vegetarian && !dish.warning.vegan) {
      icons.push(<span key="vegetarian">🥬</span>);
    }
    if (dish.warning.glutenFree) {
      icons.push(<span key="gluten-free">🚫🌾</span>);
    }
    return icons;
  };

  const warningIcons = getWarningIcons();

  return (
    <div className="bg-card pb-m">
      <div className="w-full h-48 mb-m">
        <Image
          src={dish.image ?? ""}
          alt={dish.name}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-s px-m">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-xxs min-w-0">
            <div className="flex items-center gap-xs">
              <h1 className="text-text-primary font-bold text-xl">
                {dish.name}
              </h1>
              {warningIcons.length > 0 && (
                <div className="flex gap-xxs text-text-secondary">
                  {warningIcons}
                </div>
              )}
            </div>

            <div className="flex items-center">
              <p className="text-text-secondary font-extrabold text-s">
                a partir de{" "}
                <b className="text-primary-text text-[18px]">
                  {formatPrice(dish.price)}
                </b>
              </p>
            </div>

            <p className="text-text-secondary text-s font-semibold">
              {dish.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
