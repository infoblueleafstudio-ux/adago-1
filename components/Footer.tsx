import Link from 'next/link';
import { MapPin, Phone, Printer, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-50 to-blue-50 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">愛</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">愛宕幼稚園</span>
                <span className="text-xs text-gray-600">ATAGO KINDERGARTEN</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              子どもたちの笑顔があふれる幼稚園です。一人ひとりの個性を大切に、心身ともに健やかな成長をサポートします。
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">園情報</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-sky-600" />
                <span>〒123-4567<br />東京都○○区○○ 1-2-3</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-sky-600" />
                <span>TEL: 03-1234-5678</span>
              </div>
              <div className="flex items-center">
                <Printer className="w-4 h-4 mr-2 flex-shrink-0 text-sky-600" />
                <span>FAX: 03-1234-5679</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">クイックリンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sky-600 transition-colors">
                  幼稚園のこと
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-600 hover:text-sky-600 transition-colors">
                  教育と保育
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-gray-600 hover:text-sky-600 transition-colors">
                  入園案内
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-sky-600 transition-colors">
                  子育て支援
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-sky-600 transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-sky-600 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">フォローする</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Instagram</p>
                <div className="w-32 h-32 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">QRコード</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">LINE公式アカウント</p>
                <div className="w-32 h-32 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-3xl text-gray-400">LINE</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">QRコード</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sky-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-sky-600 transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/sitemap" className="hover:text-sky-600 transition-colors">
                サイトマップ
              </Link>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 transition-colors"
              >
                アクセスマップ
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 愛宕幼稚園. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
