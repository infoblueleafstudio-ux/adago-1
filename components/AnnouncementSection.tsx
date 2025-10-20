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
          right-[9%]
          bottom-[-120px]
          w-[240px]
          opacity-100
          rotate-[10deg]
          pointer-events-none
        "
        animate={{
          x: [0, 12, -12, 0],
          rotate: [10, 12, 8, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* タイトルと一覧ボタン（Gridで安定配置） */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6
                      grid grid-cols-[1fr_auto_1fr] items-center">
        <h2
          className="col-start-2 justify-self-center text-[35px] md:text-[38px] font-bold text-[#333] leading-tight"
        >
          お知らせ
        </h2>

        <a
          href="/news"
          className="col-start-3 justify-self-end
          rounded-full border border-[#ddd] bg-[#f8f4f3] text-[#555]
          text-[15px] font-extrabold tracking-tight [text-shadow:0_0_0.3px_#555]
          leading-[1] px-8 py-2
          hover:bg-[#006400] hover:text-white transition-all duration-300"
        >
          一覧
        </a>
      </div>
    </section>
  )
}
