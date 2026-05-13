'use client'

import styles from './Abas.module.css'

export interface AbaTab {
  label: string
  icon?: string
}

export interface AbasProps {
  tabs: (string | AbaTab)[]
  active?: number
  onChange?: (index: number) => void
  className?: string
}

export default function Abas({
  tabs,
  active = 0,
  onChange,
  className = '',
}: AbasProps) {
  return (
    <div className={[styles.abas, className].filter(Boolean).join(' ')}>
      {tabs.map((tab, i) => {
        const label = typeof tab === 'string' ? tab : tab.label
        const icon = typeof tab === 'string' ? undefined : tab.icon
        return (
          <button
            key={label}
            type="button"
            className={[styles.item, i === active ? styles.active : ''].filter(Boolean).join(' ')}
            onClick={() => onChange?.(i)}
          >
            {icon && (
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 20 }}
                aria-hidden="true"
              >
                {icon}
              </span>
            )}
            {label}
          </button>
        )
      })}
    </div>
  )
}
