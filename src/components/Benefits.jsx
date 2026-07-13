import { TimeIcon, CareIcon, ResolveIcon, DataIcon, PartnerIcon } from './icons'
import Reveal from './Reveal'

const BENEFITS = [
  { text: 'Más tiempo para vender, menos tiempo operando logística.', Icon: TimeIcon },
  { text: 'Tranquilidad de saber que alguien está cuidando cada envío.', Icon: CareIcon },
  { text: 'Menos incidencias sin resolver, más clientes satisfechos.', Icon: ResolveIcon },
  {
    text: 'Decisiones más inteligentes, respaldadas por datos y no solo por tarifa.',
    Icon: DataIcon,
  },
  { text: 'Un aliado que responde, no un sistema que te deja solo.', Icon: PartnerIcon },
]

function BenefitCard({ text, Icon }) {
  return (
    <li className="flex items-start gap-4 rounded-xl border border-secondary/10 bg-neutral p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition hover:border-primary/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <span className="text-base text-secondary/80">{text}</span>
    </li>
  )
}

export default function Benefits() {
  const [topRow, bottomRow] = [BENEFITS.slice(0, 3), BENEFITS.slice(3)]

  return (
    <section className="bg-secondary/[0.03] px-6 py-20 text-center sm:py-28">
      <Reveal className="mx-auto max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary/60">
          Beneficios
        </span>
        <h2 className="mt-3 text-2xl font-bold text-secondary sm:text-3xl">
          Lo que ORIA le da a tu negocio
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {topRow.map((benefit) => (
            <BenefitCard key={benefit.text} {...benefit} />
          ))}
        </ul>
        <ul className="mt-4 grid grid-cols-1 gap-4 text-left sm:mx-auto sm:grid-cols-2 sm:w-2/3">
          {bottomRow.map((benefit) => (
            <BenefitCard key={benefit.text} {...benefit} />
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
