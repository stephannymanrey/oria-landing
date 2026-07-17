import { TimeIcon, ResolveIcon, PathIcon, RadarIcon, GrowthIcon } from './icons'
import Reveal from './Reveal'
import { getWhatsAppUrl } from '../lib/whatsapp'

const PROMISES = [
  { text: 'Respondemos con rapidez.', Icon: TimeIcon },
  { text: 'Hablamos con transparencia.', Icon: ResolveIcon },
  { text: 'Coordinamos directamente con los transportistas.', Icon: PathIcon },
  { text: 'Te mantenemos siempre informado.', Icon: RadarIcon },
  { text: 'Buscamos soluciones antes que excusas.', Icon: GrowthIcon },
]

function PromiseCard({ text, Icon }) {
  return (
    <li className="card-glow-hover flex items-start gap-4 rounded-xl border border-secondary/10 bg-neutral p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-accent">
        <Icon className="h-4.5 w-4.5 text-on-accent" />
      </span>
      <span className="text-base text-secondary/80">{text}</span>
    </li>
  )
}

export default function ServicePromise() {
  const [topRow, bottomRow] = [PROMISES.slice(0, 3), PROMISES.slice(3)]

  return (
    <section className="bg-primary/5 px-6 py-20 text-center sm:py-28">
      <Reveal className="mx-auto max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary/60">
          Compromiso
        </span>
        <h2 className="mt-3 text-2xl font-bold text-secondary sm:text-3xl">
          Nuestra promesa de servicio
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {topRow.map((promise) => (
            <PromiseCard key={promise.text} {...promise} />
          ))}
        </ul>
        <ul className="mt-4 grid grid-cols-1 gap-4 text-left sm:mx-auto sm:grid-cols-2 sm:w-2/3">
          {bottomRow.map((promise) => (
            <PromiseCard key={promise.text} {...promise} />
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-xl text-lg font-medium text-secondary">
          No prometemos que nunca habrá incidencias. Prometemos que nunca
          dejaremos solo al cliente.
        </p>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent"
        >
          ¿Prefieres platicarlo? Habla con un asesor →
        </a>
      </Reveal>
    </section>
  )
}
