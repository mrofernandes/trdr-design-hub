import { DesignToken } from '@/data/tokens'
import CopyButton from '@/components/ui/CopyButton'
import styles from './TokenRow.module.css'

interface TokenRowProps {
  token: DesignToken
}

export default function TokenRow({ token }: TokenRowProps) {
  const isTransparent = token.darkValue.startsWith('rgba') || token.darkValue.includes('0)')

  return (
    <tr className={styles.row}>
      <td className={styles.swatchCell}>
        {token.isColor && (
          <div
            className={styles.swatch}
            style={{ backgroundColor: token.darkValue }}
            title={token.darkValue}
          />
        )}
      </td>
      <td className={styles.nameCell}>
        <code className={styles.name}>{token.name}</code>
        <span className={styles.desc}>{token.description}</span>
      </td>
      <td className={styles.varCell}>
        <code className={styles.var}>{token.cssVar}</code>
        <CopyButton text={`var(${token.cssVar})`} label={`CSS var de ${token.name}`} />
      </td>
      <td className={styles.valueCell}>
        <code className={styles.value}>{token.darkValue}</code>
        <CopyButton text={token.darkValue} label={`valor de ${token.name}`} />
      </td>
      {token.lightValue && (
        <td className={styles.lightCell}>
          <div
            className={styles.swatchSm}
            style={{ backgroundColor: token.lightValue }}
          />
          <code className={styles.value}>{token.lightValue}</code>
        </td>
      )}
      {!token.lightValue && <td className={styles.lightCell} />}
    </tr>
  )
}
