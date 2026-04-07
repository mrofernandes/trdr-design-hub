import { Suspense } from 'react'
import TokenTable from '@/components/tokens/TokenTable'
import styles from '../../page-layout.module.css'

export default function PrimitivosPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Tokens Primitivos</h1>
          <p className={styles.subtitle}>Valores brutos do sistema. <strong>Nunca use diretamente na UI</strong> — use tokens semânticos.</p>
        </div>
      </div>
      <Suspense>
        <TokenTable category="primitivo-cor" />
      </Suspense>
      <Suspense>
        <TokenTable category="primitivo-spacing" />
      </Suspense>
      <Suspense>
        <TokenTable category="primitivo-radius" />
      </Suspense>
      <Suspense>
        <TokenTable category="primitivo-tipografia" />
      </Suspense>
    </div>
  )
}
