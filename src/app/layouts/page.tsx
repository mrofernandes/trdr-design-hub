import { layouts } from '@/data/layouts'
import CopyButton from '@/components/ui/CopyButton'
import styles from '../page-layout.module.css'
import layoutStyles from './layouts.module.css'

export default function LayoutsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Padrões de Layout</h1>
          <p className={styles.subtitle}>
            {layouts.length} padrões documentados: plataforma de trading, site institucional e app desktop.
          </p>
        </div>
      </div>

      <div className={layoutStyles.layouts}>
        {layouts.map(layout => (
          <section key={layout.id} className={layoutStyles.layout}>
            <div className={layoutStyles.layoutHeader}>
              <div>
                <h2 className={layoutStyles.layoutTitle}>{layout.name}</h2>
                <div className={layoutStyles.layoutMeta}>
                  <code className={layoutStyles.source}>{layout.source}</code>
                  <span className="trdr-badge trdr-badge-neutral">{layout.resolution}</span>
                </div>
                <p className={layoutStyles.layoutDesc}>{layout.description}</p>
              </div>
            </div>

            {/* Diagrama */}
            <div className="trdr-code-block">
              <pre>{layout.diagram}</pre>
            </div>

            <div className={layoutStyles.details}>
              {/* Zonas */}
              {layout.zones.length > 0 && (
                <div className={layoutStyles.detailSection}>
                  <h3 className={layoutStyles.detailTitle}>Zonas</h3>
                  <table className="trdr-table">
                    <thead>
                      <tr>
                        <th>Zona</th>
                        <th>Tamanho</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      {layout.zones.map((zone, i) => (
                        <tr key={i}>
                          <td><strong>{zone.name}</strong></td>
                          <td><code>{zone.size}</code></td>
                          <td>{zone.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tokens */}
              {layout.tokens.length > 0 && (
                <div className={layoutStyles.detailSection}>
                  <h3 className={layoutStyles.detailTitle}>Tokens</h3>
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
                      {layout.tokens.map((token, i) => (
                        <tr key={i}>
                          <td>{token.property}</td>
                          <td><code style={{ color: 'var(--content-brand)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>{token.token}</code></td>
                          <td><code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{token.value}</code></td>
                          <td>
                            {token.token !== '—' && (
                              <CopyButton text={`var(--${token.token.replace(/\./g, '-')})`} label={token.token} />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {layout.notes && (
              <div className={layoutStyles.note}>
                <strong>Nota:</strong> {layout.notes}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
