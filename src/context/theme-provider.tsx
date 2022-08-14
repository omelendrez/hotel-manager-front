import React, { useState, useEffect } from 'react';
import { ComponentProps } from '../@types';

const ThemeContext = React.createContext({
  theme: '',
  toggle: () => { },
});

export default ThemeContext;

const inititalTheme = window.localStorage.getItem('theme') || 'light';

export function ThemeProvider(props: ComponentProps) {
  const [theme, setTheme] = useState<string>(inititalTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (theme: string) => {
    const root = document.getElementsByTagName('html')[0];
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';
    root.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  };

  const toggle = () => {
    setTheme((theme) => (theme === 'light') ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggle,
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
