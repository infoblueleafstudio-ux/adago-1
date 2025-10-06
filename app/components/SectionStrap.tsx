'use client'
import Link from 'next/link'

export default function SectionStrap({
  title,
  pills = []
}: {
  title: string
  pills?: { label: string; href: string }[]
}) {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-full px-6 lg:px-16 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest">{title}</h2>
        {pills.length > 0 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            {pills.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-full bg-gradient-to-r from-[#f9c87a] to-[#e6a64b] px-6 py-2 text-white text-sm font-semibold shadow-sm hover:opacity-90 transition"
              >
                {p.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
