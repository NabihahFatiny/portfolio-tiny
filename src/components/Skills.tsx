import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import { skillIcons, DEFAULT_SKILL_ICON } from "@/data/skillIcons";

const allSkills = skills.flatMap((category) => category.skills);

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding overflow-hidden bg-brand-50"
      aria-label="Skills"
    >
      <Container>
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical Skills & Technologies"
          description="Technologies and tools I use for development, design, and delivery."
          align="center"
        />
      </Container>

      <div className="group relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-50 to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-6 py-4 group-hover:[animation-play-state:paused]">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <div
              key={`${skill}-${i}`}
              className="flex flex-shrink-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-7 py-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-3xl dark:bg-brand-950">
                {skillIcons[skill] ?? DEFAULT_SKILL_ICON}
              </span>
              <span className="whitespace-nowrap text-lg font-semibold text-slate-800 dark:text-slate-200">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
