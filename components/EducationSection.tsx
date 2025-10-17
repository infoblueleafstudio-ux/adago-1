'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function EducationSection() {
  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12">
      {/* 装飾アイコン */}
      <Image 
        src="/icons/leaf.svg" 
        alt="" 
        width={28} 
        height={28}
        className="absolute left-[4%] top-[20%] opacity-70 hover:opacity-100 transition-opacity hidden md:block" 
      />
      <Image 
        src="/icons/star.svg" 
        alt="" 
        width={20} 
        height={20}
        className="absolute right-[10%] top-[35%] opacity-70 hover:opacity-100 transition-opacity hidden md:block" 
      />
      <Image 
        src="/icons/drop.svg" 
        alt="" 
        width={22} 
        height={22}
        className="absolute right-[6%] bottom-[25%] opacity-70 hover:opacity-100 transition-opacity hidden md:block" 
      />
      <Image 
        src="/icons/bird.svg" 
        alt="" 
        width={24} 
        height={24}
        className="absolute left-[8%] bottom-[30%] opacity-70 hover:opacity-100 transition-opacity hidden md:block" 
      />
      <Image 
        src="/icons/swing.svg" 
        alt="" 
        width={26} 
        height={26}
        className="absolute right-[15%] top-[15%] opacity-70 hover:opacity-100 transition-opacity hidden md:block" 
      />
      <Image 
        src="/icons/block.svg" 
        alt="" 
        width={30} 
        height={30}
        className="absolute left-[12%] top-[45%] opacity-70 hover:opacity-100 transition-opacity hidden md:block" 
      />

      {/* タイトル */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[22px] md:text-[24px] font-bold tracking-[0.06em] text-[#333] text-center mb-6"
      >
        教育と保育
      </motion.h3>

      {/* 画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[40px] shadow-md mx-auto max-w-[900px]"
      >
        <img
          src="/5.jpeg"
          alt="教育と保育の風景"
          className="w-full h-[420px] object-cover"
        />
      </motion.div>

      {/* メニュー */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-wrap gap-10 mt-[60px] mb-[70px] text-[20px] font-medium text-[#333]"
      >
        {[
          { label: '園での1日', href: '/day' },
          { label: '年間行事', href: '/events' },
          { label: '知育', href: '/education' },
          { label: '体育', href: '/sports' },
          { label: '食育', href: '/food' },
          { label: '先生の紹介', href: '/teachers' },
        ].map((item, i, arr) => (
          <motion.div key={i} className="flex items-center">
            {/* メニューリンク */}
            <motion.a
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-black hover:text-[#e6a64b] transition-all duration-300 px-3"
            >
              {item.label}
            </motion.a>

            {/* 区切り線（最後の項目以外に表示） */}
            {i < arr.length - 1 && (
              <span className="h-6 w-[1px] bg-black mx-4"></span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
