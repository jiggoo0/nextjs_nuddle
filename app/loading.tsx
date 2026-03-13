export default function RootLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFDF9]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-[#b22222]"></div>
        <div className="flex flex-col items-center animate-pulse">
          <p className="text-xl font-black tracking-tighter text-[#b22222]">ช.สหชัย เกี๊ยวปูหมูแดง</p>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A3728]/50">
            Managed by AEMDEVWEB
          </p>
        </div>
      </div>
    </div>
  );
}
