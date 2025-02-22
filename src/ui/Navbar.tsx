// src/ui/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary text-white flex items-center justify-between px-6 py-4">
      <div className="font-bold text-xl">Home-Grown</div>
      <ul className="space-x-6 hidden md:flex">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="md:hidden">
        {/* Mobile menu icon or a separate component */}
        <button aria-label="Open menu">☰</button>
      </div>
    </nav>
  );
}
