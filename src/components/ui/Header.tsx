'use client'

import React from 'react'

/* Material Symbols matching exact Figma icon names */
const NAV_ITEMS = [
  { label: 'Gráfico', icon: 'chart_data' },
  { label: 'Book e Cotações', icon: 'desktop_windows' },
  { label: 'Operação', icon: 'candlestick_chart' },
  { label: 'Ferramentas', icon: 'database' },
  { label: 'Analistas', icon: 'speed' },
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
  ticker?: string
  barPercent?: number
  pnlValue?: string
  pnlPercent?: string
  pnlPositive?: boolean
  resultadoDia?: string
  resultadoDiaPositive?: boolean
  notifications?: number
  profileBadge?: number
  connections?: string
}

export default function Header({
  activeNav = 'Gráfico',
  ticker = 'WINFUT (Q19)',
  barPercent = 60,
  pnlValue = '+R$ 1.250',
  pnlPercent = '+3,25%',
  pnlPositive = true,
  resultadoDia = '-R$ 180',
  resultadoDiaPositive = false,
  notifications = 4,
  profileBadge = 1,
  connections = '5/6 Conexões',
}: HeaderProps) {
  return (
    <header className="trdr-header" role="banner">

      {/* ── LEFT ─────────────────────────────────────────── */}
      <div className="trdr-header-left">

        {/* Logo */}
        <div className="trdr-header-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-trdr-design-hub.svg" alt="TRDR" width={107} height={40} />
        </div>

        {/* Divider */}
        <div className="trdr-header-divider" aria-hidden="true" />

        {/* Nav items */}
        <nav className="trdr-header-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map(({ label, icon }) => (
            <button
              key={label}
              type="button"
              className={`trdr-header-nav-item${activeNav === label ? ' trdr-header-nav-item-active' : ''}`}
              aria-current={activeNav === label ? 'page' : undefined}
            >
              <span className="trdr-header-nav-icon" style={ICON_STYLE} aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </nav>

        {/* Search — bg surface/primary, not TextInput */}
        <button
          type="button"
          className="trdr-header-search"
          aria-label="Pesquisar ativo"
        >
          <span className="trdr-header-search-icon" style={ICON_STYLE} aria-hidden="true">
            search
          </span>
          Pesquisar...
        </button>

        {/* Resultado Row — WINFUT + bar + P&L + Resultado Dia + arrow */}
        <div className="trdr-header-resultado" role="button" tabIndex={0} aria-label="Resultado do dia">
          <span className="trdr-header-resultado-ticker">{ticker}</span>

          <div className="trdr-header-resultado-bar">
            <div
              className={`trdr-header-resultado-bar-fill ${pnlPositive ? 'positive' : 'negative'}`}
              style={{ width: `${barPercent}%` }}
            />
          </div>

          <span className={`trdr-header-resultado-value ${pnlPositive ? 'positive' : 'negative'}`}>
            {pnlValue}
          </span>
          <span className={`trdr-header-resultado-value ${pnlPositive ? 'positive' : 'negative'}`}>
            {pnlPercent}
          </span>

          <div className="trdr-header-resultado-divider" aria-hidden="true" />

          <span className="trdr-header-resultado-label">Resultado Dia</span>
          <span className={`trdr-header-resultado-daily ${resultadoDiaPositive ? 'positive' : 'negative'}`}>
            {resultadoDia}
          </span>

          <span className="trdr-header-resultado-arrow" style={ICON_STYLE} aria-hidden="true">
            arrow_drop_down
          </span>
        </div>
      </div>

      {/* ── RIGHT ────────────────────────────────────────── */}
      <div className="trdr-header-right">

        {/* Notificações */}
        <button className="trdr-header-icon-btn" type="button" aria-label={`Notificações (${notifications})`}>
          <span style={{ ...ICON_STYLE, fontSize: 24, color: 'var(--content-secondary)' }} aria-hidden="true">
            notifications
          </span>
          {notifications > 0 && (
            <span className="trdr-header-badge" aria-hidden="true">{notifications}</span>
          )}
        </button>

        {/* Meu perfil */}
        <button className="trdr-header-icon-btn" type="button" aria-label={`Meu perfil (${profileBadge} item)`}>
          <span style={{ ...ICON_STYLE, fontSize: 24, color: 'var(--content-secondary)' }} aria-hidden="true">
            person
          </span>
          {profileBadge > 0 && (
            <span className="trdr-header-badge" aria-hidden="true">{profileBadge}</span>
          )}
        </button>

        {/* Configurações */}
        <button className="trdr-header-icon-btn" type="button" aria-label="Configurações da plataforma">
          <span style={{ ...ICON_STYLE, fontSize: 24, color: 'var(--content-secondary)' }} aria-hidden="true">
            settings
          </span>
        </button>

        {/* Layouts */}
        <button className="trdr-header-icon-btn" type="button" aria-label="Layouts">
          <span style={{ ...ICON_STYLE, fontSize: 24, color: 'var(--content-secondary)' }} aria-hidden="true">
            auto_awesome_mosaic
          </span>
        </button>

        {/* Conexões — sem border, com ícone de rede */}
        <button className="trdr-header-conexoes" type="button" aria-label={connections}>
          <span style={{ ...ICON_STYLE, fontSize: 24 }} aria-hidden="true">
            lan
          </span>
          {connections}
        </button>

        {/* Divisor antes dos window controls */}
        <div className="trdr-header-win-divider" aria-hidden="true" />

        {/* Window controls — 18px icons, gap 32px */}
        <div className="trdr-header-wincontrols" aria-label="Controles da janela" role="group">
          <button className="trdr-header-win-btn" type="button" aria-label="Minimizar">
            <span style={{ ...ICON_STYLE, fontSize: 18 }} aria-hidden="true">remove</span>
          </button>
          <button className="trdr-header-win-btn" type="button" aria-label="Restaurar">
            <span style={{ ...ICON_STYLE, fontSize: 18 }} aria-hidden="true">crop_square</span>
          </button>
          <button className="trdr-header-win-btn trdr-header-win-btn-close" type="button" aria-label="Fechar">
            <span style={{ ...ICON_STYLE, fontSize: 18 }} aria-hidden="true">close</span>
          </button>
        </div>
      </div>

    </header>
  )
}
