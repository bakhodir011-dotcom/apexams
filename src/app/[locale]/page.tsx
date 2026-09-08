export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <main className="p-10 text-2xl font-bold">AP · {locale}</main>;
}
