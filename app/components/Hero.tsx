'use client'
import Image from 'next/image'
import React from 'react'
import FloatingMotifs from './FloatingMotifs'
import { motion } from 'framer-motion'

type Props = {
  useImageHeadline?: boolean
}

export default function Hero({ useImageHeadline = true }: Props) {
  return (
    <section className="relative w-full overflow-hidden h-[90vh] flex items-center justify-center mb-24">
      {/* 背景画像（全幅・カバー） */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full bg-[url('/eee.jpg')] bg-cover bg-center bg-no-repeat" />
      </div>

      {/* フローティングモチーフ */}
      <FloatingMotifs items={[
        { type:'waves', color:'#f2c94c', top:'20%', left:'8%', anim:'drift', size:46, rotate:0 },
        { type:'raindrops', color:'#7c3aed', top:'28%', left:'90%', anim:'bob', size:40 },
        { type:'flower', color:'#ef4444', top:'58%', left:'12%', anim:'float', size:36 },
        { type:'leaf', color:'#22c55e', top:'65%', left:'82%', anim:'float', size:34 },
      ]} />

      {/* キャッチコピー（中央寄せ、フェード＋スライド） */}
      <div className="relative flex flex-col justify-center items-center text-center px-6 w-full">
        <motion.div
          className="mx-auto max-w-[780px] mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/ctt.svg"
            alt="キャッチコピー"
            width={1100}
            height={360}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
