import React from "react";

export default function MountainIcon({ className = "w-[120px] h-[72px]" }) {
  return (
    <svg viewBox="0 0 120 72" className={className} role="img" aria-label="山のアイコン">
      <defs>
        <linearGradient id="mntBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fc9ad" />
          <stop offset="100%" stopColor="#3ea383" />
        </linearGradient>
        <linearGradient id="mntSub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfe6d6" />
          <stop offset="100%" stopColor="#6bbf91" />
        </linearGradient>
        <filter id="mntShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".25" />
        </filter>
      </defs>

      <ellipse cx="60" cy="64" rx="34" ry="6" fill="#000" opacity=".08" />
      <g filter="url(#mntShadow)">
        <path d="M18 58 L46 22 L60 38 L74 22 L102 58 Z" fill="url(#mntBody)" />
        <path
          d="M46 22 C50 18, 56 18, 60 22 C64 18, 70 18, 74 22 L70 26 C66 23, 62 23, 60 25 C58 23, 54 23, 50 26 Z"
          fill="#ffffff" opacity=".95"
        />
      </g>
      <path d="M10 58 L36 28 L48 42 L58 30 L82 58 Z" fill="url(#mntSub)" opacity=".9" />
      <path d="M36 28 C39 25, 44 25, 48 28 C51 26, 55 26, 58 30 L54 33 C51 31, 47 31, 45 33 C43 31, 40 31, 38 33 Z"
        fill="#fff" opacity=".9" />
      <path d="M90 24 q6 2 8 6 q-5 -2 -8 0 q2 -2 0 -6Z" fill="#6bbf91" opacity=".6" />
    </svg>
  );
}