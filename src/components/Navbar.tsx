"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { navLinks, profile } from "@/data/portfolio";

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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-sm backdrop-blur-md dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          {profile.avatarInitials}
          <span className="text-brand-600 dark:text-brand-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#connect"
          className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-600 md:inline-flex dark:bg-white dark:text-slate-900 dark:hover:bg-brand-400"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden dark:text-slate-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900"
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
