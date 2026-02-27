"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="h-10 w-10 rounded-full border border-slate-200 bg-white/70 text-xs uppercase text-slate-500 shadow-sm transition dark:border-slate-700 dark:bg-slate-900/70"
        aria-label="Toggle theme"
      />
    );
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
      aria-label="Toggle theme"
    >
      <span className="text-[10px]">{isDark ? "Dark" : "Light"}</span>
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white dark:bg-slate-100 dark:text-slate-900">
        {isDark ? "M" : "S"}
      </span>
    </button>
  );
}
