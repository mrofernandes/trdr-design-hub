import Link from 'next/link'
import { absoluteRules, layerHierarchy, actionTokenGuide, tradingTokenGuide, claudeMdTemplate } from '@/data/ia-rules'
import CopyButton from '@/components/ui/CopyButton'
import styles from '../page-layout.module.css'
import iaStyles from './para-ia.module.css'

export default function ParaIAPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Guia para IA</h1>
          <p className={styles.subtitle}>Regras absolutas e referências para qualquer IA construir interfaces TRDR consistentes.</p>
        </div>
      </div>

      {/* Regras absolutas */}
      <section className={iaStyles.section}>
        <h2 className={iaStyles.sectionTitle}>Regras Absolutas</h2>
        <p className={iaStyles.sectionDesc}>Estas regras nunca devem ser quebradas. Elas garantem consistência e suporte a dark/light mode.</p>
        <div className={iaStyles.rules}>
          {absoluteRules.map(rule => (
            <div key={rule.id} className={iaStyles.rule}>
              <div className={iaStyles.ruleNumber}>{rule.id}</div>
              <div className={iaStyles.ruleContent}>
                <strong className={iaStyles.ruleTitle}>{rule.rule}</strong>
                <p className={iaStyles.ruleRationale}>{rule.rationale}</p>
                {rule.example && (
                  <pre className={iaStyles.ruleExample}>{rule.example}</pre>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hierarquia */}
      <section className={iaStyles.section}>
        <h2 className={iaStyles.sectionTitle}>Hierarquia de Camadas</h2>
        <div className="trdr-code-block">
          <pre>{layerHierarchy}</pre>
        </div>
      </section>

      {/* Tokens de ação */}
      <section className={iaStyles.section}>
        <h2 className={iaStyles.sectionTitle}>Como usar tokens de ação</h2>
        <table className="trdr-table">
          <thead>
            <tr>
              <th>Contexto</th>
              <th>Token</th>
              <th>Exemplo de uso</th>
            </tr>
          </thead>
          <tbody>
            {actionTokenGuide.map((item, i) => (
              <tr key={i}>
                <td>{item.label}</td>
                <td><code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--content-brand)' }}>{item.token}</code></td>
                <td style={{ color: 'var(--content-tertiary)' }}>{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Tokens de trading */}
      <section className={iaStyles.section}>
        <h2 className={iaStyles.sectionTitle}>Como usar tokens de trading</h2>
        <table className="trdr-table">
          <thead>
            <tr>
              <th>Contexto</th>
              <th>Token</th>
            </tr>
          </thead>
          <tbody>
            {tradingTokenGuide.map((item, i) => (
              <tr key={i}>
                <td>{item.label}</td>
                <td><code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--content-brand)' }}>{item.token}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CLAUDE.md template */}
      <section className={iaStyles.section}>
        <div className={iaStyles.templateHeader}>
          <h2 className={iaStyles.sectionTitle}>Template de CLAUDE.md</h2>
          <CopyButton text={claudeMdTemplate} label="CLAUDE.md template" />
        </div>
        <p className={iaStyles.sectionDesc}>Adicione este arquivo na raiz de qualquer projeto TRDR para que o Claude Code sempre use o Design System correto.</p>
        <div className="trdr-code-block">
          <pre>{claudeMdTemplate}</pre>
        </div>
      </section>
    </div>
  )
}
