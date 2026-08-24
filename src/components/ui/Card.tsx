import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
