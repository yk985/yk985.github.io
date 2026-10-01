import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/** Manual light/dark override on top of prefers-color-scheme.
 *  The initial value is set by the inline script in index.html so the
 *  page never flashes the wrong theme. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "system"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      root.removeAttribute("data-theme");
      try { localStorage.removeItem("theme"); } catch (e) { /* private mode */ }
    } else {
      root.setAttribute("data-theme", theme);
      try { localStorage.setItem("theme", theme); } catch (e) { /* private mode */ }
    }
  }, [theme]);

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
