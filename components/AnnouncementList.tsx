'use client'
import { motion } from 'framer-motion'

export default function AnnouncementList() {
  const announcements = [
    { title: '運動会のお知らせ', date: '2025.09.10' },
    { title: '園庭開放のお知らせ', date: '2025.08.28' },
    { title: '夏祭りを開催しました', date: '2025.07.20' },
  ]

  return (
    <section className="w-full bg-[#faf8f3] py-16">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-[22px] font-bold text-[#333]">お知らせ</h3>
          <a href="/news" className="text-[14px] text-[#888] hover:text-[#e6a64b] transition">
            一覧 →
          </a>
        </div>

        <div className="grid gap-6">
          {announcements.map((news, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm rounded-xl px-6 py-5 hover:shadow-md transition"
            >
              <p className="text-sm text-[#999] mb-1">{news.date}</p>
              <p className="text-[16px] text-[#333] font-medium">{news.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


