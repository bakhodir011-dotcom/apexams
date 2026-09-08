import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AP_SUBJECTS, getSubject, subjectsByCategory, getExamComponents, getMajorsForSubject, getDeliveryMode } from "@/lib/apSubjects";
import { EXAM_DATES } from "@/lib/examDates";
import { TELEGRAM_URL, CENTRE } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    AP_SUBJECTS.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return { title: "AP Exams at Innovative Centre" };
  return {
    title: `${subject.name} — AP Exams at Innovative Centre`,
    description: subject.description.en,
  };
}

/** Find the 2027 exam day + slot for a subject by its display name. */
function findExamDate(name: string): { date: string; weekday: ExamWeekday; slot: "morning" | "afternoon" } | null {
  for (const row of EXAM_DATES) {
    if (row.morning.includes(name)) return { date: row.date, weekday: row.weekday, slot: "morning" };
    if (row.afternoon.includes(name)) return { date: row.date, weekday: row.weekday, slot: "afternoon" };
  }
  return null;
}

type ExamWeekday = (typeof EXAM_DATES)[number]["weekday"];

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const t = getDictionary(locale);
  const sp = t.subjectPage;
  const exam = findExamDate(subject.name);
  const components = getExamComponents(subject.slug);
  const majorIds = getMajorsForSubject(subject.slug);
  const related = subjectsByCategory(subject.category).filter((s) => s.slug !== subject.slug);
  const scoreFmt = (n: number) => (Number.isInteger(n) ? `${n}` : n.toFixed(1));

  const delivery = getDeliveryMode(subject.slug);
  const facts: { label: string; value: string; hint?: string }[] = [
    { label: sp.categoryLabel, value: t.subjects.categories[subject.category] },
    { label: sp.formatLabel, value: t.subjects.formatLabels[subject.format] },
    { label: sp.deliveryLabel, value: sp.deliveryLabels[delivery], hint: sp.deliveryDescs[delivery] },
    { label: sp.durationLabel, value: subject.duration === "TBA" ? t.subjects.tba : subject.duration },
    {
      label: sp.examDateLabel,
      value: exam
        ? `${t.dates.weekdays[exam.weekday]}, ${exam.date} (${exam.slot === "morning" ? t.dates.colMorning : t.dates.colAfternoon})`
        : t.subjects.tba,
    },
    { label: t.venue.heading, value: `${CENTRE.addressLine}, ${CENTRE.city}` },
  ];

  return (
    <>
      <Header locale={locale} t={t} />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Breadcrumb */}
        <a href={`/${locale}#subjects`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-700">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {sp.back}
        </a>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
            {t.subjects.categories[subject.category]}
          </span>
          {subject.pilot && (
            <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
              {t.subjects.pilotBadge}
            </span>
          )}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{subject.name}</h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Overview */}
          <div>
            <h2 className="text-lg font-bold text-slate-900">{sp.overview}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{subject.description[locale]}</p>

            <a
              href={subject.collegeBoardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
            >
              {sp.official}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5M19 5l-9 9M12 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5" />
              </svg>
            </a>

            {/* Why take this exam */}
            <div className="mt-10">
              <h2 className="text-lg font-bold text-slate-900">{sp.whyTake}</h2>
              <ul className="mt-4 space-y-3">
                {t.about.points.map((pt) => (
                  <li key={pt.title} className="flex gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
                    </svg>
                    <span className="text-[15px] leading-relaxed text-slate-600">
                      <span className="font-semibold text-slate-800">{pt.title}.</span> {pt.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended for majors */}
            <div className="mt-10">
              <h2 className="text-lg font-bold text-slate-900">{sp.recommendedFor}</h2>
              {majorIds.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {majorIds.map((id) => (
                    <a
                      key={id}
                      href={`/${locale}#majors`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {t.majors.labels[id]}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-[15px] text-slate-600">{sp.recommendedForNone}</p>
              )}
            </div>

            {/* Preparation */}
            <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v11H4zM9 9l4 2.5L9 14V9zM8 20h8" />
                </svg>
                <h2 className="text-base font-bold text-slate-900">{sp.prepHeading}</h2>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{sp.prepBody}</p>
            </div>
          </div>

          {/* Key facts + CTA */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{sp.keyFacts}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {facts.map((f) => (
                  <div key={f.label} className="flex flex-col gap-0.5">
                    <dt className="text-xs font-medium text-slate-400">{f.label}</dt>
                    <dd className="font-semibold text-slate-800">{f.value}</dd>
                    {f.hint && <dd className="text-xs leading-relaxed text-slate-500">{f.hint}</dd>}
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
              >
                {sp.registerCta}
                <span className="cta-arrow">→</span>
              </a>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{sp.registerNote}</p>
            </div>
          </aside>
        </div>

        {/* Exam components */}
        <div className="mt-14">
          <h2 className="text-lg font-bold text-slate-900">{sp.examComponents}</h2>
          {components.length > 0 ? (
            <>
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <ul className="divide-y divide-slate-100">
                  {components.map((c, i) => (
                    <li key={i} className="flex items-center justify-between gap-4 bg-white px-5 py-4">
                      <div>
                        <p className="text-[15px] font-bold text-slate-900">{sp.componentLabels[c.type]}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {c.questions != null && (
                            <>
                              {c.questions} {c.questions === 1 ? sp.componentQuestion : sp.componentQuestions}
                              <span className="mx-2 text-slate-300">|</span>
                            </>
                          )}
                          {scoreFmt(c.score)}% {sp.componentScore}
                        </p>
                      </div>
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                        {scoreFmt(c.score)}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-3 text-xs text-slate-400">{sp.componentNote}</p>
            </>
          ) : (
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
              {sp.componentsTba}
            </p>
          )}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-slate-200 pt-10">
            <h2 className="text-lg font-bold text-slate-900">{sp.related}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {related.map((s) => (
                <a
                  key={s.slug}
                  href={`/${locale}/subjects/${s.slug}`}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}
