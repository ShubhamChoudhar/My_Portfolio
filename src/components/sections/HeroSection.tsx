"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const floatingBadges = ["Next.js", "TypeScript", "Node.js", "AWS", "Tailwind", "React"];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-28 overflow-hidden px-4 pb-20 pt-36 md:pt-40"
      aria-label="Home"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ x: [0, 24, -8, 0], y: [0, -18, 8, 0] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ x: [0, -24, 12, 0], y: [0, 16, -10, 0] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Software Developer
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
            Shubham Choudhary
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl">
              Building scalable, modern, and intelligent digital experiences.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            I develop clean, high-performance web applications and software solutions with a focus on user experience, scalability, and real-world impact.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:bg-cyan-500/10"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/shubhcy99/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ShubhamChoudhar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
              aria-label="Visit GitHub profile"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/15 bg-slate-900/65 p-5 shadow-[0_25px_80px_rgba(5,12,38,0.55)] backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <p className="ml-2 text-xs uppercase tracking-[0.2em] text-slate-400">terminal</p>
            </div>

            <div className="rounded-2xl border border-cyan-300/10 bg-slate-950/80 p-4 font-mono text-sm text-slate-300">
              <p className="text-cyan-200">$ whoami</p>
              <p className="mt-1 text-slate-100">Shubham Choudhary · Software Developer</p>
              <p className="mt-4 text-cyan-200">$ const mission =</p>
              <p className="mt-1 text-slate-300">
                &quot;Build performant products that feel effortless to use.&quot;
              </p>
              <p className="mt-4 text-cyan-200">$ stack --core</p>
              <p className="mt-1 text-slate-300">React · Next.js · TypeScript · Node.js · Cloud</p>
              <p className="mt-4 text-cyan-200">
                $ deploy --quality<span className="terminal-cursor" aria-hidden>
                  |
                </span>
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-5 left-6 right-6 flex flex-wrap justify-center gap-2 md:left-10 md:right-10">
            {floatingBadges.map((badge, index) => (
              <motion.span
                key={badge}
                className="rounded-full border border-cyan-300/25 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{
                  opacity: { duration: 0.3, delay: index * 0.08 + 0.5 },
                  y: {
                    duration: 3 + index * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
