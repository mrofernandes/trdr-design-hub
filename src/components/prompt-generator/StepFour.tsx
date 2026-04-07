'use client'

import { useState } from 'react'
import styles from './Steps.module.css'

interface StepFourProps {
  prompt: string
  onReset: () => void
}

export default function StepFour({ prompt, onReset }: StepFourProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt)
    } catch {
      const el = document.createElement('textarea')
      el.value = prompt
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.step}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Seu prompt está pronto!</h2>
        <p className={styles.subtitle}>
          Copie e cole no Claude Code. O prompt já inclui os tokens TRDR relevantes, specs dos componentes e as regras absolutas do Design System.
        </p>
      </div>

      <div className={styles.promptBox}>
        <div className={styles.promptHeader}>
          <span className={styles.promptLabel}>Prompt para Claude Code</span>
          <button
            className={`trdr-btn ${copied ? 'trdr-btn-secondary' : 'trdr-btn-primary'}`}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copiado!
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copiar para Claude Code
              </>
            )}
          </button>
        </div>
        <pre className={styles.promptContent}>{prompt}</pre>
      </div>

      <div className={styles.tip}>
        <strong>Como usar:</strong> Cole este prompt no Claude Code e adicione no final o que exatamente você quer construir. Por exemplo: <em>"Crie a tela de detalhes de posição com os campos de P&L e histórico de trades."</em>
      </div>

      <div className={styles.actions}>
        <button className="trdr-btn trdr-btn-ghost" onClick={onReset}>
          ↺ Gerar novo prompt
        </button>
      </div>
    </div>
  )
}
