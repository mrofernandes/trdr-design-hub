'use client'

import { useState } from 'react'
import { ComponentCode } from '@/data/components'
import CopyButton from './CopyButton'
import styles from './CodeBlock.module.css'

interface CodeBlockProps {
  code: ComponentCode
}

type Tab = 'html' | 'css' | 'react' | 'prompt'

const TAB_LABELS: Record<Tab, string> = {
  html: 'HTML',
  css: 'CSS',
  react: 'React',
  prompt: 'Prompt IA',
}

const TAB_ICONS: Record<Tab, string> = {
  html: 'code',
  css: 'style',
  react: 'workspaces',
  prompt: 'auto_awesome',
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const availableTabs = (Object.keys(TAB_LABELS) as Tab[]).filter(tab => !!code[tab])
  const [activeTab, setActiveTab] = useState<Tab>(availableTabs[0] ?? 'html')

  const content = code[activeTab] ?? ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {availableTabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
          >
            <span className={`${styles.tabIcon} material-symbols-outlined`}>{TAB_ICONS[tab]}</span>
            {TAB_LABELS[tab]}
          </button>
        ))}
        <div className={styles.tabSpacer} />
        <CopyButton text={content} label={`código ${TAB_LABELS[activeTab]}`} className={styles.copyBtn} />
      </div>
      <pre className={styles.code}>
        <code>{content}</code>
      </pre>
    </div>
  )
}
