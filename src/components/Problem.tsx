'use client'

import { useTranslations } from 'next-intl'

export default function Problem() {
  const t = useTranslations('Problem')

  return (
    <section id="problem" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)]">{t('title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 hover-lift">
            <h3 className="text-lg font-semibold text-[var(--ink-900)] mb-4">{t('card1Title')}</h3>
            <ul className="space-y-2 text-[var(--ink-700)] mb-4">
              <li className="flex gap-2"><span className="text-[var(--ink-500)]">•</span>{t('card1Item1')}</li>
              <li className="flex gap-2"><span className="text-[var(--ink-500)]">•</span>{t('card1Item2')}</li>
              <li className="flex gap-2"><span className="text-[var(--ink-500)]">•</span>{t('card1Item3')}</li>
            </ul>
            <p className="text-sm text-[var(--accent-600)]">→ {t('card1Conclusion')}</p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 hover-lift">
            <h3 className="text-lg font-semibold text-[var(--ink-900)] mb-4">{t('card2Title')}</h3>
            <ul className="space-y-2 text-[var(--ink-700)] mb-4">
              <li className="flex gap-2"><span className="text-[var(--ink-500)]">•</span>{t('card2Item1')}</li>
              <li className="flex gap-2"><span className="text-[var(--ink-500)]">•</span>{t('card2Item2')}</li>
              <li className="flex gap-2"><span className="text-[var(--ink-500)]">•</span>{t('card2Item3')}</li>
            </ul>
            <p className="text-sm text-[#e06050]">→ {t('card2Conclusion')}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--accent-300)] bg-[rgba(215,180,122,0.06)] p-6 md:p-8 max-w-4xl mx-auto">
          <p className="text-[var(--ink-900)] leading-relaxed">{t('callout')}</p>
        </div>
      </div>
    </section>
  )
}
