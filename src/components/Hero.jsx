import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  StackOverflowIcon,
  LeetCodeIcon,
} from './Icons';

export default function Hero({ config }) {
  const { title, subtitle, bio, social } = config;

  return (
    <section className="pt-16 pb-10 animate-fade-up delay-2">
      <h1 className="text-[28px] font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h1>
      <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-2">
        {subtitle}
      </p>
      <p className="mt-5 max-w-[540px] leading-[1.75] text-zinc-600 dark:text-zinc-400">
        {bio}
      </p>
      <div className="flex gap-2 mt-5">
        <SocialButton href={`mailto:${social.email}`} title="Email">
          <MailIcon />
        </SocialButton>
        <SocialButton href={social.github} title="GitHub">
          <GitHubIcon />
        </SocialButton>
        <SocialButton href={social.linkedin} title="LinkedIn">
          <LinkedInIcon />
        </SocialButton>
        <SocialButton href={social.stackoverflow} title="Stack Overflow">
          <StackOverflowIcon />
        </SocialButton>
        <SocialButton href={social.leetcode} title="LeetCode">
          <LeetCodeIcon />
        </SocialButton>
      </div>
    </section>
  );
}

function SocialButton({ href, title, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      title={title}
      className="flex items-center justify-center w-[34px] h-[34px] rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
    >
      {children}
    </a>
  );
}
