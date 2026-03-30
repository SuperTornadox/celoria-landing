/**
 * Terms of Service Page
 *
 * Displays the complete Terms of Service including SMS consent agreement
 */

import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrintButton } from '@/components/Legal/PrintButton';
import { setRequestLocale } from 'next-intl/server';
import './print.css';

export const metadata: Metadata = {
  title: 'Terms of Service and SMS Consent Agreement | Celoria',
  description: 'View complete Terms of Service for Celoria, including SMS consent agreement, privacy policy, and user rights.',
  robots: 'index, follow',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Load the locale-aware markdown file
  const suffix = locale === 'zh' ? '-zh' : '';
  const filePath = path.join(process.cwd(), `public/legal/terms-of-service${suffix}.md`);

  // Read the markdown file
  let content: string;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`Failed to load terms file: ${filePath}`, error);
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
                {locale === 'zh' ? 'Celoria 服务条款' : 'Celoria Terms of Service'}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {locale === 'zh' ? '生效日期：2026 年 1 月 28 日' : 'Effective Date: January 28, 2026'}
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
          {/* Important Notice */}
          <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              {locale === 'zh' ? '重要声明' : 'Important Notice'}
            </h2>
            <p className="text-sm text-blue-800">
              {locale === 'zh'
                ? '本协议包含短信同意条款。使用我们的服务即表示您同意接收短信通知。您可以随时回复 STOP 退订。'
                : 'This agreement includes SMS consent terms. By using our services, you consent to receive SMS notifications. You can opt out anytime by replying STOP.'}
            </p>
          </div>

          {/* Markdown Content */}
          <article className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:my-4 prose-li:my-2 prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">
              {locale === 'zh' ? '需要帮助？' : 'Need Help?'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  {locale === 'zh' ? '客户支持' : 'Customer Support'}
                </h4>
                <p className="text-sm text-gray-600">
                  joey@celoria.ai<br />
                  +1 (347) 728-3880
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  {locale === 'zh' ? '公司地址' : 'Business Address'}
                </h4>
                <p className="text-sm text-gray-600">
                  Celoria<br />
                  71 University Pl<br />
                  New York, NY 10003
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              {locale === 'zh' ? '如有法律问题，请咨询持证律师。' : 'For legal questions, please consult a licensed attorney.'}
            </p>
          </div>

          {/* Print Button */}
          <div className="mt-8 text-center">
            <PrintButton />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <a href={`/${locale}/privacy/`} className="hover:text-blue-600 hover:underline mx-2">
            {locale === 'zh' ? '隐私政策' : 'Privacy Policy'}
          </a>
          <span>|</span>
          <a href={`/${locale}/`} className="hover:text-blue-600 hover:underline mx-2">
            {locale === 'zh' ? '返回首页' : 'Back to Home'}
          </a>
          <span>|</span>
          <a href="mailto:joey@celoria.ai" className="hover:text-blue-600 hover:underline mx-2">
            {locale === 'zh' ? '联系我们' : 'Contact Us'}
          </a>
        </div>
      </main>
    </div>
  );
}
