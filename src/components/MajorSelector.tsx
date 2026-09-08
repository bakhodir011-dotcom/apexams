"use client";

import { useState } from "react";
import type { ApSubject, MajorId } from "@/lib/apSubjects";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import SubjectCard from "@/components/SubjectCard";

type ResolvedMajor = { id: MajorId; name: string; subjects: ApSubject[] };

export default function MajorSelector({
  majors,
  t,
  locale,
}: {
  majors: ResolvedMajor[];
  t: Dictionary;
  locale: Locale;
}) {
  const [selected, setSelected] = useState<MajorId | null>(null);
  const active = majors.find((m) => m.id === selected) ?? null;

  return (
    <div>
      {/* Major buttons */}
      <p className="text-center text-sm font-semibold uppercase tracking-wide text-brand-600">
        {t.majors.prompt}
      </p>
      <div className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-2.5">
        {majors.map((m) => {
          const isActive = m.id === selected;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelected(isActive ? null : m.id)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                  : "border-slate-300 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {m.name}
            </button>
          );
        })}
      </div>

      {/* Result */}
      {active ? (
        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-brand-500" />
            <h3 className="text-lg font-bold text-slate-900">
              {t.majors.resultLabel}
              <span className="ml-2 font-medium text-slate-400">· {active.name}</span>
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {active.subjects.map((s, i) => (
              <SubjectCard key={s.slug} subject={s} t={t} locale={locale} delay={(i % 3) * 70} />
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-10 text-center text-sm text-slate-400">{t.majors.hint}</p>
      )}
    </div>
  );
}
