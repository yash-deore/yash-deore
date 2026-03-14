import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from './Icons';

export default function Header({ name, dark, toggle }) {
  return (
    <header className="flex items-center justify-between pt-8 animate-fade-up delay-1">
      <Link
        to="/"
        className="font-semibold text-[15px] text-zinc-900 dark:text-zinc-100 tracking-tight hover:opacity-80 transition-opacity"
      >
        {name}
      </Link>
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-5">
          <NavLink href="/#projects">projects</NavLink>
          <NavLink href="/#experience">experience</NavLink>
          <NavLink href="/#blog">blog</NavLink>
          <NavLink href="/#writing">writing</NavLink>
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-600 dark:hover:text-zinc-300 transition-all"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-[13px] text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
    >
      {children}
    </a>
  );
}
