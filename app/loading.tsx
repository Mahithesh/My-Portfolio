export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <p className="mt-5 text-sm tracking-[0.24em] text-white/70">LOADING EXPERIENCE</p>
      </div>
    </main>
  );
}
