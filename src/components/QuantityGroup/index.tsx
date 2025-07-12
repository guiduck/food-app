"use client";

import { GroupHeader } from "../RadioGroup/group-header";
import { QuantityOption, type QuantityOptionData } from "./quantity-option";

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

export function QuantityGroup({
  options,
  quantities,
  onQuantityChange,
  name,
  className = "",
  required = false,
  title,
  subtitle,
}: QuantityGroupProps) {
  return (
    <div className={`space-y-m ${className}`}>
      <GroupHeader title={title} subtitle={subtitle} required={required} />

      <div className="space-y-s">
        {options.map((option) => (
          <QuantityOption
            key={option.value}
            option={option}
            quantity={quantities[option.value] ?? option.defaultQuantity ?? 0}
            onQuantityChange={(quantity: number) =>
              onQuantityChange?.(option.value, quantity)
            }
            name={name}
          />
        ))}
      </div>
    </div>
  );
}

export default QuantityGroup;

export type { QuantityOptionData as QuantityOption };
