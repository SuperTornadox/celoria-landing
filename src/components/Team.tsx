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
  ]

  return (
    <section id="team" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--ink-700)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-6 max-w-lg mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 hover-lift"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent-600)] mb-5">
                <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
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

        {/* Join Us CTA */}
        <div className="text-center mt-8">
          <a
            href="mailto:eric@celoria.ai?subject=Joining Celoria"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-300)] bg-[rgba(215,180,122,0.06)] px-6 py-3 text-sm text-[var(--accent-600)] hover:bg-[rgba(215,180,122,0.12)] transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {t('member3Tag3')}
          </a>
        </div>
      </div>
    </section>
  )
}
