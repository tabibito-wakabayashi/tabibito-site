import type { Metadata } from 'next';
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Space_Grotesk } from 'next/font/google';
import './globals.css';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  preload: true,
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-zen-kaku',
  display: 'swap',
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: '株式会社たびびと | "らしさ"が輝く世界を。SNSマーケティング&スクール',
  description:
    '「もし、あの出会いがなかったら…」と思われる特別な存在であり続ける。株式会社たびびとは、SNS運用代行・広告運用、Threads特化スクールで、あなたの"らしさ"を伝える旅に伴走します。',
  keywords: ['SNSマーケティング', 'SNS運用代行', 'Threads', 'SNSスクール', '広告運用', '株式会社たびびと'],
  openGraph: {
    title: '株式会社たびびと | "らしさ"が輝く世界を。',
    description: 'SNSマーケティング×スクールで、あなたの旅に伴走する。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${zenKaku.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
