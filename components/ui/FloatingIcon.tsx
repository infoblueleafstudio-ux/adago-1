'use client'
import { motion } from 'framer-motion'

interface FloatingIconProps {
  src: string
  alt: string
  className?: string
  delay?: number
  float?: boolean // ← 追加: ふわふわ動作ON/OFF
  rotate?: boolean // ← 追加: ゆるやかな回転ON/OFF
}

export default function FloatingIcon({
  src,
  alt,
  className = '',
  delay = 0,
  float = true,
  rotate = false
}: FloatingIconProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={
        float
          ? {
              y: [0, -10, 0], // 上下ふわふわ
              rotate: rotate ? [0, 2, -2, 0] : 0 // 回転もオンなら軽くゆらぎ
            }
          : {}
      }
      transition={{
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 0.8, delay }
      }}
      className={`select-none pointer-events-none ${className}`}
    />
  )
}
