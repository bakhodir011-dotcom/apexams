import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AP Exams at Innovative Centre — Advanced Placement in Uzbekistan",
  description:
    "Take Advanced Placement (AP) exams at Innovative Centre in Uzbekistan. Explore the AP subjects we offer, exam information, and the upcoming exam-date schedule. Register via Telegram.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
