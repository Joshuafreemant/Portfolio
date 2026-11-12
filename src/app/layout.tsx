import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const displaySans = Space_Grotesk({
  variable: "--font-display-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tolulope Joshua Akinniyi — Software Architect & Backend Engineer",
  description:
    "Software architect and backend engineer with 5 years of experience shipping server-side applications, REST APIs, payment integrations and multi-tenant platforms end to end — from architecture to production.",
  openGraph: {
    title: "Tolulope Joshua Akinniyi — Software Architect & Backend Engineer",
    description:
      "Software architect and backend engineer with 5 years of experience shipping server-side applications, REST APIs, payment integrations and multi-tenant platforms end to end — from architecture to production.",
    type: "website",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value === "light" ? "light" : "dark";

  return (
    <html
      lang="en"
      data-theme={theme}
      className={`${displaySans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider initialTheme={theme}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--accent-contrast)]"
          >
            Skip to content
          </a>
          <SiteNav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
