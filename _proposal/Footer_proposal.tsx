/**
 * 愛宕幼稚園サイト解析に基づくFooter改善提案
 * 
 * 【既存コード保護】
 * - 現在のFooter.tsxは変更せず、この提案は参考用
 * - 既存のパララックス効果は保持
 * - 既存のレイアウト構造は維持
 */

'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Printer, Instagram } from 'lucide-react'
import { kindergarten } from '@/lib/config'

export default function FooterProposal() {
  return (
    <footer
      className="relative bg-no-repeat bg-center bg-cover text-gray-800 md:bg-fixed"
      style={{
        backgroundImage: "url('/ttt.svg')",
        backgroundSize: '140%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // パララックス効果
      }}
    >
      {/* オーバーレイ - 既存の透明度設定を維持 */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* コンテンツ本体 - 既存の3列レイアウトを保持 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* 園情報 - 既存の構造を維持 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">森</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">こどもの森 幼稚園</h3>
                <p className="text-xs text-gray-600">KODOMO NO MORI KINDERGARTEN</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-sky-600" />
                <span>{kindergarten.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-sky-600" />
                <span>TEL: {kindergarten.tel}</span>
              </div>
              <div className="flex items-center">
                <Printer className="w-4 h-4 mr-2 flex-shrink-0 text-sky-600" />
                <span>FAX: {kindergarten.fax}</span>
              </div>
            </div>
          </div>

          {/* クイックリンク - 既存のリンク構造を保持 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">クイックリンク</h3>
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

          {/* フォローする - 既存のSNS構造を維持 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">フォローする</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-700 mb-2">Instagram</p>
                <div className="w-24 h-24 bg-white/90 rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                  <Instagram className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 下部リンクとコピーライト - 既存の構造を保持 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-sky-600 transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/sitemap" className="hover:text-sky-600 transition-colors">
                サイトマップ
              </Link>
              <a
                href={kindergarten.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 transition-colors"
              >
                アクセスマップ
              </a>
            </div>
            <p className="text-sm text-gray-600">
              © 2024 こどもの森幼稚園. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

/**
 * 【改善提案ポイント】
 * 
 * 1. パララックス効果の最適化
 *    - 既存の backgroundAttachment: 'fixed' を維持
 *    - モバイル用フォールバック（md:bg-fixed）を保持
 * 
 * 2. 背景画像の調整
 *    - 既存の ttt.svg 背景を維持
 *    - backgroundSize: '140%' でズーム効果
 * 
 * 3. オーバーレイの透明度調整
 *    - 既存の bg-white/70 を維持
 *    - 必要に応じて /60 や /80 に調整可能
 * 
 * 4. レイアウト構造の保持
 *    - 既存の3列グリッドを維持
 *    - 既存のアニメーション設定を保持
 * 
 * 【既存コードとの互換性】
 * - 全ての既存クラス名を維持
 * - 既存のパララックス効果を保持
 * - 既存のレイアウト構造を維持
 * - 既存のアニメーション設定を保持
 */
