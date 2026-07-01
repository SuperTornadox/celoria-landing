/* eslint-disable @next/next/no-img-element */
interface ScreenshotProps {
  src: string
  alt: string
  caption?: string
}

export function Screenshot({ src, alt, caption }: ScreenshotProps) {
  return (
    <figure className="my-6">
      <div className="relative rounded-lg overflow-hidden border border-[var(--line)] shadow-sm">
        <img
          src={src}
          alt={alt}
          className="w-full"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-[var(--ink-500)] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
