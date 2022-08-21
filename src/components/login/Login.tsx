import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { resetUser, setUser } from '../../user/domain/user/userSlice';
import { UserModel } from '../../user/domain/user/userModel';
import './Login.css';

export default function Login() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const payload: UserModel = {
      id: 1,
      name: 'John Doe',
      email: 'omar@omar.com',
      role: 'admin',
    };
    dispatch(setUser(payload));
  };

  const handleReset = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitted(false);
    dispatch(resetUser());
  };

  return (
    <main className="container">
      <article className="grid">
        <div>
          <hgroup>
            <h1>Login</h1>
            <h2>Ingresá tus credenciales</h2>
          </hgroup>
          <form onSubmit={handleLogin}>
            <input type="text" name="login" placeholder="E-mail" aria-label="Login" autoComplete="nickname" required />
            <input type="password" name="password" placeholder="Password" aria-label="Password" autoComplete="current-password" required />
            <fieldset>
              <label htmlFor="remember">
                <input type="checkbox" role="switch" id="remember" name="remember" />
                Recordarme
              </label>
            </fieldset>
            <button type="submit" disabled={submitted} className="contrast">Login</button>
            <button type="reset" className="contrast" onClick={handleReset}>Reset</button>
          </form>
          <h3>{user.name}</h3>

        </div>
        <div></div>
      </article>
    </main>
  );
};
