'use client'
import { motion } from 'framer-motion'

interface FloatingIconProps {
  src: string
  alt: string
  className?: string
  delay?: number // ← 各アイコンごとにずらす時間
  float?: boolean
  rotate?: boolean
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
      initial={{ opacity: 0, rotate: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={
        float
          ? {
              rotate: [-6, 6, -8],
              scale: rotate ? [1, 1.02, 1] : 1,
            }
          : {}
      }
      transition={{
        rotate: {
          duration: 2.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay, // ← ここを追加！
        },
        scale: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay, // ← ここも追加！
        },
        opacity: { duration: 0.8, delay },
      }}
      className={`select-none pointer-events-none ${className}`}
    />
  )
}
