'use client'

import { useTranslations } from 'next-intl'

export default function Solution() {
  const t = useTranslations('Solution')

  const proven = [
    { title: t('proven1Title'), desc: t('proven1Desc') },
    { title: t('proven2Title'), desc: t('proven2Desc') },
    { title: t('proven3Title'), desc: t('proven3Desc') },
    { title: t('proven4Title'), desc: t('proven4Desc') },
  ]

  const next = [
    { title: t('next1Title'), source: t('next1Source') },
    { title: t('next2Title'), source: t('next2Source') },
    { title: t('next3Title'), source: t('next3Source') },
    { title: t('next4Title'), source: t('next4Source') },
  ]

  return (
    <section id="solution" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--ink-700)] max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent-500)] mb-4">{t('provenLabel')}</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {proven.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
                  <h4 className="font-semibold text-[var(--ink-900)] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-[var(--ink-500)]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border-l-2 border-[var(--accent-500)] bg-[rgba(215,180,122,0.06)] p-4">
              <p className="text-sm text-[var(--ink-700)]">{t('provenCallout')}</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#6090c0] mb-4">{t('nextLabel')}</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {next.map((item) => (
                <div key={item.title} className="rounded-xl border border-[rgba(96,144,192,0.3)] bg-[rgba(96,144,192,0.05)] p-4">
                  <h4 className="font-semibold text-[#6090c0] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-[var(--ink-500)]">{item.source}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border-l-2 border-[#6090c0] bg-[rgba(96,144,192,0.05)] p-4">
              <p className="text-sm text-[var(--ink-700)]">{t('nextCallout')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
