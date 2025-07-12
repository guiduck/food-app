import { TicketItem } from "@/types/ticket";
import { setCookie, parseCookies, destroyCookie } from "nookies";

const COOKIE_KEY = "aiqfome-ticket-data";

export function saveTicketToCookies(items: TicketItem, ctx?: any) {
  const ticketData = JSON.stringify(items);

  setCookie(ctx, COOKIE_KEY, ticketData, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
}

export function getTicketFromCookies(ctx?: any): TicketItem | null {
  const cookies = parseCookies(ctx);
  const ticketData = cookies[COOKIE_KEY];

  if (!ticketData) {
    return null;
  }

  try {
    return JSON.parse(ticketData);
  } catch (error) {
    console.error("Error parsing ticket data from cookies:", error);
    return null;
  }
}

export function clearTicketFromCookies(ctx?: any) {
  destroyCookie(ctx, COOKIE_KEY, { path: "/" });
}
