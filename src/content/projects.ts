export type Project = {
  slug: string;
  name: string;
  description: string;
  role: string;
  stack: string[];
  featured: boolean;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "verset",
    name: "Verset / VersetAI",
    description:
      "Founder. An offline Bible-verse display app for church projectors (Electron, on-device whisper.cpp speech recognition) backed by VersetAI — a Next.js gatekeeper proxying five speech/AI providers, with multi-tenant admin, scoped realtime tokens, and Paystack billing.",
    role: "Founder",
    stack: ["Electron", "TypeScript", "Next.js", "whisper.cpp", "Deepgram", "Gemini", "Paystack"],
    featured: true,
    url: "https://versetapp.com",
  },
  {
    slug: "corenotes",
    name: "Corenotes",
    description:
      "Multi-tenant care-management platform for client records, medication administration, tasks and daily care activities. Own backend architecture and technical direction as Lead Engineer, including a Claude-powered support chatbot on the marketing site.",
    role: "Lead Engineer",
    stack: ["Node.js", "Express", "MongoDB", "React", "AWS", "Claude API"],
    featured: true,
    url: "https://corenotes.app",
  },
  {
    slug: "tpay",
    name: "TPay",
    description:
      "Tax-compliance and payments platform. Built the FIRS e-invoicing pipeline and integrated Nigerian payment and investment providers.",
    role: "Backend Engineer",
    stack: ["Node.js", "TypeScript", "OAuth 2.0", "Webhooks"],
    featured: true,
    url: "https://tpay.com.ng",
  },
  {
    slug: "join",
    name: "Join",
    description:
      "Social-meets-blockchain platform and its Joinda Quest rewards app. Built frontend features using Next.js, Tailwind CSS and Radix UI.",
    role: "Frontend Developer",
    stack: ["Next.js", "Tailwind CSS", "Radix UI"],
    featured: false,
    url: "https://joinda.io",
  },
  {
    slug: "schoolexl",
    name: "SchoolExl",
    description:
      "Education platform. Led the backend team, building and maintaining the Laravel and SQL backend while a contractor at Age of AI.",
    role: "Backend Team Lead",
    stack: ["Laravel", "PHP", "SQL"],
    featured: false,
  },
  {
    slug: "roadlers",
    name: "Roadlers",
    description: "Rental platform.",
    role: "Contributor",
    stack: ["React", "Redux", "Laravel"],
    featured: false,
  },
  {
    slug: "getsimfy",
    name: "GetSimfy",
    description: "Web application.",
    role: "Contributor",
    stack: ["Next.js", "Redux"],
    featured: false,
    url: "https://getsimfy.com",
  },
];
