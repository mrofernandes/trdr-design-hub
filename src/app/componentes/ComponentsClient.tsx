'use client'

import ComponentCard from '@/components/components-page/ComponentCard'
import { DesignComponent } from '@/data/components'
import gridStyles from './components.module.css'

interface ComponentsClientProps {
  components: DesignComponent[]
}

export default function ComponentsClient({ components }: ComponentsClientProps) {
  return (
    <div className={gridStyles.grid}>
      {components.map(comp => (
        <ComponentCard key={comp.slug} component={comp} />
      ))}
    </div>
  )
}
