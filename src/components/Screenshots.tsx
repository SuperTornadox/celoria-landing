'use client'

import { useEffect, useState } from 'react'

const slides = [
  {
    title: 'Appointment Board',
    subtitle: 'Board view for instant workload balance',
    accent: 'bg-emerald-500',
  },
  {
    title: 'Customer Management',
    subtitle: 'Client timeline in one profile',
    accent: 'bg-sky-500',
  },
  {
    title: 'Checkout Flow',
    subtitle: 'POS-ready payments with clear settlement state',
    accent: 'bg-amber-500',
  },
]

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const activeSlide = slides[activeIndex]

  useEffect(() => {
    if (!isPlaying) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [isPlaying])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index + 1) % slides.length)
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index - 1 + slides.length) % slides.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section aria-label="Product screenshots" className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-pressed={activeIndex === index}
            className="rounded-md border px-3 py-2 text-sm"
            onClick={() => setActiveIndex(index)}
          >
            {slide.title}
          </button>
        ))}
        <button type="button" className="rounded-md border px-3 py-2 text-sm" onClick={() => setIsPlaying((value) => !value)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
        <div className={`h-2 ${activeSlide.accent}`} />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-slate-950">{activeSlide.title}</h2>
          <p className="mt-2 text-slate-600">{activeSlide.subtitle}</p>
        </div>
      </div>
    </section>
  )
}
