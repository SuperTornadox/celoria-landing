'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'

export default function InvestorSection({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const locale = useLocale()

  const label = locale === 'zh' ? '投资人深度分析' : 'Investor Deep Dive'
  const hint = locale === 'zh'
    ? '商业模式、市场时机、护城河分析'
    : 'Business model, market timing, and competitive moats'

  return (
    <section id="investors" className="py-12">
      <div className="section-shell">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 hover:bg-[var(--surface-soft)] transition group"
        >
          <div className="text-left">
            <h2 className="text-xl md:text-2xl text-[var(--ink-900)] font-semibold">
              {label}
            </h2>
            <p className="text-sm text-[var(--ink-500)] mt-1">{hint}</p>
          </div>
          <svg
            className={`w-6 h-6 text-[var(--ink-500)] transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="mt-2 animate-[rise-in_0.3s_ease-out]">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
