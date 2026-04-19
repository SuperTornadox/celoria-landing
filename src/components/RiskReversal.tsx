'use client'

import { useTranslations } from 'next-intl'

export default function RiskReversal() {
  const t = useTranslations('RiskReversal')

  const items = [
    { title: t('item1Title'), desc: t('item1Desc') },
    { title: t('item2Title'), desc: t('item2Desc') },
    { title: t('item3Title'), desc: t('item3Desc') },
    { title: t('item4Title'), desc: t('item4Desc') },
  ]

  return (
    <section className="py-12 border-y border-[var(--line)] bg-[var(--surface-soft)]">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-6 text-center">
          {t('kicker')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--accent-500)] text-white flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--ink-900)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--ink-700)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
