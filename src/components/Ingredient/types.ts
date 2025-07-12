import { DishWarning } from "@/types/store-details";

export interface IngredientProps {
  name: string;
  description: string;
  warning: DishWarning;
  price: number;
  originalPrice?: number;
  className?: string;
}
