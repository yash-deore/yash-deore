import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import config from '../data/config';
import blogContent from '../data/blog-content';

export default function BlogPost() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const post = config.blog.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    return (
      <div className="pt-16 pb-10 animate-fade-up">
        <Link
          to="/"
          className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        >
          &larr; Back
        </Link>
        <h1 className="text-[28px] font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100 mt-8">
          Post not found
        </h1>
      </div>
    );
  }

  return (
    <article className="pt-16 pb-10 animate-fade-up">
      <Link
        to="/"
        className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
      >
        &larr; Back
      </Link>

      <header className="mt-8 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
            {post.date}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 bg-zinc-100 dark:bg-zinc-800/60 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-[28px] font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2 leading-relaxed">
          {post.description}
        </p>
      </header>

      <div className="flex flex-col gap-5">
        {content.map((block, i) => {
          if (block.type === 'h2') {
            return (
              <h2
                key={i}
                className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight mt-3"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === 'code') {
            return (
              <pre
                key={i}
                className="font-mono text-[13px] text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 overflow-x-auto leading-relaxed"
              >
                {block.text}
              </pre>
            );
          }
          return (
            <p
              key={i}
              className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-[1.8]"
            >
              {block.text}
            </p>
          );
        })}
      </div>
    </article>
  );
}
