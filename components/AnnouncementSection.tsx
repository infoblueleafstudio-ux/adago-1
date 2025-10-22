'use client'
import { motion } from 'framer-motion'

export default function AnnouncementSection() {
  return (
    <section className="relative z-[1] w-full bg-[#f8f4f3] py-[30px] overflow-visible">
      {/* 背景モチーフ（怪獣） */}
      <motion.img
        src="/gao.svg"
        alt="怪獣モチーフ"
        className="
          absolute
          right-[2.5%] md:right-[9%]
          bottom-[-40px] md:bottom-[-120px]
          w-[140px] md:w-[240px]
          opacity-100 md:opacity-100
          rotate-[8deg] md:rotate-[10deg]
          pointer-events-none
        "
        animate={{
          x: [0, 10, -10, 0],
          rotate: [8, 10, 6, 8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* タイトルと一覧ボタン（スマホで縦並び配置） */}
      <div
        className="relative z-10 w-full max-w-[1100px] mx-auto px-6 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center md:gap-0 gap-3"
      >
        <h2 className="text-[30px] md:text-[38px] font-bold text-[#333] leading-tight text-center md:col-start-2 md:justify-self-center">
          お知らせ
        </h2>

        <a
          href="/news"
          className="rounded-full border border-[#ddd] bg-[#f8f4f3] text-[#555]
          text-[15px] font-extrabold tracking-tight [text-shadow:0_0_0.3px_#555]
          leading-[1] px-8 py-2
          hover:bg-[#006400] hover:text-white transition-all duration-300
          md:col-start-3 md:justify-self-end mx-auto"
        >
          一覧
        </a>
      </div>
    </section>
  )
}
