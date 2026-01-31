import type { Logistics } from '@/data/types'
import { Container } from '@/components/layout/Container'
import { Overline } from '@/components/typography/Overline'
import { FadeIn } from '@/components/shared/FadeIn'
import { Plane, Car, Building, CalendarDays } from 'lucide-react'

interface Props {
  logistics: Logistics
}

const ITEMS = [
  { key: 'flights' as const, label: 'Flights', icon: Plane },
  { key: 'gettingAround' as const, label: 'Getting Around', icon: Car },
  { key: 'whereToStay' as const, label: 'Where to Stay', icon: Building },
  { key: 'bestTime' as const, label: 'Best Time', icon: CalendarDays },
]

export function LogisticsPanel({ logistics }: Props) {
  return (
    <section className="bg-parchment py-section">
      <Container>
        <FadeIn>
          <Overline className="block mb-8">Logistics</Overline>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.key} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-stone" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold leading-normal text-ink mb-1">
                      {item.label}
                    </h4>
                    <p className="font-serif text-sm text-ink/75 leading-relaxed">
                      {logistics[item.key]}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
