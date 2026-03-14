export default function Skills({ items }) {
  return (
    <section className="py-10 animate-fade-up delay-5">
      <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
        Stack
      </h2>
      <div className="flex flex-wrap gap-1.5">
        {items.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-md hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
