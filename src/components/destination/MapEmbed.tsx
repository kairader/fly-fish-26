import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/shared/FadeIn'

interface Props {
  url: string
  title: string
}

export function MapEmbed({ url, title }: Props) {
  return (
    <Container className="py-section">
      <FadeIn>
        <div className="aspect-video w-full overflow-hidden rounded-sm border border-rule">
          <iframe
            src={url}
            title={title}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeIn>
    </Container>
  )
}
