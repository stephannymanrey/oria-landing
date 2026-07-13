import Reveal from './Reveal'

export default function Problem() {
  return (
    <section className="bg-neutral px-6 py-20 text-center sm:py-28">
      <Reveal className="mx-auto max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary/60">
          El problema
        </span>
        <h2 className="mt-3 text-2xl font-bold text-secondary sm:text-3xl">
          Cada envío es una promesa que le hiciste a tu cliente.
        </h2>
        <p className="mt-6 text-lg text-secondary/70">
          Cotizar un envío toma tiempo que no tienes. Rastrear un paquete se
          convierte en una tarea diaria más. Y cuando surge una incidencia,
          resolverla puede tomarte horas enteras — horas que deberías estar
          usando para vender, no para perseguir una guía extraviada.
        </p>
      </Reveal>
    </section>
  )
}
