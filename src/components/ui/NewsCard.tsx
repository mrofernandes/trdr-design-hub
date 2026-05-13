'use client'

import styles from './NewsCard.module.css'
import Badge, { BadgeVariant } from './Badge'

export type NewsCardSentiment = 'up' | 'down' | 'neutral'

export interface NewsCardProps {
  title: string
  source: string
  time: string
  sentiment?: NewsCardSentiment
  href?: string
  onShare?: () => void
}

export default function NewsCard({
  title,
  source,
  time,
  sentiment = 'neutral',
  href,
  onShare,
}: NewsCardProps) {
  const dotClass =
    sentiment === 'up' ? styles.dotUp :
    sentiment === 'down' ? styles.dotDown :
    styles.dotNeutral

  const sentimentBadge: BadgeVariant =
    sentiment === 'up' ? 'success' :
    sentiment === 'down' ? 'warning' :
    'neutral'

  const sentimentLabel =
    sentiment === 'up' ? 'Alta' :
    sentiment === 'down' ? 'Baixa' :
    'Neutro'

  const inner = (
    <div className={styles.inner}>
      <div className={`${styles.dot} ${dotClass}`} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div className={styles.meta}>
          <Badge variant={sentimentBadge} dot>{sentimentLabel}</Badge>
          <span className={styles.sep}>•</span>
          <span className={styles.source}>{source}</span>
          <span className={styles.sep}>•</span>
          <span className={styles.time}>{time}</span>
        </div>
      </div>
      <button
        className={styles.action}
        onClick={onShare}
        aria-label="Abrir notícia"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 12, lineHeight: '12px' }}>open_in_new</span>
      </button>
    </div>
  )

  if (href) {
    return (
      <a href={href} className={styles.card} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  }

  return <div className={styles.card}>{inner}</div>
}
