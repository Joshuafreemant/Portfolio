export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "TPay (TaxTech / TaxITPay)",
    role: "Backend Engineer (Full-Stack)",
    period: "January 2026 – Present",
    location: "Lagos, Nigeria",
    current: true,
    summary:
      "Building the backend for a Nigerian tax-compliance and payments platform handling 10,000+ concurrent transactions daily, including a FIRS e-invoicing pipeline and a network of financial service integrations.",
    highlights: [
      "Built and maintain backend infrastructure that reliably handles more than 10,000 concurrent transactions daily across integrated payment, tax-filing and investment providers.",
      "Designed and developed an FIRS e-invoicing pipeline connecting Zoho Books and QuickBooks — normalising invoice data, mapping it to the required FIRS structure, validating records, and supporting transmission and incremental synchronisation.",
      "Integrated payment and investment services including Nomba, Monnify, Remita, Cowrywise and Penpay/Pencco — service workflows, webhook handling and transaction reconciliation.",
      "Implemented Cowrywise investment workflows covering account registration, KYC, flexible and locked savings, mutual funds and withdrawals.",
      "Built a partner-facing tax-filing API for an external payroll/HR platform, including API-key authentication, PAYE schedules, fee computation and webhook callbacks.",
      "Corrected transaction reversal and refund logic to prevent refunds firing without required verification; improved Zoho OAuth 2.0 token handling.",
      "Implemented security audit logging for password/PIN reset activity and built a mock webhook service for payment-integration testing.",
      "Supported production deployment and maintenance on Ubuntu/DigitalOcean using PM2 and Git/Bitbucket.",
    ],
    stack: ["Node.js", "TypeScript", "REST APIs", "Webhooks", "OAuth 2.0", "DigitalOcean", "PM2"],
  },
  {
    company: "Corenotes",
    role: "Lead Engineer (Contract)",
    period: "November 2021 – Present",
    location: "Remote",
    current: true,
    summary:
      "Lead engineering on Corenotes, a multi-tenant care-management platform covering client records, medication administration, tasks and daily care activities — owning backend architecture and technical direction.",
    highlights: [
      "Own backend architecture, technical decisions and code quality for a multi-tenant care-management platform.",
      "Plan, prioritise and delegate work to the frontend engineer, review deliverables and keep frontend and backend aligned; contribute directly to the React frontend.",
      "Partner with the cloud engineer on AWS infrastructure, deployments and environment configuration.",
      "Run the backend in Docker, keeping local, staging and production environments consistent.",
      "Refactored scheduled task, medication and chore jobs into stateless multi-tenant workers using Promise.allSettled, so one tenant's failure no longer stops processing for the others.",
      "Built medication-discontinuation logging with PDF export, giving care staff a complete, printable audit trail.",
      "Added field-level AES-256 encryption for sensitive client identifiers, including Social Security and Medicaid numbers.",
      "Work directly with company leadership to turn product requirements into features, including the corenotes.app marketing site.",
      "Built a Claude-powered (Haiku 4.5) support chatbot for the corenotes.app marketing site — grounded in a structured knowledge base via the system prompt, with conversation history persisted in MongoDB behind an encrypted session cookie, per-minute rate limiting, and a handoff path that routes out-of-scope questions into a human agent inbox.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "React", "AWS", "Docker", "jsPDF", "Claude API"],
  },
  {
    company: "Verset / VersetAI",
    role: "Founder",
    period: "August 2026 – Present",
    location: "Remote",
    current: true,
    summary:
      "Founder of Verset, an offline Bible-verse display app for church projectors, and VersetAI, the backend that gives it cloud speech-to-text and billing.",
    highlights: [
      "Built the Verset desktop app (Electron) with fully offline, on-device speech recognition via whisper.cpp, matching spoken scripture references or paraphrases live against a local verse database — no internet needed during a service.",
      "Built VersetAI, a Next.js gatekeeper backend that proxies five speech/AI providers (Deepgram, Groq, Speechmatics, AssemblyAI, Gemini) so real provider keys never ship inside the desktop app.",
      "Designed a short-lived, scoped-credential flow for realtime providers: the desktop app requests a temporary token from the backend, then streams audio directly to the provider's WebSocket — the real key never leaves the server.",
      "Built a multi-tenant admin dashboard to create churches, mint and revoke their access tokens, and monitor usage.",
      "Implemented Paystack billing end to end: self-serve 3-day trials, subscription checkout, webhook-driven reconciliation, and a daily cron job that revokes lapsed access on a grace-period schedule tuned to not cut a live Sunday service.",
      "Shipped cross-platform (macOS/Windows) installers, including bundling and packaging whisper.cpp's native speech models.",
    ],
    stack: ["Electron", "TypeScript", "Next.js", "MongoDB", "Paystack", "whisper.cpp", "Deepgram", "Gemini"],
  },
  {
    company: "Age of AI — SchoolExl",
    role: "Backend Developer / Backend Team Lead (Contract)",
    period: "July 2025 – October 2025",
    location: "Remote · California, USA",
    current: false,
    summary:
      "Led the backend team on SchoolExl, an AI-powered education platform out of India with an offline AI tablet and AI-graded assessments, owning the Laravel/SQL backend underneath the product's AI/ML features.",
    highlights: [
      "Led the backend team for SchoolExl, building and maintaining the Laravel and SQL backend.",
      "Developed server-side functionality, optimised database queries and caching, and implemented fixes and security patches to improve application reliability and performance.",
      "SchoolExl has since picked up press coverage in India (The Interview World, Nov 2025) and partnerships including IIT Madras and the Government of Jamaica.",
    ],
    stack: ["Laravel", "PHP", "SQL", "Caching"],
  },
  {
    company: "Homefood",
    role: "Full-Stack Developer",
    period: "April 2024 – July 2025",
    location: "Remote",
    current: false,
    summary:
      "Built responsive interfaces and the Node.js services behind them for a food-ordering product, including setting up and running its production VPS.",
    highlights: [
      "Developed responsive React interfaces and connected them to backend services built with Node.js.",
      "Set up a custom VPS on Hostinger and configured Nginx as a reverse proxy in front of the Node.js backend for production deployment.",
      "Wrote and maintained automated tests and documented API endpoints supporting frontend/backend communication.",
    ],
    stack: ["React", "Node.js", "REST APIs", "Nginx", "Hostinger VPS"],
  },
  {
    company: "Join (joinda.io / joindaquest.io)",
    role: "Frontend Developer",
    period: "2025",
    location: "Remote",
    current: false,
    summary:
      "Frontend development on Join, a social-meets-blockchain platform, and its Joinda Quest rewards app.",
    highlights: [
      "Built frontend features for joinda.io and joindaquest.io using Next.js, Tailwind CSS and Radix UI component primitives.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Radix UI"],
  },
  {
    company: "Embassy Pharmaceutical and Chemicals Limited",
    role: "Full-Stack Developer (Contract)",
    period: "September 2026",
    location: "Remote",
    current: false,
    summary:
      "Designed and built a prototype online ordering and inventory platform for a Nigerian pharmaceutical distribution company, supporting direct pharmacy orders and sales-rep order processing at trade conferences.",
    highlights: [
      "Translated stakeholder discussions into requirements and delivered a functional prototype for client testing.",
      "Built a pharmacy storefront (business registration, product browsing, order placement) plus an admin/sales console for inventory updates and order tracking.",
      "Designed conference ordering via shared links and QR codes, allowing orders when local stock showed zero and fulfilment from regional inventory.",
      "Supported reserve-and-pay at conference stands and bank-transfer payment workflows.",
      "Prototyped in React before rebuilding with lightweight HTML, CSS and JavaScript for simpler testing and deployment.",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS"],
  },
];
