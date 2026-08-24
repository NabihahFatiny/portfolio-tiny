import Container from "@/components/ui/Container";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/ui/Icons";
import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-bold text-slate-900 dark:text-white">{profile.name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{profile.role}</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
        </div>
      </Container>

      <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-600">
        © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
