'use client'

export type BadgeVariant = 'neutral' | 'brand' | 'success' | 'warning' | 'archived'
export type BadgeSize = 'default' | 'lg'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  className?: string
  children: React.ReactNode
}

export default function Badge({
  variant = 'neutral',
  size = 'default',
  dot = false,
  className,
  children,
}: BadgeProps) {
  const classes = [
    'trdr-badge',
    `trdr-badge-${variant}`,
    size === 'lg' ? 'trdr-badge-lg' : '',
    dot ? 'trdr-badge-dot' : '',
    className,
  ].filter(Boolean).join(' ')

  return <span className={classes}>{children}</span>
}
