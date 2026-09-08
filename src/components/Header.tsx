"use client";

import { useState } from "react";
import { localeNames, localeFlags, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { TELEGRAM_URL } from "@/lib/config";
import { CheckMark } from "@/components/Logo";

export default function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const nav = [
    { href: `/${locale}#subjects`, label: t.nav.subjects },
    { href: `/${locale}#about`, label: t.nav.about },
    { href: `/${locale}#dates`, label: t.nav.dates },
    { href: `/${locale}#faq`, label: t.nav.faq },
    { href: `/${locale}#contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={`/${locale}`} className="flex items-center gap-2.5">
          <CheckMark className="h-8 w-8 flex-shrink-0 text-ic-800" />
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-ic-800">Innovative Centre</span>
            <span className="block text-[10.5px] font-semibold tracking-wide text-ic-500">AP CENTRE 788001 · SAMARKAND</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-600">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300"
              aria-haspopup="true"
              aria-expanded={langOpen}
            >
              <span>{localeFlags[locale]}</span>
              <span className="hidden sm:inline">{locale.toUpperCase()}</span>
              <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
                {locales.map((l) => (
                  <a
                    key={l}
                    href={`/${l}`}
                    className={`flex items-center gap-2.5 px-3.5 py-2 text-sm transition hover:bg-slate-50 ${
                      l === locale ? "font-semibold text-brand-600" : "text-slate-700"
                    }`}
                  >
                    <span>{localeFlags[l]}</span>
                    {localeNames[l]}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:inline-block"
          >
            {t.nav.register}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
            aria-label="Menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-t border-slate-100 pt-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                {t.nav.register}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
