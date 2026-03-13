import Link from 'next/link'

interface BreadcrumbItem {
  title: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.title}</span>
          ) : (
            <Link href={item.href} className="hover:text-primary-600 transition-colors">
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
