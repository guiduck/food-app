import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DolarSignIcon } from "../Icon";
import { OptionPrice } from "../RadioGroup/option-price";

export interface CheckboxOptionData {
  value: string;
  label: string;
  price?: string;
  originalPrice?: string;
  description?: string;
  disabled?: boolean;
  hasPromotion?: boolean;
  id?: string;
}

interface CheckboxOptionProps {
  option: CheckboxOptionData;
  name?: string;
  isChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function CheckboxOption({
  option,
  name,
  isChecked,
  onCheckedChange,
}: CheckboxOptionProps) {
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
        <Checkbox
          id={optionId}
          checked={isChecked}
          onCheckedChange={onCheckedChange}
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
