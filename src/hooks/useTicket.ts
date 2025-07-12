import { useDishStore } from "@/stores/dish-store";
import { useTicketStore } from "@/stores/ticket-store";

export function useTicket() {
  const { dishes } = useDishStore();
  const { ticket } = useTicketStore();

  const hasItems = dishes.length > 0;
  const hasTicket = ticket !== null;

  const totalPrice = dishes.reduce((total, dish) => {
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

    return total + dishPrice;
  }, 0);

  return {
    hasItems,
    hasTicket,
    dishes,
    ticket,
    totalPrice,
    itemCount: dishes.length,
  };
}
