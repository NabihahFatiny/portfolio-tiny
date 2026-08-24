import Image from "next/image";
import Container from "@/components/ui/Container";
import { ArrowRightIcon, GithubIcon, MailIcon, MapPinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";

const greeting = "Hi, I'm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 sm:pt-28"
      aria-label="Home"
    >
      <Container className="pb-24 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left column — intro & CTAs */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              <span
                className="hero-type-line1 inline-block overflow-hidden whitespace-nowrap align-bottom"
                style={
                  {
                    "--l1-steps": greeting.length,
                    "--l1-width": `${greeting.length}ch`,
                  } as React.CSSProperties
                }
              >
                {greeting}
              </span>
              <br />
              <span
                className="hero-type-line2 text-gradient inline-block overflow-hidden whitespace-nowrap border-r-4 border-brand-500 align-bottom"
                style={
                  {
                    "--type-steps": profile.name.length,
                    "--type-width": `${profile.name.length}ch`,
                  } as React.CSSProperties
                }
              >
                {profile.name}
              </span>
            </h1>

            <p className="animate-fade-up [animation-delay:0.1s] mt-5 text-2xl font-semibold text-slate-700 dark:text-slate-300">
              {profile.role}
            </p>

            <p className="animate-fade-up [animation-delay:0.15s] mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.summary}
            </p>

            <div className="animate-fade-up [animation-delay:0.2s] mt-4 flex items-center gap-1.5 text-base text-slate-500 dark:text-slate-400">
              <MapPinIcon className="h-4 w-4" />
              {profile.location}
            </div>

            <div className="animate-fade-up [animation-delay:0.25s] mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-brand-600 to-rose-500 px-8 py-4 text-base font-semibold text-white shadow-md shadow-brand-200 transition hover:-translate-y-0.5 hover:shadow-lg dark:shadow-none"
              >
                Let&apos;s Connect
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-violet-300 px-8 py-4 text-base font-semibold text-violet-700 transition hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-50 dark:border-violet-700 dark:text-violet-300 dark:hover:border-violet-500 dark:hover:bg-violet-950/40"
              >
                <ArrowRightIcon className="h-5 w-5" />
                View Projects
              </a>
              <a
                href="#connect"
                className="inline-flex items-center gap-2 rounded-full border-2 border-blue-300 px-8 py-4 text-base font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:border-blue-500 dark:hover:bg-blue-950/40"
              >
                <MailIcon className="h-5 w-5" />
                Contact Me
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-300 px-8 py-4 text-base font-semibold text-emerald-700 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/40"
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
              </a>
            </div>

            <div className="animate-fade-up [animation-delay:0.3s] mt-10 flex items-center gap-10">
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  4+
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Years
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  15+
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Projects
                </p>
              </div>
            </div>

            <div className="animate-fade-up [animation-delay:0.35s] mt-8">
              <p className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Web Dev <span className="text-brand-500">&middot;</span> Software Testing{" "}
                <span className="text-brand-500">&middot;</span> IT
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Interests
              </p>
            </div>
          </div>

          {/* Right column — profile picture */}
          <div className="animate-fade-up [animation-delay:0.1s] order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative animate-float">
              {/* Gradient ring behind the photo */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-fuchsia-500 to-rose-400 opacity-70 blur-2xl" />

              <div className="relative h-80 w-80 overflow-hidden rounded-[2.25rem] border-4 border-white shadow-2xl shadow-brand-200 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem] dark:border-slate-900 dark:shadow-brand-950">
                <Image
                  src={profile.photoUrl}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
