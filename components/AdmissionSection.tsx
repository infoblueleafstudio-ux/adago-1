'use client'
import { motion } from 'framer-motion'
import { Pencil, Clock3, Backpack, MoreHorizontal } from 'lucide-react'
import FloatingIcon from '@/components/ui/FloatingIcon'

export default function AdmissionSection() {
  const items = [
    {
      title: '募集要項・申し込みの流れ',
      href: '/admission/process',
      img: '/1.jpeg',
      icon: 'pencil',
    },
    {
      title: '３つの認定区分',
      href: '/admission/choices',
      img: '/2.jpeg',
      icon: 'dots',
    },
    {
      title: '保育時間・保育料案内',
      href: '/admission/fees',
      img: '/3.jpeg',
      icon: 'clock',
    },
    {
      title: '一時預かり保育',
      href: '/admission/temporary',
      img: '/4.jpeg',
      icon: 'bag',
    },
  ] as const

  // アイコンの描画（必要ならここをSVGに差し替え可能）
  const renderIcon = (type: typeof items[number]['icon']) => {
    const common = 'w-6 h-6 text-white'
    switch (type) {
      case 'pencil':
        return <Pencil className={common} />
      case 'clock':
        return <Clock3 className={common} />
      case 'bag':
        return <Backpack className={common} />
      case 'dots':
        // 愛宕版の「2 3 1」のイメージに寄せて、3つの点で表現（暫定）
        return <MoreHorizontal className={common} />
    }
  }

  return (
    <motion.section
      className="relative w-full bg-[#ffffff] overflow-visible"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* 背景モチーフ */}
      <FloatingIcon 
        src="/icons/leaf.svg" 
        alt="葉っぱ" 
        className="absolute left-[3%] bottom-[20%] w-[70px] opacity-75" 
        delay={0.2}
        float={true}
      />
      <FloatingIcon 
        src="/icons/block.svg" 
        alt="ブロック" 
        className="absolute right-[5%] top-[15%] w-[60px] opacity-80" 
        delay={0.4}
        float={true}
      />
      <div className="w-[88vw] max-w-[1500px] mx-auto px-6 py-10">
        {/* タイトル */}
        <motion.h3
          className="text-center text-[24px] md:text-[40px] font-bold text-[#333] mt-1 mb-5 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          入園のご案内
        </motion.h3>

        {/* 4カード */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[40px] md:gap-x-[60px] gap-y-[50px] place-items-center">
          {items.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* ② 丸型カード＋外に出るアイコン */}
              <div className="relative flex flex-col items-center">
                {/* 丸型画像（くり抜き＋影） */}
                <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px]
                                rounded-full overflow-hidden bg-white
                                shadow-[0_12px_28px_rgba(0,0,0,0.12)]
                                transition-transform duration-300 z-10">
                  <img
                    src={item.img}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                {/* アイコン（外側の親で管理 → overflow影響なし） */}
                <div className="absolute bottom-[calc(50%-150px)] left-1/2 translate-y-[20px] -translate-x-1/2
                                grid place-items-center
                                w-[64px] h-[64px] md:w-[72px] md:h-[72px]
                                rounded-full bg-[#e6a64b] shadow-lg z-20
                                group-hover:translate-y-[10px] transition-transform duration-300 ease-out
                                pointer-events-none">
                  {renderIcon(item.icon)}
                </div>
              </div>

              {/* ④ テキストの視認性アップ */}
              <motion.p
                  className="mt-6 text-[15px] md:text-[20px] font-medium text-[#000000]
             tracking-wide leading-tight text-center translate-x-[8px]"
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