export type SkillCategory = {
  category: string;
  icon: "server" | "code" | "database" | "plug" | "cloud" | "shield" | "flask" | "sparkles";
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "AI Engineering",
    icon: "sparkles",
    items: [
      "LLM API Integration (Claude)",
      "Prompt Engineering",
      "Conversation State Management",
      "Human-in-the-loop Handoff",
      "Speech-to-Text Integration",
      "Secure Token Minting",
      "On-device / Offline ML",
    ],
  },
  {
    category: "Backend Engineering",
    icon: "server",
    items: ["Node.js", "Express.js", "Laravel", "REST APIs", "Webhooks", "API Authentication"],
  },
  {
    category: "Languages",
    icon: "code",
    items: ["JavaScript", "TypeScript", "Go", "PHP", "Python"],
  },
  {
    category: "Frontend",
    icon: "code",
    items: ["React", "Next.js", "React Native", "Redux", "Zustand", "Tailwind CSS", "Radix UI"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MongoDB", "Mongoose", "SQL"],
  },
  {
    category: "Integrations",
    icon: "plug",
    items: ["Payment Gateways", "Investment APIs", "Accounting Integrations", "OAuth 2.0"],
  },
  {
    category: "Infrastructure",
    icon: "cloud",
    items: ["Docker", "AWS", "VPS", "Nginx", "Linux", "PM2", "Git", "Bitbucket"],
  },
  {
    category: "Engineering Practice",
    icon: "shield",
    items: [
      "Technical Leadership",
      "Automated Testing",
      "API Documentation",
      "Database Optimisation",
      "Security Auditing",
      "Data Encryption",
    ],
  },
  {
    category: "Machine Learning & Data (self-study)",
    icon: "flask",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Data Preprocessing",
      "Kaggle API",
    ],
  },
];
