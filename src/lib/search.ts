'use client'

import FlexSearch from 'flexsearch'
import { docsConfig, DocCategory, DocItem } from './docs'

interface SearchResult {
  category: string
  categoryTitle: string
  slug: string
  title: string
  description: string
  href: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let searchIndex: any = null
let searchData: SearchResult[] = []

export function initSearchIndex() {
  if (searchIndex) return

  searchIndex = new FlexSearch.Index({
    tokenize: 'forward',
    cache: true,
  })

  searchData = []

  docsConfig.forEach((category: DocCategory) => {
    category.items.forEach((doc: DocItem) => {
      if (doc.children) {
        doc.children.forEach((child: DocItem) => {
          const id = searchData.length
          const result: SearchResult = {
            category: category.slug,
            categoryTitle: category.title,
            slug: `${doc.slug}/${child.slug}`,
            title: child.title,
            description: child.description || doc.description || '',
            href: `/docs/${category.slug}/${doc.slug}/${child.slug}`,
          }
          searchData.push(result)
          searchIndex.add(id, `${child.title} ${child.description || ''} ${doc.title} ${category.title}`)
        })
      } else {
        const id = searchData.length
        const result: SearchResult = {
          category: category.slug,
          categoryTitle: category.title,
          slug: doc.slug,
          title: doc.title,
          description: doc.description || '',
          href: `/docs/${category.slug}/${doc.slug}`,
        }
        searchData.push(result)
        searchIndex.add(id, `${doc.title} ${doc.description || ''} ${category.title}`)
      }
    })
  })
}

export function search(query: string, limit: number = 10): SearchResult[] {
  if (!searchIndex) {
    initSearchIndex()
  }

  if (!query.trim()) {
    return []
  }

  const results = searchIndex.search(query, limit) as number[]
  return results.map((id) => searchData[id])
}
