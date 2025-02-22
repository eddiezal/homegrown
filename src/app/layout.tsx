// src/app/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export const metadata = {
  title: "Home-Grown",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body text-gray-800 bg-neutralBg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
