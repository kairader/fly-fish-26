import type { Photo } from '@/data/types'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/shared/FadeIn'

interface Props {
  photos: Photo[]
}

function PhotoCell({ photo, delay, className }: { photo: Photo; delay: number; className?: string }) {
  return (
    <FadeIn delay={delay} className={className}>
      <div className="group/photo relative overflow-hidden rounded-sm bg-parchment h-full">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/photo:scale-[1.02]"
        />
        {photo.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-3 pb-2.5 pt-8">
            <span className="font-serif text-sm leading-normal text-white/90">
              {photo.caption}
            </span>
          </div>
        )}
      </div>
    </FadeIn>
  )
}

export function PhotoGrid({ photos }: Props) {
  if (photos.length < 5) return null

  return (
    <Container className="pb-section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left column — tall image spanning full height of right side */}
        <PhotoCell
          photo={photos[0]}
          delay={0}
        />

        {/* Right 2 columns — 2×2 grid */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <PhotoCell photo={photos[1]} delay={0.08} />
          <PhotoCell photo={photos[2]} delay={0.12} />
          <PhotoCell photo={photos[3]} delay={0.16} />
          <PhotoCell photo={photos[4]} delay={0.20} />
        </div>
      </div>
    </Container>
  )
}
