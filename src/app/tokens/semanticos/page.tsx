import { parseSemanticTokens } from '@/lib/parseDesignMd'
import styles from '../../page-layout.module.css'
import tokenStyles from './semanticos.module.css'

function isColor(value: string): boolean {
  return /^#([0-9A-Fa-f]{3,8})$/.test(value)
}

export default function SemanticosPage() {
  const tokens = parseSemanticTokens()

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Tokens Semânticos</h1>
          <p className={styles.subtitle}>
            Use sempre estes tokens na UI. Derivados do <code>design.md</code> — atualizam a cada deploy.
          </p>
        </div>
      </div>

      <div className={tokenStyles.tableWrapper}>
        <table className="trdr-table">
          <thead>
            <tr>
              <th style={{ width: 36 }} />
              <th>Token</th>
              <th>CSS Variable</th>
              <th>Valor (Dark)</th>
              <th>Base Primitiva</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map(t => (
              <tr key={t.token}>
                <td>
                  {isColor(t.dark) && (
                    <span
                      className={tokenStyles.swatch}
                      style={{ backgroundColor: t.dark }}
                      title={t.dark}
                    />
                  )}
                </td>
                <td>
                  <code className={tokenStyles.tokenName}>{t.token}</code>
                </td>
                <td>
                  <code className={tokenStyles.cssVar}>{t.cssVar}</code>
                </td>
                <td>
                  <code className={tokenStyles.value}>{t.dark}</code>
                </td>
                <td>
                  <span className={tokenStyles.base}>{t.base}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {tokens.length === 0 && (
        <p className={tokenStyles.empty}>Nenhum token semântico encontrado no design.md.</p>
      )}
    </div>
  )
}
