import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";

const BAR_GRADIENTS = [
  "from-brand-500 to-rose-400",
  "from-sky-500 to-blue-400",
  "from-violet-500 to-fuchsia-400",
];

const MIN_BAR_WIDTH = 16;

export default function Education() {
  const minYear = Math.min(...education.map((edu) => edu.startYear));
  const maxYear = Math.max(...education.map((edu) => edu.endYear ?? edu.startYear));
  const yearSpan = Math.max(maxYear - minYear, 1);
  const years = Array.from({ length: yearSpan + 1 }, (_, i) => minYear + i);

  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden bg-[#722F37]"
      aria-label="Education"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-rose-400 opacity-20 blur-[110px] animate-blob" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-amber-300 opacity-15 blur-[110px] animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-400 opacity-15 blur-[110px] animate-blob [animation-delay:4s]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          description="My academic journey and the milestones along the way."
          inverted
        />

        <div className="rounded-3xl border border-white/10 bg-white/95 p-8 shadow-2xl shadow-purple-950/40 backdrop-blur sm:p-10">
          {/* Year axis */}
          <div className="relative mb-14">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700 sm:text-base dark:text-slate-300">
              {years.map((year) => (
                <span key={year}>{year}</span>
              ))}
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-gradient-to-r from-sky-400 via-brand-400 to-rose-400" />
          </div>

          {/* Timeline entries */}
          <div className="space-y-10">
            {education.map((edu, index) => {
              const barStart = ((edu.startYear - minYear) / yearSpan) * 100;
              const rawEnd = (((edu.endYear ?? maxYear) - minYear) / yearSpan) * 100;
              const barWidth = Math.max(rawEnd - barStart, MIN_BAR_WIDTH);
              const barLeft = Math.min(barStart, 100 - barWidth);
              const gradient = BAR_GRADIENTS[index % BAR_GRADIENTS.length];
              const label = `${edu.startYear} – ${edu.endYear ?? "Present"}`;

              return (
                <div key={edu.id}>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 sm:text-base dark:text-slate-400">
                    {edu.institution}
                  </p>

                  <div className="relative mt-4 h-11 w-full overflow-hidden rounded-full bg-slate-100 sm:h-12 dark:bg-slate-900">
                    <div
                      className={`absolute inset-y-0 flex items-center justify-center rounded-full bg-gradient-to-r px-4 text-sm font-semibold whitespace-nowrap text-white shadow-md sm:text-base ${gradient}`}
                      style={{ left: `${barLeft}%`, width: `${barWidth}%` }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
