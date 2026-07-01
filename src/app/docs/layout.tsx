import type { Metadata } from 'next'
import { Manrope, Poppins } from 'next/font/google'
import '../globals.css'
import DocsShell from './DocsShell'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '帮助中心 - Celoria',
  description: 'Celoria 用户指南和帮助文档',
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${manrope.variable} ${poppins.variable}`}>
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  )
}
