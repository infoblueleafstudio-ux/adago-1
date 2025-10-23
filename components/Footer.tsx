"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Printer } from 'lucide-react';
import { kindergarten } from '@/lib/config';

const Footer = () => {
  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full
        h-[750px]
        bg-footer-pattern bg-cover bg-center
        text-gray-800
        flex flex-col items-center justify-center
        z-0
      "
    >

      {/* コンテンツ本体 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[12px] pb-12 md:pt-[5px] md:pb-[8px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            grid grid-cols-1
            gap-10
            text-center
            items-start md:items-center
            justify-items-center
          "
        >
          {/* 園情報 */}
          <div className="flex flex-col items-center text-center md:items-center">
            {/* ロゴと園名 */}
            <div className="flex flex-col items-center mb-6 md:mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-3">
                <img
                  src="/logo3.jpg"
                  alt="こどもの森ロゴ"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg md:text-xl">
                  こどもの森 幼稚園
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  KODOMO NO MORI KINDERGARTEN
                </p>
              </div>
            </div>

            {/* 住所・TEL・FAX */}
            <div className="space-y-2 text-sm md:text-base text-gray-700 -mb-[3px] md:mb-6 leading-relaxed">
              <div className="flex justify-center items-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 text-sky-600" />
                <span>{kindergarten.address}</span>
              </div>
              <div className="flex justify-center items-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 text-sky-600" />
                <span>TEL: {kindergarten.tel}</span>
              </div>
              <div className="flex justify-center items-center">
                <Printer className="w-4 h-4 md:w-5 md:h-5 mr-2 text-sky-600" />
                <span>FAX: {kindergarten.fax}</span>
              </div>
            </div>

            {/* ✨ お問い合わせCTAボタン */}
            <div className="flex justify-center mt-4 md:mt-6">
              <Link
                href="/contact"
                className="
                  px-[70px] py-[15px] 
                  md:w-[420px] md:py-[24px]
                  rounded-full text-[20px] md:text-[33px]
                  font-semibold text-white 
                  bg-gradient-to-r from-[#f9c87a] to-[#e6a64b]
                  shadow-md hover:opacity-90 
                  transition-all duration-300 ease-out text-center
                "
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 下部リンクとコピーライト */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
           className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-3 md:space-y-0 md:gap-x-6">

            {/* 🔹 リンク群（PCのみ表示） */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <Link href="/privacy" className="text-gray-600 hover:text-sky-600 transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-sky-600 transition-colors">
                サイトマップ
              </Link>
              <a
                href={kindergarten.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-sky-600 transition-colors"
              >
                アクセスマップ
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4 md:mt-0">
              © 2024 こどもの森幼稚園. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;