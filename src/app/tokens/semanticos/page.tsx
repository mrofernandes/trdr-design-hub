import { Suspense } from 'react'
import TokenTable from '@/components/tokens/TokenTable'
import styles from '../../page-layout.module.css'

export default function SemanticosPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Tokens Semânticos</h1>
          <p className={styles.subtitle}>Use sempre estes tokens na UI. Suportam dark/light mode automaticamente.</p>
        </div>
      </div>
      <Suspense><TokenTable category="semantico-bg" /></Suspense>
      <Suspense><TokenTable category="semantico-surface" /></Suspense>
      <Suspense><TokenTable category="semantico-content" /></Suspense>
      <Suspense><TokenTable category="semantico-border" /></Suspense>
      <Suspense><TokenTable category="semantico-action" /></Suspense>
      <Suspense><TokenTable category="semantico-trading" /></Suspense>
      <Suspense><TokenTable category="scale-spacing" /></Suspense>
      <Suspense><TokenTable category="scale-radius" /></Suspense>
    </div>
  )
}
