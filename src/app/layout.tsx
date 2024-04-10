import './globals.css';
import Header from '@/components/main/header/Header';
import { Providers } from './provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Petlove',
  description: 'Petlove official page',
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/favicon.png?v=4'],
    shortcut: ['/favicon.png'],
  },
  manifest: '/site.webmanifest',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  return (
    <html lang={'en'}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
