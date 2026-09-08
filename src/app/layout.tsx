import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ap.innovativecentre.org"),
  title: "AP Exams at Innovative Centre — Advanced Placement in Uzbekistan",
  description:
    "Take Advanced Placement (AP) exams at Innovative Centre in Uzbekistan. Explore the 27 AP subjects we offer, exam information, and the May 2027 exam-date schedule. Register via Telegram.",
  keywords: [
    "AP exams",
    "Advanced Placement",
    "College Board",
    "Innovative Centre",
    "Uzbekistan",
    "AP test centre",
  ],
  openGraph: {
    title: "AP Exams at Innovative Centre — Advanced Placement in Uzbekistan",
    description:
      "Sit College Board AP exams in Uzbekistan. Explore 27 subjects, exam details and the May 2027 schedule.",
    url: "https://ap.innovativecentre.org",
    siteName: "AP Exams · Innovative Centre",
    type: "website",
  },
  alternates: {
    languages: {
      "uz-UZ": "/uz",
      "ru-RU": "/ru",
      "en-GB": "/en",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
