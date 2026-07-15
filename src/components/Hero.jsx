import AbstractRoute from './AbstractRoute'
import PlatformMockup from './PlatformMockup'

export default function Hero() {
  return (
    <section className="bg-hero-radial relative overflow-hidden px-6 py-20 sm:py-28">
      <AbstractRoute className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Método Copiloto™
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral sm:text-5xl">
            Vender en todo México no debería ser complicado.
          </h1>
          <p className="mt-6 text-lg text-neutral/80 sm:text-xl">
            ORIA simplifica tu logística para que tú puedas concentrarte en
            hacer crecer tu negocio.
          </p>
          <a
            href="#cta-final"
            className="btn-shimmer bg-gradient-accent mt-10 inline-block rounded-full px-8 py-4 text-base font-semibold text-on-accent"
          >
            Comienza hoy
          </a>
        </div>

        <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
          <PlatformMockup />
        </div>
      </div>
    </section>
  )
}
