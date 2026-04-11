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
      { href: '/tokens', label: 'Todos os Tokens', icon: 'palette' },
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
          <svg width="69" height="25" viewBox="0 0 69 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TRDR">
            <path d="M61.348 6.44689L60.3649 12.1623C60.8988 11.0459 61.5056 10.0267 62.1852 9.10447C62.8647 8.18224 63.5686 7.45413 64.2966 6.92022C65.049 6.36204 65.7892 6.08287 66.5173 6.08287C67.2453 6.08288 67.8278 6.27707 68.2646 6.66536C68.7257 7.05366 68.9562 7.56336 68.9562 8.19435C68.9562 8.87387 68.7621 9.41993 68.3737 9.8325C67.9855 10.2451 67.4636 10.4514 66.8084 10.4514C65.7891 10.4514 64.8427 9.94165 63.969 8.92238C63.0953 9.62618 62.343 10.4999 61.712 11.5434C61.081 12.5627 60.4863 13.6669 59.9281 14.8561L59.6369 16.3487C59.3942 17.635 59.1394 18.9212 58.8725 20.2075C58.6298 21.4938 58.3871 22.7922 58.1444 24.1027L54.0308 24.3939L53.6668 24.0663L56.397 10.8882C56.5183 10.3057 56.482 9.85675 56.2878 9.54126C56.0937 9.2015 55.7539 8.94672 55.2685 8.77684L54.7588 8.59475L54.868 7.97588L60.911 6.04648L61.348 6.44689Z" fill="currentColor"/>
            <path d="M38.5304 24.8974C37.1588 24.8974 35.8686 24.5603 34.6598 23.8861C33.4742 23.1887 32.5211 22.1775 31.8004 20.8524C31.0798 19.5273 30.7194 17.9233 30.7194 16.0403V15.4824C30.7194 13.5994 31.0798 11.9954 31.8004 10.6703C32.5211 9.34523 33.4742 8.34561 34.6598 7.67145C35.8454 6.97405 37.1356 6.62535 38.5304 6.62535C39.5765 6.62535 40.4482 6.7532 41.1456 7.00892C41.8663 7.24139 42.4475 7.5436 42.8892 7.91555C43.3309 8.2875 43.6679 8.68269 43.9004 9.10114H44.5281V0H48.9217V24.4092H44.5978V22.317H43.9701C43.5749 22.9679 42.9589 23.5607 42.122 24.0953C41.3084 24.63 40.1112 24.8974 38.5304 24.8974ZM39.8554 21.0616C41.2038 21.0616 42.3312 20.6316 43.2379 19.7714C44.1445 18.8881 44.5978 17.6095 44.5978 15.9357V15.587C44.5978 13.9132 44.1445 12.6463 43.2379 11.7861C42.3545 10.9028 41.227 10.4611 39.8554 10.4611C38.5071 10.4611 37.3797 10.9028 36.473 11.7861C35.5664 12.6463 35.1131 13.9132 35.1131 15.587V15.9357C35.1131 17.6095 35.5664 18.8881 36.473 19.7714C37.3797 20.6316 38.5071 21.0616 39.8554 21.0616Z" fill="currentColor"/>
            <path d="M18.3438 24.4091V7.11349H22.6677V9.06622H23.2953C23.5511 8.36882 23.9695 7.85739 24.5507 7.53193C25.1551 7.20648 25.8525 7.04375 26.6429 7.04375H28.7351V10.9492H26.5731C25.4573 10.9492 24.539 11.2514 23.8184 11.8558C23.0977 12.437 22.7374 13.3436 22.7374 14.5757V24.4091H18.3438Z" fill="currentColor"/>
            <path d="M9.06638 24.4092C7.92728 24.4092 6.99741 24.0605 6.27676 23.3631C5.57935 22.6425 5.23065 21.6894 5.23065 20.5038V10.7401H0.906738V7.11359H5.23065V1.74357H9.6243V7.11359H14.3667V10.7401H9.6243V19.7366C9.6243 20.434 9.94976 20.7827 10.6007 20.7827H13.9482V24.4092H9.06638Z" fill="currentColor"/>
          </svg>
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
        <span className={styles.version}>v1.5</span>
        <span className={styles.versionLabel}>designtokens.md</span>
      </div>
    </aside>
  )
}
