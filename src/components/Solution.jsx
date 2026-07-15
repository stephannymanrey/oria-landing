import { PathIcon, RadarIcon, RerouteIcon, GrowthIcon } from './icons'
import Reveal from './Reveal'

const MOMENTS = [
  {
    label: 'Antes',
    description: 'Asesoramos y simplificamos la decisión de cada envío.',
    Icon: PathIcon,
  },
  {
    label: 'Durante',
    description: 'Damos visibilidad y seguimiento a cada paquete en ruta.',
    Icon: RadarIcon,
  },
  {
    label: 'Incidencia',
    description: 'Actuamos con rapidez y transparencia si algo sale mal.',
    Icon: RerouteIcon,
  },
  {
    label: 'Después',
    description: 'Analizamos datos y proponemos mejoras para tu operación.',
    Icon: GrowthIcon,
  },
]

export default function Solution() {
  return (
    <section className="bg-secondary px-6 py-20 text-center sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent/70">
          La solución
        </span>
        <h2 className="mt-3 text-2xl font-bold text-neutral sm:text-3xl">
          El Método Copiloto™
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral/70">
          Te acompañamos en los cuatro momentos de cada envío, desde el{' '}
          <span className="text-accent">Centro de Control ORIA™</span>, con{' '}
          <span className="text-accent">Promise Care™</span> cuidando la
          promesa que le hiciste a tu cliente.
        </p>

        <div className="relative mt-14">
          <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-0.5 bg-accent/60 lg:block" />

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MOMENTS.map((moment) => (
              <div
                key={moment.label}
                className="card-glow-hover flex flex-col items-center rounded-xl border border-primary/40 bg-primary/60 px-5 pb-6 pt-8 text-center backdrop-blur-sm"
              >
                <span className="icon-glow flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <moment.Icon className="h-7 w-7 text-accent" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-neutral">
                  {moment.label}
                </h3>
                <p className="mt-2 text-sm text-neutral/70">
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
