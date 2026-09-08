import { locales, localeNames, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { TELEGRAM_URL, CONTACT } from "@/lib/config";
import { CheckMark } from "@/components/Logo";

export default function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const links = [
    { href: `/${locale}#subjects`, label: t.nav.subjects },
    { href: `/${locale}#about`, label: t.nav.about },
    { href: `/${locale}#dates`, label: t.nav.dates },
    { href: `/${locale}#faq`, label: t.nav.faq },
  ];

  return (
    <footer id="contact" className="bg-brand-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <CheckMark className="h-8 w-8 flex-shrink-0 text-white" />
              <span className="leading-tight">
                <span className="block text-[15px] font-extrabold tracking-tight text-white">Innovative Centre</span>
                <span className="block text-[10.5px] font-semibold tracking-wide text-brand-300">AP EXAM CENTRE · UZBEKISTAN</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{t.footer.tagline}</p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.94 4.5 18.6 20.2c-.25 1.1-.9 1.37-1.83.85l-5.06-3.73-2.44 2.35c-.27.27-.5.5-1 .5l.36-5.14L16.9 6.9c.4-.36-.09-.56-.62-.2L6.5 12.9l-4.98-1.56c-1.08-.34-1.1-1.08.23-1.6l19.46-7.5c.9-.33 1.7.22 1.4 1.66z" />
              </svg>
              {t.cta.button}
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{t.footer.linksHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-400 transition hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{t.footer.contactHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={CONTACT.phoneHref} className="text-slate-400 transition hover:text-white">{CONTACT.phone}</a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="text-slate-400 transition hover:text-white">{CONTACT.email}</a>
              </li>
              <li className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {locales.map((l) => (
                    <a
                      key={l}
                      href={`/${l}`}
                      className={`rounded-md border px-2 py-1 text-xs transition ${
                        l === locale
                          ? "border-brand-400 text-white"
                          : "border-brand-800 text-slate-400 hover:border-brand-500 hover:text-white"
                      }`}
                    >
                      {localeNames[l]}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-900 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Innovative Centre. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
