'use client'

import { useEffect, useState } from 'react'

const screenshots = [
  {
    src: '/images/screenshots/02-appointment-board.png',
    title: 'Appointment Board',
    description: 'Visual scheduling with drag-and-drop at a glance',
    kicker: 'Scheduling',
    highlights: [
      'Board view for instant workload balance',
      'Conflict-aware slot management',
      'Fast rebook and reschedule flow',
    ],
  },
  {
    src: '/images/screenshots/03-guest-management.png',
    title: 'Customer Management',
    description: 'Complete customer profiles with one-click history lookup',
    kicker: 'CRM',
    highlights: [
      'Client timeline in one profile',
      'Preferences and notes for better retention',
      'Quick history lookup during checkout',
    ],
  },
  {
    src: '/images/screenshots/04-employee-management.png',
    title: 'Employee Center',
    description: 'Unified management of staff info, scheduling, and performance',
    kicker: 'Team Ops',
    highlights: [
      'Role-ready roster and shift visibility',
      'Performance snapshot by period',
      'Cleaner handoff between manager and staff',
    ],
  },
]

const AUTOPLAY_MS = 4500
const TICK_MS = 100

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [imageVisible, setImageVisible] = useState(true)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)
  const activeItem = screenshots[active]

  useEffect(() => {
    if (isPaused) return

    const step = 100 / (AUTOPLAY_MS / TICK_MS)
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step
        if (next >= 100) {
          setActive((current) => (current + 1) % screenshots.length)
          return 0
        }
        return next
      })
    }, TICK_MS)

    return () => clearInterval(timer)
  }, [isPaused])

  const triggerHaptic = () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(18)
    }
  }

  const selectSlide = (index: number, withHaptic = false) => {
    setActive(index)
    setProgress(0)
    if (withHaptic) {
      triggerHaptic()
    }
  }

  useEffect(() => {
    setImageVisible(false)
    const frame = requestAnimationFrame(() => {
      setImageVisible(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [active])

  const goNext = () => {
    selectSlide((active + 1) % screenshots.length, true)
  }

  const goPrev = () => {
    selectSlide((active - 1 + screenshots.length) % screenshots.length, true)
  }

  const onTouchStart = (x: number) => {
    setTouchStartX(x)
    setTouchEndX(null)
  }

  const onTouchMove = (x: number) => {
    setTouchEndX(x)
  }

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return
    const deltaX = touchStartX - touchEndX
    const threshold = 40

    if (deltaX > threshold) {
      goNext()
    } else if (deltaX < -threshold) {
      goPrev()
    }
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goNext()
      }
      if (event.key === 'ArrowLeft') {
        goPrev()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active])

  return (
    <section id="screenshots" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--ink-500)] mb-3">Interface</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-4">
            Product Showcase
          </h2>
          <p className="text-lg text-[var(--ink-700)] max-w-2xl mx-auto">
            Clean and intuitive interface design that makes complex management simple and efficient
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div
              className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[#f1e5d4] shadow-[0_28px_65px_-42px_rgba(31,27,22,0.92)]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative flex items-center gap-2 px-5 py-3 border-b border-[var(--line)] bg-[rgba(255,253,249,0.72)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d28f80]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#e0b46c]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#86b492]"></span>
                <span className="ml-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-500)]">
                  {activeItem.kicker}
                </span>
                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="ml-auto rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--ink-700)] bg-[var(--surface)] hover:bg-[var(--surface-soft)]"
                >
                  {isPaused ? 'Play' : 'Pause'}
                </button>
                <div className="absolute left-0 bottom-0 h-[2px] w-full bg-[rgba(74,67,57,0.15)]">
                  <div
                    className="h-full bg-[var(--accent-500)] transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  key={activeItem.src}
                  src={activeItem.src}
                  alt={activeItem.title}
                  className={`h-full w-full object-cover object-top transition-all duration-500 ${
                    imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'
                  }`}
                  onTouchStart={(event) => onTouchStart(event.touches[0].clientX)}
                  onTouchMove={(event) => onTouchMove(event.touches[0].clientX)}
                  onTouchEnd={onTouchEnd}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
              <h3 className="text-2xl text-[var(--ink-900)] mb-2">{activeItem.title}</h3>
              <p className="text-[var(--ink-700)] mb-5">{activeItem.description}</p>
              <ul className="space-y-3">
                {activeItem.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[var(--ink-700)]">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent-500)]"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              {screenshots.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => selectSlide(index, true)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    active === index
                      ? 'border-[var(--accent-500)] bg-[var(--surface-soft)] shadow-[0_14px_24px_-18px_rgba(31,27,22,0.85)]'
                      : 'border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-soft)]'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-1">
                    {item.kicker}
                  </p>
                  <p className="text-[var(--ink-900)] font-semibold">{item.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-1">Design Focus</p>
            <p className="text-[var(--ink-900)]">Operational clarity in every screen</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-1">Speed</p>
            <p className="text-[var(--ink-900)]">Low-friction daily workflows for teams</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-1">Consistency</p>
            <p className="text-[var(--ink-900)]">Unified UI language across modules</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {screenshots.map((item, index) => (
            <button
              key={`${item.title}-chip`}
              type="button"
              onClick={() => selectSlide(index, true)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                active === index
                  ? 'border-[var(--accent-500)] text-[var(--ink-900)] bg-[var(--surface-soft)]'
                  : 'border-[var(--line)] text-[var(--ink-700)] bg-[var(--surface)] hover:bg-[var(--surface-soft)]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
