'use client'

import { useTranslations } from 'next-intl'

export default function Traction() {
  const t = useTranslations('Traction')

  const stats = [
    { value: t('locationsValue'), label: t('locationsLabel'), context: t('locationsContext') },
    { value: t('appointmentsValue'), label: t('appointmentsLabel'), context: t('appointmentsContext') },
    { value: t('staffValue'), label: t('staffLabel'), context: t('staffContext') },
  ]

  const milestones = [
    { date: '2024 Q3', label: t('timeline2024Q3'), active: false },
    { date: '2025 Q2', label: t('timeline2025Q2'), active: false },
    { date: '2026 Jan', label: t('timeline2026Jan'), active: false },
    { date: '2026 Mar', label: t('timeline2026Mar'), active: true },
  ]

  return (
    <section id="traction" className="py-20">
      <div className="section-shell">
        <div className="rounded-3xl border border-[rgba(168,134,80,0.15)] bg-[#2D2D2D] px-6 py-14 md:px-12">
          <div className="text-center mb-14 reveal-up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d9c4a1] mb-3">{t('kicker')}</p>
            <h2 className="text-3xl md:text-5xl text-[#fff8ec] mb-4">{t('title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl border border-[rgba(255,235,200,0.2)] bg-[rgba(255,248,236,0.08)] backdrop-blur-sm hover-lift">
                <div className="text-4xl md:text-5xl font-semibold text-[#fff8ec] mb-1">{stat.value}</div>
                <div className="text-[#e9d4b3]">{stat.label}</div>
                <div className="text-xs text-[#d9c4a1] mt-1">{stat.context}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[rgba(255,235,200,0.15)] bg-[rgba(255,248,236,0.06)] p-6 md:p-8 mb-8">
            <p className="text-[#fff8ec] font-medium max-w-3xl mx-auto text-center">{t('callout')}</p>
          </div>

          <div className="rounded-2xl border border-[rgba(255,235,200,0.15)] bg-[rgba(255,248,236,0.06)] p-6 md:p-8 mb-12">
            <blockquote className="text-lg md:text-xl text-[#fff8ec] italic max-w-3xl mx-auto text-center">
              &ldquo;{t('quote')}&rdquo;
            </blockquote>
            <p className="mt-4 text-[#d9c4a1] text-center">{t('quoteAttribution')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-0">
            {milestones.map((ms, i) => (
              <div key={ms.date} className="flex items-center">
                <div className={`flex flex-col items-center px-4 py-2 rounded-xl ${
                  ms.active
                    ? 'bg-[var(--accent-500)] text-white'
                    : 'bg-[rgba(255,248,236,0.08)] text-[#e9d4b3]'
                }`}>
                  <span className="text-xs font-semibold tracking-wider uppercase">{ms.date}</span>
                  <span className="text-xs mt-0.5 text-center">{ms.label}</span>
                </div>
                {i < milestones.length - 1 && (
                  <div className="hidden md:block w-8 h-px bg-[rgba(255,235,200,0.3)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
