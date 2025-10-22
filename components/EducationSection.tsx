'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FloatingIcon from '@/components/ui/FloatingIcon'

export default function EducationSection() {
  return (
    <section className="relative z-10 w-full bg-[#ffffff] py-8 md:py-12 overflow-visible">
      {/* 背景モチーフ */}
      <FloatingIcon 
        src="/icons/leaf.svg" 
        alt="葉っぱ" 
        className="absolute right-[8%] top-[20%] w-[60px] opacity-75 hidden md:block" 
        delay={0.2}
        float={true}
      />
      <FloatingIcon 
        src="/icons/bird.svg" 
        alt="小鳥" 
        className="absolute left-[8%] bottom-[30%] w-[50px] opacity-70 hidden md:block" 
        delay={0.4}
        float={true}
        rotate={true}
      />

      {/* タイトル */}
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          text-[26px] md:text-[42px] font-bold 
          tracking-[0.08em] text-[#333]
          text-center
          mb-2 md:mb-3
          -mt-4 md:-mt-12        /* ← タイトルを点線ガイドに近づける */
        "
      >
        教育と保育
      </motion.h3>

      {/* 教育と保育のメイン画像（上下スリム・左右カプセル型） */}
      <div className="relative w-[88vw] max-w-[1500px] mx-auto mt-2 md:mt-4 mb-12 md:mb-16 overflow-visible">
        {/* 画像コンテナ（角丸・overflow-visibleに変更） */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden
            w-full
            aspect-[4.4/1]
            rounded-[250px] sm:rounded-[300px] md:rounded-[350px]
            shadow-lg bg-white
          "
        >
          <img
            src="/5.jpeg"
            alt="教育と保育の風景"
            className="w-full h-full object-cover object-[center_42%]"
          />
        </motion.div>

        {/* 🟣 黒帯テキスト（上にオーバーラップ） */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="
            absolute z-20
            top-[-50px] sm:top-[-60px] md:top-[-50px] right-[1%]
            flex flex-col items-start gap-[8px]
            pointer-events-none
          "
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          {[
            "感じて、",
            "考えて、",
            "動いて。",
            "五感をフルに使う",
            "やまほいく。",
          ].map((text, i) => (
            <span
              key={i}
              className="
                font-bold
                text-[20px] sm:text-[24px] md:text-[30px]
                text-white
                bg-black/80
                rounded-md
                shadow-md
                px-[3px] py-[1px]
                drop-shadow-[1px_1px_4px_rgba(0,0,0,0.4)]
                leading-[2rem] md:leading-[3rem]
                transition-all duration-300
              "
            >
              {text}
            </span>
          ))}
        </motion.div>

        {/* 🟢 園の理念 CTAボタン（キャラ付き・愛宕幼稚園風） */}
        <div
          className="absolute left-1/2 bottom-[-45px] -translate-x-1/2 z-30 flex flex-col items-center"
        >
          {/* キャラクター画像（おじぎ） */}
          <motion.img
            src="/icons/ojigi.png"
            alt="キャラクター"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="w-[90px] md:w-[80px] mb-[-5px] z-20 select-none pointer-events-none"
          />

          {/* 園の理念ボタン */}
          <motion.a
            href="/education/philosophy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="
              bg-[#84b78e] text-white font-bold text-[16px] md:text-[20px]
              px-8 py-3 rounded-full shadow-md
              border-[2px] border-[#3cb371]
              hover:bg-[#006400] hover:scale-105 hover:text-[#ffefd5]
              transition-all duration-300
              shadow-lg
            "
          >
            園の理念
          </motion.a>
        </div>
      </div>

      {/* メニュー */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="
          flex justify-center items-center flex-wrap
          mt-[35px] mb-[35px]
          text-[16px] md:text-[18px] font-bold tracking-[0.05em]
          text-[#333] space-x-0 md:space-x-1
        "
      >
        <>
          {/* 左端の区切り線 */}
          <span className="
              mx-1 h-[25px] w-[1.5px] bg-[#555] opacity-60
            translate-y-[1px]  /* ← テキスト中央に合わせるため微調整 */
          "></span>
          
          {[
            { label: '園での1日', href: '/day' },
            { label: '年間行事', href: '/events' },
            { label: '知育', href: '/education' },
            { label: '体育', href: '/sports' },
            { label: '食育', href: '/food' },
            { label: '先生の紹介', href: '/teachers' },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-center">
              {/* メニューリンク */}
              <motion.a
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="
                  text-black hover:text-[#696969]
                  transition-all duration-300 px-3
                "
              >
                {item.label}
              </motion.a>

              {/* 区切り線（最後にも表示） */}
              {i < arr.length - 1 && (
                <span className="
                    mx-1 h-[25px] w-[1.5px] bg-[#555] opacity-60
                  translate-y-[1px]  /* ← テキスト中央に合わせるため微調整 */
                "></span>
              )}
            </div>
          ))}
          
          {/* 右端の区切り線 */}
          <span className="
              mx-1 h-[25px] w-[1.5px] bg-[#555] opacity-60
            translate-y-[1px]  /* ← テキスト中央に合わせるため微調整 */
          "></span>
        </>
      </motion.div>
    </section>
  )
}