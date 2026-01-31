export interface River {
  name: string
  type: string
  badge: string
  description: string
  stats: {
    fishPerMile: string
    avgSize: string
    method: string
  }
}

export interface Venue {
  name: string
  type: 'restaurant' | 'brewery' | 'bar' | 'hotel'
  location?: string
  description: string
}

export interface Logistics {
  flights: string
  gettingAround: string
  whereToStay: string
  bestTime: string
  mapEmbedUrl: string
}

export interface Outfitter {
  name: string
  description: string
  services: string[]
  url?: string
}

export interface Photo {
  src: string
  alt: string
  caption?: string
}

export interface Destination {
  id: 'wyoming' | 'montana'
  name: string
  region: string
  introTitle: string
  introText: string
  heroImage: string
  photos: Photo[]
  rivers: River[]
  townName: string
  townDescription: string
  venues: Venue[]
  logistics: Logistics
  outfitter: Outfitter
}
