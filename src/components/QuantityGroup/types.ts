export interface QuantityOptionData {
  value: string;
  label: string;
  price?: string;
  originalPrice?: string;
  description?: string;
  disabled?: boolean;
  hasPromotion?: boolean;
  id?: string;
  maxQuantity?: number;
}

export interface QuantityGroupProps {
  options: QuantityOptionData[];
  quantities: Record<string, number>;
  onQuantityChange?: (value: string, quantity: number) => void;
  name?: string;
  className?: string;
  required?: boolean;
  title?: string;
  subtitle?: string;
}
