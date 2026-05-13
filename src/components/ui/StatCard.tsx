interface StatCardProps {
  value: string | number
  label: string
  description?: string
  accent?: boolean
  className?: string
}

export default function StatCard({ value, label, description, accent, className }: StatCardProps) {
  const classes = [
    'trdr-stat-card',
    accent ? 'trdr-stat-card-accent' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="trdr-stat-value">{value}</div>
      <div className="trdr-stat-label">{label}</div>
      {description && <div className="trdr-stat-desc">{description}</div>}
    </div>
  )
}
