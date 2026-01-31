import type { Destination } from '@/data/types'
import { DestinationHero } from './DestinationHero'
import { DestinationIntro } from './DestinationIntro'
import { PhotoGrid } from './PhotoGrid'
import { RiverGrid } from './RiverGrid'
import { TownSection } from './TownSection'
import { LogisticsPanel } from './LogisticsPanel'
import { MapEmbed } from './MapEmbed'
import { OutfitterInfo } from './OutfitterInfo'

interface Props {
  destination: Destination
}

export function DestinationSection({ destination }: Props) {
  return (
    <main id="main-content">
      <DestinationHero
        image={destination.heroImage}
        name={destination.name}
        region={destination.region}
      />

      <DestinationIntro
        title={destination.introTitle}
        text={destination.introText}
      />

      <PhotoGrid photos={destination.photos} />

      <RiverGrid rivers={destination.rivers} />

      <TownSection
        townName={destination.townName}
        description={destination.townDescription}
        venues={destination.venues}
      />

      <LogisticsPanel logistics={destination.logistics} />

      <MapEmbed
        url={destination.logistics.mapEmbedUrl}
        title={`Map of ${destination.region}`}
      />

      <OutfitterInfo outfitter={destination.outfitter} />
    </main>
  )
}
