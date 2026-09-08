import type { Locale } from "@/i18n/config";
import type { ApCategory, ApFormat, ExamComponentType } from "@/lib/apSubjects";

export type NavStrings = {
  subjects: string;
  about: string;
  dates: string;
  faq: string;
  contact: string;
  register: string;
};

export type Dictionary = {
  nav: NavStrings;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaRegister: string;
    ctaExplore: string;
    stats: { value: string; label: string }[];
  };
  about: {
    heading: string;
    lead: string;
    body: string[];
    points: { title: string; body: string }[];
  };
  subjects: {
    heading: string;
    subheading: string;
    categories: Record<ApCategory, string>;
    formatLabels: Record<ApFormat, string>;
    formatLabel: string;
    durationLabel: string;
    tba: string;
    pilotBadge: string;
    registerBtn: string;
    detailsBtn: string;
  };
  why: {
    heading: string;
    subheading: string;
    items: { title: string; body: string }[];
  };
  process: {
    heading: string;
    subheading: string;
    steps: { title: string; body: string }[];
  };
  dates: {
    heading: string;
    subheading: string;
    window: string;
    colDate: string;
    colMorning: string;
    colAfternoon: string;
    weekdays: Record<"mon" | "tue" | "wed" | "thu" | "fri", string>;
    note: string;
  };
  faq: {
    heading: string;
    subheading: string;
    items: { q: string; a: string }[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  venue: {
    heading: string;
    address: string;
    centreLine: string;
    directions: string;
  };
  footer: {
    tagline: string;
    linksHeading: string;
    contactHeading: string;
    venueHeading: string;
    rights: string;
  };
  subjectPage: {
    back: string;
    overview: string;
    keyFacts: string;
    formatLabel: string;
    durationLabel: string;
    categoryLabel: string;
    examDateLabel: string;
    official: string;
    registerCta: string;
    registerNote: string;
    related: string;
    notScheduled: string;
    examComponents: string;
    componentQuestions: string;
    componentQuestion: string;
    componentScore: string;
    componentNote: string;
    componentsTba: string;
    componentLabels: Record<ExamComponentType, string>;
  };
};

const en: Dictionary = {
  nav: {
    subjects: "Subjects",
    about: "About AP",
    dates: "Exam dates",
    faq: "FAQ",
    contact: "Contact",
    register: "Register",
  },
  hero: {
    badge: "AP Exams · Innovative Centre",
    title: "Take AP Exams at Innovative Centre",
    subtitle:
      "Sit College Board Advanced Placement (AP) exams in Uzbekistan. Explore the subjects we offer, exam details and the May 2027 schedule — then register in a couple of taps.",
    ctaRegister: "Register via Telegram",
    ctaExplore: "Explore subjects",
    stats: [
      { value: "27", label: "AP subjects offered" },
      { value: "6", label: "subject areas" },
      { value: "2027", label: "May exam session" },
    ],
  },
  about: {
    heading: "What are AP exams?",
    lead:
      "Advanced Placement (AP) is a College Board programme of college-level courses and exams recognised by universities worldwide.",
    body: [
      "AP exams let secondary-school students demonstrate college-level achievement. Each exam is scored 1–5, and strong scores can earn university credit or advanced placement at thousands of universities in the US and beyond.",
      "At Innovative Centre you can register for and sit AP exams locally — no need to travel abroad. Choose a subject below to see what it covers, the exam format and its date in the May 2027 administration.",
    ],
    points: [
      {
        title: "College-level rigour",
        body: "AP courses mirror introductory university courses and are respected by admissions officers.",
      },
      {
        title: "Scored 1 to 5",
        body: "A score of 3 or higher is generally considered passing; many universities grant credit for 4–5.",
      },
      {
        title: "Recognised worldwide",
        body: "Thousands of universities across 60+ countries accept AP scores for credit or placement.",
      },
    ],
  },
  subjects: {
    heading: "Choose your subject",
    subheading:
      "Select any subject to see its overview, exam format and official College Board information.",
    categories: {
      "math-cs": "Mathematics & Computer Science",
      sciences: "Sciences",
      english: "English",
      "history-social": "History & Social Sciences",
      arts: "Arts",
      business: "Business & Finance",
    },
    formatLabels: {
      "mcq-frq": "Multiple-choice & free-response",
      "mcq-create": "Multiple-choice & performance task",
      "mcq-frq-sight": "Multiple-choice, free-response & sight-singing",
      pilot: "New pilot exam",
    },
    formatLabel: "Format",
    durationLabel: "Duration",
    tba: "To be announced",
    pilotBadge: "New pilot",
    registerBtn: "Register",
    detailsBtn: "Details",
  },
  why: {
    heading: "Why sit your AP exams here",
    subheading: "A trusted local centre with the support you need to do your best.",
    items: [
      { title: "Free access to AP Classroom", body: "Registered candidates get official College Board resources — instructional videos, progress checks, practice questions and more." },
      { title: "Support through registration", body: "Our team helps with registration, AP Classroom access, exam-day requirements and key College Board deadlines." },
      { title: "Local test centre", body: "Sit official AP exams in Samarkand — save the cost and stress of travelling abroad." },
      { title: "27 subjects", body: "From Calculus and Physics to Economics, History and the Arts — a wide catalog to choose from." },
      { title: "Guided registration", body: "Our team walks you through subject choice, deadlines and exam-day logistics." },
      { title: "Experienced staff", body: "Innovative Centre has years of experience running international exams and supporting students." },
      { title: "Clear schedule", body: "Know your exact exam dates in advance for the May 2027 administration." },
      { title: "University-ready", body: "AP scores strengthen applications and can earn credit at universities worldwide." },
    ],
  },
  process: {
    heading: "How to register",
    subheading: "Three simple steps to secure your seat.",
    steps: [
      { title: "1 · Choose subjects", body: "Browse the catalog and pick the AP subjects you want to sit." },
      { title: "2 · Message us on Telegram", body: "Tap Register to reach our team on Telegram with your subject choices." },
      { title: "3 · Confirm & prepare", body: "We confirm your registration, fees and exam dates so you can focus on studying." },
    ],
  },
  dates: {
    heading: "AP exam dates",
    subheading: "The 2027 AP exams take place over two weeks in May.",
    window: "May 3–14, 2027",
    colDate: "Date",
    colMorning: "Morning (8 a.m.)",
    colAfternoon: "Afternoon (12 p.m.)",
    weekdays: { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri" },
    note: "Only the subjects offered at Innovative Centre are shown. Dates and times follow the official College Board schedule and may be updated.",
  },
  faq: {
    heading: "Frequently asked questions",
    subheading: "Everything you need to know before registering.",
    items: [
      { q: "Who can take AP exams?", a: "Any motivated student can register — you do not need to have taken an AP course at a specific school to sit the exam at our centre." },
      { q: "How do I register?", a: "Tap any Register button to message our team on Telegram. We'll guide you through subject choice, fees and deadlines." },
      { q: "When are the exams?", a: "AP exams are held once a year in May. The 2027 administration runs May 3–14, 2027." },
      { q: "How are AP exams scored?", a: "Each exam is scored from 1 to 5. A 3 is generally considered passing, and scores of 4–5 can earn university credit." },
      { q: "Which subjects can I take here?", a: "Innovative Centre offers 27 AP subjects across mathematics, sciences, English, social sciences, the arts and business — see the full list above." },
      { q: "Do AP scores help with university?", a: "Yes. Thousands of universities worldwide accept AP scores for admission strength, course credit or advanced placement." },
    ],
  },
  cta: {
    heading: "Ready to register for your AP exams?",
    body: "Message our team on Telegram and we'll help you choose subjects and secure your seat.",
    button: "Register via Telegram",
  },
  venue: {
    heading: "Test venue",
    address: "Gagarin street 95A, Samarkand city, Uzbekistan",
    centreLine: "Innovative Centre (788001) administers AP Exams exclusively in Samarkand and offers 27 AP subjects.",
    directions: "Open in Google Maps",
  },
  footer: {
    tagline: "Take your AP exams at Innovative Centre — Advanced Placement in Samarkand, Uzbekistan.",
    linksHeading: "Explore",
    contactHeading: "Contact",
    venueHeading: "Test venue",
    rights: "All rights reserved.",
  },
  subjectPage: {
    back: "All subjects",
    overview: "Overview",
    keyFacts: "Key facts",
    formatLabel: "Exam format",
    durationLabel: "Exam duration",
    categoryLabel: "Subject area",
    examDateLabel: "2027 exam date",
    official: "Official College Board page",
    registerCta: "Register via Telegram",
    registerNote: "Tap to message our team and register for this exam.",
    related: "Related subjects",
    notScheduled: "See the exam-dates schedule",
    examComponents: "Exam components",
    componentQuestions: "questions",
    componentQuestion: "question",
    componentScore: "of Score",
    componentNote: "Structure follows the official College Board format and may be updated — see the College Board page for the latest details.",
    componentsTba: "Exam structure for this new pilot will be announced by the College Board.",
    componentLabels: {
      mcq: "Multiple Choice",
      saq: "Short Answer",
      frq: "Free Response",
      dbq: "Document-Based Question",
      leq: "Long Essay",
      create: "Create Performance Task",
      essays: "Free Response (essays)",
    },
  },
};

const ru: Dictionary = {
  nav: {
    subjects: "Предметы",
    about: "Об AP",
    dates: "Даты экзаменов",
    faq: "Вопросы",
    contact: "Контакты",
    register: "Регистрация",
  },
  hero: {
    badge: "AP экзамены · Innovative Centre",
    title: "Сдавайте экзамены AP в Innovative Centre",
    subtitle:
      "Сдавайте экзамены Advanced Placement (AP) от College Board в Узбекистане. Изучите доступные предметы, детали экзаменов и расписание на май 2027 года — и зарегистрируйтесь в пару нажатий.",
    ctaRegister: "Регистрация через Telegram",
    ctaExplore: "Выбрать предмет",
    stats: [
      { value: "27", label: "предметов AP" },
      { value: "6", label: "направлений" },
      { value: "2027", label: "майская сессия" },
    ],
  },
  about: {
    heading: "Что такое экзамены AP?",
    lead:
      "Advanced Placement (AP) — это программа College Board с курсами и экзаменами вузовского уровня, признаваемая университетами по всему миру.",
    body: [
      "Экзамены AP позволяют школьникам показать достижения вузовского уровня. Каждый экзамен оценивается от 1 до 5, а высокие баллы могут дать зачёт или продвинутое зачисление в тысячах университетов США и других стран.",
      "В Innovative Centre вы можете зарегистрироваться и сдать экзамены AP на месте — без поездок за границу. Выберите предмет ниже, чтобы увидеть его содержание, формат экзамена и дату в майской сессии 2027 года.",
    ],
    points: [
      { title: "Вузовский уровень", body: "Курсы AP соответствуют вводным университетским курсам и уважаются приёмными комиссиями." },
      { title: "Оценка от 1 до 5", body: "Балл 3 и выше обычно считается проходным; многие вузы дают зачёт за 4–5." },
      { title: "Признание в мире", body: "Тысячи университетов в 60+ странах принимают баллы AP для зачёта или зачисления." },
    ],
  },
  subjects: {
    heading: "Выберите предмет",
    subheading:
      "Выберите любой предмет, чтобы увидеть обзор, формат экзамена и официальную информацию College Board.",
    categories: {
      "math-cs": "Математика и информатика",
      sciences: "Естественные науки",
      english: "Английский язык",
      "history-social": "История и общественные науки",
      arts: "Искусство",
      business: "Бизнес и финансы",
    },
    formatLabels: {
      "mcq-frq": "Тесты и развёрнутые ответы",
      "mcq-create": "Тесты и практическое задание",
      "mcq-frq-sight": "Тесты, развёрнутые ответы и сольфеджио",
      pilot: "Новый пилотный экзамен",
    },
    formatLabel: "Формат",
    durationLabel: "Длительность",
    tba: "Будет объявлено",
    pilotBadge: "Новый пилот",
    registerBtn: "Регистрация",
    detailsBtn: "Подробнее",
  },
  why: {
    heading: "Почему стоит сдавать AP здесь",
    subheading: "Надёжный местный центр и поддержка, чтобы показать лучший результат.",
    items: [
      { title: "Бесплатный доступ к AP Classroom", body: "Зарегистрированные кандидаты получают официальные ресурсы College Board — обучающие видео, progress checks, практические вопросы и другое." },
      { title: "Поддержка при регистрации", body: "Наша команда помогает с регистрацией, доступом к AP Classroom, требованиями к дню экзамена и важными сроками College Board." },
      { title: "Местный центр", body: "Сдавайте официальные экзамены AP в Самарканде — без затрат и стресса поездок за границу." },
      { title: "27 предметов", body: "От матанализа и физики до экономики, истории и искусства — широкий выбор." },
      { title: "Помощь с регистрацией", body: "Наша команда поможет с выбором предметов, сроками и организацией в день экзамена." },
      { title: "Опытный персонал", body: "У Innovative Centre многолетний опыт проведения международных экзаменов." },
      { title: "Чёткое расписание", body: "Знайте точные даты экзаменов майской сессии 2027 года заранее." },
      { title: "Готовность к вузу", body: "Баллы AP усиливают заявки и могут дать зачёт в университетах по всему миру." },
    ],
  },
  process: {
    heading: "Как зарегистрироваться",
    subheading: "Три простых шага, чтобы занять место.",
    steps: [
      { title: "1 · Выберите предметы", body: "Просмотрите каталог и выберите нужные предметы AP." },
      { title: "2 · Напишите нам в Telegram", body: "Нажмите «Регистрация», чтобы связаться с нашей командой в Telegram." },
      { title: "3 · Подтверждение и подготовка", body: "Мы подтвердим регистрацию, оплату и даты, чтобы вы могли готовиться." },
    ],
  },
  dates: {
    heading: "Даты экзаменов AP",
    subheading: "Экзамены AP 2027 года проходят в течение двух недель в мае.",
    window: "3–14 мая 2027",
    colDate: "Дата",
    colMorning: "Утро (8:00)",
    colAfternoon: "День (12:00)",
    weekdays: { mon: "Пн", tue: "Вт", wed: "Ср", thu: "Чт", fri: "Пт" },
    note: "Показаны только предметы, доступные в Innovative Centre. Даты и время соответствуют официальному расписанию College Board и могут обновляться.",
  },
  faq: {
    heading: "Частые вопросы",
    subheading: "Всё, что нужно знать перед регистрацией.",
    items: [
      { q: "Кто может сдавать AP?", a: "Зарегистрироваться может любой мотивированный ученик — необязательно проходить курс AP в конкретной школе, чтобы сдать экзамен в нашем центре." },
      { q: "Как зарегистрироваться?", a: "Нажмите любую кнопку «Регистрация», чтобы написать нашей команде в Telegram. Мы поможем с выбором предметов, оплатой и сроками." },
      { q: "Когда экзамены?", a: "Экзамены AP проходят раз в год в мае. Сессия 2027 года — с 3 по 14 мая 2027." },
      { q: "Как оцениваются экзамены?", a: "Каждый экзамен оценивается от 1 до 5. Балл 3 обычно считается проходным, а 4–5 могут дать вузовский зачёт." },
      { q: "Какие предметы доступны здесь?", a: "Innovative Centre предлагает 27 предметов AP: математика, науки, английский, общественные науки, искусство и бизнес — полный список выше." },
      { q: "Помогают ли баллы AP при поступлении?", a: "Да. Тысячи университетов принимают баллы AP для усиления заявки, зачёта курсов или продвинутого зачисления." },
    ],
  },
  cta: {
    heading: "Готовы зарегистрироваться на экзамены AP?",
    body: "Напишите нашей команде в Telegram — поможем выбрать предметы и занять место.",
    button: "Регистрация через Telegram",
  },
  venue: {
    heading: "Место проведения",
    address: "улица Гагарина 95A, город Самарканд, Узбекистан",
    centreLine: "Innovative Centre (788001) проводит экзамены AP исключительно в Самарканде и предлагает 27 предметов AP.",
    directions: "Открыть в Google Maps",
  },
  footer: {
    tagline: "Сдавайте экзамены AP в Innovative Centre — Advanced Placement в Самарканде, Узбекистан.",
    linksHeading: "Разделы",
    contactHeading: "Контакты",
    venueHeading: "Место проведения",
    rights: "Все права защищены.",
  },
  subjectPage: {
    back: "Все предметы",
    overview: "Обзор",
    keyFacts: "Кратко",
    formatLabel: "Формат экзамена",
    durationLabel: "Длительность",
    categoryLabel: "Направление",
    examDateLabel: "Дата экзамена 2027",
    official: "Официальная страница College Board",
    registerCta: "Регистрация через Telegram",
    registerNote: "Нажмите, чтобы написать нам и зарегистрироваться на этот экзамен.",
    related: "Похожие предметы",
    notScheduled: "Смотрите расписание экзаменов",
    examComponents: "Структура экзамена",
    componentQuestions: "вопросов",
    componentQuestion: "вопрос",
    componentScore: "от оценки",
    componentNote: "Структура соответствует официальному формату College Board и может обновляться — актуальные детали см. на странице College Board.",
    componentsTba: "Структура этого нового пилотного экзамена будет объявлена College Board.",
    componentLabels: {
      mcq: "Тестовые вопросы",
      saq: "Краткий ответ",
      frq: "Развёрнутый ответ",
      dbq: "Задание по документам",
      leq: "Эссе",
      create: "Практическое задание Create",
      essays: "Развёрнутый ответ (эссе)",
    },
  },
};

const uz: Dictionary = {
  nav: {
    subjects: "Fanlar",
    about: "AP haqida",
    dates: "Imtihon sanalari",
    faq: "Savollar",
    contact: "Aloqa",
    register: "Ro‘yxatdan o‘tish",
  },
  hero: {
    badge: "AP imtihonlari · Innovative Centre",
    title: "AP imtihonlarini Innovative Centre’da topshiring",
    subtitle:
      "College Board Advanced Placement (AP) imtihonlarini O‘zbekistonda topshiring. Taklif etilayotgan fanlar, imtihon tafsilotlari va 2027-yil may jadvalini ko‘rib chiqing — so‘ng bir necha bosishda ro‘yxatdan o‘ting.",
    ctaRegister: "Telegram orqali ro‘yxatdan o‘tish",
    ctaExplore: "Fanlarni ko‘rish",
    stats: [
      { value: "27", label: "AP fani" },
      { value: "6", label: "yo‘nalish" },
      { value: "2027", label: "may sessiyasi" },
    ],
  },
  about: {
    heading: "AP imtihonlari nima?",
    lead:
      "Advanced Placement (AP) — College Board’ning universitet darajasidagi kurslar va imtihonlar dasturi bo‘lib, dunyo bo‘ylab universitetlar tomonidan tan olinadi.",
    body: [
      "AP imtihonlari o‘quvchilarga universitet darajasidagi bilimini namoyish etish imkonini beradi. Har bir imtihon 1–5 ball bilan baholanadi va yuqori ballar AQSh va boshqa mamlakatlardagi minglab universitetlarda kredit yoki ilg‘or joylashuv beradi.",
      "Innovative Centre’da AP imtihonlariga joyida ro‘yxatdan o‘tishingiz va topshirishingiz mumkin — chet elga borish shart emas. Fan mazmuni, imtihon formati va 2027-yil may sessiyasidagi sanasini ko‘rish uchun quyidan fan tanlang.",
    ],
    points: [
      { title: "Universitet darajasi", body: "AP kurslari kirish universitet kurslariga mos va qabul komissiyalari tomonidan qadrlanadi." },
      { title: "1 dan 5 gacha baho", body: "3 va undan yuqori ball odatda o‘tish balli hisoblanadi; ko‘p universitetlar 4–5 uchun kredit beradi." },
      { title: "Dunyoda tan olingan", body: "60+ mamlakatdagi minglab universitetlar AP ballarini kredit yoki joylashuv uchun qabul qiladi." },
    ],
  },
  subjects: {
    heading: "Fanni tanlang",
    subheading:
      "Umumiy ma’lumot, imtihon formati va College Board’ning rasmiy ma’lumotini ko‘rish uchun istalgan fanni tanlang.",
    categories: {
      "math-cs": "Matematika va informatika",
      sciences: "Tabiiy fanlar",
      english: "Ingliz tili",
      "history-social": "Tarix va ijtimoiy fanlar",
      arts: "San’at",
      business: "Biznes va moliya",
    },
    formatLabels: {
      "mcq-frq": "Test va yozma javoblar",
      "mcq-create": "Test va amaliy topshiriq",
      "mcq-frq-sight": "Test, yozma javoblar va sight-singing",
      pilot: "Yangi sinov imtihoni",
    },
    formatLabel: "Format",
    durationLabel: "Davomiyligi",
    tba: "E’lon qilinadi",
    pilotBadge: "Yangi sinov",
    registerBtn: "Ro‘yxatdan o‘tish",
    detailsBtn: "Batafsil",
  },
  why: {
    heading: "Nega AP imtihonlarini shu yerda topshirish kerak",
    subheading: "Ishonchli mahalliy markaz va eng yaxshi natija uchun qo‘llab-quvvatlash.",
    items: [
      { title: "AP Classroom’ga bepul kirish", body: "Ro‘yxatdan o‘tgan nomzodlar College Board’ning rasmiy resurslarini oladi — o‘quv videolari, progress checks, amaliy savollar va boshqalar." },
      { title: "Ro‘yxatdan o‘tishda qo‘llab-quvvatlash", body: "Jamoamiz ro‘yxatdan o‘tish, AP Classroom’ga kirish, imtihon kuni talablari va College Board muddatlarida yordam beradi." },
      { title: "Mahalliy markaz", body: "Rasmiy AP imtihonlarini Samarqandda topshiring — chet elga borish xarajati va tashvishisiz." },
      { title: "27 ta fan", body: "Matematik analiz va fizikadan iqtisodiyot, tarix va san’atgacha — keng tanlov." },
      { title: "Ro‘yxatdan o‘tishda yordam", body: "Jamoamiz fan tanlash, muddatlar va imtihon kuni tashkiliy ishlarida yordam beradi." },
      { title: "Tajribali xodimlar", body: "Innovative Centre’da xalqaro imtihonlarni o‘tkazish bo‘yicha ko‘p yillik tajriba bor." },
      { title: "Aniq jadval", body: "2027-yil may sessiyasidagi aniq imtihon sanalarini oldindan biling." },
      { title: "Universitetga tayyor", body: "AP ballari arizani kuchaytiradi va dunyo universitetlarida kredit berishi mumkin." },
    ],
  },
  process: {
    heading: "Qanday ro‘yxatdan o‘tish kerak",
    subheading: "O‘rningizni band qilish uchun uch oddiy qadam.",
    steps: [
      { title: "1 · Fanlarni tanlang", body: "Katalogni ko‘rib chiqing va topshirmoqchi bo‘lgan AP fanlarini tanlang." },
      { title: "2 · Telegram’da yozing", body: "Ro‘yxatdan o‘tish tugmasini bosib, fan tanlovlaringiz bilan jamoamizga Telegram’da murojaat qiling." },
      { title: "3 · Tasdiqlash va tayyorgarlik", body: "Ro‘yxat, to‘lov va sanalarni tasdiqlaymiz — siz tayyorgarlikka e’tibor bering." },
    ],
  },
  dates: {
    heading: "AP imtihon sanalari",
    subheading: "2027-yilgi AP imtihonlari may oyida ikki hafta davomida o‘tkaziladi.",
    window: "2027-yil 3–14-may",
    colDate: "Sana",
    colMorning: "Ertalab (8:00)",
    colAfternoon: "Tushdan keyin (12:00)",
    weekdays: { mon: "Dush", tue: "Sesh", wed: "Chor", thu: "Pay", fri: "Jum" },
    note: "Faqat Innovative Centre’da taklif etiladigan fanlar ko‘rsatilgan. Sanalar va vaqtlar College Board’ning rasmiy jadvaliga muvofiq va yangilanishi mumkin.",
  },
  faq: {
    heading: "Ko‘p beriladigan savollar",
    subheading: "Ro‘yxatdan o‘tishdan oldin bilishingiz kerak bo‘lgan hamma narsa.",
    items: [
      { q: "AP imtihonlarini kim topshira oladi?", a: "Har qanday tirishqoq o‘quvchi ro‘yxatdan o‘ta oladi — markazimizda imtihon topshirish uchun muayyan maktabda AP kursini o‘tish shart emas." },
      { q: "Qanday ro‘yxatdan o‘taman?", a: "Istalgan “Ro‘yxatdan o‘tish” tugmasini bosib, jamoamizga Telegram’da yozing. Fan tanlash, to‘lov va muddatlarda yordam beramiz." },
      { q: "Imtihonlar qachon?", a: "AP imtihonlari yiliga bir marta may oyida bo‘ladi. 2027-yilgi sessiya 3–14-may kunlari o‘tadi." },
      { q: "AP imtihonlari qanday baholanadi?", a: "Har bir imtihon 1 dan 5 gacha baholanadi. 3 odatda o‘tish balli, 4–5 esa universitet krediti berishi mumkin." },
      { q: "Bu yerda qaysi fanlarni topshirsam bo‘ladi?", a: "Innovative Centre 27 ta AP fanini taklif etadi: matematika, tabiiy fanlar, ingliz tili, ijtimoiy fanlar, san’at va biznes — to‘liq ro‘yxat yuqorida." },
      { q: "AP ballari universitetga yordam beradimi?", a: "Ha. Dunyo bo‘ylab minglab universitetlar AP ballarini ariza kuchi, kurs krediti yoki ilg‘or joylashuv uchun qabul qiladi." },
    ],
  },
  cta: {
    heading: "AP imtihonlariga ro‘yxatdan o‘tishga tayyormisiz?",
    body: "Jamoamizga Telegram’da yozing — fan tanlash va o‘rin band qilishda yordam beramiz.",
    button: "Telegram orqali ro‘yxatdan o‘tish",
  },
  venue: {
    heading: "Imtihon manzili",
    address: "Gagarin ko‘chasi 95A, Samarqand shahri, O‘zbekiston",
    centreLine: "Innovative Centre (788001) AP imtihonlarini faqat Samarqandda o‘tkazadi va 27 ta AP fanini taklif etadi.",
    directions: "Google Maps’da ochish",
  },
  footer: {
    tagline: "AP imtihonlaringizni Innovative Centre’da topshiring — Samarqand, O‘zbekistonda Advanced Placement.",
    linksHeading: "Bo‘limlar",
    contactHeading: "Aloqa",
    venueHeading: "Imtihon manzili",
    rights: "Barcha huquqlar himoyalangan.",
  },
  subjectPage: {
    back: "Barcha fanlar",
    overview: "Umumiy ma’lumot",
    keyFacts: "Asosiy ma’lumot",
    formatLabel: "Imtihon formati",
    durationLabel: "Davomiyligi",
    categoryLabel: "Yo‘nalish",
    examDateLabel: "2027 imtihon sanasi",
    official: "College Board rasmiy sahifasi",
    registerCta: "Telegram orqali ro‘yxatdan o‘tish",
    registerNote: "Bu imtihonga ro‘yxatdan o‘tish uchun bosing.",
    related: "Tegishli fanlar",
    notScheduled: "Imtihon sanalari jadvalini ko‘ring",
    examComponents: "Imtihon tuzilishi",
    componentQuestions: "savol",
    componentQuestion: "savol",
    componentScore: "balldan",
    componentNote: "Tuzilma College Board’ning rasmiy formatiga mos va yangilanishi mumkin — eng so‘nggi ma’lumot uchun College Board sahifasini ko‘ring.",
    componentsTba: "Ushbu yangi sinov imtihoni tuzilishi College Board tomonidan e’lon qilinadi.",
    componentLabels: {
      mcq: "Test savollari",
      saq: "Qisqa javob",
      frq: "Yozma javob",
      dbq: "Hujjatga asoslangan savol",
      leq: "Insho",
      create: "Create amaliy topshirig‘i",
      essays: "Yozma javob (insholar)",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { uz, ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.uz;
}
