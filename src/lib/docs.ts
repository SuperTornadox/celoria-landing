export interface DocItem {
  title: string
  slug: string
  description?: string
  order: number
  video?: string
  children?: DocItem[]
}

export interface DocCategory {
  title: string
  slug: string
  description: string
  icon: string
  order: number
  items: DocItem[]
}

export const docsConfig: DocCategory[] = [
  {
    title: '快速开始',
    slug: 'getting-started',
    description: '快速了解 Celoria 并开始使用',
    icon: '🚀',
    order: 0,
    items: [
      { title: '产品概览', slug: 'overview', description: '了解 Celoria 是什么', order: 0 },
      { title: '登录与导航', slug: 'login', description: '登录系统并熟悉界面', order: 1, video: 'V01' },
      { title: '核心概念', slug: 'concepts', description: '理解系统中的核心概念', order: 2 },
    ],
  },
  {
    title: '管理员指南',
    slug: 'admin',
    description: '系统配置和管理功能',
    icon: '👔',
    order: 1,
    items: [
      { title: '门店设置', slug: 'store-setup', description: '创建和配置门店', order: 0, video: 'V02' },
      { title: '员工管理', slug: 'employee-management', description: '添加和管理员工', order: 1, video: 'V03' },
      { title: '服务配置', slug: 'service-management', description: '配置服务项目', order: 2 },
      {
        title: '权限管理', slug: 'permissions', description: '角色和权限设置', order: 3, video: 'V04',
        children: [
          { title: '系统角色', slug: 'roles', order: 0 },
          { title: '职位管理', slug: 'job-titles', order: 1 },
          { title: '权限详解', slug: 'permission-details', order: 2 },
          { title: '门店访问范围', slug: 'store-scope', order: 3 },
        ],
      },
      {
        title: '营销功能', slug: 'marketing', description: '营销工具使用指南', order: 4, video: 'V05',
        children: [
          { title: '促销活动', slug: 'promotions', order: 0 },
          { title: '短信营销', slug: 'sms', order: 1 },
          { title: '邮件营销', slug: 'email', order: 2 },
          { title: '自动化营销', slug: 'automation', order: 3 },
          { title: '优惠券', slug: 'coupons', order: 4 },
        ],
      },
      {
        title: '报表分析', slug: 'reports', description: '查看各类报表', order: 5, video: 'V06',
        children: [
          { title: '销售报表', slug: 'sales', order: 0 },
          { title: '员工绩效', slug: 'performance', order: 1 },
          { title: '利润报表', slug: 'profit', order: 2 },
          { title: '运营报表', slug: 'operational', order: 3 },
          { title: '导出报表', slug: 'export', order: 4 },
        ],
      },
      {
        title: '会员体系', slug: 'membership', description: '会员等级和积分', order: 6,
        children: [
          { title: '会员等级', slug: 'levels', order: 0 },
          { title: '积分系统', slug: 'points', order: 1 },
          { title: '礼品卡', slug: 'gift-cards', order: 2 },
          { title: '储值管理', slug: 'balance', order: 3 },
        ],
      },
    ],
  },
  {
    title: '经理指南',
    slug: 'manager',
    description: '日常运营和团队管理',
    icon: '📋',
    order: 2,
    items: [
      { title: '日常运营流程', slug: 'daily-operations', description: '一天的工作流程', order: 0, video: 'V07' },
      { title: '员工排班', slug: 'scheduling', description: '创建和管理排班', order: 1, video: 'V08' },
      {
        title: '日结关账', slug: 'day-end-closeout', description: '每日关账流程', order: 2, video: 'V09',
        children: [
          { title: '日结准备', slug: 'preparation', order: 0 },
          { title: '日结流程', slug: 'process', order: 1 },
          { title: '日结报表', slug: 'report', order: 2 },
          { title: '小费分配', slug: 'tips-distribution', order: 3 },
          { title: '历史记录', slug: 'history', order: 4 },
        ],
      },
      { title: '团队管理', slug: 'team-management', description: '业绩和小费管理', order: 3 },
    ],
  },
  {
    title: '员工指南',
    slug: 'employee',
    description: '前台操作和收银流程',
    icon: '💅',
    order: 3,
    items: [
      { title: '打卡考勤', slug: 'time-clock', description: 'PIN码打卡操作', order: 0 },
      { title: '签到接待', slug: 'checkin', description: '客人签到流程', order: 1, video: 'V10' },
      { title: '预约操作', slug: 'appointments', description: '预约管理操作', order: 2, video: 'V11' },
      {
        title: '收银结账', slug: 'checkout', description: '收银和支付操作', order: 3, video: 'V12',
        children: [
          { title: '结账流程', slug: 'process', order: 0 },
          { title: '支付方式', slug: 'payment-methods', order: 1 },
          { title: '小费处理', slug: 'tips', order: 2 },
          { title: '特殊情况', slug: 'special-cases', order: 3 },
        ],
      },
    ],
  },
  {
    title: '参考资料',
    slug: 'reference',
    description: '术语表和常见问题',
    icon: '📚',
    order: 4,
    items: [
      { title: '术语表', slug: 'glossary', description: '系统术语解释', order: 0 },
      { title: '常见问题', slug: 'faq', description: '常见问题解答', order: 1 },
      { title: '快捷键', slug: 'shortcuts', description: '键盘快捷操作', order: 2 },
    ],
  },
]

export interface FlatDoc {
  category: DocCategory
  doc: DocItem
  parent?: DocItem
}

/**
 * 查找文档 - 支持 2 段 (category/doc) 和 3 段 (category/parent/child)
 */
export function getDocBySlug(categorySlug: string, docSlug: string, childSlug?: string): DocItem | undefined {
  const category = docsConfig.find((c) => c.slug === categorySlug)
  if (!category) return undefined

  const item = category.items.find((i) => i.slug === docSlug)
  if (!item) return undefined

  if (childSlug) {
    return item.children?.find((c) => c.slug === childSlug)
  }

  // If item has children, it's not a leaf page itself
  if (item.children) return undefined

  return item
}

/**
 * 查找父级文档项（用于有 children 的项目）
 */
export function getParentDocBySlug(categorySlug: string, parentSlug: string): DocItem | undefined {
  const category = docsConfig.find((c) => c.slug === categorySlug)
  if (!category) return undefined
  const item = category.items.find((i) => i.slug === parentSlug)
  return item?.children ? item : undefined
}

export function getCategoryBySlug(slug: string): DocCategory | undefined {
  return docsConfig.find((c) => c.slug === slug)
}

/**
 * 展开所有文档为扁平列表，children 展开为独立条目
 */
export function getAllDocs(): FlatDoc[] {
  const docs: FlatDoc[] = []
  for (const category of docsConfig) {
    for (const doc of category.items) {
      if (doc.children) {
        for (const child of doc.children) {
          docs.push({ category, doc: child, parent: doc })
        }
      } else {
        docs.push({ category, doc })
      }
    }
  }
  return docs
}

/**
 * 获取文档的 URL 路径
 */
export function getDocHref(flatDoc: FlatDoc): string {
  if (flatDoc.parent) {
    return `/docs/${flatDoc.category.slug}/${flatDoc.parent.slug}/${flatDoc.doc.slug}`
  }
  return `/docs/${flatDoc.category.slug}/${flatDoc.doc.slug}`
}

export function getNavigation(
  categorySlug: string,
  docSlug: string,
  childSlug?: string
): {
  prev?: { category: string; slug: string; doc: DocItem; parent?: DocItem }
  next?: { category: string; slug: string; doc: DocItem; parent?: DocItem }
} {
  const allDocs = getAllDocs()

  const currentIndex = allDocs.findIndex((d) => {
    if (childSlug) {
      return d.category.slug === categorySlug && d.parent?.slug === docSlug && d.doc.slug === childSlug
    }
    return d.category.slug === categorySlug && d.doc.slug === docSlug && !d.parent
  })

  const mapEntry = (entry: FlatDoc) => ({
    category: entry.category.slug,
    slug: entry.parent ? `${entry.parent.slug}/${entry.doc.slug}` : entry.doc.slug,
    doc: entry.doc,
    parent: entry.parent,
  })

  return {
    prev: currentIndex > 0 ? mapEntry(allDocs[currentIndex - 1]) : undefined,
    next: currentIndex < allDocs.length - 1 ? mapEntry(allDocs[currentIndex + 1]) : undefined,
  }
}

export function getBreadcrumb(
  categorySlug: string,
  docSlug: string,
  childSlug?: string
): Array<{ title: string; href: string }> {
  const breadcrumb = [{ title: '帮助中心', href: '/docs' }]

  const category = getCategoryBySlug(categorySlug)
  if (category) {
    breadcrumb.push({ title: category.title, href: `/docs/${category.slug}` })

    if (childSlug) {
      const parent = getParentDocBySlug(categorySlug, docSlug)
      if (parent) {
        breadcrumb.push({ title: parent.title, href: `/docs/${categorySlug}/${docSlug}/${parent.children![0].slug}` })
        const child = parent.children!.find((c) => c.slug === childSlug)
        if (child) {
          breadcrumb.push({ title: child.title, href: `/docs/${categorySlug}/${docSlug}/${childSlug}` })
        }
      }
    } else {
      const doc = getDocBySlug(categorySlug, docSlug)
      if (doc) {
        breadcrumb.push({ title: doc.title, href: `/docs/${categorySlug}/${docSlug}` })
      }
    }
  }

  return breadcrumb
}

// 热门文章
export const popularDocs = [
  { category: 'getting-started', slug: 'login', title: '登录与导航' },
  { category: 'employee', slug: 'appointments', title: '预约操作' },
  { category: 'employee', slug: 'checkout/process', title: '结账流程' },
  { category: 'manager', slug: 'day-end-closeout/preparation', title: '日结关账' },
]
