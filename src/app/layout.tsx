import type { Metadata } from 'next';
import { Kalam, Comic_Neue } from 'next/font/google';
import './globals.css';

const kalam = Kalam({
  variable: '--font-user',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const comicNeue = Comic_Neue({
  variable: '--font-system',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Semicolon Fingers',
  description: 'Addressing the loneliness epidemic..',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/arms-400.png" />
      <body
        className={`
          ${kalam.variable}
          ${comicNeue.variable}
          antialiased
          font-system
        `}
      >
        {children}
      </body>
    </html>
  );
}
