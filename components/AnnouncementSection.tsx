'use client'
import { motion } from 'framer-motion'

export default function AnnouncementSection() {
  return (
    <section className="relative z-[20] w-full bg-[#f8f4f3] pt-[91px] pb-[10px] md:py-[50px]   overflow-visible">
      {/* 🏞 背景モチーフ（山） */}
      <motion.img
        src="/yama.png"
        alt="山のモチーフ"
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          absolute
          left-[32%] top-[-50px]         /* スマホ用位置 */
          md:left-[43%] md:top-[-180px]  /* PC用位置 */
          w-[150px] md:w-[240px]
          opacity-90
          pointer-events-none select-none
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.1)]
          z-[15]                          /* ← z-indexを上げる */
        "
      />

      {/* 🌊 背景モチーフ（川） */}
      <motion.img
        src="/kawa.png"
        alt="川のモチーフ"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -5, 5, 0],
        }}
        className="
          absolute
          right-[29%] bottom-[-20px]        /* スマホ用位置 */
          md:right-[46.3%] md:bottom-[-24px]  /* PC用位置 */
          w-[171px] md:w-[191px]
          opacity-95
          pointer-events-none select-none
          drop-shadow-[2px_2px_6px_rgba(0,0,0,0.1)]
          z-[15]                             /* ← こちらも前へ */
        "
      />
       <motion.img
        src="/honoo.png"
        alt="honoo"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -5, 5, 0],
        }}
        className="
          absolute
          left-[6%] bottom-[50px]        /* スマホ用位置 */
          md:left-[35%] md:bottom-[0px]  /* PC用位置 */
          w-[80px] md:w-[130px]
          opacity-95
          pointer-events-none select-none
          drop-shadow-[2px_2px_6px_rgba(0,0,0,0.1)]
          z-[15]                             /* ← こちらも前へ */
        "
      />

      {/* 🦖 背景モチーフ（怪獣） */}
      <motion.img
        src="/oi.png"
        alt="怪獣モチーフ"
        className="
          absolute
          right-[2.5%] md:right-[12%]
          bottom-[-40px] md:bottom-[-46px]
          w-[140px] md:w-[275px]
          opacity-100
          rotate-[0deg] md:rotate-[0deg]
          pointer-events-none
          z-[16]                             /* ← 山・川より前 */
        "
        animate={{
          x: [2, 1, -1, -2],
          rotate: [2, 6, 6, 2],
        }}
        transition={{
          duration: 0.25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* タイトルと一覧ボタン */}
      <div className="relative z-[20] w-full max-w-[1100px] mx-auto px-6 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center md:gap-0 gap-6">
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