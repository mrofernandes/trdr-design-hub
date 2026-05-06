'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const navGroups = [
  {
    label: 'Visão Geral',
    items: [
      { href: '/', label: 'Home', icon: 'home' },
    ],
  },
  {
    label: 'Tokens',
    items: [
      { href: '/tokens/primitivos', label: 'Primitivos', icon: 'grain' },
      { href: '/tokens/semanticos', label: 'Semânticos', icon: 'join_left' },
      { href: '/tokens/tipografia', label: 'Tipografia', icon: 'text_fields' },
    ],
  },
  {
    label: 'Componentes',
    items: [
      { href: '/componentes', label: 'Catálogo', icon: 'widgets' },
    ],
  },
  {
    label: 'Para IA',
    items: [
      { href: '/para-ia', label: 'Guia & Regras', icon: 'smart_toy' },
    ],
  },
  {
    label: 'Referência',
    items: [
      { href: '/design-md', label: 'designtokens.md', icon: 'article' },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-trdr-design-hub.svg" alt="TRDR Design Hub" width={113} height={44} />
        </Link>
      </div>

      <nav className={styles.nav}>
        {navGroups.map(group => (
          <div key={group.label} className={styles.group}>
            <span className={styles.groupLabel}>{group.label}</span>
            <ul className={styles.list}>
              {group.items.map(item => {
                const isActive = item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.item} ${isActive ? styles.active : ''}`}
                    >
                      <span className={styles.icon}>{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        <span className={styles.version}>v1.5</span>
        <span className={styles.versionLabel}>designtokens.md</span>
      </div>
    </aside>
  )
}
