import type { Destination } from './types'

export const montana: Destination = {
  id: 'montana',
  name: 'Montana',
  region: 'Bozeman, Livingston & Paradise Valley',
  introTitle: 'The Rivers You\u2019ve Heard About',
  introText:
    'Montana wrote the playbook. The Madison. The Yellowstone. The Missouri. These rivers have been on magazine covers for decades because they deliver. Blue-ribbon trout water through valleys with snow-capped peaks and golden grass. More fish per mile than almost anywhere on earth. Yes, it\u2019s more popular than Wyoming. But the rivers are vast, the guide scene is sharp, and the towns — Bozeman and Livingston — have the best food and bars in the Northern Rockies. This is the full experience, dialed in.',
  heroImage: '/mt-hero.jpg',
  photos: [
    {
      src: '/mt-grid-1.jpg',
      alt: 'Angler casting on glassy spring creek with Absaroka Range reflected',
      caption: 'DePuy Spring Creek \u2014 Paradise Valley',
    },
    {
      src: '/mt-grid-2.jpg',
      alt: 'Angler wading during Mother\u2019s Day caddis hatch on the Yellowstone',
      caption: 'Mother\u2019s Day caddis hatch \u2014 Yellowstone River',
    },
    {
      src: '/mt-grid-3.jpg',
      alt: 'Wade fishing the Lower Madison through Bear Trap Canyon boulders',
      caption: 'Bear Trap Canyon \u2014 Lower Madison',
    },
    {
      src: '/mt-grid-4.jpg',
      alt: 'Drift boat launch on DePuy Spring Creek with Absaroka peaks',
      caption: 'Spring creek access beneath the Absarokas',
    },
    {
      src: '/mt-grid-5.jpg',
      alt: 'Angler at alpine lake with pine forest and snow-capped peaks',
      caption: 'Montana backcountry stillwater',
    },
  ],
  rivers: [
    {
      name: 'Madison River',
      type: 'Freestone, wade & float',
      badge: 'The Standard',
      description:
        'Called "the fifty mile riffle" — continuous fishable water from Yellowstone to the Missouri headwaters. This is the river other Western streams get compared to. Consistent hatches May through October.',
      stats: {
        fishPerMile: '4,000+ fish/mile',
        avgSize: '14–18" avg',
        method: 'Wade & Float',
      },
    },
    {
      name: 'Yellowstone River',
      type: 'Freestone, float trip',
      badge: 'Paradise Valley',
      description:
        'Longest undammed river in the lower 48. Float through ranch land with the Absaroka Range stacked behind it. Native cutthroat, browns, rainbows — all in the same drift.',
      stats: {
        fishPerMile: '3,500+ fish/mile',
        avgSize: 'Cutthroat native species',
        method: 'Float fishing',
      },
    },
    {
      name: 'Missouri River',
      type: 'Tailwater, float trip',
      badge: 'Trophy Factory',
      description:
        'Most productive trout water in North America. Over 8,000 fish per mile. Not a typo. Ninety minutes from Bozeman, but for sheer numbers and size, nothing else comes close.',
      stats: {
        fishPerMile: '8,000+ fish/mile',
        avgSize: '16–22" trophy range',
        method: 'Float fishing',
      },
    },
    {
      name: 'Gallatin River',
      type: 'Freestone, wade',
      badge: 'Quick Access',
      description:
        'Runs along Highway 191 between Bozeman and Big Sky. Fish it on your way to dinner. Pocket water and riffles full of rainbows and browns that eat aggressively.',
      stats: {
        fishPerMile: '2,500+ fish/mile',
        avgSize: '10–14" avg',
        method: 'Wade fishing',
      },
    },
  ],
  townName: 'Bozeman & Livingston',
  townDescription:
    'Two towns, two speeds, 25 minutes apart. Bozeman is polished — a booming college town with walkable downtown, strong restaurants, and real energy. Livingston is the soul. A railroad town where the wind blows hard and the bars stay open late. Anthony Bourdain ranked the Murray Hotel in his top 10. Grittier, weirder, more Montana.',
  venues: [
    {
      name: 'Blackbird Kitchen',
      type: 'restaurant',
      location: 'Bozeman',
      description:
        'Wood-fired everything, local ingredients, food that actually surprises you.',
    },
    {
      name: 'The Murray Hotel',
      type: 'hotel',
      location: 'Livingston',
      description:
        '1904 railroad hotel, Bourdain-approved, guests from Calamity Jane to Sam Peckinpah.',
    },
    {
      name: 'The Murray Bar',
      type: 'bar',
      location: 'Livingston',
      description:
        'Live music most nights, stiff pours, mix of ranchers, writers, and river guides.',
    },
  ],
  logistics: {
    flights:
      'United direct Denver to Bozeman (BZN), 1.5 hours.',
    gettingAround:
      'Rental car essential. Bozeman to Livingston 25 min. Paradise Valley 30 min south. Missouri River 90 min north.',
    whereToStay:
      'The LARK (boutique, downtown Bozeman), Murray Hotel (historic Livingston), Kimpton Armory (upscale Bozeman).',
    bestTime:
      'Late June through July. Salmonfly hatch (early June) is famous but mobbed. Late June: hatches still strong, crowds gone.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181135.4394846399!2d-111.04!3d45.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5345444c4fba8813%3A0x63f5d064f73b60aa!2sBozeman%2C%20MT!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  },
  outfitter: {
    name: 'Montana Angling Co.',
    description:
      'One of Bozeman\u2019s top operations. Decades on every river in the region. Their guides know what\u2019s fishing well this week, not just this season. Just as comfortable putting first-timers into fish on the Madison as running technical dry fly sessions on the Missouri. All gear provided.',
    services: [
      'Wade Trips',
      'Float Trips',
      'Multi-Day Packages',
      'Full Gear Provided',
    ],
    url: 'https://www.montanaangling.com',
  },
}
