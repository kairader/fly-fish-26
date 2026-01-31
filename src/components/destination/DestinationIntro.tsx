import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/typography/SectionHeading'
import { BodyText } from '@/components/typography/BodyText'
import { FadeIn } from '@/components/shared/FadeIn'

interface Props {
  title: string
  text: string
}

export function DestinationIntro({ title, text }: Props) {
  return (
    <Container className="py-section">
      <FadeIn>
        <SectionHeading className="mb-6">{title}</SectionHeading>
      </FadeIn>
      <FadeIn delay={0.1}>
        <BodyText>{text}</BodyText>
      </FadeIn>
    </Container>
  )
}
