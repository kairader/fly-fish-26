import type { River } from '@/data/types'
import { Badge } from '@/components/shared/Badge'
import { StatRow } from '@/components/shared/StatRow'
import { cn } from '@/lib/cn'

const CARD_COLORS = ['bg-peach', 'bg-sage', 'bg-sky', 'bg-wheat'] as const

interface Props {
  river: River
  index: number
}

export function RiverCard({ river, index }: Props) {
  const bg = CARD_COLORS[index % CARD_COLORS.length]

  return (
    <div className={cn(bg, 'rounded-sm p-6 md:p-8 h-full flex flex-col')}>
      <Badge className="mb-4 self-start">{river.badge}</Badge>

      <h3 className="font-sans text-xl md:text-2xl font-bold text-ink mb-1">
        {river.name}
      </h3>
      <span className="block font-serif text-sm leading-normal text-stone mb-4">
        {river.type}
      </span>

      <p className="font-serif text-base leading-relaxed text-ink/80 mb-6 flex-1">
        {river.description}
      </p>

      <div className="mt-auto">
        <StatRow label="Density" value={river.stats.fishPerMile} />
        <StatRow label="Size" value={river.stats.avgSize} />
        <StatRow label="Method" value={river.stats.method} className="border-b-0" />
      </div>
    </div>
  )
}
