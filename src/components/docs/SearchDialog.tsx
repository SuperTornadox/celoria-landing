'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { search, initSearchIndex } from '@/lib/search'

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ReturnType<typeof search>>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      initSearchIndex()
    }
  }, [isOpen])

  useEffect(() => {
    if (query) {
      const searchResults = search(query)
      setResults(searchResults)
      setSelectedIndex(0)
    } else {
      setResults([])
    }
  }, [query])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
          break
        case 'Enter':
          e.preventDefault()
          if (results[selectedIndex]) {
            router.push(results[selectedIndex].href)
            onClose()
            setQuery('')
          }
          break
        case 'Escape':
          onClose()
          setQuery('')
          break
      }
    },
    [isOpen, results, selectedIndex, router, onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={() => {
          onClose()
          setQuery('')
        }}
      />

      <div className="flex min-h-full items-start justify-center p-4 pt-[15vh]">
        <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl">
          <div className="flex items-center border-b border-gray-200 px-4">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="flex-1 px-4 py-4 text-base outline-none placeholder-gray-400"
              placeholder="搜索文档..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {results.length > 0 && (
            <ul className="max-h-[60vh] overflow-y-auto py-2">
              {results.map((result, index) => (
                <li key={`${result.category}-${result.slug}`}>
                  <button
                    className={`w-full px-4 py-3 text-left flex items-start gap-3 ${
                      index === selectedIndex ? 'bg-primary-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      router.push(result.href)
                      onClose()
                      setQuery('')
                    }}
                  >
                    <span className="text-gray-400 mt-0.5">📄</span>
                    <div>
                      <div className="font-medium text-gray-900">{result.title}</div>
                      <div className="text-sm text-gray-500">
                        {result.categoryTitle} · {result.description}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-500">
              没有找到相关文档
            </div>
          )}

          <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-400 flex items-center gap-4">
            <span>
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 ml-1">↓</kbd>
              <span className="ml-1">导航</span>
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600">Enter</kbd>
              <span className="ml-1">选择</span>
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600">Esc</kbd>
              <span className="ml-1">关闭</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
