'use client'

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import type { NavJson, NavItem } from '@/lib/nav/types'
import { useState } from 'react'

export function MobileNav({ nav }: { nav: NavJson }) {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 sm:w-80">
        <SheetTitle className="sr-only">Site menu</SheetTitle>
        <nav className="mt-8 flex flex-col gap-1">
          <Accordion type="multiple">
            {nav.primary.map((item: NavItem) =>
              item.children?.length ? (
                <AccordionItem key={item.url} value={item.url} className="border-none">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-base font-medium">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <Link
                      href={item.url}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Overview
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.url}
                        href={child.url}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={item.url}
                  href={item.url}
                  className="block px-4 py-3 text-base font-medium hover:bg-accent rounded-md"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </Accordion>
        </nav>
        {nav.cta && (
          <div className="absolute bottom-6 left-6 right-6">
            <Button asChild className="w-full">
              <Link href={nav.cta.url} onClick={() => setOpen(false)}>
                {nav.cta.label}
              </Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
