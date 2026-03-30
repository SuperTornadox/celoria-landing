'use client'

import { useTranslations } from 'next-intl'

const agentColors: Record<string, { bg: string; border: string; text: string }> = {
  orchestrator: { bg: 'rgba(168,134,80,0.1)', border: 'rgba(168,134,80,0.35)', text: '#A88650' },
  insight:      { bg: 'rgba(80,160,100,0.1)', border: 'rgba(80,160,100,0.3)',  text: '#50a064' },
  marketing:    { bg: 'rgba(208,128,64,0.1)', border: 'rgba(208,128,64,0.3)',  text: '#d08040' },
  supervisor:   { bg: 'rgba(128,112,160,0.1)', border: 'rgba(128,112,160,0.3)', text: '#8070a0' },
  compliance:   { bg: 'rgba(96,144,192,0.1)',  border: 'rgba(96,144,192,0.3)',  text: '#6090c0' },
  talent:       { bg: 'rgba(192,80,64,0.1)',   border: 'rgba(192,80,64,0.3)',   text: '#c05040' },
}

export default function AIVision() {
  const t = useTranslations('AIVision')

  const agents = [
    { key: 'insight',    name: t('agent1Name'), desc: t('agent1Desc'), icon: '📊' },
    { key: 'marketing',  name: t('agent2Name'), desc: t('agent2Desc'), icon: '📈' },
    { key: 'supervisor', name: t('agent3Name'), desc: t('agent3Desc'), icon: '⚙️' },
    { key: 'compliance', name: t('agent4Name'), desc: t('agent4Desc'), icon: '🛡️' },
    { key: 'talent',     name: t('agent5Name'), desc: t('agent5Desc'), icon: '👥' },
  ]

  return (
    <section id="ai-vision" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-500)] mb-3">{t('kicker')}</p>
          <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--ink-700)] max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Orchestrator */}
          <div className="text-center mb-6">
            <div
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              style={{
                background: agentColors.orchestrator.bg,
                border: `1px solid ${agentColors.orchestrator.border}`,
                color: agentColors.orchestrator.text,
              }}
            >
              🏢 {t('orchestrator')}
            </div>
            <p className="text-xs text-[var(--ink-500)] mt-2">{t('orchestratorDesc')}</p>
          </div>

          {/* Connection line */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-8 bg-[var(--line)]"></div>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
            {agents.map((agent) => {
              const c = agentColors[agent.key]
              return (
                <div
                  key={agent.key}
                  className="rounded-xl p-4 text-center hover-lift"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                >
                  <div className="text-2xl mb-2">{agent.icon}</div>
                  <h4 className="text-sm font-semibold mb-1" style={{ color: c.text }}>{agent.name}</h4>
                  <p className="text-xs text-[var(--ink-500)] leading-relaxed">{agent.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Callouts */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
              <p className="text-sm font-semibold text-[var(--accent-600)] mb-1">{t('callout1Label')}</p>
              <p className="text-xs text-[var(--ink-500)]">{t('callout1Text')}</p>
            </div>
            <div className="rounded-xl border border-[rgba(96,144,192,0.3)] bg-[rgba(96,144,192,0.05)] p-5">
              <p className="text-sm font-semibold text-[#6090c0] mb-1">{t('callout2Label')}</p>
              <p className="text-xs text-[var(--ink-500)]">{t('callout2Text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
