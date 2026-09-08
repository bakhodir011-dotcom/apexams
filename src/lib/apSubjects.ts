// AP subject catalog offered at Innovative Centre (27 subjects).
// Descriptions from apstudents.collegeboard.org/courses. Durations/formats are
// the published College Board exam structures. Two entries (Cybersecurity,
// Business with Personal Finance) are new College Board pilots.

import type { Locale } from "@/i18n/config";

export type Localized = Record<Locale, string>;

export type ApCategory =
  | "math-cs"
  | "sciences"
  | "english"
  | "history-social"
  | "arts"
  | "business";

export type ApFormat = "mcq-frq" | "mcq-create" | "mcq-frq-sight" | "pilot";

export type ApSubject = {
  slug: string;
  name: string; // English proper name, shown in all locales
  category: ApCategory;
  description: Localized;
  format: ApFormat;
  duration: string; // language-neutral, e.g. "3h 15m" or "TBA"
  collegeBoardUrl: string;
  pilot?: boolean;
};

export const CATEGORY_ORDER: ApCategory[] = [
  "math-cs",
  "sciences",
  "english",
  "history-social",
  "arts",
  "business",
];

const CB = "https://apstudents.collegeboard.org/courses";
const cb = (slug: string) => `${CB}/ap-${slug}`;

export const AP_SUBJECTS: ApSubject[] = [
  // ---------- Math & Computer Science ----------
  {
    slug: "calculus-ab",
    name: "AP Calculus AB",
    category: "math-cs",
    format: "mcq-frq",
    duration: "3h 15m",
    collegeBoardUrl: cb("calculus-ab"),
    description: {
      en: "Differential and integral calculus — limits, derivatives, integrals and the Fundamental Theorem — roughly a first semester of college calculus.",
      ru: "Дифференциальное и интегральное исчисление: пределы, производные, интегралы и основная теорема — примерно первый семестр вузовского матанализа.",
      uz: "Differensial va integral hisob: limitlar, hosilalar, integrallar va asosiy teorema — taxminan universitetning birinchi semestr matematik analizi.",
    },
  },
  {
    slug: "calculus-bc",
    name: "AP Calculus BC",
    category: "math-cs",
    format: "mcq-frq",
    duration: "3h 15m",
    collegeBoardUrl: cb("calculus-bc"),
    description: {
      en: "All of Calculus AB plus series, parametric, polar and vector functions — about two semesters of college calculus.",
      ru: "Весь курс Calculus AB плюс ряды, параметрические, полярные и векторные функции — примерно два семестра вузовского матанализа.",
      uz: "Calculus AB ning barchasi hamda qatorlar, parametrik, qutb va vektor funksiyalari — taxminan ikki semestr universitet matematik analizi.",
    },
  },
  {
    slug: "precalculus",
    name: "AP Precalculus",
    category: "math-cs",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("precalculus"),
    description: {
      en: "Modeling with polynomial, exponential, logarithmic and trigonometric functions to prepare for calculus and other college math.",
      ru: "Моделирование с помощью многочленов, показательных, логарифмических и тригонометрических функций для подготовки к матанализу.",
      uz: "Ko‘phad, ko‘rsatkichli, logarifmik va trigonometrik funksiyalar bilan modellashtirish — matematik analizga tayyorgarlik.",
    },
  },
  {
    slug: "statistics",
    name: "AP Statistics",
    category: "math-cs",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("statistics"),
    description: {
      en: "Collecting, analysing and drawing conclusions from data: exploring data, sampling, probability and statistical inference.",
      ru: "Сбор, анализ и выводы на основе данных: исследование данных, выборки, вероятность и статистический вывод.",
      uz: "Ma’lumotlarni yig‘ish, tahlil qilish va xulosa chiqarish: ma’lumotlarni o‘rganish, tanlanma, ehtimollik va statistik xulosa.",
    },
  },
  {
    slug: "computer-science-a",
    name: "AP Computer Science A",
    category: "math-cs",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("computer-science-a"),
    description: {
      en: "Object-oriented programming and problem solving in Java: classes, data structures, algorithms and program design.",
      ru: "Объектно-ориентированное программирование и решение задач на Java: классы, структуры данных, алгоритмы и проектирование программ.",
      uz: "Java’da ob’ektga yo‘naltirilgan dasturlash va masala yechish: sinflar, ma’lumot tuzilmalari, algoritmlar va dastur loyihalash.",
    },
  },
  {
    slug: "computer-science-principles",
    name: "AP Computer Science Principles",
    category: "math-cs",
    format: "mcq-create",
    duration: "2h",
    collegeBoardUrl: cb("computer-science-principles"),
    description: {
      en: "The foundations of computing — algorithms, programming, data, the internet and the impact of technology on society.",
      ru: "Основы информатики — алгоритмы, программирование, данные, интернет и влияние технологий на общество.",
      uz: "Hisoblash asoslari — algoritmlar, dasturlash, ma’lumotlar, internet va texnologiyaning jamiyatga ta’siri.",
    },
  },
  {
    slug: "cybersecurity",
    name: "AP Cybersecurity",
    category: "math-cs",
    format: "pilot",
    duration: "TBA",
    collegeBoardUrl: CB,
    pilot: true,
    description: {
      en: "A new College Board pilot course introducing the principles of cybersecurity — protecting systems, networks and data from digital threats.",
      ru: "Новый пилотный курс College Board по основам кибербезопасности: защита систем, сетей и данных от цифровых угроз.",
      uz: "College Board’ning yangi sinov kursi — kiberxavfsizlik asoslari: tizim, tarmoq va ma’lumotlarni raqamli tahdidlardan himoya qilish.",
    },
  },
  // ---------- Sciences ----------
  {
    slug: "biology",
    name: "AP Biology",
    category: "sciences",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("biology"),
    description: {
      en: "College-level biology: evolution, cellular processes, genetics, information transfer, ecology and interactions of living systems.",
      ru: "Биология вузовского уровня: эволюция, клеточные процессы, генетика, передача информации, экология и взаимодействие живых систем.",
      uz: "Universitet darajasidagi biologiya: evolyutsiya, hujayra jarayonlari, genetika, axborot uzatish, ekologiya va tirik tizimlar.",
    },
  },
  {
    slug: "chemistry",
    name: "AP Chemistry",
    category: "sciences",
    format: "mcq-frq",
    duration: "3h 15m",
    collegeBoardUrl: cb("chemistry"),
    description: {
      en: "College-level chemistry: atomic structure, bonding, reactions, kinetics, thermodynamics and equilibrium, with hands-on lab work.",
      ru: "Химия вузовского уровня: строение атома, связи, реакции, кинетика, термодинамика и равновесие, с лабораторной работой.",
      uz: "Universitet darajasidagi kimyo: atom tuzilishi, bog‘lanishlar, reaksiyalar, kinetika, termodinamika va muvozanat hamda laboratoriya ishlari.",
    },
  },
  {
    slug: "environmental-science",
    name: "AP Environmental Science",
    category: "sciences",
    format: "mcq-frq",
    duration: "2h 40m",
    collegeBoardUrl: cb("environmental-science"),
    description: {
      en: "The scientific principles behind natural systems and the environmental problems, both natural and human-made, that affect them.",
      ru: "Научные принципы природных систем и экологические проблемы — природные и антропогенные, — которые на них влияют.",
      uz: "Tabiiy tizimlar ortidagi ilmiy tamoyillar va ularga ta’sir qiluvchi tabiiy hamda inson keltirib chiqargan ekologik muammolar.",
    },
  },
  {
    slug: "physics-1",
    name: "AP Physics 1: Algebra-Based",
    category: "sciences",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("physics-1"),
    description: {
      en: "Algebra-based introductory physics: kinematics, dynamics, energy, momentum, rotation, simple harmonic motion and fluids.",
      ru: "Вводная физика на основе алгебры: кинематика, динамика, энергия, импульс, вращение, гармонические колебания и жидкости.",
      uz: "Algebra asosidagi kirish fizikasi: kinematika, dinamika, energiya, impuls, aylanma harakat, garmonik tebranish va suyuqliklar.",
    },
  },
  {
    slug: "physics-2",
    name: "AP Physics 2: Algebra-Based",
    category: "sciences",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("physics-2"),
    description: {
      en: "Algebra-based physics continued: fluids, thermodynamics, electromagnetism, optics and modern (quantum and nuclear) physics.",
      ru: "Продолжение физики на основе алгебры: жидкости, термодинамика, электромагнетизм, оптика и современная (квантовая и ядерная) физика.",
      uz: "Algebra asosidagi fizika davomi: suyuqliklar, termodinamika, elektromagnetizm, optika va zamonaviy (kvant va yadro) fizika.",
    },
  },
  {
    slug: "physics-c-mechanics",
    name: "AP Physics C: Mechanics",
    category: "sciences",
    format: "mcq-frq",
    duration: "1h 30m",
    collegeBoardUrl: cb("physics-c-mechanics"),
    description: {
      en: "Calculus-based mechanics: kinematics, Newton's laws, work and energy, momentum, rotation, oscillations and gravitation.",
      ru: "Механика на основе матанализа: кинематика, законы Ньютона, работа и энергия, импульс, вращение, колебания и гравитация.",
      uz: "Matematik analiz asosidagi mexanika: kinematika, Nyuton qonunlari, ish va energiya, impuls, aylanish, tebranish va tortishish.",
    },
  },
  {
    slug: "physics-c-electricity-and-magnetism",
    name: "AP Physics C: Electricity and Magnetism",
    category: "sciences",
    format: "mcq-frq",
    duration: "1h 30m",
    collegeBoardUrl: cb("physics-c-electricity-and-magnetism"),
    description: {
      en: "Calculus-based electromagnetism: electrostatics, conductors and capacitors, circuits, magnetic fields and electromagnetism.",
      ru: "Электромагнетизм на основе матанализа: электростатика, проводники и конденсаторы, цепи, магнитные поля и электромагнетизм.",
      uz: "Matematik analiz asosidagi elektromagnetizm: elektrostatika, o‘tkazgichlar va kondensatorlar, zanjirlar, magnit maydonlar.",
    },
  },
  // ---------- English ----------
  {
    slug: "english-language-and-composition",
    name: "AP English Language and Composition",
    category: "english",
    format: "mcq-frq",
    duration: "3h 15m",
    collegeBoardUrl: cb("english-language-and-composition"),
    description: {
      en: "Reading and writing analytical, argumentative and rhetorical prose — analysing how writers make and support their arguments.",
      ru: "Чтение и написание аналитической, аргументативной и риторической прозы — анализ того, как авторы строят аргументы.",
      uz: "Analitik, dalilga asoslangan va ritorik nasrni o‘qish va yozish — yozuvchilar dalillarini qanday qurishini tahlil qilish.",
    },
  },
  {
    slug: "english-literature-and-composition",
    name: "AP English Literature and Composition",
    category: "english",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("english-literature-and-composition"),
    description: {
      en: "Reading and interpreting imaginative literature — fiction, poetry and drama — and writing about it with literary analysis.",
      ru: "Чтение и интерпретация художественной литературы — прозы, поэзии и драмы — и написание литературного анализа.",
      uz: "Badiiy adabiyotni — nasr, she’riyat va dramani — o‘qish, talqin qilish va adabiy tahlil bilan yozish.",
    },
  },
  // ---------- History & Social Sciences ----------
  {
    slug: "microeconomics",
    name: "AP Microeconomics",
    category: "history-social",
    format: "mcq-frq",
    duration: "2h 10m",
    collegeBoardUrl: cb("microeconomics"),
    description: {
      en: "How individuals and firms make decisions: supply and demand, markets, production, costs and the role of government.",
      ru: "Как принимают решения люди и фирмы: спрос и предложение, рынки, производство, издержки и роль государства.",
      uz: "Shaxslar va firmalar qarorlari: talab va taklif, bozorlar, ishlab chiqarish, xarajatlar va davlatning roli.",
    },
  },
  {
    slug: "macroeconomics",
    name: "AP Macroeconomics",
    category: "history-social",
    format: "mcq-frq",
    duration: "2h 10m",
    collegeBoardUrl: cb("macroeconomics"),
    description: {
      en: "Economic systems as a whole: national income, inflation, unemployment, growth, and monetary and fiscal policy.",
      ru: "Экономика в целом: национальный доход, инфляция, безработица, рост, а также денежно-кредитная и фискальная политика.",
      uz: "Iqtisodiyot yaxlit holda: milliy daromad, inflyatsiya, ishsizlik, o‘sish hamda pul-kredit va fiskal siyosat.",
    },
  },
  {
    slug: "psychology",
    name: "AP Psychology",
    category: "history-social",
    format: "mcq-frq",
    duration: "2h",
    collegeBoardUrl: cb("psychology"),
    description: {
      en: "The scientific study of behaviour and mental processes: biological bases, cognition, development, personality and disorders.",
      ru: "Научное изучение поведения и психических процессов: биологические основы, познание, развитие, личность и расстройства.",
      uz: "Xulq-atvor va ruhiy jarayonlarni ilmiy o‘rganish: biologik asoslar, kognitsiya, rivojlanish, shaxs va buzilishlar.",
    },
  },
  {
    slug: "united-states-history",
    name: "AP U.S. History",
    category: "history-social",
    format: "mcq-frq",
    duration: "3h 15m",
    collegeBoardUrl: cb("united-states-history"),
    description: {
      en: "American history from c. 1491 to the present, analysing primary sources and developing historical arguments.",
      ru: "История США примерно с 1491 года до наших дней: анализ первоисточников и построение исторических аргументов.",
      uz: "Taxminan 1491-yildan hozirgacha AQSh tarixi: birlamchi manbalarni tahlil qilish va tarixiy dalillar tuzish.",
    },
  },
  {
    slug: "world-history-modern",
    name: "AP World History: Modern",
    category: "history-social",
    format: "mcq-frq",
    duration: "3h 15m",
    collegeBoardUrl: cb("world-history-modern"),
    description: {
      en: "World history from c. 1200 CE to the present — cross-regional interactions, empires, revolutions and globalisation.",
      ru: "Всемирная история примерно с 1200 года н.э. до наших дней: межрегиональные связи, империи, революции и глобализация.",
      uz: "Taxminan milodiy 1200-yildan hozirgacha jahon tarixi: mintaqalararo aloqalar, imperiyalar, inqiloblar va globallashuv.",
    },
  },
  {
    slug: "united-states-government-and-politics",
    name: "AP U.S. Government and Politics",
    category: "history-social",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("united-states-government-and-politics"),
    description: {
      en: "The U.S. political system: the constitution, institutions, civil rights and liberties, political beliefs and participation.",
      ru: "Политическая система США: конституция, институты, гражданские права и свободы, политические взгляды и участие.",
      uz: "AQSh siyosiy tizimi: konstitutsiya, institutlar, fuqarolik huquqlari va erkinliklari, siyosiy qarashlar va ishtirok.",
    },
  },
  {
    slug: "comparative-government-and-politics",
    name: "AP Comparative Government and Politics",
    category: "history-social",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("comparative-government-and-politics"),
    description: {
      en: "Comparing political systems across six countries — China, Iran, Mexico, Nigeria, Russia and the United Kingdom.",
      ru: "Сравнение политических систем шести стран — Китая, Ирана, Мексики, Нигерии, России и Великобритании.",
      uz: "Olti davlat — Xitoy, Eron, Meksika, Nigeriya, Rossiya va Buyuk Britaniya siyosiy tizimlarini qiyoslash.",
    },
  },
  {
    slug: "human-geography",
    name: "AP Human Geography",
    category: "history-social",
    format: "mcq-frq",
    duration: "2h 15m",
    collegeBoardUrl: cb("human-geography"),
    description: {
      en: "How people shape and are shaped by places: population, migration, culture, cities, agriculture and economic development.",
      ru: "Как люди формируют пространство и зависят от него: население, миграция, культура, города, сельское хозяйство и развитие.",
      uz: "Odamlar makonni qanday shakllantirishi va undan ta’sirlanishi: aholi, migratsiya, madaniyat, shaharlar, qishloq xo‘jaligi.",
    },
  },
  // ---------- Arts ----------
  {
    slug: "art-history",
    name: "AP Art History",
    category: "arts",
    format: "mcq-frq",
    duration: "3h",
    collegeBoardUrl: cb("art-history"),
    description: {
      en: "Global art history across 250 works — analysing form, content and context from prehistory to the present.",
      ru: "Всемирная история искусства на 250 произведениях: анализ формы, содержания и контекста от древности до наших дней.",
      uz: "250 ta asar orqali jahon san’ati tarixi: shakl, mazmun va kontekstni qadimdan hozirgacha tahlil qilish.",
    },
  },
  {
    slug: "music-theory",
    name: "AP Music Theory",
    category: "arts",
    format: "mcq-frq-sight",
    duration: "2h 40m",
    collegeBoardUrl: cb("music-theory"),
    description: {
      en: "The building blocks of music: notation, harmony, melody, rhythm and form, plus aural skills and sight-singing.",
      ru: "Основы музыки: нотация, гармония, мелодия, ритм и форма, а также слуховые навыки и сольфеджио.",
      uz: "Musiqa asoslari: nota yozuvi, garmoniya, melodiya, ritm va shakl hamda eshitish ko‘nikmalari va sight-singing.",
    },
  },
  // ---------- Business & Finance ----------
  {
    slug: "business-personal-finance",
    name: "AP Business with Personal Finance",
    category: "business",
    format: "pilot",
    duration: "TBA",
    collegeBoardUrl: CB,
    pilot: true,
    description: {
      en: "A new College Board pilot course combining business fundamentals with practical personal-finance skills for everyday decisions.",
      ru: "Новый пилотный курс College Board: основы бизнеса и практические навыки личных финансов для повседневных решений.",
      uz: "College Board’ning yangi sinov kursi: biznes asoslari va kundalik qarorlar uchun amaliy shaxsiy moliya ko‘nikmalari.",
    },
  },
];

// ---- Exam components (section structure) per subject ----
// Component types map to translated labels in the dictionary.
export type ExamComponentType =
  | "mcq" // Multiple Choice
  | "saq" // Short Answer
  | "frq" // Free Response
  | "dbq" // Document-Based Question
  | "leq" // Long Essay
  | "create" // Create Performance Task
  | "essays"; // Free-response essays (English)

export type ExamComponent = {
  type: ExamComponentType;
  questions: number | null; // null = no fixed question count (e.g. performance task)
  score: number; // percent of total score
};

// Standard College Board exam structures. Percentages of total score.
export const EXAM_COMPONENTS: Record<string, ExamComponent[]> = {
  "calculus-ab": [
    { type: "mcq", questions: 45, score: 50 },
    { type: "frq", questions: 6, score: 50 },
  ],
  "calculus-bc": [
    { type: "mcq", questions: 45, score: 50 },
    { type: "frq", questions: 6, score: 50 },
  ],
  precalculus: [
    { type: "mcq", questions: 40, score: 62.5 },
    { type: "frq", questions: 4, score: 37.5 },
  ],
  statistics: [
    { type: "mcq", questions: 40, score: 50 },
    { type: "frq", questions: 6, score: 50 },
  ],
  "computer-science-a": [
    { type: "mcq", questions: 40, score: 50 },
    { type: "frq", questions: 4, score: 50 },
  ],
  "computer-science-principles": [
    { type: "mcq", questions: 70, score: 70 },
    { type: "create", questions: null, score: 30 },
  ],
  cybersecurity: [],
  biology: [
    { type: "mcq", questions: 60, score: 50 },
    { type: "frq", questions: 6, score: 50 },
  ],
  chemistry: [
    { type: "mcq", questions: 60, score: 50 },
    { type: "frq", questions: 7, score: 50 },
  ],
  "environmental-science": [
    { type: "mcq", questions: 80, score: 60 },
    { type: "frq", questions: 3, score: 40 },
  ],
  "physics-1": [
    { type: "mcq", questions: 50, score: 50 },
    { type: "frq", questions: 5, score: 50 },
  ],
  "physics-2": [
    { type: "mcq", questions: 50, score: 50 },
    { type: "frq", questions: 4, score: 50 },
  ],
  "physics-c-mechanics": [
    { type: "mcq", questions: 35, score: 50 },
    { type: "frq", questions: 3, score: 50 },
  ],
  "physics-c-electricity-and-magnetism": [
    { type: "mcq", questions: 35, score: 50 },
    { type: "frq", questions: 3, score: 50 },
  ],
  "english-language-and-composition": [
    { type: "mcq", questions: 45, score: 45 },
    { type: "essays", questions: 3, score: 55 },
  ],
  "english-literature-and-composition": [
    { type: "mcq", questions: 55, score: 45 },
    { type: "essays", questions: 3, score: 55 },
  ],
  microeconomics: [
    { type: "mcq", questions: 60, score: 66.7 },
    { type: "frq", questions: 3, score: 33.3 },
  ],
  macroeconomics: [
    { type: "mcq", questions: 60, score: 66.7 },
    { type: "frq", questions: 3, score: 33.3 },
  ],
  psychology: [
    { type: "mcq", questions: 75, score: 66.7 },
    { type: "frq", questions: 2, score: 33.3 },
  ],
  "united-states-history": [
    { type: "mcq", questions: 55, score: 40 },
    { type: "saq", questions: 3, score: 20 },
    { type: "dbq", questions: 1, score: 25 },
    { type: "leq", questions: 1, score: 15 },
  ],
  "world-history-modern": [
    { type: "mcq", questions: 55, score: 40 },
    { type: "saq", questions: 3, score: 20 },
    { type: "dbq", questions: 1, score: 25 },
    { type: "leq", questions: 1, score: 15 },
  ],
  "united-states-government-and-politics": [
    { type: "mcq", questions: 55, score: 50 },
    { type: "frq", questions: 4, score: 50 },
  ],
  "comparative-government-and-politics": [
    { type: "mcq", questions: 55, score: 50 },
    { type: "frq", questions: 4, score: 50 },
  ],
  "human-geography": [
    { type: "mcq", questions: 60, score: 50 },
    { type: "frq", questions: 3, score: 50 },
  ],
  "art-history": [
    { type: "mcq", questions: 80, score: 50 },
    { type: "frq", questions: 6, score: 50 },
  ],
  "music-theory": [
    { type: "mcq", questions: 75, score: 45 },
    { type: "frq", questions: 9, score: 55 },
  ],
  "business-personal-finance": [],
};

export function getExamComponents(slug: string): ExamComponent[] {
  return EXAM_COMPONENTS[slug] ?? [];
}

// ---- Recommended AP subjects by intended university major ----
export type MajorId =
  | "engineering"
  | "computer-science"
  | "business-economics"
  | "medicine-life-sciences"
  | "natural-sciences"
  | "mathematics"
  | "humanities-law"
  | "social-sciences"
  | "arts"
  | "environmental";

export const MAJORS: { id: MajorId; subjectSlugs: string[] }[] = [
  {
    id: "engineering",
    subjectSlugs: [
      "calculus-ab", "calculus-bc", "physics-1", "physics-2",
      "physics-c-mechanics", "physics-c-electricity-and-magnetism",
      "chemistry", "computer-science-a", "statistics",
    ],
  },
  {
    id: "computer-science",
    subjectSlugs: [
      "computer-science-a", "computer-science-principles", "cybersecurity",
      "calculus-ab", "calculus-bc", "statistics", "physics-1",
    ],
  },
  {
    id: "business-economics",
    subjectSlugs: [
      "microeconomics", "macroeconomics", "statistics", "calculus-ab",
      "business-personal-finance", "computer-science-principles",
    ],
  },
  {
    id: "medicine-life-sciences",
    subjectSlugs: [
      "biology", "chemistry", "physics-1", "psychology",
      "statistics", "environmental-science",
    ],
  },
  {
    id: "natural-sciences",
    subjectSlugs: [
      "physics-1", "physics-2", "physics-c-mechanics",
      "physics-c-electricity-and-magnetism", "chemistry", "biology",
      "calculus-bc", "environmental-science",
    ],
  },
  {
    id: "mathematics",
    subjectSlugs: [
      "calculus-ab", "calculus-bc", "precalculus", "statistics",
      "computer-science-a",
    ],
  },
  {
    id: "humanities-law",
    subjectSlugs: [
      "english-language-and-composition", "english-literature-and-composition",
      "united-states-history", "world-history-modern",
      "united-states-government-and-politics",
      "comparative-government-and-politics", "psychology", "human-geography",
    ],
  },
  {
    id: "social-sciences",
    subjectSlugs: [
      "psychology", "human-geography", "microeconomics", "macroeconomics",
      "united-states-government-and-politics",
      "comparative-government-and-politics", "statistics",
    ],
  },
  {
    id: "arts",
    subjectSlugs: ["art-history", "music-theory", "english-literature-and-composition"],
  },
  {
    id: "environmental",
    subjectSlugs: [
      "environmental-science", "biology", "chemistry", "human-geography",
      "statistics",
    ],
  },
];

export function getMajorSubjects(id: MajorId): ApSubject[] {
  const major = MAJORS.find((m) => m.id === id);
  if (!major) return [];
  return major.subjectSlugs
    .map((slug) => getSubject(slug))
    .filter((s): s is ApSubject => Boolean(s));
}

export function getSubject(slug: string): ApSubject | undefined {
  return AP_SUBJECTS.find((s) => s.slug === slug);
}

export function subjectsByCategory(category: ApCategory): ApSubject[] {
  return AP_SUBJECTS.filter((s) => s.category === category);
}
