const stats = [
  {
    value: '36',
    unit: '',
    label: 'Chain Stores',
    description: 'Across NYC Metro Area',
  },
  {
    value: '400K',
    unit: '+',
    label: 'Customers',
    description: 'And growing',
  },
  {
    value: '266',
    unit: '',
    label: 'Employees',
    description: 'Professional technicians',
  },
  {
    value: '99.9',
    unit: '%',
    label: 'Uptime',
    description: 'Reliable 24/7 operation',
  },
]

export default function Stats() {
  return (
    <section id="stats" className="py-20">
      <div className="section-shell">
        <div className="rounded-3xl border border-[var(--line)] bg-[linear-gradient(135deg,#241f19,#3a2d1e_55%,#533b1f)] px-6 py-14 md:px-12">
          <div className="text-center mb-14 reveal-up">
            <p className="text-xs uppercase tracking-[0.28em] text-[#d9c4a1] mb-3">Results</p>
            <h2 className="text-3xl md:text-5xl text-[#fff8ec] mb-4">
            Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-[#eedfc7] max-w-2xl mx-auto">
            Celoria AI has been serving business chains for years, powering efficient operations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl border border-[rgba(255,235,200,0.2)] bg-[rgba(255,248,236,0.08)] backdrop-blur-sm hover-lift"
              >
                <div className="text-4xl md:text-5xl font-semibold text-[#fff8ec] mb-2">
                  {stat.value}
                  <span className="text-2xl text-[#d6ba8a]">{stat.unit}</span>
                </div>
                <div className="text-xl font-medium text-[#fff8ec] mb-1">
                  {stat.label}
                </div>
                <div className="text-[#e9d4b3]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
