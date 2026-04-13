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
    label: 'Padrões',
    items: [
      { href: '/layouts', label: 'Layouts', icon: 'view_quilt' },
    ],
  },
  {
    label: 'Para IA',
    items: [
      { href: '/para-ia', label: 'Guia & Regras', icon: 'smart_toy' },
      { href: '/para-ia/prompts', label: 'Gerar Prompt', icon: 'auto_awesome' },
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
          <img src="/logo-trdr.svg" alt="TRDR Design Hub" width={115} height={68} />
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
