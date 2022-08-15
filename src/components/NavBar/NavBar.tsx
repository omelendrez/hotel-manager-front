/* eslint-disable jsx-a11y/role-supports-aria-props */
import { useContext } from "react";
import ThemeContext from "../../context/theme-provider";

export default function NavBar() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <nav className="container-fluid">
      <ul>
        <li><a href="./" className="contrast" onClick={(e) => e.preventDefault()}><strong>Hotel Manager</strong></a></li>
      </ul>
      <ul>
        <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" className="secondary">Examples</summary>
            <ul role="listbox">
              <li><a href="../preview/">Preview</a></li>
              <li><a href="../preview-rtl/">Right-to-left</a></li>
              <li><a href="../classless/">Class-less</a></li>
              <li><a href="../basic-template/">Basic template</a></li>
              <li><a href="../company/">Company</a></li>
              <li><a href="../google-amp/">Google Amp</a></li>
              <li><a href="../sign-in/">Sign in</a></li>
              <li><a href="../bootstrap-grid/">Bootstrap grid</a></li>
            </ul>
          </details>
        </li>
        <li>
          <label htmlFor="theme">
            <span className={`material-icons`}>
              {theme === 'dark' ? 'sunny' : 'bedtime'}
              <input type="checkbox" id="theme" role="switch" onChange={toggle}></input>
            </span>
          </label>
        </li>
      </ul>
    </nav>
  );
}
