'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="bg-[#2D2D2D] text-[#E8D7C3] py-12 mt-8">
      <div className="section-shell">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <div className="flex items-center space-x-2.5">
            <img
              src="/brand/celoria-icon-rounded.png"
              alt="Celoria"
              className="w-8 h-8 rounded-lg brightness-110"
            />
            <span className="text-xl font-semibold text-[#E8D7C3]" style={{ fontFamily: 'var(--font-heading), sans-serif' }}>
              celoria
            </span>
          </div>
          <p className="text-[#E8D7C3] max-w-md">
            {t('tagline')}
          </p>
          <a href="mailto:contact@celoria.ai" className="hover:text-white transition">
            contact@celoria.ai
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p>&copy; {t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
