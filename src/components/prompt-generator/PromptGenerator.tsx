'use client'

import { useState } from 'react'
import CopyButton from '@/components/ui/CopyButton'
import { generatePromptFromContext } from './promptTemplate'
import styles from './PromptGenerator.module.css'

export default function PromptGenerator() {
  const [context, setContext] = useState('')
  const [prompt, setPrompt] = useState('')

  function handleGenerate() {
    if (!context.trim()) return
    setPrompt(generatePromptFromContext(context.trim()))
  }

  function handleReset() {
    setContext('')
    setPrompt('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <label className={styles.label} htmlFor="context">
          Descreva o que você desenvolveu
        </label>
        <p className={styles.hint}>
          Explique o projeto, as telas e o que precisa ser implementado visualmente com o Design System da TRDR.
        </p>
        <textarea
          id="context"
          className={styles.textarea}
          placeholder="Ex: Desenvolvi uma plataforma de cursos da TRDR. Temos uma home com listagem de cursos em cards, página de detalhe do curso com vídeo player e módulos em sidebar, e área do aluno com progresso e certificados."
          value={context}
          onChange={e => setContext(e.target.value)}
          rows={6}
        />
        <div className={styles.actions}>
          <button
            className="trdr-btn trdr-btn-primary"
            onClick={handleGenerate}
            disabled={!context.trim()}
          >
            Gerar Prompt para Claude Code →
          </button>
          {prompt && (
            <button className="trdr-btn trdr-btn-ghost" onClick={handleReset}>
              Limpar
            </button>
          )}
        </div>
      </div>

      {prompt && (
        <div className={styles.outputSection}>
          <div className={styles.outputHeader}>
            <span className={styles.outputLabel}>Prompt gerado</span>
            <CopyButton text={prompt} label="prompt completo" />
          </div>
          <p className={styles.outputHint}>
            Cole este prompt no Claude Code para implementar o visual TRDR no seu projeto.
          </p>
          <pre className={styles.output}>{prompt}</pre>
        </div>
      )}
    </div>
  )
}
