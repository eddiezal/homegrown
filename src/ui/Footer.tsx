// src/ui/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Home-Grown</p>
        <div className="mt-2 md:mt-0 flex space-x-4 text-sm">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
