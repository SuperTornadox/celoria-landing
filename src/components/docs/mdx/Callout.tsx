import { ReactNode } from 'react'

type CalloutType = 'info' | 'warning' | 'error' | 'success' | 'tip'

interface CalloutProps {
  type?: CalloutType
  children: ReactNode
}

const styles: Record<CalloutType, { bg: string; border: string; icon: string; text: string }> = {
  info: {
    bg: 'bg-blue-50/80',
    border: 'border-blue-200/60',
    icon: 'ℹ️',
    text: 'text-blue-800',
  },
  warning: {
    bg: 'bg-amber-50/80',
    border: 'border-amber-200/60',
    icon: '⚠️',
    text: 'text-amber-800',
  },
  error: {
    bg: 'bg-red-50/80',
    border: 'border-red-200/60',
    icon: '❌',
    text: 'text-red-800',
  },
  success: {
    bg: 'bg-emerald-50/80',
    border: 'border-emerald-200/60',
    icon: '✅',
    text: 'text-emerald-800',
  },
  tip: {
    bg: 'bg-primary-50/80',
    border: 'border-primary-200/60',
    icon: '💡',
    text: 'text-primary-800',
  },
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const style = styles[type]

  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-4 my-4`}>
      <div className={`flex items-start gap-3 ${style.text}`}>
        <span className="flex-shrink-0 text-lg">{style.icon}</span>
        <div className="prose-sm">{children}</div>
      </div>
    </div>
  )
}
