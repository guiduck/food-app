export interface DishWarning {
  spicy: boolean;
  vegan: boolean;
  vegetarian?: boolean;
  glutenFree?: boolean;
}

export type DishOptionIngredient = {
  title: string;
  price: number;
  quantity?: number;
  originalPrice?: number;
};

export type DishOption = {
  title: string;
  hasOffer: boolean;
  required?: boolean;
  type: "single" | "multiple" | "quantity";
  ingredients: DishOptionIngredient[];
};

export interface Dish {
  id?: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  warning: DishWarning;
  options?: DishOption[];
  notes?: string;
  available: boolean;
  quantity?: number;
}

export interface MenuSection {
  id: number;
  title: string;
  hasOffer: boolean;
  description?: string;
  dishes: Dish[];
}

export interface StorePromotion {
  type: "free_delivery" | "discount" | "combo";
  description: string;
  minOrderValue?: number;
  discountPercentage?: number;
}

export interface StoreDetails {
  id: number;
  name: string;
  slug: string;
  image: string;
  deliveryFee: number;
  deliveryTime: string; // "30-40 min"
  distanceFromUser: string; // "5.2km"
  closingTime: string; // "HH:MM" format
  rating: number;
  isOpen: boolean;
  promotion?: StorePromotion;
  minimumOrder: number;
  menu: MenuSection[];
}

export interface StoreDetailsResponse {
  store: StoreDetails;
}
