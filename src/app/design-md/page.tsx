import { readDesignMd, getDesignMdMeta } from '@/lib/parseDesignMd'
import CopyButton from '@/components/ui/CopyButton'
import styles from '../page-layout.module.css'
import mdStyles from './design-md.module.css'

export default function DesignMdPage() {
  const content = readDesignMd()
  const { lines, sizeKb } = getDesignMdMeta()

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>designtokens.md</h1>
          <p className={styles.subtitle}>
            Tokens primitivos e semânticos do Design System TRDR — lido direto do arquivo, sempre atualizado.
          </p>
        </div>
        <div className={styles.nav}>
          <CopyButton text={content} label="designtokens.md completo" />
          <span className={mdStyles.copyLabel}>Copiar tudo</span>
        </div>
      </div>

      <div className={mdStyles.info}>
        <span>📄 designtokens.md</span>
        <span>{sizeKb} KB</span>
        <span>{lines.toLocaleString()} linhas</span>
      </div>

      <div className={mdStyles.viewer}>
        <pre className={mdStyles.content}>{content}</pre>
      </div>
    </div>
  )
}
