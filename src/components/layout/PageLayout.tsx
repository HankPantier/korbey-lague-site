import type { ReactNode } from 'react'

export function PageLayout({ hero, children }: { hero?: ReactNode; children: ReactNode }) {
  return (
    <main className="flex-1">
      {hero}
      {children}
    </main>
  )
}
