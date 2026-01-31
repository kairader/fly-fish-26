import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  as?: 'h2' | 'h3'
  className?: string
}

export function SectionHeading({ children, as: Tag = 'h2', className }: Props) {
  return (
    <Tag className={cn('font-sans text-3xl md:text-4xl leading-tight tracking-tight font-bold text-ink', className)}>
      {children}
    </Tag>
  )
}
