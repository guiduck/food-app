import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { TicketItem } from "@/types/ticket";
import { parseCookies, setCookie } from "nookies";

const COOKIE_KEY = "aiqfome-ticket-data";

const ticketStorage = new Map<string, TicketItem>();

async function getTicketFromCookiesServer(
  request?: Request
): Promise<TicketItem | null> {
  try {
    const cookiesData = parseCookies({ req: request as any });
    const ticketData = cookiesData[COOKIE_KEY];

    if (ticketData) {
      const parsed = JSON.parse(ticketData);
      if (parsed.addedAt) {
        parsed.addedAt = new Date(parsed.addedAt);
      }
      return parsed;
    }

    const cookieStore = await cookies();
    const nextTicketData = cookieStore.get(COOKIE_KEY)?.value;

    if (!nextTicketData) {
      return null;
    }

    const parsed = JSON.parse(nextTicketData);
    if (parsed.addedAt) {
      parsed.addedAt = new Date(parsed.addedAt);
    }
    return parsed;
  } catch (error) {
    console.error("Error getting ticket from cookies:", error);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const ticketData: TicketItem = await request.json();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      !ticketData.dishes ||
      !Array.isArray(ticketData.dishes) ||
      ticketData.dishes.length === 0
    ) {
      return NextResponse.json(
        { error: "Pratos são obrigatórios" },
        { status: 400 }
      );
    }

    if (!ticketData.totalPrice || ticketData.totalPrice <= 0) {
      return NextResponse.json(
        { error: "Preço total inválido" },
        { status: 400 }
      );
    }

    const totalItems = ticketData.dishes.reduce(
      (total, dish) => total + (dish.quantity || 1),
      0
    );

    const ticketId =
      ticketData.id ||
      `TICKET_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`;

    const completeTicket: TicketItem = {
      ...ticketData,
      id: ticketId,
      addedAt: new Date(),
    };

    ticketStorage.set(ticketId, completeTicket);

    const ticketDataString = JSON.stringify(completeTicket);

    const response = NextResponse.json(
      {
        success: true,
        message: "Pedido criado com sucesso!",
        ticket: {
          id: ticketId,
          status: "confirmed",
          estimatedDeliveryTime: "30-45 min",
          totalItems,
          totalPrice: ticketData.totalPrice,
          createdAt: completeTicket.addedAt.toISOString(),
          store: ticketData.store,
          dishes: ticketData.dishes,
        },
      },
      { status: 201 }
    );

    try {
      setCookie({ res: response as any }, COOKIE_KEY, ticketDataString, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        httpOnly: false,
        secure: false,
        sameSite: "lax",
      });
    } catch (error) {
      response.cookies.set(COOKIE_KEY, ticketDataString, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        httpOnly: false,
        secure: false,
        sameSite: "lax",
      });
    }

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        message: "Não foi possível processar seu pedido. Tente novamente.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const ticketId = searchParams.get("id");

    if (!ticketId) {
      return NextResponse.json(
        { error: "ID do pedido é obrigatório" },
        { status: 400 }
      );
    }

    let ticketFromStorage = ticketStorage.get(ticketId);

    if (ticketFromStorage) {
    } else {
      const cookieTicket = await getTicketFromCookiesServer(request);

      if (!cookieTicket) {
        return NextResponse.json(
          { error: "Ticket não encontrado" },
          { status: 404 }
        );
      }

      if (cookieTicket.id !== ticketId) {
        return NextResponse.json(
          { error: "Ticket não encontrado" },
          { status: 404 }
        );
      }

      ticketFromStorage = cookieTicket;
      ticketStorage.set(ticketId, cookieTicket);
    }

    const response = {
      success: true,
      ticket: {
        id: ticketFromStorage.id,
        status: "confirmed",
        estimatedDeliveryTime: "30-45 min",
        totalItems: ticketFromStorage.dishes.reduce(
          (total, dish) => total + (dish.quantity || 1),
          0
        ),
        totalPrice: ticketFromStorage.totalPrice,
        createdAt:
          ticketFromStorage.addedAt instanceof Date
            ? ticketFromStorage.addedAt.toISOString()
            : new Date(ticketFromStorage.addedAt).toISOString(),
        store: ticketFromStorage.store,
        dishes: ticketFromStorage.dishes,
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        message: "Não foi possível buscar o pedido. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
