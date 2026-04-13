'use client'

import { useState } from 'react'
import ComponentCard from '@/components/components-page/ComponentCard'
import Checkbox from '@/components/ui/Checkbox'
import { DesignComponent } from '@/data/components'
import gridStyles from './components.module.css'
import pageStyles from '../page-layout.module.css'

interface ComponentsClientProps {
  components: DesignComponent[]
}

export default function ComponentsClient({ components }: ComponentsClientProps) {
  const [showImplemented, setShowImplemented] = useState(true)
  const [showWithCode, setShowWithCode] = useState(true)

  const filtered = components.filter(c => {
    if (showImplemented && !c.implemented) return false
    if (showWithCode && !c.code) return false
    return true
  })

  // Se ambos marcados e resultado vazio, mostra tudo (fallback seguro)
  const toShow = (showImplemented || showWithCode) && filtered.length === 0 ? components : filtered

  return (
    <>
      <div className={pageStyles.filters}>
        <Checkbox
          checked={showImplemented}
          onChange={setShowImplemented}
          label="Implementados"
        />
        <Checkbox
          checked={showWithCode}
          onChange={setShowWithCode}
          label="Com código disponível"
        />
      </div>

      <div className={gridStyles.grid}>
        {toShow.map(comp => (
          <ComponentCard key={comp.slug} component={comp} />
        ))}
      </div>

      {toShow.length === 0 && (
        <div style={{ padding: 'var(--spacing-3xl)', textAlign: 'center', color: 'var(--content-tertiary)' }}>
          Nenhum componente encontrado.
        </div>
      )}
    </>
  )
}
