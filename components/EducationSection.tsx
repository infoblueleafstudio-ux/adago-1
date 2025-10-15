'use client'
import { motion } from 'framer-motion'

export default function EducationSection() {
  return (
    <motion.section 
      className="w-full bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-[1100px] px-6 py-16 text-center">
        {/* 丸タブ（上） */}
        <motion.div 
          className="flex items-center justify-center gap-4 pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="rounded-full bg-[#f9c87a] text-white px-5 py-1.5 text-[13px] shadow-sm hover:opacity-90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            10の魅力
          </motion.button>
          <motion.button 
            className="rounded-full bg-[#f7a9a1] text-white px-5 py-1.5 text-[13px] shadow-sm hover:opacity-90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            施設紹介
          </motion.button>
        </motion.div>

        {/* 見出し（下） */}
        <motion.h3 
          className="text-[22px] md:text-[24px] font-bold tracking-[0.06em] text-[#333] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          教育と保育
        </motion.h3>

        {/* メイン画像 or カーブ付きセクション */}
        <motion.div 
          className="relative overflow-hidden rounded-[40px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/5.jpeg"
            alt="教育と保育の風景"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
