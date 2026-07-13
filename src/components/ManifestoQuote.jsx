import Reveal from './Reveal'

export default function ManifestoQuote() {
  return (
    <section className="bg-primary px-6 py-20 text-center sm:py-24">
      <Reveal className="mx-auto max-w-2xl">
        <p className="font-heading text-2xl font-semibold leading-snug text-neutral sm:text-3xl">
          "No vendemos guías. No movemos cajas.
          <br className="hidden sm:block" /> Ayudamos a cumplir promesas."
        </p>
        <p className="mt-5 text-sm uppercase tracking-wider text-neutral/50">
          Manifiesto ORIA
        </p>
      </Reveal>
    </section>
  )
}
