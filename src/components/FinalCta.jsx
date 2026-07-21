import Reveal from './Reveal'
import { PLATFORM_URL } from '../lib/platform'

export default function FinalCta() {
  return (
    <section id="cta-final" className="bg-hero-radial px-6 py-24 text-center sm:py-32">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-neutral sm:text-4xl">
          Tu logística ya no tiene que ser un obstáculo para crecer.
        </h2>
        <p className="mt-4 text-neutral/70">
          Cuéntanos cómo vendes hoy y te decimos cómo simplificarlo.
        </p>
        <a
          href={PLATFORM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-shimmer bg-gradient-accent mt-10 inline-block rounded-full px-8 py-4 text-base font-semibold text-on-accent"
        >
          Comienza hoy
        </a>
        <p className="mt-3 text-xs text-neutral/50">
          Te llevamos a la plataforma ORIA para comenzar.
        </p>
      </Reveal>
    </section>
  )
}
