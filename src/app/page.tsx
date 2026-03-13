import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Screenshots from '@/components/Screenshots'
import Contact from '@/components/Contact'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Screenshots />
      <Contact />
      <CalendlyEmbed />
      <Footer />
    </main>
  )
}
