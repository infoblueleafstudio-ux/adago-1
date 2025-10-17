/**
 * 愛宕幼稚園サイト解析に基づくHero改善提案
 * 
 * 【既存コード保護】
 * - 現在のHero.tsxは変更せず、この提案は参考用
 * - 既存のアニメーション設定は保持
 * - Tailwindクラスは現行コードに影響なし
 */

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroProposal() {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/toto.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // パララックス効果
      }}
    >
      {/* オーバーレイ - 既存コードの backdrop-blur を維持 */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      
      {/* コンテンツ */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center text-white"
        >
          {/* タイトル - 既存の hero-title クラスを維持 */}
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
            こどもの森幼稚園
          </h1>
          
          {/* サブタイトル */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-8"
          >
            遊んで学ぶ 学んで育つ
          </motion.p>
          
          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-[#e6a64b] text-white px-8 py-3 rounded-full hover:bg-[#d4953a] transition">
              園の見学
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition">
              資料請求
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/**
 * 【改善提案ポイント】
 * 
 * 1. パララックス効果の強化
 *    - backgroundAttachment: 'fixed' でスクロール固定
 *    - 既存の backdrop-blur を維持
 * 
 * 2. アニメーションの段階化
 *    - タイトル → サブタイトル → CTA の順序
 *    - 既存の motion 設定を保持
 * 
 * 3. レスポンシブ対応
 *    - モバイル: text-4xl, デスクトップ: text-6xl
 *    - ボタンは縦並び → 横並び
 * 
 * 4. スクロールインジケーター
 *    - 既存コードに影響しない追加要素
 *    - 無限アニメーションで視覚的ガイド
 */
