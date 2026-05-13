'use client'

import styles from './Boleta.module.css'
import SegmentedControl from './SegmentedControl'
import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Button from './Button'
import Dropdown from './Dropdown'

export type BoletaVersao = 'avancado' | 'simples'

export interface BoletaProps {
  versao?: BoletaVersao
  className?: string
}

export default function Boleta({ versao = 'avancado', className = '' }: BoletaProps) {
  const activeSegment = versao === 'avancado' ? 0 : 1

  return (
    <div className={[styles.boleta, className].filter(Boolean).join(' ')}>

      {/* ABAS */}
      <div className={styles.abas}>
        <SegmentedControl tabs={['Avançado', 'Simples']} active={activeSegment} />
      </div>

      {/* CONTAINER — form fields */}
      <div className={styles.container}>

        {/* Estratégia */}
        <div className={styles.fieldGroup}>
          <span className={styles.labelText}>Estratégia</span>
          <Dropdown value="Manejo" stroke={false} />
        </div>

        {/* Disponível */}
        <div className={styles.infoRow}>
          <span className={styles.labelText}>Disp.</span>
          <span className={styles.valueText}>258.010.200,00 USDT</span>
        </div>

        {/* Quantidade */}
        <div className={styles.fieldGroup}>
          <div className={styles.fieldLabel}>
            <span className={styles.labelText}>Quantidade</span>
            <svg className={styles.settingsIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
            </svg>
          </div>
          <TextInput placeholder="Inserir" size="large" readOnly />
          <div className={styles.quickBtns}>
            <Button variant="ghost" size="lg">1</Button>
            <Button variant="ghost" size="lg">2</Button>
            <Button variant="ghost" size="lg">3</Button>
          </div>
        </div>

        {/* Preço da Ordem */}
        <div className={styles.fieldGroup}>
          <div className={styles.fieldLabel}>
            <span className={styles.labelText}>Preço da Ordem</span>
          </div>
          <TextInput defaultValue="0,00" size="large" readOnly />
        </div>

        {/* TP/SL checkbox */}
        <Checkbox checked={false} onChange={() => {}} label="TP/SL" />

      </div>

      {/* BOTÕES */}
      <div className={styles.botoes}>

        <div className={styles.actionRow}>
          <Button variant="long" size="lg" className={styles.flex1}>CP Limite</Button>
          <Button variant="short" size="lg" className={styles.flex1}>VD Limite</Button>
        </div>

        <div className={styles.actionRow}>
          <Button variant="long" size="lg" className={styles.flex1}>CP Mercado</Button>
          <Button variant="short" size="lg" className={styles.flex1}>VD Mercado</Button>
        </div>

        <div className={styles.actionRow}>
          <Button variant="long" size="lg" className={styles.flex1}>Bid</Button>
          <Button variant="short" size="lg" className={styles.flex1}>Ask</Button>
        </div>

        <div className={styles.actionRow}>
          <Button variant="long" size="lg" className={styles.flex1}>Ask</Button>
          <Button variant="short" size="lg" className={styles.flex1}>Bid</Button>
        </div>

        <button className={styles.btnZerar}>Zerar (5)</button>

        <Button variant="ghost" size="lg" className={styles.fullWidth}>Cancelar ordens (2) + Zerar (5)</Button>

        <div className={styles.btnGroup}>
          <Button variant="ghost" size="lg">Cancelar Ordem</Button>
          <Button variant="ghost" size="lg" className={styles.flex1}>Inverter</Button>
        </div>

        {/* Posição */}
        <div className={styles.posicao}>
          <div className={styles.posicaoHeader}>
            <span className={styles.posicaoTitle}>Posição</span>
            <span className={styles.posicaoStatus}>Zerado</span>
          </div>
          <div className={styles.posicaoMeta}>
            <span>Qtd: 0</span>
            <span>MÉDIO (BM)</span>
          </div>
          <div className={styles.posicaoMeta}>
            <span>Resultado</span>
            <span>R$ 0,00</span>
          </div>
        </div>

      </div>
    </div>
  )
}
