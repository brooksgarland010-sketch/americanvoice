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
       <form
  action="https://formspree.io/f/mnjbrbew"
  method="POST"
  className="grid gap-4"
>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input
  type="text"
  name="name"
  placeholder="Your name"
  className="rounded-2xl border ..."
/>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
  type="email"
  name="email"
  placeholder="you@example.com"
  className="rounded-2xl border ..."
/>
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Topic
            <input
  type="text"
  name="topic"
  placeholder="Topic"
  className="rounded-2xl border ..."
/>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
           <textarea
  name="message"
  rows={5}
  placeholder="Share details..."
  className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
/>
          </label>
         <button
  type="submit"
  
>
  Send Message
</button>
        </form>
      </section>
    </div>
  );
}
