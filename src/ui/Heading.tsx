// src/ui/Heading.tsx
"use client"; // if you want interactive features or class-based states

import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;  // e.g. "text-primary"
  className?: string;
};

export default function Heading({
  children,
  level = 2,
  color = "text-primary",
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Basic sizing by heading level
  let size = "text-2xl";
  if (level === 1) size = "text-4xl";
  else if (level === 3) size = "text-xl";
  else if (level === 4) size = "text-lg";
  else if (level === 5) size = "text-base";
  else if (level === 6) size = "text-sm";

  return (
    <Tag className={`font-heading ${size} ${color} ${className}`}>
      {children}
    </Tag>
  );
}
