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

export async function getCheckoutData(ticketId: string, retryCount = 0) {
  const maxRetries = 3;
  const retryDelay = 1000;

  const response = await API<{ ticket: CheckoutTicketResponse }>({
    url: `tickets?id=${ticketId}`,
    method: "GET",
  });

  if (response.error && response.status === 404 && retryCount < maxRetries) {
    await new Promise((resolve) => setTimeout(resolve, retryDelay));
    return getCheckoutData(ticketId, retryCount + 1);
  }

  return response;
}

export async function createTicket(ticketItem: TicketItem) {
  const response = await API<{ ticket: { id: string } }>({
    url: "tickets",
    method: "POST",
    data: ticketItem,
  });

  return response;
}
