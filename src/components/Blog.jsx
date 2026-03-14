import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from './Icons';

export default function Blog({ items }) {
  return (
    <section id="blog" className="py-10 animate-fade-up delay-7">
      <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
        Blog
      </h2>
      <div className="flex flex-col gap-4">
        {items.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block py-3 px-4 -mx-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                {post.title}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRightIcon />
                </span>
              </span>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 flex-shrink-0">
                {post.date}
              </span>
            </div>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-500 mt-1 leading-relaxed">
              {post.description}
            </p>
            <div className="flex gap-1.5 mt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 bg-zinc-100 dark:bg-zinc-800/60 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
