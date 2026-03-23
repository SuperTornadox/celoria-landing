import { use } from 'react'
import { setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Insight from '@/components/Insight'
import Solution from '@/components/Solution'
import WhyNow from '@/components/WhyNow'
import AIVision from '@/components/AIVision'
import Traction from '@/components/Traction'
import Competitive from '@/components/Competitive'
import BusinessModel from '@/components/BusinessModel'
import Moats from '@/components/Moats'
import Team from '@/components/Team'
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
      <Problem />
      <Insight />
      <Solution />
      <WhyNow />
      <AIVision />
      <Traction />
      <Competitive />
      <BusinessModel />
      <Moats />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
