type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-12 flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}
