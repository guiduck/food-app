"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useTicketStore } from "@/stores/ticket-store";
import { useDishStore } from "@/stores/dish-store";
import { createTicket } from "@/services/checkout";

interface TicketFooterProps {
  className?: string;
  store: {
    name: string;
    slug: string;
    image: string;
    rating: number;
  };
}

export function TicketFooter({ className = "", store }: TicketFooterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isProcessing, setIsProcessing] = useState(false);

  const { dishes } = useDishStore();
  const {
    createTicket: createTicketInStore,
    saveTicketToCookies,
    clearTicket,
  } = useTicketStore();

  const isCheckout = pathname.includes("/checkout/");
  const hasDishes = dishes.length > 0;

  const createTicketAndSave = async () => {
    if (dishes.length === 0) {
      toast.error("Adicione itens ao seu pedido");
      return false;
    }
    createTicketInStore(dishes, {
      name: store.name,
      slug: store.slug,
      image: store.image,
      rating: store.rating,
      id: 0,
      deliveryPrice: 0,
      closingTime: "",
      isOpen: true,
    });
    saveTicketToCookies();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  };

  const handleCheckout = async () => {
    const latestTicket = useTicketStore.getState().ticket;
    if (!latestTicket) {
      toast.error("Nenhum ticket encontrado");
      setIsProcessing(false);
      return;
    }
    try {
      const result = await createTicket(latestTicket);
      if (result.error) {
        throw new Error(result.errorUserMessage || "Erro ao criar pedido");
      }
      toast.success("Pedido criado com sucesso!");
      clearTicket();
      router.push(`/checkout/${result.data?.ticket?.id}`);
    } catch (error) {
      toast.error("Erro ao finalizar pedido. Tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCreateAndCheckout = async () => {
    setIsProcessing(true);
    try {
      const created = await createTicketAndSave();
      if (!created) {
        setIsProcessing(false);
        return;
      }
      await handleCheckout();
    } catch {
      setIsProcessing(false);
      toast.error("Erro ao criar ticket");
    }
  };

  if (isCheckout || !hasDishes) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-neutral-100 border-t border-dividers shadow-lg z-50 ${className}`}
    >
      <div className="px-l pt-l pb-m">
        <div className="flex flex-col items-center">
          <div className="text-center mb-m">
            <p className="text-primary-dark font-bold text-s">
              feito com <span className="text-primary-dark text-m">💜</span> em
              maringá-PR
            </p>
          </div>
          <button
            onClick={handleCreateAndCheckout}
            disabled={isProcessing}
            className={`w-full px-xl py-m rounded-s text-s font-medium transition-colors ${
              isProcessing
                ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            {isProcessing ? "Processando..." : "ver ticket"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketFooter;
