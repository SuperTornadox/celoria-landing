'use client'

import { useTranslations } from 'next-intl'

export default function Solution() {
  const t = useTranslations('Solution')

  return (
    <section id="solution" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--ink-700)] max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Two-Layer Product */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Staff-Facing: Digital Store Manager */}
          <div className="rounded-2xl border border-[rgba(80,160,100,0.3)] bg-[rgba(80,160,100,0.04)] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#50a064] mb-2">{t('staffLabel')}</p>
            <h3 className="text-2xl font-bold text-[var(--ink-900)] mb-3">{t('staffTitle')}</h3>
            <p className="text-sm text-[var(--ink-700)] mb-5">{t('staffDesc')}</p>
            <div className="space-y-3 mb-5">
              <div className="flex gap-2 text-sm text-[var(--ink-700)]">
                <span className="text-[#50a064] shrink-0">▸</span>
                <span>{t('staffItem1')}</span>
              </div>
              <div className="flex gap-2 text-sm text-[var(--ink-700)]">
                <span className="text-[#50a064] shrink-0">▸</span>
                <span>{t('staffItem2')}</span>
              </div>
              <div className="flex gap-2 text-sm text-[var(--ink-700)]">
                <span className="text-[#50a064] shrink-0">▸</span>
                <span>{t('staffItem3')}</span>
              </div>
            </div>
            <p className="text-xs text-[var(--ink-500)] italic">{t('staffCallout')}</p>
          </div>

          {/* Owner-Facing: AI Agent Suite */}
          <div className="rounded-2xl border border-[var(--accent-300)] bg-[rgba(215,180,122,0.06)] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-600)] mb-2">{t('ownerLabel')}</p>
            <h3 className="text-2xl font-bold text-[var(--ink-900)] mb-3">{t('ownerTitle')}</h3>
            <p className="text-sm text-[var(--ink-700)] mb-5">{t('ownerDesc')}</p>
            <div className="space-y-3 mb-5">
              <div className="flex gap-2 text-sm text-[var(--ink-700)]">
                <span className="text-[var(--accent-600)] shrink-0">•</span>
                <span>{t('ownerItem1')}</span>
              </div>
              <div className="flex gap-2 text-sm text-[var(--ink-700)]">
                <span className="text-[var(--accent-600)] shrink-0">•</span>
                <span>{t('ownerItem2')}</span>
              </div>
              <div className="flex gap-2 text-sm text-[var(--ink-700)]">
                <span className="text-[var(--accent-600)] shrink-0">•</span>
                <span>{t('ownerItem3')}</span>
              </div>
              <div className="flex gap-2 text-sm text-[var(--ink-700)]">
                <span className="text-[var(--accent-600)] shrink-0">•</span>
                <span>{t('ownerItem4')}</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-[var(--ink-900)]">{t('ownerCallout')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
