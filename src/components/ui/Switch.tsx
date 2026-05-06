'use client'

import styles from './Switch.module.css'

export type SwitchType = 'on' | 'off' | 'mixed'

export interface SwitchProps {
  type?: SwitchType
  disabled?: boolean
  label?: string
  onChange?: (type: SwitchType) => void
  className?: string
}

export default function Switch({ type = 'off', disabled = false, label, onChange, className }: SwitchProps) {
  function handleClick() {
    if (disabled || !onChange) return
    onChange(type === 'on' ? 'off' : 'on')
  }

  const trackClass = [
    styles.track,
    type === 'on' ? styles.trackOn : '',
    type === 'mixed' ? styles.trackMixed : '',
  ].filter(Boolean).join(' ')

  const wrapperClass = [styles.wrapper, disabled ? styles.disabled : '', className].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      role="switch"
      aria-checked={type === 'mixed' ? 'mixed' : type === 'on'}
      disabled={disabled}
      onClick={handleClick}
      className={wrapperClass}
    >
      <span className={trackClass}>
        {type === 'mixed' ? (
          <span className={styles.mixedIcon}>
            <span className={styles.mixedDash} />
          </span>
        ) : (
          <span className={`${styles.knob} ${type === 'on' ? styles.knobOn : ''}`} />
        )}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </button>
  )
}
