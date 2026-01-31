import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/cn'

export function Nav() {
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <div className="max-w-article mx-auto px-gutter flex items-center justify-between h-14">
        <Link
          to="/"
          className="font-sans text-sm font-medium leading-normal text-ink hover:text-stone transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-river focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          Fly Fish &rsquo;26
        </Link>

        <div className="flex gap-8">
          <Link
            to="/wyoming"
            aria-current={pathname === '/wyoming' ? 'page' : undefined}
            className={cn(
              'font-sans text-sm font-medium leading-normal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-river focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
              pathname === '/wyoming'
                ? 'text-ink'
                : 'text-stone hover:text-ink'
            )}
          >
            Wyoming
          </Link>
          <Link
            to="/montana"
            aria-current={pathname === '/montana' ? 'page' : undefined}
            className={cn(
              'font-sans text-sm font-medium leading-normal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-river focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
              pathname === '/montana'
                ? 'text-ink'
                : 'text-stone hover:text-ink'
            )}
          >
            Montana
          </Link>
        </div>
      </div>
    </nav>
  )
}
