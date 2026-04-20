"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/data/portfolioData";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-xl shadow-[0_10px_60px_rgba(8,15,40,0.45)] md:px-6">
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/shubham-logo.png"
            alt="Shubham Choudhary logo"
            width={36}
            height={36}
            className="rounded-lg border border-cyan-300/20"
            priority
          />
          <span className="font-semibold tracking-wide text-slate-100 transition-colors group-hover:text-cyan-200">
            Shubham Choudhary
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-3 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  isActive
                    ? "bg-cyan-400/15 text-cyan-200"
                    : "text-slate-300 hover:bg-white/5 hover:text-slate-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:inline-flex"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-slate-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-slate-950/90 p-3 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                    activeSection === item.id
                      ? "bg-cyan-400/15 text-cyan-200"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-2 text-sm font-semibold text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
