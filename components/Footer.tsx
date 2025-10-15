"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Printer, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden border-t border-sky-100 bg-no-repeat bg-cover bg-center h-[100vh]"
      style={{
        backgroundImage: "url('/ttt.svg')",
        backgroundSize: '130%',
        backgroundPosition: 'center bottom',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">森</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-atago-text-dark">
                  こどもの森 幼稚園
                </span>
                <span className="text-xs text-atago-text-body">
                  KODOMO NO MORI KINDERGARTEN
                </span>
              </div>
            </div>
            <p className="text-sm text-atago-text-body leading-relaxed">
              子どもたちの笑顔があふれる幼稚園です。一人ひとりの個性を大切に、心身ともに健やかな成長をサポートします。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-atago-text-dark mb-4">園情報</h3>
            <div className="space-y-3 text-sm text-atago-text-body">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-sky-600" />
                <span>〒481-0004<br />愛知県北名古屋市○○○○</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-sky-600" />
                <span>TEL: 0568-33-3333</span>
              </div>
              <div className="flex items-center">
                <Printer className="w-4 h-4 mr-2 flex-shrink-0 text-sky-600" />
                <span>FAX: 03-1234-5679</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-atago-text-dark mb-4">クイックリンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-atago-text-body hover:text-sky-600 transition-colors"
                >
                  幼稚園のこと
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="text-atago-text-body hover:text-sky-600 transition-colors"
                >
                  教育と保育
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="text-atago-text-body hover:text-sky-600 transition-colors"
                >
                  入園案内
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-atago-text-body hover:text-sky-600 transition-colors"
                >
                  子育て支援
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-atago-text-body hover:text-sky-600 transition-colors"
                >
                  よくある質問
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-atago-text-body hover:text-sky-600 transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-atago-text-dark mb-4">フォローする</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-atago-text-body mb-2">Instagram</p>
                <div className="w-32 h-32 bg-white/90 rounded-lg border-2 border-gray-200 flex items-center justify-center shadow-sm">
                  <Instagram className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-xs text-atago-text-body mt-1">QRコード</p>
              </div>
              <div>
                <p className="text-sm text-atago-text-body mb-2">
                  LINE公式アカウント
                </p>
                <div className="w-32 h-32 bg-white/90 rounded-lg border-2 border-gray-200 flex items-center justify-center shadow-sm">
                  <span className="text-3xl text-gray-400">LINE</span>
                </div>
                <p className="text-xs text-atago-text-body mt-1">QRコード</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-sky-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-atago-text-body">
              <Link
                href="/privacy"
                className="hover:text-sky-600 transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-sky-600 transition-colors"
              >
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
            <p className="text-sm text-atago-text-body">
              © 2024 こどもの森 幼稚園. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;