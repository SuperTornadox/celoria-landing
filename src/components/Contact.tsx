'use client';

import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!EMAIL_REGEX.test(email)) errors.email = 'Please enter a valid email';
    if (!PHONE_REGEX.test(phone)) errors.phone = 'Please enter a valid phone number';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch(`${API_URL}/api/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim(), message: message.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || data?.errors?.join(', ') || 'Request failed');
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-lg border border-[var(--line)] bg-white focus:ring-2 focus:ring-[var(--accent-300)] focus:border-[var(--accent-500)] outline-none transition';
  const errorCls = 'text-red-500 text-xs mt-1';

  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--ink-500)] mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl text-[var(--ink-900)] mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-[var(--ink-700)] mb-8">
              Want to learn more about Celoria AI? Our team is ready to answer your questions
              and arrange a product demo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[var(--surface-soft)] rounded-lg flex items-center justify-center text-[var(--accent-600)] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--ink-900)]">Address</h3>
                  <p className="text-[var(--ink-700)]">71 University Place<br />New York, NY 10003</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[var(--surface-soft)] rounded-lg flex items-center justify-center text-[var(--accent-600)] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--ink-900)]">Company</h3>
                  <p className="text-[var(--ink-700)]">Celoria Corp</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[var(--surface-soft)] rounded-lg flex items-center justify-center text-[var(--accent-600)] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--ink-900)]">Email</h3>
                  <p className="text-[var(--ink-700)]">contact@celoria.ai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 shadow-[0_30px_60px_-44px_rgba(31,27,22,0.9)]">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl text-[var(--ink-900)] mb-2">Thank You!</h3>
                <p className="text-[var(--ink-700)]">
                  We&apos;ve received your request and will be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl text-[var(--ink-900)] mb-6">Book a Demo</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-[var(--ink-700)] mb-1">Name</label>
                    <input type="text" className={inputCls} placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
                    {fieldErrors.name && <p className={errorCls}>{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--ink-700)] mb-1">Phone</label>
                    <input type="tel" className={inputCls} placeholder="Enter your phone number" value={phone} onChange={e => setPhone(e.target.value)} />
                    {fieldErrors.phone && <p className={errorCls}>{fieldErrors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--ink-700)] mb-1">Email</label>
                    <input type="email" className={inputCls} placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} />
                    {fieldErrors.email && <p className={errorCls}>{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--ink-700)] mb-1">Message</label>
                    <textarea rows={4} className={`${inputCls} resize-none`} placeholder="Briefly describe your needs" value={message} onChange={e => setMessage(e.target.value)} />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[var(--accent-500)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--accent-600)] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
