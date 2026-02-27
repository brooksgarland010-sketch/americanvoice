import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, values, and civic priorities for the AmericanVoice platform.",
};

const principles = [
  {
    title: "Student-athlete discipline",
    description:
      "I carry the habits of training into public service: preparation, consistency, and resilience.",
  },
  {
    title: "Civic engagement",
    description:
      "People deserve access to clear information and real ways to participate.",
  },
  {
    title: "Anti-corruption",
    description:
      "Public trust grows when decisions are transparent and records are easy to verify.",
  },
];

const timeline = [
  {
    year: "2026",
    focus: "Expanding local engagement projects and publishing policy scorecards.",
  },
  {
    year: "2025",
    focus: "Partnered with student leaders to improve transparency in campus governance.",
  },
  {
    year: "2024",
    focus: "Built civic literacy workshops focused on practical, nonpartisan education.",
  },
];

export default function AboutPage() {
  return (
    <div className="grid gap-12">
      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            About
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Building trust through transparency and follow-through.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            AmericanVoice is a political personal brand grounded in serious public
            service. My work focuses on anti-corruption efforts, civic engagement, and
            the discipline it takes to show up consistently. As a student-athlete, I
            value accountability, measurable goals, and a clear record of results.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Now
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>Publishing evidence-based analysis on local governance.</li>
            <li>Creating accessible guides to civic participation.</li>
            <li>Partnering with students on integrity-focused initiatives.</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {principles.map((value) => (
          <div
            key={value.title}
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/70"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {value.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {value.description}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Timeline
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.year} className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                {item.year}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {item.focus}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
