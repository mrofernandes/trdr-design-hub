import { parsePrimitiveSubsections } from '@/lib/parseDesignMd'
import styles from '../../page-layout.module.css'
import tokenStyles from './primitivos.module.css'

function isColor(value: string): boolean {
  return /^#([0-9A-Fa-f]{3,8})$/.test(value)
}

export default function PrimitivosPage() {
  const subsections = parsePrimitiveSubsections()

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Tokens Primitivos</h1>
          <p className={styles.subtitle}>
            Valores brutos do sistema. <strong>Nunca use diretamente na UI</strong> — use tokens semânticos.
            <br />
            Fonte: <code>design.md</code> — atualiza automaticamente a cada deploy.
          </p>
        </div>
      </div>

      {subsections.map(sub => (
        <section key={sub.title} className={tokenStyles.subsection}>
          <h2 className={tokenStyles.subsectionTitle}>{sub.title}</h2>

          {sub.groups.map(group => (
            <div key={group.name} className={tokenStyles.group}>
              <h3 className={tokenStyles.groupTitle}>{group.name}</h3>
              <div className={tokenStyles.tableWrapper}>
                <table className="trdr-table">
                  <thead>
                    <tr>
                      <th style={{ width: 36 }} />
                      <th>Token</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.entries.map(entry => (
                      <tr key={entry.name}>
                        <td>
                          {isColor(entry.value) && (
                            <span
                              className={tokenStyles.swatch}
                              style={{ backgroundColor: entry.value }}
                              title={entry.value}
                            />
                          )}
                        </td>
                        <td>
                          <code className={tokenStyles.tokenName}>{entry.name}</code>
                        </td>
                        <td>
                          <code className={tokenStyles.tokenValue}>{entry.value}</code>
                          {entry.extra && (
                            <span className={tokenStyles.extra}>{entry.extra}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
