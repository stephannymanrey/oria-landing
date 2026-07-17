export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral/10 bg-primary/95 px-6 py-2.5 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#top" className="flex items-center">
          <img
            src="/logo-oria-full-light.png"
            alt="ORIA Envíos"
            className="h-14 w-auto"
          />
        </a>
        <a
          href="#cta-final"
          className="btn-shimmer bg-gradient-accent rounded-full px-5 py-2 text-sm font-semibold text-on-accent"
        >
          Comienza hoy
        </a>
      </div>
    </header>
  )
}
