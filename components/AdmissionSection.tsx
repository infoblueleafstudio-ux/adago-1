'use client'
import { motion } from 'framer-motion'

export default function AdmissionSection() {
  const items = [
    { title: '幼稚園部・申し込みの流れ', href: '/admission/process', img: '/1.jpeg' },
    { title: '３つの選び方', href: '/admission/choices', img: '/2.jpeg' },
    { title: '保育時間・保育料案内', href: '/admission/fees', img: '/3.jpeg' },
    { title: '一時預かり保育', href: '/admission/temporary', img: '/4.jpeg' },
  ]

  return (
    <motion.section 
      className="w-full bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <motion.h3 
          className="text-center text-[22px] font-bold text-[#333] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          入園のご案内
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 place-items-center">
          {items.map((item, index) => (
            <motion.a 
              key={item.title} 
              href={item.href} 
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative size-[230px] md:size-[260px] rounded-full overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                />
              </div>
              <motion.p 
                className="mt-4 text-[14px] text-[#444] leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
