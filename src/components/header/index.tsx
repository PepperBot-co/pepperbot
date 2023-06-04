import useFlowStore from "@pb/store/flow-builder.store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const themeOptions = [
  { value: "", label: "Default" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "cupcake", label: "Cupcake" },
  { value: "bumblebee", label: "Bumblebee" },
  { value: "emerald", label: "Emerald" },
  { value: "corporate", label: "Corporate" },
  { value: "synthwave", label: "Synthwave" },
  { value: "retro", label: "Retro" },
  { value: "cyberpunk", label: "Cyberpunk" },
  { value: "valentine", label: "Valentine" },
  { value: "halloween", label: "Halloween" },
  { value: "garden", label: "Garden" },
  { value: "forest", label: "Forest" },
  { value: "aqua", label: "Aqua" },
  { value: "lofi", label: "Lofi" },
  { value: "pastel", label: "Pastel" },
  { value: "fantasy", label: "Fantasy" },
  { value: "wireframe", label: "Wireframe" },
  { value: "black", label: "Black" },
  { value: "luxury", label: "Luxury" },
  { value: "dracula", label: "Dracula" },
  { value: "cmyk", label: "Cmyk" },
  { value: "autumn", label: "Autumn" },
  { value: "business", label: "Business" },
  { value: "acid", label: "Acid" },
  { value: "lemonade", label: "Lemonade" },
  { value: "night", label: "Night" },
  { value: "coffee", label: "Coffee" },
  { value: "winter", label: "Winter" },
];

const Header: React.FC = () => {
  const [theme, setTheme] = useState("");
  const { updateFlowMode, flowMode } = useFlowStore();
  const showChat = flowMode === 1;

  useEffect(() => {
    themeChange(false);
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <div className="navbar border-b border-base-300 bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          <div className="font-title inline-flex text-lg text-primary transition-all duration-200 md:text-3xl">
            <span>Pepper</span>
            <span className="text-base-content">Bot</span>
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <select
            className="select w-full max-w-sm border-base-300 focus:outline-none"
            data-choose-theme
            value={theme}
            onChange={handleThemeChange}
          >
            <option disabled>Pick a theme</option>
            {themeOptions.map((theme) => (
              <option key={theme.value} value={theme.value}>
                {theme.label}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => updateFlowMode(showChat ? 0 : 1)}
          className={`btn mx-3 max-w-sm px-3 normal-case ${
            showChat ? "btn-primary" : "btn-ghost"
          }`}
        >
          {showChat ? "Exit Test" : "Test"}
        </button>
      </div>
    </div>
  );
};

export default Header;
