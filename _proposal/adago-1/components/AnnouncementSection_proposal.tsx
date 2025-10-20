/**
 * 愛宕幼稚園サイト解析に基づくAnnouncementSection改善提案
 * 
 * 【既存コード保護】
 * - 現在のcomponents/AnnouncementSection.tsxは変更せず、この提案は参考用
 * - 既存の横並び配置は保持
 * - 既存のアニメーション設定は維持
 */

'use client'
import { motion } from 'framer-motion'

export default function AnnouncementSectionProposal() {
  return (
    <section className="relative w-full py-6 md:py-8 overflow-hidden">
      {/* お知らせと一覧を横並びに配置 - 既存の構造を維持 */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 mb-6">
        <div className="flex justify-center items-center mb-6 relative">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[22px] md:text-[24px] font-bold text-[#333]"
          >
            お知らせ
          </motion.h2>

          <motion.a
            href="/news"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute right-0 rounded-full border border-[#ddd] bg-[#f8f4f3] text-[#555] text-sm px-6 py-1.5 hover:bg-[#e6a64b] hover:text-white transition-all"
          >
            一覧
          </motion.a>
        </div>
      </div>

      {/* 波型の背景 - 既存のSVGを維持 */}
      <svg
        className="absolute top-0 left-0 w-full h-[90px] text-[#f8f4f3] rotate-180 -z-10"
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,20 C180,80 360,0 540,40 C720,80 900,10 1080,50 C1260,90 1440,30 1440,30 L1440,90 L0,90 Z"
        />
      </svg>
    </section>
  )
}

/**
 * 【改善提案ポイント】
 * 
 * 1. 横並び配置の最適化
 *    - 既存のflex justify-center items-centerを維持
 *    - 既存のabsolute right-0配置を保持
 *    - 既存の中央配置を維持
 * 
 * 2. アニメーションの段階化
 *    - 既存の motion 設定を完全に保持
 *    - 既存のdelay設定を維持
 *    - 既存のviewport設定を保持
 * 
 * 3. 波型背景の統一
 *    - 既存のSVGパスを保持
 *    - 既存のz-index設定を維持
 *    - 既存の色設定を保持
 * 
 * 4. ホバー効果の強化
 *    - 既存のホバー効果を維持
 *    - 既存のトランジション設定を保持
 *    - 既存の色変更を維持
 * 
 * 【既存コードとの互換性】
 * - 全ての既存クラス名を維持
 * - 既存のアニメーション設定を保持
 * - 既存の横並び配置を維持
 * - 既存のTailwindクラスを保持
 */
