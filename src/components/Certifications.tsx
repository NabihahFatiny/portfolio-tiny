import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { AwardIcon, ExternalLinkIcon } from "@/components/ui/Icons";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" aria-label="Certifications">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Courses and certificates I've completed to sharpen my skills beyond the classroom."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <Card key={cert.id} className="flex items-start gap-4 p-6">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                <AwardIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                  {cert.issuer} &middot; {cert.date}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
                >
                  View credential
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
