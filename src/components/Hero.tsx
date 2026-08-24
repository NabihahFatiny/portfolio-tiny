import Container from "@/components/ui/Container";
import { GithubIcon, LinkedInIcon, TwitterIcon, DownloadIcon, MapPinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 sm:pt-40"
      aria-label="Home"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-200 opacity-40 blur-3xl animate-blob dark:bg-brand-900 dark:opacity-30" />
        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-cyan-200 opacity-40 blur-3xl animate-blob [animation-delay:2s] dark:bg-cyan-900 dark:opacity-20" />
      </div>

      <Container className="pb-20 sm:pb-28">
        <div className="flex flex-col items-center text-center">
          <span className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to Junior Software Engineer roles
          </span>

          <h1 className="animate-fade-up [animation-delay:0.05s] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="animate-fade-up [animation-delay:0.1s] mt-4 text-xl font-semibold text-slate-700 dark:text-slate-300">
            {profile.role}
          </p>

          <p className="animate-fade-up [animation-delay:0.15s] mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.summary}
          </p>

          <div className="animate-fade-up [animation-delay:0.2s] mt-3 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <MapPinIcon className="h-4 w-4" />
            {profile.location}
          </div>

          <div className="animate-fade-up [animation-delay:0.25s] mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#connect"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-md dark:bg-white dark:text-slate-900 dark:hover:bg-brand-400"
            >
              Let&apos;s Connect
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-400"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="animate-fade-up [animation-delay:0.3s] mt-8 flex items-center gap-5">
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
        </div>
      </Container>
    </section>
  );
}
