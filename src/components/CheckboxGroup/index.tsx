"use client";

import { GroupHeader } from "../RadioGroup/group-header";
import { CheckboxOption, type CheckboxOptionData } from "./checkbox-option";

export interface CheckboxGroupProps {
  options: CheckboxOptionData[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  name?: string;
  className?: string;
  required?: boolean;
  title?: string;
  subtitle?: string;
}

export function CheckboxGroup({
  options,
  value = [],
  onValueChange,
  name,
  className = "",
  required = false,
  title,
  subtitle,
}: CheckboxGroupProps) {
  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    if (!onValueChange) return;

    if (!checked) {
      onValueChange(value.filter((v) => v !== optionValue));
      return;
    }

    onValueChange([...value, optionValue]);
  };

  return (
    <div className={`space-y-m ${className}`}>
      <GroupHeader title={title} subtitle={subtitle} required={required} />

      <div className="space-y-0">
        {options.map((option) => {
          const isChecked = value.includes(option.value);

          return (
            <CheckboxOption
              key={option.value}
              option={option}
              name={name}
              isChecked={isChecked}
              onCheckedChange={(checked) =>
                handleCheckboxChange(option.value, checked)
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default CheckboxGroup;

// Re-export types for external use
export type { CheckboxOptionData as CheckboxOption };
export { Checkbox } from "@/components/ui/checkbox";
export { Label } from "@/components/ui/label";
