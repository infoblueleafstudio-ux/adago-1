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
      {/* 🐿️ 装飾モチーフ（タイトルまわり・生き物） */}
      <div className="relative w-full overflow-visible">
        {/* PC：タイトル左右 */}
        <motion.img
          src="/tonnbo.png"
          alt="とんぼ"
          className="hidden md:block absolute top-[68px] left-[25%] w-[120px] rotate-[-10deg] z-[25]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
       <motion.img
          src="/kira.png"
          alt="ほし"
          className="hidden md:block absolute top-[8px] left-[5%] w-[140px] rotate-[-10deg] z-[25]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/risu.png"
          alt="りす"
          className="hidden md:block absolute top-[55px] right-[28%] w-[110px] z-[25]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
                <motion.img
          src="/niji.png"
          alt="虹"
          className="hidden md:block absolute top-[188px] right-[3%] w-[110px] z-[25]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* スマホ：タイトル左上 */}
        <motion.img
          src="/tonnbo.png"
          alt="とんぼ"
          className="block md:hidden absolute top-[34px] left-[5%] w-[70px] z-[25]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
                <motion.img
          src="/saru.png"
          alt="さる"
          className="block md:hidden absolute top-[15px] right-[5%] w-[80px] z-[25]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="w-[88vw] max-w-[1500px] mx-auto px-6 pt-5 pb-2 md:pt-20">
        {/* タイトル */}
        <motion.h3
          className="text-center text-[24px] md:text-[40px] font-[450] text-[#333] 
                     mt-[-17px] md:mt-[-38px] mb-6 md:mb-[20px] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          入園のご案内
        </motion.h3>

        {/* 4カード */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[55px] md:gap-x-[60px] gap-y-[35px] md:gap-y-[50px]  place-items-center"> {/* 👇縦方向間隔拡大 */}
          {items.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className={`
                group text-center flex flex-col items-center justify-start
                h-[260px] md:h-[420px]
              `}
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
                <div className="relative w-[160px] h-[160px] md:w-[300px] md:h-[300px] {/* 👇画像サイズ調整 */}
                                rounded-full overflow-hidden bg-white
                                shadow-[0_12px_28px_rgba(0,0,0,0.12)]
                                transition-transform duration-300 z-10">
                  <img
                    src={item.img}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-100 md:group-hover:scale-[1.04]"
                  />
                </div>

                {/* アイコン（外側の親で管理 → overflow影響なし） */}
                <div className="absolute bottom-[calc(50%-80px)] sm:bottom-[calc(50%-150px)] left-1/2 translate-y-[30px] -translate-x-1/2 {/* 👇アイコン位置補正 */}
                                grid place-items-center
                                w-[50px] h-[50px] md:w-[72px] md:h-[72px]
                                rounded-full bg-[#e6a64b] shadow-lg z-20
                                group-hover:translate-y-[10px] transition-transform duration-300 ease-out
                                pointer-events-none">
                  {renderIcon(item.icon)}
                </div>
              </div>

              {/* ④ テキストの視認性アップ */}
                  <motion.p
                    className={`
                      mt-[42px]  md:mt-[50px] text-[13px] md:text-[20px]
                      font-medium text-[#000000]
                      tracking-wide leading-tight text-center translate-x-[8px]
                      ${item.title === '募集要項・申し込みの流れ' ? 'text-[12px]' : ''}
                    `}
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

{/* 🐦 カード下装飾（PC） */}
<div className="relative w-full h-[80px] mt-[20px] mb-[-68px] overflow-visible">
  <motion.img
    src="/kotori.png"
    alt="ことり"
    className="hidden md:block absolute bottom-[10px] left-[45%] w-[130px] z-[25]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  />

  <motion.img
    src="/hina.png"
    alt="ひな"
    className="hidden md:block absolute bottom-[-10px] left-[52%] w-[90px] z-[25]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  />
   <motion.img
  src="/yuki.png"
  alt="雪"
  className="hidden md:block absolute bottom-[80px] right-[5%] w-[110px] z-[25]"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
/>
</div>

      {/* 🦗 スマホ：上段と下段の間 */}

      <motion.img
        src="/batta.png"
        alt="ばった"
        className="block md:hidden absolute top-[44.5%] right-[18%] w-[72px] z-[25]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
            <motion.img
        src="/hebi.png"
        alt="蛇"
        className="block md:hidden absolute top-[44.5%] left-[3%] w-[72px] z-[25]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
      {/* 🐥 スマホ：カード下装飾 */}
<div className="relative w-full block md:hidden mt-[10px] mb-[-40px] overflow-visible">
  <motion.img
    src="/kotori.png"
    alt="鳥"
    className="absolute bottom-[7px] left-[36%] w-[75px] z-[20]"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  />
  <motion.img
    src="/hina.png"
    alt="ひな"
    className="absolute bottom-[-27px] left-[52%] w-[70px] z-[19]"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  />
    <motion.img
    src="/ki.png"
    alt="木"
    className="absolute bottom-[-27px] left-[2%] w-[70px] z-[19]"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  />
    <motion.img
    src="/ki.png"
    alt="木"
    className="absolute bottom-[-27px] right-[2%] w-[70px] z-[19]"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  />
</div>

    </motion.section>
  )
}