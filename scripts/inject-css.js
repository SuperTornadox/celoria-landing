/**
 * 后处理脚本：为静态导出的 docs HTML 注入 CSS <link> 标签
 * Next.js 静态导出的 docs 页面把 CSS 引用放在 RSC payload 里，
 * 需要 JS hydration 才能加载。这个脚本直接注入 <link> 标签解决这个问题。
 *
 * 用法：npm run build && node scripts/inject-css.js
 */
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const CSS_DIR = path.join(OUT_DIR, '_next', 'static', 'css');

// 找到所有 CSS 文件
const cssFiles = fs.readdirSync(CSS_DIR).filter(f => f.endsWith('.css'));
const linkTags = cssFiles
  .map(f => `<link rel="stylesheet" href="/_next/static/css/${f}"/>`)
  .join('\n');

console.log(`Found ${cssFiles.length} CSS files: ${cssFiles.join(', ')}`);

// 递归找到所有 docs HTML 文件
function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(fullPath));
    } else if (entry.name === 'index.html') {
      results.push(fullPath);
    }
  }
  return results;
}

const docsDir = path.join(OUT_DIR, 'docs');
const htmlFiles = findHtmlFiles(docsDir);
let injected = 0;

for (const file of htmlFiles) {
  let html = fs.readFileSync(file, 'utf-8');

  // 跳过已经有 stylesheet link 的文件
  if (html.includes('rel="stylesheet"')) {
    continue;
  }

  // 在 </head> 或第一个 <script> 前注入 CSS
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${linkTags}\n</head>`);
  } else if (html.includes('<script')) {
    html = html.replace('<script', `${linkTags}\n<script`);
  } else {
    // 在最开头注入
    html = `${linkTags}\n${html}`;
  }

  fs.writeFileSync(file, html);
  injected++;
}

console.log(`Injected CSS into ${injected}/${htmlFiles.length} docs HTML files`);
