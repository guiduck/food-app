import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DolarSignIcon } from "../Icon";
import { OptionPrice } from "./option-price";

export interface RadioOptionData {
  value: string;
  label: string;
  price?: string;
  originalPrice?: string;
  description?: string;
  disabled?: boolean;
  hasPromotion?: boolean;
  id?: string;
}

interface RadioOptionProps {
  option: RadioOptionData;
  name?: string;
}

export function RadioOption({ option, name }: RadioOptionProps) {
  const optionId = option.id || `${name}-${option.value}`;

  const renderDescription = () => {
    if (!option.description) return null;
    return (
      <span className="block text-xs text-text-secondary mt-xxs">
        {option.description}
      </span>
    );
  };

  return (
    <div className="flex items-center justify-between h-xl">
      <div className="flex items-center gap-[7px] flex-1">
        <RadioGroupItem
          value={option.value}
          id={optionId}
          disabled={option.disabled}
        />
        <Label
          htmlFor={optionId}
          className={`text-s cursor-pointer flex-1 ${
            option.disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span className="flex items-center gap-[7px]">
            {option.hasPromotion && (
              <span className="text-success">
                <DolarSignIcon size={18} />
              </span>
            )}
            <span className="font-normal text-text-secondary">
              {option.label}
            </span>
          </span>
          {renderDescription()}
        </Label>
      </div>

      <OptionPrice
        price={option.price}
        originalPrice={option.originalPrice}
        hasPromotion={option.hasPromotion}
      />
    </div>
  );
}
