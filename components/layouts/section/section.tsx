import React from "react";
import { cn } from "lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({
  id,
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <section id={id} className={cn(className, "py-10")} {...props}>
      {children}
    </section>
  );
};
