/**
 * 文档截图自动化脚本
 *
 * 使用方法:
 * 1. 确保产品服务器运行在 localhost:3001
 * 2. 运行: npx ts-node scripts/capture-screenshots.ts
 *
 * 或使用 Playwright Test:
 * npx playwright test scripts/capture-screenshots.ts
 */

import { test, expect, Page } from '@playwright/test'
import path from 'path'
import fs from 'fs'

// 截图配置
const BASE_URL = 'http://localhost:3001'
const OUTPUT_DIR = path.join(__dirname, '../public/docs/images')
const TENANT = 'qqnails' // 测试租户

// 测试账号
const TEST_ACCOUNTS = {
  admin: { email: 'test.admin@qqnails.com', password: 'test123' },
  manager: { email: 'test.manager@qqnails.com', password: 'test123' },
  employee: { email: 'test.employee@qqnails.com', password: 'test123' },
}

// 截图任务列表
interface ScreenshotTask {
  name: string
  category: 'getting-started' | 'admin' | 'manager' | 'employee'
  url: string
  selector?: string
  waitFor?: string
  actions?: Array<{ type: 'click' | 'fill' | 'wait'; target?: string; value?: string }>
  account?: 'admin' | 'manager' | 'employee'
  viewport?: { width: number; height: number }
}

const screenshotTasks: ScreenshotTask[] = [
  // Getting Started
  {
    name: 'login-page',
    category: 'getting-started',
    url: '/en/qqnails/login',
    selector: 'main',
  },
  {
    name: 'dashboard',
    category: 'getting-started',
    url: '/en/qqnails/admin/dashboard',
    selector: 'main',
    account: 'admin',
  },
  {
    name: 'sidebar-navigation',
    category: 'getting-started',
    url: '/en/qqnails/admin/dashboard',
    selector: '[data-testid="sidebar"], nav',
    account: 'admin',
  },

  // Admin - Store Setup
  {
    name: 'store-list',
    category: 'admin',
    url: '/en/qqnails/stores',
    selector: 'main',
    account: 'admin',
  },
  {
    name: 'store-detail',
    category: 'admin',
    url: '/en/qqnails/stores/1',
    selector: 'main',
    account: 'admin',
  },

  // Admin - Employee Management
  {
    name: 'employee-list',
    category: 'admin',
    url: '/en/qqnails/employees',
    selector: 'main',
    account: 'admin',
  },
  {
    name: 'employee-detail',
    category: 'admin',
    url: '/en/qqnails/employees/1',
    selector: 'main',
    account: 'admin',
  },

  // Admin - Service Management
  {
    name: 'service-list',
    category: 'admin',
    url: '/en/qqnails/services',
    selector: 'main',
    account: 'admin',
  },

  // Admin - Permissions
  {
    name: 'roles-list',
    category: 'admin',
    url: '/en/qqnails/admin/permissions/roles',
    selector: 'main',
    account: 'admin',
  },
  {
    name: 'job-titles',
    category: 'admin',
    url: '/en/qqnails/admin/permissions/job-titles',
    selector: 'main',
    account: 'admin',
  },

  // Admin - Marketing
  {
    name: 'email-templates',
    category: 'admin',
    url: '/en/qqnails/admin/marketing/promotion/email-templates',
    selector: 'main',
    account: 'admin',
  },
  {
    name: 'sms-templates',
    category: 'admin',
    url: '/en/qqnails/admin/marketing/promotion/sms-templates',
    selector: 'main',
    account: 'admin',
  },

  // Admin - Reports
  {
    name: 'sales-report',
    category: 'admin',
    url: '/en/qqnails/reports/sales',
    selector: 'main',
    account: 'admin',
  },
  {
    name: 'profit-report',
    category: 'admin',
    url: '/en/qqnails/reports/profit',
    selector: 'main',
    account: 'admin',
  },

  // Manager - Scheduling
  {
    name: 'schedule-list',
    category: 'manager',
    url: '/en/qqnails/employees/schedules',
    selector: 'main',
    account: 'manager',
  },

  // Manager - Day End Closeout
  {
    name: 'day-end-closeout',
    category: 'manager',
    url: '/en/qqnails/admin/day-end-closeout',
    selector: 'main',
    account: 'manager',
  },

  // Employee - Time Clock
  {
    name: 'time-clock',
    category: 'employee',
    url: '/en/qqnails/employees/time-clock',
    selector: 'main',
    account: 'employee',
  },

  // Employee - Appointments
  {
    name: 'appointment-board',
    category: 'employee',
    url: '/en/qqnails/appointments/board',
    selector: 'main',
    account: 'employee',
  },
  {
    name: 'appointment-realtime',
    category: 'employee',
    url: '/en/qqnails/appointments/realtime',
    selector: 'main',
    account: 'employee',
  },

  // Employee - Checkout
  {
    name: 'checkout-page',
    category: 'employee',
    url: '/en/qqnails/checkout',
    selector: 'main',
    account: 'employee',
  },
]

// 确保输出目录存在
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// 登录函数
async function login(page: Page, account: 'admin' | 'manager' | 'employee') {
  const creds = TEST_ACCOUNTS[account]

  await page.goto(`${BASE_URL}/en/${TENANT}/login`)
  await page.waitForLoadState('networkidle')

  // 填写登录表单
  await page.fill('input[name="email"], input[type="email"]', creds.email)
  await page.fill('input[name="password"], input[type="password"]', creds.password)

  // 点击登录按钮
  await page.click('button[type="submit"]')

  // 等待登录完成
  await page.waitForURL(/\/(dashboard|appointments|stores)/, { timeout: 10000 })
  await page.waitForLoadState('networkidle')
}

// 主测试
test.describe('Documentation Screenshots', () => {
  test.beforeAll(() => {
    // 确保所有输出目录存在
    ensureDir(path.join(OUTPUT_DIR, 'getting-started'))
    ensureDir(path.join(OUTPUT_DIR, 'admin'))
    ensureDir(path.join(OUTPUT_DIR, 'manager'))
    ensureDir(path.join(OUTPUT_DIR, 'employee'))
  })

  // 为每个截图任务创建测试
  for (const task of screenshotTasks) {
    test(`Capture: ${task.category}/${task.name}`, async ({ page }) => {
      // 设置视口
      if (task.viewport) {
        await page.setViewportSize(task.viewport)
      } else {
        await page.setViewportSize({ width: 1440, height: 900 })
      }

      // 登录（如果需要）
      if (task.account) {
        await login(page, task.account)
      }

      // 导航到目标页面
      await page.goto(`${BASE_URL}${task.url}`)
      await page.waitForLoadState('networkidle')

      // 等待特定元素（如果指定）
      if (task.waitFor) {
        await page.waitForSelector(task.waitFor)
      }

      // 执行额外操作（如果有）
      if (task.actions) {
        for (const action of task.actions) {
          switch (action.type) {
            case 'click':
              if (action.target) await page.click(action.target)
              break
            case 'fill':
              if (action.target && action.value) await page.fill(action.target, action.value)
              break
            case 'wait':
              await page.waitForTimeout(parseInt(action.value || '1000'))
              break
          }
        }
      }

      // 等待页面稳定
      await page.waitForTimeout(500)

      // 截图
      const outputPath = path.join(OUTPUT_DIR, task.category, `${task.name}.png`)

      if (task.selector) {
        const element = page.locator(task.selector).first()
        await element.screenshot({ path: outputPath })
      } else {
        await page.screenshot({ path: outputPath, fullPage: false })
      }

      console.log(`✓ Captured: ${task.category}/${task.name}.png`)
    })
  }
})

// 单独运行模式（不使用 Playwright Test）
async function runStandalone() {
  const { chromium } = await import('playwright')

  console.log('Starting screenshot capture...\n')

  // 确保目录存在
  ensureDir(path.join(OUTPUT_DIR, 'getting-started'))
  ensureDir(path.join(OUTPUT_DIR, 'admin'))
  ensureDir(path.join(OUTPUT_DIR, 'manager'))
  ensureDir(path.join(OUTPUT_DIR, 'employee'))

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  })

  let currentAccount: string | null = null
  let page = await context.newPage()

  for (const task of screenshotTasks) {
    try {
      // 如果账号变了，重新登录
      if (task.account && task.account !== currentAccount) {
        await login(page, task.account)
        currentAccount = task.account
      }

      // 导航
      await page.goto(`${BASE_URL}${task.url}`)
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(500)

      // 截图
      const outputPath = path.join(OUTPUT_DIR, task.category, `${task.name}.png`)

      if (task.selector) {
        const element = page.locator(task.selector).first()
        if (await element.count() > 0) {
          await element.screenshot({ path: outputPath })
        } else {
          await page.screenshot({ path: outputPath })
        }
      } else {
        await page.screenshot({ path: outputPath })
      }

      console.log(`✓ ${task.category}/${task.name}.png`)
    } catch (error) {
      console.error(`✗ ${task.category}/${task.name}: ${error}`)
    }
  }

  await browser.close()
  console.log('\nScreenshot capture complete!')
}

// 如果直接运行此文件
if (require.main === module) {
  runStandalone().catch(console.error)
}
