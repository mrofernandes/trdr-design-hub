'use client'

import styles from './Checkbox.module.css'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export default function Checkbox({ checked, onChange, label, disabled = false }: CheckboxProps) {
  return (
    <label className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className={`${styles.box} ${checked ? styles.checked : ''}`}>
        {checked && (
          <svg className={styles.checkIcon} width="8" height="7" viewBox="0 0 8 7" fill="none" aria-hidden="true">
            <path d="M1 3L3 5.5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
