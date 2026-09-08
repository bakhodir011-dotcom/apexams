import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const langMap: Record<Locale, string> = { uz: "uz-UZ", ru: "ru-RU", en: "en-GB" };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html lang={langMap[locale as Locale]}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
