'use client'
import styles from './TabelaCotacoes.module.css'
import Badge from './Badge'

export type TendDirection = 'up' | 'down' | null

export interface CotacaoRow {
  ativo: string
  ultimo: string | number
  qUlt?: string | number
  varPct: number
  tend?: TendDirection
  dif?: string | number
  status?: string
  qOfc?: string | number
  ofc?: string | number
  ofv?: string | number
  qOfv?: string | number
  teorico?: string | number
  selected?: boolean
}

const SAMPLE_ROWS: CotacaoRow[] = [
  { ativo: 'ITUB4', ultimo: '50.47', qUlt: 100, varPct: -0.72, tend: 'down', dif: '0.36', status: '.', qOfc: '1.000', ofc: '50.47', ofv: '50.49', qOfv: '1.300', teorico: '.', selected: true },
  { ativo: 'IBOV',  ultimo: '84.204,78', qUlt: undefined, varPct: 1.10, tend: 'up', dif: '987.55', status: '.', qOfc: '.', ofc: '.', ofv: '.', qOfv: '.', teorico: '.' },
  { ativo: 'GGBR4', ultimo: '16,10', qUlt: 100, varPct: -1.83, tend: 'down', dif: '0.29', status: '.', qOfc: '4.400', ofc: '16,10', ofv: '16,11', qOfv: '3.800', teorico: '.' },
  { ativo: 'PETR3', ultimo: '31,75', qUlt: 150, varPct: -0.95, tend: 'down', dif: '0.30', status: '.', qOfc: '3.200', ofc: '31,75', ofv: '31,80', qOfv: '2.500', teorico: '.' },
  { ativo: 'VALE3', ultimo: '92,00', qUlt: 200, varPct: 1.20, tend: 'up', dif: '0.50', status: '.', qOfc: '2.700', ofc: '92,00', ofv: '92,10', qOfv: '4.000', teorico: '.' },
  { ativo: 'ABEV3', ultimo: '15,25', qUlt: 120, varPct: -0.80, tend: 'down', dif: '0.25', status: '.', qOfc: '5.000', ofc: '15,25', ofv: '15,30', qOfv: '1.800', teorico: '.' },
  { ativo: 'USIM5', ultimo: '8,90',  qUlt: 90,  varPct: -1.00, tend: 'down', dif: '0.18', status: '.', qOfc: '2.500', ofc: '8,90', ofv: '8,95', qOfv: '2.100', teorico: '.' },
]

interface TabelaCotacoesProps {
  rows?: CotacaoRow[]
  className?: string
}

function formatVar(v: number) {
  const sign = v > 0 ? '+' : ''
  return `${sign}${v.toFixed(2)}%`
}

export default function TabelaCotacoes({ rows = SAMPLE_ROWS, className }: TabelaCotacoesProps) {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <table className="trdr-tabela-cotacoes">
        <colgroup>
          <col style={{ width: 65 }} />
          <col style={{ width: 80 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
        </colgroup>
        <thead>
          <tr>
            <th>Ativo</th>
            <th>Último</th>
            <th>Q Últ</th>
            <th>Var %</th>
            <th>Tend</th>
            <th>Dif</th>
            <th>Stat...</th>
            <th>QOfc</th>
            <th>Ofc</th>
            <th>Ofv</th>
            <th>QOfv</th>
            <th>Teórico</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isUp = row.varPct > 0
            const varClass = isUp ? 'col-var-up' : 'col-var-down'
            const tendIcon = row.tend === 'up' ? 'arrow_drop_up' : row.tend === 'down' ? 'arrow_drop_down' : ''
            const tendClass = row.tend === 'up' ? 'col-tend-up' : 'col-tend-down'
            return (
              <tr key={i} className={row.selected ? 'trdr-tabela-cotacoes-row-selected' : ''}>
                <td>{row.ativo}</td>
                <td className="col-ultimo">{String(row.ultimo)}</td>
                <td>{row.qUlt ?? '.'}</td>
                <td className={varClass}>
                  <Badge variant={isUp ? 'success' : 'warning'} dot>{formatVar(row.varPct)}</Badge>
                </td>
                <td>
                  {tendIcon && (
                    <span className={`col-tend-icon ${tendClass}`}>{tendIcon}</span>
                  )}
                </td>
                <td>{row.dif ?? '.'}</td>
                <td>{row.status ?? '.'}</td>
                <td>{row.qOfc ?? '.'}</td>
                <td>{row.ofc ?? '.'}</td>
                <td>{row.ofv ?? '.'}</td>
                <td>{row.qOfv ?? '.'}</td>
                <td>{row.teorico ?? '.'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
