'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MotifsBetweenSections() {
  const motifs = [
    { src: '/motifs/leaf.svg', alt: '葉っぱ', top: '10%', left: '5%' } as const,
    { src: '/motifs/drop.svg', alt: 'しずく', top: '40%', right: '10%' } as const,
    { src: '/motifs/star.svg', alt: '星', bottom: '8%', left: '15%' } as const,
  ]

  return (
    <div className="relative w-full h-[60px] overflow-visible bg-transparent">
      {motifs.map((m, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: m.top, bottom: m.bottom, left: m.left, right: m.right }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={m.src}
            alt={m.alt}
            width={40}
            height={40}
            className="opacity-80"
          />
        </motion.div>
      ))}
    </div>
  )
}


