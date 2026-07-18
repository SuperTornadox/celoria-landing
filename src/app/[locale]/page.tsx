import { use } from 'react'
import { setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RiskReversal from '@/components/RiskReversal'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import SalonFeatures from '@/components/SalonFeatures'
import AIVision from '@/components/AIVision'
import Competitive from '@/components/Competitive'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

type Props = {
  params: Promise<{ locale: string }>
}

export default function Home({ params }: Props) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <RiskReversal />
      <Solution />
      <Problem />
      <SalonFeatures />
      <AIVision />
      <Competitive />
      <Contact />
      <Footer />
    </main>
  )
}
