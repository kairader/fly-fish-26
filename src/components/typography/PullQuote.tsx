import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
}

export function PullQuote({ children, className }: Props) {
  return (
    <blockquote
      className={cn(
        'font-serif text-xl md:text-2xl lg:text-3xl leading-snug italic text-stone',
        'border-t border-b border-rule py-8 my-12',
        className
      )}
    >
      {children}
    </blockquote>
  )
}
