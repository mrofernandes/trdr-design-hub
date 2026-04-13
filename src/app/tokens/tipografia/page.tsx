import styles from '../../page-layout.module.css'
import pageStyles from './tipografia.module.css'
import CopyButton from '@/components/ui/CopyButton'

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
      </div>

      <div className={pageStyles.groups}>
        {(['heading', 'body', 'label'] as const).map(group => (
          <section key={group} className={pageStyles.section}>
            <h3 className={pageStyles.sectionTitle}>
              <span className={`trdr-badge ${groupColors[group]}`}>{groupLabels[group]}</span>
            </h3>
            <div className={pageStyles.tableWrapper}>
              <table className="trdr-table">
                <thead>
                  <tr>
                    <th style={{ width: 220 }}>Preview</th>
                    <th>Figma Style</th>
                    <th>Token</th>
                    <th>Tamanho</th>
                    <th>Peso</th>
                    <th>Família</th>
                    <th>Letter Spacing</th>
                  </tr>
                </thead>
                <tbody>
                  {typographyStyles.filter(s => s.group === group).map(style => (
                    <tr key={style.token}>
                      <td>
                        <div className={pageStyles.previewCell}>
                          <span
                            style={{
                              fontFamily: style.family === 'Space Grotesk' ? 'var(--font-space-grotesk)' : 'var(--font-inter)',
                              fontSize: Math.min(style.size, 32),
                              fontWeight: style.weight,
                              letterSpacing: style.letterSpacing.startsWith('2%') ? undefined : style.letterSpacing,
                              color: 'var(--content-primary)',
                              lineHeight: 1.2,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {style.example}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className={pageStyles.codeCell}>
                          <code className={pageStyles.code}>{style.figmaName}</code>
                          <CopyButton text={style.figmaName} label="nome do style" />
                        </div>
                      </td>
                      <td>
                        <div className={pageStyles.codeCell}>
                          <code className={pageStyles.code}>{style.token}</code>
                          <CopyButton text={style.token} label="token" />
                        </div>
                      </td>
                      <td><code className={pageStyles.code}>{style.size}px</code></td>
                      <td><code className={pageStyles.code}>{style.weight} ({style.weightLabel})</code></td>
                      <td><code className={pageStyles.code}>{style.family}</code></td>
                      <td><code className={pageStyles.code}>{style.letterSpacing}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
