'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Celoria AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition">Features</a>
            <a href="#stats" className="text-gray-600 hover:text-primary-600 transition">Stats</a>
            <a href="#screenshots" className="text-gray-600 hover:text-primary-600 transition">Product</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition">Contact</a>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#features" className="block text-gray-600 hover:text-primary-600">Features</a>
            <a href="#stats" className="block text-gray-600 hover:text-primary-600">Stats</a>
            <a href="#screenshots" className="block text-gray-600 hover:text-primary-600">Product</a>
            <a href="#contact" className="block text-gray-600 hover:text-primary-600">Contact</a>
            <a
              href="#contact"
              className="block bg-primary-600 text-white px-5 py-2 rounded-lg text-center"
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
