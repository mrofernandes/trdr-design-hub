import styles from '../../page-layout.module.css'
import pageStyles from './tipografia.module.css'
import CopyButton from '@/components/ui/CopyButton'
import Link from 'next/link'

interface TypographyStyle {
  figmaName: string
  token: string
  group: 'heading' | 'body' | 'label'
  size: number
  weight: number
  weightLabel: string
  family: 'Space Grotesk' | 'Inter'
  letterSpacing: string
  example: string
}

const typographyStyles: TypographyStyle[] = [
  // Headings
  { figmaName: 'Typograph/Headings/H-1', token: 'text/heading/h1', group: 'heading', size: 80, weight: 500, weightLabel: 'Medium', family: 'Space Grotesk', letterSpacing: '0px', example: 'Construa com consistência' },
  { figmaName: 'Typograph/Headings/H-2', token: 'text/heading/h2', group: 'heading', size: 56, weight: 500, weightLabel: 'Medium', family: 'Space Grotesk', letterSpacing: '0px', example: 'Design System TRDR' },
  { figmaName: 'Typograph/Headings/H-3', token: 'text/heading/h3', group: 'heading', size: 46, weight: 700, weightLabel: 'Bold', family: 'Space Grotesk', letterSpacing: '0px', example: 'Tokens e Componentes' },
  { figmaName: 'Typograph/Headings/H-4', token: 'text/heading/h4', group: 'heading', size: 38, weight: 500, weightLabel: 'Medium', family: 'Space Grotesk', letterSpacing: '0px', example: 'Visão Geral do Sistema' },
  { figmaName: 'Typograph/Headings/H-5', token: 'text/heading/h5', group: 'heading', size: 32, weight: 500, weightLabel: 'Medium', family: 'Space Grotesk', letterSpacing: '0px', example: 'Plataforma de Trading' },
  { figmaName: 'Typograph/Headings/H-6', token: 'text/heading/h6', group: 'heading', size: 26, weight: 500, weightLabel: 'Medium', family: 'Space Grotesk', letterSpacing: '0px', example: 'Análise de Mercado' },
  { figmaName: 'Typograph/Headings/H-7', token: 'text/heading/h7', group: 'heading', size: 22, weight: 600, weightLabel: 'Semi Bold', family: 'Inter', letterSpacing: '0px', example: 'Resumo de Posições' },
  // Body
  { figmaName: 'Typograph/Body/B-1', token: 'text/body/b1', group: 'body', size: 18, weight: 400, weightLabel: 'Regular', family: 'Inter', letterSpacing: '0px', example: 'Texto de corpo principal, usado em parágrafos e descrições.' },
  { figmaName: 'Typograph/Body/B-2', token: 'text/body/b2', group: 'body', size: 16, weight: 500, weightLabel: 'Medium', family: 'Inter', letterSpacing: '0px', example: 'Texto de corpo médio para conteúdo secundário.' },
  { figmaName: 'Typograph/Body/B-3', token: 'text/body/b3', group: 'body', size: 14, weight: 400, weightLabel: 'Regular', family: 'Inter', letterSpacing: '0px', example: 'Texto padrão da interface, labels e metadados.' },
  { figmaName: 'Typograph/Body/B-4', token: 'text/body/b4', group: 'body', size: 12, weight: 500, weightLabel: 'Medium', family: 'Inter', letterSpacing: '0.2px', example: 'Texto auxiliar pequeno, badges e indicadores.' },
  { figmaName: 'Typograph/Body/B-5', token: 'text/body/b5', group: 'body', size: 10, weight: 400, weightLabel: 'Regular', family: 'Inter', letterSpacing: '0px', example: 'Texto mínimo, tooltips e microcópia.' },
  { figmaName: 'Typograph/Body/Auxiliar', token: 'text/body/auxiliar', group: 'body', size: 12, weight: 400, weightLabel: 'Regular', family: 'Inter', letterSpacing: '2% (PERCENT)', example: 'Texto auxiliar com espaçamento aumentado.' },
  // Labels
  { figmaName: 'Typograph/Labels/L-2', token: 'text/label/l2', group: 'label', size: 16, weight: 600, weightLabel: 'Semi Bold', family: 'Inter', letterSpacing: '0px', example: 'Label Médio' },
  { figmaName: 'Typograph/Labels/L-3', token: 'text/label/l3', group: 'label', size: 14, weight: 600, weightLabel: 'Semi Bold', family: 'Inter', letterSpacing: '0px', example: 'Label Pequeno' },
]

const groupColors: Record<string, string> = {
  heading: 'trdr-badge-brand',
  body: 'trdr-badge-neutral',
  label: 'trdr-badge-success',
}

const groupLabels: Record<string, string> = {
  heading: 'Heading',
  body: 'Body',
  label: 'Label',
}

export default function TipografiaPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Tipografia</h1>
          <p className={styles.subtitle}>
            15 estilos tipográficos do Design System TRDR — todos vinculados às variáveis da coleção <code>typography</code> no Figma.
          </p>
        </div>
        <div className={styles.nav}>
          <Link href="/tokens/primitivos" className="trdr-btn trdr-btn-ghost">Primitivos</Link>
          <Link href="/tokens/semanticos" className="trdr-btn trdr-btn-ghost">Semânticos</Link>
        </div>
      </div>

      <div className={pageStyles.groups}>
        {(['heading', 'body', 'label'] as const).map(group => (
          <section key={group} className={pageStyles.group}>
            <h2 className={pageStyles.groupTitle}>
              <span className={`trdr-badge ${groupColors[group]}`}>{groupLabels[group]}</span>
            </h2>

            {typographyStyles.filter(s => s.group === group).map(style => (
              <div key={style.token} className={pageStyles.card}>
                <div className={pageStyles.preview}>
                  <span
                    style={{
                      fontFamily: style.family === 'Space Grotesk' ? 'var(--font-space-grotesk)' : 'var(--font-inter)',
                      fontSize: style.size,
                      fontWeight: style.weight,
                      letterSpacing: style.letterSpacing.startsWith('2%') ? undefined : style.letterSpacing,
                      color: 'var(--content-primary)',
                      lineHeight: 1.2,
                      display: 'block',
                      wordBreak: 'break-word',
                    }}
                  >
                    {style.example}
                  </span>
                </div>

                <div className={pageStyles.meta}>
                  <div className={pageStyles.tokens}>
                    <div className={pageStyles.tokenRow}>
                      <span className={pageStyles.tokenLabel}>Figma Style</span>
                      <code className={pageStyles.tokenValue}>{style.figmaName}</code>
                      <CopyButton text={style.figmaName} label="nome do style" />
                    </div>
                    <div className={pageStyles.tokenRow}>
                      <span className={pageStyles.tokenLabel}>Token</span>
                      <code className={pageStyles.tokenValue}>{style.token}</code>
                      <CopyButton text={style.token} label="token" />
                    </div>
                  </div>

                  <table className={pageStyles.propsTable}>
                    <tbody>
                      <tr>
                        <td className={pageStyles.propName}>Tamanho</td>
                        <td><code>{style.size}px</code></td>
                        <td className={pageStyles.propName}>Família</td>
                        <td><code>{style.family}</code></td>
                      </tr>
                      <tr>
                        <td className={pageStyles.propName}>Peso</td>
                        <td><code>{style.weight} ({style.weightLabel})</code></td>
                        <td className={pageStyles.propName}>Letter Spacing</td>
                        <td><code>{style.letterSpacing}</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
