import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  let baseStyles = "inline-block px-6 py-3 rounded font-semibold transition";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-primary text-white hover:bg-green-700";
      break;
    case "secondary":
      variantStyles = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case "accent":
      variantStyles = "bg-accent text-black hover:brightness-110";
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
