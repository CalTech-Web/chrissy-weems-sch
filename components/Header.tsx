"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Chrissy Weems" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg border-b border-white/20"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="font-[family-name:var(--font-arizonia)] text-3xl text-teal">
          Chrissy Weems Scholarship
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative uppercase text-[13px] font-semibold tracking-wide transition-colors hover:text-teal ${
                pathname === link.href ? "text-teal" : "text-gray-600"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-teal after:transition-all after:duration-300 ${
                pathname === link.href ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 bg-gold hover:bg-gold-dark text-white font-semibold uppercase tracking-wide text-xs px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-80 border-b border-gray-200 shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="bg-white px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 uppercase text-[13px] font-semibold tracking-wide transition-colors hover:text-teal ${
                pathname === link.href ? "text-teal" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-block mt-2 bg-gold hover:bg-gold-dark text-white font-semibold uppercase tracking-wide text-xs px-6 py-2.5 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
