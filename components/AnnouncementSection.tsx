'use client'
import { motion } from 'framer-motion'

export default function AnnouncementSection() {
  return (
    <section className="relative w-full py-6 md:py-8 overflow-hidden">
      {/* お知らせと一覧を横並びに配置 */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 mb-6">
        <div className="flex justify-center items-center mb-6 relative">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[22px] md:text-[24px] font-bold text-[#333]"
          >
            お知らせ
          </motion.h2>

          <motion.a
            href="/news"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute right-0 rounded-full border border-[#ddd] bg-[#f8f4f3] text-[#555] text-sm px-6 py-1.5 hover:bg-[#e6a64b] hover:text-white transition-all"
          >
            一覧
          </motion.a>
        </div>
      </div>

      {/* 波型の背景 */}
      <svg
        className="absolute top-0 left-0 w-full h-[90px] text-[#f8f4f3] rotate-180 -z-10"
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,20 C180,80 360,0 540,40 C720,80 900,10 1080,50 C1260,90 1440,30 1440,30 L1440,90 L0,90 Z"
        />
      </svg>
    </section>
  )
}
