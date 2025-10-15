'use client';
import { motion } from 'framer-motion';
import MountainIcon from "@/components/ui/MountainIcon";

export default function DecorDivider() {
  return (
    <div className="relative select-none">
      {/* テープ本体（斜めカット） */}
      <div className="relative mx-auto w-full max-w-[1180px] h-[48px] md:h-[56px]">
        <div className="absolute inset-0 rounded-[14px] bg-[#e8dcf3] shadow-[0_2px_6px_rgba(0,0,0,.06)]" />
        {/* 左右の斜めカットを疑似要素で再現 */}
        <div className="absolute -left-5 top-0 h-full w-10 rotate-[-4deg] bg-[#e8dcf3] rounded-l-[14px] shadow-[0_2px_6px_rgba(0,0,0,.06)]" />
        <div className="absolute -right-5 top-0 h-full w-10 rotate-[4deg] bg-[#e8dcf3] rounded-r-[14px] shadow-[0_2px_6px_rgba(0,0,0,.06)]" />
        {/* 下線 */}
        <div className="absolute -bottom-[10px] left-0 right-0 h-[3px] bg-[#cdbfe4]/70 rounded-full mx-8" />
      </div>

      {/* 山アイコン（中央オーバーラップ） */}
      <motion.div
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6, ease: "easeOut" }}
        className="absolute inset-x-0 -top-4 mx-auto grid place-items-center"
      >
        <MountainIcon />
      </motion.div>
    </div>
  );
}
