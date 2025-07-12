import { DeliveryAutoIcon, DeliveryManIcon } from "../Icon";

export default function DeliveryInfo({ deliveryFee }: { deliveryFee: number }) {
  if (deliveryFee === 0) {
    return (
      <div className="flex items-center gap-xxs text-teal-text">
        <DeliveryAutoIcon size={24} color="currentColor" />
        <span className="text-s font-bold">grátis</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-xxs text-primary-text">
      <DeliveryManIcon size={24} color="currentColor" />
      <span className="text-s font-bold">R${deliveryFee.toFixed(2)}</span>
    </div>
  );
}
