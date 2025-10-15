import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp'
});

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
      <body className={`${notoSansJP.className} bg-atago-bg text-atago-text`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
