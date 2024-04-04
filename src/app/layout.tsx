import './globals.css';
import Header from '@/components/main/header/Header';
import { Providers } from './providers';

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
        <Providers locale={locale}>
          <header className="bg-graphite pt-[16px]">
            <Header />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
