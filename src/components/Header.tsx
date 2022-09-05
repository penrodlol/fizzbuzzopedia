import MoonIcon from '@svg/moon.svg';
import SunIcon from '@svg/sun.svg';
import Route from 'next/link';
import { ReactNode, useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEMES: Record<Theme, ReactNode> = {
  light: <MoonIcon />,
  dark: <SunIcon />,
};

export const Header = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(localStorage.getItem('theme') as Theme), []);

  const toggle = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
  }, [theme]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-2">
      <nav className="py-4 px-fluid-4 max-w-screen-2xl mx-auto my-0">
        <ul className="flex items-center justify-between text-xl">
          <li
            className="text-fluid-4 font-extrabold text-transparent bg-clip-text
                       bg-gradient-to-r from-brand-1 to-brand-2"
          >
            <Route href="/" passHref>
              Fizzbuzzopedia
            </Route>
          </li>
          <li className="w-9 h-9 text-brand-2">
            <button onClick={toggle}>{theme && THEMES[theme]}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
