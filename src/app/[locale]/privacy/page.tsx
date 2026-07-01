/**
 * Privacy Policy Page
 *
 * Renders privacy policy from Markdown file with locale support
 */

import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrintButton } from '@/components/Legal/PrintButton';
import { setRequestLocale } from 'next-intl/server';
import '../terms/print.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Celoria',
  description: 'Celoria Privacy Policy - Learn how we collect, use, and protect your personal information, including Google and Meta platform integrations.',
  robots: 'index, follow',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const suffix = locale === 'zh' ? '-zh' : '';
  const filePath = path.join(process.cwd(), `public/legal/privacy-policy${suffix}.md`);

  let content: string;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`Failed to load privacy policy: ${filePath}`, error);
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {locale === 'zh' ? 'Celoria 隐私政策' : 'Celoria Privacy Policy'}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {locale === 'zh' ? '生效日期：2026 年 3 月 20 日' : 'Effective Date: March 20, 2026'}
              </p>
            </div>
            <a
              href={`/${locale}/`}
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              {locale === 'zh' ? '返回首页' : 'Back to Home'}
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Markdown Content */}
          <article className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:my-4 prose-li:my-2 prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-300 prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:px-3 prose-th:py-2 prose-th:bg-gray-50 prose-td:border prose-td:border-gray-300 prose-td:px-3 prose-td:py-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">
              {locale === 'zh' ? '联系我们' : 'Contact Us'}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  {locale === 'zh' ? '客户支持' : 'Customer Support'}
                </h4>
                <p className="text-sm text-gray-600">
                  contact@celoria.ai
                </p>
              </div>
            </div>
          </div>

          {/* Print Button */}
          <div className="mt-8 text-center">
            <PrintButton />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <a href={`/${locale}/terms`} className="hover:text-blue-600 hover:underline mx-2">
            {locale === 'zh' ? '服务条款' : 'Terms of Service'}
          </a>
          <span>|</span>
          <a href={`/${locale}/`} className="hover:text-blue-600 hover:underline mx-2">
            {locale === 'zh' ? '返回首页' : 'Back to Home'}
          </a>
          <span>|</span>
          <a href="mailto:contact@celoria.ai" className="hover:text-blue-600 hover:underline mx-2">
            {locale === 'zh' ? '联系我们' : 'Contact Us'}
          </a>
        </div>
      </main>
    </div>
  );
}
