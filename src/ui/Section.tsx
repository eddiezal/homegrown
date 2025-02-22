// src/ui/Section.tsx
"use client";

import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  bgColor?: string; // e.g., "bg-neutralBg" or "bg-primary"
  className?: string;
};

export default function Section({
  children,
  bgColor = "bg-neutralBg",
  className = "",
}: SectionProps) {
  return (
    <section className={`${bgColor} py-16 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
