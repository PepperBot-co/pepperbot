import useThemeController from "@pb/hooks/useThemeController";
import useFlowStore, { flowSelector } from "@pb/store/flow-builder.store";
import Link from "next/link";
import { useRouter } from "next/router";
import { shallow } from "zustand/shallow";

/**
 * This function checks whether the given path follows a specific pattern.
 * Define a regular expression pattern to check the path.
 * This pattern follows these rules:
 *   - `^` denotes the start of the string.
 *   - `\/flows\/` is the literal string "/flows/". The backslashes are used to escape the forward slashes.
 *   - `[^\/]*` matches any character that is not `/` (i.e., not a segment separator) between zero and unlimited times.
 *     This ensures that there is only one segment after "/flows/".
 *   - `$` denotes the end of the string.
 * @param path {string} The path to check.
 * @returns {boolean} Returns true if the path follows the pattern, false otherwise.
 */
function isFlowPath(path: string): boolean {
  const pattern = /^\/flows\/[^\/]*$/;

  // It returns true if the path matches, false otherwise.
  return pattern.test(path);
}

const Header: React.FC = () => {
  const { updateFlowMode, flowMode } = useFlowStore(flowSelector, shallow);
  const showChat = flowMode === "Test";
  const { theme, themeOptions, setTheme } = useThemeController();
  const { asPath } = useRouter();
  const isFlowPage = isFlowPath(asPath);

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
        {isFlowPage && (
          <button
            onClick={() => updateFlowMode(showChat ? "Edit" : "Test")}
            className={`btn mx-3 max-w-sm px-3 normal-case ${
              showChat ? "btn-primary" : "btn-ghost"
            }`}
          >
            {showChat ? "Exit Test" : "Test"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
