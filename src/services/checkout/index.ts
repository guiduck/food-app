import API from "@/lib/api";
import { TicketItem } from "@/types/ticket";
import { Store } from "@/types/store";
import { Dish } from "@/types/store-details";

export interface CheckoutTicketResponse {
  id: string;
  status: string;
  estimatedDeliveryTime: string;
  totalItems: number;
  totalPrice: number;
  createdAt: string;
  store: Omit<
    Store,
    "id" | "deliveryPrice" | "closingTime" | " rating" | "isOpen"
  >;
  dishes: Dish[];
}

export interface CheckoutResponse {
  id: string;
  item: TicketItem;
  totalItems: number;
  totalPrice: number;
  createdAt: string;
}

export async function getCheckoutData(ticketId: string) {
  return API<{ ticket: CheckoutTicketResponse }>({
    url: `tickets?id=${ticketId}`,
    method: "GET",
  });
}

export async function createTicket(ticketItem: TicketItem) {
  return API<{ ticket: { id: string } }>({
    url: "tickets",
    method: "POST",
    data: ticketItem,
  });
}
