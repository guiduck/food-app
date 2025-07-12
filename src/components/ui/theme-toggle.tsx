"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  small?: boolean;
}

export function ThemeToggle({ small = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      data-testid="theme-toggle"
      variant="ghost"
      onClick={toggle}
      className={cn(
        "transition",
        small
          ? "p-2 text-white bg-zinc-800 hover:bg-neutral-700 dark:hover:bg-neutral-100 dark:text-neutral-900 rounded-full"
          : "w-full flex items-center justify-center gap-2"
      )}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      {!small && (theme === "dark" ? "Light mode" : "Dark mode")}
    </Button>
  );
}

export default ThemeToggle;
