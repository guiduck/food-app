export const TICKET_COOKIE_KEY = "aiqfome-ticket-data";

export function generateTicketId(): string {
  const timestamp = Date.now();
  const randomPart = Math.random().toString(36).substr(2, 9).toUpperCase();
  const ticketId = `TICKET_${timestamp}_${randomPart}`;

  return ticketId;
}

export function validateTicketId(ticketId: string): boolean {
  const ticketIdRegex = /^TICKET_\d+_[A-Z0-9]+$/;
  const isValid = ticketIdRegex.test(ticketId);

  return isValid;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}
