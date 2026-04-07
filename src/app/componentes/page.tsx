import { Suspense } from 'react'
import Link from 'next/link'
import ComponentCard from '@/components/components-page/ComponentCard'
import { components, filterComponents, ComponentCategory, COMPONENT_CATEGORY_LABELS } from '@/data/components'
import styles from '../page-layout.module.css'
import gridStyles from './components.module.css'

interface PageProps {
  searchParams: Promise<{ q?: string; cat?: string }>
}

export default async function ComponentesPage({ searchParams }: PageProps) {
  const params = await searchParams
  const search = params.q ?? ''
  const category = (params.cat as ComponentCategory) ?? undefined

  const filtered = filterComponents(search, category)
  const categories = Object.entries(COMPONENT_CATEGORY_LABELS) as [ComponentCategory, string][]

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Componentes</h1>
          <p className={styles.subtitle}>{components.length} componentes documentados. Clique para ver props, dimensões e tokens.</p>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <Link href="/componentes" className={`trdr-badge ${!category ? 'trdr-badge-brand' : 'trdr-badge-neutral'}`}>
            Todos ({components.length})
          </Link>
          {categories.map(([cat, label]) => {
            const count = components.filter(c => c.category === cat).length
            return (
              <Link
                key={cat}
                href={`/componentes?cat=${cat}`}
                className={`trdr-badge ${category === cat ? 'trdr-badge-brand' : 'trdr-badge-neutral'}`}
              >
                {label} ({count})
              </Link>
            )
          })}
        </div>
      </div>

      <div className={gridStyles.grid}>
        {filtered.map(comp => (
          <ComponentCard key={comp.slug} component={comp} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: 'var(--spacing-3xl)', textAlign: 'center', color: 'var(--content-tertiary)' }}>
          Nenhum componente encontrado.
        </div>
      )}
    </div>
  )
}
