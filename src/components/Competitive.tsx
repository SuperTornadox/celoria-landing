'use client'

import { useTranslations } from 'next-intl'

export default function Competitive() {
  const t = useTranslations('Competitive')

  const rows = [
    { name: t('squareName'), scheduling: t('squareScheduling'), pos: true, ai: false, multiTenant: false, price: t('squarePrice'), highlight: false },
    { name: t('vagaroName'), scheduling: true, pos: true, ai: false, multiTenant: t('vagaroMultiTenant'), price: t('vagaroPrice'), highlight: false },
    { name: t('maseName'), scheduling: true, pos: true, ai: false, multiTenant: t('maseMultiTenant'), price: t('masePrice'), highlight: false },
    { name: t('zenotiName'), scheduling: true, pos: true, ai: t('zenotiAI'), multiTenant: true, price: t('zenotiPrice'), highlight: false },
    { name: t('celoriaName'), scheduling: true, pos: true, ai: t('celoriaAI'), multiTenant: t('celoriaMultiTenant'), price: t('celoriaPrice'), highlight: true },
  ]

  function renderCell(value: boolean | string) {
    if (value === true) return <span>✅</span>
    if (value === false) return <span className="opacity-40">❌</span>
    return <span>{value}</span>
  }

  return (
    <section id="competitive" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)]">{t('title')}</h2>
        </div>

        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--line)]">
                <th className="text-left py-3 px-4 text-[var(--ink-500)] font-semibold">{t('colCompany')}</th>
                <th className="text-center py-3 px-4 text-[var(--ink-500)] font-semibold">{t('colScheduling')}</th>
                <th className="text-center py-3 px-4 text-[var(--ink-500)] font-semibold">{t('colPOS')}</th>
                <th className="text-center py-3 px-4 text-[var(--ink-500)] font-semibold">{t('colAI')}</th>
                <th className="text-center py-3 px-4 text-[var(--ink-500)] font-semibold">{t('colMultiTenant')}</th>
                <th className="text-center py-3 px-4 text-[var(--ink-500)] font-semibold">{t('colPrice')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} className={`border-b border-[var(--line)] ${row.highlight ? 'bg-[rgba(215,180,122,0.08)]' : ''}`}>
                  <td className={`py-3 px-4 font-semibold ${row.highlight ? 'text-[var(--accent-600)]' : 'text-[var(--ink-900)]'}`}>{row.name}</td>
                  <td className="text-center py-3 px-4">{renderCell(row.scheduling)}</td>
                  <td className="text-center py-3 px-4">{renderCell(row.pos)}</td>
                  <td className={`text-center py-3 px-4 ${row.highlight ? 'font-semibold text-[var(--accent-600)]' : ''}`}>{renderCell(row.ai)}</td>
                  <td className={`text-center py-3 px-4 ${row.highlight ? 'font-semibold text-[var(--accent-600)]' : ''}`}>{renderCell(row.multiTenant)}</td>
                  <td className={`text-center py-3 px-4 ${row.highlight ? 'font-semibold text-[var(--accent-600)]' : ''}`}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
