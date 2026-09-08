# ap.innovativecentre.org — Design Spec

**Date:** 2026-09-08
**Status:** Approved for planning
**Author:** Claude (brainstormed with Bakhodir)

## 1. Summary

A trilingual (Uzbek / Russian / English) **information + browse** marketing
website for taking **AP (Advanced Placement) exams at Innovative Centre**. The
site informs visitors about AP exams, lets them browse the AP subjects offered
by the centre and view details for each, and shows the upcoming AP exam-date
schedule.

There is **no database, no authentication, no registration form, and no
payments**. Every "Register" / primary call-to-action deep-links out to the
centre's Telegram: **https://t.me/Apforuzbekistan** (opens in a new tab).

The site is a sister to the existing **cambridgeexams** project
(exam.innovativecentre.org) and deliberately matches its stack, brand, and
structure for consistency.

## 2. Goals & Non-Goals

### Goals
- Explain what AP exams are and that Innovative Centre administers them.
- Let a visitor browse the 27 offered AP subjects, grouped by category.
- Show a per-subject detail page: overview, key facts, official College Board
  link, and a Telegram register CTA.
- Show the upcoming AP exam-date schedule (May 2027 administration).
- Fully trilingual UI (uz / ru / en).
- Consistent Innovative Centre branding (purple, existing logo).

### Non-Goals (explicitly out of scope)
- No candidate registration wizard, no database, no admin panel.
- No payments (Payme/Click/Uzum).
- No user accounts / auth / OTP.
- No email/SMS notifications.
- Deep multi-unit course syllabi (kept concise; official link covers depth).

## 3. Tech Stack

Matches cambridgeexams:
- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- Locale routing under `src/app/[locale]/`, dictionaries in `src/i18n/`.
- Because there is no server-side logic (no DB, no API routes), the app can use
  static rendering (candidate for `output: "export"` if it simplifies hosting;
  otherwise a standard Next.js server build like cambridgeexams). Decision
  deferred to the implementation plan; either is acceptable.

## 4. Routes / Pages

- `/[locale]` — **Landing page**, sections in order:
  1. Header — logo, nav, language switcher (uz/ru/en), mobile menu.
  2. Hero — "Take AP Exams at Innovative Centre" + subheadline + Telegram CTA.
  3. What is AP? — short informational section about Advanced Placement.
  4. Subjects grid — the 27 subjects grouped by category; each card links to
     its detail page.
  5. Why Innovative Centre — benefit cards.
  6. How it works / Process — steps to register (ending in the Telegram CTA).
  7. Exam dates — table of the upcoming AP administration schedule.
  8. FAQ — accordion.
  9. CTA banner — purple, → Telegram.
  10. Footer — contact info, links.
- `/[locale]/subjects/[slug]` — **Subject detail page**: name, category,
  overview/description, exam format, duration, key facts, official College
  Board course link, and a Telegram register CTA.
- Default locale: `uz`. Locales: `uz`, `ru`, `en`.

## 5. Data (static, in-repo — no DB)

### `src/lib/apSubjects.ts`
Typed array of the 27 offered subjects. Each entry:

```ts
type ApSubject = {
  slug: string;              // url slug, e.g. "calculus-bc"
  name: string;              // "AP Calculus BC"
  category: ApCategory;      // grouping
  description: string;       // concise overview (sourced from College Board)
  examFormat: string;        // e.g. "Multiple choice + free response"
  duration: string;          // e.g. "3h 15m"
  collegeBoardUrl: string;   // official apstudents.collegeboard.org course page
};
```

Categories (`ApCategory`):
- **Math & Computer Science** — Calculus AB, Calculus BC, Precalculus,
  Statistics, Computer Science A, Computer Science Principles, Cybersecurity.
- **Sciences** — Biology, Chemistry, Environmental Science, Physics 1,
  Physics 2, Physics C: Mechanics, Physics C: Electricity and Magnetism.
- **English** — English Language and Composition, English Literature and
  Composition.
- **History & Social Sciences** — Microeconomics, Macroeconomics, Psychology,
  U.S. History, World History: Modern, U.S. Government and Politics,
  Comparative Government and Politics, Human Geography.
- **Arts** — Art History, Music Theory.
- **Business & Finance** — Business with Personal Finance.

Full list of 27 (as provided by the client):
Calculus BC, Calculus AB, Microeconomics, Macroeconomics, Biology, Chemistry,
Comparative Government and Politics, Computer Science A, Computer Science
Principles, English Language and Composition, English Literature and
Composition, Environmental Science, Physics 1, Physics 2, Physics C:
Electricity and Magnetism, Physics C: Mechanics, Psychology, Statistics,
United States History, World History: Modern, United States Government and
Politics, Business with Personal Finance, Art History, Cybersecurity,
Precalculus, Human Geography, Music Theory.

> Note: **AP Business with Personal Finance** and **AP Cybersecurity** are new
> College Board pilot courses; their public info is limited. Their cards use
> the same shape as the rest, with whatever official detail is available and a
> link to the College Board page.

Content sourced from **apstudents.collegeboard.org/courses**.

### `src/lib/examDates.ts`
The upcoming AP exam schedule (**May 2027 administration** — the next cycle as
of Sept 2026), sourced from
**apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates**.
Structure: list of `{ date, session/subject }` rows suitable for the exam-dates
table. Exact rows populated during implementation from the official schedule.

## 6. i18n

- Same approach as cambridgeexams: dictionaries per locale in `src/i18n/`.
- UI chrome fully translated ×3. Subject descriptions kept concise and
  translated into all three languages.
- Language switcher in header; `uz` is the default locale.

## 7. Components (reuse/adapt from cambridgeexams)

Header, Logo (existing Innovative Centre SVG — do not change), Footer,
LanguageSwitcher, `SubjectCard` (adapted from ExamCard), category section
wrapper, exam-dates table, FAQ accordion, animated hero + scroll-reveal motion
(respecting `prefers-reduced-motion`). CTA buttons/link component that opens the
Telegram URL in a new tab (`target="_blank" rel="noopener noreferrer"`).

## 8. Branding & Contact

- **Brand:** Innovative Centre purple (deep indigo/purple `--color-brand-*`
  scale, matching cambridgeexams). Sans-serif headings. Clean/modern.
- **Logo:** reuse the existing Innovative Centre logo component/SVG.
- **Contact:** phone **+998 55 701 01 06**, email **ap@innovativecentre.org**
  (note: AP-specific email, differs from cambridgeexams' ic@).
- **Telegram (all CTAs):** https://t.me/Apforuzbekistan

## 9. Deployment

- Host on **Render** (like cambridgeexams), domain **ap.innovativecentre.org**
  via a DNS `ap` CNAME → Render.
- No environment variables, no database, no object storage required.
- Updates via `git push` → auto-redeploy.

## 10. Success Criteria

- All three locales render every page (landing + all 27 subject detail pages)
  with HTTP 200.
- Every "Register"/CTA opens https://t.me/Apforuzbekistan in a new tab.
- Subject grid groups all 27 subjects correctly; each card links to a working
  detail page with overview, key facts, and a College Board link.
- Exam-dates table shows the upcoming administration schedule.
- Language switcher swaps all UI copy; layout matches the Innovative Centre
  brand.
- `npx tsc --noEmit` and `npm run build` are clean.

## 11. Open Items (resolve during implementation)

- Confirm exact May 2027 AP exam-date rows from the official apcentral page.
- Confirm final concise descriptions for the two pilot subjects (Business with
  Personal Finance, Cybersecurity).
- Decide `output: "export"` vs standard Next.js server build for hosting.
