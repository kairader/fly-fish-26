import type { Venue } from '@/data/types'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/typography/SectionHeading'
import { BodyText } from '@/components/typography/BodyText'
import { VenueCard } from './VenueCard'
import { FadeIn } from '@/components/shared/FadeIn'
import { Overline } from '@/components/typography/Overline'

interface Props {
  townName: string
  description: string
  venues: Venue[]
}

export function TownSection({ townName, description, venues }: Props) {
  return (
    <Container className="py-section">
      <FadeIn>
        <Overline className="block mb-4">After the Water</Overline>
        <SectionHeading className="mb-6">{townName}</SectionHeading>
      </FadeIn>
      <FadeIn delay={0.1}>
        <BodyText className="mb-12">{description}</BodyText>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {venues.map((venue, i) => (
          <FadeIn key={venue.name} delay={0.1 + i * 0.08}>
            <VenueCard venue={venue} />
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
