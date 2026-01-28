# Celoria AI Landing Page 规划文档

## 项目概述

为 Celoria Corp 创建一个产品介绍网站，展示 Celoria 美甲沙龙管理系统。

## 公司信息

- **公司名称**: Celoria Corp
- **品牌名称**: Celoria AI
- **产品名称**: Celoria
- **行业**: 美甲沙龙连锁管理
- **地址**: 71 University Place, New York, NY 10003

## 业务规模

- 36 家连锁店
- 400,000+ 注册客户
- 266 名员工

## 技术选型

基于现有项目技术栈：
- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **UI组件**: 自建（参考现有 web_app 组件）
- **部署**: 静态导出 (Static Export)

## 页面结构

### 单页面设计 (One-Page Landing)

```
┌─────────────────────────────────────┐
│           Navigation Bar            │
│  Logo | Products | About | Contact  │
├─────────────────────────────────────┤
│                                     │
│            Hero Section             │
│   "智能美甲沙龙管理解决方案"          │
│   [立即了解] [联系我们]              │
│                                     │
├─────────────────────────────────────┤
│                                     │
│          Features Section           │
│   ┌───┐  ┌───┐  ┌───┐  ┌───┐      │
│   │ 1 │  │ 2 │  │ 3 │  │ 4 │      │
│   └───┘  └───┘  └───┘  └───┘      │
│  预约管理 客户管理 员工排班 数据分析  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│          Stats Section              │
│   36家门店 | 40万+客户 | 266员工    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│        Screenshots Section          │
│   产品界面截图展示                   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         Contact Section             │
│   联系表单 / 联系方式                │
│                                     │
├─────────────────────────────────────┤
│              Footer                 │
│   © 2025 Celoria Corp               │
└─────────────────────────────────────┘
```

## 核心功能展示

1. **预约管理系统**
   - 实时预约看板
   - 拖拽式排程
   - 多视图模式

2. **客户关系管理**
   - 客户档案管理
   - 消费历史追踪
   - 会员积分系统

3. **员工管理**
   - 排班管理
   - 绩效追踪
   - 权限控制

4. **智能通知**
   - 短信提醒
   - 预约确认
   - 自动提醒

## 文件结构

```
landingpage/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── spec.md                 # 本文档
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   └── screenshots/
│   │       ├── appointment-board.png
│   │       ├── guest-management.png
│   │       └── employee-management.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Stats.tsx
│       ├── Screenshots.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── README.md
```

## 设计规范

### 颜色方案

```css
/* 主色调 - 专业蓝 */
--primary: #2563eb;
--primary-dark: #1d4ed8;

/* 辅助色 */
--secondary: #64748b;
--accent: #f59e0b;

/* 背景色 */
--background: #ffffff;
--background-alt: #f8fafc;

/* 文字色 */
--text-primary: #0f172a;
--text-secondary: #475569;
```

### 字体

- 标题: Inter / 思源黑体
- 正文: Inter / 思源黑体
- 代码: JetBrains Mono

## 实施步骤

### Phase 1: 项目初始化
1. 创建 Next.js 项目
2. 配置 Tailwind CSS
3. 设置项目结构

### Phase 2: 组件开发
1. Navbar 导航栏
2. Hero 首屏
3. Features 功能介绍
4. Stats 数据统计
5. Screenshots 产品截图
6. Contact 联系方式
7. Footer 页脚

### Phase 3: 内容填充
1. 复制产品截图到 public 目录
2. 编写中英文内容
3. 添加动画效果

### Phase 4: 优化与部署
1. SEO 优化
2. 性能优化
3. 静态导出测试

## 依赖包

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
```

## 预计产出

- 响应式单页面网站
- 支持中英文（可选）
- 静态导出，可部署到任意静态托管服务
- 展示 Celoria 产品的核心功能和规模
