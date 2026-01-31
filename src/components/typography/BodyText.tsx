import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
}

export function BodyText({ children, className }: Props) {
  return (
    <p className={cn('font-serif text-base leading-relaxed text-ink/85 max-w-prose', className)}>
      {children}
    </p>
  )
}
