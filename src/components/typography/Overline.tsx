import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
}

export function Overline({ children, className }: Props) {
  return (
    <span
      className={cn(
        'font-sans text-xs font-medium uppercase tracking-widest text-stone',
        className
      )}
    >
      {children}
    </span>
  )
}
