import Link from 'next/link'
import styles from './Card.module.css'

interface CardBadge {
  label: string
  variant?: 'neutral' | 'brand' | 'success'
}

interface CardProps {
  href: string
  icon?: string            // Material Symbols name
  title: string
  description: string
  headerBadges?: CardBadge[]   // badges no topo direito (ao lado do ícone)
  footerLeft?: string          // texto do rodapé esquerdo (ex: Figma ID)
  footerBadges?: CardBadge[]   // badges no rodapé direito
  className?: string
}

export default function Card({
  href,
  icon,
  title,
  description,
  headerBadges,
  footerLeft,
  footerBadges,
  className = '',
}: CardProps) {
  const hasFooter = footerLeft || (footerBadges && footerBadges.length > 0)

  return (
    <Link href={href} className={`${styles.card} ${className}`}>

      {/* Container 1 — conteúdo principal */}
      <div className={`${styles.container1} ${hasFooter ? styles.hasBorder : ''}`}>
        <div className={styles.header}>
          {icon && (
            <span
              className={styles.icon}
              style={{ fontVariationSettings: "'FILL' 0, 'GRAD' 0, 'wght' 100, 'opsz' 48" }}
            >
              {icon}
            </span>
          )}
          {headerBadges && headerBadges.length > 0 && (
            <div className={styles.badges}>
              {headerBadges.map(b => (
                <span key={b.label} className={`trdr-badge trdr-badge-${b.variant ?? 'neutral'}`}>
                  {b.label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* H-6: Space Grotesk, 26px, Medium 500 */}
        <span className={styles.title}>{title}</span>

        {/* B-3: Inter, 14px, Regular 400, content/tertiary */}
        <p className={styles.desc}>{description}</p>
      </div>

      {/* Container 2 — footer (Figma ID + badges) — opcional */}
      {hasFooter && (
        <div className={styles.container2}>
          {footerLeft && (
            <code className={styles.footerLeft}>{footerLeft}</code>
          )}
          {footerBadges && footerBadges.length > 0 && (
            <div className={styles.badges}>
              {footerBadges.map(b => (
                <span key={b.label} className={`trdr-badge trdr-badge-${b.variant ?? 'neutral'}`}>
                  {b.label}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

    </Link>
  )
}
