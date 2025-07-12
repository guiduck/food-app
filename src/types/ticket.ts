import { Store } from "./store";
import { Dish } from "./store-details";

export interface TicketItem {
  id: string;
  store: Omit<
    Store,
    "id" | "deliveryPrice" | "closingTime" | " rating" | "isOpen"
  >;
  dishes: Dish[];
  totalPrice: number;
  addedAt: Date;
}
