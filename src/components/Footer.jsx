export default function Footer({ name }) {
  return (
    <footer className="mt-auto py-8 text-xs text-zinc-300 dark:text-zinc-800 animate-fade-up delay-8">
      &copy; {new Date().getFullYear()} {name}
    </footer>
  );
}
