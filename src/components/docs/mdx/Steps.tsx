import { ReactNode } from 'react'

interface StepsProps {
  children: ReactNode
}

export function Steps({ children }: StepsProps) {
  return (
    <div className="steps-container my-6 space-y-6 [&>h3]:flex [&>h3]:items-center [&>h3]:gap-3 [&>h3]:before:flex [&>h3]:before:items-center [&>h3]:before:justify-center [&>h3]:before:w-8 [&>h3]:before:h-8 [&>h3]:before:rounded-full [&>h3]:before:bg-primary-100 [&>h3]:before:text-primary-700 [&>h3]:before:text-sm [&>h3]:before:font-semibold [counter-reset:step] [&>h3]:before:[counter-increment:step] [&>h3]:before:content-[counter(step)]">
      {children}
    </div>
  )
}
