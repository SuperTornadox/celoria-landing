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
      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-center text-gray-600">
          感谢您的反馈！
        </p>
      </div>
    )
  }

  return (
    <div className="mt-12 pt-6 border-t border-gray-200">
      <p className="text-center text-gray-600 mb-4">这篇文章有帮助吗？</p>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => handleFeedback('helpful')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            feedback === 'helpful'
              ? 'border-green-500 bg-green-50 text-green-700'
              : 'border-gray-200 hover:border-green-500 hover:bg-green-50'
          }`}
        >
          <span>👍</span>
          <span>有帮助</span>
        </button>
        <button
          onClick={() => handleFeedback('not-helpful')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            feedback === 'not-helpful'
              ? 'border-orange-500 bg-orange-50 text-orange-700'
              : 'border-gray-200 hover:border-orange-500 hover:bg-orange-50'
          }`}
        >
          <span>👎</span>
          <span>需要改进</span>
        </button>
      </div>
    </div>
  )
}
