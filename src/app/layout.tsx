import './globals.css';
import Header from '@/components/main/header/Header';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <header className="bg-graphite py-[16px]">
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
