import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AnimatePresence } from 'motion/react';

import localFont from 'next/font/local';
import '@/styles/globals.css';

const pretendard = localFont({
  src: '../font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '배영준 | 프론트엔드 개발자 포트폴리오 ',
  description: '주니어 개발자 포트폴리오입니다!',
  icons: {
    icon: '/star.gif',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} font-pretendard bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <Navbar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
