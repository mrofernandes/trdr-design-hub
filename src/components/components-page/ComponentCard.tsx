import Link from 'next/link'
import { DesignComponent, COMPONENT_CATEGORY_LABELS } from '@/data/components'
import cardStyles from '@/components/ui/Card.module.css'
import styles from './ComponentCard.module.css'

interface ComponentCardProps {
  component: DesignComponent
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Link href={`/componentes/${component.slug}`} className={cardStyles.card}>
      <div className={cardStyles.container}>
        {/* Header: nome + badge de categoria (usa estrutura do Card TRDR) */}
        <div className={cardStyles.header}>
          <span className={cardStyles.title}>{component.name}</span>
          <span className="trdr-badge trdr-badge-neutral">
            {COMPONENT_CATEGORY_LABELS[component.category]}
          </span>
        </div>

        {/* Descrição */}
        <p className={cardStyles.desc}>{component.description}</p>

        {/* Footer com figmaId + badges de status */}
        <div className={styles.footer}>
          <code className={styles.figmaId}>{component.figmaId}</code>
          <div className={styles.badges}>
            {component.implemented && (
              <span className="trdr-badge trdr-badge-success">Implementado</span>
            )}
            {component.code && (
              <span className="trdr-badge trdr-badge-brand">Código</span>
            )}
            {component.dimensions[0] && (
              <span className={styles.dim}>
                {component.dimensions[0].width && `${component.dimensions[0].width} × `}
                {component.dimensions[0].height}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
