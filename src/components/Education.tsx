import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { GraduationCapIcon } from "@/components/ui/Icons";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-padding" aria-label="Education">
      <Container>
        <SectionHeading
          eyebrow="Background"
          title="Education"
          description="My academic journey and the milestones along the way."
        />

        <div className="relative space-y-6 border-l border-slate-200 pl-8 dark:border-slate-800">
          {education.map((edu) => (
            <div key={edu.id} className="relative">
              <span className="absolute -left-[2.55rem] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white ring-4 ring-white dark:ring-slate-950">
                <GraduationCapIcon className="h-4 w-4" />
              </span>
              <Card className="p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-left text-sm text-slate-500 sm:text-right dark:text-slate-400">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {edu.description}
                </p>

                <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  GPA: {edu.gpa}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {edu.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
