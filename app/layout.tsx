import './globals.css'
import type { Metadata } from 'next'
import { Yusei_Magic, RocknRoll_One, Stick } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundShapes from '@/components/BackgroundShapes'

// 本文用（手書き風）
const yuseiMagic = Yusei_Magic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-yusei-magic',
})

// メイン見出し用（手書き風）
const yuseiMagicHeading = Yusei_Magic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-yusei-magic-heading',
})

// サブ見出し・ボタン用（やや太めで安定感）
const rocknRoll = RocknRoll_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rocknroll-one',
})

// 遊び要素用（軽めのアクセント）
const stick = Stick({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-stick',
})

export const metadata: Metadata = {
  title: {
  default: 'こどもの森 幼稚園',
    template: '%s | こどもの森 幼稚園',
  },
  description: '子どもたちの笑顔があふれる幼稚園です。一人ひとりの個性を大切に、心身ともに健やかな成長をサポートします。',
  keywords: ['幼稚園', 'こどもの森 幼稚園', '保育', '教育', '子育て', '東京都'],
  authors: [{ name: 'こどもの森 幼稚園' }],
  creator: 'こどもの森 幼稚園',
  publisher: 'こどもの森 幼稚園',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://kodomonomori-kdg.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: process.env.SITE_URL || 'https://kodomonomori-kdg.vercel.app',
    siteName: 'こどもの森 幼稚園',
    title: 'こどもの森 幼稚園',
    description: '子どもたちの笑顔があふれる幼稚園です。一人ひとりの個性を大切に、心身ともに健やかな成長をサポートします。',
    images: [
      {
        url: '/ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'こどもの森 幼稚園',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'こどもの森 幼稚園',
    description: '子どもたちの笑顔があふれる幼稚園です。一人ひとりの個性を大切に、心身ともに健やかな成長をサポートします。',
    images: ['/ogp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`
          ${yuseiMagic.variable}
          ${yuseiMagicHeading.variable}
          ${rocknRoll.variable}
          ${stick.variable}
          font-sans bg-atago-bg text-atago-text
        `}
      >
        {/* グローバル固定背景SVG */}
        <BackgroundShapes />
        
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
