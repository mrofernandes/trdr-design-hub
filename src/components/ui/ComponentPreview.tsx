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
