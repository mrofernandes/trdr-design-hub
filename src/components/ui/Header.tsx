'use client'

import React from 'react'
import TextInput from './TextInput'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'Gráfico', icon: 'show_chart' },
  { label: 'Book e Cotações', icon: 'format_list_bulleted' },
  { label: 'Operação', icon: 'swap_horiz' },
  { label: 'Ferramentas', icon: 'handyman' },
  { label: 'Analistas', icon: 'groups' },
]

const RESULTADO_ITEMS = [
  { symbol: 'WINFUT', last: '127.540', change: '+1,2%', positive: true },
  { symbol: 'WDOFUT', last: '5.842', change: '-0,3%', positive: false },
  { symbol: 'PETR4', last: '38,42', change: '+0,8%', positive: true },
  { symbol: 'VALE3', last: '63,18', change: '-1,1%', positive: false },
]

const ICON_STYLE: React.CSSProperties = {
  fontFamily: 'Material Symbols Outlined',
  fontWeight: 300,
  fontStyle: 'normal',
  lineHeight: 1,
  fontVariationSettings: "'FILL' 0, 'GRAD' 0",
}

export interface HeaderProps {
  activeNav?: string
}

export default function Header({ activeNav = 'Gráfico' }: HeaderProps) {
  return (
    <header className="trdr-header" role="banner">
      <div className="trdr-header-left">
        {/* Logo */}
        <div className="trdr-header-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-trdr-design-hub.svg" alt="TRDR" width={107} height={40} />
        </div>
        <div className="trdr-header-divider" />

        {/* Nav principal */}
        <nav className="trdr-header-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map(({ label, icon }) => (
            <button
              key={label}
              type="button"
              className={`trdr-header-nav-item${activeNav === label ? ' trdr-header-nav-item-active' : ''}`}
            >
              <span className="trdr-header-nav-icon" style={ICON_STYLE} aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </nav>

        {/* Busca */}
        <TextInput
          iconLeft
          placeholder="Buscar ativo..."
          aria-label="Buscar ativo"
          className={styles.searchInput}
        />

        {/* Resultado Row — cotações em tempo real */}
        <div className="trdr-header-resultado">
          {RESULTADO_ITEMS.map(({ symbol, last, change, positive }) => (
            <div key={symbol} className={styles.resultadoItem}>
              <span className={styles.resultadoSymbol}>{symbol}</span>
              <span className={styles.resultadoLast}>{last}</span>
              <span className={`${styles.resultadoChange} ${positive ? styles.positive : styles.negative}`}>
                {change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="trdr-header-right">
        {/* Botões de ícone com badge */}
        <span className={styles.iconBtnWrap}>
          <button className="trdr-header-icon-btn" aria-label="Notificações" type="button">
            <span style={{ ...ICON_STYLE, fontSize: 20 }} aria-hidden="true">notifications</span>
          </button>
          <span className="trdr-header-badge" aria-label="4 notificações">4</span>
        </span>

        <span className={styles.iconBtnWrap}>
          <button className="trdr-header-icon-btn" aria-label="Meu perfil" type="button">
            <span style={{ ...ICON_STYLE, fontSize: 20 }} aria-hidden="true">person</span>
          </button>
          <span className="trdr-header-badge" aria-label="1 item">1</span>
        </span>

        <button className="trdr-header-icon-btn" aria-label="Configurações" type="button">
          <span style={{ ...ICON_STYLE, fontSize: 20 }} aria-hidden="true">settings</span>
        </button>

        <button className="trdr-header-icon-btn" aria-label="Layouts" type="button">
          <span style={{ ...ICON_STYLE, fontSize: 20 }} aria-hidden="true">dashboard</span>
        </button>

        {/* Conexões */}
        <button className="trdr-header-conexoes" aria-label="5 de 6 conexões ativas" type="button">
          <span className="trdr-header-status-dot connected" aria-hidden="true" />
          5/6 Conexões
        </button>

        {/* Controles de janela */}
        <div className="trdr-header-wincontrols" aria-label="Controles da janela" role="group">
          <button className="trdr-header-win-btn" aria-label="Minimizar" type="button">
            <span style={{ ...ICON_STYLE, fontSize: 16 }} aria-hidden="true">remove</span>
          </button>
          <button className="trdr-header-win-btn" aria-label="Recolher" type="button">
            <span style={{ ...ICON_STYLE, fontSize: 16 }} aria-hidden="true">minimize</span>
          </button>
          <button className="trdr-header-win-btn trdr-header-win-btn-close" aria-label="Fechar" type="button">
            <span style={{ ...ICON_STYLE, fontSize: 16 }} aria-hidden="true">close</span>
          </button>
        </div>
      </div>
    </header>
  )
}
