export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-10 text-center">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3">
        <img src="/logo-oria.png" alt="ORIA Envíos" className="h-7 w-auto" />
        <p className="text-sm text-neutral/60">
          Conectamos oportunidades, entregamos crecimiento.
        </p>
        <p className="mt-4 text-xs text-neutral/35">
          © {new Date().getFullYear()} ORIA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
