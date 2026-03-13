'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--line)] bg-[rgba(248,244,236,0.82)] backdrop-blur-md">
      <div className="section-shell">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[linear-gradient(145deg,#af7f35,#e0bf8f)] shadow-[0_10px_30px_-16px_rgba(31,27,22,0.95)]">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-semibold text-[var(--ink-900)]">Celoria AI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[var(--ink-700)] hover:text-[var(--ink-900)] transition">Features</a>
            <a href="#stats" className="text-[var(--ink-700)] hover:text-[var(--ink-900)] transition">Stats</a>
            <a href="#screenshots" className="text-[var(--ink-700)] hover:text-[var(--ink-900)] transition">Product</a>
            <a href="#contact" className="text-[var(--ink-700)] hover:text-[var(--ink-900)] transition">Contact</a>
            <a
              href="#contact"
              className="rounded-lg px-5 py-2 font-semibold text-white bg-[var(--accent-500)] hover:bg-[var(--accent-600)] transition"
            >
              Book a Demo
            </a>
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
            <a href="#features" className="block text-[var(--ink-700)] hover:text-[var(--ink-900)]">Features</a>
            <a href="#stats" className="block text-[var(--ink-700)] hover:text-[var(--ink-900)]">Stats</a>
            <a href="#screenshots" className="block text-[var(--ink-700)] hover:text-[var(--ink-900)]">Product</a>
            <a href="#contact" className="block text-[var(--ink-700)] hover:text-[var(--ink-900)]">Contact</a>
            <a
              href="#contact"
              className="block px-5 py-2 rounded-lg text-center font-semibold text-white bg-[var(--accent-500)] hover:bg-[var(--accent-600)]"
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
