import { cn } from '@/lib/cn'

interface Props {
  className?: string
}

export function Rule({ className }: Props) {
  return <hr className={cn('border-0 border-t border-rule', className)} />
}
