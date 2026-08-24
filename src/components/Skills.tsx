import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-slate-50 dark:bg-slate-900/40"
      aria-label="Skills"
    >
      <Container>
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills"
          description="Technologies and tools I've worked with throughout my studies and personal projects."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <Card key={category.id} className="p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
