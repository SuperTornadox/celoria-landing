'use client'

import { useTranslations } from 'next-intl'

export default function AIVision() {
  const t = useTranslations('AIVision')

  const automates = [
    { title: t('automates1Title'), desc: t('automates1Desc') },
    { title: t('automates2Title'), desc: t('automates2Desc') },
    { title: t('automates3Title'), desc: t('automates3Desc') },
    { title: t('automates4Title'), desc: t('automates4Desc') },
  ]

  const focus = [
    { title: t('focus1Title'), desc: t('focus1Desc') },
    { title: t('focus2Title'), desc: t('focus2Desc') },
    { title: t('focus3Title'), desc: t('focus3Desc') },
    { title: t('focus4Title'), desc: t('focus4Desc') },
  ]

  return (
    <section id="ai-vision" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--ink-700)] max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 max-w-5xl mx-auto items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d08040] mb-4">{t('automatesLabel')}</p>
            <div className="space-y-3">
              {automates.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
                  <h4 className="font-semibold text-[var(--ink-900)] text-sm">{item.title}</h4>
                  <p className="text-xs text-[var(--ink-500)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center pt-10">
            <span className="text-2xl text-[var(--ink-500)]">→</span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#6090c0] mb-4">{t('focusLabel')}</p>
            <div className="space-y-3">
              {focus.map((item) => (
                <div key={item.title} className="rounded-xl border border-[rgba(96,144,192,0.3)] bg-[rgba(96,144,192,0.05)] p-4">
                  <h4 className="font-semibold text-[#6090c0] text-sm">{item.title}</h4>
                  <p className="text-xs text-[var(--ink-500)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
