import useThemeController from "@pb/hooks/useThemeController";
import useFlowStore, { flowSelector } from "@pb/store/flow-builder.store";
import Link from "next/link";
import { shallow } from "zustand/shallow";

const Header: React.FC = () => {
  const { updateFlowMode, flowMode } = useFlowStore(flowSelector, shallow);
  const showChat = flowMode === 1;
  const { theme, themeOptions, setTheme } = useThemeController();

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
            onChange={(event) => setTheme(event.target.value)}
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
