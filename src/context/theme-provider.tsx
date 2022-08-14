import React, { useState, useLayoutEffect } from 'react';
import { ComponentProps } from '../@types';

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => { },
});

export default ThemeContext;


export function ThemeProvider(props: ComponentProps) {
  // keeps state of the current theme
  const [dark, setDark] = useState<boolean>(false);

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme: string = window.localStorage.getItem('darkTheme') || '';

    if (lastTheme === 'true') {
      setDark(true);
      applyTheme(darkTheme);
    } else {
      setDark(false);
      applyTheme(lightTheme);
    }
    // if state changes, repaints the app
  }, [dark]);

  // rewrites set of css variablels/colors
  const applyTheme = (theme: string[]) => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  };

  const toggle = () => {
    console.log('toggle');
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';

    setDark(!dark);
    window.localStorage.setItem('darkTheme', !dark ? 'true' : 'false');
  };

  return (
    <ThemeContext.Provider value={{
      dark,
      toggle,
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

// styles
const lightTheme = [
  '--border: rgba(0,0,0,.2)',
  '--header: rgba(0,0,0,.7)',
  '--main: #1976d2',
  '--mainHover: #2196f3',
  '--textAlt: #fff',
  '--text: rgba(0, 0, 0, .8)',
  '--inactive: rgba(0,0,0,.3)',
  '--background: rgba(255,255,255,.9)',
];

const darkTheme = [
  '--border: rgba(255,255,255,.2)',
  '--header: rgba(255,255,255,.7)',
  '--main: #8e24aa',
  '--mainHover: #ab47bc',
  '--text: rgba(255, 255, 255, .8)',
  '--textAlt: #fff',
  '--inactive: rgba(255,255,255,.3)',
  '--background: rgba(0,0,0,.9)',
];
