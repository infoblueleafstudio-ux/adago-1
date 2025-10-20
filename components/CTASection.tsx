'use client'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-[0] w-full bg-[#ffffff] py-[4px]"
    >
      <div className="w-full flex justify-center gap-10 mt-0">
        <motion.a
          href="/attractions"  // ← 修正：ナビと同じリンクに統一
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-[#f6c87a] text-white px-12 py-3 text-[18px] font-medium leading-tight hover:opacity-90 transition-all duration-300"
        >
          10の魅力
        </motion.a>

        <motion.a
          href="/about/facilities"  // ← 修正：ナビの「施設紹介」と同じ
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-[#f19c9c] text-white px-12 py-3 text-[18px] font-medium leading-tight hover:opacity-90 transition-all duration-300"
        >
          施設紹介
        </motion.a>
      </div>
    </motion.div>
  )
}