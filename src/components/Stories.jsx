import Reveal from './Reveal'
import { PartnerIcon } from './icons'

export default function Stories() {
  return (
    <section className="bg-primary/5 px-6 py-20 text-center sm:py-28">
      <Reveal className="mx-auto max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary/60">
          Historias
        </span>
        <h2 className="mt-3 text-2xl font-bold text-secondary sm:text-3xl">
          Casos reales, próximamente
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary/60">
          Próximamente: casos reales de PyMEs que crecen con ORIA.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-secondary/20 px-5 py-10"
            >
              <PartnerIcon className="h-6 w-6 text-secondary/25" />
              <span className="text-xs font-medium uppercase tracking-wide text-secondary/35">
                Próximamente
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
