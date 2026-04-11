import { DesignComponent, COMPONENT_CATEGORY_LABELS } from '@/data/components'
import Card from '@/components/ui/Card'

interface ComponentCardProps {
  component: DesignComponent
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const footerBadges = []
  if (component.implemented) footerBadges.push({ label: 'Implementado', variant: 'success' as const })
  if (component.code) footerBadges.push({ label: 'Código', variant: 'brand' as const })

  const dim = component.dimensions[0]
  const dimLabel = dim
    ? (dim.width ? `${dim.width} × ${dim.height}` : dim.height)
    : undefined

  return (
    <Card
      href={`/componentes/${component.slug}`}
      title={component.name}
      description={component.description}
      headerBadges={[{ label: COMPONENT_CATEGORY_LABELS[component.category] }]}
      footerLeft={dimLabel ? `${component.figmaId} · ${dimLabel}` : component.figmaId}
      footerBadges={footerBadges.length > 0 ? footerBadges : undefined}
    />
  )
}
