'use client'

import React from 'react'
import styles from './SubMenu.module.css'

export interface SubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface SubMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  active?: boolean
  children: React.ReactNode
}

function SubMenuRoot({ children, className, ...props }: SubMenuProps) {
  return (
    <div className={[styles.menu, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

function Item({ icon, active, children, className, ...props }: SubMenuItemProps) {
  return (
    <button
      type="button"
      className={[styles.item, active ? styles.active : '', className].filter(Boolean).join(' ')}
      {...props}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </button>
  )
}

const SubMenu = Object.assign(SubMenuRoot, { Item })
export default SubMenu
