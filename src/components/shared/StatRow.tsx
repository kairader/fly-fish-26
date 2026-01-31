import { cn } from '@/lib/cn'

interface Props {
  label: string
  value: string
  className?: string
}

export function StatRow({ label, value, className }: Props) {
  return (
    <div className={cn('flex justify-between items-baseline py-2 border-b border-ink/10', className)}>
      <span className="font-sans text-sm font-medium leading-normal uppercase tracking-wider text-stone">
        {label}
      </span>
      <span className="font-serif text-sm leading-normal text-ink" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </span>
    </div>
  )
}
