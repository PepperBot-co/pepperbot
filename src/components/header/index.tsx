import useFlowStore, { flowSelector } from "@pb/store/flow-builder.store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { shallow } from "zustand/shallow";

const themeOptions = [
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

const Header: React.FC = () => {
  const [theme, setTheme] = useState("");
  const { updateFlowMode, flowMode } = useFlowStore(flowSelector, shallow);
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
            id="theme-select"
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
