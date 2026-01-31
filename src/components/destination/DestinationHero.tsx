import { motion, useReducedMotion } from 'motion/react'
import { ParallaxImage } from '@/components/shared/ParallaxImage'

interface Props {
  image: string
  name: string
  region: string
}

const ease = [0.25, 0.1, 0.25, 1] as const

export function DestinationHero({ image, name, region }: Props) {
  const prefersReducedMotion = useReducedMotion()

  const initial = prefersReducedMotion
    ? undefined
    : (y: number) => ({ opacity: 0, y, filter: 'blur(4px)' })

  const animate = prefersReducedMotion
    ? undefined
    : { opacity: 1, y: 0, filter: 'blur(0px)' }

  const t = (delay: number) =>
    prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay, ease }

  return (
    <div className="relative h-[70vh] min-h-[400px]">
      <ParallaxImage
        src={image}
        alt={`${name} landscape`}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 px-gutter pb-12 md:pb-16 max-w-article mx-auto">
        <motion.span
          initial={initial?.(8)}
          animate={animate}
          transition={t(0.2)}
          className="block font-sans text-xs font-medium uppercase tracking-widest text-white/80 mb-3"
        >
          {region}
        </motion.span>
        <motion.h1
          initial={initial?.(12)}
          animate={animate}
          transition={t(0.35)}
          className="font-sans text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight font-bold text-white"
        >
          {name}
        </motion.h1>
      </div>
    </div>
  )
}
