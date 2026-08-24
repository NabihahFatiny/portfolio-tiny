// A single decorative canvas shared by the whole page — a clean base with
// a few soft, low-opacity color blobs spread across the full document
// height, so every section sits on the same continuous background instead
// of separate per-section fills.
export default function SiteBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute left-[8%] top-[0%] h-[28rem] w-[28rem] rounded-full bg-brand-200 opacity-25 blur-[110px] animate-blob dark:bg-brand-700 dark:opacity-25" />
      <div className="absolute right-[-5%] top-[14%] h-[26rem] w-[26rem] rounded-full bg-rose-200 opacity-20 blur-[110px] animate-blob [animation-delay:2s] dark:bg-rose-800 dark:opacity-20" />
      <div className="absolute left-[25%] top-[38%] h-[26rem] w-[26rem] rounded-full bg-fuchsia-100 opacity-25 blur-[110px] animate-blob [animation-delay:4s] dark:bg-fuchsia-800 dark:opacity-20" />
      <div className="absolute right-[8%] top-[60%] h-[22rem] w-[22rem] rounded-full bg-sky-100 opacity-20 blur-[110px] animate-blob [animation-delay:1s] dark:bg-sky-800 dark:opacity-15" />
      <div className="absolute left-[12%] top-[84%] h-[22rem] w-[22rem] rounded-full bg-brand-100 opacity-25 blur-[110px] animate-blob [animation-delay:3s] dark:bg-brand-700 dark:opacity-20" />
    </div>
  );
}
