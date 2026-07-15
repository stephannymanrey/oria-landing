import { useEffect, useRef, useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const MESSAGE = '¿Necesitas ayuda con tu envío? Habla con un asesor.'
const FIRST_DELAY_MS = 3000
const AUTO_HIDE_MS = 7000
const REAPPEAR_SCROLL_PX = 1400
const MAX_APPEARANCES = 3

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false)
  const dismissed = useRef(false)
  const appearances = useRef(0)
  const lastShownScrollY = useRef(0)
  const hideTimer = useRef(null)

  useEffect(() => {
    const show = () => {
      if (dismissed.current || appearances.current >= MAX_APPEARANCES) return
      appearances.current += 1
      lastShownScrollY.current = window.scrollY
      setVisible(true)
      clearTimeout(hideTimer.current)
      hideTimer.current = setTimeout(() => setVisible(false), AUTO_HIDE_MS)
    }

    const initialTimer = setTimeout(show, FIRST_DELAY_MS)

    const onScroll = () => {
      if (dismissed.current) return
      if (Math.abs(window.scrollY - lastShownScrollY.current) > REAPPEAR_SCROLL_PX) {
        show()
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearTimeout(initialTimer)
      clearTimeout(hideTimer.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const dismiss = () => {
    dismissed.current = true
    setVisible(false)
    clearTimeout(hideTimer.current)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div
        role="status"
        aria-live="polite"
        className={`relative max-w-[230px] rounded-2xl rounded-br-sm border border-secondary/10 bg-neutral px-4 py-3 text-sm text-secondary shadow-xl transition-all duration-300 ease-out ${
          visible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Cerrar mensaje"
          className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs leading-none text-neutral"
        >
          ×
        </button>
        {MESSAGE}
      </div>

      <WhatsAppButton />
    </div>
  )
}
