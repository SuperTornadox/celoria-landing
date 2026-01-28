/**
 * Privacy Policy Page (Placeholder)
 *
 * This is a placeholder page for the Privacy Policy
 * The actual privacy policy document needs to be created
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Celoria',
  description: 'Celoria Privacy Policy - Learn how we collect, use, and protect your personal information.',
  robots: 'index, follow',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Celoria Privacy Policy
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Coming Soon
              </p>
            </div>
            <a
              href="/"
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Placeholder Notice */}
          <div className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <h2 className="text-lg font-semibold text-yellow-900 mb-2">
              🚧 Privacy Policy Coming Soon
            </h2>
            <p className="text-sm text-yellow-800">
              We are currently preparing our comprehensive Privacy Policy document.
              Please check back soon or contact us at{' '}
              <a href="mailto:joey@celoria.ai" className="underline hover:text-yellow-900">
                joey@celoria.ai
              </a>{' '}
              for any privacy-related questions.
            </p>
          </div>

          {/* Temporary Content */}
          <div className="prose prose-slate max-w-none">
            <h2>What We'll Cover</h2>
            <p>
              Our Privacy Policy will explain:
            </p>
            <ul>
              <li>What information we collect and why</li>
              <li>How we use and protect your data</li>
              <li>Your privacy rights and choices</li>
              <li>How we handle SMS/text messaging data</li>
              <li>Cookie and tracking policies</li>
              <li>Data sharing and third-party services</li>
              <li>How to contact us about privacy concerns</li>
            </ul>

            <h2>In the Meantime</h2>
            <p>
              For immediate privacy questions or concerns, please reach out to our team:
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Customer Support
                </h4>
                <p className="text-sm text-gray-600">
                  📧 joey@celoria.ai<br />
                  📞 +1 (347) 728-3880
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Business Address
                </h4>
                <p className="text-sm text-gray-600">
                  Celoria<br />
                  71 University Pl<br />
                  New York, NY 10003
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <a href="/terms" className="hover:text-blue-600 hover:underline mx-2">
            Terms of Service
          </a>
          <span>|</span>
          <a href="/" className="hover:text-blue-600 hover:underline mx-2">
            Back to Home
          </a>
          <span>|</span>
          <a href="mailto:joey@celoria.ai" className="hover:text-blue-600 hover:underline mx-2">
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
