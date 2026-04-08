import Link from 'next/link'
import styles from './page.module.css'

const cards = [
  {
    href: '/para-ia/prompts',
    icon: 'auto_awesome',
    title: 'Gerar Prompt',
    desc: 'Descreva o que você vai construir e receba um prompt com o design.md embutido.',
  },
  {
    href: '/tokens',
    icon: 'palette',
    title: 'Tokens',
    desc: 'Cores, espaçamentos, tipografia e tokens semânticos com copy-to-clipboard.',
  },
  {
    href: '/componentes',
    icon: 'widgets',
    title: 'Componentes',
    desc: 'Props, dimensões e tokens de cada componente Figma. Filtráveis por categoria.',
  },
  {
    href: '/layouts',
    icon: 'view_quilt',
    title: 'Layouts',
    desc: 'Plataforma de trading, site institucional e app launcher desktop.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Sistema de design TRDR</h1>
        <p className={styles.heroDesc}>
          Tokens, componentes e padrões de layout do Design System TRDR.<br />
          Construa qualquer interface com consistência.
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

      {/* Cards */}
      <section className={styles.cardsSection}>
        <div className={styles.grid}>
          {cards.map(card => (
            <Link key={card.href} href={card.href} className={styles.card}>
              <span className={styles.cardIcon}>{card.icon}</span>
              <span className={styles.cardTitle}>{card.title}</span>
              <p className={styles.cardDesc}>{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer text */}
      <div className={styles.footerText}>
        <p className={styles.footerParagraph}>
          Veja também{' '}
          <Link href="/para-ia" className={styles.footerLink}>Guia &amp; Regras para IA</Link>
          {' '}e{' '}
          <Link href="/design-md" className={styles.footerLink}>design.md</Link>
        </p>
      </div>

    </div>
  )
}
