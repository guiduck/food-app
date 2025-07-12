"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface SimpleAccordionProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function SimpleAccordion({
  title,
  description,
  children,
  className = "",
}: SimpleAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion
      type="single"
      value={isOpen ? "item-1" : ""}
      className={cn("", className)}
    >
      <AccordionItem value="item-1" className="border-b border-border">
        <AccordionTrigger
          onClick={() => setIsOpen(!isOpen)}
          className="text-m px-m pr-s py-s font-medium text-text-primary justify-between hover:no-underline [&[data-state=open]>svg]:rotate-180"
        >
          <div className="flex flex-col gap-[4px]">
            <p className="text-neutral-700 font-bold leading-[22px] text-m">
              {title}
            </p>
            {description && (
              <span className="text-xs font-semibold text-text-secondary">
                {description}
              </span>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-l pr-m pb-1 pt-0">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SimpleAccordion;
