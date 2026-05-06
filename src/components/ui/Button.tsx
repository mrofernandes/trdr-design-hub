'use client'

import styles from './Button.module.css'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'inverse'
  | 'link'
  | 'link-danger'
  | 'secondary-destruct'
  | 'long'
  | 'short'

export type ButtonSize = 'default' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'default',
  iconLeft,
  iconRight,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const variantClass = styles[variant.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) as keyof typeof styles]
  const sizeClass = size === 'lg' ? styles.lg : ''
  const disabledClass = disabled ? styles.disabled : ''

  return (
    <button
      className={[styles.btn, variantClass, sizeClass, disabledClass, className].filter(Boolean).join(' ')}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className={styles.icon} aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles.icon} aria-hidden="true">{iconRight}</span>}
    </button>
  )
}
