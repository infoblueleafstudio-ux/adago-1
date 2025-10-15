import Image from "next/image";
import Link from "next/link";

const items = [
  { href:"/admission/process", title:"幼稚園案内・申し込みの流れ", img:"/1.jpeg" },
  { href:"/admission/requirements", title:"3つの認定区分", img:"/3.jpeg" },
  { href:"/admission/fees", title:"保育料・保育料案内", img:"/9.jpeg" },
  { href:"/admission/visit", title:"一時預かり保育", img:"/12.jpeg" },
];

export default function AdmissionsCircleGrid(){
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-8 mt-10 md:mt-16">
      <h2 className="sr-only">入園のご案内</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((it)=>(
          <Link key={it.href} href={it.href} className="group block text-center">
            <div className="relative mx-auto w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,.12)]">
              <Image src={it.img} alt={it.title} fill className="object-cover transition group-hover:scale-[1.03]" />
            </div>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-[#333]">{it.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
