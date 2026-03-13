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
    <div className="my-6 space-y-2 border border-gray-200 rounded-lg overflow-hidden">
      {children}
    </div>
  )
}

export function FAQItem({ question, children }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600">
          {children}
        </div>
      )}
    </div>
  )
}
