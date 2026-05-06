import { absoluteRules, layerHierarchy, actionTokenGuide, tradingTokenGuide, claudeMdTemplate } from '@/data/ia-rules'
import CopyButton from '@/components/ui/CopyButton'
import styles from '../page-layout.module.css'
import iaStyles from './para-ia.module.css'

const phaseOneSteps = [
  {
    n: '1',
    label: 'Detectar framework',
    desc: 'Lê package.json e identifica Next.js, React, Vue, TypeScript e a abordagem de estilos (CSS Modules, Tailwind, plain CSS...).',
  },
  {
    n: '2',
    label: 'Mapear arquivos de estilo',
    desc: 'Encontra todos os .css e .scss, localiza o arquivo CSS global e detecta conflitos com prefixos TRDR existentes.',
  },
  {
    n: '3',
    label: 'Encontrar violações',
    desc: 'Busca cores hardcoded (#hex), font-family direto, px de espaçamento fixo e uso de tokens primitivos em vez de semânticos.',
  },
  {
    n: '4',
    label: 'Buscar componentes do Hub',
    desc: 'Acessa trdr.mrocontent.com.br/componentes ao vivo e lista quais componentes têm código pronto para uso imediato.',
  },
  {
    n: '5',
    label: 'Apresentar o plano e aguardar',
    desc: 'Exibe score de conformidade, arquivos a criar, arquivos a modificar e violações por categoria. Nenhum arquivo é alterado nesta fase.',
  },
]

const phaseTwoFiles = [
  { file: 'tokens.css', desc: '292 CSS custom properties — dark mode e light mode completos.' },
  { file: 'components.css', desc: 'Classes utilitárias .trdr-* para todos os componentes do Hub.' },
  { file: '[globals].css', desc: '@import adicionado no topo para carregar tokens.css e components.css.' },
  { file: 'CLAUDE.md', desc: 'Regras do design system + referência rápida de tokens para o Claude Code.' },
  { file: 'DS_MIGRATION.md', desc: 'Log completo da migração + checklist de passos manuais (fontes, dark mode, trading UI).' },
]

const responseCommands = [
  { cmd: '"Apply" ou "Executar"', desc: 'Executa tudo que está no plano sem exceções.' },
  { cmd: '"Only tokens"', desc: 'Cria apenas tokens.css, components.css e CLAUDE.md — sem corrigir violações existentes.' },
  { cmd: '"Apply, skip src/vendor"', desc: 'Executa mas pula um caminho ou arquivo específico da lista de violações.' },
  { cmd: '"Change ..."', desc: 'Ajusta um detalhe do plano antes de executar — útil para escolher o diretório de output.' },
]

const triggerPhrases = [
  { text: '/trdr-ds', primary: true },
  { text: 'aplicar design system', primary: false },
  { text: 'implement TRDR DS', primary: false },
  { text: 'add TRDR tokens', primary: false },
  { text: 'design system setup', primary: false },
  { text: 'migrar design system', primary: false },
  { text: 'apply design system', primary: false },
]

export default function ParaIAPage() {
  const installCommand = 'npx trdr-ds-install@latest'
  const installCommandProject = 'npx trdr-ds-install@latest --project'

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Guia para IA</h1>
          <p className={styles.subtitle}>Regras absolutas, referências e o passo a passo completo da skill /trdr-ds para qualquer IA construir interfaces TRDR consistentes.</p>
        </div>
      </div>

      {/* Skill Claude Code */}
      <section className={iaStyles.section}>
        <h2 className={iaStyles.sectionTitle}>Skill Claude Code — /trdr-ds</h2>
        <p className={iaStyles.sectionDesc}>Instale uma vez no Claude Code e aplique o TRDR Design System em qualquer projeto em dois passos: análise com aprovação e execução completa. Atualizações chegam automaticamente via npm — sem reinstalar.</p>

        {/* Overview card */}
        <div className={iaStyles.skillCard}>
          <div className={iaStyles.skillCardHeader}>
            <div className={iaStyles.skillIcon}>
              <span className="material-symbols-outlined">auto_fix_high</span>
            </div>
            <div>
              <div className={iaStyles.skillTitle}>/trdr-ds — TRDR Design System Installer</div>
              <div className={iaStyles.skillSubtitle}>Analisa o projeto → gera plano → aguarda aprovação → executa implementação completa</div>
            </div>
          </div>

          <div className={iaStyles.skillSteps}>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>1 — Análise</span>
              <span className={iaStyles.skillStepDesc}>Detecta framework, mapeia estilos, encontra violações e busca componentes disponíveis no Hub ao vivo</span>
            </div>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>2 — Aprovação</span>
              <span className={iaStyles.skillStepDesc}>Apresenta plano completo com score de conformidade. Nenhum arquivo é alterado antes da sua resposta</span>
            </div>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>3 — Execução</span>
              <span className={iaStyles.skillStepDesc}>Cria tokens.css, components.css, CLAUDE.md, corrige violações e gera DS_MIGRATION.md com checklist</span>
            </div>
          </div>
        </div>

        {/* Installation */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Instalação</h3>
          <div className={iaStyles.commandGrid}>
            <div className={iaStyles.commandCard}>
              <span className={iaStyles.commandBadge}>Global — recomendado</span>
              <div className={iaStyles.skillInstallCode}>
                <code className={iaStyles.skillInstallCommand}>{installCommand}</code>
                <CopyButton text={installCommand} label="comando global" />
              </div>
              <p className={iaStyles.commandNote}>Disponível em todos os projetos. Para atualizar, rode o mesmo comando novamente.</p>
            </div>
            <div className={iaStyles.commandCard}>
              <span className={iaStyles.commandBadge}>Apenas este projeto</span>
              <div className={iaStyles.skillInstallCode}>
                <code className={iaStyles.skillInstallCommand}>{installCommandProject}</code>
                <CopyButton text={installCommandProject} label="comando local" />
              </div>
              <p className={iaStyles.commandNote}>Instalado em .claude/skills/ do projeto atual. Ideal para equipes sem acesso global.</p>
            </div>
          </div>
          <p className={iaStyles.note}>Após instalar, reinicie o Claude Code para ativar a skill.</p>
        </div>

        {/* How to invoke */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Como invocar</h3>
          <p className={iaStyles.sectionDesc}>Digite o comando direto ou qualquer uma das frases abaixo no Claude Code — a skill detecta automaticamente a intenção.</p>
          <div className={iaStyles.triggerGrid}>
            {triggerPhrases.map(t => (
              <span key={t.text} className={t.primary ? iaStyles.triggerPrimary : iaStyles.trigger}>
                {t.text}
              </span>
            ))}
          </div>
        </div>

        {/* Phase 1 */}
        <div className={iaStyles.subSection}>
          <div className={iaStyles.phaseHeader}>
            <span className={iaStyles.phaseBadge}>Fase 1</span>
            <h3 className={iaStyles.subSectionTitle}>Análise — roda automaticamente</h3>
          </div>
          <p className={iaStyles.sectionDesc}>A skill examina o projeto em 5 etapas e apresenta um plano estruturado. Nenhum arquivo é modificado até a sua aprovação.</p>
          <div className={iaStyles.phaseStepList}>
            {phaseOneSteps.map(s => (
              <div key={s.n} className={iaStyles.phaseStepItem}>
                <div className={iaStyles.phaseStepNum}>{s.n}</div>
                <div className={iaStyles.phaseStepContent}>
                  <strong className={iaStyles.phaseStepLabel}>{s.label}</strong>
                  <p className={iaStyles.phaseStepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response commands */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Como responder ao plano</h3>
          <p className={iaStyles.sectionDesc}>Após ver o plano gerado pela Fase 1, responda com um dos comandos abaixo para iniciar a execução:</p>
          <div className={iaStyles.responseGrid}>
            {responseCommands.map(r => (
              <div key={r.cmd} className={iaStyles.responseCard}>
                <code className={iaStyles.responseCmd}>{r.cmd}</code>
                <p className={iaStyles.responseDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div className={iaStyles.subSection}>
          <div className={iaStyles.phaseHeader}>
            <span className={iaStyles.phaseBadge2}>Fase 2</span>
            <h3 className={iaStyles.subSectionTitle}>Execução — o que é criado</h3>
          </div>
          <p className={iaStyles.sectionDesc}>Após aprovação, a skill cria e modifica os seguintes arquivos no projeto:</p>
          <div className={iaStyles.fileList}>
            {phaseTwoFiles.map(f => (
              <div key={f.file} className={iaStyles.fileItem}>
                <code className={iaStyles.fileName}>{f.file}</code>
                <span className={iaStyles.fileDesc}>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage examples */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Exemplos de uso</h3>
          <div className={iaStyles.examples}>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Aplicar tudo</span>
              <pre className={iaStyles.exampleCode}>{`# No Claude Code, digite:\n/trdr-ds\n\n# A skill analisa o projeto e apresenta o plano.\n# Após o plano aparecer, responda:\nApply`}</pre>
            </div>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Apenas tokens e CLAUDE.md (sem corrigir violações)</span>
              <pre className={iaStyles.exampleCode}>{`/trdr-ds\n\n# Após o plano:\nOnly tokens`}</pre>
            </div>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Pular um diretório específico</span>
              <pre className={iaStyles.exampleCode}>{`/trdr-ds\n\n# Após o plano:\nApply, skip src/legacy`}</pre>
            </div>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Invocar por frase natural</span>
              <pre className={iaStyles.exampleCode}>{`# Funciona sem digitar /trdr-ds:\naplicar design system TRDR neste projeto`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Regras absolutas */}
      <section className={iaStyles.section}>
        <h2 className={iaStyles.sectionTitle}>Regras Absolutas</h2>
        <p className={iaStyles.sectionDesc}>Estas regras nunca devem ser quebradas. Elas garantem consistência e suporte a dark/light mode em todo projeto TRDR.</p>
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
        <p className={iaStyles.sectionDesc}>Este é o CLAUDE.md gerado automaticamente pela skill /trdr-ds. Adicione-o na raiz de qualquer projeto TRDR para que o Claude Code sempre use o Design System correto.</p>
        <div className="trdr-code-block">
          <pre>{claudeMdTemplate}</pre>
        </div>
      </section>
    </div>
  )
}
