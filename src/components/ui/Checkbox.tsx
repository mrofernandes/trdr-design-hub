'use client'

import styles from './Checkbox.module.css'

export type CheckboxType = boolean | 'mixed'

interface CheckboxProps {
  checked: CheckboxType
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export default function Checkbox({ checked, onChange, label, disabled = false }: CheckboxProps) {
  const isMixed = checked === 'mixed'
  const isChecked = checked === true

  const boxClass = [
    styles.box,
    isChecked || isMixed ? styles.checked : '',
    isMixed ? styles.mixed : '',
  ].filter(Boolean).join(' ')

  return (
    <label className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isChecked || isMixed}
        ref={el => { if (el) el.indeterminate = isMixed }}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className={boxClass}>
        {isMixed ? (
          <svg width="8" height="2" viewBox="0 0 8 2" fill="none" aria-hidden="true">
            <path d="M1 1H7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : isChecked ? (
          <svg className={styles.checkIcon} width="8" height="7" viewBox="0 0 8 7" fill="none" aria-hidden="true">
            <path d="M1 3L3 5.5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
