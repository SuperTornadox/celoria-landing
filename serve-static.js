/**
 * 简单的静态文件服务器，正确处理 Next.js 静态导出的目录路由
 * 替代 `npx serve -s` 解决 docs 路由问题
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3004;
const ROOT = path.join(__dirname, 'out');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
};

function tryFile(filePath) {
  try {
    if (fs.statSync(filePath).isFile()) return filePath;
  } catch {}
  return null;
}

function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const safePath = path.normalize(decoded).replace(/^(\.\.[\/\\])+/, '');
  const fullPath = path.join(ROOT, safePath);

  // 1. 精确文件匹配
  const exact = tryFile(fullPath);
  if (exact) return exact;

  // 2. 目录 → index.html
  const indexPath = tryFile(path.join(fullPath, 'index.html'));
  if (indexPath) return indexPath;

  // 3. 去掉尾部斜杠再试
  if (safePath.endsWith('/')) {
    const withoutSlash = safePath.slice(0, -1);
    const idx = tryFile(path.join(ROOT, withoutSlash, 'index.html'));
    if (idx) return idx;
  }

  return null;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let filePath = resolveFile(url.pathname);

  // Fallback: 英文 landing page（不是 Next.js 的错误重定向容器）
  if (!filePath) {
    filePath = path.join(ROOT, 'en', 'index.html');
  }

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000',
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`📖 Help Center running at http://localhost:${PORT}`);
  console.log(`   Docs: http://localhost:${PORT}/docs/`);
});
