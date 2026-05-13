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
import Boleta from './Boleta'
import Janela from './Janela'
import FloatingMenu from './FloatingMenu'
import TabelaCotacoes from './TabelaCotacoes'
import TabelaOrdens from './TabelaOrdens'
import NewsCard from './NewsCard'
import Header from './Header'
import Badge from './Badge'
import SegmentedControl from './SegmentedControl'
import Abas from './Abas'
import SubMenu from './SubMenu'
import Table from './Table'
import CopyButton from './CopyButton'
import StatCard from './StatCard'

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

    case 'abas':
      return (
        <div className={styles.previewInner}>
          <Abas
            tabs={['Todos os tokens', 'Primitivos', 'Semânticos', 'Scale', 'Tipografia']}
            active={0}
          />
        </div>
      )

    case 'segmented-control':
      return (
        <div className={styles.previewInner}>
          <SegmentedControl
            tabs={['Filtro 1', 'Filtro 2', 'Filtro 3', 'Filtro 4', 'Filtro 5']}
            active={0}
          />
        </div>
      )

    case 'sub-menu-item':
      return (
        <div className={styles.previewInner}>
          <SubMenu>
            <SubMenu.Item icon="palette" active>Todos os tokens</SubMenu.Item>
            <SubMenu.Item icon="widgets">Catálogo</SubMenu.Item>
            <SubMenu.Item icon="smart_toy">Guia &amp; Regras</SubMenu.Item>
          </SubMenu>
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

    case 'boleta':
      return <BoletaPreview />

    case 'floating-menu':
      return <FloatingMenuPreview />

    case 'janela':
      return <JanelaPreview />

    case 'tabela-cotacoes':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Painel de Cotações</PreviewLabel>
          <TabelaCotacoes />
        </div>
      )

    case 'tabela-ordens':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Tabela de Ordens</PreviewLabel>
          <TabelaOrdens />
        </div>
      )

    case 'news-card':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Alta (dot verde)</PreviewLabel>
          <div style={{ width: 320, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden' }}>
            <NewsCard
              sentiment="up"
              title="Bitcoin ETF sees record inflows as institutional interest grows"
              source="CoinDesk"
              time="2h ago"
            />
          </div>
          <PreviewLabel>Baixa (dot vermelho)</PreviewLabel>
          <div style={{ width: 320, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden' }}>
            <NewsCard
              sentiment="down"
              title="Petrobras shares fall on dividend cut concerns after Q3 earnings"
              source="Valor Econômico"
              time="45m ago"
            />
          </div>
          <PreviewLabel>Neutro (dot cinza)</PreviewLabel>
          <div style={{ width: 320, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden' }}>
            <NewsCard
              sentiment="neutral"
              title="Banco Central mantém Selic em 10,5% ao ano em decisão unânime"
              source="Folha de S.Paulo"
              time="1h ago"
            />
          </div>
          <PreviewLabel>Lista de notícias</PreviewLabel>
          <div style={{ width: 320, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden' }}>
            <NewsCard sentiment="up" title="Bitcoin ETF sees record inflows" source="CoinDesk" time="2h ago" />
            <NewsCard sentiment="down" title="Petrobras shares fall on dividend cut" source="Valor Econômico" time="45m ago" />
            <NewsCard sentiment="neutral" title="Banco Central mantém Selic em 10,5%" source="Folha" time="1h ago" />
          </div>
        </div>
      )

    case 'header':
      return (
        <div className={styles.headerWrap}>
          <Header activeNav="Gráfico" />
        </div>
      )

    case 'badge':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Default (12px)</PreviewLabel>
          <div className={styles.row}>
            <Badge variant="neutral">Badge</Badge>
            <Badge variant="brand" dot>Active</Badge>
            <Badge variant="success" dot>Merged</Badge>
            <Badge variant="warning">Atenção</Badge>
            <Badge variant="archived" dot>Archived</Badge>
          </div>
          <PreviewLabel>Large (14px)</PreviewLabel>
          <div className={styles.row}>
            <Badge variant="neutral" size="lg">Badge</Badge>
            <Badge variant="brand" size="lg" dot>Active</Badge>
            <Badge variant="success" size="lg" dot>Merged</Badge>
            <Badge variant="warning" size="lg">Atenção</Badge>
            <Badge variant="archived" size="lg" dot>Archived</Badge>
          </div>
        </div>
      )

    case 'table':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Default</PreviewLabel>
          <Table>
            <thead>
              <tr><th>Token</th><th>CSS Variable</th><th>Valor</th></tr>
            </thead>
            <tbody>
              <tr><td>bg-primary</td><td>--bg-primary</td><td>#0A0A0A</td></tr>
              <tr><td>bg-secondary</td><td>--bg-secondary</td><td>#0E0E0E</td></tr>
              <tr><td>bg-tertiary</td><td>--bg-tertiary</td><td>#141519</td></tr>
            </tbody>
          </Table>
          <PreviewLabel>Bordered</PreviewLabel>
          <Table bordered>
            <thead>
              <tr><th>Prop</th><th>Tipo</th><th>Default</th></tr>
            </thead>
            <tbody>
              <tr><td>variant</td><td>enum</td><td>neutral</td></tr>
              <tr><td>size</td><td>enum</td><td>default</td></tr>
              <tr><td>dot</td><td>boolean</td><td>false</td></tr>
            </tbody>
          </Table>
          <PreviewLabel>Compact + Striped</PreviewLabel>
          <Table compact striped>
            <thead>
              <tr><th>Ativo</th><th>Preço</th><th>Var%</th></tr>
            </thead>
            <tbody>
              <tr><td>PETR4</td><td>38.42</td><td>+1.2%</td></tr>
              <tr><td>VALE3</td><td>62.18</td><td>-0.8%</td></tr>
              <tr><td>ITUB4</td><td>34.56</td><td>+0.3%</td></tr>
              <tr><td>BBDC4</td><td>14.20</td><td>-1.1%</td></tr>
            </tbody>
          </Table>
          <PreviewLabel>Bordered + Compact + Striped</PreviewLabel>
          <Table bordered compact striped>
            <thead>
              <tr><th>Ativo</th><th>Último</th><th>Variação</th></tr>
            </thead>
            <tbody>
              <tr><td>WINFUT</td><td>128.450</td><td style={{ color: 'var(--context-trading-up)' }}>+0.85%</td></tr>
              <tr><td>DOLFUT</td><td>5.632</td><td style={{ color: 'var(--context-trading-down)' }}>-0.32%</td></tr>
              <tr><td>IBOV</td><td>127.890</td><td style={{ color: 'var(--context-trading-up)' }}>+1.10%</td></tr>
            </tbody>
          </Table>
        </div>
      )

    case 'copy-button':
      return <CopyButtonPreview />

    case 'search-input':
      return <SearchInputPreview />

    case 'stat-card':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Default</PreviewLabel>
          <div className={styles.row} style={{ flexWrap: 'wrap' }}>
            <StatCard value={292} label="Tokens" description="Primitivos + semânticos" />
            <StatCard value={25} label="Componentes" description="Com código copiável" />
            <StatCard value={5} label="Layouts" description="Páginas de referência" />
          </div>
          <PreviewLabel>Accent</PreviewLabel>
          <div className={styles.row} style={{ flexWrap: 'wrap' }}>
            <StatCard value={20} label="Implementados" description="Com preview funcional" accent />
            <StatCard value="v1.5" label="Versão" description="designtokens.md" accent />
          </div>
        </div>
      )

    case 'sidebar':
      return (
        <div className={styles.previewInner}>
          <PreviewLabel>Sidebar (240px)</PreviewLabel>
          <div style={{ height: 400, overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <aside className="trdr-sidebar" style={{ position: 'relative', height: '100%' }}>
              <div className="trdr-sidebar-header">
                <span style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 600, color: 'var(--content-primary)' }}>Logo</span>
              </div>
              <nav className="trdr-sidebar-nav">
                <div className="trdr-sidebar-group">
                  <span className="trdr-sidebar-group-label">Visão Geral</span>
                  <ul className="trdr-sidebar-list">
                    <li><span className="trdr-sidebar-item trdr-sidebar-item-active"><span className="trdr-sidebar-icon">home</span>Home</span></li>
                  </ul>
                </div>
                <div className="trdr-sidebar-group">
                  <span className="trdr-sidebar-group-label">Tokens</span>
                  <ul className="trdr-sidebar-list">
                    <li><span className="trdr-sidebar-item"><span className="trdr-sidebar-icon">grain</span>Primitivos</span></li>
                    <li><span className="trdr-sidebar-item"><span className="trdr-sidebar-icon">join_left</span>Semânticos</span></li>
                    <li><span className="trdr-sidebar-item"><span className="trdr-sidebar-icon">text_fields</span>Tipografia</span></li>
                  </ul>
                </div>
                <div className="trdr-sidebar-group">
                  <span className="trdr-sidebar-group-label">Componentes</span>
                  <ul className="trdr-sidebar-list">
                    <li><span className="trdr-sidebar-item"><span className="trdr-sidebar-icon">widgets</span>Catálogo</span></li>
                  </ul>
                </div>
              </nav>
              <div className="trdr-sidebar-footer">
                <span className="trdr-sidebar-version">v1.5</span>
                <span className="trdr-sidebar-version-label">designtokens.md</span>
              </div>
            </aside>
          </div>
        </div>
      )

    default:
      return null
  }
}

function CopyButtonPreview() {
  return (
    <div className={styles.previewInner}>
      <PreviewLabel>Default (28px)</PreviewLabel>
      <div className={styles.row}>
        <CopyButton text="--bg-primary" label="Token" />
        <CopyButton text="var(--content-brand)" label="CSS" />
        <CopyButton text="#00D4FF" label="Hex" />
      </div>
      <PreviewLabel>Small (20px)</PreviewLabel>
      <div className={styles.row}>
        <CopyButton text="--bg-primary" label="Token" size="sm" />
        <CopyButton text="var(--content-brand)" label="CSS" size="sm" />
        <CopyButton text="#00D4FF" label="Hex" size="sm" />
      </div>
    </div>
  )
}

function SearchInputPreview() {
  const [query, setQuery] = useState('')
  return (
    <div className={styles.previewInner} style={{ maxWidth: 400 }}>
      <PreviewLabel>Controlado</PreviewLabel>
      <div className="trdr-search-input">
        <svg className="trdr-search-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="trdr-input"
          placeholder="Buscar tokens..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <PreviewLabel>Placeholder</PreviewLabel>
      <div className="trdr-search-input">
        <svg className="trdr-search-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="trdr-input"
          placeholder="Buscar componentes..."
          readOnly
        />
      </div>
    </div>
  )
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
  const [iconDefaultVal, setIconDefaultVal] = useState('WINFUT')
  const [iconLgVal, setIconLgVal] = useState('PETR4')
  const [quickVal, setQuickVal] = useState('Busca ativa')
  const [multiVal, setMultiVal] = useState('Observações sobre o ativo...')

  return (
    <div className={styles.previewInner} style={{ maxWidth: 340 }}>

      {/* --- Single Line Default 24px --- */}
      <PreviewLabel>Single Line — Default (24px)</PreviewLabel>
      <div className={styles.col}>
        <TextInput placeholder="Placeholder..." />
        <TextInput defaultValue="Text, Default" placeholder="Default" />
        <TextInput disabled defaultValue="Text, Disabled" />
      </div>

      {/* --- Single Line Large 32px --- */}
      <PreviewLabel>Single Line — Large (32px)</PreviewLabel>
      <div className={styles.col}>
        <TextInput size="large" placeholder="Placeholder..." />
        <TextInput size="large" defaultValue="Text, Default" />
        <TextInput size="large" disabled defaultValue="Text, Disabled" />
      </div>

      {/* --- Com Ícone Default 24px --- */}
      <PreviewLabel>Com Ícone — Default (24px)</PreviewLabel>
      <div className={styles.col}>
        <TextInput iconLeft placeholder="Buscar instrumento..." />
        <TextInput
          iconLeft
          placeholder="Buscar instrumento..."
          value={iconDefaultVal}
          onChange={e => setIconDefaultVal(e.target.value)}
          onClear={() => setIconDefaultVal('')}
        />
        <TextInput iconLeft disabled defaultValue="Text, Disabled" />
      </div>

      {/* --- Com Ícone Large 32px --- */}
      <PreviewLabel>Com Ícone — Large (32px)</PreviewLabel>
      <div className={styles.col}>
        <TextInput iconLeft size="large" placeholder="Buscar instrumento..." />
        <TextInput
          iconLeft
          size="large"
          placeholder="Buscar instrumento..."
          value={iconLgVal}
          onChange={e => setIconLgVal(e.target.value)}
          onClear={() => setIconLgVal('')}
        />
        <TextInput iconLeft size="large" disabled defaultValue="Text, Disabled" />
      </div>

      {/* --- Variable --- */}
      <PreviewLabel>Variable</PreviewLabel>
      <div className={styles.col}>
        <TextInput isVariable defaultValue="WINFUT" />
        <TextInput isVariable placeholder="Variável..." />
        <TextInput isVariable disabled defaultValue="Text, Disabled" />
      </div>

      {/* --- Quick Action 32px --- */}
      <PreviewLabel>Quick Action (32px)</PreviewLabel>
      <div className={styles.col}>
        <TextInput
          variant="quick-action"
          placeholder="Filtrar..."
          value={quickVal}
          onChange={e => setQuickVal(e.target.value)}
          onClear={() => setQuickVal('')}
        />
        <TextInput variant="quick-action" placeholder="Filtrar..." />
        <TextInput variant="quick-action" disabled defaultValue="Indisponível" />
      </div>

      {/* --- Validação --- */}
      <PreviewLabel>Validação de Estado</PreviewLabel>
      <div className={styles.col}>
        <TextInput validation="error" defaultValue="Valor inválido" />
        <TextInput validation="warning" defaultValue="Verificar dado" />
        <TextInput validation="success" defaultValue="Confirmado" />
      </div>

      {/* --- Multi Line --- */}
      <PreviewLabel>Multi Line (textarea)</PreviewLabel>
      <div className={styles.col}>
        <TextInput
          variant="multi-line"
          value={multiVal}
          onChange={e => setMultiVal(e.target.value)}
          rows={3}
        />
        <TextInput variant="multi-line" placeholder="Observações..." rows={2} />
        <TextInput variant="multi-line" disabled defaultValue="Campo desativado." rows={2} />
      </div>

    </div>
  )
}

function BoletaPreview() {
  return (
    <div className={styles.previewInner}>
      <PreviewLabel>Versão Avançado</PreviewLabel>
      <Boleta versao="avancado" />
      <PreviewLabel>Versão Simples</PreviewLabel>
      <Boleta versao="simples" />
    </div>
  )
}

function JanelaPreview() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeTool, setActiveTool] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.previewInner}>
      <PreviewLabel>Default — slot vazio mostra "Componente coringa"</PreviewLabel>
      <Janela
        activeTool={activeTool}
        onToolChange={setActiveTool}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        showSideScroll
        showBottomScroll
        showActionsMenu={menuOpen}
        onActionsMenuToggle={() => setMenuOpen(v => !v)}
      />

      <PreviewLabel>Com componente no slot (Boleta versão Simples)</PreviewLabel>
      <Janela activeTab={2} tabs={['Mercado', 'Posições', 'Histórico', 'Ordens']}>
        <Boleta versao="simples" />
      </Janela>

      <PreviewLabel>Sem scrollbars</PreviewLabel>
      <Janela />
    </div>
  )
}

function FloatingMenuPreview() {
  return (
    <div className={styles.previewInner}>
      <PreviewLabel>Ações da janela (sem título)</PreviewLabel>
      <div className={styles.row}>
        <FloatingMenu width={172}>
          <FloatingMenu.Item icon="close">Fechar</FloatingMenu.Item>
          <FloatingMenu.Item icon="remove">Minimizar</FloatingMenu.Item>
          <FloatingMenu.Item icon="arrow_outward">Maximizar</FloatingMenu.Item>
          <FloatingMenu.Item icon="keep">Fixar</FloatingMenu.Item>
          <FloatingMenu.Item icon="edit">Renomear aba</FloatingMenu.Item>
        </FloatingMenu>
      </div>

      <PreviewLabel>Com título e divisor (seletor de ativo)</PreviewLabel>
      <div className={styles.row}>
        <FloatingMenu width={260}>
          <FloatingMenu.Title>Favoritos</FloatingMenu.Title>
          <FloatingMenu.Item icon="star">WINFUT (Q19)</FloatingMenu.Item>
          <FloatingMenu.Item icon="star">PETR4</FloatingMenu.Item>
          <FloatingMenu.Item icon="star">VALE3</FloatingMenu.Item>
          <FloatingMenu.Divider />
          <FloatingMenu.Title>Recentes</FloatingMenu.Title>
          <FloatingMenu.Item icon="history">BBDC4</FloatingMenu.Item>
          <FloatingMenu.Item icon="history">ITUB4</FloatingMenu.Item>
          <FloatingMenu.Divider />
          <FloatingMenu.Item icon="search">Buscar ativo...</FloatingMenu.Item>
        </FloatingMenu>
      </div>

      <PreviewLabel>Com seções e indicadores</PreviewLabel>
      <div className={styles.row}>
        <FloatingMenu width={240}>
          <FloatingMenu.Title>Indicadores</FloatingMenu.Title>
          <FloatingMenu.Item icon="bar_chart">Volume</FloatingMenu.Item>
          <FloatingMenu.Item icon="trending_up">Média Móvel</FloatingMenu.Item>
          <FloatingMenu.Item icon="analytics">MACD</FloatingMenu.Item>
          <FloatingMenu.Item icon="speed">IFR</FloatingMenu.Item>
          <FloatingMenu.Divider />
          <FloatingMenu.Item icon="more_horiz">Outros...</FloatingMenu.Item>
        </FloatingMenu>
      </div>

      <PreviewLabel>Item desabilitado</PreviewLabel>
      <div className={styles.row}>
        <FloatingMenu width={220}>
          <FloatingMenu.Item icon="notifications_active">Stop Loss ativado</FloatingMenu.Item>
          <FloatingMenu.Item icon="check_circle">Ordem executada</FloatingMenu.Item>
          <FloatingMenu.Item icon="warning" disabled>Margem insuficiente</FloatingMenu.Item>
          <FloatingMenu.Divider />
          <FloatingMenu.Item icon="settings">Configurar alertas</FloatingMenu.Item>
        </FloatingMenu>
      </div>
    </div>
  )
}
