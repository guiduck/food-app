import { Dish, DishOption } from "@/types/store-details";
import { create } from "zustand";

interface DishState {
  dishes: Dish[];
  setDishes: (dishes: Dish[]) => void;

  currentDish?: Dish | null;
  updateCurrentDish: (updatedDish: Dish) => void;
  clearCurrentDish: (dish?: Dish) => void;

  saveNewDish: (newDish: Dish) => void;
  updateDishQuantity: (dishId: number, quantity: number) => void;
  deleteDish: (dishId?: number) => void;
  getDishById: (dishId: number) => Dish | undefined;
  findSimilarDish: (dish: Dish) => Dish | undefined;
}

const areDishesEqual = (dish1: Dish, dish2: Dish): boolean => {
  if (dish1.name !== dish2.name || dish1.notes !== dish2.notes) return false;

  if (!dish1.options && !dish2.options) return true;
  if (!dish1.options || !dish2.options) return false;
  if (dish1.options.length !== dish2.options.length) return false;

  return dish1.options.every((option1, index) => {
    const option2 = dish2.options![index];
    if (option1.title !== option2.title) return false;
    if (option1.ingredients.length !== option2.ingredients.length) return false;

    return option1.ingredients.every((ing1, ingIndex) => {
      const ing2 = option2.ingredients[ingIndex];
      return ing1.title === ing2.title && ing1.quantity === ing2.quantity;
    });
  });
};

export const useDishStore = create<DishState>()((set, get) => ({
  dishes: [],
  setDishes: (dishes: Dish[]) => set({ dishes }),

  currentDish: null,
  updateCurrentDish: (updatedDish: Dish) => set({ currentDish: updatedDish }),

  clearCurrentDish: (dish?: Dish) => {
    if (!dish) {
      set({ currentDish: null });
      return;
    }

    const initialOptions: DishOption[] =
      dish.options?.map((option) => ({
        ...option,
        ingredients:
          option.type === "quantity"
            ? option.ingredients.map((ing) => ({ ...ing, quantity: 0 }))
            : [],
      })) || [];

    const reinitializedDish = {
      ...dish,
      options: initialOptions,
      notes: "",
      quantity: 0,
    };

    set({
      currentDish: reinitializedDish,
    });
  },

  saveNewDish: (newDish: Dish) => {
    const state = get();
    const existingDish = state.findSimilarDish(newDish);

    if (existingDish) {
      const updatedQuantity =
        (existingDish.quantity || 1) + (newDish.quantity || 1);
      state.updateDishQuantity(existingDish.id!, updatedQuantity);
    } else {
      const dishWithQuantity = {
        ...newDish,
        quantity: newDish.quantity || 1,
      };
      set((state) => ({ dishes: [...state.dishes, dishWithQuantity] }));
    }
  },

  updateDishQuantity: (dishId: number, quantity: number) => {
    if (quantity <= 0) {
      get().deleteDish(dishId);
      return;
    }

    set((state) => ({
      dishes: state.dishes.map((dish) =>
        dish.id === dishId ? { ...dish, quantity } : dish
      ),
    }));
  },

  deleteDish: (dishId?: number) => {
    if (!dishId) return;
    return set((state) => ({
      dishes: state.dishes.filter((dish) => dish.id !== dishId),
    }));
  },

  getDishById: (dishId: number): Dish | undefined => {
    const state = get();
    return state.dishes.find((dish: Dish) => dish.id === dishId);
  },

  findSimilarDish: (dish: Dish): Dish | undefined => {
    const state = get();
    return state.dishes.find((existingDish) =>
      areDishesEqual(existingDish, dish)
    );
  },
}));
