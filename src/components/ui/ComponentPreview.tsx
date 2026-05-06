'use client'

import React, { useState } from 'react'
import styles from './ComponentPreview.module.css'
import Switch, { SwitchType } from './Switch'
import Dropdown from './Dropdown'
import Checkbox, { CheckboxType } from './Checkbox'
import RadioButton from './RadioButton'
import ComboInput from './ComboInput'
import Tooltip from './Tooltip'
import TextInput from './TextInput'

interface Props {
  slug: string
}

const ICON_STYLE: React.CSSProperties = {
  fontFamily: 'Material Symbols Outlined',
  fontWeight: 300,
  fontStyle: 'normal',
  fontSize: 20,
  lineHeight: '20px',
  fontVariationSettings: "'FILL' 0, 'GRAD' 0",
}

function PreviewLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: 'var(--font-secondary)',
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--content-tertiary)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
    }}>
      {children}
    </span>
  )
}

export default function ComponentPreview({ slug }: Props) {
  const content = renderPreview(slug)
  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {content}
    </div>
  )
}

function renderPreview(slug: string) {
  switch (slug) {

    case 'button':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Default (24px)</PreviewLabel>
          <div className={styles.row}>
            <button className="trdr-btn trdr-btn-primary">Primary</button>
            <button className="trdr-btn trdr-btn-secondary">Secondary</button>
            <button className="trdr-btn trdr-btn-ghost">Ghost</button>
            <button className="trdr-btn trdr-btn-destructive">Destructive</button>
            <button className="trdr-btn trdr-btn-inverse">Inverse</button>
          </div>
          <div className={styles.row}>
            <button className="trdr-btn trdr-btn-link">Link</button>
            <button className="trdr-btn trdr-btn-link-danger">Link Danger</button>
            <button className="trdr-btn trdr-btn-secondary-destruct">Secondary Destruct</button>
          </div>
          <PreviewLabel>Large (32px)</PreviewLabel>
          <div className={styles.row}>
            <button className="trdr-btn trdr-btn-primary trdr-btn-lg">Primary</button>
            <button className="trdr-btn trdr-btn-secondary trdr-btn-lg">Secondary</button>
            <button className="trdr-btn trdr-btn-ghost trdr-btn-lg">Ghost</button>
          </div>
          <PreviewLabel>Trading</PreviewLabel>
          <div className={styles.row}>
            <button className="trdr-btn trdr-btn-long">Long</button>
            <button className="trdr-btn trdr-btn-short">Short</button>
            <button className="trdr-btn trdr-btn-long trdr-btn-lg">Long</button>
            <button className="trdr-btn trdr-btn-short trdr-btn-lg">Short</button>
          </div>
          <PreviewLabel>Disabled</PreviewLabel>
          <div className={styles.row}>
            <button className="trdr-btn trdr-btn-primary" disabled>Primary</button>
            <button className="trdr-btn trdr-btn-secondary" disabled>Secondary</button>
            <button className="trdr-btn trdr-btn-ghost" disabled>Ghost</button>
          </div>
        </div>
      )

    case 'text-input':
      return (
        <div className={styles.previewInner}>
          <div className={styles.col}>
            <div className={styles.inputWrapper}>
              <span style={{ ...ICON_STYLE, color: 'var(--content-tertiary)' }}>search</span>
              <input
                className="trdr-input"
                type="text"
                placeholder="Buscar por nome, valor ou CSS var..."
                style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none' }}
                readOnly
              />
            </div>
            <div className={styles.inputWrapper}>
              <span style={{ ...ICON_STYLE, color: 'var(--content-tertiary)' }}>person</span>
              <input
                className="trdr-input"
                type="text"
                defaultValue="Texto preenchido"
                style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none' }}
                readOnly
              />
            </div>
          </div>
        </div>
      )

    case 'abas':
      return (
        <div className={styles.previewInner}>
          <div className={styles.tabsWrapper}>
            {['Todos os tokens', 'Primitivos', 'Semânticos', 'Scale', 'Tipografia'].map((label, i) => (
              <div key={label} className={styles.tabItem} data-active={i === 0 ? 'true' : undefined}>
                <span style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 16,
                  fontWeight: 500,
                  color: i === 0 ? 'var(--content-primary)' : 'var(--content-tertiary)',
                  padding: '12px',
                  whiteSpace: 'nowrap',
                }}>
                  {label}
                </span>
                {i === 0 && <div className={styles.tabUnderline} />}
              </div>
            ))}
          </div>
        </div>
      )

    case 'segmented-control':
      return (
        <div className={styles.previewInner}>
          <div className="trdr-segment-control">
            {['Filtro 1', 'Filtro 2', 'Filtro 3', 'Filtro 4', 'Filtro 5'].map((label, i) => (
              <span
                key={label}
                className={`trdr-segment ${i === 0 ? 'trdr-segment-active' : 'trdr-segment-inactive'}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      )

    case 'sub-menu-item':
      return (
        <div className={styles.previewInner}>
          <div className={styles.menuList}>
            {[
              { icon: 'palette', label: 'Todos os tokens' },
              { icon: 'widgets', label: 'Catálogo' },
              { icon: 'smart_toy', label: 'Guia & Regras' },
            ].map(({ icon, label }, i) => (
              <div
                key={label}
                className={styles.menuItem}
                data-active={i === 0 ? 'true' : undefined}
              >
                <span style={{ ...ICON_STYLE, color: 'var(--content-tertiary)' }}>{icon}</span>
                <span style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 14,
                  color: 'var(--content-secondary)',
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )

    case 'card':
      return (
        <div className={styles.previewInner}>
          <div className={styles.row} style={{ flexWrap: 'wrap' }}>
            {[
              { icon: 'palette', title: 'Tokens', desc: 'Cores, espaçamentos e tipografia.' },
              { icon: 'widgets', title: 'Componentes', desc: 'Props, dimensões e tokens.' },
              { icon: 'auto_awesome', title: 'Gerar Prompt', desc: 'Pronto para Claude Code.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={`trdr-card ${styles.cardExample}`}>
                <span style={{
                  fontFamily: 'Material Symbols Outlined',
                  fontSize: 44,
                  fontWeight: 100,
                  fontStyle: 'normal',
                  color: 'var(--content-brand)',
                  lineHeight: 1,
                  fontVariationSettings: "'FILL' 0, 'GRAD' 0",
                }}>
                  {icon}
                </span>
                <span style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 20,
                  fontWeight: 500,
                  color: 'var(--content-secondary)',
                  lineHeight: 1.1,
                }}>
                  {title}
                </span>
                <p style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 13,
                  color: 'var(--content-tertiary)',
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'combo-input':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Estados</PreviewLabel>
          <div className={styles.col}>
            <ComboInput value="16" state="default" />
            <ComboInput value="32" state="hover" />
            <ComboInput value="8" state="selected-input" />
            <ComboInput value="16" state="selected-chevron" />
          </div>
          <PreviewLabel>Com ícone</PreviewLabel>
          <div className={styles.col}>
            <ComboInput value="16" iconLead state="default" />
            <ComboInput value="16" iconLead state="selected-chevron" />
          </div>
        </div>
      )

    case 'tooltip':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Direções (Top)</PreviewLabel>
          <div className={styles.row} style={{ flexWrap: 'wrap', gap: 16, paddingTop: 12 }}>
            <Tooltip text="Tooltip text" hotkey="⌘V" direction="top-center" />
            <Tooltip text="Tooltip text" direction="top-left" />
            <Tooltip text="Tooltip text" direction="top-right" />
          </div>
          <PreviewLabel>Bottom</PreviewLabel>
          <div className={styles.row} style={{ flexWrap: 'wrap', gap: 16, paddingTop: 12 }}>
            <Tooltip text="Tooltip text" hotkey="⌘V" direction="bottom-center" />
            <Tooltip text="Tooltip text" direction="bottom-left" />
            <Tooltip text="Tooltip text" direction="bottom-right" />
          </div>
          <PreviewLabel>Laterais</PreviewLabel>
          <div className={styles.row} style={{ gap: 24, paddingTop: 12 }}>
            <Tooltip text="Tooltip text" direction="right" />
            <Tooltip text="Tooltip text" direction="left" />
          </div>
        </div>
      )

    case 'checkbox':
      return <CheckboxPreview />

    case 'radio-button':
      return <RadioButtonPreview />

    case 'dropdown':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Default (24px)</PreviewLabel>
          <div className={styles.row}>
            <Dropdown value="WINQ25" />
            <Dropdown value="WINQ25" state="focused" />
            <Dropdown value="WINQ25" state="active" />
          </div>
          <div className={styles.row}>
            <Dropdown placeholder="Selecione" />
            <Dropdown value="Desativado" disabled />
          </div>
          <PreviewLabel>Large (32px)</PreviewLabel>
          <div className={styles.row}>
            <Dropdown value="WINFUT" size="lg" />
            <Dropdown value="WINFUT" size="lg" state="focused" />
            <Dropdown value="Desativado" size="lg" disabled />
          </div>
          <PreviewLabel>Sem stroke</PreviewLabel>
          <div className={styles.row}>
            <Dropdown value="WINQ25" stroke={false} />
            <Dropdown value="WINFUT" size="lg" stroke={false} />
          </div>
        </div>
      )

    case 'switch':
      return <SwitchPreview />

    case 'text-input':
      return <TextInputPreview />

    default:
      return null
  }
}

function CheckboxPreview() {
  const [c1, setC1] = useState(true)
  const [c2, setC2] = useState(false)
  const [c3, setC3] = useState<CheckboxType>('mixed')
  return (
    <div className={styles.previewInner}>
      <PreviewLabel>Estados</PreviewLabel>
      <div className={styles.col}>
        <Checkbox checked={c1} onChange={setC1} label="Aceitar termos" />
        <Checkbox checked={c2} onChange={setC2} label="Receber novidades" />
        <Checkbox checked={c3} onChange={v => setC3(v)} label="Selecionar todos (mixed)" />
      </div>
      <PreviewLabel>Disabled</PreviewLabel>
      <div className={styles.col}>
        <Checkbox checked={true} onChange={() => {}} label="Checked desativado" disabled />
        <Checkbox checked={false} onChange={() => {}} label="Desativado" disabled />
      </div>
    </div>
  )
}

function RadioButtonPreview() {
  const [sel, setSel] = useState('winq25')
  return (
    <div className={styles.previewInner}>
      <PreviewLabel>Input variant</PreviewLabel>
      <div className={styles.col}>
        <RadioButton variant="input" checked={sel === 'winq25'} label="WINQ25" onChange={() => setSel('winq25')} name="mercado" />
        <RadioButton variant="input" checked={sel === 'winfut'} label="WINFUT" onChange={() => setSel('winfut')} name="mercado" />
        <RadioButton variant="input" checked={false} label="Desativado" disabled />
      </div>
      <PreviewLabel>Button variant</PreviewLabel>
      <div className={styles.row}>
        <RadioButton variant="button" label="Boleta" state="active" />
        <RadioButton variant="button" label="Gráfico" />
        <RadioButton variant="button" label="Book" state="focused" />
        <RadioButton variant="button" label="Inativo" state="disabled" />
      </div>
    </div>
  )
}

function SwitchPreview() {
  const [t1, setT1] = useState<SwitchType>('on')
  const [t2, setT2] = useState<SwitchType>('off')
  const [t3, setT3] = useState<SwitchType>('mixed')
  return (
    <div className={styles.previewInner}>
      <PreviewLabel>On / Off</PreviewLabel>
      <div className={styles.col}>
        <Switch type={t1} label="Ativar notificações" onChange={setT1} />
        <Switch type={t2} label="Modo escuro" onChange={setT2} />
      </div>
      <PreviewLabel>Mixed (indeterminado)</PreviewLabel>
      <div className={styles.col}>
        <Switch type={t3} label="Configuração parcial" onChange={setT3} />
      </div>
      <PreviewLabel>Disabled</PreviewLabel>
      <div className={styles.col}>
        <Switch type="on" label="Sempre ativo" disabled />
        <Switch type="off" label="Indisponível" disabled />
      </div>
    </div>
  )
}

function TextInputPreview() {
  const [v1, setV1] = useState('')
  const [v2, setV2] = useState('WINFUT')
  const [v3, setV3] = useState('')
  const [v4, setV4] = useState('Busca ativa')
  const [v5, setV5] = useState('')
  const [v6, setV6] = useState('Observações sobre o ativo...')

  return (
    <div className={styles.previewInner} style={{ maxWidth: 280 }}>
      <PreviewLabel>Single Line — Default (24px)</PreviewLabel>
      <div className={styles.col}>
        <TextInput placeholder="Placeholder" value={v1} onChange={e => setV1(e.target.value)} />
        <TextInput placeholder="Filled" value={v2} onChange={e => setV2(e.target.value)} />
        <TextInput placeholder="Disabled" disabled value="Valor desativado" />
        <TextInput placeholder="Read Only" readOnly value="Somente leitura" />
      </div>

      <PreviewLabel>Single Line — Large (32px)</PreviewLabel>
      <div className={styles.col}>
        <TextInput size="large" placeholder="Placeholder" value={v3} onChange={e => setV3(e.target.value)} />
        <TextInput size="large" placeholder="Filled" value="Instrumento" />
      </div>

      <PreviewLabel>Com ícone esquerdo + clear</PreviewLabel>
      <div className={styles.col}>
        <TextInput iconLeft placeholder="Buscar..." value={v4} onChange={e => setV4(e.target.value)} onClear={() => setV4('')} />
        <TextInput iconLeft size="large" placeholder="Buscar instrumento..." value={v5} onChange={e => setV5(e.target.value)} onClear={() => setV5('')} />
        <TextInput iconLeft disabled placeholder="Busca desativada" />
      </div>

      <PreviewLabel>Quick Action (32px, icon obrigatório)</PreviewLabel>
      <div className={styles.col}>
        <TextInput variant="quick-action" placeholder="Buscar..." value={v4} onChange={e => setV4(e.target.value)} onClear={() => setV4('')} />
        <TextInput variant="quick-action" disabled placeholder="Indisponível" />
      </div>

      <PreviewLabel>Validação</PreviewLabel>
      <div className={styles.col}>
        <TextInput validation="error" value="Valor inválido" placeholder="Erro" />
        <TextInput validation="warning" value="Atenção" placeholder="Aviso" />
        <TextInput validation="success" value="Confirmado" placeholder="Sucesso" />
      </div>

      <PreviewLabel>Multi Line (textarea)</PreviewLabel>
      <div className={styles.col}>
        <TextInput variant="multi-line" value={v6} onChange={e => setV6(e.target.value)} rows={3} />
        <TextInput variant="multi-line" disabled value="Campo desativado." rows={2} />
      </div>
    </div>
  )
}
