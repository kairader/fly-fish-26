import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'none'
}

export function FadeIn({ children, className, delay = 0, direction = 'up' }: Props) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className ? cn(className) : undefined}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 12 : 0, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className ? cn(className) : undefined}
    >
      {children}
    </motion.div>
  )
}
