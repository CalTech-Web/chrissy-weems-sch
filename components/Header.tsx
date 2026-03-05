"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Chrissy Weems" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1160px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="font-[family-name:var(--font-arizonia)] text-3xl text-teal">
          Chrissy Weems Scholarship
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`uppercase text-[13px] font-semibold tracking-wide transition-colors hover:text-teal ${
                    pathname === link.href ? "text-teal" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <ul className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 uppercase text-[13px] font-semibold tracking-wide transition-colors hover:text-teal ${
                    pathname === link.href ? "text-teal" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
