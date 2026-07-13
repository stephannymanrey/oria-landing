import CompassIcon from './CompassIcon'
import { RadarIcon, ResolveIcon, CareIcon, GrowthIcon, PartnerIcon } from './icons'

// Ilustración del Centro de Control ORIA™ — mockup estático para la landing,
// no una app funcional. Módulos tomados de la Biblia de Marca (Cap. 51):
// Centro de Control, Radar ORIA™, Promise Care™, Insights™.
const NAV = [
  { Icon: CompassIcon, active: true, label: 'Centro de Control' },
  { Icon: RadarIcon, label: 'Radar ORIA™' },
  { Icon: CareIcon, label: 'Promise Care™' },
  { Icon: GrowthIcon, label: 'Insights™' },
]

const STATS = [
  { label: 'Promesas cumplidas', Icon: ResolveIcon },
  { label: 'Índice de tranquilidad', Icon: PartnerIcon },
  { label: 'Envíos activos', Icon: RadarIcon },
]

const SHIPMENTS = [
  { route: 'CDMX → Guadalajara', stage: 1, status: 'En tránsito' },
  { route: 'Monterrey → CDMX', stage: 2, status: 'En hub' },
  { route: 'Querétaro → Puebla', stage: 3, status: 'Entregado' },
]

export default function PlatformMockup({ className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-neutral/15 bg-secondary/50 text-left shadow-2xl backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-neutral/10 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral/20" />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-neutral/60">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          En vivo
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center gap-3 border-r border-neutral/10 px-3 py-5">
          {NAV.map(({ Icon, active, label }) => (
            <span
              key={label}
              title={label}
              className={`rounded-lg p-2 ${active ? 'bg-accent/15 text-accent' : 'text-neutral/35'}`}
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>

        <div className="min-w-0 flex-1 p-5">
          <p className="text-sm font-semibold text-neutral">
            Centro de Control ORIA™
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {STATS.map(({ label, Icon }) => (
              <div
                key={label}
                className="rounded-lg border border-neutral/10 p-2.5 text-center"
              >
                <Icon className="mx-auto h-4 w-4 text-accent" />
                <p className="mt-1.5 text-[9px] leading-tight text-neutral/55">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-wide text-neutral/40">
            Envíos recientes
          </p>
          <div className="mt-2 space-y-2">
            {SHIPMENTS.map((s) => (
              <div
                key={s.route}
                className="flex items-center justify-between gap-2 rounded-lg border border-neutral/10 px-3 py-2"
              >
                <div className="flex shrink-0 items-center gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full ${
                        i <= s.stage ? 'bg-accent' : 'bg-neutral/20'
                      }`}
                    />
                  ))}
                </div>
                <span className="truncate text-[11px] text-neutral/70">
                  {s.route}
                </span>
                <span className="shrink-0 text-[10px] text-neutral/50">
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
