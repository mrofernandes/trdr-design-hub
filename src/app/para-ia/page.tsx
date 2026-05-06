import Link from 'next/link'
import { absoluteRules, layerHierarchy, actionTokenGuide, tradingTokenGuide, claudeMdTemplate } from '@/data/ia-rules'
import CopyButton from '@/components/ui/CopyButton'
import styles from '../page-layout.module.css'
import iaStyles from './para-ia.module.css'

export default function ParaIAPage() {
  const installCommand = '/plugin install trdr-design-system@trdr-plugins'

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Guia para IA</h1>
          <p className={styles.subtitle}>Regras absolutas e referências para qualquer IA construir interfaces TRDR consistentes.</p>
        </div>
      </div>

      {/* Skill Claude Code */}
      <section className={iaStyles.section}>
        <h2 className={iaStyles.sectionTitle}>Skill Claude Code — /trdr-ds</h2>
        <p className={iaStyles.sectionDesc}>Instale uma vez no Claude Code e aplique o TRDR Design System em qualquer projeto automaticamente. Atualizações chegam automaticamente para toda a equipe sem reinstalar.</p>
        <div className={iaStyles.skillCard}>
          <div className={iaStyles.skillCardHeader}>
            <div className={iaStyles.skillIcon}>
              <span className="material-symbols-outlined">auto_fix_high</span>
            </div>
            <div>
              <div className={iaStyles.skillTitle}>/trdr-ds — Design System Installer</div>
              <div className={iaStyles.skillSubtitle}>Analisa o projeto, gera um plano, aguarda aprovação, executa a implementação completa</div>
            </div>
          </div>

          <div className={iaStyles.skillSteps}>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>1 — Análise</span>
              <span className={iaStyles.skillStepDesc}>Detecta o framework, mapeia estilos, encontra violações das 7 regras e busca componentes disponíveis no Hub</span>
            </div>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>2 — Aprovação</span>
              <span className={iaStyles.skillStepDesc}>Apresenta um plano com tudo que será feito. O dev aprova, ajusta ou exclui itens antes de qualquer mudança</span>
            </div>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>3 — Execução</span>
              <span className={iaStyles.skillStepDesc}>Cria tokens.css, components.css, CLAUDE.md, corrige violações e gera DS_MIGRATION.md com checklist</span>
            </div>
          </div>

          <div className={iaStyles.skillInstall}>
            <span className={iaStyles.skillInstallLabel}>Instalação (uma única vez por desenvolvedor):</span>
            <div className={iaStyles.skillInstallCode}>
              <code className={iaStyles.skillInstallCommand}>{installCommand}</code>
              <CopyButton text={installCommand} label="comando de instalação" />
            </div>
          </div>
        </div>
      </section>

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
