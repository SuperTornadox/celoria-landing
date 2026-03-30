'use client'

import { useTranslations } from 'next-intl'

export default function Problem() {
  const t = useTranslations('Problem')

  const cards = [
    { title: t('card1Title'), desc: t('card1Desc'), color: '#c05040' },
    { title: t('card2Title'), desc: t('card2Desc'), color: '#c05040' },
    { title: t('card3Title'), desc: t('card3Desc'), color: '#c05040' },
  ]

  return (
    <section id="problem" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)]">{t('title')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 hover-lift">
              <h3 className="text-lg font-semibold mb-4" style={{ color: card.color }}>{card.title}</h3>
              <p className="text-sm text-[var(--ink-700)] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[var(--accent-300)] bg-[rgba(215,180,122,0.06)] p-6 md:p-8 max-w-5xl mx-auto">
          <p className="text-[var(--ink-900)] leading-relaxed">{t('callout')}</p>
        </div>
      </div>
    </section>
  )
}
