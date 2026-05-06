'use client'

import React, { useRef } from 'react'
import styles from './TextInput.module.css'

export type TextInputVariant = 'single-line' | 'multi-line' | 'quick-action'
export type TextInputSize = 'default' | 'large'
export type TextInputValidation = 'default' | 'error' | 'warning' | 'success'

export interface TextInputProps {
  variant?: TextInputVariant
  size?: TextInputSize
  validation?: TextInputValidation
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onClear?: () => void
  iconLeft?: boolean
  disabled?: boolean
  readOnly?: boolean
  rows?: number
  id?: string
  name?: string
  className?: string
  'aria-label'?: string
}

function SearchIcon() {
  return (
    <span className={styles.iconSlot} aria-hidden="true">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function ClearButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className={styles.clearBtn}
      onClick={onClick}
      tabIndex={-1}
      aria-label="Limpar campo"
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path d="M1 1L10 10M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

export default function TextInput({
  variant = 'single-line',
  size = 'default',
  validation = 'default',
  placeholder,
  value,
  defaultValue,
  onChange,
  onClear,
  iconLeft = false,
  disabled = false,
  readOnly = false,
  rows = 3,
  id,
  name,
  className,
  'aria-label': ariaLabel,
}: TextInputProps) {
  const isQuickAction = variant === 'quick-action'
  const isMultiLine = variant === 'multi-line'
  const isLarge = size === 'large' || isQuickAction
  const showIcon = iconLeft || isQuickAction
  const showClear = showIcon && !isMultiLine && !disabled && !readOnly && Boolean(value)

  const wrapperClass = [
    styles.wrapper,
    isLarge ? styles.lg : '',
    isQuickAction ? styles.quickAction : '',
    isMultiLine ? styles.multiLine : '',
    showIcon && !isQuickAction ? styles.withIcon : '',
    validation !== 'default' ? styles[validation] : '',
    disabled ? styles.disabled : '',
    readOnly ? styles.readonly : '',
    className || '',
  ].filter(Boolean).join(' ')

  if (isMultiLine) {
    return (
      <div className={wrapperClass}>
        <textarea
          className={styles.field}
          data-multiline="true"
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          disabled={disabled}
          readOnly={readOnly}
          rows={rows}
          id={id}
          name={name}
          aria-label={ariaLabel}
        />
      </div>
    )
  }

  return (
    <div className={wrapperClass}>
      {showIcon && <SearchIcon />}
      <input
        type="text"
        className={styles.field}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        disabled={disabled}
        readOnly={readOnly}
        id={id}
        name={name}
        aria-label={ariaLabel}
      />
      {showClear && <ClearButton onClick={onClear} />}
    </div>
  )
}
