// src/ui/Button.tsx
"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  let baseStyles = "font-body font-semibold rounded px-6 py-2 transition";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-primary text-white hover:bg-green-700";
      break;
    case "secondary":
      variantStyles = "bg-gray-300 text-black hover:bg-gray-400";
      break;
    case "accent":
      variantStyles = "bg-accent text-black hover:brightness-110";
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
