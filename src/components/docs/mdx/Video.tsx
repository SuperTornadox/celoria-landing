interface VideoProps {
  id: string
  title: string
  duration?: string
  src?: string
}

export function Video({ id, title, duration, src }: VideoProps) {
  // 如果有 src，显示实际视频
  if (src) {
    return (
      <div className="my-6">
        <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
          <video
            src={src}
            controls
            className="w-full h-full"
            poster={`/docs/videos/${id}-poster.jpg`}
          >
            您的浏览器不支持视频播放
          </video>
        </div>
        <p className="mt-2 text-sm text-gray-500 text-center">
          {title} {duration && `(${duration})`}
        </p>
      </div>
    )
  }

  // 否则显示视频占位符
  return (
    <div className="my-6">
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">{title}</p>
          {duration && <p className="text-sm text-gray-400 mt-1">{duration}</p>}
          <p className="text-xs text-gray-400 mt-2">视频即将上线</p>
        </div>
      </div>
    </div>
  )
}
