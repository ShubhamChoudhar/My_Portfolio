import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { contactInfo, navItems } from "@/data/portfolioData";

export default function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-12">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-950/75 p-6 backdrop-blur-xl md:p-8">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">Shubham Choudhary</h3>
            <p className="mt-2 text-sm text-slate-300">
              Software Developer focused on building scalable, intuitive, and high-impact products.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
              Quick Links
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-300/45 hover:text-cyan-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
              Social
            </h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:border-cyan-300/45 hover:text-cyan-100"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:border-cyan-300/45 hover:text-cyan-100"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-slate-400">
          © 2026 Shubham Choudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
