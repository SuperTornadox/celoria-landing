export default function Hero() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="section-shell reveal-up">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--ink-700)] mb-7">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-500)] animate-pulse"></span>
              <span>Luxury Nail Business Operating System</span>
            </div>

            <h1 className="text-4xl md:text-6xl leading-tight text-[var(--ink-900)] mb-6">
              Turn Daily Salon
              <br />
              Operations into <span className="text-gradient">Steady Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--ink-700)] max-w-2xl mb-10">
              Celoria AI streamlines scheduling, customer management, and team performance
              into one polished workflow, so your salon can scale with less friction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="rounded-xl px-8 py-4 text-lg font-semibold text-white bg-[var(--accent-500)] hover:bg-[var(--accent-600)] transition shadow-[0_20px_45px_-30px_rgba(31,27,22,0.95)]"
              >
                Book Strategy Demo
              </a>
              <a
                href="#screenshots"
                className="rounded-xl px-8 py-4 text-lg font-semibold text-[var(--ink-900)] border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-soft)] transition"
              >
                Explore Product
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 shadow-[0_36px_70px_-42px_rgba(31,27,22,0.85)]">
              <div className="absolute -top-9 -left-8 h-28 w-28 rounded-full blur-2xl bg-[var(--glow)]"></div>
              <p className="text-sm tracking-[0.2em] uppercase text-[var(--ink-500)] mb-3">
                Operations Snapshot
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-white p-4 border border-[var(--line)]">
                  <span className="text-[var(--ink-700)]">Active Appointments</span>
                  <strong className="text-2xl text-[var(--ink-900)]">128</strong>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white p-4 border border-[var(--line)]">
                  <span className="text-[var(--ink-700)]">No-show Rate</span>
                  <strong className="text-2xl text-[var(--ink-900)]">2.1%</strong>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white p-4 border border-[var(--line)]">
                  <span className="text-[var(--ink-700)]">Average Ticket</span>
                  <strong className="text-2xl text-[var(--ink-900)]">$86</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-8 text-[var(--ink-700)]">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[var(--accent-500)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure & Reliable</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[var(--accent-500)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Real-time Sync</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[var(--accent-500)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
