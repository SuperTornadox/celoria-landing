'use client'

import { useTranslations } from 'next-intl'

export default function Insight() {
  const t = useTranslations('Insight')

  return (
    <section id="insight" className="py-20">
      <div className="section-shell">
        <div className="max-w-4xl mx-auto reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-500)] mb-6">{t('kicker')}</p>
          <div className="relative pl-8 mb-8">
            <span className="absolute top-0 left-0 text-5xl leading-none text-[var(--accent-500)]">&ldquo;</span>
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--ink-900)] font-medium">
              {t('quote')}
            </p>
          </div>
          <p className="text-lg text-[var(--ink-700)] leading-relaxed">
            {t('supportingText')}
          </p>
        </div>
      </div>
    </section>
  )
}
