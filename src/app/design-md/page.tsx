import { designMdContent } from '@/data/design-md-content'
import CopyButton from '@/components/ui/CopyButton'
import styles from '../page-layout.module.css'
import mdStyles from './design-md.module.css'

export default function DesignMdPage() {
  const lines = designMdContent.split('\n').length

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>design.md</h1>
          <p className={styles.subtitle}>
            Fonte de verdade do Design System TRDR — {lines.toLocaleString()} linhas, v1.4.
          </p>
        </div>
        <div className={styles.nav}>
          <CopyButton text={designMdContent} label="design.md completo" />
          <span className={mdStyles.copyLabel}>Copiar tudo</span>
        </div>
      </div>

      <div className={mdStyles.info}>
        <span>📄 design.md</span>
        <span>{(new TextEncoder().encode(designMdContent).length / 1024).toFixed(1)} KB</span>
        <span>{lines.toLocaleString()} linhas</span>
        <span>10 seções</span>
      </div>

      <div className={mdStyles.viewer}>
        <pre className={mdStyles.content}>{designMdContent}</pre>
      </div>
    </div>
  )
}
