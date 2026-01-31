import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
}

export function Subheading({ children, className }: Props) {
  return (
    <h3 className={cn('font-serif text-lg md:text-xl leading-snug italic text-stone', className)}>
      {children}
    </h3>
  )
}
