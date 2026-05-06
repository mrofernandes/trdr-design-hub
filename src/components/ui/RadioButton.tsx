'use client'

import styles from './RadioButton.module.css'

export type RadioVariant = 'input' | 'button'
export type RadioButtonState = 'default' | 'active' | 'focused' | 'disabled'

export interface RadioButtonProps {
  variant?: RadioVariant
  checked?: boolean
  label?: string
  state?: RadioButtonState
  disabled?: boolean
  name?: string
  value?: string
  onChange?: () => void
  className?: string
}

export default function RadioButton({
  variant = 'input',
  checked = false,
  label = 'Label',
  state = 'default',
  disabled = false,
  name,
  value,
  onChange,
  className,
}: RadioButtonProps) {
  const isDisabled = disabled || state === 'disabled'

  if (variant === 'button') {
    const cls = [
      styles.buttonWrapper,
      state === 'active' ? styles.buttonActive : '',
      state === 'focused' ? styles.buttonFocused : '',
      isDisabled ? styles.buttonDisabled : '',
      className,
    ].filter(Boolean).join(' ')

    return (
      <button type="button" disabled={isDisabled} className={cls} onClick={onChange}>
        {label}
      </button>
    )
  }

  return (
    <label className={`${styles.inputWrapper} ${isDisabled ? styles.disabled : ''} ${className ?? ''}`}>
      <input
        type="radio"
        className={styles.nativeInput}
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
      <span className={`${styles.circle} ${checked ? styles.on : ''}`} />
      {label && <span className={styles.inputLabel}>{label}</span>}
    </label>
  )
}
