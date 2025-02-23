import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string; // e.g. "text-white", "text-gray-900"
  className?: string;
};

export default function Heading({
  children,
  level = 2,
  color = "text-gray-900",
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  let size = "text-2xl";
  if (level === 1) size = "text-4xl";
  else if (level === 3) size = "text-xl";
  else if (level === 4) size = "text-lg";

  return (
    <Tag className={`font-heading ${size} ${color} ${className}`}>
      {children}
    </Tag>
  );
}
