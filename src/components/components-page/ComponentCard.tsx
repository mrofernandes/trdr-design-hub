import Link from 'next/link'
import { DesignComponent, COMPONENT_CATEGORY_LABELS } from '@/data/components'
import styles from './ComponentCard.module.css'

interface ComponentCardProps {
  component: DesignComponent
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Link href={`/componentes/${component.slug}`} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.name}>{component.name}</div>
        <span className="trdr-badge trdr-badge-neutral">
          {COMPONENT_CATEGORY_LABELS[component.category]}
        </span>
      </div>
      <p className={styles.desc}>{component.description}</p>
      <div className={styles.footer}>
        <code className={styles.figmaId}>{component.figmaId}</code>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {component.implemented && (
            <span className="trdr-badge trdr-badge-success">Implementado</span>
          )}
          {component.dimensions[0] && (
            <span className={styles.dim}>
              {component.dimensions[0].width && `${component.dimensions[0].width} × `}
              {component.dimensions[0].height}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
