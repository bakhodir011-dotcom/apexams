import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AP_SUBJECTS, CATEGORY_ORDER, subjectsByCategory } from "@/lib/apSubjects";
import { EXAM_DATES } from "@/lib/examDates";
import { TELEGRAM_URL, CONTACT, CENTRE } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SubjectCard from "@/components/SubjectCard";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const whyIcons = [
  // AP Classroom (screen with play)
  "M4 4h16a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm6 3.5v6l5-3-5-3zM8 20h8v2H8v-2z",
  // registration support (chat bubble)
  "M4 4h16a1 1 0 011 1v10a1 1 0 01-1 1H9l-5 4V5a1 1 0 011-1zm3 5v2h10V9H7zm0 3v2h7v-2H7z",
  // local test centre
  "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z",
  // subjects / books
  "M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5zm2 0v12h10V5H6z",
  // guided / hand
  "M12 2a5 5 0 015 5v2a5 5 0 01-10 0V7a5 5 0 015-5zm-7 18a7 7 0 0114 0v1H5v-1z",
  // staff / badge
  "M12 2l2.39 4.84L20 7.6l-4 3.9.94 5.5L12 14.9 7.06 17l.94-5.5-4-3.9 5.61-.76L12 2z",
  // schedule / calendar
  "M7 2v2H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H9V2H7zm12 8H5v9h14v-9z",
  // university
  "M12 3L1 8l11 5 9-4.09V15h2V8L12 3zM5 13.18v3.82L12 21l7-4v-3.82l-7 3.82-7-3.82z",
];

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  return (
    <>
      <Header locale={locale} t={t} />

      <main>
        {/* ===================== Hero ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
          {/* drifting blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="blob-drift absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
            <div className="blob-drift-slow absolute -right-16 top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="hero-rise inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-brand-700 backdrop-blur" style={{ ["--rise-delay" as string]: "0ms" }}>
                {t.hero.badge}
              </span>
              <h1 className="hero-rise mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl" style={{ ["--rise-delay" as string]: "80ms" }}>
                {t.hero.title}
              </h1>
              <p className="hero-rise mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600" style={{ ["--rise-delay" as string]: "160ms" }}>
                {t.hero.subtitle}
              </p>
              <div className="hero-rise mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ ["--rise-delay" as string]: "240ms" }}>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
                >
                  {t.hero.ctaRegister}
                  <span className="cta-arrow">→</span>
                </a>
                <a
                  href={`/${locale}#subjects`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  {t.hero.ctaExplore}
                </a>
              </div>
            </div>

            {/* stats */}
            <div className="hero-rise mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4" style={{ ["--rise-delay" as string]: "320ms" }}>
              {t.hero.stats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white/70 p-5 text-center backdrop-blur">
                  <div className="text-3xl font-extrabold text-brand-700 sm:text-4xl">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== What is AP ===================== */}
        <section id="about" className="py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.about.heading}</h2>
              <p className="mt-4 text-lg font-medium text-brand-700">{t.about.lead}</p>
            </Reveal>
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {t.about.body.map((p, i) => (
                <Reveal key={i} as="p" delay={i * 80} className="text-[15px] leading-relaxed text-slate-600">
                  {p}
                </Reveal>
              ))}
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {t.about.points.map((pt, i) => (
                <Reveal key={i} delay={i * 100} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
                  </svg>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{pt.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pt.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== Subjects ===================== */}
        <section id="subjects" className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.subjects.heading}</h2>
              <p className="mt-3 text-slate-600">{t.subjects.subheading}</p>
            </Reveal>

            <div className="mt-14 space-y-14">
              {CATEGORY_ORDER.map((cat) => {
                const items = subjectsByCategory(cat);
                if (items.length === 0) return null;
                return (
                  <div key={cat}>
                    <Reveal as="h3" className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-900">
                      <span className="h-6 w-1.5 rounded-full bg-brand-500" />
                      {t.subjects.categories[cat]}
                      <span className="text-sm font-medium text-slate-400">({items.length})</span>
                    </Reveal>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((s, i) => (
                        <SubjectCard key={s.slug} subject={s} t={t} locale={locale} delay={(i % 3) * 80} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== Why ===================== */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.why.heading}</h2>
              <p className="mt-3 text-slate-600">{t.why.subheading}</p>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.why.items.map((item, i) => (
                <Reveal key={i} delay={(i % 3) * 90} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={whyIcons[i % whyIcons.length]} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== Process ===================== */}
        <section className="bg-brand-50/60 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.process.heading}</h2>
              <p className="mt-3 text-slate-600">{t.process.subheading}</p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {t.process.steps.map((step, i) => (
                <Reveal key={i} delay={i * 100} className="relative rounded-2xl border border-brand-100 bg-white p-6">
                  <h3 className="text-base font-bold text-brand-700">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
              >
                {t.cta.button}
                <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== Exam dates ===================== */}
        <section id="dates" className="py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.dates.heading}</h2>
              <p className="mt-3 text-slate-600">{t.dates.subheading}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
                {t.dates.window}
              </p>
            </Reveal>

            <Reveal className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-brand-900 text-white">
                      <th className="px-4 py-3 font-semibold">{t.dates.colDate}</th>
                      <th className="px-4 py-3 font-semibold">{t.dates.colMorning}</th>
                      <th className="px-4 py-3 font-semibold">{t.dates.colAfternoon}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {EXAM_DATES.map((row) => (
                      <tr key={row.iso} className="align-top odd:bg-white even:bg-slate-50/60">
                        <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">
                          {t.dates.weekdays[row.weekday]}, {row.date}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {row.morning.length ? row.morning.join(", ") : "—"}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {row.afternoon.length ? row.afternoon.join(", ") : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <p className="mt-4 text-center text-xs text-slate-400">{t.dates.note}</p>
          </div>
        </section>

        {/* ===================== Test venue ===================== */}
        <section id="venue" className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="grid gap-0 md:grid-cols-[1fr_1.1fr]">
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {t.venue.heading}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {CENTRE.city}
                  </h2>
                  <p className="mt-2 text-[15px] font-medium text-slate-700">{t.venue.address}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{t.venue.centreLine}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={CENTRE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                    >
                      <svg className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      {t.venue.directions}
                    </a>
                    <a
                      href={CONTACT.phoneHref}
                      className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="relative min-h-[220px] bg-brand-900">
                  <div className="absolute inset-0 opacity-90" aria-hidden="true"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(143,111,219,0.55), transparent 60%), radial-gradient(circle at 75% 70%, rgba(86,45,178,0.6), transparent 55%)" }}
                  />
                  <div className="relative flex h-full flex-col items-center justify-center p-8 text-center text-white">
                    <svg className="h-14 w-14 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.7" />
                    </svg>
                    <p className="mt-4 text-lg font-bold">Innovative Centre</p>
                    <p className="text-sm text-brand-100">{CENTRE.addressLine}</p>
                    <p className="text-sm text-brand-100">{CENTRE.city} · {CENTRE.code}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <Faq t={t} />

        {/* ===================== CTA banner ===================== */}
        <section className="bg-brand-800">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.cta.heading}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">{t.cta.body}</p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-brand-800 shadow-lg transition hover:bg-brand-50"
            >
              {t.cta.button}
              <span className="cta-arrow">→</span>
            </a>
            <p className="mt-6 text-sm text-brand-200">
              {CONTACT.phone} · {CONTACT.email}
            </p>
          </div>
        </section>
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}
