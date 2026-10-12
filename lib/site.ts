export const site = {
  name: "Career Craftly",
  legalName: "Career Craftly LLP",
  parent: "Flux Mind Studios",
  parentUrl: "https://www.fluxmindstudios.com/",
  parentBlurb:
    "Our parent company for client projects, digital services, and premium solutions.",
  url: "https://www.careercraftly.org",
  email: "anant@careercraftly.org",
  phoneDisplay: "+91 86400 58346",
  phoneTel: "+918640058346",
  calendly: "https://calendly.com/officialanant17/30min",
  location: "India (Remote & In-Person)",
  hours: "Mon–Fri 9AM–6PM · Sat 10AM–4PM",
  instagram: "https://www.instagram.com/career_craftly/",
  linkedin: "https://www.linkedin.com/company/107052137/",
  youtube: "https://www.youtube.com/@anantupadhyayy",
  description:
    "Career Craftly blends AI automation with career coaching, software, and digital marketing so professionals and businesses can grow with clearer execution.",
  tagline: "Where intelligent automation meets real-world execution",
} as const

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const

export const serviceTicker = [
  "AI Automation",
  "Career Coaching",
  "Resume Optimization",
  "Web Development",
  "Digital Marketing",
  "AI Agents",
  "Interview Prep",
  "Skill Development",
  "Software Solutions",
] as const

export const homeStats = [
  { value: "200+", label: "Clients served" },
  { value: "95%", label: "Project success rate" },
  { value: "20+", label: "Industry partners" },
  { value: "50+", label: "Programs delivered" },
] as const

export const portfolioStats = [
  { value: "27", label: "Projects completed and in pipeline" },
  { value: "50+", label: "Clients served" },
  { value: "72%", label: "Average impact score" },
] as const

export const trustCards = [
  {
    metric: "Real-time",
    title: "Real-time performance insights",
    body: "Stay ahead with instant analytics and actionable intelligence that guides your next move.",
  },
  {
    metric: "97% success",
    title: "AI-driven growth engine",
    body: "Make smarter decisions powered by real-time predictive data and intelligent recommendations.",
  },
  {
    metric: "Instant",
    title: "Always in sync",
    body: "Seamless collaboration with real-time team updates, keeping everyone aligned.",
  },
] as const

export const benefitChips = [
  "Smart automation",
  "Scalable systems",
  "Cost efficient",
  "Real-time insights",
  "Data-driven execution",
  "Expert mentors",
  "Proven frameworks",
] as const

export const process = [
  {
    n: "01",
    roman: "I",
    virtue: "Wisdom",
    gloss: "See the work clearly before you move.",
    title: "Discovery call",
    body: "We begin with a free consultation to understand your goals, challenges, and vision.",
  },
  {
    n: "02",
    roman: "II",
    virtue: "Justice",
    gloss: "A plan fitted to their aim, not to our vanity.",
    title: "Strategy design",
    body: "Our team crafts a personalized roadmap tailored to your specific objectives.",
  },
  {
    n: "03",
    roman: "III",
    virtue: "Courage",
    gloss: "Do the thing. Intention is not the build.",
    title: "Execution and build",
    body: "We execute the plan with precision — from tech builds to career coaching sessions.",
  },
  {
    n: "04",
    roman: "IV",
    virtue: "Temperance",
    gloss: "Measure, then continue. Do not chase noise.",
    title: "Growth and results",
    body: "We measure outcomes, iterate, and help you sustain momentum for long-term success.",
  },
] as const

export const whyPoints = [
  "Personalized 1-on-1 career and business coaching",
  "AI-powered tools that work 24/7 for your growth",
  "Dedicated team of 20+ industry experts",
  "Transparent reporting and measurable KPIs",
  "End-to-end technical and strategic support",
  "Fast turnaround without compromising quality",
] as const

export const whyFigures = [
  { value: "100%", label: "Personalized plans" },
  { value: "3x", label: "Avg. career growth" },
  { value: "24/7", label: "AI assistance" },
  { value: "4.9★", label: "Average rating" },
] as const

export const testimonials = [
  {
    quote:
      "CareerCraftly completely revamped my resume and coaching sessions were a game-changer. I landed my dream job within 6 weeks!",
    name: "Priya Sharma",
    role: "Software Engineer at TCS",
  },
  {
    quote:
      "Their AI automation solutions saved us 40+ hours a week. The team is incredibly professional and results-focused.",
    name: "Rahul Mehta",
    role: "Founder, TechStart Labs",
  },
  {
    quote:
      "From digital marketing strategy to execution, CareerCraftly's team delivered beyond our expectations. Our leads doubled in 3 months.",
    name: "Ananya Patel",
    role: "Marketing Manager",
  },
] as const

export const tools = [
  "Antigravity",
  "ClawdBot",
  "Claude",
  "Cursor",
  "Gemini",
  "GitHub Copilot",
  "React",
  "Vite",
  "Vercel",
  "Framer Motion",
  "Tailwind CSS",
] as const

export type Offering = {
  title: string
  desc: string
  perks: string[]
}

export const offerings: { technical: Offering[]; career: Offering[] } = {
  technical: [
    {
      title: "Website Development",
      desc: "Responsive, conversion-optimised websites built with modern frameworks and SEO best practices baked in from the start.",
      perks: ["Mobile-first responsive", "SEO optimised", "CMS integration", "Performance tuned"],
    },
    {
      title: "App Development",
      desc: "Cross-platform mobile and web apps architected for scale — from MVP to enterprise-grade systems.",
      perks: ["iOS & Android", "Real-time features", "Secure APIs", "Cloud-native"],
    },
    {
      title: "Software Development",
      desc: "End-to-end software solutions: architecture design, development, QA, and long-term maintenance support.",
      perks: ["Microservices", "CI/CD pipelines", "Automated testing", "DevOps ready"],
    },
    {
      title: "Digital Marketing",
      desc: "Full-funnel marketing strategy — SEO, paid media, content, and analytics to drive measurable ROI.",
      perks: ["SEO / SEM", "Social media", "Content strategy", "Analytics dashboards"],
    },
    {
      title: "AI Agents",
      desc: "Custom AI agents and automation pipelines that handle complex workflows, customer service, and data analysis 24/7.",
      perks: ["LLM integration", "Workflow automation", "Custom training", "API integration"],
    },
  ],
  career: [
    {
      title: "Career Coaching",
      desc: "1-on-1 sessions with senior coaches who have placed 200+ professionals in top-tier companies worldwide.",
      perks: ["Goal mapping", "Personalized roadmap", "Weekly check-ins", "Industry experts"],
    },
    {
      title: "Resume Optimization",
      desc: "ATS-beating, recruiter-loved resumes crafted to make you stand out in a competitive job market globally.",
      perks: ["ATS optimised", "LinkedIn overhaul", "Cover letter", "3-day turnaround"],
    },
    {
      title: "Skill Development",
      desc: "Structured training programs in in-demand skills — from data science to product management — built around your schedule.",
      perks: ["Live sessions", "Project-based", "Certificate", "Mentor access"],
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews with real feedback, company-specific prep guides, and negotiation scripts to land — and close — offers.",
      perks: ["Mock interviews", "Feedback reports", "Salary negotiation", "Offer review"],
    },
    {
      title: "AI Career Assistant",
      desc: "Your personal AI-powered career advisor, available 24/7 to answer career questions, review documents, and suggest opportunities.",
      perks: ["24/7 support", "Resume review", "Job matching", "Smart suggestions"],
    },
    {
      title: "Career Assessment",
      desc: "Science-backed assessments to map your strengths, values, and ideal career trajectories — with a detailed expert report.",
      perks: ["Psychometric tests", "Expert report", "Career mapping", "Action plan"],
    },
  ],
}

export const contactPromises = [
  "Free 30-min discovery call",
  "Response within 24 hours",
  "No commitment required",
  "Global client support",
] as const

export const serviceOptions = [
  "Website Development",
  "App Development",
  "Software Development",
  "Digital Marketing",
  "AI Agents",
  "Career Coaching",
  "Resume Optimization",
  "Skill Development",
  "Interview Preparation",
  "AI Career Assistant",
  "Career Assessment",
  "Other",
] as const
