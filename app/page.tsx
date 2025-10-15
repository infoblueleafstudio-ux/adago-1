import AnnouncementBar from '@/components/AnnouncementBar';
import EducationSection from '@/components/EducationSection';
import AdmissionSection from '@/components/AdmissionSection';
import Hero from './components/Hero';

export default function Home() {

  return (
    <div className="w-full overflow-hidden">
      <Hero useImageHeadline={true} />
      
      {/* お知らせバー - Hero直下に配置 */}
      <AnnouncementBar />

      {/* 教育と保育セクション */}
      <EducationSection />

      {/* 入園のご案内セクション */}
      <AdmissionSection />
    </div>
  );
}
