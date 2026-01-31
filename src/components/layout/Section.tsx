import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  bg?: string
  id?: string
  className?: string
}

export function Section({ children, bg = 'bg-cream', id, className }: Props) {
  return (
    <section id={id} className={cn(bg, 'py-section', className)}>
      {children}
    </section>
  )
}
