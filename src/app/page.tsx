import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getPortfolioItems } from "@/lib/portfolio";

const standFor = [
  {
    title: "Anti-corruption",
    description:
      "Full transparency in decision-making, budgets, and public accountability.",
  },
  {
    title: "Accountability",
    description:
      "Clear goals, measurable results, and honest reporting on progress.",
  },
  {
    title: "Civic engagement",
    description:
      "Making civic participation practical, welcoming, and easier to sustain.",
  },
];

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const initiatives = getPortfolioItems();
  const featuredInitiative =
    initiatives.find((initiative) => initiative.featured) ?? initiatives[0];

  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6 animate-rise-in">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            AmericanVoice · 2026
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            [Name Placeholder]
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
            Tagline option #15 goes here.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Student-athlete committed to civic engagement, evidence-based reform, and
            anti-corruption leadership. Building trust through transparency, clear
            goals, and follow-through.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-soft-xl dark:bg-white dark:text-slate-900"
            >
              View Initiatives
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="glass-panel animate-fade-in rounded-3xl p-8 shadow-soft-xl">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Quick Bio
                </p>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  2026
                </span>
              </div>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  Driven by the discipline of athletics and the responsibility of
                  public service.
                </p>
                <p>
                  Focused on transparency, civic access, and measurable outcomes.
                </p>
                <p>
                  Advocating for policies that are practical, honest, and accountable.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 dark:border-slate-800/60 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Core pillars
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                  Student-athlete leadership · Civic engagement · Anti-corruption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Featured Initiative
          </h2>
          <Link
            href="/portfolio"
            className="text-sm font-semibold uppercase tracking-wide text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            All Initiatives
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70">
          {featuredInitiative ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {featuredInitiative.title}
                </h3>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  {featuredInitiative.status}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {featuredInitiative.summary}
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {featuredInitiative.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Add initiatives in `content/portfolio.json` to highlight them here.
            </p>
          )}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Featured Post
          </p>
          {featuredPost ? (
            <>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                {featuredPost.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-5 inline-flex text-xs font-semibold uppercase tracking-wide text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Read the full post
              </Link>
            </>
          ) : (
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Add blog posts in `content/posts` to feature them here.
            </p>
          )}
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Email Updates
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
            Stay informed on civic initiatives.
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Placeholder signup form for future email list integration.
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-slate-500"
            />
            <button
              type="button"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-soft-xl dark:bg-white dark:text-slate-900"
            >
              Join
            </button>
          </form>
        </div>
      </section>

      <section className="grid gap-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          What I Stand For
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {standFor.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/70"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
