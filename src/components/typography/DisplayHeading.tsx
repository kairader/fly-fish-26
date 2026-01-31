import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
}

export function DisplayHeading({ children, className }: Props) {
  return (
    <h1 className={cn('font-sans text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight font-bold text-ink', className)}>
      {children}
    </h1>
  )
}
