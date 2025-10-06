'use client'
import FloatingMotifs from './FloatingMotifs'
import Link from 'next/link'

export default function StickyContact() {
  return (
    <section className="relative w-full">
      {/* sticky wrapper */}
      <div className="sticky top-0">
        <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#f3f4f6]">
          {/* 背景モチーフ（薄め・大きめ配置） */}
          <FloatingMotifs items={[
            { type:'flower', color:'#f59e0b', top:'8%', left:'12%', anim:'spin', size:120, rotate:0 },
            { type:'waves', color:'#22c55e', top:'18%', left:'78%', anim:'drift', size:130 },
            { type:'raindrops', color:'#7c3aed', top:'68%', left:'10%', anim:'bob', size:120 },
            { type:'spark', color:'#94a3b8', top:'60%', left:'86%', anim:'float', size:110 },
          ]} />

          {/* コンテンツ */}
          <div className="relative z-10 text-center px-4">
            <div className="inline-block rounded-full bg-gradient-to-r from-[#f9c87a] to-[#e6a64b] px-8 py-3 text-white font-semibold shadow-sm hover:opacity-90 transition">
              <Link href="/contact">お問い合わせ</Link>
            </div>

            <div className="mt-6 text-3xl md:text-5xl font-extrabold tracking-wider">TEL 025-752-3123</div>
            <div className="mt-2 text-lg md:text-xl font-semibold opacity-80">FAX 025-755-5117</div>
            <div className="mt-4 text-sm md:text-base">
              〒948-0013 新潟県十日町市川原町853-6
              <button className="ml-2 rounded-full bg-black text-white px-3 py-1 text-xs">MAP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
