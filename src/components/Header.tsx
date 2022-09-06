import GithubIcon from '@svg/github.svg';
import MoonIcon from '@svg/moon.svg';
import SunIcon from '@svg/sun.svg';
import Route from 'next/link';
import { ReactNode, useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEMES: Record<Theme, ReactNode> = {
  light: <MoonIcon className="w-9 h-9" />,
  dark: <SunIcon className="w-9 h-9" />,
};

export const Header = () => {
  const [theme, setTheme] = useState<Theme>('light');

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
        <ul className="flex items-center gap-8 text-xl">
          <li>
            <Route href="/" passHref>
              <a
                aria-label="Home"
                className="rounded-md text-fluid-4 font-extrabold text-transparent bg-clip-text
                           bg-gradient-to-r from-brand-1 to-brand-2"
              >
                Fizzbuzzopedia
              </a>
            </Route>
          </li>
          <li className="ml-auto">
            <a
              href={process.env.REPO}
              rel="nofollow noopener noreferrer"
              target="_blank"
              aria-label="Github repository"
            >
              <GithubIcon
                className="w-7 h-7 fill-brand-2"
                aria-hidden
                focusable="false"
              />
            </a>
          </li>
          <li className="flex text-brand-2 translate-y-0.5">
            <button className="rounded-md" onClick={toggle}>
              {THEMES[theme]}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
