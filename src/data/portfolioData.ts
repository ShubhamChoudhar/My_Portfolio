export type NavItem = {
  id: string;
  label: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  bullets: string[];
  tech: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
};

export const navItems: NavItem[] = [
  // { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ai-assistant", label: "AI Assistant" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const highlights: HighlightItem[] = [
  {
    title: "Full Stack Development",
    description: "Building robust experiences from interfaces to infrastructure.",
  },
  {
    title: "Frontend Engineering",
    description: "Crafting polished, accessible, and high-performance user interfaces.",
  },
  {
    title: "Backend APIs",
    description: "Designing secure, scalable services and efficient integration layers.",
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying resilient applications with modern cloud-first workflows.",
  },
  {
    title: "Problem Solving",
    description: "Turning complex requirements into practical and elegant solutions.",
  },
  {
    title: "Scalable Architecture",
    description: "Creating maintainable systems that grow with product needs.",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Galaxy Software Solutions",
    role: "Software Developer",
    bullets: [
      "Built an AI-powered document intelligence platform to process and classify 10K+ financial documents/month, reducing manual effort by 60%.",
      "Designed and deployed backend microservices (Node.js / Spring Boot) handling 50K+ API requests/month for budgeting, payments, and AP workflows.",
      "Developed a multi-entity budgeting engine with weekly/monthly forecasting, improving financial planning accuracy by 25%.",
      "Engineered real-time financial dashboards (React + APIs) tracking burn rate, cash flow, and OPEX/CAPEX, enabling 30% faster decision-making.",
    ],
    tech: ["React", "Node.js", "Spring Boot", "Microservices", "Fintech"],
  },
  {
    company: "Seminaut Inc",
    role: "Web Developer Intern",
    bullets: [
      "Engineered scalable backend APIs handling 50K+ requests/month, improving onboarding efficiency by 35%.",
      "Optimized full-stack workflows (React + Python), reducing user interaction latency by 40% across core features.",
      "Strengthened authentication and CI/CD pipelines, decreasing deployment failures by 30% and improving release frequency by 2x.",
    ],
    tech: ["React", "Python", "REST APIs", "CI/CD", "Authentication"],
  },
  {
    company: "Primary Key Technologies",
    role: "Frontend Developer",
    bullets: [
      "Developed reusable React.js components and integrated REST APIs for ERP dashboards, improving UI performance and reducing load time by 30% while supporting 5+ cross-browser environments.",
      "Contributed to ERP module development and developer enablement, accelerating feature delivery by 25% and successfully delivering 3+ modules within project timelines.",
    ],
    tech: ["React.js", "REST APIs", "ERP Dashboards", "Performance Optimization"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Community-based Matrimonial Application",
    description:
      "A full-stack community matrimony platform built for seamless user onboarding, profile discovery, matchmaking, and secure communication.",
    highlights: [
      "Built a full-stack matrimony platform (React.js, Node.js, PostgreSQL) supporting end-to-end user flows (auth, profile creation, matchmaking, chat), onboarding 1000+ users within the initial launch phase.",
      "Designed and implemented an AI-driven matching and recommendation system based on user preferences, location, and profile attributes, improving match relevance and user engagement by 30%.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "AI Matching", "Chat"],
    githubUrl: "https://github.com/MithilaParinay/mithila-parinay",
  },
  {
    title: "Spend Hive",
    description:
      "An intelligent budgeting and expense platform that helps users track spending patterns and improve financial discipline with actionable insights.",
    highlights: [
      "Built a full-stack budgeting platform tracking 10+ financial metrics, enabling users to improve savings consistency by up to 25%.",
      "Designed a real-time expense tracking system handling 100+ entries/month, improving financial visibility and reducing overspending by 30%.",
      "Developed an AI-driven financial insights dashboard, increasing user engagement by 40% and helping users achieve savings goals 2x faster.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AI Insights", "Data Visualization"],
    liveUrl: "https://spendhive.vercel.app/",
    githubUrl: "https://github.com/ShubhamChoudhar/SpendHive",
  },
  {
    title: "Adaaah - DJ Application",
    description:
      "A modern promotional web experience for a DJ brand with immersive visuals, service highlights, and conversion-focused contact flow.",
    highlights: [
      "Delivered a performance-focused responsive interface tailored for event discovery and engagement across mobile and desktop.",
      "Implemented modern UI interactions and branded storytelling sections to improve presentation quality and user retention.",
    ],
    tech: ["React", "Responsive Design", "UI Engineering", "Performance"],
    liveUrl: "https://adaaah.netlify.app/",
    githubUrl: "https://github.com/ShubhamChoudhar/Adaaah_Website",
  },
];

export const aiAssistantKnowledge = {
  name: "Shubham Choudhary",
  title: "Software Developer / Full Stack Developer",
  elevatorPitch:
    "Shubham is a full stack software developer who builds scalable, product-focused web applications with strong emphasis on performance, reliability, and user experience.",
  strengths: [
    "Full-stack product development",
    "AI-powered application workflows",
    "Backend APIs and microservices",
    "Real-time dashboards and analytics",
    "Scalable architecture and CI/CD",
  ],
  signatures: [
    "10K+ documents/month processed via AI document intelligence",
    "50K+ API requests/month handled across production services",
    "30% to 60% measurable efficiency/performance improvements",
  ],
  preferredRoles: [
    "Software Developer",
    "Full Stack Developer",
    "Frontend Engineer",
    "Backend/API Engineer",
  ],
  keywords: [
    "react",
    "next.js",
    "typescript",
    "javascript",
    "node.js",
    "spring boot",
    "python",
    "postgresql",
    "rest api",
    "microservices",
    "ci/cd",
    "ai",
    "dashboard",
    "fintech",
    "cloud",
    "performance",
    "scalability",
    "architecture",
  ],
};

export const contactInfo = {
  email: "shubhcy99@gmail.com",
  phone: "2106600183",
  linkedin: "https://www.linkedin.com/in/shubhcy99/",
  github: "https://github.com/ShubhamChoudhar",
};
