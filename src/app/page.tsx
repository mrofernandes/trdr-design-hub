import Link from 'next/link'
import { tokens } from '@/data/tokens'
import { components } from '@/data/components'
import styles from './page.module.css'

const tabs = ['Tudo', 'Tokens', 'Componentes', 'Padrões', 'Para IA']

const cards = [
  {
    href: '/para-ia/prompts',
    category: 'Para IA',
    title: 'Gerar Prompt',
    desc: 'Descreva o que você vai construir e receba um prompt com o design.md embutido.',
    meta: 'Pronto para Claude Code',
  },
  {
    href: '/tokens',
    category: 'Referência',
    title: 'Tokens',
    desc: 'Cores, espaçamentos, tipografia e tokens semânticos com copy-to-clipboard.',
    meta: `${tokens.length} tokens documentados`,
  },
  {
    href: '/componentes',
    category: 'Referência',
    title: 'Componentes',
    desc: 'Props, dimensões e tokens de cada componente Figma. Filtráveis por categoria.',
    meta: `${components.length} componentes`,
  },
  {
    href: '/layouts',
    category: 'Padrões',
    title: 'Layouts',
    desc: 'Plataforma de trading, site institucional e app launcher desktop.',
    meta: '5 padrões',
  },
  {
    href: '/para-ia',
    category: 'Para IA',
    title: 'Guia & Regras',
    desc: 'Regras absolutas, hierarquia de camadas e tokens de ação e trading.',
    meta: null,
  },
  {
    href: '/design-md',
    category: 'Referência',
    title: 'design.md',
    desc: 'O arquivo fonte de verdade. Visualize ou copie tudo para usar em qualquer ferramenta.',
    meta: null,
  },
]

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleWhite}>Construa qualquer interface com </span>
          <span className={styles.heroTitleGradient}>consistência</span>
        </h1>
        <p className={styles.heroDesc}>
          Tokens, componentes e padrões de layout do Design System TRDR.
          Gere prompts prontos para construir qualquer interface com consistência.
        </p>
        <div className={styles.heroActions}>
          <Link href="/para-ia/prompts" className={styles.btnPrimary}>
            Gerar prompts
          </Link>
          <Link href="/tokens" className={styles.btnSecondary}>
            Ver tokens
          </Link>
        </div>
      </section>

      {/* Tabs */}
      <div className={styles.tabsBar}>
        <nav className={styles.tabs}>
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`${styles.tab} ${i === 0 ? styles.tabActive : styles.tabInactive}`}
            >
              {tab}
            </span>
          ))}
        </nav>
      </div>

      {/* Cards */}
      <section className={styles.cardsSection}>
        <div className={styles.grid}>
          {cards.map(card => (
            <Link key={card.href} href={card.href} className={styles.card}>
              <span className={styles.cardCategory}>{card.category}</span>
              <span className={styles.cardTitle}>{card.title}</span>
              <p className={styles.cardDesc}>{card.desc}</p>
              {card.meta && <span className={styles.cardMeta}>{card.meta}</span>}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer text */}
      <div className={styles.footerText}>
        <p className={styles.footerParagraph}>
          Explore o design system completo em{' '}
          <Link href="/design-md" className={styles.footerLink}>design.md</Link>
        </p>
      </div>

    </div>
  )
}
