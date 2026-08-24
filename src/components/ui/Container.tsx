import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({ className = "", children, ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-10 ${className}`} {...props}>
      {children}
    </div>
  );
}
