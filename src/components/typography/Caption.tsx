import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
}

export function Caption({ children, className }: Props) {
  return (
    <span className={cn('font-serif text-sm leading-normal text-stone', className)}>
      {children}
    </span>
  )
}
