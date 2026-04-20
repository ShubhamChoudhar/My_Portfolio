import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import AIAssistantSection from "@/components/sections/AIAssistantSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import SiteFooter from "@/components/sections/SiteFooter";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";

export default function HomePage() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-100 focus:px-3 focus:py-2 focus:text-slate-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <AIAssistantSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
