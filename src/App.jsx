import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div id="top">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Header />
      <Landing />
      <Footer />
      <ThemeToggle />
      <WhatsAppButton />
    </div>
  )
}

export default App
