import { useEffect, useState } from 'react'

const THEMES = {
  a: 'Ruta A · Tecnología premium',
  b: 'Ruta B · Crecimiento humano',
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState('a')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'a' ? 'b' : 'a'))}
      className="fixed bottom-4 right-4 z-50 rounded-full border border-secondary/20 bg-neutral px-4 py-2 text-xs font-medium text-secondary shadow-md transition hover:border-accent hover:text-accent"
    >
      {THEMES[theme]}
    </button>
  )
}
