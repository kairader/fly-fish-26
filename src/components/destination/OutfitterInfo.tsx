import type { Outfitter } from '@/data/types'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/typography/SectionHeading'
import { BodyText } from '@/components/typography/BodyText'
import { Overline } from '@/components/typography/Overline'
import { Badge } from '@/components/shared/Badge'
import { FadeIn } from '@/components/shared/FadeIn'
import { Rule } from '@/components/layout/Rule'
import { ExternalLink } from 'lucide-react'

interface Props {
  outfitter: Outfitter
}

export function OutfitterInfo({ outfitter }: Props) {
  return (
    <Container className="py-section">
      <Rule className="mb-section" />
      <FadeIn>
        <Overline className="block mb-4">Your Guide</Overline>
        <SectionHeading as="h3" className="mb-6">
          {outfitter.name}
        </SectionHeading>
      </FadeIn>
      <FadeIn delay={0.1}>
        <BodyText className="mb-6">{outfitter.description}</BodyText>
        {outfitter.url && (
          <a
            href={outfitter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium leading-normal text-river hover:text-river/80 transition-colors mb-8 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-river focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Visit {outfitter.name}
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="flex flex-wrap gap-3">
          {outfitter.services.map((service) => (
            <Badge key={service}>{service}</Badge>
          ))}
        </div>
      </FadeIn>
    </Container>
  )
}
