import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import ManifestoQuote from '../components/ManifestoQuote'
import Benefits from '../components/Benefits'
import ServicePromise from '../components/ServicePromise'
import FinalCta from '../components/FinalCta'

export default function Landing() {
  return (
    <main id="main-content">
      <Hero />
      <Problem />
      <Solution />
      <ManifestoQuote />
      <Benefits />
      <ServicePromise />
      <FinalCta />
    </main>
  )
}
