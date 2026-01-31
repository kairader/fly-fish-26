import { Container } from '@/components/layout/Container'
import { DisplayHeading } from '@/components/typography/DisplayHeading'
import { BodyText } from '@/components/typography/BodyText'
import { FadeIn } from '@/components/shared/FadeIn'
import { Rule } from '@/components/layout/Rule'

export function Closing() {
  return (
    <section className="bg-wheat py-section">
      <Container>
        <Rule className="mb-section" />
        <FadeIn>
          <DisplayHeading className="mb-6">
            Two Rivers. One Summer.
          </DisplayHeading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <BodyText className="mb-8 text-ink/80">
            Wyoming is raw, uncrowded, and real. Montana is iconic water and
            legendary rivers. Either way: trout, mountains, cold beer, and some
            of the best country in America.
          </BodyText>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="font-serif text-lg md:text-xl leading-snug italic text-stone">
            Let's pick one and go.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
