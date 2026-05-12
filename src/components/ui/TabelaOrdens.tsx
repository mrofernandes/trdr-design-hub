'use client'
import styles from './TabelaOrdens.module.css'

export type OrdemTipo = 'C' | 'V'
export type OrdemStatus = 'aberta' | 'executada' | 'cancelada' | 'parcial'

export interface OrdemRow {
  horario: string
  ativo: string
  tipo: OrdemTipo
  preco: string | number
  medio?: string | number
  qtde: number
  disp?: string | number
  aberta?: string | number
  exec?: string | number
  status: OrdemStatus
  validade?: string
  origem?: string
}

const SAMPLE_ROWS: OrdemRow[] = [
  { horario: '11:32:56', ativo: 'WDOK18', tipo: 'C', preco: '3.425.600', medio: '3.425.600', qtde: 20, disp: '.', aberta: '.', exec: 20, status: 'aberta',    validade: '.', origem: 'Loss'   },
  { horario: '11:35:24', ativo: 'WDOK18', tipo: 'V', preco: '3.425.600', medio: '3.425.600', qtde: 19, disp: '.', aberta: '.', exec: 19, status: 'aberta',    validade: '.', origem: 'Criptor' },
  { horario: '11:36:03', ativo: 'WDOK18', tipo: 'C', preco: '3.425.600', medio: '3.425.600', qtde: 16, disp: '.', aberta: '.', exec: 16, status: 'cancelada', validade: '.', origem: 'Criptor' },
  { horario: '11:40:12', ativo: 'WDOK19', tipo: 'C', preco: '3.425.600', medio: '3.425.600', qtde: 22, disp: '.', aberta: '.', exec: 22, status: 'executada', validade: '.', origem: 'Loss'   },
  { horario: '11:41:45', ativo: 'WDOK19', tipo: 'V', preco: '3.425.600', medio: '3.425.600', qtde: 21, disp: '.', aberta: '.', exec: 21, status: 'executada', validade: '.', origem: 'Criptor' },
  { horario: '11:42:30', ativo: 'WDOK19', tipo: 'C', preco: '3.425.600', medio: '3.425.600', qtde: 18, disp: '.', aberta: '.', exec: 18, status: 'executada', validade: '.', origem: 'Criptor' },
  { horario: '11:45:12', ativo: 'WDOK20', tipo: 'C', preco: '3.425.600', medio: '3.425.600', qtde: 25, disp: '.', aberta: '.', exec: 25, status: 'executada', validade: '.', origem: 'Loss'   },
  { horario: '11:46:57', ativo: 'WDOK20', tipo: 'V', preco: '3.425.600', medio: '3.425.600', qtde: 24, disp: '.', aberta: '.', exec: 24, status: 'executada', validade: '.', origem: 'Criptor' },
  { horario: '11:32:56', ativo: 'WDOK18', tipo: 'C', preco: '3.425.600', medio: '3.425.600', qtde: 20, disp: '.', aberta: '.', exec: 20, status: 'executada', validade: '.', origem: 'Loss'   },
  { horario: '11:35:24', ativo: 'WDOK18', tipo: 'V', preco: '3.425.600', medio: '3.425.600', qtde: 19, disp: '.', aberta: '.', exec: 19, status: 'executada', validade: '.', origem: 'Criptor' },
]

const STATUS_LABEL: Record<OrdemStatus, string> = {
  aberta:    'Aberta',
  executada: 'Executada',
  cancelada: 'Cancelada',
  parcial:   'Parcial',
}

interface TabelaOrdensProps {
  rows?: OrdemRow[]
  className?: string
}

export default function TabelaOrdens({ rows = SAMPLE_ROWS, className }: TabelaOrdensProps) {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <table className="trdr-tabela-ordens">
        <colgroup>
          <col style={{ width: 81 }} />
          <col style={{ width: 80 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 104 }} />
          <col style={{ width: 79 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 65 }} />
          <col style={{ width: 86 }} />
          <col style={{ width: 79 }} />
          <col style={{ width: 65 }} />
        </colgroup>
        <thead>
          <tr>
            <th>Horário</th>
            <th>Ativo</th>
            <th>C/V</th>
            <th>Preço</th>
            <th>Médio</th>
            <th>Qtde</th>
            <th>Disp</th>
            <th>Aberta</th>
            <th>Exec</th>
            <th>Status</th>
            <th>Validade</th>
            <th>Origem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={row.status === 'cancelada' ? 'trdr-tabela-ordens-row-cancelada' : ''}
            >
              <td>{row.horario}</td>
              <td>{row.ativo}</td>
              <td className={row.tipo === 'C' ? 'col-cv-c' : 'col-cv-v'}>{row.tipo}</td>
              <td>{String(row.preco)}</td>
              <td>{row.medio ?? '.'}</td>
              <td>{row.qtde}</td>
              <td>{row.disp ?? '.'}</td>
              <td>{row.aberta ?? '.'}</td>
              <td>{row.exec ?? '.'}</td>
              <td>{STATUS_LABEL[row.status]}</td>
              <td>{row.validade ?? '.'}</td>
              <td>{row.origem ?? '.'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
