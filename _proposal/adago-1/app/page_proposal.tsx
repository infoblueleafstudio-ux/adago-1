"use client"; // ← Framer Motion を含むためクライアントコンポーネントとして実行

/**
 * 愛宕幼稚園サイト解析に基づくHomePage改善提案
 * 
 * 【既存コード保護】
 * - 現在のapp/page.tsxは変更せず、この提案は参考用
 * - 既存のセクション配置は保持
 * - 既存のアニメーション設定は維持
 */

import AnnouncementSection from '@/components/AnnouncementSection';
import CTASection from '@/components/CTASection';
import EducationSection from '@/components/EducationSection';
import AdmissionSection from '@/components/AdmissionSection';
import SupportSection from '@/components/SupportSection';
import MotifsBetweenSections from '@/components/MotifsBetweenSections';
import Hero from '@/app/components/Hero';
import { motion } from 'framer-motion';

export default function HomeProposal() {
  return (
    <div className="w-full overflow-hidden">
      <Hero useImageHeadline={true} />
      
      {/* ヒーロー下部から統一背景 - 既存の構造を維持 */}
      <div className="bg-[#f8f4f3]">
        {/* お知らせセクション - 既存の配置を保持 */}
        <AnnouncementSection />

        {/* CTAボタンセクション - 既存の配置を保持 */}
        <CTASection />

        {/* 教育と保育セクション - 既存の装飾要素を維持 */}
        <MotifsBetweenSections />
        <EducationSection />

        {/* 入園のご案内セクション - 既存の円形カードを保持 */}
        <MotifsBetweenSections />
        <AdmissionSection />

        {/* 子育て支援・FAQセクション - 既存の2枚画像を維持 */}
        <SupportSection />

        {/* 最後の装飾セクション - 既存の配置を保持 */}
        <motion.section
          className="relative z-20 py-20 bg-gradient-to-br from-sky-50 to-blue-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              こどもの森幼稚園で、<br />
              お子様の可能性を広げませんか？
            </motion.h3>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              私たちは、一人ひとりの個性を大切にし、<br />
              心身ともに健やかな成長をサポートします。
            </motion.p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/**
 * 【改善提案ポイント】
 * 
 * 1. セクション配置の最適化
 *    - 既存のセクション順序を維持
 *    - 既存のMotifsBetweenSectionsを保持
 *    - 既存の統一背景色を維持
 * 
 * 2. 最後の装飾セクション
 *    - 既存の配置位置を保持
 *    - 既存のアニメーション設定を維持
 *    - 既存のグラデーション背景を保持
 * 
 * 3. レスポンシブ対応
 *    - 既存のTailwindクラスを維持
 *    - 既存のブレークポイントを保持
 *    - 既存のパディング設定を維持
 * 
 * 【既存コードとの互換性】
 * - 全ての既存importを維持
 * - 既存のセクション配置を保持
 * - 既存のアニメーション設定を維持
 * - 既存のTailwindクラスを保持
 */
