import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ease = [0.25, 0.1, 0.25, 1] as const

export function Cover() {
  const prefersReducedMotion = useReducedMotion()

  const initial = prefersReducedMotion
    ? undefined
    : (y: number) => ({ opacity: 0, y, filter: 'blur(4px)' })

  const animate = prefersReducedMotion
    ? undefined
    : { opacity: 1, y: 0, filter: 'blur(0px)' }

  const t = (delay: number, duration = 0.7) =>
    prefersReducedMotion ? { duration: 0 } : { duration, delay, ease }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpeg"
          alt="Angler holding a wild brown trout over a rocky river"
          className="w-full h-full object-cover"
          width={2800}
          height={1078}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />
      </div>

      {/* Top content */}
      <div className="relative z-10 px-gutter pt-16 md:pt-24 max-w-article mx-auto w-full">
        <motion.span
          initial={initial?.(8)}
          animate={animate}
          transition={t(0.15)}
          className="block font-sans text-xs font-medium uppercase tracking-widest text-white/80 mb-4"
        >
          An Expedition Proposal
        </motion.span>

        <motion.h1
          initial={initial?.(12)}
          animate={animate}
          transition={t(0.3)}
          className="font-sans text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight font-bold text-white mb-4"
        >
          Fly Fish &rsquo;26
        </motion.h1>

        <motion.p
          initial={initial?.(10)}
          animate={animate}
          transition={t(0.45)}
          className="font-serif text-lg md:text-xl leading-snug italic text-white/75 max-w-prose"
        >
          An adventure in the American West
        </motion.p>
      </div>

      {/* Destination cards */}
      <div className="relative z-10 mt-auto px-gutter pb-16 md:pb-24 max-w-article mx-auto w-full">
        <motion.p
          initial={initial?.(8)}
          animate={animate}
          transition={t(0.6, 0.6)}
          className="font-sans text-xs font-medium uppercase tracking-widest text-white/80 mb-6"
        >
          Two options to consider
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={initial?.(12)}
            animate={animate}
            transition={t(0.7)}
          >
            <Link
              to="/wyoming"
              className="group block bg-white/10 backdrop-blur-sm border border-white/15 rounded-sm p-6 md:p-8 hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <span className="block font-sans text-xs font-medium uppercase tracking-widest text-white/80 mb-2">
                Option A
              </span>
              <span className="block font-sans text-3xl md:text-4xl leading-tight tracking-tight font-bold text-white mb-2">
                Wyoming
              </span>
              <span className="block font-serif text-sm leading-normal text-white/65 mb-4">
                Sheridan & The Bighorn Mountains
              </span>
              <span className="inline-flex items-center gap-2 font-sans text-sm leading-normal text-white/70 group-hover:text-white transition-colors">
                Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={initial?.(12)}
            animate={animate}
            transition={t(0.8)}
          >
            <Link
              to="/montana"
              className="group block bg-white/10 backdrop-blur-sm border border-white/15 rounded-sm p-6 md:p-8 hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <span className="block font-sans text-xs font-medium uppercase tracking-widest text-white/80 mb-2">
                Option B
              </span>
              <span className="block font-sans text-3xl md:text-4xl leading-tight tracking-tight font-bold text-white mb-2">
                Montana
              </span>
              <span className="block font-serif text-sm leading-normal text-white/65 mb-4">
                Bozeman, Livingston & Paradise Valley
              </span>
              <span className="inline-flex items-center gap-2 font-sans text-sm leading-normal text-white/70 group-hover:text-white transition-colors">
                Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
