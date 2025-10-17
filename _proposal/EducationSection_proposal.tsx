/**
 * 愛宕幼稚園サイト解析に基づくEducationSection改善提案
 * 
 * 【既存コード保護】
 * - 現在のEducationSection.tsxは変更せず、この提案は参考用
 * - 既存の装飾アイコン配置は保持
 * - 既存のアニメーション設定は維持
 */

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function EducationSectionProposal() {
  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12">
      {/* 装飾アイコン - 既存の配置を維持 */}
      <Image
        src="/icons/leaf.svg"
        alt=""
        width={28}
        height={28}
        className="absolute left-[4%] top-[20%] opacity-70 hover:opacity-100 transition-opacity hidden md:block"
      />
      <Image
        src="/icons/star.svg"
        alt=""
        width={20}
        height={20}
        className="absolute right-[10%] top-[35%] opacity-70 hover:opacity-100 transition-opacity hidden md:block"
      />
      <Image
        src="/icons/drop.svg"
        alt=""
        width={22}
        height={22}
        className="absolute right-[6%] bottom-[25%] opacity-70 hover:opacity-100 transition-opacity hidden md:block"
      />
      <Image
        src="/icons/bird.svg"
        alt=""
        width={24}
        height={24}
        className="absolute left-[8%] bottom-[30%] opacity-70 hover:opacity-100 transition-opacity hidden md:block"
      />
      <Image
        src="/icons/swing.svg"
        alt=""
        width={26}
        height={26}
        className="absolute right-[15%] top-[15%] opacity-70 hover:opacity-100 transition-opacity hidden md:block"
      />
      <Image
        src="/icons/block.svg"
        alt=""
        width={30}
        height={30}
        className="absolute left-[12%] top-[45%] opacity-70 hover:opacity-100 transition-opacity hidden md:block"
      />

      {/* タイトル - 既存のアニメーション設定を維持 */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[22px] md:text-[24px] font-bold tracking-[0.06em] text-[#333] text-center mb-6"
      >
        教育と保育
      </motion.h3>

      {/* 画像 - 既存のスタイルを保持 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[40px] shadow-md mx-auto max-w-[900px]"
      >
        <img
          src="/5.jpeg"
          alt="教育と保育の風景"
          className="w-full h-[420px] object-cover"
        />
      </motion.div>

      {/* メニュー - 既存の縦区切り線スタイルを維持 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-wrap gap-10 mt-[60px] mb-[70px] text-[20px] font-medium text-[#333]"
      >
        {[
          { label: '園での1日', href: '/day' },
          { label: '年間行事', href: '/events' },
          { label: '知育', href: '/education' },
          { label: '体育', href: '/sports' },
          { label: '食育', href: '/food' },
          { label: '先生の紹介', href: '/teachers' },
        ].map((item, i, arr) => (
          <motion.div key={i} className="flex items-center">
            {/* メニューリンク - 既存のホバー効果を維持 */}
            <motion.a
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-black hover:text-[#e6a64b] transition-all duration-300 px-3"
            >
              {item.label}
            </motion.a>

            {/* 区切り線 - 既存のスタイルを保持 */}
            {i < arr.length - 1 && (
              <span className="h-6 w-[1px] bg-black mx-4"></span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* 背景カーブ - 既存のSVGを維持 */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[120px] text-[#f8f4f3] -z-10"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C320,160 1120,-32 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  )
}

/**
 * 【改善提案ポイント】
 * 
 * 1. 装飾アイコンの最適化
 *    - 既存の配置を維持しつつ、ホバー効果を強化
 *    - モバイルでは非表示（既存設定を保持）
 * 
 * 2. アニメーションの段階化
 *    - 既存の motion 設定を完全に保持
 *    - viewport={{ once: true }} でパフォーマンス最適化
 * 
 * 3. メニューの視認性向上
 *    - 既存の縦区切り線スタイルを維持
 *    - ホバー効果でユーザビリティ向上
 * 
 * 4. 背景カーブの統一
 *    - 既存のSVGパスを保持
 *    - z-index でレイヤー管理
 * 
 * 【既存コードとの互換性】
 * - 全ての既存クラス名を維持
 * - 既存のアニメーション設定を保持
 * - 既存の装飾アイコン配置を維持
 */
