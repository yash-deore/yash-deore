export default function Experience({ items }) {
  return (
    <section id="experience" className="py-10 animate-fade-up delay-4">
      <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div
            key={item.company}
            className="grid grid-cols-[110px_1fr] gap-6 max-sm:grid-cols-1 max-sm:gap-1"
          >
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 pt-0.5">
              {item.date}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {item.role}
              </h3>
              <p className="text-[13px] text-zinc-400 dark:text-zinc-500">
                {item.company}
              </p>
              <p className="text-[13px] text-zinc-500 dark:text-zinc-500 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
