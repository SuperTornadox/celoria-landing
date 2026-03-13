'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sidebar, SearchDialog } from '@/components/docs'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // 快捷键 Cmd+K 打开搜索
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          <div className="flex items-center gap-4">
            {/* 移动端菜单按钮 */}
            <button
              className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary-600">Celoria</span>
            </Link>

            <Link href="/docs" className="hidden sm:block text-sm text-gray-600 hover:text-gray-900">
              帮助中心
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* 搜索按钮 */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">搜索</span>
              <span className="hidden sm:inline text-xs text-gray-400 border border-gray-300 rounded px-1">⌘K</span>
            </button>

            {/* 登录按钮 */}
            <Link
              href="https://celoria.ai"
              className="text-sm text-gray-600 hover:text-gray-900"
              target="_blank"
            >
              登录
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* 桌面端侧边栏 */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* 移动端侧边栏 */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-30 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 z-40 lg:hidden">
              <Sidebar />
            </div>
          </>
        )}

        {/* 主内容区 */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
