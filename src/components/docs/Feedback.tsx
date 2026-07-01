'use client'

import { useState } from 'react'

export function Feedback() {
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type)
    setSubmitted(true)
    // 这里可以添加实际的反馈提交逻辑
    // 例如发送到后端 API 或 Analytics
  }

  if (submitted) {
    return (
      <div className="mt-12 pt-6 border-t border-[var(--line)]">
        <p className="text-center text-[var(--ink-500)]">
          感谢您的反馈！
        </p>
      </div>
    )
  }

  return (
    <div className="mt-12 pt-6 border-t border-[var(--line)]">
      <p className="text-center text-[var(--ink-500)] mb-4">这篇文章有帮助吗？</p>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => handleFeedback('helpful')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            feedback === 'helpful'
              ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
              : 'border-[var(--line)] hover:border-emerald-400 hover:bg-emerald-50/50'
          }`}
        >
          <span>👍</span>
          <span>有帮助</span>
        </button>
        <button
          onClick={() => handleFeedback('not-helpful')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            feedback === 'not-helpful'
              ? 'border-amber-500 bg-amber-50 text-amber-700'
              : 'border-[var(--line)] hover:border-amber-400 hover:bg-amber-50/50'
          }`}
        >
          <span>👎</span>
          <span>需要改进</span>
        </button>
      </div>
    </div>
  )
}
