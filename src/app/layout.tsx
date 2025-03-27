import type { Metadata } from 'next';

import localFont from 'next/font/local';
import '@/styles/globals.css';

const pretendard = localFont({
  src: '../../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '배영준 | 프론트엔드 개발자 포트폴리오 ',
  description: '주니어 개발자 포트폴리오입니다!',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        {children}
      </body>
    </html>
  );
}
