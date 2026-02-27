import type { Metadata } from "next";
import { getPortfolioItems } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Initiatives and projects focused on civic engagement and accountability.",
};

export default function PortfolioPage() {
  const initiatives = getPortfolioItems();

  return (
    <div className="grid gap-10">
      <section className="grid gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Portfolio
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          Projects and initiatives with measurable impact.
        </h1>
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          A growing list of civic efforts, campus initiatives, and public accountability
          tools. Each entry is grounded in evidence and community collaboration.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {initiatives.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {project.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {project.focus.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 opacity-80 transition group-hover:opacity-100 dark:from-white dark:via-slate-300 dark:to-slate-500" />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
