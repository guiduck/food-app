import React from "react";
import { StarIcon } from "@/components/Icon";
import { StoreCardProps } from "./types";
import DeliveryInfo from "./delivery-info";
import { cn } from "@/lib/utils";

export const StoreCard: React.FC<StoreCardProps> = ({
  name,
  rating,
  deliveryFee = 0,
  imageUrl,
  isOpen = true,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-50 dark:bg-neutral-800 border border-border rounded-m overflow-hidden hover:shadow-lg transition-shadow",
        !isOpen ? "opacity-60" : "",
        "flex items-start gap-m mb-s",
        className
      )}
    >
      <div className="w-auto h-[72px] flex-shrink-0 relative">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        {!isOpen && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-xs font-bold">FECHADO</span>
          </div>
        )}
      </div>

      <div className="flex flex-col min-w-0 py-[11px] px-s gap-[4px]">
        <h3 className="text-neutral-700 dark:text-neutral-200 font-bold leading-[22px] text-m truncate">
          {name}
        </h3>

        <div className="flex items-center gap-s">
          <DeliveryInfo deliveryFee={deliveryFee} />
          <StarIcon size={24} color="var(--color-warning)" />
          <span className="text-text-primary text-s font-medium">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
