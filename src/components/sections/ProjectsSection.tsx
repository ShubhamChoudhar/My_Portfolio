import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolioData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-4 py-20 md:py-24"
      aria-label="Projects"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            // eyebrow="Projects"
            title="Featured Projects"
            // description="Selected projects focused on user impact, scalable engineering, and measurable outcomes."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_18px_60px_rgba(8,16,42,0.55)]"
            >
              <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm leading-relaxed text-slate-300 before:mr-2 before:text-cyan-300 before:content-['•']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/45 hover:text-cyan-100"
                >
                  GitHub
                  <FaGithub className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
