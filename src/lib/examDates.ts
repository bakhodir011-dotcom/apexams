// Official 2027 AP Exam schedule (May 2027 administration), filtered to the
// subjects Innovative Centre offers. Source:
// https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates
// Exams begin at 8 a.m. (morning) and 12 p.m. (afternoon) local time.

export type ExamDateRow = {
  /** ISO-ish display date, e.g. "2027-05-03" */
  iso: string;
  /** Day + month for display, e.g. "May 3" */
  date: string;
  /** Weekday key for translation */
  weekday: "mon" | "tue" | "wed" | "thu" | "fri";
  /** Offered subjects tested in the morning slot */
  morning: string[];
  /** Offered subjects tested in the afternoon slot */
  afternoon: string[];
};

export const EXAM_WINDOW = "May 3–14, 2027";
export const EXAM_YEAR = 2027;

export const EXAM_DATES: ExamDateRow[] = [
  // Week 1: May 3–7, 2027
  {
    iso: "2027-05-03",
    date: "May 3",
    weekday: "mon",
    morning: ["AP Human Geography", "AP Physics C: Mechanics"],
    afternoon: ["AP Biology"],
  },
  {
    iso: "2027-05-04",
    date: "May 4",
    weekday: "tue",
    morning: ["AP Business with Personal Finance", "AP U.S. Government and Politics"],
    afternoon: ["AP Microeconomics"],
  },
  {
    iso: "2027-05-05",
    date: "May 5",
    weekday: "wed",
    morning: ["AP Cybersecurity", "AP English Literature and Composition"],
    afternoon: ["AP Physics 1: Algebra-Based", "AP Physics C: Electricity and Magnetism"],
  },
  {
    iso: "2027-05-06",
    date: "May 6",
    weekday: "thu",
    morning: ["AP Physics 2: Algebra-Based", "AP World History: Modern"],
    afternoon: ["AP Chemistry"],
  },
  {
    iso: "2027-05-07",
    date: "May 7",
    weekday: "fri",
    morning: ["AP U.S. History"],
    afternoon: ["AP Macroeconomics"],
  },
  // Week 2: May 10–14, 2027
  {
    iso: "2027-05-10",
    date: "May 10",
    weekday: "mon",
    morning: ["AP Calculus AB", "AP Calculus BC"],
    afternoon: ["AP Music Theory"],
  },
  {
    iso: "2027-05-11",
    date: "May 11",
    weekday: "tue",
    morning: ["AP Precalculus"],
    afternoon: ["AP Statistics"],
  },
  {
    iso: "2027-05-12",
    date: "May 12",
    weekday: "wed",
    morning: ["AP English Language and Composition"],
    afternoon: ["AP Art History", "AP Computer Science A"],
  },
  {
    iso: "2027-05-13",
    date: "May 13",
    weekday: "thu",
    morning: [],
    afternoon: ["AP Environmental Science"],
  },
  {
    iso: "2027-05-14",
    date: "May 14",
    weekday: "fri",
    morning: ["AP Comparative Government and Politics", "AP Computer Science Principles"],
    afternoon: ["AP Psychology"],
  },
];
