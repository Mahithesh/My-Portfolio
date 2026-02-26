export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,3,3,0)_20%,rgba(3,3,3,0.9)_80%)]" />
      <div className="absolute -top-32 right-10 h-64 w-64 animate-pulseSlow rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-44 w-44 animate-pulseSlow rounded-full bg-accent2/20 blur-3xl" />
    </div>
  );
}
