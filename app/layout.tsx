import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '愛宕幼稚園 | ATAGO KINDERGARTEN',
    template: '%s | 愛宕幼稚園',
  },
  description: '子どもたちの笑顔があふれる幼稚園です。一人ひとりの個性を大切に、心身ともに健やかな成長をサポートします。',
  keywords: ['幼稚園', '愛宕幼稚園', '保育', '教育', '子育て', '東京都'],
  authors: [{ name: '愛宕幼稚園' }],
  creator: '愛宕幼稚園',
  publisher: '愛宕幼稚園',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://atago-kdg.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://atago-kdg.example.com',
    siteName: '愛宕幼稚園',
    title: '愛宕幼稚園 | ATAGO KINDERGARTEN',
    description: '子どもたちの笑顔があふれる幼稚園です。一人ひとりの個性を大切に、心身ともに健やかな成長をサポートします。',
    images: [
      {
        url: '/ogp.jpg',
        width: 1200,
        height: 630,
        alt: '愛宕幼稚園',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '愛宕幼稚園 | ATAGO KINDERGARTEN',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
