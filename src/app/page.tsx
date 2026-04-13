import Link from 'next/link'
import Card from '@/components/ui/Card'
import styles from './page.module.css'

const cards = [
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
    href: '/design-md',
    icon: 'article',
    title: 'designtokens.md',
    desc: 'O arquivo completo de design tokens pronto para colar no contexto de qualquer IA.',
  },
  {
    href: '/para-ia',
    icon: 'smart_toy',
    title: 'Guia para IA',
    desc: 'Regras absolutas, hierarquia de camadas e template de CLAUDE.md para projetos TRDR.',
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
          <Link href="/componentes" className={styles.btnPrimary}>
            Ver componentes
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
            <Card
              key={card.href}
              href={card.href}
              icon={card.icon}
              title={card.title}
              description={card.desc}
              className={styles.gridCard}
            />
          ))}
        </div>
      </section>

      {/* Footer text */}
      <div className={styles.footerText}>
        <p className={styles.footerParagraph}>
          Veja também{' '}
          <Link href="/para-ia" className={styles.footerLink}>Guia &amp; Regras para IA</Link>
          {' '}e{' '}
          <Link href="/design-md" className={styles.footerLink}>designtokens.md</Link>
        </p>
      </div>

    </div>
  )
}
