import Image from "next/image";
import Container from "@/components/ui/Container";
import { DownloadIcon, MapPinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 sm:pt-40"
      aria-label="Home"
    >
      <Container className="pb-24 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left column — intro & CTAs */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <h1 className="animate-fade-up text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              Hi, I&apos;m
              <br />
              <span className="text-gradient">{profile.name}</span>
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
                href="#connect"
                className="rounded-full bg-gradient-to-r from-brand-600 to-rose-500 px-8 py-4 text-base font-semibold text-white shadow-md shadow-brand-200 transition hover:-translate-y-0.5 hover:shadow-lg dark:shadow-none"
              >
                Let&apos;s Connect
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-400"
              >
                <DownloadIcon className="h-5 w-5" />
                Download Resume
              </a>
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
