import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celoria - AI Agents for Salon Chains',
  description: 'AI agents for salon chains. Automate the data work. Focus on what matters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
