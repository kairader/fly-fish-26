import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  src: string
  alt: string
  className?: string
}

export function ParallaxImage({ src, alt, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={cn('overflow-hidden', className)}>
        <img
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        width={1600}
        height={900}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
      />
    </div>
  )
}
