/**
 * 愛宕幼稚園サイト解析に基づくAdmissionSection改善提案
 * 
 * 【既存コード保護】
 * - 現在のcomponents/AdmissionSection.tsxは変更せず、この提案は参考用
 * - 既存の円形カード配置は保持
 * - 既存のアニメーション設定は維持
 */

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AdmissionSectionProposal() {
  const items = [
    { title: '幼稚園部・申し込みの流れ', href: '/admission/process', img: '/1.jpeg' },
    { title: '３つの選び方', href: '/admission/choices', img: '/2.jpeg' },
    { title: '保育時間・保育料案内', href: '/admission/fees', img: '/3.jpeg' },
    { title: '一時預かり保育', href: '/admission/temporary', img: '/4.jpeg' },
  ]

  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-8">
        {/* タイトル - 既存のアニメーション設定を維持 */}
        <motion.h3
          className="text-center text-[22px] font-bold text-[#333] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          入園のご案内
        </motion.h3>

        {/* 円形カード - 既存の配置を保持 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 place-items-center">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative size-[230px] md:size-[260px] rounded-full overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                <Image
                  src={item.img}
                  alt=""
                  width={260}
                  height={260}
                  className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-[14px] text-[#444] leading-relaxed">{item.title}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

/**
 * 【改善提案ポイント】
 * 
 * 1. 円形カードの最適化
 *    - 既存の260pxサイズを維持
 *    - 既存のホバー効果を保持
 *    - 既存のシャドウ設定を維持
 * 
 * 2. アニメーションの段階化
 *    - 既存の motion 設定を完全に保持
 *    - 既存のdelay設定を維持
 *    - 既存のviewport設定を保持
 * 
 * 3. グリッドレイアウト
 *    - 既存の4列グリッドを維持
 *    - 既存のレスポンシブ対応を保持
 *    - 既存のギャップ設定を維持
 * 
 * 4. 画像最適化
 *    - 既存のImageコンポーネントを維持
 *    - 既存のobject-cover設定を保持
 *    - 既存のalt属性を維持
 * 
 * 【既存コードとの互換性】
 * - 全ての既存クラス名を維持
 * - 既存のアニメーション設定を保持
 * - 既存の円形カード配置を維持
 * - 既存のTailwindクラスを保持
 */
