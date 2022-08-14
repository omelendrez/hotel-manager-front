import { useContext } from "react";
import ThemeContext from "../../context/theme-provider";

export default function Login() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div>
      <h1>Login</h1>
      <form method="post">
        <label>Username
          <input type="text" required />
          <span></span>
        </label>
        <label>Password
          <input type="password" required />
          <span></span>
        </label>
        <div>Forgot Password?</div>
        <input type="submit" value="Login" />
        Not a member? <a href="http://localhost:3000">Signup</a>
      </form>
      <label>
        <span className={`material-icons`}>{theme === 'dark' ? 'sunny' : 'bedtime'}
          <input type="checkbox" role="switch" onChange={toggle}></input>
        </span>
      </label>
    </div>
  );
};
