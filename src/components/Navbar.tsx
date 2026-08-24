"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#FFB6C1] transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <Container className="flex h-24 items-center justify-between">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-white"
        >
          Nabihah Fatiny
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-slate-700 md:hidden dark:text-slate-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-slate-200 bg-[#FFB6C1] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
