import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BriefcaseIcon, MapPinIcon } from "@/components/ui/Icons";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-brand-50 dark:bg-slate-950"
      aria-label="Experience"
    >
      <Container>
        <SectionHeading
          eyebrow="Background"
          title="Experience"
          description="Internships where I applied what I learned to real projects and real users."
        />

        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 via-rose-100 to-brand-50 p-2.5 shadow-md shadow-brand-200/60 sm:grid-cols-[30%_1fr] dark:from-slate-900 dark:via-slate-900 dark:to-slate-900"
            >
              <div className="relative min-h-[140px] w-full overflow-hidden rounded-xl bg-white sm:min-h-[160px]">
                {exp.image ? (
                  <Image
                    src={exp.image}
                    alt={`${exp.role} at ${exp.company}`}
                    fill
                    sizes="(min-width: 640px) 300px, 90vw"
                    className="object-contain p-6"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full min-h-[140px] w-full items-center justify-center bg-gradient-to-br from-brand-500 to-rose-400 sm:min-h-[160px]">
                    <BriefcaseIcon className="h-8 w-8 text-white/70" />
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-6">
                <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl dark:text-white">
                  {exp.role}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
                  {exp.company}
                </p>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <span>{exp.period}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPinIcon className="h-3 w-3" />
                    {exp.location}
                  </span>
                </p>

                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
