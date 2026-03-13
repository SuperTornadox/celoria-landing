'use client';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function CalendlyEmbed() {
  if (!CALENDLY_URL) return null;

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Schedule a Demo</h2>
          <p className="mt-3 text-lg text-gray-600">
            Pick a time that works for you and we&apos;ll walk you through the platform.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="660"
            frameBorder="0"
            title="Schedule a demo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
