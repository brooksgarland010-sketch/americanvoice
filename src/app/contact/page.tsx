import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about civic initiatives, events, or media requests.",
};

export default function ContactPage() {
  return (
    <div className="grid gap-10">
      <section className="grid gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Contact
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          Connect, collaborate, or request a briefing.
        </h1>
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Use the form to reach out about community events, policy feedback, or media
          inquiries. Responses are prioritized by urgency and public impact.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <form className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-slate-500"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-slate-500"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Topic
            <input
              type="text"
              placeholder="Community event, media inquiry, feedback"
              className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-slate-500"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
            <textarea
              rows={5}
              placeholder="Share details and any deadlines."
              className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-slate-500"
            />
          </label>
          <button
            type="button"
            className="w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-soft-xl dark:bg-white dark:text-slate-900"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
