'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const navGroups = [
  {
    label: 'Visão Geral',
    items: [
      { href: '/', label: 'Home', icon: '⬡' },
    ],
  },
  {
    label: 'Tokens',
    items: [
      { href: '/tokens', label: 'Todos os Tokens', icon: '◈' },
      { href: '/tokens/primitivos', label: 'Primitivos', icon: '·' },
      { href: '/tokens/semanticos', label: 'Semânticos', icon: '·' },
    ],
  },
  {
    label: 'Componentes',
    items: [
      { href: '/componentes', label: 'Catálogo', icon: '◧' },
    ],
  },
  {
    label: 'Padrões',
    items: [
      { href: '/layouts', label: 'Layouts', icon: '▤' },
    ],
  },
  {
    label: 'Para IA',
    items: [
      { href: '/para-ia', label: 'Guia & Regras', icon: '✦' },
      { href: '/para-ia/prompts', label: 'Gerar Prompt', icon: '▶' },
    ],
  },
  {
    label: 'Referência',
    items: [
      { href: '/design-md', label: 'design.md completo', icon: '⊡' },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>trdr</span>
          <span className={styles.logoSub}>Design Hub</span>
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
        <span className={styles.version}>v1.4</span>
        <span className={styles.versionLabel}>design.md</span>
      </div>
    </aside>
  )
}
