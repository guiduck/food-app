import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTicketStore } from "@/stores/ticket-store";
import { useDishStore } from "@/stores/dish-store";
import { createTicket } from "@/services/checkout";
import { validateTicketId } from "@/stores/ticket-utils";

export function useTicketOperations() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { dishes, setDishes } = useDishStore();
  const {
    createTicket: createTicketInStore,
    saveTicketToCookies,
    clearTicket,
    getTicket,
  } = useTicketStore();

  const createAndSaveTicket = async (store: any) => {
    if (dishes.length === 0) {
      toast.error("Adicione itens ao seu pedido");
      return null;
    }

    createTicketInStore(dishes, store);
    saveTicketToCookies();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const ticket = getTicket();
    if (!ticket) return null;

    return ticket;
  };

  const processCheckout = (store: any) =>
    startTransition(async () => {
      try {
        const ticket = await createAndSaveTicket(store);

        if (!ticket) {
          return;
        }

        const result = await createTicket(ticket);

        if (result.error) {
          throw new Error(result.errorUserMessage || "Erro ao criar pedido");
        }

        const serverTicketId = result.data?.ticket?.id;

        if (!serverTicketId) {
          throw new Error("ID do ticket não retornado pelo servidor");
        }

        if (!validateTicketId(serverTicketId)) {
          throw new Error("ID do ticket inválido");
        }

        toast.success("Pedido criado com sucesso!");

        clearTicket();
        setDishes([]);

        await new Promise((resolve) => setTimeout(resolve, 500));

        router.push(`/checkout/${serverTicketId}`);
      } catch (error) {
        toast.error("Erro ao finalizar pedido. Tente novamente.");
      }
    });

  return {
    processCheckout,
    isProcessing: isPending,
  };
}
