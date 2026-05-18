'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { MobileNav } from './MobileNav'
import type { BrandJson } from '@/lib/brand/types'
import type { NavJson } from '@/lib/nav/types'

export function NavBar({ brand, nav }: { brand: BrandJson; nav: NavJson }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-colors',
        scrolled ? 'bg-background/95 backdrop-blur border-b border-border' : 'bg-background'
      )}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={`${brand.firm.name} home`}>
          {brand.logo.primary ? (
            <Image
              src={`/content-assets/${brand.logo.primary}`}
              alt={brand.logo.alt}
              width={160}
              height={32}
              priority
              className="h-8 w-auto"
            />
          ) : (
            <span className="font-semibold text-lg">{brand.firm.name}</span>
          )}
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {nav.primary.map(item =>
              item.children?.length ? (
                <NavigationMenuItem key={item.url}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={item.url} className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
                            Overview
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {item.children.map(child => (
                        <li key={child.url}>
                          <NavigationMenuLink asChild>
                            <Link href={child.url} className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
                              {child.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.url}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.url}
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {nav.cta && (
            <Button asChild className="hidden md:inline-flex">
              <Link href={nav.cta.url}>{nav.cta.label}</Link>
            </Button>
          )}
          <MobileNav nav={nav} />
        </div>
      </div>
    </header>
  )
}
