'use client'

import { useTranslations } from 'next-intl'

export default function Competitive() {
  const t = useTranslations('Competitive')

  const rows = [
    {
      name: t('zenotiName'),
      verticals: t('zenotiVerticals'),
      legacy: t('zenotiLegacy'),
      payment: t('zenotiPayment'),
      multilingual: t('zenotiMultilingual'),
      ai: t('zenotiAI'),
      highlight: false,
      legacyColor: '#50a064',
      multilingualColor: '#c05040',
      aiColor: '#c05040',
    },
    {
      name: t('vagaroName'),
      verticals: t('vagaroVerticals'),
      legacy: t('vagaroLegacy'),
      payment: t('vagaroPayment'),
      multilingual: t('vagaroMultilingual'),
      ai: t('vagaroAI'),
      highlight: false,
      legacyColor: '#50a064',
      multilingualColor: '#c05040',
      aiColor: '#c05040',
    },
    {
      name: t('boulevardName'),
      verticals: t('boulevardVerticals'),
      legacy: t('boulevardLegacy'),
      payment: t('boulevardPayment'),
      multilingual: t('boulevardMultilingual'),
      ai: t('boulevardAI'),
      highlight: false,
      legacyColor: '#50a064',
      multilingualColor: '#c05040',
      aiColor: '#c05040',
    },
    {
      name: t('freshaName'),
      verticals: t('freshaVerticals'),
      legacy: t('freshaLegacy'),
      payment: t('freshaPayment'),
      multilingual: t('freshaMultilingual'),
      ai: t('freshaAI'),
      highlight: false,
      legacyColor: '#d08040',
      multilingualColor: '#d08040',
      aiColor: '#c05040',
    },
    {
      name: t('celoriaName'),
      verticals: t('celoriaVerticals'),
      legacy: t('celoriaLegacy'),
      payment: t('celoriaPayment'),
      multilingual: t('celoriaMultilingual'),
      ai: t('celoriaAI'),
      highlight: true,
      legacyColor: '#d08040',
      multilingualColor: '#50a064',
      aiColor: '#50a064',
    },
  ]

  return (
    <section id="competitive" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-2xl md:text-4xl text-[var(--ink-900)] max-w-4xl mx-auto">{t('title')}</h2>
        </div>

        <div className="overflow-x-auto max-w-6xl mx-auto -mx-4 px-4 sm:mx-auto sm:px-0">
          <table className="w-full text-sm min-w-[820px]">
            <thead>
              <tr className="border-b-2 border-[var(--line)]">
                <th className="text-left py-3 px-3 text-[var(--ink-500)] font-semibold w-[120px]">{t('colCompany')}</th>
                <th className="text-left py-3 px-3 text-[var(--ink-500)] font-semibold w-[140px]">{t('colVerticals')}</th>
                <th className="text-left py-3 px-3 text-[var(--ink-500)] font-semibold">{t('colLegacy')}</th>
                <th className="text-center py-3 px-3 text-[var(--ink-500)] font-semibold w-[140px]">{t('colPayment')}</th>
                <th className="text-left py-3 px-3 text-[var(--ink-500)] font-semibold">{t('colMultilingual')}</th>
                <th className="text-left py-3 px-3 text-[var(--ink-500)] font-semibold">{t('colAI')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.name}
                  className={`border-b border-[var(--line)] ${row.highlight ? 'bg-[rgba(215,180,122,0.08)]' : ''}`}
                >
                  <td className={`py-4 px-3 font-semibold ${row.highlight ? 'text-[var(--accent-600)]' : 'text-[var(--ink-900)]'}`}>
                    {row.name}
                  </td>
                  <td className="py-4 px-3 text-xs text-[var(--ink-700)]">
                    {row.verticals}
                  </td>
                  <td className="py-4 px-3 text-xs" style={{ color: row.legacyColor }}>
                    {row.legacy}
                  </td>
                  <td className="text-center py-4 px-3 text-xs text-[var(--ink-700)]">
                    {row.payment}
                  </td>
                  <td className="py-4 px-3 text-xs" style={{ color: row.multilingualColor }}>
                    {row.multilingual}
                  </td>
                  <td className={`py-4 px-3 text-xs ${row.highlight ? 'font-semibold' : ''}`} style={{ color: row.aiColor }}>
                    {row.ai}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <div className="rounded-xl border border-[var(--accent-300)] bg-[rgba(215,180,122,0.06)] p-5">
            <p className="text-sm text-[var(--ink-700)] leading-relaxed">{t('footnote')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
