import Reveal from './Reveal'

// TODO: reemplazar con el dominio de la plataforma anterior de De Volada App
// en cuanto el cliente lo comparta.
const PREVIOUS_PLATFORM_URL = '#'

export default function FinalCta() {
  return (
    <section id="cta-final" className="bg-hero-radial px-6 py-24 text-center sm:py-32">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-neutral sm:text-4xl">
          Tu logística ya no tiene que ser un obstáculo para crecer.
        </h2>
        <a
          href={PREVIOUS_PLATFORM_URL}
          className="btn-shimmer bg-gradient-accent mt-10 inline-block rounded-full px-8 py-4 text-base font-semibold text-on-accent"
        >
          Comienza hoy
        </a>
      </Reveal>
    </section>
  )
}
