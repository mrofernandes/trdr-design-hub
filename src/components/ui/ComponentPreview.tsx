'use client'

import styles from './ComponentPreview.module.css'

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
          <div className={styles.row}>
            <button className="trdr-btn trdr-btn-primary">Primary</button>
            <button className="trdr-btn trdr-btn-secondary">Secondary</button>
            <button className="trdr-btn trdr-btn-ghost">Ghost</button>
            <button className="trdr-btn trdr-btn-primary" disabled>Disabled</button>
          </div>
          <div className={styles.row}>
            <button className="trdr-btn trdr-btn-primary trdr-btn-lg">Primary Large</button>
            <button className="trdr-btn trdr-btn-secondary trdr-btn-lg">Secondary Large</button>
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

    default:
      return null
  }
}
