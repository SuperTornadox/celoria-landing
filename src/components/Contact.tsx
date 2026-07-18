import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
            <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-[var(--ink-700)] mb-8">
              {t('subtitle')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[var(--surface-soft)] rounded-lg flex items-center justify-center text-[var(--accent-600)] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--ink-900)]">{t('emailLabel')}</h3>
                  <p className="text-[var(--ink-700)]">{t('emailValue')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[var(--surface-soft)] rounded-lg flex items-center justify-center text-[var(--accent-600)] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--ink-900)]">{t('channelsLabel')}</h3>
                  <p className="text-[var(--ink-700)] text-sm leading-relaxed">{t('channelsLine')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
