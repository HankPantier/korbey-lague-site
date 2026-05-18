/**
 * FeatureGrid — placeholder stub.
 * Full implementation delivered in M3.F.
 */
import type { FeatureGridProps } from '@/lib/assembly/extract-block-props'

export function FeatureGrid(props: FeatureGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <p className="text-xs font-mono text-muted-foreground">
        FeatureGrid — implemented in M3.F
      </p>
      <h2 className="mt-2 text-2xl font-semibold">{props.heading}</h2>
    </section>
  )
}
