import Link from 'next/link'
import { tokens } from '@/data/tokens'
import { components } from '@/data/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Hero — gradiente surface.interactive → bg.primary (seção 6.3 design.md) */}
      <div className={styles.hero}>
        <span className="trdr-badge-section">Design System v1.4</span>
        <h1 className={styles.heroTitle}>
          TRDR <span className={styles.heroAccent}>Design Hub</span>
        </h1>
        <p className={styles.heroDesc}>
          Tokens, componentes e padrões de layout do Design System TRDR.
          Gere prompts prontos para construir qualquer interface com consistência.
        </p>
        <div className={styles.heroActions}>
          <Link href="/para-ia/prompts" className="trdr-btn trdr-btn-primary trdr-btn-lg">
            Gerar Prompt para Claude Code →
          </Link>
          <Link href="/tokens" className="trdr-btn trdr-btn-ghost trdr-btn-lg">
            Ver Tokens
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>

          {/* Card primário — Gerar Prompt (ação principal) */}
          <Link href="/para-ia/prompts" className={styles.cardPrimary}>
            <div>
              <div className={styles.cardPrimaryLabel}>Para IA</div>
              <div className={styles.cardPrimaryTitle}>Gerador de Prompts</div>
              <p className={styles.cardPrimaryDesc}>
                Descreva o que você desenvolveu e receba um prompt completo com o
                design.md embutido. Pronto para colar no Claude Code.
              </p>
            </div>
            <span className="trdr-btn trdr-btn-primary trdr-btn-lg" style={{ flexShrink: 0 }}>
              Gerar agora →
            </span>
          </Link>

          {/* Cards secundários */}
          <Link href="/tokens" className={styles.card}>
            <span className={styles.cardCategory}>Referência</span>
            <span className={styles.cardTitle}>Tokens</span>
            <p className={styles.cardDesc}>Cores, espaçamentos, tipografia e tokens semânticos com copy-to-clipboard.</p>
            <span className={styles.cardCount}>{tokens.length} tokens documentados</span>
          </Link>

          <Link href="/componentes" className={styles.card}>
            <span className={styles.cardCategory}>Referência</span>
            <span className={styles.cardTitle}>Componentes</span>
            <p className={styles.cardDesc}>Props, dimensões e tokens de cada componente Figma. Filtráveis por categoria.</p>
            <span className={styles.cardCount}>{components.length} componentes</span>
          </Link>

          <Link href="/layouts" className={styles.card}>
            <span className={styles.cardCategory}>Padrões</span>
            <span className={styles.cardTitle}>Layouts</span>
            <p className={styles.cardDesc}>Plataforma de trading, site institucional e app launcher desktop.</p>
            <span className={styles.cardCount}>5 padrões</span>
          </Link>

          <Link href="/para-ia" className={styles.card}>
            <span className={styles.cardCategory}>Para IA</span>
            <span className={styles.cardTitle}>Guia &amp; Regras</span>
            <p className={styles.cardDesc}>Regras absolutas, hierarquia de camadas e tokens de ação e trading.</p>
          </Link>

          <Link href="/design-md" className={styles.card}>
            <span className={styles.cardCategory}>Referência</span>
            <span className={styles.cardTitle}>design.md completo</span>
            <p className={styles.cardDesc}>O arquivo fonte de verdade. Visualize ou copie tudo para usar em qualquer ferramenta.</p>
          </Link>

        </div>
      </div>

    </div>
  )
}
