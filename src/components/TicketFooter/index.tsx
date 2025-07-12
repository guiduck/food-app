"use client";

import { usePathname } from "next/navigation";
import { useDishStore } from "@/stores/dish-store";
import { useTicketOperations } from "@/hooks/useTicketOperations";

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
  const pathname = usePathname();
  const { dishes } = useDishStore();
  const { processCheckout, isProcessing } = useTicketOperations();

  const isCheckout = pathname.includes("/checkout/");
  const hasDishes = dishes.length > 0;

  const handleCheckout = async () => {
    await processCheckout({
      name: store.name,
      slug: store.slug,
      image: store.image,
      rating: store.rating,
      id: 0,
      deliveryPrice: 0,
      closingTime: "",
      isOpen: true,
    });
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
            onClick={handleCheckout}
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
