"use client";

import { RadioGroup as ShadcnRadioGroup } from "@/components/ui/radio-group";
import { GroupHeader } from "./group-header";
import { RadioOption, type RadioOptionData } from "./radio-option";

export interface RadioGroupProps {
  options: RadioOptionData[];
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  className?: string;
  required?: boolean;
  title?: string;
  subtitle?: string;
}

export function RadioGroup({
  options,
  value,
  onValueChange,
  name,
  className = "",
  required = false,
  title,
  subtitle,
}: RadioGroupProps) {
  return (
    <div className={`space-y-m ${className}`}>
      <GroupHeader title={title} subtitle={subtitle} required={required} />

      <ShadcnRadioGroup value={value} onValueChange={onValueChange} name={name}>
        {options.map((option) => (
          <RadioOption key={option.value} option={option} name={name} />
        ))}
      </ShadcnRadioGroup>
    </div>
  );
}

export default RadioGroup;

export type { RadioOptionData as RadioOption };
export { RadioGroupItem } from "@/components/ui/radio-group";
export { Label } from "@/components/ui/label";
