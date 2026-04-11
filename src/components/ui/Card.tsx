import Link from 'next/link'
import styles from './Card.module.css'

interface CardProps {
  href: string
  icon?: string            // Material Symbols name
  title: string
  description: string
  badge?: string           // badge text (optional)
  badgeVariant?: 'neutral' | 'brand' | 'success'
  className?: string
}

export default function Card({
  href,
  icon,
  title,
  description,
  badge,
  badgeVariant = 'neutral',
  className = '',
}: CardProps) {
  return (
    <Link href={href} className={`${styles.card} ${className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          {icon && (
            <span
              className={styles.icon}
              style={{ fontVariationSettings: "'FILL' 0, 'GRAD' 0, 'wght' 100, 'opsz' 48" }}
            >
              {icon}
            </span>
          )}
          {badge && (
            <span className={`trdr-badge trdr-badge-${badgeVariant} ${styles.badge}`}>
              {badge}
            </span>
          )}
        </div>
        <span className={styles.title}>{title}</span>
        <p className={styles.desc}>{description}</p>
      </div>
    </Link>
  )
}
