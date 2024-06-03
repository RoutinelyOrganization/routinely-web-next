import NextSessionProvider from '@/providers/sessionProvider';
import StyledComponentsRegistry from '@/styles/registry';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextSessionProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextSessionProvider>
      </body>
    </html>
  );
}
