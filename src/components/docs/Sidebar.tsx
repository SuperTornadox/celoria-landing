'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { docsConfig } from '@/lib/docs'
import { useState } from 'react'

export function Sidebar() {
  const pathname = usePathname()
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    docsConfig.map((c) => c.slug)
  )
  const [expandedItems, setExpandedItems] = useState<string[]>(() => {
    // Auto-expand the parent item that matches current path
    const expanded: string[] = []
    for (const category of docsConfig) {
      for (const item of category.items) {
        if (item.children) {
          const prefix = `/docs/${category.slug}/${item.slug}/`
          if (pathname?.startsWith(prefix)) {
            expanded.push(`${category.slug}/${item.slug}`)
          }
        }
      }
    }
    return expanded
  })

  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const toggleItem = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    )
  }

  const isActive = (href: string) => {
    return pathname === href || pathname === `${href}/`
  }

  const isChildActive = (categorySlug: string, itemSlug: string) => {
    const prefix = `/docs/${categorySlug}/${itemSlug}/`
    return pathname?.startsWith(prefix) ?? false
  }

  return (
    <nav className="w-[280px] flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white overflow-y-auto">
      <div className="p-4">
        <Link
          href="/docs"
          className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-6"
        >
          <span>📖</span>
          <span>帮助中心</span>
        </Link>

        <div className="space-y-1">
          {docsConfig.map((category) => (
            <div key={category.slug}>
              <button
                onClick={() => toggleCategory(category.slug)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedCategories.includes(category.slug) ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {expandedCategories.includes(category.slug) && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.items.map((item) => {
                    if (item.children) {
                      const itemKey = `${category.slug}/${item.slug}`
                      const isExpanded = expandedItems.includes(itemKey)
                      const hasActiveChild = isChildActive(category.slug, item.slug)

                      return (
                        <div key={item.slug}>
                          <button
                            onClick={() => toggleItem(itemKey)}
                            className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                              hasActiveChild
                                ? 'text-primary-700 font-medium'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                          >
                            <span>{item.title}</span>
                            <svg
                              className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>

                          {isExpanded && (
                            <div className="ml-4 mt-1 space-y-1">
                              {item.children.map((child) => {
                                const childHref = `/docs/${category.slug}/${item.slug}/${child.slug}`
                                return (
                                  <Link
                                    key={child.slug}
                                    href={childHref}
                                    className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                                      isActive(childHref)
                                        ? 'bg-primary-100 text-primary-700 font-medium'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                  >
                                    {child.title}
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    }

                    const href = `/docs/${category.slug}/${item.slug}`
                    return (
                      <Link
                        key={item.slug}
                        href={href}
                        className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                          isActive(href)
                            ? 'bg-primary-100 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {item.title}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
