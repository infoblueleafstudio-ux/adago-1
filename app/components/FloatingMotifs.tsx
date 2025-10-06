'use client'
import React from 'react'

type Motif = {
  type: 'dots' | 'raindrops' | 'waves' | 'leaf' | 'spark' | 'flower'
  color?: string
  top: string  // e.g. '12%', '68%'
  left: string // e.g. '8%', '86%'
  anim?: 'float' | 'drift' | 'bob' | 'spin'
  size?: number // px
  rotate?: number
}

function SvgMotif({ type, color = '#eab308' }: {type: Motif['type'], color?: string}) {
  switch (type) {
    case 'waves':
      return (
        <svg viewBox="0 0 60 12" width="100%" height="100%">
          <path d="M0 6c6 4 12 4 18 0s12-4 18 0 12 4 18 0" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case 'raindrops':
      return (
        <svg viewBox="0 0 24 24" width="100%" height="100%">
          <path d="M12 3 C8 9,6 11,6 14 a6 6 0 0 0 12 0 c0-3-2-5-6-11z" fill={color}/>
        </svg>
      )
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" width="100%" height="100%">
          <path d="M4 12c6-8 14-8 16 0-6 8-14 8-16 0z" fill={color}/>
        </svg>
      )
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" width="100%" height="100%">
          <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill={color}/>
        </svg>
      )
    case 'flower':
      return (
        <svg viewBox="0 0 24 24" width="100%" height="100%">
          <circle cx="12" cy="12" r="3" fill={color}/>
          <circle cx="6" cy="12" r="3" fill={color}/>
          <circle cx="18" cy="12" r="3" fill={color}/>
          <circle cx="12" cy="6" r="3" fill={color}/>
          <circle cx="12" cy="18" r="3" fill={color}/>
        </svg>
      )
    default: // dots
      return (
        <svg viewBox="0 0 24 24" width="100%" height="100%">
          <circle cx="12" cy="12" r="3" fill={color}/>
        </svg>
      )
  }
}

export default function FloatingMotifs({ items }: { items: Motif[] }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((m, i) => (
        <div
          key={i}
          className={`motif-soft absolute ${m.anim === 'float' ? 'anim-float' : m.anim === 'drift' ? 'anim-drift' : m.anim === 'bob' ? 'anim-bob' : m.anim === 'spin' ? 'anim-spin-slow' : ''}`}
          style={{
            top: m.top, left: m.left,
            width: (m.size ?? 36) + 'px',
            height: (m.size ?? 36) + 'px',
            transform: m.rotate ? `rotate(${m.rotate}deg)` : undefined
          }}
        >
          <SvgMotif type={m.type} color={m.color}/>
        </div>
      ))}
    </div>
  )
}
