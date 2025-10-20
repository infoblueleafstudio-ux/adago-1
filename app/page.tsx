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
      {/* 🌿 既存の背景デコレーション */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Image
          src="/leaf1 (1).svg"
          alt=""
          width={100}
          height={100}
          className="absolute left-[2%] top-[8%] opacity-75 floating-element"
        />
        <Image
          src="/leaf1 (2).svg"
          alt=""
          width={120}
          height={120}
          className="absolute right-[3%] top-[15%] opacity-70 floating-element"
        />
        <Image
          src="/leaf1 (3).svg"
          alt=""
          width={90}
          height={90}
          className="absolute left-[12%] top-[25%] opacity-65 floating-element"
        />
        <Image
          src="/leaf1 (4).svg"
          alt=""
          width={110}
          height={110}
          className="absolute right-[8%] top-[40%] opacity-80 floating-element"
        />
        <Image
          src="/leaf1 (5).svg"
          alt=""
          width={130}
          height={130}
          className="absolute left-[5%] top-[50%] opacity-60 floating-element"
        />
        <Image
          src="/tori1.svg"
          alt=""
          width={160}
          height={160}
          className="absolute right-[2%] top-[60%] opacity-70 floating-element"
        />
        <Image
          src="/tori2.svg"
          alt=""
          width={180}
          height={180}
          className="absolute left-[15%] bottom-[25%] opacity-65 floating-element"
        />
        <Image
          src="/tori3.svg"
          alt=""
          width={140}
          height={140}
          className="absolute right-[12%] bottom-[15%] opacity-75 floating-element"
        />
        <Image
          src="/tori4.svg"
          alt=""
          width={170}
          height={170}
          className="absolute left-[8%] bottom-[5%] opacity-60 floating-element"
        />
      </div>

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
