'use client'

import styles from './ComboInput.module.css'

export type ComboInputState = 'default' | 'hover' | 'selected-input' | 'selected-chevron'

export interface ComboInputProps {
  value?: string
  iconLead?: boolean
  state?: ComboInputState
  onChevronClick?: () => void
  onChange?: (value: string) => void
  className?: string
}

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ComboInput({
  value = '16',
  iconLead = false,
  state = 'default',
  onChevronClick,
  onChange,
  className,
}: ComboInputProps) {
  const stateClass =
    state === 'hover' ? styles.hover :
    state === 'selected-input' ? styles.selectedInput :
    state === 'selected-chevron' ? styles.selectedChevron :
    ''

  return (
    <div className={`${styles.wrapper} ${stateClass} ${className ?? ''}`}>
      <div className={styles.input}>
        {iconLead && <span className={styles.iconSlot} aria-hidden="true" />}
        <span className={styles.label}>{value}</span>
      </div>
      <button
        type="button"
        className={styles.chevron}
        onClick={onChevronClick}
        aria-label="Abrir opções"
      >
        <ChevronDown />
      </button>
    </div>
  )
}
