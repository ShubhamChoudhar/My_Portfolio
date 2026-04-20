import { Download } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="scroll-mt-28 px-4 py-20 md:py-24"
      aria-label="Resume"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            // eyebrow="Resume"
            title="Resume"
            description="View my resume or download a copy for offline reference."
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_60px_rgba(7,12,34,0.5)] backdrop-blur-xl md:p-6"
        >
          <div className="mb-4 flex justify-end">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
            <iframe
              title="Shubham Choudhary Resume"
              src="/resume.pdf"
              className="h-[520px] w-full md:h-[650px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
