import { StarIcon, ShareIcon, ArrowRightIcon } from "@/components/Icon";
import { StoreDetails } from "@/types/store-details";
import Image from "next/image";
import FavoriteButton from "./favorite-button";
import DeliveryInfo from "./delivery-info";

interface StoreHeaderProps {
  store: StoreDetails;
}

export default function StoreHeader({ store }: StoreHeaderProps) {
  const formatPrice = (price: number) =>
    `R$ ${price.toFixed(2).replace(".", ",")}`;

  return (
    <div className="bg-card px-m py-l">
      <div className="flex items-start gap-m mb-[4px]">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-xs mb-s">
            <div className="size-9 rounded-m overflow-hidden flex-shrink-0">
              <Image
                src={store.image}
                alt={store.name}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-text-primary font-bold text-xl truncate">
              {store.name}
            </h1>
          </div>

          <div className="flex items-start justify-between mb-xxs">
            <div className="flex items-center gap-s">
              <button>
                <ShareIcon size={24} color="currentColor" />
              </button>
              <FavoriteButton storeSlug={store.slug} />
            </div>
            <button className="flex items-center gap-[4px] text-teal ml-auto hover:underline    ">
              <span className="text-s font-bold">mais infos</span>
              <ArrowRightIcon size={9} color="currentColor" />
            </button>
          </div>

          <DeliveryInfo store={store} />

          {store.promotion && (
            <div className="w-fit bg-teal-background py-xxs px-xs text-teal text-s font-bold mb-xs rounded">
              {store.promotion.description}
            </div>
          )}

          <div className="flex items-center gap-xxs text-s">
            <div className="flex items-center gap-xxs text-warning">
              <StarIcon size={16} color="currentColor" />
              <span className="text-text-secondary font-bold">
                {store.rating.toFixed(1)} de 5
              </span>
              <ArrowRightIcon size={9} color="var(--color-neutral-600)" />
            </div>
            <span className="text-text-secondary">•</span>
            <span className="text-success text-xs font-bold">
              fecha às {store.closingTime}
            </span>
          </div>
        </div>

        {!store.isOpen && (
          <div className="bg-destructive text-white px-s py-xxs rounded-s text-xs font-bold">
            FECHADO
          </div>
        )}
      </div>

      <div className="text-text-secondary font-bold text-xs">
        pedido mínimo: {formatPrice(store.minimumOrder)}
      </div>
    </div>
  );
}
