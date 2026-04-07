import Link from 'next/link'
import StatCard from '@/components/ui/StatCard'
import { tokens } from '@/data/tokens'
import { components } from '@/data/components'
import { layouts } from '@/data/layouts'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroLabel}>Design System</div>
        <h1 className={styles.heroTitle}>
          TRDR <span className={styles.heroAccent}>Design Hub</span>
        </h1>
        <p className={styles.heroDesc}>
          O guia definitivo do Design System TRDR. Tokens, componentes, padrões de layout
          e prompts prontos para construir qualquer interface com consistência e velocidade.
        </p>
        <div className={styles.heroActions}>
          <Link href="/tokens" className="trdr-btn trdr-btn-primary">
            Ver tokens
          </Link>
          <Link href="/para-ia/prompts" className="trdr-btn trdr-btn-ghost">
            Gerar prompt para IA →
          </Link>
        </div>
      </div>

      <div className={styles.stats}>
        <StatCard value={tokens.length} label="Tokens" description="Primitivos, semânticos e scale" accent />
        <StatCard value={components.length} label="Componentes" description="Documentados com props e tokens" />
        <StatCard value={layouts.length} label="Padrões de Layout" description="Plataforma, site e app" />
        <StatCard value="v1.4" label="Versão" description="design.md atualizado em 2026-04-07" />
      </div>

      <div className={styles.grid}>
        <Link href="/tokens" className="trdr-card-hover" style={{ display: 'block' }}>
          <div className={styles.cardIcon}>◈</div>
          <h3 className={styles.cardTitle}>Tokens</h3>
          <p className={styles.cardDesc}>Todas as cores, espaçamentos, tipografia e tokens semânticos do sistema. Com copy-to-clipboard para hex e CSS variable.</p>
        </Link>

        <Link href="/componentes" className="trdr-card-hover" style={{ display: 'block' }}>
          <div className={styles.cardIcon}>◧</div>
          <h3 className={styles.cardTitle}>Componentes</h3>
          <p className={styles.cardDesc}>Os 82 componentes Figma documentados: props, dimensões, tokens e anatomia. Filtráveis por categoria.</p>
        </Link>

        <Link href="/layouts" className="trdr-card-hover" style={{ display: 'block' }}>
          <div className={styles.cardIcon}>▤</div>
          <h3 className={styles.cardTitle}>Layouts</h3>
          <p className={styles.cardDesc}>Padrões de layout da plataforma de trading, site institucional e app launcher desktop.</p>
        </Link>

        <Link href="/para-ia/prompts" className="trdr-card-hover" style={{ display: 'block' }}>
          <div className={styles.cardIcon} style={{ color: 'var(--action-brand-default)' }}>▶</div>
          <h3 className={styles.cardTitle}>Gerar Prompt</h3>
          <p className={styles.cardDesc}>Wizard em 3 passos que gera prompts prontos para o Claude Code — com tokens e specs dos componentes incluídos automaticamente.</p>
        </Link>

        <Link href="/para-ia" className="trdr-card-hover" style={{ display: 'block' }}>
          <div className={styles.cardIcon}>✦</div>
          <h3 className={styles.cardTitle}>Guia para IA</h3>
          <p className={styles.cardDesc}>Regras absolutas, hierarquia de camadas e como usar tokens de ação e trading. Leitura obrigatória antes de qualquer projeto TRDR.</p>
        </Link>

        <Link href="/design-md" className="trdr-card-hover" style={{ display: 'block' }}>
          <div className={styles.cardIcon}>⊡</div>
          <h3 className={styles.cardTitle}>design.md completo</h3>
          <p className={styles.cardDesc}>O arquivo fonte de verdade completo do design system. Visualize ou copie todo o conteúdo para usar em qualquer ferramenta.</p>
        </Link>
      </div>

      <div className={styles.callout}>
        <div className={styles.calloutContent}>
          <h3 className={styles.calloutTitle}>Novo projeto TRDR?</h3>
          <p className={styles.calloutDesc}>
            Use o Gerador de Prompts para criar o contexto de design system certo para o Claude Code desde o início.
            Selecione o tipo de projeto, contexto e componentes — o prompt é gerado automaticamente.
          </p>
        </div>
        <Link href="/para-ia/prompts" className="trdr-btn trdr-btn-primary">
          Gerar Prompt Agora
        </Link>
      </div>
    </div>
  )
}
