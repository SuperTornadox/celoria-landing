'use client'

import { useTranslations } from 'next-intl'

export default function Team() {
  const t = useTranslations('Team')

  const team = [
    {
      name: t('member1Name'),
      role: t('member1Role'),
      bio: t('member1Bio'),
      highlights: [t('member1Tag1'), t('member1Tag2'), t('member1Tag3')],
    },
    {
      name: t('member2Name'),
      role: t('member2Role'),
      bio: t('member2Bio'),
      highlights: [t('member2Tag1'), t('member2Tag2'), t('member2Tag3')],
    },
    {
      name: t('member3Name'),
      role: t('member3Role'),
      bio: t('member3Bio'),
      highlights: [t('member3Tag1'), t('member3Tag2'), t('member3Tag3')],
      isHiring: true,
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--ink-700)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className={`rounded-2xl border bg-[var(--surface)] p-6 hover-lift ${
                member.isHiring
                  ? 'border-dashed border-[var(--accent-300)]'
                  : 'border-[var(--line)]'
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent-600)] mb-5">
                {member.isHiring ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                ) : (
                  <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                )}
              </div>
              <h3 className="text-xl text-[var(--ink-900)] mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-[var(--accent-600)] mb-3">{member.role}</p>
              <p className="text-[var(--ink-700)] mb-5">{member.bio}</p>
              <div className="flex flex-wrap gap-2">
                {member.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--ink-500)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
