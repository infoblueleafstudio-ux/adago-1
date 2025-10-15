'use client';

import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DecorDivider from '@/components/common/DecorDivider';

export default function FacilitiesPage() {
  const facilities = [
    {
      title: '保育室',
      description: '木のぬくもりに包まれた広々とした保育室です。',
      image: '/1.jpeg',
    },
    {
      title: '園庭',
      description: '自然いっぱいの園庭で、のびのびと遊べます。',
      image: '/6.jpeg',
    },
    {
      title: '給食室',
      description: '栄養バランスを考えた温かい給食を調理しています。',
      image: '/9.jpeg',
    },
    {
      title: '図書コーナー',
      description: '絵本や図鑑が並ぶ、静かで落ち着いた空間です。',
      image: '/5.jpeg',
    },
    {
      title: 'ホール',
      description: '行事や発表会で使用する、広々としたホールです。',
      image: '/8.jpeg',
    },
    {
      title: '送迎バス',
      description: '安全運転を心がけた送迎バスで通園をサポートします。',
      image: '/10.jpeg',
    },
  ];

  return (
    <div>
      <PageHeader title="施設紹介" description="充実した設備で子どもたちの成長をサポートします" />
      
      {/* 装飾デザイナー */}
      <section className="py-12 bg-white">
        <DecorDivider />
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: Math.random() * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-sky-100 overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="natural-brightness"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
