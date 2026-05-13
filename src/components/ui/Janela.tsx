'use client'

import React, { useState } from 'react'
import styles from './Janela.module.css'
import FloatingMenu from './FloatingMenu'
import Abas from './Abas'

export interface JanelaTool {
  label: string
  icon?: string
}

export interface JanelaAction {
  icon: string
  label: string
  onClick?: () => void
}

export interface JanelaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tools?: JanelaTool[]
  activeTool?: number
  defaultActiveTool?: number
  onToolChange?: (index: number) => void
  tabs?: string[]
  activeTab?: number
  defaultActiveTab?: number
  onTabChange?: (index: number) => void
  multiLabel?: string
  onMultiClick?: () => void
  onLinkClick?: () => void
  onClose?: () => void
  showSideScroll?: boolean
  showBottomScroll?: boolean
  showActionsMenu?: boolean
  onActionsMenuToggle?: () => void
  actions?: JanelaAction[]
  children?: React.ReactNode
}

const DEFAULT_TOOLS: JanelaTool[] = [
  { label: 'Ferramenta 1', icon: 'dashboard' },
  { label: 'Ferramenta 2', icon: 'tune' },
  { label: 'Ferramenta 3', icon: 'show_chart' },
]

const DEFAULT_TABS = ['Aba 1', 'Aba 2', 'Aba 3', 'Aba 4', 'Aba 5']

const DEFAULT_ACTIONS: JanelaAction[] = [
  { icon: 'close', label: 'Fechar' },
  { icon: 'remove', label: 'Minimizar' },
  { icon: 'arrow_outward', label: 'Maximizar' },
  { icon: 'keep', label: 'Fixar' },
  { icon: 'edit', label: 'Renomear aba' },
]

function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={[styles.materialIcon, className].filter(Boolean).join(' ')} aria-hidden="true">
      {name}
    </span>
  )
}

export default function Janela({
  tools = DEFAULT_TOOLS,
  activeTool,
  defaultActiveTool = 0,
  onToolChange,
  tabs = DEFAULT_TABS,
  activeTab,
  defaultActiveTab = 0,
  onTabChange,
  multiLabel = 'Multi',
  onMultiClick,
  onLinkClick,
  onClose,
  showSideScroll = false,
  showBottomScroll = false,
  showActionsMenu = false,
  onActionsMenuToggle,
  actions = DEFAULT_ACTIONS,
  children,
  className = '',
  ...rest
}: JanelaProps) {
  const [internalTool, setInternalTool] = useState(defaultActiveTool)
  const [internalTab, setInternalTab] = useState(defaultActiveTab)

  const currentTool = activeTool ?? internalTool
  const currentTab = activeTab ?? internalTab

  const handleToolClick = (i: number) => {
    if (activeTool === undefined) setInternalTool(i)
    onToolChange?.(i)
  }

  const handleTabClick = (i: number) => {
    if (activeTab === undefined) setInternalTab(i)
    onTabChange?.(i)
  }

  const innerClass = [
    styles.containerInner,
    showSideScroll ? styles.containerInnerWithSideScroll : '',
    showBottomScroll ? styles.containerInnerWithBottomScroll : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={[styles.janela, className].filter(Boolean).join(' ')} {...rest}>

      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.tagAIWrapper}>
          <span className={styles.tagAI}>
            <Icon name="auto_awesome" className={styles.materialIconSm} />
            AI
          </span>
        </div>

        <div className={styles.toolTabs}>
          <Abas
            tabs={tools.map(t => ({ label: t.label, icon: t.icon }))}
            active={currentTool}
            onChange={handleToolClick}
            className={styles.toolAbas}
          />
          <button
            type="button"
            className={styles.toolChevron}
            aria-label="Mais ferramentas"
          >
            <Icon name="keyboard_arrow_down" />
          </button>
        </div>

        <div className={styles.headerActions}>
          <div className={styles.divider} />
          <button
            type="button"
            className={[styles.iconButton, styles.iconButtonLink].join(' ')}
            aria-label="Link"
            onClick={onLinkClick}
          >
            <Icon name="link" />
          </button>
          <button
            type="button"
            className={styles.multiButton}
            onClick={onMultiClick}
          >
            {multiLabel}
            <Icon name="keyboard_arrow_down" className={styles.materialIconSm} />
          </button>
          <button
            type="button"
            className={[styles.iconButton, showActionsMenu ? styles.iconButtonActive : ''].filter(Boolean).join(' ')}
            aria-label="Mais ações"
            aria-expanded={showActionsMenu}
            onClick={onActionsMenuToggle}
          >
            <Icon name="more_horiz" />
          </button>
          <button
            type="button"
            className={styles.iconButton}
            aria-label="Fechar"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
        </div>
      </div>

      {/* PILL TABS */}
      <div className={styles.pillRow} role="tablist">
        {tabs.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={i === currentTab}
            className={[styles.pill, i === currentTab ? styles.pillActive : ''].filter(Boolean).join(' ')}
            onClick={() => handleTabClick(i)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* CONTAINER (slot) */}
      <div className={styles.container}>
        <div className={innerClass}>
          {children ?? <span className={styles.coringaText}>Componente coringa</span>}
        </div>

        {showSideScroll && (
          <div className={styles.scrollbarSide} aria-hidden="true">
            <button type="button" className={styles.scrollArrow}><Icon name="arrow_drop_up" className={styles.materialIconSm} /></button>
            <div className={styles.scrollTrack}>
              <div className={styles.scrollThumbVertical} />
            </div>
            <button type="button" className={styles.scrollArrow}><Icon name="arrow_drop_down" className={styles.materialIconSm} /></button>
          </div>
        )}

        {showBottomScroll && (
          <div className={styles.scrollbarBottom} aria-hidden="true">
            <button type="button" className={styles.scrollArrow}><Icon name="arrow_left" className={styles.materialIconSm} /></button>
            <div className={styles.scrollTrackHorizontal}>
              <div className={styles.scrollThumbHorizontal} />
            </div>
            <button type="button" className={styles.scrollArrow}><Icon name="arrow_right" className={styles.materialIconSm} /></button>
          </div>
        )}

        {showSideScroll && showBottomScroll && <div className={styles.scrollCorner} />}
      </div>

      {/* FLOATING ACTIONS MENU — usa componente FloatingMenu */}
      {showActionsMenu && (
        <FloatingMenu width={172} className={styles.actionsMenu}>
          {actions.map((action) => (
            <FloatingMenu.Item
              key={action.label}
              icon={action.icon}
              onClick={action.onClick}
            >
              {action.label}
            </FloatingMenu.Item>
          ))}
        </FloatingMenu>
      )}
    </div>
  )
}
