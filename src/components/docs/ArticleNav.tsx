import Link from 'next/link'
import { DocItem } from '@/lib/docs'

interface ArticleNavProps {
  prev?: { category: string; slug: string; doc: DocItem; parent?: DocItem }
  next?: { category: string; slug: string; doc: DocItem; parent?: DocItem }
}

export function ArticleNav({ prev, next }: ArticleNavProps) {
  return (
    <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
      {prev ? (
        <Link
          href={`/docs/${prev.category}/${prev.slug}`}
          className="group flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-right">
            <div className="text-xs text-gray-400">上一篇</div>
            <div className="font-medium">{prev.doc.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/docs/${next.category}/${next.slug}`}
          className="group flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
        >
          <div className="text-left">
            <div className="text-xs text-gray-400">下一篇</div>
            <div className="font-medium">{next.doc.title}</div>
          </div>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
