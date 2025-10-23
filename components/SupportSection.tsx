'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FloatingIcon from '@/components/ui/FloatingIcon'

export default function SupportSection() {
  return (
    <section className="w-full bg-[#ffffff] pt-5 pb-2 md:py-16 relative z-10 overflow-visible">
      
      <div className="relative mx-auto w-[88vw] max-w-[1500px] text-center">
        {/* 見出し */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[22px] md:text-[40px] font-bold text-[#333] mb-10"
        >
          こどもの森幼稚園は子育てを応援しています
        </motion.h2>

        {/* 写真2枚 */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {['/7.jpeg', '/1.jpeg'].map((src, i) => (
            <div key={i} className="md:w-[48%] flex flex-col items-center">
              {/* 画像部分 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="rounded-[24px] overflow-hidden shadow-md bg-white hover-lift"
              >
                <Image
                  src={src}
                  alt={i === 0 ? '子育て支援の様子' : '園での様子'}
                  width={700}
                  height={450}
                  className="w-full h-[300px] md:h-[360px] object-cover"
                />
              </motion.div>

              {/* テキスト・ボタン（カード外） */}
              <div className="mt-5 text-center w-full">
                {i === 0 ? (
                  <>
                    <h3 className="text-[17px] md:text-[19px] font-bold text-[#000000] mb-2">
                      子育て支援
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed mb-3">
                      持ち物の削減や送迎サポートなど、保護者のご負担を減らす取り組みを行っています。
                    </p>
                    <a
                      href="/support"
                      className="inline-block rounded-full bg-[#e6a64b] text-white px-6 py-2.5 text-[14px] font-medium hover:opacity-90 transition"
                    >
                      子育て支援について
                    </a>
                  </>
                ) : (
                  <>
                    <h3 className="text-[17px] md:text-[19px] font-bold text-[#000000] mb-2">
                      よくあるご質問
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed mb-3">
                      保護者の方々から寄せられる、よくあるご質問をまとめました。
                    </p>
                    <a
                      href="/faq"
                      className="inline-block rounded-full bg-[#999] text-white px-6 py-2.5 text-[14px] font-medium hover:opacity-90 transition"
                    >
                      よくある質問
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 背景カーブ */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[120px] text-[#f8f4f3] -z-10"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C320,160 1120,-32 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  )
}