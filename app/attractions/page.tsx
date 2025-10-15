'use client';

import { motion } from 'framer-motion';
import {
  Smile,
  Heart,
  Users,
  BookOpen,
  Sparkles,
  Sun,
  TreePine,
  Palette,
  Music,
  Globe,
} from 'lucide-react';

export default function AttractionsPage() {
  const attractions = [
    {
      icon: Smile,
      title: '笑顔あふれる環境',
      description:
        '明るく温かい雰囲気の中で、子どもたちが毎日笑顔で過ごせる環境を整えています。',
      image: '/hero.jpg',
    },
    {
      icon: Heart,
      title: '心を育む保育',
      description:
        '思いやりの心や優しさを育み、豊かな感性を持つ子どもを育てます。',
      image: '/ctt.jpg',
    },
    {
      icon: Users,
      title: '少人数制クラス',
      description:
        '一人ひとりに目が届く少人数制で、きめ細やかな保育を実施しています。',
      image: '/eee.jpg',
    },
    {
      icon: BookOpen,
      title: '充実したカリキュラム',
      description:
        '年齢に応じた多彩なプログラムで、子どもたちの可能性を広げます。',
      image: '/toto.jpg',
    },
    {
      icon: Sparkles,
      title: '清潔で安全な施設',
      description:
        '最新の設備と徹底した安全管理で、安心して過ごせる環境を提供します。',
      image: '/hero.jpg',
    },
    {
      icon: Sun,
      title: '広い園庭',
      description:
        '思い切り体を動かせる広々とした園庭で、のびのびと遊べます。',
      image: '/ctt.jpg',
    },
    {
      icon: TreePine,
      title: '自然とのふれあい',
      description:
        '季節の草花や虫たちとのふれあいを通じて、自然の大切さを学びます。',
      image: '/eee.jpg',
    },
    {
      icon: Palette,
      title: '創造力を伸ばす活動',
      description:
        '絵画や工作など、創造力を育む活動を豊富に取り入れています。',
      image: '/toto.jpg',
    },
    {
      icon: Music,
      title: '音楽とリズム遊び',
      description:
        '歌やリズム遊びを通じて、表現力と協調性を養います。',
      image: '/hero.jpg',
    },
    {
      icon: Globe,
      title: '国際感覚を育む',
      description:
        '英語教育や異文化に触れる機会を設け、グローバルな視野を育てます。',
      image: '/ctt.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-32 bg-no-repeat bg-fixed bg-center bg-cover min-h-screen"
        style={{
          backgroundImage: "url('/ttt.svg')",
          backgroundSize: '140%',
        }}
      >
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold text-atago-text-dark mb-4 drop-shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            遊んで学ぶ 
            学んで育つ
          </motion.h1>

          <motion.h2
            className="text-xl text-atago-text-body drop-shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            愛宕幼稚園10の魅力
          </motion.h2>
        </div>

        {/* 装飾ライン */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-20 bg-white">
        {attractions.map((attraction, index) => {
          const Icon = attraction.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.section
              key={index}
              className="py-20 px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="max-w-7xl mx-auto">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* 画像部分 */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <motion.div
                      className="relative overflow-hidden rounded-2xl shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                        <Icon className="w-24 h-24 text-sky-500" />
                      </div>
                      {/* 画像が利用可能な場合の表示 */}
                      {/* <Image
                        src={attraction.image}
                        alt={attraction.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      /> */}
                    </motion.div>
                  </div>

                  {/* テキスト部分 */}
                  <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      {/* 番号バッジ */}
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full text-white font-bold text-xl shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* タイトル */}
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        {attraction.title}
                      </h3>

                      {/* 説明文 */}
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {attraction.description}
                      </p>

                      {/* アイコン */}
                      <div className="flex items-center space-x-3 pt-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
                          魅力 {index + 1}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

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
            愛宕幼稚園で、<br />
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
  );
}