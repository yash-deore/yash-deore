export default function Experience({ items }) {
  return (
    <section id="experience" className="py-10 animate-fade-up delay-4">
      <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
        Experience
      </h2>
      <div className="flex flex-col gap-8">
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
                {item.company}{item.location ? ` \u00b7 ${item.location}` : ''}
              </p>
              {item.bullets && (
                <ul className="mt-2 space-y-1.5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="text-[13px] text-zinc-500 dark:text-zinc-500 leading-relaxed flex gap-2">
                      <span className="text-zinc-300 dark:text-zinc-700 mt-[3px] flex-shrink-0">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.stack && (
                <p className="text-[12px] font-mono text-zinc-400 dark:text-zinc-600 mt-2">
                  {item.stack}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
