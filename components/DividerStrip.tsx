export default function DividerStrip() {
  return (
    <>
      {/* === Hero 下の仕切り帯（黄緑）＋山アイコン === */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 h-[56px] bg-[#e6f5d9]"></div>
        <div className="relative flex items-center justify-center h-[56px]">
          {/* 山アイコン（中央） */}
          <svg
            aria-hidden
            viewBox="0 0 64 32"
            className="w-[74px] h-[37px] -mt-2 drop-shadow-sm"
          >
            <path d="M4 28 L22 10 L27 16 L33 9 L44 20 L60 28 Z" fill="#3DA982"/>
            <circle cx="40" cy="14" r="2.4" fill="#3DA982"/>
            <path d="M2 28 H62" stroke="#9AD3AF" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </>
  );
}
