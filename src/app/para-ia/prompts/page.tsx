import { Suspense } from 'react'
import PromptWizard from '@/components/prompt-generator/PromptWizard'
import styles from '../../page-layout.module.css'

export default function PromptsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Gerador de Prompts</h1>
          <p className={styles.subtitle}>
            3 passos para criar um prompt completo com os tokens TRDR, specs de componentes e regras absolutas do Design System.
          </p>
        </div>
      </div>

      <Suspense>
        <PromptWizard />
      </Suspense>
    </div>
  )
}
