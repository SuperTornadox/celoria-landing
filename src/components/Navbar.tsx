'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { routing } from '@/i18n/routing'

type AppLocale = typeof routing.locales[number]

const LOCALE_LABELS: Record<AppLocale, { code: string; native: string }> = {
  en: { code: 'EN', native: 'English' },
  zh: { code: 'ZH', native: '中文' },
  es: { code: 'ES', native: 'Español' },
  vi: { code: 'VI', native: 'Tiếng Việt' },
  ko: { code: 'KO', native: '한국어' },
  ru: { code: 'RU', native: 'Русский' },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Navbar')
  const locale = useLocale() as AppLocale
  const pathname = usePathname()
  const router = useRouter()

  const links = [
    { href: '#solution', label: t('solution') },
    { href: '#ai-vision', label: t('aiVision') },
    { href: '#competitive', label: t('whyCeloria') },
    { href: '#contact', label: t('contact') },
  ]

  function buildLocaleHref(targetLocale: AppLocale) {
    const segments = pathname.split('/')
    // segments[0] is '', segments[1] is the locale
    if (routing.locales.includes(segments[1] as AppLocale)) {
      segments[1] = targetLocale
    }
    return segments.join('/')
  }

  function handleLocaleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as AppLocale
    if (next === locale) return
    router.push(buildLocaleHref(next))
  }

  const localeSelectClassName =
    'rounded-lg px-3 py-1.5 text-sm font-medium text-[var(--ink-700)] border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-soft)] transition cursor-pointer'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--line)] bg-[rgba(245,241,237,0.82)] backdrop-blur-md">
      <div className="section-shell">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2.5">
            <img
              src="/brand/celoria-icon-rounded.png"
              alt="Celoria"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-semibold text-[var(--accent-500)]" style={{ fontFamily: 'var(--font-heading), sans-serif' }}>
              celoria
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--ink-700)] hover:text-[var(--ink-900)] transition"
              >
                {link.label}
              </a>
            ))}
            <select
              aria-label="Select language"
              value={locale}
              onChange={handleLocaleChange}
              className={localeSelectClassName}
            >
              {routing.locales.map((loc) => (
                <option key={loc} value={loc}>
                  {LOCALE_LABELS[loc].code} · {LOCALE_LABELS[loc].native}
                </option>
              ))}
            </select>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-[var(--line)]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[var(--ink-700)] hover:text-[var(--ink-900)]"
              >
                {link.label}
              </a>
            ))}
            <select
              aria-label="Select language"
              value={locale}
              onChange={handleLocaleChange}
              className="block w-full px-5 py-2 rounded-lg text-center font-medium text-[var(--ink-700)] border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-soft)]"
            >
              {routing.locales.map((loc) => (
                <option key={loc} value={loc}>
                  {LOCALE_LABELS[loc].code} · {LOCALE_LABELS[loc].native}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </nav>
  )
}
