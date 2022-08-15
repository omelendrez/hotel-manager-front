import './Login.css';

export default function Login() {
  return (
    <main className="container">
      <article className="grid">
        <div>
          <hgroup>
            <h1>Login</h1>
            <h2>Ingresá tus credenciales</h2>
          </hgroup>
          <form>
            <input type="text" name="login" placeholder="E-mail" aria-label="Login" autoComplete="nickname" required />
            <input type="password" name="password" placeholder="Password" aria-label="Password" autoComplete="current-password" required />
            <fieldset>
              <label htmlFor="remember">
                <input type="checkbox" role="switch" id="remember" name="remember" />
                Recordarme
              </label>
            </fieldset>
            <button type="submit" className="contrast" onClick={(e) => e.preventDefault()}>Login</button>
          </form>
        </div>
        <div></div>
      </article>
    </main>
  );
};
