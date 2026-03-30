'use client'

import { useTranslations } from 'next-intl'

export default function WhyNow() {
  const t = useTranslations('WhyNow')

  return (
    <section id="why-now" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)]">{t('title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 hover-lift">
            <h3 className="text-lg font-semibold text-[var(--ink-900)] mb-3">{t('card1Title')}</h3>
            <p className="text-[var(--ink-700)] leading-relaxed">{t('card1Desc')}</p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 hover-lift">
            <h3 className="text-lg font-semibold text-[var(--ink-900)] mb-3">{t('card2Title')}</h3>
            <p className="text-[var(--ink-700)] leading-relaxed">{t('card2Desc')}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--accent-300)] bg-[rgba(215,180,122,0.06)] p-6 md:p-8 max-w-4xl mx-auto">
          <p className="text-[var(--ink-900)]">
            <strong className="text-[var(--accent-600)]">{t('calloutLabel')}</strong>{' '}
            {t('calloutText')}
          </p>
        </div>
      </div>
    </section>
  )
}
