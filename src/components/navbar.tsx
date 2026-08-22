"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Network", href: "#network" },
  { label: "Process", href: "#process" },
  { label: "Standards", href: "#standards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#D4AF37]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="KINGMAKERS"
          width={180}
          height={64}
          className="object-contain h-20 w-auto"
          priority
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#6B6B76] hover:text-[#D4AF37] transition-colors tracking-[0.12em] uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-[#D4AF37] text-white px-6 py-2.5 text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-[#E2BE4D] transition-colors"
        >
          Get in Touch
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#1A1A1A] transition-all ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#1A1A1A] transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#D4AF37]/10 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[14px] font-medium text-[#6B6B76] hover:text-[#D4AF37] transition-colors tracking-[0.1em] uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-[#D4AF37] text-white px-6 py-3 text-[13px] font-semibold tracking-[0.1em] uppercase text-center mt-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
