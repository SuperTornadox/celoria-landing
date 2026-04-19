'use client'

import { useTranslations } from 'next-intl'

export default function SalonFeatures() {
  const t = useTranslations('SalonFeatures')

  const features = [
    { title: t('f1Title'), desc: t('f1Desc') },
    { title: t('f2Title'), desc: t('f2Desc') },
    { title: t('f3Title'), desc: t('f3Desc') },
    { title: t('f4Title'), desc: t('f4Desc') },
    { title: t('f5Title'), desc: t('f5Desc') },
    { title: t('f6Title'), desc: t('f6Desc') },
    { title: t('f7Title'), desc: t('f7Desc') },
    { title: t('f8Title'), desc: t('f8Desc') },
  ]

  return (
    <section id="features" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--ink-700)] max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent-300)] transition"
            >
              <h3 className="font-semibold text-[var(--ink-900)] mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--ink-700)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
