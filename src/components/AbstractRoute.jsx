// Motivo decorativo del Hero: líneas que simbolizan rutas y puntos de conexión
// (Biblia de Marca, Cap. 28). Deliberadamente sin silueta de país ni mapa
// literal (Cap. 25 prohíbe "mapas" como símbolo).
const ROUTE = [
  { x: 70, y: 380 },
  { x: 190, y: 300 },
  { x: 280, y: 340 },
  { x: 410, y: 190 },
  { x: 520, y: 150 },
]

const ROUTE_PATH = ROUTE.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ')

const SCATTER = [
  { x: 340, y: 80, r: 3 },
  { x: 150, y: 130, r: 2.4 },
  { x: 480, y: 400, r: 2.8 },
  { x: 90, y: 190, r: 2.2 },
  { x: 560, y: 320, r: 3.2 },
  { x: 250, y: 430, r: 2.4 },
]

export default function AbstractRoute({ className = '' }) {
  return (
    <svg
      viewBox="0 0 600 500"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {SCATTER.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} className="fill-neutral/20" />
      ))}

      <path
        d={ROUTE_PATH}
        className="animate-route-flow stroke-accent/70"
        strokeWidth="2.5"
        strokeDasharray="2 14"
        strokeLinecap="round"
      />
      {ROUTE.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === ROUTE.length - 1 ? 6 : 4}
          className="fill-accent"
        />
      ))}
    </svg>
  )
}
