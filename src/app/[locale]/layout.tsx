import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { GOATCOUNTER_CODE } from "@/lib/config";

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
      <body className="font-sans">
        {children}
        {GOATCOUNTER_CODE && (
          // GoatCounter privacy-friendly analytics (no cookies). Counts page views.
          <script
            data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
            async
            src="https://gc.zgo.at/count.js"
          />
        )}
      </body>
    </html>
  );
}
