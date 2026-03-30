'use client'

import { useTranslations } from 'next-intl'

export default function BusinessModel() {
  const t = useTranslations('BusinessModel')

  const tiers = [
    { label: t('tier1Label'), title: t('tier1Title'), desc: t('tier1Desc'), color: 'var(--accent-500)' },
    { label: t('tier2Label'), title: t('tier2Title'), desc: t('tier2Desc'), color: '#8070a0' },
    { label: t('tier3Label'), title: t('tier3Title'), desc: t('tier3Desc'), color: '#d08040' },
  ]

  return (
    <section id="business-model" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)]">{t('title')}</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          {tiers.map((tier) => (
            <div key={tier.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 hover-lift" style={{ borderLeftWidth: 3, borderLeftColor: tier.color }}>
              <p className="text-xs uppercase tracking-wider text-[var(--ink-500)] mb-1">{tier.label}</p>
              <h3 className="text-lg font-bold text-[var(--ink-900)]">{tier.title}</h3>
              <p className="text-[var(--ink-700)]">{tier.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-4">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 text-center">
            <p className="text-xs text-[var(--ink-500)]">{t('saasLabel')}</p>
            <p className="text-2xl font-bold text-[var(--ink-900)]">{t('saasValue')}</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 text-center">
            <p className="text-xs text-[var(--ink-500)]">{t('paymentLabel')}</p>
            <p className="text-2xl font-bold text-[var(--ink-900)]">{t('paymentValue')}</p>
          </div>
          <div className="rounded-xl border border-[var(--accent-300)] bg-[rgba(215,180,122,0.06)] p-4 text-center">
            <p className="text-xs text-[var(--ink-500)]">{t('grossRevenueLabel')}</p>
            <p className="text-2xl font-bold text-[var(--accent-600)]">{t('grossRevenueValue')}</p>
          </div>
          <div className="rounded-xl border border-[var(--accent-300)] bg-[rgba(215,180,122,0.06)] p-4 text-center">
            <p className="text-xs text-[var(--ink-500)]">{t('grossMarginLabel')}</p>
            <p className="text-2xl font-bold text-[var(--accent-600)]">{t('grossMarginValue')}</p>
          </div>
        </div>

        <p className="text-xs text-[var(--ink-500)] text-center max-w-3xl mx-auto">{t('footnote')}</p>
      </div>
    </section>
  )
}
