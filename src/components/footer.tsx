import Link from "next/link";
import { Disclaimer } from "@/components/disclaimer";
import { getSocialLinks } from "@/lib/socials";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/photos", label: "Photos" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const socials = getSocialLinks();

  return (
    <footer className="border-t border-slate-200/70 bg-white/80 py-10 text-sm text-slate-600 dark:border-slate-800/70 dark:bg-slate-950/70 dark:text-slate-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            AmericanVoice
          </p>
          <p className="text-xs uppercase tracking-[0.2em]">
            Student-athlete · Civic engagement · Anti-corruption
          </p>
          <Disclaimer />
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wide">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="hover:text-slate-900"
            >
              {social.label}
            </Link>
          ))}
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          © 2026 AmericanVoice
        </div>
      </div>
    </footer>
  );
}
