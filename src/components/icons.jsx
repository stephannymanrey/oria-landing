// Sistema de íconos lineal y abstracto (Biblia de Marca, Cap. 21/25/27/28):
// sin camiones, cajas, flechas literales ni paquetes. Construidos a partir del
// mismo lenguaje visual que CompassIcon (círculos, líneas, puntos de conexión).

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

// Antes — simplificamos la decisión: varias opciones convergen en un camino claro.
export function PathIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M7 7 L17 12 M7 17 L17 12" />
      <circle cx="6" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="6" cy="17" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Durante — visibilidad y seguimiento en tiempo real.
export function RadarIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.2" opacity="0.35" />
      <circle cx="12" cy="12" r="5" opacity="0.6" />
      <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Incidencia — el camino se desvía un momento y vuelve a su curso.
export function RerouteIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 14 H8.5 C10 14 10 8 12 8 C14 8 14 14 15.5 14 H20" />
      <circle cx="4" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="14" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Después — datos que se convierten en mejoras (tendencia hacia arriba).
export function GrowthIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 17 L9.5 13 L14 14.5 L20 7" />
      <circle cx="4" cy="17" r="1.2" fill="currentColor" stroke="none" opacity="0.5" />
      <circle cx="9.5" cy="13" r="1.2" fill="currentColor" stroke="none" opacity="0.75" />
      <circle cx="14" cy="14.5" r="1.2" fill="currentColor" stroke="none" opacity="0.9" />
      <circle cx="20" cy="7" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Beneficio — tiempo recuperado.
export function TimeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5 V12 L15.2 14" />
    </svg>
  )
}

// Beneficio — acompañamiento y cuidado.
export function CareIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 9.5 C4.5 5.9 7.8 3.5 12 3.5 C16.2 3.5 19.5 5.9 19.5 9.5" />
      <path d="M4.5 14.5 C4.5 18.1 7.8 20.5 12 20.5 C16.2 20.5 19.5 18.1 19.5 14.5" />
      <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Beneficio — incidencias resueltas.
export function ResolveIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" opacity="0.35" />
      <path d="M8 12.3 L10.8 15 L16.2 9" />
    </svg>
  )
}

// Beneficio — decisiones respaldadas por datos (red de puntos hacia un centro).
export function DataIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5.5 V11.5 M5.5 16 L11 12.7 M18.5 16 L13 12.7" opacity="0.7" />
      <circle cx="12" cy="5.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="5.5" cy="16" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="16" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12.5" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Beneficio — un aliado, no un sistema que te deja solo (dos círculos conectados).
export function PartnerIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="12" r="6" opacity="0.85" />
      <circle cx="15" cy="12" r="6" opacity="0.85" />
    </svg>
  )
}
