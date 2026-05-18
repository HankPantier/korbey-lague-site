import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type IconProps = {
  name: string
  className?: string
  strokeWidth?: number
}

export function Icon({ name, className, strokeWidth = 1.75 }: IconProps) {
  const Component = (LucideIcons as unknown as Record<string, LucideIcon>)[name]
  if (!Component) {
    // Fallback: a square outline so layouts don't collapse on unknown names
    return <LucideIcons.Square className={className} strokeWidth={strokeWidth} aria-hidden="true" />
  }
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
