import {
  Cloud,
  Code2,
  Lightbulb,
  Layers,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";
import { highlights } from "@/data/portfolioData";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const highlightIcons = [Code2, MonitorSmartphone, ServerCog, Cloud, Lightbulb, Layers];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-4 py-20 md:py-24"
      aria-label="About"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            // eyebrow="About"
            title="About Me"
            description="I am a Software Developer with experience building modern web applications, scalable backend systems, and user-focused digital products. I enjoy transforming complex ideas into clean, efficient, and impactful solutions. My work spans frontend development, backend APIs, cloud-based systems, and software architecture. I am passionate about building products that are not only functional, but also intuitive, performant, and visually engaging."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <Reveal className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_18px_60px_rgba(7,13,34,0.45)] backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-slate-100">What I Bring to Teams</h3>
            <p className="mt-4 leading-relaxed text-slate-300">
              I focus on building software that balances engineering excellence with product impact. From translating business requirements into architecture decisions to polishing user interactions, I care about creating systems that are dependable, scalable, and delightful.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              I enjoy collaborating across teams, iterating quickly, and delivering clean codebases that remain easy to evolve as products grow.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = highlightIcons[index];
              return (
                <Reveal
                  key={item.title}
                  delay={0.05 * index}
                  className="rounded-2xl border border-white/10 bg-slate-900/65 p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_14px_40px_rgba(6,12,34,0.45)]"
                >
                  <Icon className="h-5 w-5 text-cyan-200" />
                  <h4 className="mt-4 text-base font-semibold text-slate-100">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
