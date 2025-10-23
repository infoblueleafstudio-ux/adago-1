'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FloatingIcon from '@/components/ui/FloatingIcon'

export default function EducationSection() {
  return (
    <section className="relative z-10 w-full bg-[#ffffff] py-8 md:py-12 overflow-visible">

      {/* 教育と保育タイトルブロック（nemu.png装飾付き） */}
      <div className="relative w-fit mx-auto mb-2 md:mb-3">
        {/* スマホ・PC共通でふわっと出現 */}
        <motion.img
          src="/nemu.png"
          alt="ねむの木の飾り"
          initial={{ opacity: 0, y: -10, x: -10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            absolute
            z-10
            left-[-100px] top-[-10px]   /* スマホ用：タイトルの左上に配置 */
            md:left-[-720px] md:top-[-80px]   /* PC用：やや外側・上に移動 */
            w-[100px] md:w-[380px]     /* サイズ：スマホ小さめ、PCは広め */
            opacity-90
            pointer-events-none select-none
            drop-shadow-[2px_2px_4px_rgba(0,0,0,0.15)]
          "
        />

        {/* 教育と保育タイトル */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            text-[26px] md:text-[42px] font-bold 
            tracking-[0.08em] text-[#333]
            text-center
            -mt-4 md:-mt-12
          "
        >
          教育と保育
        </motion.h3>
      </div>

        {/* 教育と保育のメイン画像（スマホ：丸型／PC：カプセル型） */}
        <div className="relative w-[88vw] max-w-[1500px] mx-auto mt-2 md:mt-4 mb-12 md:mb-16 overflow-visible">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="
              relative
              w-full
              aspect-square md:aspect-[4.4/1]
              rounded-full md:rounded-[350px]
              shadow-lg bg-white
              mx-auto
              overflow-visible    /* ← ここを visible に変更 */
            "
          >
            {/* 丸画像だけを overflow-hidden にする */}
            <div className="relative w-full h-full overflow-hidden rounded-full md:rounded-[350px]">
              {/* スマホ用（丸型） */}
              <img
                src="/ohiku.jpeg"
                alt="教育と保育の風景（スマホ用）"
                className="
                  block md:hidden
                  w-full h-full object-cover
                  object-[center_30%]
                  rounded-full
                "
              />

              {/* PC用（カプセル型） */}
              <img
                src="/5.jpeg"
                alt="教育と保育の風景（PC用）"
                className="
                  hidden md:block
                  w-full h-full object-cover
                  object-[center_40%]
                  scale-[1]
                  rounded-[350px]
                "
              />
            </div>

            {/* 🟣 黒帯テキスト（スマホ用・右上） */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="
                absolute z-30   /* ← z-index強化 */
                top-[1%] right-[5%]
                flex md:hidden flex-col items-start gap-[4px]
                pointer-events-none
              "
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
            >
              {[
                '感じて、',
                '考えて、',
                '動いて。',
                '五感をフルに使う',
                'やまほいく。',
              ].map((text, i) => (
                <span
                  key={i}
                  className="
                    font-bold
                    text-[12px]
                    text-white
                    bg-black/80
                    rounded-md
                    shadow-md
                    px-[1px] py-[1px]
                    drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)]
                    leading-[1.4rem]
                    transition-transform duration-300
                  "
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

        {/* 🟣 黒帯テキスト（PC用・上にオーバーラップ） */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="
            absolute z-20
            top-[-50px] sm:top-[-60px] md:top-[-50px] right-[1%]
            hidden md:flex flex-col items-start gap-[8px]
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

        {/* 🟢 園の理念 CTAボタン（スマホでもキャラ表示） */}
        <div className="absolute left-1/2 bottom-[-45px] -translate-x-1/2 z-30 flex flex-col items-center">
          {/* おじぎキャラ */}
          <motion.img
            src="/icons/ojigi.png"
            alt="キャラクター"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="
              block md:block
              w-[70px] md:w-[80px]
              mb-[-5px] z-20 select-none pointer-events-none
            "
          />
          {/* ボタン */}
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

        {/* 🌸 花の飾り（園の理念ボタンの下／右寄せ） */}
        <motion.img
          src="/hana.png"
          alt="花の飾り"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="
            absolute
            right-[-5%] bottom-[-55px]     /* ← ボタンより下＆右寄せ */
            md:right-[-8%] md:bottom-[-120px]
            w-[100px] md:w-[180px]
            opacity-90
            pointer-events-none select-none
            drop-shadow-[2px_2px_4px_rgba(0,0,0,0.15)]
          "
        />
      </div>

      {/* メニュー */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="
          flex justify-center items-center flex-wrap
          mt-[65px] md:mt-[80px] mb-[-3px] md:mb-[1px]
          text-[16px] md:text-[18px] font-bold tracking-[0.05em]
          text-[#333]
        "
      >
        {/* スマホ表示：2列グリッド風（ボタン型） */}
        <div className="block md:hidden w-full px-6">
          <div className="grid grid-cols-2 gap-[10px]">
            {[
              { label: '園での1日', href: '/day' },
              { label: '年間行事', href: '/events' },
              { label: '知育', href: '/education' },
              { label: '体育', href: '/sports' },
              { label: '食育', href: '/food' },
              { label: '先生の紹介', href: '/teachers' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ scale: 1.04 }}
                className="
                  block text-center py-[10px]
                  rounded-[15px]
                  bg-[#eee8aa] border border-[#b4d0b8]
                  text-[#333]
                  shadow-sm hover:bg-[#d8ebdb]
                  transition-all duration-300
                "
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* PC表示：既存の横並びライン型 */}
        <div className="hidden md:flex justify-center items-center flex-wrap text-[16px] md:text-[18px] font-bold tracking-[0.05em] text-[#333] space-x-0 md:space-x-1">
          <>
            <span className="mx-1 h-[25px] w-[1.5px] bg-[#555] opacity-60 translate-y-[1px]" />
            {[
              { label: '園での1日', href: '/day' },
              { label: '年間行事', href: '/events' },
              { label: '知育', href: '/education' },
              { label: '体育', href: '/sports' },
              { label: '食育', href: '/food' },
              { label: '先生の紹介', href: '/teachers' },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-center">
                <motion.a
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-black hover:text-[#696969] transition-all duration-300 px-3"
                >
                  {item.label}
                </motion.a>
                {i < arr.length - 1 && (
                  <span className="mx-1 h-[25px] w-[1.5px] bg-[#555] opacity-60 translate-y-[1px]" />
                )}
              </div>
            ))}
            <span className="mx-1 h-[25px] w-[1.5px] bg-[#555] opacity-60 translate-y-[1px]" />
          </>
        </div>
      </motion.div>
    </section>
  )
}