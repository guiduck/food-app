import { Label } from "@/components/ui/label";
import { AddIcon, SubtractIcon, DolarSignIcon, TrashCanIcon } from "../Icon";
import { OptionPrice } from "../RadioGroup/option-price";

export interface QuantityOptionData {
  value: string;
  label?: string;
  price?: string;
  originalPrice?: string;
  description?: string;
  disabled?: boolean;
  hasPromotion?: boolean;
  id?: string;
  defaultQuantity?: number;
  maxQuantity?: number;
}

interface QuantityOptionProps {
  option: QuantityOptionData;
  quantity: number;
  onQuantityChange?: (quantity: number) => void;
  name?: string;
}

export function QuantityOption({
  option,
  quantity,
  onQuantityChange,
  name,
}: QuantityOptionProps) {
  const optionId = option.id ?? `${name}-${option.value}`;
  const maxQuantity = option.maxQuantity ?? 10;

  const handleDecrease = () => {
    onQuantityChange?.(Math.max(quantity - 1, 0));
  };

  const handleIncrease = () => {
    onQuantityChange?.(Math.min(quantity + 1, maxQuantity));
  };

  const renderDescription = () => {
    if (!option.description) return null;
    return (
      <span className="block text-xs text-text-secondary mt-xxs">
        ({option.description})
      </span>
    );
  };

  return (
    <div className="flex items-center justify-between h-xl">
      <div className="flex items-center gap-[4.5px] flex-1">
        <div className="flex items-center gap-[4px]">
          <div className="size-7 flex items-center justify-center">
            <button
              onClick={handleDecrease}
              disabled={quantity === 0 || option.disabled}
              className={`size-l rounded-full flex items-center justify-center transition-colors ${
                quantity === 0 || option.disabled
                  ? "text-neutral-400 bg-neutral-100 cursor-not-allowed"
                  : "text-teal hover:bg-teal hover:text-white"
              }`}
              aria-label={`Diminuir quantidade de ${option.label}`}
            >
              {quantity === 1 ? (
                <TrashCanIcon color="currentColor" />
              ) : (
                <SubtractIcon color="currentColor" />
              )}
            </button>
          </div>

          <span className="size-7 text-m font-medium text-text-primary text-center">
            {quantity}
          </span>

          <div className="size-7 flex items-center justify-center">
            <button
              onClick={handleIncrease}
              disabled={quantity >= maxQuantity || option.disabled}
              className={`size-l rounded-full flex items-center justify-center transition-colors ${
                quantity >= maxQuantity || option.disabled
                  ? "text-neutral-300 cursor-not-allowed"
                  : "text-teal hover:bg-teal hover:text-white"
              }`}
              aria-label={`Aumentar quantidade de ${option.label}`}
            >
              <AddIcon color="currentColor" />
            </button>
          </div>
        </div>

        <Label
          htmlFor={optionId}
          className={`text-s flex-1 ${option.disabled ? "opacity-50" : ""}`}
        >
          <span className="flex items-center gap-xs">
            <span className="font-normal text-text-secondary">
              {option.label}
            </span>
            {option.hasPromotion && (
              <span className="text-success">
                <DolarSignIcon size={18} color="currentColor" />
              </span>
            )}
          </span>
          {renderDescription()}
        </Label>
      </div>

      <div className="flex items-center gap-m">
        <OptionPrice
          price={option.price}
          originalPrice={option.originalPrice}
          hasPromotion={option.hasPromotion}
        />
      </div>
    </div>
  );
}
