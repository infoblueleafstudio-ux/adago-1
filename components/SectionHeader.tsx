type Props = { 
  title: string; 
  note?: string;
};

export default function SectionHeader({ title, note }: Props) {
  return (
    <div className="relative max-w-[1180px] mx-auto px-6 md:px-8 mt-10 md:mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-[28px] md:text-[32px] font-bold tracking-[.02em] text-[#2b2b2b]">{title}</h2>
        <div className="hidden md:flex items-center gap-3 text-sm text-gray-400">
          <span className="inline-block w-6 h-[2px] bg-gray-300" />
          <span className="tracking-widest">—</span>
          <span className="inline-block w-6 h-[2px] bg-gray-300" />
        </div>
      </div>
      {note && <p className="mt-2 text-sm text-gray-500">{note}</p>}
      <div className="absolute -bottom-3 left-6 right-6 h-[1px] bg-black/[.06]" />
    </div>
  );
}
