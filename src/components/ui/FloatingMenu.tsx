'use client'
import React from 'react'
import styles from './FloatingMenu.module.css'

export interface FloatingMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string
  children: React.ReactNode
}

export interface FloatingMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  children: React.ReactNode
}

export interface FloatingMenuTitleProps {
  children: React.ReactNode
  size?: 'default' | 'sm'
}

function FloatingMenuRoot({ width, children, className, style, ...props }: FloatingMenuProps) {
  return (
    <div
      role="menu"
      className={`${styles.menu}${className ? ` ${className}` : ''}`}
      style={{ ...(width != null ? { width: typeof width === 'number' ? `${width}px` : width } : {}), ...style }}
      {...props}
    >
      {children}
    </div>
  )
}

function Item({ icon, children, className, disabled, ...props }: FloatingMenuItemProps) {
  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      className={`${styles.item}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{children}</span>
    </button>
  )
}

function Title({ children, size = 'default' }: FloatingMenuTitleProps) {
  return (
    <p className={`${styles.title}${size === 'sm' ? ` ${styles.titleSm}` : ''}`}>
      {children}
    </p>
  )
}

function Divider() {
  return <div className={styles.divider} role="separator" />
}

const FloatingMenu = Object.assign(FloatingMenuRoot, { Item, Title, Divider })
export default FloatingMenu
