'use client'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-8"
    >
      <div className="mx-auto max-w-[800px] px-6">
        <div className="flex justify-center gap-6">
          <motion.a
            href="/features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#f9c87a] text-white px-6 py-2.5 text-base font-semibold shadow-sm hover:opacity-90 transition"
          >
            10の魅力
          </motion.a>

          <motion.a
            href="/facility"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#f7a9a1] text-white px-6 py-2.5 text-base font-semibold shadow-sm hover:opacity-90 transition"
          >
            施設紹介
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
