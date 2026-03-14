export default function Writing({ items }) {
  return (
    <section id="writing" className="py-10 animate-fade-up delay-7">
      <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
        Writing
      </h2>
      <div className="flex flex-col">
        {items.map((post) => (
          <a
            key={post.title}
            href={post.url}
            className="group flex items-baseline justify-between py-2.5 border-b border-zinc-100 dark:border-zinc-800/60 first:border-t hover:pl-2 transition-all"
          >
            <span className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </span>
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 flex-shrink-0 ml-8">
              {post.year}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
