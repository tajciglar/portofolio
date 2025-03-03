"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const isDarkMode = theme === "dark";
  const toggleDarkMode = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
      aria-label="Toggle Dark Mode"
    >
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={24}
      />
    </button>
  );
};

export default Theme;