'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AnnouncementBar() {
  return (
    <motion.section 
      className="relative w-full bg-[#f6f6f6] border-t border-[#e9e9e9] py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative mx-auto max-w-[1100px] px-6 flex items-center justify-center">
        {/* 見出し（中央） */}
        <motion.h2 
          className="text-[24px] md:text-[28px] font-semibold text-[#333] tracking-[0.05em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          お知らせ
        </motion.h2>

        {/* 右端「一覧」 */}
        <motion.div 
          className="absolute right-6 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-1 rounded-full border border-[#cfcfcf] bg-[#f8f4f3] px-6 py-3 text-[15px] text-[#333] hover:bg-[#f0ebe8] transition"
          >
            一覧
            <span aria-hidden>›</span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
