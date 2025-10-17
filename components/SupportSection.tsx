'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SupportSection() {
  return (
    <section className="w-full py-8 md:py-12 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center">
        {/* 見出し */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[22px] md:text-[24px] font-bold text-[#333] mb-8"
        >
          こどもの森幼稚園は子育てを応援しています
        </motion.h2>

        {/* 写真2枚 */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
          {['/7.jpeg', '/1.jpeg'].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-[20px] overflow-hidden shadow-md md:w-1/2 bg-[#f8f8f8] transition-transform hover:scale-[1.02] duration-500 ease-out"
            >
              <Image
                src={src}
                alt={i === 0 ? '子育て支援の様子' : '園での様子'}
                width={550}
                height={350}
                className="w-full h-[300px] md:h-[340px] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.a
            href="/support"
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#e6a64b] text-white px-8 py-3 text-[15px] font-medium hover:opacity-90 transition"
          >
            子育て支援はこちら
          </motion.a>

          <motion.a
            href="/faq"
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#999] text-white px-8 py-3 text-[15px] font-medium hover:opacity-90 transition"
          >
            よくあるご質問
          </motion.a>
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
