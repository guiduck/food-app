import { notFound } from "next/navigation";
import CheckoutContent from "./ui/checkout-content";
import { getCheckoutData } from "@/services/checkout";

interface CheckoutPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { ticketId } = await params;

  try {
    const response = await getCheckoutData(ticketId);

    if (response.error) {
      notFound();
    }

    if (!response.data?.ticket) {
      notFound();
    }

    const ticketData = response.data.ticket;

    const ticketItem = {
      id: ticketData.id,
      store: ticketData.store,
      dishes: ticketData.dishes,
      totalPrice: ticketData.totalPrice,
      addedAt: new Date(ticketData.createdAt),
    };

    return (
      <div className="bg-background text-foreground min-h-screen">
        <CheckoutContent ticketItem={ticketItem} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }: CheckoutPageProps) {
  const { ticketId } = await params;

  return {
    title: `Checkout - ${ticketId}`,
    description: "Revise e finalize seu pedido",
  };
}
