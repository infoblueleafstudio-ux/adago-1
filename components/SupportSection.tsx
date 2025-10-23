'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SupportSection() {
  return (
    <section className="w-full bg-[#ffffff] pt-5 pb-4 md:py-16 relative z-10 overflow-visible">
      <div className="relative mx-auto w-[90vw] max-w-[1500px] text-center">
        {/* 見出し */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[18px] md:text-[40px] font-[450] text-[#8b4513] md:text-[#333] mb-[6.5px] md:mb-10"
        >
          こどもの森幼稚園は子育てを応援しています
        </motion.h2>

        {/* 写真2枚 */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8 mb-8 md:mb-10 relative">
          {/* PC用の背景装飾 */}
          <Image
            src="/leaf3.svg"
            alt="leaf"
            width={80}
            height={80}
            className="hidden md:block absolute -left-[110px] -top-[20%] opacity-100 w-[120px] h-[80px]"
          />
          <Image
            src="/kamo.png"
            alt="duck"
            width={90}
            height={90}
            className="hidden md:block absolute -left-[70px] bottom-[5%] opacity-90 w-[120px] h-[120px]"
          />
          <Image
            src="/gennki.png"
            alt="木"
            width={80}
            height={80}
            className="hidden md:block absolute -right-[160px] -top-[18%] opacity-90 w-[150px] h-[150px]"
          />
          <Image
            src="/kira.png"
            alt="sparkle"
            width={70}
            height={70}
            className="hidden md:block absolute -right-[65px] bottom-[10%] opacity-90"
          />
          {['/7.jpeg', '/1.jpeg'].map((src, i) => (
            <div key={i} className="md:w-[48%] flex flex-col items-center relative">
              {/* 画像部分（aspect-ratio 対応版） */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="aspect-video rounded-[20px] overflow-hidden shadow-md bg-white hover-lift w-full relative"
              >
                <Image
                  src={src}
                  alt={i === 0 ? '子育て支援の様子' : '園での様子'}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* テキスト・ボタン（カード外） */}
              <div className="mt-3 md:mt-5 text-center w-full relative">
                {i === 0 ? (
                  <>
                    <h3 className="text-[18px] md:text-[19px] font-[450] text-[#000] mb-1.5 md:mb-2">
                      子育て支援
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed mb-2.5 md:mb-3">
                      持ち物の削減や送迎サポートなど、保護者のご負担を
                      <br className="inline md:hidden" />
                      減らす取り組みを行っています。
                    </p>
                    <div className="relative inline-block">
                      <a
                        href="/support"
                        className="inline-block rounded-full bg-[#e6a64b] text-white px-6 py-2 text-[13px] md:text-[15px] font-medium hover:opacity-90 transition"
                      >
                        子育て支援について
                      </a>
                      {/* スマホ用アイコン */}
                      <Image
                        src="/risu.png"
                        alt="リス"
                        width={30}
                        height={40}
                        className="absolute -right-[60px] top-[19px] -translate-y-1/2 md:hidden w-[48px] h-[48px]"
                      />
                       <Image
                        src="/hatena.png"
                        alt="シカ"
                        width={30}
                        height={40}
                        className="absolute right-[111%] top-[12px] -translate-y-1/2 md:hidden w-[60px] h-[60px]"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-[18px] md:text-[19px] font-[450] text-[#000] mb-1.5 md:mb-2">
                      よくあるご質問
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed mb-2.5 md:mb-3">
                       保護者の方々から寄せられる、
                         <br className="inline md:hidden" />
                        よくあるご質問をまとめました。
                    </p>
                    <div className="relative inline-block">
                      <a
                        href="/faq"
                        className="inline-block rounded-full bg-[#999] text-white px-10 py-2 text-[13px] md:text-[15px] font-medium hover:opacity-90 transition"
                      >
                        よくある質問
                      </a>
                      {/* スマホ用アイコン */}
                      <Image
                        src="/15.png"
                        alt="人"
                        width={28}
                        height={28}
                        className="absolute -right-[94px] top-[10px] -translate-y-1/2 md:hidden w-[88px] h-[88px]"
                      />
                       <Image
                        src="/iii.png"
                        alt="?"
                        width={28}
                        height={28}
                        className="absolute right-[112%] -top-[18px] -translate-y-1/2 md:hidden w-[88px] h-[88px] -rotate-12"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 背景カーブ */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[110px] md:h-[120px] text-[#f8f4f3] -z-10"
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