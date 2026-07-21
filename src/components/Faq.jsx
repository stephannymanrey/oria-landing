import Reveal from './Reveal'

const FAQS = [
  {
    q: '¿Necesito saber de logística para usar ORIA?',
    a: 'No. ORIA está diseñado para que cualquier persona pueda usarlo sin tener experiencia en logística — si algo requiere un manual para entenderse, para nosotros eso ya es una falla de diseño.',
  },
  {
    q: '¿ORIA reemplaza a mi paquetería actual?',
    a: 'No. No sustituimos, potenciamos. Te ayudamos a elegir la mejor opción, dar seguimiento y resolver incidencias — el envío sigue siendo tuyo, nosotros somos tu copiloto.',
  },
  {
    q: '¿Cuánto cuesta cotizar un envío?',
    a: 'Cotizar es completamente gratis y sin compromiso. No competimos por ser los más baratos; competimos por ser los más confiables.',
  },
  {
    q: '¿Qué pasa si algo sale mal con mi envío?',
    a: 'Nunca te dejamos solo. Actuamos con rapidez y transparencia ante cualquier incidencia y te mantenemos informado durante todo el proceso. No prometemos que nunca habrá problemas — prometemos que siempre habrá alguien resolviendo contigo.',
  },
  {
    q: '¿Cómo empiezo a usar ORIA?',
    a: 'Cotiza tu primer envío aquí mismo, sin registrarte, o entra directamente a la plataforma ORIA para gestionar todos tus envíos en un solo lugar.',
  },
]

function FaqItem({ q, a }) {
  return (
    <details className="card-glow-hover group rounded-xl border border-secondary/10 bg-neutral p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-secondary">
        {q}
        <span className="shrink-0 text-xl leading-none text-accent transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm text-secondary/70">{a}</p>
    </details>
  )
}

export default function Faq() {
  return (
    <section className="bg-secondary/[0.03] px-6 py-20 text-center sm:py-28">
      <Reveal className="mx-auto max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary/60">
          Preguntas frecuentes
        </span>
        <h2 className="mt-3 text-2xl font-bold text-secondary sm:text-3xl">
          ¿Tienes dudas?
        </h2>

        <div className="mt-10 space-y-4 text-left">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
