// TODO: reemplazar con el número de WhatsApp del asesor comercial de ORIA,
// en formato internacional sin "+" ni espacios (ej. "5215512345678").
// Mientras esté vacío, el botón queda inactivo (href="#").
const WHATSAPP_NUMBER = ''
const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : '#'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target={WHATSAPP_NUMBER ? '_blank' : undefined}
      rel={WHATSAPP_NUMBER ? 'noreferrer' : undefined}
      aria-label="Chatea con ORIA por WhatsApp"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:brightness-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <path
          d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.9c1.9 1 4.1 1.6 6.3 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3z"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
        />
        <path
          d="M11.5 10.5c.3-.6.6-.6.9-.6h.7c.2 0 .5 0 .7.5.3.6 1 2.1 1.1 2.3.1.2.2.4 0 .7-.1.3-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.9.4.2.6.2.8-.1.2-.3.9-1 1.1-1.4.2-.4.5-.3.8-.2.3.1 2.1 1 2.5 1.2.4.2.6.3.7.5.1.2.1 1.1-.3 2.1-.4 1-2.2 1.9-3 1.9-.8 0-1.7 0-5.5-2.3-4.4-2.7-6.9-6.9-7.1-7.2-.2-.3-1.7-2.2-1.7-4.2 0-2 1-3 1.4-3.4z"
          fill="white"
        />
      </svg>
    </a>
  )
}
