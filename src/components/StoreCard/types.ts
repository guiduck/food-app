export interface StoreCardProps {
  name: string;
  rating: number;
  deliveryFee?: number;
  imageUrl: string;
  isOpen?: boolean;
  closingTime?: string;
  className?: string;
}
