import AnnouncementSection from '@/components/AnnouncementSection';
import CTASection from '@/components/CTASection';
import EducationSection from '@/components/EducationSection';
import AdmissionSection from '@/components/AdmissionSection';
import SupportSection from '@/components/SupportSection';
import MotifsBetweenSections from '@/components/MotifsBetweenSections';
import Hero from './components/Hero';
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <div className="w-full overflow-hidden">
      <Hero useImageHeadline={true} />
      
      {/* ヒーロー下部から統一背景 */}
      <div className="bg-[#f8f4f3]">
        {/* お知らせセクション */}
        <AnnouncementSection />

        {/* CTAボタンセクション */}
        <CTASection />

        {/* 教育と保育セクション */}
        <MotifsBetweenSections />
        <EducationSection />

        {/* 入園のご案内セクション */}
        <MotifsBetweenSections />
        <AdmissionSection />

        {/* 子育て支援・FAQセクション */}
        <SupportSection />

        {/* 最後の装飾セクション */}
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
