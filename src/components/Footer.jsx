import CompassIcon from './CompassIcon'

export default function Footer() {
  return (
    <footer className="bg-secondary px-6 py-10 text-center">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <CompassIcon className="h-5 w-5 text-accent" />
          <span className="font-heading text-base font-extrabold tracking-wide text-neutral">
            ORIA
          </span>
        </div>
        <p className="text-sm text-neutral/60">
          Impulsamos negocios. Simplificamos la logística.
        </p>
        <p className="mt-4 text-xs text-neutral/35">
          © {new Date().getFullYear()} ORIA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
