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

        {/* 🟡 10の魅力ボタン */}
        <motion.a
          href="/attractions"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            rounded-full bg-[#f6c87a] text-white 
            px-12 py-3 text-[18px] font-medium leading-tight
            transition-all duration-300
            hover:text-[#7a4e00] hover:opacity-90
          "
        >
          10の魅力
        </motion.a>

        {/* 🔴 施設紹介ボタン */}
        <motion.a
          href="/about/facilities"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            rounded-full bg-[#f19c9c] text-white 
            px-12 py-3 text-[18px] font-medium leading-tight
            transition-all duration-300
            hover:text-[#8b1c3a] hover:opacity-90
          "
        >
          施設紹介
        </motion.a>

      </div>
    </motion.div>
  )
}