export default function CotizadorEmbed() {
  return (
    <section className="bg-neutral px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary/60">
            Cotizador
          </span>
          <h2 className="mt-2 text-2xl font-bold text-secondary sm:text-3xl">
            Cotiza tu envío ahora mismo
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-secondary/10 bg-primary shadow-xl">
          <div className="flex items-center gap-1.5 border-b border-neutral/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral/20" />
          </div>
          <iframe
            src="https://panel.oriaenvios.com/#/cotizador"
            title="Cotizador ORIA"
            className="h-[600px] w-full bg-neutral sm:h-[800px]"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
