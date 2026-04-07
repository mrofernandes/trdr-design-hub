import { tokens, filterTokens, TokenCategory, TOKEN_CATEGORY_LABELS } from '@/data/tokens'
import TokenRow from './TokenRow'
import styles from './TokenTable.module.css'

interface TokenTableProps {
  search?: string
  category?: TokenCategory
}

export default function TokenTable({ search = '', category }: TokenTableProps) {
  const filtered = filterTokens(tokens, search, category)

  const categories = category
    ? [category]
    : (Object.keys(TOKEN_CATEGORY_LABELS) as TokenCategory[])

  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        <span className={styles.count}>
          {filtered.length} {filtered.length === 1 ? 'token' : 'tokens'}
          {search && ` para "${search}"`}
        </span>
      </div>

      {categories.map(cat => {
        const catTokens = category
          ? filtered
          : filtered.filter(t => t.category === cat)

        if (catTokens.length === 0) return null

        return (
          <div key={cat} className={styles.section}>
            <h3 className={styles.sectionTitle}>{TOKEN_CATEGORY_LABELS[cat]}</h3>
            <div className={styles.tableWrapper}>
              <table className="trdr-table">
                <thead>
                  <tr>
                    <th style={{ width: 40 }} />
                    <th>Token</th>
                    <th>CSS Variable</th>
                    <th>Valor Dark</th>
                    <th>Valor Light</th>
                  </tr>
                </thead>
                <tbody>
                  {catTokens.map(token => (
                    <TokenRow key={token.name} token={token} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}

      {filtered.length === 0 && (
        <div className={styles.empty}>
          <p>Nenhum token encontrado para <strong>"{search}"</strong></p>
        </div>
      )}
    </div>
  )
}
