import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        'inline-block font-sans text-xs font-medium uppercase tracking-wider',
        'px-3 py-1 rounded-full border border-ink/15 text-ink/70',
        className
      )}
    >
      {children}
    </span>
  )
}
