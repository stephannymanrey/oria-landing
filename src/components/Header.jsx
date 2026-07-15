export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral/10 bg-primary/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src="/logo-oria.png" alt="ORIA Envíos" className="h-8 w-auto" />
        </a>
        <a
          href="#cta-final"
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-on-accent transition hover:brightness-110"
        >
          Comienza hoy
        </a>
      </div>
    </header>
  )
}
