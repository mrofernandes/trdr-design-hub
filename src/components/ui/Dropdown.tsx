'use client'

import styles from './Dropdown.module.css'

export type DropdownSize = 'default' | 'lg'
export type DropdownState = 'default' | 'focused' | 'active'

export interface DropdownProps {
  value?: string
  placeholder?: string
  size?: DropdownSize
  state?: DropdownState
  stroke?: boolean
  iconLead?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Dropdown({
  value,
  placeholder = 'Selecione',
  size = 'default',
  state = 'default',
  stroke = true,
  iconLead = false,
  disabled = false,
  onClick,
  className,
}: DropdownProps) {
  const wrapperClass = [
    styles.wrapper,
    size === 'lg' ? styles.lg : '',
    !stroke ? styles.noStroke : '',
    state === 'active' ? styles.active : '',
    disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={wrapperClass}
    >
      {iconLead && (
        <span className={`${styles.iconLead} ${size === 'lg' ? styles.iconLeadLg : ''}`} aria-hidden="true" />
      )}
      <span className={styles.label}>{value || placeholder}</span>
      <span className={styles.chevron}>
        <ChevronDown />
      </span>
    </button>
  )
}
