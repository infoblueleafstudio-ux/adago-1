'use client';
import Image from "next/image";
import Link from "next/link";

export default function EducationPromo(){
  return (
    <section className="w-full bg-[#fafafa] py-20 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        {/* 教育と保育タイトル */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b2b2b] mb-4">教育と保育</h2>
        </div>

        {/* 見出しと2ボタン（愛宕の黄色/桃色ピル） */}
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <Link href="/attractions"
            className="inline-flex items-center justify-center px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold text-[#3a3a3a]"
            style={{background:'#ffd465'}}
          >10の魅力</Link>
          <Link href="/about/overview"
            className="inline-flex items-center justify-center px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold text-white"
            style={{background:'#f3a1a1'}}
          >園の紹介</Link>
        </div>

        {/* 大きなカプセル画像＋縦ラベル */}
        <div className="relative mt-5 md:mt-7">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-[44px] shadow-[0_12px_30px_rgba(0,0,0,.10)]">
            <Image src="/4.jpeg" alt="教育と保育" fill className="object-cover" priority />
            {/* 右側の縦ラベル */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="rotate-90 origin-right bg-black/60 text-white px-4 py-2 rounded-full tracking-[.3em] text-[13px]">
                たかく 明るく 豊かに 正しさを 身につける
              </div>
            </div>
          </div>
          {/* 下の「園の特色へ」ボタン */}
          <div className="mt-4">
            <Link href="/education/philosophy"
              className="inline-flex items-center px-5 py-2 rounded-full bg-[var(--brand-green)] text-white text-sm shadow hover:brightness-110 transition">
              園の特色
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
