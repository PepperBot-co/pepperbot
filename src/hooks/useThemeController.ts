import type { ThemeOptions } from "@pb/types";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const themeOptions: ThemeOptions = [
  { value: "", label: "Default" },
  { value: "acid", label: "Acid" },
  { value: "aqua", label: "Aqua" },
  { value: "autumn", label: "Autumn" },
  { value: "black", label: "Black" },
  { value: "bumblebee", label: "Bumblebee" },
  { value: "business", label: "Business" },
  { value: "cmyk", label: "Cmyk" },
  { value: "coffee", label: "Coffee" },
  { value: "corporate", label: "Corporate" },
  { value: "cupcake", label: "Cupcake" },
  { value: "cyberpunk", label: "Cyberpunk" },
  { value: "dark", label: "Dark" },
  { value: "dracula", label: "Dracula" },
  { value: "emerald", label: "Emerald" },
  { value: "fantasy", label: "Fantasy" },
  { value: "forest", label: "Forest" },
  { value: "garden", label: "Garden" },
  { value: "halloween", label: "Halloween" },
  { value: "lemonade", label: "Lemonade" },
  { value: "light", label: "Light" },
  { value: "lofi", label: "Lofi" },
  { value: "luxury", label: "Luxury" },
  { value: "night", label: "Night" },
  { value: "pastel", label: "Pastel" },
  { value: "retro", label: "Retro" },
  { value: "synthwave", label: "Synthwave" },
  { value: "valentine", label: "Valentine" },
  { value: "winter", label: "Winter" },
  { value: "wireframe", label: "Wireframe" },
];

function useThemeController() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme || "");
    }

    return themeChange(false);
  }, []);

  const handleThemeChange = (themeValue = "") => {
    setTheme(themeValue);
  };

  return { theme, themeOptions, setTheme: handleThemeChange };
}

export default useThemeController;
