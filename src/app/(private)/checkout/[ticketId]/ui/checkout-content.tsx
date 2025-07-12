"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TicketItem } from "@/types/ticket";
import { formatPrice } from "@/stores/ticket-utils";
import { createTicket } from "@/services/checkout";
import { toast } from "sonner";
import CheckoutTicket from "./checkout-ticket";
import { Dish } from "@/types/store-details";
import { clearTicketFromCookies } from "@/lib/cookies";
import { useTicketStore } from "@/stores/ticket-store";
import { useDishStore } from "@/stores/dish-store";
import Image from "next/image";

interface CheckoutContentProps {
  ticketItem: TicketItem;
}

export default function CheckoutContent({
  ticketItem: initialTicketItem,
}: CheckoutContentProps) {
  const router = useRouter();
  const [ticketItem, setTicketItem] = useState<TicketItem>(initialTicketItem);
  const [isProcessing, setIsProcessing] = useState(false);

  const { clearTicket } = useTicketStore();
  const { setDishes } = useDishStore();

  const handleQuantityChange = (dishId: string, newQuantity: number) => {
    const dishIdNum = dishId.includes(".")
      ? parseFloat(dishId)
      : parseInt(dishId);

    setTicketItem((prev) => {
      const updatedDishes = prev.dishes
        .map((dish) => {
          if (dish.id !== dishIdNum) {
            return dish;
          }

          if (newQuantity <= 0) {
            return null;
          }

          return { ...dish, quantity: newQuantity };
        })
        .filter((dish) => dish !== null) as Dish[];

      const totalPrice = updatedDishes.reduce((total, dish) => {
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

      return {
        ...prev,
        dishes: updatedDishes,
        totalPrice,
      };
    });
  };

  const clearAllData = () => {
    clearTicketFromCookies();
    clearTicket();
    setDishes([]);
  };

  const handleGoToPayment = async () => {
    setIsProcessing(true);

    try {
      const result = await createTicket(ticketItem);

      if (result.error) {
        throw new Error(result.errorUserMessage || "Erro ao criar pedido");
      }

      clearAllData();

      toast.success("Pedido processado com sucesso!");
      router.push("/delivery");
    } catch (error) {
      console.error("Erro no checkout:", error);
      toast.error("Erro ao processar pedido");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-m border-b border-dividers">
        <div className="flex items-center gap-s">
          <div className="size-9 rounded-m overflow-hidden flex-shrink-0">
            <Image
              src={ticketItem.store.image}
              alt={ticketItem.store.name}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-text-secondary text-s font-bold">
              seus itens em
            </p>
            <p className="font-bold text-m">{ticketItem.store.name}</p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {ticketItem.dishes.map((dish) => (
          <CheckoutTicket
            key={`${dish.id}-${dish.quantity}`}
            dish={dish}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-between border-t items-center border-dividers py-m px-xl shadow-md">
        <div className="flex flex-col gap-[2px] min-w-100 items-center justify-between">
          <span className="text-neautral-900 text-s font-bold text-left w-full">
            subtotal
          </span>
          <span className="font-extrabold text-primary text-l whitespace-nowrap text-left w-full">
            {formatPrice(ticketItem.totalPrice)}
          </span>
        </div>

        <button
          onClick={handleGoToPayment}
          disabled={isProcessing || ticketItem.dishes.length === 0}
          className={`flex items-center justify-center w-full ml-m max-w-52 max-h-12 py-m rounded-m text-s font-medium transition-colors ${
            isProcessing || ticketItem.dishes.length === 0
              ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary-dark"
          }`}
        >
          {isProcessing ? "Processando..." : "ir para pagamento"}
        </button>
      </div>
    </div>
  );
}
