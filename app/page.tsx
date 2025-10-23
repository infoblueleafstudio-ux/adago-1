"use client"; // ← Framer Motionのクライアントサイドレンダリング対応

import AnnouncementSection from '@/components/AnnouncementSection';
import CTASection from '@/components/CTASection';
import EducationSection from '@/components/EducationSection';
import AdmissionSection from '@/components/AdmissionSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import Hero from './components/Hero';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {

  return (
    <main className="relative w-full overflow-visible">
   

      {/* 🌸 ページ本体 */}
      <div className="relative z-[10] pb-[750px]">
        <Hero useImageHeadline={true} />
        
        <div className="bg-[#f8f4f3]">
          {/* お知らせセクション */}
          <AnnouncementSection />
        </div>
        
        <CTASection />
        <EducationSection />
        <AdmissionSection />
        <SupportSection />

      </div>
      
      {/* 固定フッター */}
      <Footer />
    </main>
  );
}
