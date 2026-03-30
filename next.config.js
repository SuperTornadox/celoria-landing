const createMDX = require('@next/mdx')
const createNextIntlPlugin = require('next-intl/plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

module.exports = withNextIntl(withMDX(nextConfig))
