import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "AmericanVoice",
    template: "%s | AmericanVoice",
  },
  description:
    "A serious, modern political personal brand site focused on civic engagement, accountability, and anti-corruption.",
  openGraph: {
    title: "AmericanVoice",
    description:
      "Student-athlete focused on civic engagement, accountability, and anti-corruption.",
    type: "website",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "AmericanVoice",
    description:
      "Student-athlete focused on civic engagement, accountability, and anti-corruption.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
     <body className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-700/10" />
            <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-slate-300/30 blur-3xl dark:bg-slate-800/20" />
            <div className="pointer-events-none absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-amber-100/30 blur-3xl dark:bg-slate-900/30" />
            <Navbar />
            <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
