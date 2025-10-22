'use client'
import Image from 'next/image'
import React from 'react'
import FloatingMotifs from './FloatingMotifs'
import FloatingIcon from '@/components/ui/FloatingIcon'
import { motion } from 'framer-motion'

type Props = {
  useImageHeadline?: boolean
}

export default function Hero({ useImageHeadline = true }: Props) {
  return (
    <motion.section
      className="
        relative z-10 w-full 
        h-[100svh] md:h-screen       /* ✅ iPhone対応: svhで安全に全高 */
        flex items-center justify-center 
        overflow-hidden bg-white
      "
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
    >
      {/* 背景画像（モバイル最適化） */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            w-full h-full 
            bg-[url('/toto.jpg')] bg-cover bg-bottom bg-no-repeat
          "
          style={{
            backgroundPosition: 'center bottom',
            backgroundAttachment: 'scroll', // ✅ iOSパフォーマンス対策
          }}
        />
      </div>

      {/* フローティングモチーフ */}
      <FloatingMotifs
        items={[
          { type: 'waves', color: '#f2c94c', top: '20%', left: '8%', anim: 'drift', size: 36, rotate: 0 },
          { type: 'raindrops', color: '#7c3aed', top: '28%', left: '88%', anim: 'bob', size: 28 },
          { type: 'flower', color: '#ef4444', top: '62%', left: '10%', anim: 'float', size: 28 },
          { type: 'leaf', color: '#22c55e', top: '68%', left: '80%', anim: 'float', size: 26 },
        ]}
      />

      {/* 背景モチーフ（愛宕風） */}
      <FloatingIcon
        src="/leaf1.svg"
        alt="葉っぱ"
        className="absolute left-[5%] bottom-[15%] w-[60px] md:w-[80px] opacity-80"
        delay={0.2}
        float
      />
      <FloatingIcon
        src="/tori1.svg"
        alt="鳥"
        className="
          absolute right-[4%] top-[15%] 
          w-[120px] sm:w-[150px] md:w-[180px] 
          opacity-75
        "
        delay={0.4}
        float
        rotate
      />

      {/* キャッチコピー */}
      <div className="relative flex flex-col justify-center items-center text-center px-6 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
          className="mx-auto max-w-[780px] mt-6"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <Image
              src="/ctt.svg"
              alt="キャッチコピー"
              width={900} // ✅ サイズ軽減
              height={300}
              priority
              className="w-full h-auto object-contain hero-title"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}