'use client'

import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const locale = useLocale()

  return (
    <footer className="bg-[#2D2D2D] text-[#E8D7C3] py-12 mt-8">
      <div className="section-shell">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2.5 mb-4">
              <img
                src="/brand/celoria-symbol.png"
                alt="Celoria"
                className="w-8 h-8 brightness-110"
              />
              <span className="text-xl font-semibold text-[#E8D7C3]" style={{ fontFamily: 'var(--font-heading), sans-serif' }}>
                celoria
              </span>
            </div>
            <p className="text-[#E8D7C3] max-w-md">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#solution" className="hover:text-white transition">{t('solution')}</a></li>
              <li><a href="#ai-vision" className="hover:text-white transition">{t('aiVision')}</a></li>
              <li><a href="#traction" className="hover:text-white transition">{t('traction')}</a></li>
              <li><a href="#competitive" className="hover:text-white transition">{t('whyCeloria')}</a></li>
              <li><a href="#contact" className="hover:text-white transition">{t('contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('contactTitle')}</h4>
            <ul className="space-y-2">
              <li>71 University Place</li>
              <li>New York, NY 10003</li>
              <li>eric@celoria.ai</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {t('copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={`/${locale}/privacy`} className="hover:text-white transition">{t('privacy')}</a>
            <a href={`/${locale}/terms`} className="hover:text-white transition">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
