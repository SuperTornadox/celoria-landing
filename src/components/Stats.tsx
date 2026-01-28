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
    <section id="stats" className="py-20 px-4 bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Celoria AI has been serving business chains for years, powering efficient operations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-2xl text-primary-200">{stat.unit}</span>
              </div>
              <div className="text-xl font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-primary-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
