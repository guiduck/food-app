import {
  ArrowRightIcon,
  DeliveryAutoIcon,
  DeliveryManIcon,
} from "@/components/Icon";
import { StoreDetails } from "@/types/store-details";

export default function DeliveryInfo({ store }: { store: StoreDetails }) {
  const formatPrice = (price: number) =>
    `R$ ${price.toFixed(2).replace(".", ",")}`;

  const renderFee = () => {
    if (store.deliveryFee !== 0) {
      return (
        <div className="flex items-center gap-[4px] text-primary">
          <DeliveryAutoIcon size={24} color="currentColor" />
          <span className="font-bold">{formatPrice(store.deliveryFee)}</span>
          <ArrowRightIcon size={9} color="currentColor" />
        </div>
      );
    }
    return (
      <div className="flex items-center gap-[4px] text-teal">
        <DeliveryManIcon size={24} color="currentColor" />
        <span className="font-bold">grátis</span>
        <ArrowRightIcon size={9} color="currentColor" />
      </div>
    );
  };

  return (
    <div className="flex items-center gap-xxs mb-xs text-xs font-bold">
      {renderFee()}
      <span className="text-text-secondary">•</span>
      <span className="text-text-secondary">hoje, {store.deliveryTime}</span>
      <span className="text-text-secondary">•</span>
      <span className="text-text-secondary">{store.distanceFromUser}</span>
    </div>
  );
}
