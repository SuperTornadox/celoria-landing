'use client'

import Link from 'next/link'
import { useState } from 'react'
import { docsConfig, popularDocs } from '@/lib/docs'
import { SearchDialog } from './SearchDialog'

export function DocsHome() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* 搜索区域 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">您好，有什么可以帮您？</h1>
        <button
          onClick={() => setSearchOpen(true)}
          className="w-full max-w-xl mx-auto flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-primary-300 hover:shadow-md transition-all"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="text-gray-400">搜索文档...</span>
          <span className="ml-auto text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">
            ⌘K
          </span>
        </button>
      </div>

      {/* 热门文章 */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">热门文章</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularDocs.map((doc) => (
            <Link
              key={`${doc.category}-${doc.slug}`}
              href={`/docs/${doc.category}/${doc.slug}`}
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all"
            >
              <span className="text-gray-900 font-medium">{doc.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 按角色浏览 */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">按角色浏览</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {docsConfig
            .filter((c) => ['admin', 'manager', 'employee'].includes(c.slug))
            .map((category) => (
              <Link
                key={category.slug}
                href={`/docs/${category.slug}/${category.items[0]?.slug || ''}`}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-500">{category.description}</p>
              </Link>
            ))}
        </div>
      </div>

      {/* 所有分类 */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">所有分类</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {docsConfig.map((category) => (
            <Link
              key={category.slug}
              href={`/docs/${category.slug}/${category.items[0]?.slug || ''}`}
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all text-center"
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="text-sm font-medium text-gray-900">{category.title}</div>
            </Link>
          ))}
        </div>
      </div>

      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
