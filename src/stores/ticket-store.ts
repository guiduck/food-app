import { create } from "zustand";
import { TicketItem } from "@/types/ticket";
import { Dish } from "@/types/store-details";
import { Store } from "@/types/store";
import { saveTicketToCookies, getTicketFromCookies } from "@/lib/cookies";
import { generateTicketId } from "./ticket-utils";

interface TicketState {
  ticket: TicketItem | null;

  createTicket: (dishes: Dish[], store: Store) => void;
  getTicket: () => TicketItem | null;
  clearTicket: () => void;

  saveTicketToCookies: () => void;
  loadTicketFromCookies: () => void;
}

const calculateTotalPrice = (dishes: Dish[]): number => {
  const total = dishes.reduce((total, dish) => {
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

    return total + dishPrice * (dish.quantity || 1);
  }, 0);

  return total;
};

export const useTicketStore = create<TicketState>()((set, get) => ({
  ticket: null,

  createTicket: (dishes: Dish[], store: Store) => {
    if (dishes.length === 0) {
      return;
    }

    const ticketId = generateTicketId();
    const totalPrice = calculateTotalPrice(dishes);

    const ticket: TicketItem = {
      id: ticketId,
      store: {
        name: store.name,
        slug: store.slug,
        image: store.image,
        rating: store.rating,
      },
      dishes: dishes,
      totalPrice: totalPrice,
      addedAt: new Date(),
    };

    set({ ticket });
  },

  getTicket: () => {
    const ticket = get().ticket;
    return ticket;
  },

  clearTicket: () => set({ ticket: null }),

  saveTicketToCookies: () => {
    const { ticket } = get();

    if (!ticket) return;

    saveTicketToCookies(ticket);
  },

  loadTicketFromCookies: () => {
    const ticketItem = getTicketFromCookies();

    if (!ticketItem) return;

    set({ ticket: ticketItem });
  },
}));
