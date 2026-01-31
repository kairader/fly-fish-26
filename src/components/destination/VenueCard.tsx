import type { Venue } from '@/data/types'
import { Overline } from '@/components/typography/Overline'

interface Props {
  venue: Venue
}

const TYPE_LABELS: Record<Venue['type'], string> = {
  restaurant: 'Restaurant',
  brewery: 'Brewery',
  bar: 'Bar',
  hotel: 'Hotel',
}

export function VenueCard({ venue }: Props) {
  return (
    <div className="py-6 border-t border-rule">
      <Overline className="block mb-2">
        {TYPE_LABELS[venue.type]}
        {venue.location && ` · ${venue.location}`}
      </Overline>
      <h4 className="font-sans text-lg font-bold text-ink mb-2">
        {venue.name}
      </h4>
      <p className="font-serif text-sm text-ink/75 leading-relaxed">
        {venue.description}
      </p>
    </div>
  )
}
