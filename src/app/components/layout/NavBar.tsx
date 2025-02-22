import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary text-white">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Home-Grown Logo" className="w-8 h-8" />
        <span className="font-bold">Home-Grown</span>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Placeholder for a mobile hamburger menu */}
      <div className="md:hidden">
        <button aria-label="Open Menu">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
