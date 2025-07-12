import { notFound } from "next/navigation";
import { getDishDetails } from "@/services/dishes/dish-details";
import DishHeader from "./ui/dish-header";
import TicketForm from "./ui/ticket-form";

export const dynamic = "force-dynamic";

interface TicketPageProps {
  params: Promise<{
    storeSlug: string;
    dishId: string;
  }>;
}

export default async function TicketPage({ params }: TicketPageProps) {
  const { storeSlug, dishId } = await params;

  const dishResult = await getDishDetails(storeSlug, dishId);

  if (dishResult.error || !dishResult.data) {
    notFound();
  }
  const dish = dishResult.data;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <DishHeader dish={dish} />
      <TicketForm dish={dish} />
    </div>
  );
}

export async function generateMetadata({ params }: TicketPageProps) {
  const { storeSlug, dishId } = await params;
  const dishResult = await getDishDetails(storeSlug, dishId);

  if (dishResult.error || !dishResult.data) {
    return {
      title: "Prato não encontrado",
    };
  }

  const dish = dishResult.data;

  return {
    title: `${dish.name} - Personalizar Pedido`,
    description: `Personalize seu ${dish.name}. ${dish.description}`,
  };
}
