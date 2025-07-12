import { NextResponse } from "next/server";
import { TicketItem } from "@/types/ticket";

const COOKIE_KEY = "aiqfome-ticket-data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  try {
    const { ticketId } = await params;

    const cookieHeader = request.headers.get("cookie") || "";

    let ticketData = "";
    if (cookieHeader) {
      const cookies = cookieHeader.split(";").reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split("=");
        if (key && value) {
          acc[key] = decodeURIComponent(value);
        }
        return acc;
      }, {} as Record<string, string>);

      ticketData = cookies[COOKIE_KEY] || "";
    }

    let ticketItem: TicketItem | null = null;
    if (ticketData) {
      try {
        ticketItem = JSON.parse(ticketData);
      } catch (error) {
        // Error parsing ticket data
      }
    }

    if (!ticketItem || !ticketItem.dishes || ticketItem.dishes.length === 0) {
      return NextResponse.json(
        { error: "Nenhum item encontrado no pedido" },
        { status: 404 }
      );
    }

    return NextResponse.json(ticketItem);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
