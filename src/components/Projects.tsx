import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { ExternalLinkIcon, GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-slate-50 dark:bg-slate-900/40"
      aria-label="Projects"
    >
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          description="A selection of things I've built — from university group work to personal side projects."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:bg-slate-900/90 dark:text-slate-200">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:underline dark:text-slate-300"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
