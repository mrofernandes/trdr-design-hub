import styles from './StatCard.module.css'

interface StatCardProps {
  value: string | number
  label: string
  description?: string
  accent?: boolean
}

export default function StatCard({ value, label, description, accent }: StatCardProps) {
  return (
    <div className={`${styles.card} ${accent ? styles.accent : ''}`}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
      {description && <div className={styles.desc}>{description}</div>}
    </div>
  )
}
