import { Suspense } from 'react'
import PromptGenerator from '@/components/prompt-generator/PromptGenerator'
import styles from '../../page-layout.module.css'

export default function PromptsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Gerar Prompt para Claude Code</h1>
          <p className={styles.subtitle}>
            Descreva o que você desenvolveu e receba um prompt completo com o Design System TRDR para o Claude Code implementar o visual correto.
          </p>
        </div>
      </div>

      <Suspense>
        <PromptGenerator />
      </Suspense>
    </div>
  )
}
