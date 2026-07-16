export function ComicArt() {
  return (
    <div
      aria-label="Illustrated cafe window with rain, coffee, and Spanish dialogue"
      role="img"
      className="comic-panel relative min-h-[280px] overflow-hidden rounded-[8px] p-5 shadow-editorial sm:min-h-[360px]"
    >
      <div className="comic-window absolute left-8 top-8 h-32 w-40 rounded-[8px] border border-white/50 shadow-sm" />
      <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-[#f3d6a5] shadow-2xl">
        <div className="absolute left-6 top-6 h-11 w-12 rounded-b-full rounded-t-sm border-[10px] border-[#7f3f32] bg-[#f8efe0]" />
        <div className="absolute left-[66px] top-10 h-7 w-8 rounded-r-full border-4 border-[#7f3f32]" />
      </div>
      <div className="absolute right-6 top-10 max-w-[180px] rounded-[8px] bg-white/88 p-4 text-sm font-semibold text-slate-900 shadow-xl">
        ¿Un café con leche, por favor?
      </div>
      <div className="absolute bottom-10 right-6 max-w-[160px] rounded-[8px] bg-[#223843]/90 p-4 text-sm font-semibold text-white shadow-xl">
        Claro. Hace un día perfecto para leer.
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}
