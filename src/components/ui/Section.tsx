import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClass?: string;
}

export function Section({ children, className, id, containerClass, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)} {...props}>
      <div className={cn("container mx-auto px-4 md:px-6", containerClass)}>
        {children}
      </div>
    </section>
  );
}
