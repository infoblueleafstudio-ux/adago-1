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
      className="relative z-10 w-full h-screen flex items-center justify-center overflow-visible bg-white"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {/* 背景画像（全幅・カバー） - パララックス効果適用 */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="relative w-full h-full bg-[url('/toto.jpg')] bg-cover bg-bottom bg-no-repeat parallax-hero" 
          style={{
            backgroundImage: "url('/toto.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundAttachment: 'fixed',
          }}
        />
        {/** <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" /> **/}
      </div>

      {/* フローティングモチーフ */}
      <FloatingMotifs items={[
        { type:'waves', color:'#f2c94c', top:'20%', left:'8%', anim:'drift', size:46, rotate:0 },
        { type:'raindrops', color:'#7c3aed', top:'28%', left:'90%', anim:'bob', size:40 },
        { type:'flower', color:'#ef4444', top:'58%', left:'12%', anim:'float', size:36 },
        { type:'leaf', color:'#22c55e', top:'65%', left:'82%', anim:'float', size:34 },
      ]} />

      {/* 愛宕幼稚園風の背景モチーフ */}
      <FloatingIcon 
        src="/leaf1.svg" 
        alt="葉っぱ" 
        className="absolute left-[5%] bottom-[15%] w-[80px] opacity-80" 
        delay={0.2}
        float={true}
      />
      <FloatingIcon 
        src="/tori2.svg" 
        alt="鳥" 
        className="absolute right-[8%] top-[20%] w-[180px] opacity-75" 
        delay={0.4}
        float={true}
        rotate={true}
      />

      {/* キャッチコピー（中央寄せ、フェード＋ゆらゆら浮遊） */}
      <div className="relative flex flex-col justify-center items-center text-center px-6 w-full">
        {/* --- フェードイン専用 --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="mx-auto max-w-[780px] mt-6"
        >
          {/* --- ゆらゆら専用 --- */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src="/ctt.svg"
              alt="キャッチコピー"
              width={1100}
              height={360}
              priority
              className="w-full h-auto object-contain hero-title"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}