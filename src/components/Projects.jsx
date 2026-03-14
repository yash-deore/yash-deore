import { ArrowUpRightIcon } from './Icons';

export default function Projects({ items }) {
  return (
    <section id="projects" className="py-10 animate-fade-up delay-3">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex flex-col">
        {items.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline justify-between py-2.5 border-b border-zinc-100 dark:border-zinc-800/60 first:border-t hover:pl-2 transition-all"
          >
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
              {project.name}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRightIcon />
              </span>
            </span>
            <span className="text-[13px] text-zinc-400 dark:text-zinc-500 flex-shrink-0 ml-8 hidden sm:block">
              {project.tags.join(' \u00b7 ')}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
      {children}
    </h2>
  );
}
