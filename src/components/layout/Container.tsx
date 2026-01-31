import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: Props) {
  return (
    <div className={cn('max-w-article mx-auto px-gutter', className)}>
      {children}
    </div>
  )
}
