import type { River } from '@/data/types'
import { Container } from '@/components/layout/Container'
import { RiverCard } from './RiverCard'
import { Overline } from '@/components/typography/Overline'
import { FadeIn } from '@/components/shared/FadeIn'

interface Props {
  rivers: River[]
}

export function RiverGrid({ rivers }: Props) {
  return (
    <section className="bg-parchment py-section">
      <Container>
        <FadeIn>
          <Overline className="block mb-8">The Rivers</Overline>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {rivers.map((river, i) => (
            <FadeIn key={river.name} delay={i * 0.1} className="flex">
              <RiverCard river={river} index={i} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
