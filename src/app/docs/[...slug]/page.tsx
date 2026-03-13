import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { Breadcrumb, ArticleNav, Feedback, mdxComponents } from '@/components/docs'
import { getBreadcrumb, getNavigation, docsConfig, getDocBySlug, getParentDocBySlug } from '@/lib/docs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

// 生成所有静态路径
export function generateStaticParams() {
  const paths: { slug: string[] }[] = []

  docsConfig.forEach((category) => {
    category.items.forEach((doc) => {
      if (doc.children) {
        doc.children.forEach((child) => {
          paths.push({ slug: [category.slug, doc.slug, child.slug] })
        })
      } else {
        paths.push({ slug: [category.slug, doc.slug] })
      }
    })
  })

  return paths
}

// 生成页面元数据
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const [categorySlug, docSlug, childSlug] = slug

  let doc
  if (childSlug) {
    doc = getDocBySlug(categorySlug, docSlug, childSlug)
  } else {
    doc = getDocBySlug(categorySlug, docSlug)
  }

  if (!doc) {
    return {
      title: '页面未找到 - Celoria 帮助中心',
    }
  }

  return {
    title: `${doc.title} - Celoria 帮助中心`,
    description: doc.description,
  }
}

async function getDocContent(categorySlug: string, docSlug: string, childSlug?: string) {
  let filePath: string

  if (childSlug) {
    // 3-segment: content/docs/zh/{category}/{parent}/{child}.mdx
    filePath = path.join(process.cwd(), 'content', 'docs', 'zh', categorySlug, docSlug, `${childSlug}.mdx`)
  } else {
    // 2-segment: content/docs/zh/{category}/{slug}.mdx
    filePath = path.join(process.cwd(), 'content', 'docs', 'zh', categorySlug, `${docSlug}.mdx`)
  }

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content, data } = matter(fileContent)
    return { content, frontmatter: data }
  } catch {
    return null
  }
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const [categorySlug, docSlug, childSlug] = slug

  // 验证文档是否存在于配置中
  let docInfo
  let parentInfo
  if (childSlug) {
    docInfo = getDocBySlug(categorySlug, docSlug, childSlug)
    parentInfo = getParentDocBySlug(categorySlug, docSlug)
  } else {
    docInfo = getDocBySlug(categorySlug, docSlug)
  }

  if (!docInfo) {
    notFound()
  }

  // 获取 MDX 内容
  const docContent = await getDocContent(categorySlug, docSlug, childSlug)

  // 获取面包屑和导航信息
  const breadcrumb = getBreadcrumb(categorySlug, docSlug, childSlug)
  const navigation = getNavigation(categorySlug, docSlug, childSlug)

  // 父级视频（子页面继承父级的视频 ID）
  const videoId = childSlug ? parentInfo?.video : docInfo.video

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
      <Breadcrumb items={breadcrumb} />

      <article className="prose prose-gray max-w-none">
        {docContent ? (
          <MDXRemote
            source={docContent.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{docInfo.title}</h1>
            <p className="text-gray-500 mb-4">{docInfo.description}</p>
            <p className="text-sm text-gray-400">文档内容即将上线，敬请期待...</p>
          </div>
        )}
      </article>

      <Feedback />
      <ArticleNav prev={navigation.prev} next={navigation.next} />
    </div>
  )
}
