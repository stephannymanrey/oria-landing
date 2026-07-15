// Número del asesor comercial de ORIA. Nota: para wa.me los números
// mexicanos NO llevan el "1" que sí se usa para marcar desde el
// extranjero (+52 1 221 414 5086 -> 522214145086).
const WHATSAPP_NUMBER = '522214145086'
const WHATSAPP_MESSAGE = 'Hola, quiero saber más sobre ORIA y cómo puede ayudar a mi negocio.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chatea con ORIA por WhatsApp"
      className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:brightness-105"
    >
      <span className="animate-soft-pulse absolute inset-0 -z-10 rounded-full bg-[#25D366]" />

      {/* Ícono de teléfono (Material Design, glifo verificado) */}
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="white" aria-hidden="true">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    </a>
  )
}
