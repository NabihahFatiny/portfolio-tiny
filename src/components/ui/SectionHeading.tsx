type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use on sections with a dark background so the text stays readable. */
  inverted?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const eyebrowColor = inverted ? "text-brand-300" : "text-brand-600";
  const titleColor = inverted ? "text-white" : "text-slate-900";
  const descriptionColor = inverted ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`mb-14 flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className={`text-4xl font-bold uppercase tracking-widest sm:text-5xl ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-4xl font-bold tracking-tight sm:text-5xl ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`max-w-2xl text-lg ${descriptionColor}`}>{description}</p>
      )}
    </div>
  );
}
