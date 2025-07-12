"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeDebugger() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [htmlClass, setHtmlClass] = useState("");

  useEffect(() => {
    setMounted(true);

    const updateHtmlClass = () => {
      setHtmlClass(document.documentElement.className);
    };

    updateHtmlClass();
    const observer = new MutationObserver(updateHtmlClass);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [theme]);

  if (!mounted) {
    return <div>Loading theme...</div>;
  }

  return (
    <div className="bg-card border border-border rounded-m p-m shadow-lg z-50">
      <div className="flex justify-between">
        <div className="space-y-xs text-s">
          <h3 className="font-bold text-l text-text-primary mb-s">
            Theme Debug
          </h3>
          <div>
            Current theme:{" "}
            <span className="font-mono text-primary">{theme}</span>
          </div>
          <div>
            Resolved theme:{" "}
            <span className="font-mono text-primary">{resolvedTheme}</span>
          </div>
          <div>
            HTML class:{" "}
            <span className="font-mono text-teal">{htmlClass || "light"}</span>
          </div>
          <div className="text-xs text-text-secondary">
            {theme === resolvedTheme
              ? "✅✅✅ temas iguais"
              : "⚠️⚠️⚠️ temas errados"}
          </div>
        </div>

        <div className="space-y-xxs">
          <div className="flex gap-xs">
            <button
              onClick={() => setTheme("light")}
              className={`px-s py-xs rounded-s text-xs transition-colors ${
                theme === "light"
                  ? "bg-primary text-primary-foreground"
                  : "bg-neutral-100 text-text-primary hover:bg-neutral-400"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-s py-xs rounded-s text-xs transition-colors ${
                theme === "dark"
                  ? "bg-primary text-primary-foreground"
                  : "bg-neutral-100 text-text-primary hover:bg-neutral-400"
              }`}
            >
              Dark
            </button>
          </div>
          <div className="text-xs font-bold">CSS Variables:</div>
          <div className="text-xs">
            --color-text-primary:{" "}
            <span style={{ color: "var(--color-text-primary)" }}>■</span>
          </div>
          <div className="text-xs">
            --color-primary:{" "}
            <span
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
                padding: "2px 4px",
                borderRadius: "2px",
              }}
            >
              ■
            </span>
          </div>
          <div className="text-xs">
            --background:{" "}
            <span
              style={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                padding: "2px 4px",
                borderRadius: "2px",
              }}
            >
              ■
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
