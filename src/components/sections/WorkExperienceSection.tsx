import { Building2, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolioData";

export default function WorkExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 px-4 py-20 md:py-24"
      aria-label="Work Experience"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            // eyebrow="Experience"
            title="Work Experience"
            // description="Delivering measurable outcomes across AI products, fintech workflows, and full-stack engineering systems."
          />
        </Reveal>

        <div className="relative mt-12 space-y-6 before:absolute before:bottom-2 before:left-4 before:top-2 before:w-px before:bg-gradient-to-b before:from-cyan-400/40 before:to-transparent md:before:left-6">
          {experience.map((item, index) => (
            <Reveal
              key={`${item.company}-${item.role}`}
              delay={index * 0.08}
              className="relative ml-9 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_14px_50px_rgba(8,14,37,0.42)] backdrop-blur-xl md:ml-14 md:p-7"
            >
              <span className="absolute -left-[2.7rem] top-7 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/35 bg-slate-950 text-cyan-200 md:-left-[3.5rem]">
                <Building2 className="h-4 w-4" />
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-slate-100">{item.company}</h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                  {item.role}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-300 md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
