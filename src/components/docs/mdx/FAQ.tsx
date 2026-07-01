'use client'

import { ReactNode, useState } from 'react'

interface FAQProps {
  children: ReactNode
}

interface FAQItemProps {
  question: string
  children: ReactNode
}

export function FAQ({ children }: FAQProps) {
  return (
    <div className="my-6 space-y-2 border border-[var(--line)] rounded-lg overflow-hidden">
      {children}
    </div>
  )
}

export function FAQItem({ question, children }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[var(--surface)] border-b border-[var(--line)] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary-50/50 transition-colors"
      >
        <span className="font-medium text-[var(--ink-900)]">{question}</span>
        <svg
          className={`w-5 h-5 text-[var(--ink-500)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-[var(--ink-700)]">
          {children}
        </div>
      )}
    </div>
  )
}
