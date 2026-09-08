# ap.innovativecentre.org Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a trilingual (uz/ru/en) info + browse marketing site for taking AP exams at Innovative Centre, where every CTA links to Telegram (no DB/auth/payments).

**Architecture:** Next.js 15 App Router with locale routing under `src/app/[locale]/`. All content is static and in-repo (`src/lib/apSubjects.ts`, `src/lib/examDates.ts`); UI copy in `src/i18n/dictionaries.ts`. Landing page composes section components; each of the 27 subjects gets a statically generated detail page. Structure, brand, and components are adapted from the sister project `cambridgeexams`.

**Tech Stack:** Next.js ^15.5.23, React 19, Tailwind CSS v4 (`@tailwindcss/postcss`), TypeScript ^5.7. Node >=24. No database, no API routes, no external runtime deps.

**Spec:** `docs/superpowers/specs/2026-09-08-ap-innovativecentre-design.md`

**Template source:** `/Users/br/Desktop/Claude Projects/cambridgeexams` — reuse `Reveal.tsx`, `CountUp.tsx`, `Faq.tsx`, `Logo.tsx`, `globals.css`, `i18n/config.ts` largely as-is; adapt `Header.tsx`, `ExamCard.tsx`→`SubjectCard.tsx`, `[locale]/layout.tsx`, `app/layout.tsx`, `app/page.tsx`.

## Global Constraints

- Locales: `["uz","ru","en"]`, default `uz`. Every page renders in all three.
- All "Register"/primary CTAs link to `https://t.me/Apforuzbekistan` with `target="_blank" rel="noopener noreferrer"`. Define once as `TELEGRAM_URL` in `src/lib/config.ts`.
- Contact: phone `+998 55 701 01 06`, email `ap@innovativecentre.org`.
- Brand: Innovative Centre purple `--color-brand-*` scale (copy from cambridgeexams `globals.css` verbatim). Sans-serif headings. Reuse existing Logo SVG (`CheckMark`) unchanged.
- No database, no auth, no admin, no payments, no API routes.
- Verification per task = `npx tsc --noEmit` clean + (where UI) browser check. There is no unit-test suite for this static marketing site; the test cycle is typecheck + `next build` + browser verification.
- Every task ends with a git commit.

---

### Task 1: Scaffold project + brand + i18n config + locale shell

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `next-env.d.ts`, `.gitignore`
- Create: `src/app/globals.css` (copy brand tokens + animations from cambridgeexams)
- Create: `src/i18n/config.ts` (copy from cambridgeexams verbatim)
- Create: `src/lib/config.ts` (`export const TELEGRAM_URL = "https://t.me/Apforuzbekistan"; export const CONTACT = { phone: "+998 55 701 01 06", email: "ap@innovativecentre.org" };`)
- Create: `src/app/layout.tsx` (AP metadata), `src/app/page.tsx` (redirect to defaultLocale), `src/app/[locale]/layout.tsx` (generateStaticParams over locales, langMap uz-UZ/ru-RU/en-GB), `src/app/[locale]/page.tsx` (temporary `<main>AP {locale}</main>` placeholder)

**Interfaces:**
- Produces: `TELEGRAM_URL`, `CONTACT` from `@/lib/config`; `locales`, `defaultLocale`, `Locale`, `localeNames`, `localeFlags` from `@/i18n/config`.

- [ ] Step 1: `cp` package.json, tsconfig.json, next.config.ts, postcss.config.mjs, next-env.d.ts from cambridgeexams; edit package.json `name` to `ap-innovativecentre`, remove `pg`/`@types/pg` deps (not needed), keep dev port `3200` (avoid clashing with cambridge's 3100).
- [ ] Step 2: Copy `src/app/globals.css` and `src/i18n/config.ts` verbatim.
- [ ] Step 3: Create `src/lib/config.ts`, `src/app/layout.tsx` (title "AP Exams at Innovative Centre — Uzbekistan", description mentioning Advanced Placement), `src/app/page.tsx`, `src/app/[locale]/layout.tsx`, `src/app/[locale]/page.tsx` placeholder.
- [ ] Step 4: `npm install`
- [ ] Step 5: Run `npx tsc --noEmit` → clean. Start `npm run dev`, browser-verify `/uz`, `/ru`, `/en` render the placeholder and `/` redirects to `/uz`.
- [ ] Step 6: `git add -A && git commit -m "Scaffold Next.js app, brand tokens, i18n config, locale shell"`

---

### Task 2: AP subjects data + exam dates data

**Files:**
- Create: `src/lib/apSubjects.ts`
- Create: `src/lib/examDates.ts`

**Interfaces:**
- Produces:
  ```ts
  export type ApCategory =
    | "math-cs" | "sciences" | "english"
    | "history-social" | "arts" | "business";
  export type ApSubject = {
    slug: string; name: string; category: ApCategory;
    description: string;       // concise, EN; translated variants handled in dictionaries if needed
    examFormat: string; duration: string; collegeBoardUrl: string;
  };
  export const AP_SUBJECTS: ApSubject[];
  export const CATEGORY_ORDER: ApCategory[];
  export function getSubject(slug: string): ApSubject | undefined;
  ```
  ```ts
  export type ExamDateRow = { date: string; subjects: string };
  export const EXAM_DATES: { session: string; rows: ExamDateRow[] }; // May 2027 administration
  ```

The 27 subjects (slug — name — category), College Board URL = `https://apstudents.collegeboard.org/courses/ap-<slug>`:
- calculus-ab — AP Calculus AB — math-cs
- calculus-bc — AP Calculus BC — math-cs
- precalculus — AP Precalculus — math-cs
- statistics — AP Statistics — math-cs
- computer-science-a — AP Computer Science A — math-cs
- computer-science-principles — AP Computer Science Principles — math-cs
- cybersecurity — AP Cybersecurity — math-cs *(new pilot)*
- biology — AP Biology — sciences
- chemistry — AP Chemistry — sciences
- environmental-science — AP Environmental Science — sciences
- physics-1 — AP Physics 1: Algebra-Based — sciences
- physics-2 — AP Physics 2: Algebra-Based — sciences
- physics-c-mechanics — AP Physics C: Mechanics — sciences
- physics-c-electricity-and-magnetism — AP Physics C: Electricity and Magnetism — sciences
- english-language-and-composition — AP English Language and Composition — english
- english-literature-and-composition — AP English Literature and Composition — english
- microeconomics — AP Microeconomics — history-social
- macroeconomics — AP Macroeconomics — history-social
- psychology — AP Psychology — history-social
- united-states-history — AP United States History — history-social
- world-history-modern — AP World History: Modern — history-social
- united-states-government-and-politics — AP United States Government and Politics — history-social
- comparative-government-and-politics — AP Comparative Government and Politics — history-social
- human-geography — AP Human Geography — history-social
- art-history — AP Art History — arts
- music-theory — AP Music Theory — arts
- business-personal-finance — AP Business with Personal Finance — business *(new pilot)*

- [ ] Step 1: For each subject, WebFetch its College Board course page (`https://apstudents.collegeboard.org/courses/ap-<slug>`) to extract a 1–2 sentence overview, exam format, and total exam duration. Batch fetches; for the two pilots (cybersecurity, business-personal-finance) use whatever official info exists and a sensible concise description if the page is sparse. Keep descriptions concise (English).
- [ ] Step 2: Write `src/lib/apSubjects.ts` with the `ApSubject` type, `AP_SUBJECTS` array (27 entries), `CATEGORY_ORDER = ["math-cs","sciences","english","history-social","arts","business"]`, and `getSubject`.
- [ ] Step 3: WebFetch `https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates` for the **2027** (May 2027) administration schedule; write `src/lib/examDates.ts` with the two-week schedule rows.
- [ ] Step 4: Run `npx tsc --noEmit` → clean.
- [ ] Step 5: `git add -A && git commit -m "Add AP subjects catalog (27) and May 2027 exam-date data"`

---

### Task 3: Trilingual dictionaries

**Files:**
- Create: `src/i18n/dictionaries.ts`

**Interfaces:**
- Produces:
  ```ts
  export type Dictionary = { /* nav, hero, whatIsAp, subjects (headings + category labels + card labels: overview/format/duration/registerBtn/detailsBtn), why (items), process (steps), dates (heading + col headers), faq (items), cta, footer, contact */ };
  export const dictionaries: Record<Locale, Dictionary>;
  export function getDictionary(locale: Locale): Dictionary;
  ```

- [ ] Step 1: Define the `Dictionary` type covering every UI string on the landing + subject detail pages (see interface note). Include `subjects.categories: Record<ApCategory, string>` for the 6 category labels ×3 languages.
- [ ] Step 2: Fill `dictionaries.uz`, `dictionaries.ru`, `dictionaries.en` with real translated copy (uz default). Model tone/keys on cambridgeexams `dictionaries.ts` but write AP-specific copy.
- [ ] Step 3: Run `npx tsc --noEmit` → clean.
- [ ] Step 4: `git add -A && git commit -m "Add trilingual dictionaries (uz/ru/en)"`

---

### Task 4: Shared components (Header, Footer, Logo, Reveal, CountUp, Faq)

**Files:**
- Create: `src/components/Logo.tsx`, `src/components/Reveal.tsx`, `src/components/CountUp.tsx` (copy verbatim from cambridgeexams)
- Create: `src/components/Faq.tsx` (copy; consumes `Dictionary`)
- Create: `src/components/Header.tsx` (adapt: AP nav anchors `#subjects #dates #faq #contact`, subtitle "AP EXAM CENTRE" not "UZ050 · CAMBRIDGE…", remove login link, Register button → `TELEGRAM_URL`)
- Create: `src/components/Footer.tsx` (contact block using `CONTACT`, Telegram link, locale links)

**Interfaces:**
- Consumes: `Dictionary`, `Locale`, `TELEGRAM_URL`, `CONTACT`.
- Produces: `<Header locale t />`, `<Footer locale t />`, `<Reveal>`, `<CountUp value />`, `<Faq t />`, `Logo`/`CheckMark`.

- [ ] Step 1: Copy Logo, Reveal, CountUp verbatim.
- [ ] Step 2: Copy Faq; verify its `t.faq.items` keys match the Dictionary from Task 3.
- [ ] Step 3: Adapt Header (Telegram CTA in both desktop + mobile, AP nav, no login).
- [ ] Step 4: Write Footer (contact info, Telegram, nav, language links, copyright).
- [ ] Step 5: `npx tsc --noEmit` → clean. `git add -A && git commit -m "Add shared components (Header, Footer, Logo, Reveal, CountUp, Faq)"`

---

### Task 5: SubjectCard + landing page

**Files:**
- Create: `src/components/SubjectCard.tsx` (adapt from ExamCard: category chip, name, description, format + duration facts, "Register" → Telegram, "Details" → `/${locale}/subjects/${slug}`)
- Modify: `src/app/[locale]/page.tsx` (replace placeholder with full landing page)

**Interfaces:**
- Consumes: `AP_SUBJECTS`, `CATEGORY_ORDER`, `getDictionary`, `Header`, `Footer`, `Faq`, `Reveal`, `CountUp`, `SubjectCard`, `TELEGRAM_URL`, `CONTACT`.

- [ ] Step 1: Write `SubjectCard.tsx`.
- [ ] Step 2: Build `[locale]/page.tsx` composing sections in spec order: Header, Hero (headline + Telegram CTA + hero stats via CountUp: "27 AP subjects", "May 2027 exams", etc.), What is AP?, Subjects grid grouped by `CATEGORY_ORDER` (section heading per category from `t.subjects.categories`), Why Innovative Centre (benefit cards w/ icons), How it works / Process (steps ending in Telegram CTA), Exam dates table (from `EXAM_DATES`), `<Faq/>`, CTA banner (bg-brand-800 → Telegram), `<Footer/>`. Section `id`s match Header anchors (`#subjects`, `#dates`, `#faq`, `#contact`).
- [ ] Step 3: `npx tsc --noEmit` → clean. `next build` → clean.
- [ ] Step 4: Browser-verify `/uz` landing renders all sections; language switch to `/ru` and `/en`; Register buttons open `t.me/Apforuzbekistan`; a subject card "Details" navigates to a subject URL (may 404 until Task 6). Screenshot.
- [ ] Step 5: `git add -A && git commit -m "Add SubjectCard and full landing page"`

---

### Task 6: Subject detail page

**Files:**
- Create: `src/app/[locale]/subjects/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getSubject`, `AP_SUBJECTS`, `getDictionary`, `Header`, `Footer`, `TELEGRAM_URL`.
- Produces: statically generated page per (locale × subject).

- [ ] Step 1: `generateStaticParams` = cross product of `locales` × `AP_SUBJECTS.map(s=>s.slug)`.
- [ ] Step 2: Page body: Header; breadcrumb back to `#subjects`; subject name + category chip; overview; key-facts panel (exam format, duration, category); official College Board link (new tab); prominent "Register via Telegram" CTA → `TELEGRAM_URL`; a "Related subjects" strip (same category) optional; Footer. Call `notFound()` for unknown slug. Add `generateMetadata` for per-subject `<title>`.
- [ ] Step 3: `npx tsc --noEmit` → clean. `next build` → clean (confirms all 27×3 pages generate).
- [ ] Step 4: Browser-verify a detail page in each locale; College Board link + Telegram CTA work. Screenshot.
- [ ] Step 5: `git add -A && git commit -m "Add per-subject detail pages"`

---

### Task 7: Polish, metadata, favicon, final verification + deploy docs

**Files:**
- Create: `public/favicon.ico` or `src/app/icon.*`, `public/robots.txt`
- Create: `DEPLOY.md` (Render Web Service + `ap` CNAME, no env vars; adapt from cambridgeexams DEPLOY.md, stripping DB/env sections)
- Modify: metadata / `app/layout.tsx` as needed

- [ ] Step 1: Add favicon/icon and basic OpenGraph metadata in `app/layout.tsx`.
- [ ] Step 2: Write `DEPLOY.md` (build `next build`, start `next start -p ${PORT:-3200}`, Render Node service, DNS `ap` CNAME → Render; note no database/env vars required).
- [ ] Step 3: Final `npx tsc --noEmit` + `next build` clean. Browser pass over `/uz /ru /en` landing + one subject page each; check mobile viewport + dark-mode/reduced-motion is unaffected; check no console errors. Screenshots for the user.
- [ ] Step 4: `git add -A && git commit -m "Add favicon, metadata, deploy docs; final polish"`

---

## Self-Review

- **Spec coverage:** §4 routes → Tasks 5,6. §5 data → Task 2. §6 i18n → Tasks 1,3. §7 components → Tasks 4,5. §8 brand/contact → Tasks 1,4. §9 deploy → Task 7. §10 success criteria → verification steps in Tasks 5,6,7. ✓
- **Placeholders:** subject descriptions/exam durations and exam-date rows are sourced via WebFetch inside Task 2 steps (real content produced at execution, not deferred TODOs). ✓
- **Type consistency:** `ApSubject`, `ApCategory`, `AP_SUBJECTS`, `getSubject`, `Dictionary`, `getDictionary`, `EXAM_DATES`, `TELEGRAM_URL`, `CONTACT` used consistently across tasks 2–7. ✓
