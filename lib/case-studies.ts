export type Metric = { value: string; label: string }
export type FlowStep = { title: string; body: string }

export type CaseStudy = {
  slug: string
  name: string
  number: string
  category: string
  indexLabel?: string
  summary: string
  image?: string
  imageAlt?: string
  pillars: string[]
  problems: string[]
  built: string[]
  features: string[]
  metrics: Metric[]
  flow: FlowStep[]
  stack: string[]
  limited?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "forenotes",
    name: "Forenotes",
    number: "01",
    category: "AI-powered financial research and investment learning",
    indexLabel: "AI trading journal and performance analytics",
    summary:
      "A financial education and market intelligence platform designed to simplify investing through research-driven insights, market analysis, and structured learning resources, so traders and investors can work from actionable financial knowledge and data-backed decision-making tools.",
    image: "/work/forenotes.webp",
    imageAlt:
      "Forenotes trading journal interface from the Career Craftly portfolio, showing performance figures including pips and percentage change.",
    pillars: [
      "AI insight layer",
      "Trading analytics",
      "Gamified leaderboard",
      "Psychometrics",
    ],
    problems: [
      "Financial information scattered across multiple sources",
      "New investors struggle to understand market trends",
      "Manual research is time-consuming and inefficient",
      "Reliable educational content is difficult to consolidate",
    ],
    built: [
      "Centralized financial knowledge platform",
      "AI-assisted market research and analysis",
      "Structured learning modules for investors",
      "Real-time financial updates and educational resources",
      "Interactive dashboards for tracking market trends",
    ],
    features: [
      "AI journal and trading analytics",
      "Financial learning hub",
      "Market research and investment insights",
      "Economic news analysis",
      "Interactive dashboards",
      "Portfolio learning tools",
      "Gamified leaderboard",
    ],
    metrics: [
      { value: "60%", label: "Faster financial research" },
      { value: "90%", label: "User accessibility" },
      { value: "<2s", label: "Content delivery" },
      { value: "55%", label: "Reduced information overload" },
    ],
    flow: [
      {
        title: "Data aggregation",
        body: "Playwright and Puppeteer modes with proxy rotation, retries, and deterministic request profiling.",
      },
      {
        title: "Structured extraction",
        body: "BeautifulSoup and CSS selectors normalize product, price, availability, delivery, and review snippets into typed records.",
      },
      {
        title: "AI insight generation",
        body: "LLM, Claude, and OpenAI calls convert signals into strategy outputs with evidence-backed reasoning.",
      },
    ],
    stack: [
      "Next.js",
      "JavaScript",
      "CSS3",
      "Playwright",
      "Google Analytics",
      "PostgreSQL",
      "SEO tools",
      "GPT / Claude API",
    ],
  },
  {
    slug: "the-nexalyze",
    name: "The Nexalyze",
    number: "02",
    category: "AI-powered business analytics and growth intelligence",
    indexLabel: "AI-powered trading automation",
    summary:
      "An AI-based interview platform that conducts structured interviews, evaluates candidates, scores responses, analyzes communication, and generates hiring reports with confidence-calibrated evidence.",
    image: "/work/the-nexalyze.webp",
    imageAlt:
      "Nexalyze interface from the Career Craftly portfolio, including research views and an S&P 500 ETF quote.",
    pillars: [
      "Signal automation",
      "Backtesting engine",
      "No-code builder",
      "Algo intelligence layer",
    ],
    problems: [
      "Business data exists across multiple disconnected systems",
      "Decision-making is slowed by manual reporting",
      "Predictive insights are difficult to generate",
      "Organizations need real-time performance visibility",
    ],
    built: [
      "Centralized business intelligence dashboard",
      "AI-powered analytics engine",
      "Predictive business forecasting",
      "Automated reporting and visualization",
      "Custom KPI monitoring",
    ],
    features: [
      "AI analytics",
      "Interactive dashboards",
      "Predictive insights",
      "KPI tracking",
      "Automated reports",
      "Data integration",
      "Business forecasting",
      "Real-time monitoring",
    ],
    metrics: [
      { value: "40%", label: "Faster business reporting" },
      { value: "60%", label: "Decision automation" },
      { value: "<2s", label: "Insight generation" },
      { value: "85%", label: "Reduced manual analysis" },
    ],
    flow: [
      {
        title: "Data collection",
        body: "Aggregate data from multiple sources.",
      },
      {
        title: "Data processing",
        body: "Whisper transcription with diarization cues, and utterances aligned to question timestamps.",
      },
      {
        title: "AI insight generation",
        body: "Generate predictions and recommendations.",
      },
    ],
    stack: [
      "Next.js",
      "Docker",
      "Redis",
      "AWS",
      "GPT-4 / Claude",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "Open API",
    ],
  },
  {
    slug: "the-gp-edge",
    name: "The GP Edge",
    number: "03",
    category: "AI-powered healthcare learning platform",
    summary:
      "An intelligent medical education platform designed to help healthcare professionals and students master clinical knowledge through adaptive learning, personalized assessments, and evidence-based study resources.",
    image: "/work/the-gp-edge.webp",
    imageAlt:
      "The GP Edge medical learning dashboard from the Career Craftly portfolio, with content counts and practice accuracy.",
    pillars: [
      "Adaptive learning",
      "Performance tracking",
      "Clinical cases",
      "Certification prep",
    ],
    problems: [
      "Medical students struggle to identify knowledge gaps",
      "Exam preparation requires consistent practice and feedback",
      "Large volumes of clinical content can be overwhelming",
      "Tracking readiness across specialties is difficult",
      "Personalized learning paths are often unavailable",
    ],
    built: [
      "AI-powered adaptive learning system",
      "Personalized question recommendations",
      "Real-time performance analytics",
      "Specialty-based progress tracking",
      "Comprehensive mock examinations",
      "Intelligent study plan generation",
    ],
    features: [
      "Adaptive learning engine",
      "Question bank management",
      "Clinical case simulations",
      "Mock examinations",
      "Performance analytics",
      "Progress tracking",
      "Study plans",
      "AI tutor assistance",
      "Medical content library",
      "User management",
    ],
    metrics: [
      { value: "95%", label: "Average readiness improvement" },
      { value: "50k+", label: "Questions answered monthly" },
      { value: "85%", label: "Higher practice consistency" },
      { value: "96%", label: "User satisfaction rate" },
    ],
    flow: [
      {
        title: "Exam success",
        body: "Deliver measurable improvement and exam preparedness.",
      },
      {
        title: "Adaptive learning engine",
        body: "Analyze strengths, weaknesses, and learning patterns.",
      },
      {
        title: "Continuous evaluation",
        body: "Track readiness scores and specialty performance.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "Redis",
      "Prisma",
      "AWS",
      "OpenAI",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    slug: "marketmover-ai",
    name: "MarketMover AI",
    number: "04",
    category: "AI-powered stock market intelligence and trading analytics",
    indexLabel: "AI-powered expert advisor",
    summary:
      "MarketMover AI is an advanced market intelligence platform that uses artificial intelligence to analyze financial markets, monitor trends, and generate actionable investment insights.",
    image: "/work/marketmover-ai.webp",
    imageAlt:
      "MarketMover AI site from the Career Craftly portfolio, describing an expert advisor for trading.",
    pillars: [
      "Affiliate program",
      "Crypto-only checkout",
      "Telegram-based support",
      "Trading EA / bot",
    ],
    problems: [
      "Market data changes rapidly across multiple exchanges",
      "Investors struggle to identify meaningful trading opportunities",
      "Manual technical and fundamental analysis is time-intensive",
      "Noise and market volatility make decision-making difficult",
    ],
    built: [
      "AI-powered market monitoring and analysis",
      "Real-time stock screening and trend detection",
      "Predictive analytics for investment opportunities",
      "Automated market alerts and notifications",
      "Interactive dashboards for portfolio tracking",
    ],
    features: [
      "AI market analysis",
      "Real-time stock tracking",
      "Technical indicators",
      "Predictive analytics",
      "Portfolio monitoring",
      "Smart alerts",
      "Market news integration",
      "Investment recommendations",
    ],
    metrics: [
      { value: "60%", label: "Faster market analysis" },
      { value: "40%", label: "Reduced manual research" },
      { value: "85%", label: "Real-time alert generation" },
      { value: "<1 min", label: "Automated market monitoring" },
    ],
    flow: [
      {
        title: "Market data collection",
        body: "Aggregate live financial and stock market data.",
      },
      {
        title: "Data processing",
        body: "Clean, normalize, and validate incoming datasets.",
      },
      {
        title: "AI intelligence engine",
        body: "Analyze trends, generate predictions, and identify opportunities.",
      },
    ],
    stack: [
      "React Native",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Trading API",
      "Open API",
      "Celery",
    ],
  },
  {
    slug: "lost-wallet-recovery",
    name: "Lost Wallet Recovery",
    number: "05",
    category: "Digital asset and recovery assistance platform",
    summary:
      "Named in the portfolio index as a digital asset and recovery assistance platform. The portfolio does not include a problem statement, build notes, architecture, or results for this engagement.",
    pillars: [],
    problems: [],
    built: [],
    features: [],
    metrics: [],
    flow: [],
    stack: [],
    limited: true,
  },
  {
    slug: "x-500",
    name: "X-500",
    number: "06",
    category: "Enterprise business and technology solutions",
    indexLabel: "Knowledge commerce platform",
    summary:
      "X-500 is a business technology platform that provides enterprise-grade digital transformation services and scalable business solutions. The platform focuses on improving operational efficiency through the integration of modern technology.",
    image: "/work/x-500.webp",
    imageAlt:
      "X-500 page from the Career Craftly portfolio, describing ebooks and an affiliate earning program.",
    pillars: [
      "Industrial AI",
      "QC automation and analytics",
      "Monitoring and traceability",
      "Batch intelligence",
    ],
    problems: [
      "Fragmented business operations",
      "Manual workflows reduce productivity",
      "Lack of centralized business management",
      "Limited data-driven decision making",
    ],
    built: [
      "Digital workflow automation",
      "Centralized business management",
      "Analytics and reporting dashboards",
      "Secure and scalable architecture",
      "Process optimization tools",
    ],
    features: [
      "Business process management",
      "Analytics dashboard",
      "Workflow automation",
      "Customer management",
      "Data reporting",
      "Secure authentication",
      "Cloud infrastructure",
      "Enterprise integration",
    ],
    metrics: [
      { value: "18 FPS", label: "Real-time edge GPU" },
      { value: "0.88", label: "Average precision" },
      { value: "60%", label: "Workflow automation" },
      { value: "<2 sec", label: "Dashboard" },
    ],
    flow: [
      {
        title: "Data collection",
        body: "Business data aggregation.",
      },
      {
        title: "Process management",
        body: "Automated workflow execution.",
      },
      {
        title: "Analytics engine",
        body: "Generate insights and reports.",
      },
    ],
    stack: [
      "PyTorch",
      "OpenCV",
      "YOLO",
      "EfficientNet",
      "Anomaly detection",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Edge GPU",
    ],
  },
  {
    slug: "trade-your-capital",
    name: "Trade Your Capital",
    number: "07",
    category: "AI-powered proprietary trading and trader evaluation",
    indexLabel: "Wealth management solutions",
    summary:
      "Trade Your Capital is a proprietary trading platform that enables traders to access funded accounts through skill-based evaluation programs. The platform provides risk management tools, performance tracking, and trader analytics for sustainable trading growth.",
    image: "/work/trade-your-capital.webp",
    imageAlt:
      "Trade Your Capital site from the Career Craftly portfolio, with portfolio growth messaging.",
    pillars: [
      "Evaluations",
      "Risk management",
      "Performance and analytics",
      "Funded accounts",
    ],
    problems: [
      "Traders face limited access to trading capital",
      "Risk management requires continuous monitoring",
      "Performance evaluation is often manual",
      "Transparent funding criteria are essential for trader confidence",
    ],
    built: [
      "Automated trader evaluation system",
      "Real-time risk management",
      "Performance analytics dashboard",
      "Funded account management",
      "Secure account monitoring and reporting",
    ],
    features: [
      "Trading challenges",
      "Funded accounts",
      "Performance dashboard",
      "Risk management",
      "Real-time statistics",
      "Account monitoring",
      "Secure payment integration",
      "Trader support",
    ],
    metrics: [
      { value: "70%", label: "Automated performance tracking" },
      { value: "50%", label: "Reduced manual evaluation" },
      { value: "60%", label: "Trading rule compliance" },
      { value: "1 click", label: "Trade data processing" },
    ],
    flow: [
      {
        title: "Trader registration",
        body: "Create an account and select a challenge.",
      },
      {
        title: "Performance tracking",
        body: "Monitor trades and risk metrics.",
      },
      {
        title: "Evaluation engine",
        body: "Verify compliance with trading rules.",
      },
    ],
    stack: [
      "Python",
      "Redis",
      "PostgreSQL",
      "Trading APIs",
      "FastAPI",
      "Docker",
      "React",
      "Next.js",
      "AWS",
    ],
  },
  {
    slug: "canticle-event-company",
    name: "Canticle Event Company",
    number: "08",
    category: "AI-driven event planning and event management",
    indexLabel: "Event management platform",
    summary:
      "Canticle Event Company is a full-service event management and production company specializing in weddings, corporate events, social gatherings, and customized celebrations.",
    image: "/work/canticle-event-company.webp",
    imageAlt: "Canticle Event Company website shown in the Career Craftly portfolio.",
    pillars: [
      "Luxury events",
      "Planning and execution",
      "Celebration",
      "Event design and decor",
    ],
    problems: [
      "Event planning involves multiple vendors and complex coordination",
      "Manual scheduling increases the risk of delays",
      "Budget and resource management can become inefficient",
      "Clients require real-time updates and personalized services",
    ],
    built: [
      "Centralized event planning and management",
      "Vendor and logistics coordination",
      "Custom event package creation",
      "Real-time client communication",
      "Budget tracking and execution monitoring",
    ],
    features: [
      "Wedding planning",
      "Corporate event management",
      "Vendor coordination",
      "Budget management",
      "Event scheduling",
      "Customized packages",
      "Client dashboard",
    ],
    metrics: [
      { value: "85%", label: "Reduced manual coordination" },
      { value: "<24 hrs", label: "Proposal generation" },
      { value: "40%", label: "Faster event planning" },
      { value: "90%", label: "Client satisfaction" },
    ],
    flow: [
      {
        title: "Client consultation",
        body: "Gather event requirements and preferences.",
      },
      {
        title: "Event planning",
        body: "Assign vendors, venues, and resources.",
      },
      {
        title: "Execution management",
        body: "Monitor timelines and logistics.",
      },
    ],
    stack: [
      "Python",
      "GIS",
      "Google Maps API",
      "Weather API",
      "Satellite data",
      "ML models",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "GeoPandas",
    ],
  },
  {
    slug: "luxe-ride",
    name: "Luxe Ride",
    number: "09",
    category: "Premium chauffeur and luxury cab booking",
    indexLabel: "Luxury transportation services",
    summary:
      "Luxe Ride Gwalior is a premium transportation platform offering luxury and reliable chauffeur-driven travel. The platform focuses on comfortable, secure, and hassle-free bookings for local, airport, corporate, and outstation travel.",
    image: "/work/luxe-ride.webp",
    imageAlt:
      "Luxe Ride site from the Career Craftly portfolio, with luxury journey messaging.",
    pillars: ["Airport transfers", "Wedding cars", "Corporate travel", "Outstation trips"],
    problems: [
      "Traditional cab booking lacks a premium customer experience",
      "Inconsistent pricing and vehicle availability",
      "Limited real-time booking and trip management",
      "Difficulty managing customer reservations efficiently",
    ],
    built: [
      "Online vehicle reservation system",
      "Premium fleet management",
      "Real-time booking confirmation",
      "Secure payment integration",
      "Professional chauffeur scheduling",
    ],
    features: [
      "Online cab booking",
      "Luxury vehicle fleet",
      "Airport transfers",
      "Corporate travel",
      "Outstation trips",
      "Real-time reservation",
      "Customer support",
      "Secure payments",
    ],
    metrics: [
      { value: "85%", label: "Reduced manual scheduling" },
      { value: "45%", label: "Faster booking process" },
      { value: "2 min", label: "Booking confirmation" },
      { value: "90%", label: "Customer satisfaction" },
    ],
    flow: [
      {
        title: "Booking request",
        body: "Customer selects a vehicle and trip.",
      },
      {
        title: "Fleet allocation",
        body: "An available chauffeur and vehicle are assigned.",
      },
      {
        title: "Trip monitoring",
        body: "Live scheduling and status tracking.",
      },
    ],
    stack: [
      "Maps",
      "Payment gateway",
      "FastAPI",
      "Docker",
      "Firebase",
      "Cloud",
      "PostgreSQL",
      "Node.js",
      "React Native / Next.js",
    ],
  },
  {
    slug: "the-yatra-fusion",
    name: "The Yatra Fusion",
    number: "10",
    category: "Music band, live performances, fusion music, and entertainment",
    indexLabel: "Indian classical fusion",
    summary:
      "The Yatra Fusion is a comprehensive travel and tourism platform designed to simplify holiday planning, tour bookings, and customized travel experiences. The platform connects travellers with curated domestic and international packages while providing booking and itinerary management.",
    image: "/work/the-yatra-fusion.webp",
    imageAlt: "The Yatra Fusion Band site shown in the Career Craftly portfolio.",
    pillars: [
      "Airport transfers",
      "Music and entertainment",
      "Events and performances",
      "Live shows and bookings",
    ],
    problems: [
      "Travel planning involves multiple service providers",
      "Customers seek personalized travel experiences",
      "Manual booking processes increase operational overhead",
      "Managing itineraries and customer support efficiently is challenging",
    ],
    built: [
      "Centralized travel booking platform",
      "Customized tour package recommendations",
      "Automated itinerary planning",
      "Real-time booking management",
      "Integrated customer support and travel assistance",
    ],
    features: [
      "Holiday packages",
      "Domestic and international tours",
      "Hotel booking",
      "Transportation management",
      "Customized itineraries",
      "Travel assistance",
      "Online booking",
      "Customer dashboard",
    ],
    metrics: [
      { value: "~60%", label: "Faster booking process" },
      { value: "25%", label: "Admin efficiency" },
      { value: "<5 min", label: "Package generation" },
      { value: "85%", label: "Customer satisfaction" },
    ],
    flow: [
      {
        title: "Travel inquiry",
        body: "Collect customer preferences and requirements.",
      },
      {
        title: "Package recommendation",
        body: "Generate personalized travel options.",
      },
      {
        title: "Booking management",
        body: "Confirm hotels, transport, and activities.",
      },
    ],
    stack: [
      "Next.js",
      "Maps",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "Payment gateway",
      "MySQL",
      "Redis",
      "Cloud hosting",
    ],
  },
  {
    slug: "maa-sharda-industries",
    name: "Maa Sharda Industries",
    number: "11",
    category: "Quality assurance services",
    summary:
      "Named in the portfolio index as quality assurance services. The portfolio does not include a problem statement, build notes, architecture, or results for this engagement.",
    pillars: [],
    problems: [],
    built: [],
    features: [],
    metrics: [],
    flow: [],
    stack: [],
    limited: true,
  },
  {
    slug: "click-and-decode",
    name: "Click & Decode",
    number: "12",
    category: "Software quality",
    summary:
      "Click & Decode is a digital solutions company specializing in high-performance websites, SEO optimization, and business growth strategies. The work helps startups and enterprises establish an online presence through custom web development and data-driven marketing.",
    image: "/work/click-and-decode.webp",
    imageAlt:
      "Click & Decode site from the Career Craftly portfolio, describing software quality assurance.",
    pillars: [
      "Regression",
      "Automation and manual testing",
      "Security and performance",
      "QA audits, testing, and reports",
    ],
    problems: [
      "Businesses struggle to build high-converting digital experiences",
      "Poor SEO visibility limits customer acquisition",
      "Generic websites fail to reflect brand identity",
      "Managing development, optimization, and maintenance through multiple vendors increases costs",
    ],
    built: [
      "Custom website development tailored to business goals",
      "SEO-driven architecture for higher search rankings",
      "Responsive and performance-optimized UI and UX",
      "Integrated digital marketing strategies for lead generation",
      "Scalable solutions supporting future business growth",
    ],
    features: [
      "Custom web development",
      "SEO optimization",
      "Mobile responsive design",
      "Performance optimization",
      "Lead generation strategies",
      "Business analytics",
    ],
    metrics: [
      { value: "60%", label: "Improved website performance" },
      { value: "40%", label: "Higher lead generation" },
      { value: "<2 sec", label: "Average page load time" },
      { value: "85%", label: "Mobile compatibility" },
    ],
    flow: [
      {
        title: "Requirement analysis",
        body: "Business goals and audience identification.",
      },
      {
        title: "Design and development",
        body: "UI and UX creation with optimized coding practices.",
      },
      {
        title: "SEO and performance optimization",
        body: "Technical SEO and speed enhancements.",
      },
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "Redis",
      "JavaScript",
      "CSS3",
      "Playwright",
      "Google Analytics",
      "PostgreSQL",
      "SEO tools",
      "GPT / Claude API",
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export function neighbors(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug)
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index >= 0 && index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  }
}
