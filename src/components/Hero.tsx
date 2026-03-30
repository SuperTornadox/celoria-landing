'use client'

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')

  const glanceItems = [
    { label: t('glanceLocations'), value: '35', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { label: t('glanceTransactions'), value: '$98K+', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { label: t('glanceDailyClose'), value: t('glanceDailyCloseValue'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: t('glanceAI'), value: t('glanceAIValue'), icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  ]

  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="section-shell reveal-up">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--ink-700)] mb-7">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-500)] animate-pulse"></span>
              <span>{t('badge')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl leading-tight text-[var(--ink-900)] mb-6 font-semibold">
              {t('titleLine1')}
              <br />
              {t('titleLine2')}<span className="text-gradient font-bold">{t('titleHighlight')}</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--ink-900)] md:text-[var(--ink-700)] max-w-2xl mb-10">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="rounded-lg px-8 py-4 text-lg font-semibold text-white bg-[var(--accent-500)] hover:bg-[var(--accent-600)] transition shadow-[0_12px_32px_-12px_rgba(31,27,22,0.45)]"
              >
                {t('ctaDemo')}
              </a>
              <a
                href="#solution"
                className="rounded-lg px-8 py-4 text-lg font-semibold text-[var(--ink-900)] border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-soft)] transition"
              >
                {t('ctaProduct')}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 shadow-[0_24px_48px_-24px_rgba(31,27,22,0.35)]">
              <div className="absolute -top-9 -left-8 h-28 w-28 rounded-full blur-2xl bg-[var(--glow)]"></div>
              <p className="text-sm tracking-[0.2em] uppercase text-[var(--ink-500)] mb-5">
                {t('glanceTitle')}
              </p>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-3">
                {glanceItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl bg-white p-3 lg:p-4 border border-[var(--line)]">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[var(--accent-500)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                      <span className="text-xs lg:text-base text-[var(--ink-700)]">{item.label}</span>
                    </div>
                    <strong className="text-base lg:text-xl text-[var(--ink-900)]">{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
