import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getMetadata } from '@/lib/utils/metadata';

const font = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  ...getMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} ${font.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
