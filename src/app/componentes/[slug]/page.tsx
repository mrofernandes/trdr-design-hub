import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getComponentBySlug, components, COMPONENT_CATEGORY_LABELS } from '@/data/components'
import CopyButton from '@/components/ui/CopyButton'
import ComponentPreview from '@/components/ui/ComponentPreview'
import styles from './component-detail.module.css'
import pageStyles from '../../page-layout.module.css'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return components.map(c => ({ slug: c.slug }))
}

export default async function ComponentDetailPage({ params }: PageProps) {
  const { slug } = await params
  const comp = getComponentBySlug(slug)
  if (!comp) notFound()

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.header}>
        <div>
          <div className={styles.breadcrumb}>
            <Link href="/componentes">Componentes</Link>
            <span>/</span>
            <span>{comp.name}</span>
          </div>
          <h1 className={pageStyles.title}>{comp.name}</h1>
          <p className={pageStyles.subtitle}>{comp.description}</p>
        </div>
        <div className={styles.meta}>
          <span className="trdr-badge trdr-badge-brand">
            {COMPONENT_CATEGORY_LABELS[comp.category]}
          </span>
          <div className={styles.figmaId}>
            <code>Figma: {comp.figmaId}</code>
            <CopyButton text={comp.figmaId} label="Figma ID" />
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Preview ao vivo */}
        {comp.implemented && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Preview</h2>
            <ComponentPreview slug={comp.slug} />
          </section>
        )}

        {/* Dimensões */}
        {comp.dimensions.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Dimensões</h2>
            <table className="trdr-table">
              <thead>
                <tr>
                  <th>Variante</th>
                  <th>Largura</th>
                  <th>Altura</th>
                </tr>
              </thead>
              <tbody>
                {comp.dimensions.map((dim, i) => (
                  <tr key={i}>
                    <td>{dim.label}</td>
                    <td><code>{dim.width ?? '—'}</code></td>
                    <td><code>{dim.height}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Props */}
        {comp.props.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Props / Variantes</h2>
            <table className="trdr-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Tipo</th>
                  <th>Valores</th>
                </tr>
              </thead>
              <tbody>
                {comp.props.map((prop, i) => (
                  <tr key={i}>
                    <td><code>{prop.name}</code></td>
                    <td><span className="trdr-badge trdr-badge-neutral">{prop.type}</span></td>
                    <td>
                      <div className={styles.values}>
                        {prop.values.map(v => (
                          <code key={v} className={styles.value}>{v}</code>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Tokens */}
        {comp.tokens.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Tokens Utilizados</h2>
            <table className="trdr-table">
              <thead>
                <tr>
                  <th>Propriedade</th>
                  <th>Token</th>
                  <th>Valor</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {comp.tokens.map((token, i) => (
                  <tr key={i}>
                    <td>{token.property}</td>
                    <td><code className={styles.tokenName}>{token.token}</code></td>
                    <td>
                      <div className={styles.tokenValue}>
                        {token.value.startsWith('#') && (
                          <div
                            className={styles.swatch}
                            style={{ backgroundColor: token.value }}
                          />
                        )}
                        <code>{token.value}</code>
                      </div>
                    </td>
                    <td>
                      <CopyButton
                        text={`var(--${token.token.replace(/\./g, '-')})`}
                        label={token.token}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Anatomia */}
        {comp.anatomy && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Anatomia</h2>
            <div className="trdr-code-block">
              <pre>{comp.anatomy}</pre>
            </div>
          </section>
        )}

        {/* Notas */}
        {comp.notes && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Notas</h2>
            <div className={styles.notes}>
              <p>{comp.notes}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
