"use client";

import { useTicket } from "@/hooks/useTicket";

interface TicketBadgeProps {
  className?: string;
  showZero?: boolean;
}

export function TicketBadge({
  className = "",
  showZero = false,
}: TicketBadgeProps) {
  const { itemCount } = useTicket();

  if (!showZero && itemCount === 0) {
    return null;
  }

  return (
    <span
      className={`
        inline-flex items-center justify-center 
        min-w-[20px] h-5 
        bg-primary text-white 
        text-xs font-bold 
        rounded-full 
        px-1
        ${className}
      `}
      aria-label={`${itemCount} ${
        itemCount === 1 ? "item" : "itens"
      } no carrinho`}
    >
      {itemCount > 99 ? "99+" : itemCount}
    </span>
  );
}

export default TicketBadge;
