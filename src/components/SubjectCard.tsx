import Reveal from "@/components/Reveal";
import type { ApSubject } from "@/lib/apSubjects";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { TELEGRAM_URL } from "@/lib/config";

export default function SubjectCard({
  subject,
  t,
  locale,
  delay = 0,
}: {
  subject: ApSubject;
  t: Dictionary;
  locale: Locale;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-slate-200/60"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
          {t.subjects.categories[subject.category]}
        </span>
        {subject.pilot && (
          <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
            {t.subjects.pilotBadge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{subject.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{subject.description[locale]}</p>

      <div className="flex-1" />

      <dl className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-xs">
        <div className="flex items-center justify-between gap-3">
          <dt className="font-medium text-slate-400">{t.subjects.formatLabel}</dt>
          <dd className="text-right font-semibold text-slate-700">{t.subjects.formatLabels[subject.format]}</dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="font-medium text-slate-400">{t.subjects.durationLabel}</dt>
          <dd className="text-right font-semibold text-slate-700">
            {subject.duration === "TBA" ? t.subjects.tba : subject.duration}
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center gap-2">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-lg bg-brand-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-700 active:scale-[0.97]"
        >
          {t.subjects.registerBtn}
        </a>
        <a
          href={`/${locale}/subjects/${subject.slug}`}
          className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 active:scale-[0.97]"
        >
          {t.subjects.detailsBtn}
        </a>
      </div>
    </Reveal>
  );
}
