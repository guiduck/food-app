import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className={cn("h-1 bg-neutral-100 dark:bg-neutral-800", className)} />
  );
}
