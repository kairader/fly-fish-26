import type { Destination } from './types'

export const wyoming: Destination = {
  id: 'wyoming',
  name: 'Wyoming',
  region: 'Sheridan & The Bighorn Mountains',
  introTitle: 'The Wyoming Nobody Talks About',
  introText:
    'Wyoming means Yellowstone crowds and Jackson Hole prices to most people. But against the Bighorn Mountains, there\u2019s a fly fishing scene that\u2019s stayed off the radar. Sheridan still feels like the Old West — ranchers in pearl snaps, bars with taxidermy on the walls, a main street you can walk end to end in ten minutes. The fishing? Private water access, open meadows packed with eager trout, and the Bighorn River two hours south. This is fly fishing before it got curated for Instagram. Raw, uncrowded, loaded with fish.',
  heroImage: '/wy-hero.jpg',
  photos: [
    {
      src: '/wy-grid-1.jpg',
      alt: 'Alpine meadow with winding creek and snow-capped Bighorn peaks',
      caption: 'High country beneath Cloud Peak \u2014 Bighorn National Forest',
    },
    {
      src: '/wy-grid-2.jpg',
      alt: 'Two anglers fishing a creek below sandstone bluffs',
      caption: 'Private water on the South Tongue',
    },
    {
      src: '/wy-grid-3.jpg',
      alt: 'Drift boat on clear river with angler casting',
      caption: 'Float fishing the Bighorn River',
    },
    {
      src: '/wy-grid-4.jpg',
      alt: 'Fly Shop of the Bighorns storefront at dusk on Main Street',
      caption: 'Fly Shop of the Bighorns \u2014 downtown Sheridan',
    },
    {
      src: '/wy-grid-5.jpg',
      alt: 'Red hills and green valley with creek winding through open range',
      caption: 'Open range beneath the Bighorns',
    },
  ],
  rivers: [
    {
      name: 'South Tongue River',
      type: 'Freestone stream, private water available',
      badge: 'Beginner Friendly',
      description:
        'Open meadow sections with clear sight lines and forgiving casts. The Fly Shop of the Bighorns has private access to stretches that rarely see another angler. Room to learn, room to mess up, and fish that don\u2019t know any better.',
      stats: {
        fishPerMile: '12–16" avg trout',
        avgSize: 'Rainbow primary',
        method: 'Wade fishing',
      },
    },
    {
      name: 'Bighorn River',
      type: 'Tailwater, float trip',
      badge: 'Trophy Water',
      description:
        'One of the most productive trout rivers in North America. The stretch near Thermopolis cuts through red rock canyons, holding browns and rainbows averaging 16–20 inches. Less famous than the Montana section. Just as good. A fraction of the boats.',
      stats: {
        fishPerMile: '3,000+ fish/mile',
        avgSize: '16–20" avg',
        method: 'Float fishing',
      },
    },
  ],
  townName: 'Sheridan, Wyoming',
  townDescription:
    'Sheridan isn\u2019t trying to be anything. A working ranching town at 3,700 feet, backed by mountains, with brick storefronts, saddleries, and bars that have poured whiskey since Prohibition ended. After a day on the water: walk to dinner, hit a brewery, end up somewhere the locals actually drink. No velvet ropes. No $18 cocktails. Cold beer, good food, loud stories.',
  venues: [
    {
      name: 'Frackelton\u2019s',
      type: 'restaurant',
      description:
        'Upscale Wyoming cooking in a restored historic building. Elk, bison, locally-sourced everything.',
    },
    {
      name: 'Luminous Brew House',
      type: 'brewery',
      description:
        'Rotating taps, mountain views from the patio, zero pretense.',
    },
    {
      name: 'The Mint Bar',
      type: 'bar',
      description:
        'Taxidermy on walls, bullet hole in the mirror, Waylon on the jukebox. Cash only.',
    },
  ],
  logistics: {
    flights:
      'United direct Denver to Sheridan (SHR), 1.5 hours.',
    gettingAround:
      'Rental car required. Bighorn River is ~2 hours south.',
    whereToStay:
      'Historic Sheridan Inn (character, Buffalo Bill history) or Mill Inn (affordable, breakfast included).',
    bestTime:
      'Late June through July. Runoff done, hatches firing (PMDs, caddis, terrestrials), warm enough to wet wade.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181135.4394846399!2d-107.08!3d44.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335e3b0f66e0f1f%3A0x1cc0e4fa4dae1b4!2sSheridan%2C%20WY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  },
  outfitter: {
    name: 'Fly Shop of the Bighorns',
    description:
      'The outfitter in Sheridan. Guides who\u2019ve fished these waters their whole lives. They have something rare: private access on the South Tongue and surrounding creeks. Beginners get room to learn without an audience. Experienced anglers get water that hasn\u2019t seen a fly in weeks. All gear provided — rods, reels, flies.',
    services: [
      'Private Water Access',
      'Wade Trips',
      'Float Trips',
      'Full Gear Provided',
    ],
    url: 'https://flyshopofthebighorns.com',
  },
}
