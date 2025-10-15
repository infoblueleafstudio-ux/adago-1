"use client";

import { motion } from 'framer-motion';
import TimelineLayout from '@/components/templates/TimelineLayout';
import DecorDivider from '@/components/common/DecorDivider';
import { ChevronDown, Camera, Heart, Users, BookOpen } from 'lucide-react';

export default function DailyLifePage() {
  const schedule = [
    {
      time: '8:00',
      title: '登園・自由遊び',
      description: '元気に登園し、先生や友だちにあいさつします。お部屋や園庭で好きな遊びを楽しみます。',
      image: '/2.jpeg',
    },
    {
      time: '10:00',
      title: '朝の会・設定保育',
      description: '先生のお話を聞いて、製作・運動・お歌などその日の活動を行います。',
      image: '/1.jpeg',
    },
    {
      time: '11:30',
      title: '給食',
      description: '栄養バランスのとれた温かい給食を、みんなで楽しくいただきます。',
      image: '/5.jpeg',
    },
    {
      time: '12:30',
      title: '自由遊び',
      description: '昼食の後はもう一度、園庭やお部屋でのびのびと遊びます。',
      image: '/7.jpeg',
    },
    {
      time: '13:30',
      title: '午後の活動',
      description: '音楽やリズム遊び、自然遊びなど、季節を感じる活動を行います。',
      image: '/6.jpeg',
    },
    {
      time: '14:00',
      title: '降園準備',
      description: 'おかたづけやお帰りの準備をして、先生やお友だちとさようならをします。',
      image: '/11.jpeg',
    },
    {
      time: '延長保育',
      title: '預かり保育',
      description: 'お迎えまで、安心して過ごせる環境で遊んだりおやつを食べたりします。',
      image: '/12.jpeg',
    },
  ];

  const galleryItems = [
    {
      title: '楽しい遊び',
      description: '友達と一緒に',
      icon: Heart,
    },
    {
      title: 'みんなで給食',
      description: 'おいしくいただきます',
      icon: Users,
    },
    {
      title: '絵本の時間',
      description: '集中して聞いています',
      icon: BookOpen,
    },
    {
      title: '思い出の写真',
      description: 'たくさんの笑顔',
      icon: Camera,
    },
  ];

  return (
    <div className="min-h-screen bg-atago-bg">
      {/* === Hero Wrapper === */}
      <section className="relative w-full overflow-visible">

        {/* 背景レイヤー：ttt.jpg */}
        <div
          className="absolute top-0 left-0 w-full h-[480px] sm:h-[520px] lg:h-[600px] bg-no-repeat bg-cover bg-center opacity-100 -z-10"
          style={{
            backgroundImage: "url('/ttt.svg')",
            backgroundSize: '120%',
            backgroundAttachment: 'fixed',
          }}
        ></div>

        {/* コンテンツレイヤー */}
        <div className="relative flex flex-col items-center justify-center text-center py-24 sm:py-32 lg:py-40 z-10">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-atago-text-dark mb-4 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            園での1日
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-green-700 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            子どもたちの1日の過ごし方をご紹介します
          </motion.p>

          {/* asas.jpg：写真部分 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="max-w-5xl mx-auto rounded-2xl shadow-xl overflow-hidden border-4 border-orange-200"
          >
            <img
              src="/asas.jpg"
              alt="園での1日の様子"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - PageHeader削除して直接接続 */}
      <section className="bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-atago-text-dark mb-4">
              1日の流れ
            </h2>
            <p className="text-lg text-atago-text-body max-w-2xl mx-auto">
              子どもたちが愛宕幼稚園で過ごす1日をご紹介します。
              毎日が発見と学びに満ちた特別な時間です。
            </p>
          </motion.div>
          
          <TimelineLayout items={schedule} />
        </div>
      </section>

      {/* 装飾デザイナー */}
      <section className="py-12 bg-[#FFFDF8]">
        <DecorDivider />
      </section>

      {/* Gallery Section */}
      <section 
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/ttt.svg')",
          backgroundSize: '130%',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-atago-text-dark mb-4">
              園での様子
            </h2>
            <p className="text-lg text-atago-text-body max-w-2xl mx-auto">
              子どもたちの笑顔あふれる日常の一コマをご覧ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-sky-100">
                  <div className="h-48 bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center">
                    <div className="text-sky-400 text-5xl group-hover:scale-110 transition-transform duration-300">
                      📸
                    </div>
                    {/* 画像差し替えポイント: 実際の画像は gallery-0X.jpg を使用 */}
                    {/* <img src={`/images/gallery-0${index + 1}.jpg`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> */}
                  </div>
                  <div className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-atago-text-dark mb-2">{item.title}</h3>
                    <p className="text-atago-text-body text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-atago-text-dark mb-6">
              見学・体験をお待ちしています
            </h2>
            <p className="text-lg text-atago-text-body mb-8 max-w-2xl mx-auto">
              愛宕幼稚園の日常を実際にご覧いただけます。
              お気軽にお問い合わせください。
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              お問い合わせはこちら
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
