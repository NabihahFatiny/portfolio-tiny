"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from "@/components/ui/Icons";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const total = certifications.length;
  const cert = certifications[index];

  const goTo = (i: number) => setIndex(((i % total) + total) % total);

  return (
    <section id="certifications" className="section-padding bg-[#953553]" aria-label="Certifications">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Highlights my involvement in university activities and programs that contributed to my academic growth and personal development."
          align="center"
          inverted
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative" style={{ perspective: "1600px" }}>
            <div
              key={cert.id}
              className="animate-flip-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl [transform-style:preserve-3d] dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-50 dark:bg-slate-900">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(min-width: 768px) 700px, 100vw"
                  className="object-contain p-3 sm:p-6"
                  priority={index === 0}
                  unoptimized
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{cert.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
                >
                  View credentials
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous certificate"
              className="absolute left-0 top-[38%] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition hover:text-brand-600 sm:h-12 sm:w-12 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next certificate"
              className="absolute right-0 top-[38%] flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition hover:text-brand-600 sm:h-12 sm:w-12 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {certifications.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${c.title}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-brand-500" : "w-2 bg-slate-600"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-sm text-slate-400">
            {index + 1} / {total}
          </p>
        </div>
      </Container>
    </section>
  );
}
