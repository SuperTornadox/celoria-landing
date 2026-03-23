'use client'

import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const locale = useLocale()

  return (
    <footer className="bg-[#1f1b16] text-[#ccb99b] py-12 mt-8">
      <div className="section-shell">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[linear-gradient(145deg,#af7f35,#e0bf8f)]">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-white">Celoria</span>
            </div>
            <p className="text-[#ccb99b] max-w-md">
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
              <li><a href="#team" className="hover:text-white transition">{t('team')}</a></li>
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

        <div className="border-t border-[#3a342c] pt-8 flex flex-col md:flex-row justify-between items-center">
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
