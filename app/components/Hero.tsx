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
    h-[28svh] md:h-screen   /* ✅ 背景が画面全体に自然にフィット */
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
            bg-[url('/toto.jpg')] bg-no-repeat
            bg-cover
            bg-[center_55%] md:bg-[center_50%]
          "
          style={{
            backgroundAttachment: 'scroll',
          }}
        />
      </div>

      {/* 背景モチーフ*/}
      <FloatingIcon
        src="/sunsun.png"
        alt="太陽"
        className="
          absolute right-[4%] top-[3%] md:right-[8%] md:top-[1%]
          w-[75px] md:w-[180px] 
          opacity-75 "
        delay={0.4}
        float
        rotate
      />
           <FloatingIcon
        src="/hana3.png"
        alt="花"
        className="
          absolute left-[7%] top-[9%] md:left-[8%] md:top-[10%]
          w-[48px] md:w-[180px] 
          opacity-75 "
        delay={0.4}
        float
        rotate
      />

      {/* キャッチコピー */}
      <div className="relative w-full flex justify-center items-center">
        <div className="relative h-[400px] md:h-[700px] w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
            className="
              absolute
              left-[54%] top-[35%] md:top-[25.8%]
              -translate-x-1/2 -translate-y-1/2
              md:left-[52%] 
            "
          >
<motion.div
  animate={{
    y: [0, -8, 0],          // 🌈 上下のゆらぎ
    rotate: [-1.5, 1.5, -1.5], // 🌈 ほんのり角度でそよぐ
    opacity: [1, 0.95, 1],  // ✨ 光のゆらぎ
  }}
  transition={{
    duration: 5,            // ゆっくりリズム（自然に見せるコツ）
    ease: 'easeInOut',
    repeat: Infinity,
  }}
>
  <Image
    src="/ctt.svg"
    alt="キャッチコピー"
    width={900}
    height={300}
    priority
    className="
      w-[88%] md:w-[100%]
      h-auto object-contain
      pointer-events-none select-none
    "
  />
</motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}