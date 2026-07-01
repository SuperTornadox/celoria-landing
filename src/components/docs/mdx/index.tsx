import { Callout } from './Callout'
import { Steps } from './Steps'
import { FAQ, FAQItem } from './FAQ'
import { Video } from './Video'
import { Screenshot } from './Screenshot'

// MDX 组件映射，用于 MDXRemote
export const mdxComponents = {
  Callout,
  Steps,
  FAQ,
  FAQItem,
  Video,
  Screenshot,
  // 自定义 HTML 元素样式 — 对齐品牌设计系统
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-[var(--ink-900)] mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold text-[var(--ink-900)] mt-8 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-[var(--ink-900)] mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[var(--ink-700)] leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-[var(--ink-700)] mb-4 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-[var(--ink-700)] mb-4 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-[var(--ink-700)]" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[var(--accent-500)] hover:text-[var(--accent-600)] underline underline-offset-2" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-[var(--surface-soft)] text-[var(--ink-900)] px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[var(--ink-900)] text-primary-50 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-[var(--accent-300)] pl-4 italic text-[var(--ink-500)] my-4" {...props} />
  ),
  hr: () => <hr className="border-[var(--line)] my-8" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-[var(--line)]" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--ink-900)] bg-primary-50" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-sm text-[var(--ink-700)] border-t border-[var(--line)]" {...props} />
  ),
}

export { Callout, Steps, FAQ, FAQItem, Video, Screenshot }
