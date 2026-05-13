import { absoluteRules, layerHierarchy, actionTokenGuide, tradingTokenGuide, claudeMdTemplate } from '@/data/ia-rules'
import CopyButton from '@/components/ui/CopyButton'
import styles from '../page-layout.module.css'
import iaStyles from './para-ia.module.css'

const phaseOneSteps = [
  {
    n: '1',
    label: 'Detectar framework',
    desc: 'Lê package.json e identifica Next.js, React, Vue, TypeScript e a abordagem de estilos (CSS Modules, Tailwind, plain CSS). Detecta stylingMode duplo — quando Tailwind e styled-components coexistem, ativa scan especial de template literals além dos arquivos CSS.',
  },
  {
    n: '2',
    label: 'Mapear arquivos de estilo',
    desc: 'Encontra todos os .css e .scss, localiza o arquivo CSS global e detecta conflitos com prefixos TRDR existentes.',
  },
  {
    n: '3',
    label: 'Encontrar violações e auditar logo',
    desc: 'Busca 11 categorias: cores hardcoded A/A* (incluindo SVG attrs e Tailwind arbitrary bg-[#hex]), font-family B, spacing px C, primitivos via var() D (uso e definição em :root), rgba F, gradientes G (inclusive com rgba stops), font-size H, inline styles I, atribuições DOM imperativas I.2 (element.style.prop = valor), SVGs inline J/J.medium, e logo incorreta K. Verifica fingerprint do logo oficial (viewBox 105×41, fill #00D4FF).',
  },
  {
    n: '4',
    label: 'Detectar candidatos a componentes e carregar catálogo',
    desc: 'Identifica padrões de UI substituíveis por componentes TRDR (<button>, <input>, <select>, etc.) e carrega o catálogo offline do snapshot embutido. Com --latest, busca trdr.mrocontent.com.br/components.json antes de seguir.',
  },
  {
    n: '5',
    label: 'Gerar sprint plan e aguardar',
    desc: 'Salva DS_ANALYSIS.md + SPRINT_PLAN.md (sprints independentes agrupados por pasta, máx. 15 arquivos cada). Classifica componentes em simple/complex/manual. Nenhum arquivo é alterado antes da sua resposta.',
  },
]

const phaseTwoFiles = [
  { file: 'tokens.css', desc: 'Cópia verbatim do snapshot references/tokens.css — dark + light mode.' },
  { file: 'components.css', desc: 'CSS de cada componente implementado no catálogo + classes de tipografia .trdr-h*/.trdr-body-*.' },
  { file: '[globals].css', desc: '@import adicionado no topo para carregar tokens.css e components.css.' },
  { file: 'CLAUDE.md', desc: 'Regras do design system + referência rápida + lista dos componentes implementados (gerada do catálogo).' },
  { file: 'logo-trdr.svg', desc: 'Logos errados encontrados na Fase 1 são substituídos no lugar pelo logo oficial (105×41px). Se não houver logo e public/ existir, o arquivo é copiado para public/logo-trdr.svg.' },
  { file: 'MISSING_COMPONENTS.md', desc: 'Apenas se algum stub for encontrado no projeto — registra slug, figmaId e tokens recomendados.' },
  { file: 'DS_MIGRATION.md', desc: 'Log completo da migração + checklist de passos manuais (fontes, dark mode, trading UI, stubs).' },
  { file: 'DS_PROGRESS.md', desc: 'Checkpoint de execução — registra sprints, sub-fases e progresso geral. Permite retomar com /trdr-ds resume.' },
  { file: 'SPRINT_PLAN.md', desc: 'Plano de sprints gerado na análise — cada sprint é independente e executável em uma janela de contexto limpa.' },
]

const responseCommands = [
  { cmd: '"Apply" ou "Executar"', desc: 'Executa tudo que está no plano sem exceções.' },
  { cmd: '"Apply, batch 15"', desc: 'Executa com lotes de 15 arquivos por vez na sub-fase Violations (padrão é 5 arquivos). Útil para reduzir o número de interrupções.' },
  { cmd: '"Sync first"', desc: 'Atualiza o snapshot do catálogo a partir do Hub antes de aplicar — útil quando você sabe que há componentes novos.' },
  { cmd: '"Only tokens"', desc: 'Cria apenas tokens.css, components.css e CLAUDE.md — sem corrigir violações existentes.' },
  { cmd: '"Apply, skip src/vendor"', desc: 'Executa mas pula um caminho ou arquivo específico da lista de violações.' },
  { cmd: '"Change ..."', desc: 'Ajusta um detalhe do plano antes de executar — útil para escolher o diretório de output.' },
]

const batchCommands = [
  { cmd: '"continuar"', desc: 'Processa o próximo sprint.' },
  { cmd: '"tudo"', desc: 'Processa todos os sprints restantes sem pausar.' },
  { cmd: '"pular src/legacy"', desc: 'Pula a pasta do próximo sprint e vai para o seguinte.' },
  { cmd: '"parar"', desc: 'Salva o progresso e para — retome com /trdr-ds resume.' },
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
              <div className={iaStyles.skillTitle}>/trdr-ds — TRDR Design System Installer <span className={iaStyles.commandBadge} style={{ marginLeft: 8, fontSize: 11 }}>v1.8.0</span></div>
              <div className={iaStyles.skillSubtitle}>Analisa o projeto → gera sprint plan → aguarda aprovação → executa em sprints independentes com rollback via git</div>
            </div>
          </div>

          <div className={iaStyles.skillSteps}>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>1 — Análise + Sprint Plan</span>
              <span className={iaStyles.skillStepDesc}>Detecta framework, encontra violações, classifica componentes e gera SPRINT_PLAN.md com sprints independentes</span>
            </div>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>2 — Backup + Aprovação</span>
              <span className={iaStyles.skillStepDesc}>Cria branch git de backup antes de qualquer modificação. Apresenta o plano — nenhum arquivo é alterado antes da sua resposta</span>
            </div>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>3 — Execução por Sprints</span>
              <span className={iaStyles.skillStepDesc}>Cada sprint é independente: Foundation → Violations (por pasta) → Components (3 passes) → Final. Limpe o contexto entre sprints com /clear e retome com /trdr-ds resume</span>
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

        {/* Snapshot offline + JSON endpoint */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Catálogo offline-first</h3>
          <p className={iaStyles.sectionDesc}>A skill embute um snapshot completo do catálogo e dos tokens — funciona sem internet. Mantenedores atualizam o snapshot puxando do Hub via npm run sync. Devs recebem a versão nova rodando npx trdr-ds-install@latest.</p>
          <div className={iaStyles.fileList}>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>/components.json</code>
              <span className={iaStyles.fileDesc}>Catálogo completo em JSON: 20 componentes implementados (com 4 code blocks cada). <a href="/components.json" style={{ color: 'var(--content-brand)' }}>Abrir endpoint →</a></span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>/tokens.css</code>
              <span className={iaStyles.fileDesc}>Todas as CSS variables (dark + light), copiadas verbatim para o projeto. <a href="/tokens.css" style={{ color: 'var(--content-brand)' }}>Abrir endpoint →</a></span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>/trdr-ds sync</code>
              <span className={iaStyles.fileDesc}>Comando do dev — força a skill a buscar o catálogo mais novo do Hub e sobrescrever o snapshot local. Não toca em arquivos do projeto.</span>
            </div>
          </div>
        </div>

        {/* Sprints */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Sistema de Sprints — projetos de qualquer tamanho</h3>
          <p className={iaStyles.sectionDesc}>A migração é dividida em <strong>sprints independentes</strong>. Cada sprint cabe em uma única janela de contexto — ideal para projetos grandes (4GB+). Entre sprints, use <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--content-brand)' }}>/clear</code> para limpar o contexto e <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--content-brand)' }}>/trdr-ds resume</code> para continuar.</p>
          <div className={iaStyles.fileList}>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>SPRINT_PLAN.md</code>
              <span className={iaStyles.fileDesc}>Gerado na Fase 1 — lista todos os sprints com escopo, arquivos e status. Cada sprint processa no máximo 15 arquivos.</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>/trdr-ds resume</code>
              <span className={iaStyles.fileDesc}>Encontra o próximo sprint pendente no SPRINT_PLAN.md e executa — lê apenas os dados necessários para aquele sprint, sem sobrecarregar o contexto.</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>/trdr-ds status</code>
              <span className={iaStyles.fileDesc}>Tabela de progresso com todos os sprints (completos, em andamento, pendentes), violações corrigidas e próxima ação.</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>/trdr-ds rollback</code>
              <span className={iaStyles.fileDesc}>Reverte TODA a migração ao estado original usando o branch git de backup criado antes do primeiro sprint.</span>
            </div>
          </div>
          <p className={iaStyles.sectionDesc} style={{ marginTop: 'var(--spacing-lg)' }}>Entre sprints, responda com:</p>
          <div className={iaStyles.responseGrid}>
            {batchCommands.map(r => (
              <div key={r.cmd} className={iaStyles.responseCard}>
                <code className={iaStyles.responseCmd}>{r.cmd}</code>
                <p className={iaStyles.responseDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rollback */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Rollback — desfazer a migração</h3>
          <p className={iaStyles.sectionDesc}>Antes de modificar qualquer arquivo, a skill cria um <strong>branch git de backup</strong> com o estado completo do projeto. Se algo der errado, desfaça tudo com um comando.</p>
          <div className={iaStyles.fileList}>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>Backup automático</code>
              <span className={iaStyles.fileDesc}>Branch <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>trdr-ds/backup-YYYY-MM-DD-HHmmss</code> criado antes do Sprint 1. Mudanças não commitadas são preservadas via git stash.</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>/trdr-ds rollback</code>
              <span className={iaStyles.fileDesc}>Lê o branch de backup do DS_PROGRESS.md, pede confirmação, e executa git reset --hard para restaurar o estado original.</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>Sem git?</code>
              <span className={iaStyles.fileDesc}>Se o projeto não tem repositório git, a skill oferece inicializar com git init ou continuar sem backup (irreversível).</span>
            </div>
          </div>
        </div>

        {/* Component implementation */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Implementação de componentes — 3 níveis</h3>
          <p className={iaStyles.sectionDesc}>Na Fase 1, a skill classifica cada candidato a componente em 3 níveis de complexidade. Na Fase 2 (Sprint de Components), cada nível recebe um tratamento diferente:</p>
          <div className={iaStyles.skillSteps}>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>Simple</span>
              <span className={iaStyles.skillStepDesc}>Elemento simples (só texto, sem handlers). Substituído completamente pela estrutura do componente DS, adaptando o conteúdo do projeto.</span>
            </div>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>Complex-preservable</span>
              <span className={iaStyles.skillStepDesc}>Elemento com handlers/bindings/condicionais, mas mapeável ao DS. Recebe classes e estrutura DS, preservando toda a lógica existente.</span>
            </div>
            <div className={iaStyles.skillStep}>
              <span className={iaStyles.skillStepLabel}>Manual</span>
              <span className={iaStyles.skillStepDesc}>Lógica profunda ou domínio específico. Não é modificado — recebe comentário TODO e entrada detalhada no DS_MIGRATION.md.</span>
            </div>
          </div>
        </div>

        {/* Component dependencies */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Dependências de componentes — ordem topológica</h3>
          <p className={iaStyles.sectionDesc}>Componentes compostos reutilizam componentes atômicos. A skill resolve a ordem de instalação automaticamente: atômicos primeiro, compostos depois — garantindo que imports de sub-componentes já existam quando um composto é instalado.</p>
          <div className={iaStyles.fileList}>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>Boleta</code>
              <span className={iaStyles.fileDesc}>SegmentedControl, TextInput, Checkbox, Button, Dropdown</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>Janela</code>
              <span className={iaStyles.fileDesc}>FloatingMenu, Abas</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>NewsCard, Tabelas, Header</code>
              <span className={iaStyles.fileDesc}>Badge</span>
            </div>
          </div>
          <p className={iaStyles.note}>O campo <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>dependencies</code> no <a href="/components.json" style={{ color: 'var(--content-brand)' }}>components.json</a> lista os slugs de sub-componentes de cada composto.</p>
        </div>

        {/* Icon size preservation */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Ícones Material Design — tamanho preservado</h3>
          <p className={iaStyles.sectionDesc}>SVGs inline são substituídos por Material Icons mantendo o tamanho original do ícone. A skill mede width/height do SVG (ou viewBox) antes de substituir.</p>
          <div className={iaStyles.fileList}>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>.mi-2xs</code>
              <span className={iaStyles.fileDesc}>12px — indicadores muito pequenos</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>.mi-xs</code>
              <span className={iaStyles.fileDesc}>14px — UI compacta</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>.mi-sm</code>
              <span className={iaStyles.fileDesc}>16px — ícones pequenos</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>default</code>
              <span className={iaStyles.fileDesc}>20px — sem classe, tamanho padrão</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>.mi-lg</code>
              <span className={iaStyles.fileDesc}>24px — tamanho padrão Material Design</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>.mi-xl</code>
              <span className={iaStyles.fileDesc}>28px — ícones maiores</span>
            </div>
            <div className={iaStyles.fileItem}>
              <code className={iaStyles.fileName}>.mi-2xl</code>
              <span className={iaStyles.fileDesc}>32px — ícones hero/feature</span>
            </div>
          </div>
          <p className={iaStyles.note}>Para tamanhos não padrão: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>style=&quot;font-size:18px&quot;</code> é aceito APENAS para font-size de ícones, nunca para cor.</p>
        </div>

        {/* Stub fallback */}
        <div className={iaStyles.subSection}>
          <h3 className={iaStyles.subSectionTitle}>Componentes &quot;stub&quot; — fallback inteligente</h3>
          <p className={iaStyles.sectionDesc}>O TRDR DS tem 82+ componentes no Figma. Os 20 com 4 code blocks completos no catálogo (HTML, CSS, React e prompt) são implementados durante o sprint de Components — com 3 níveis de complexidade (simple/complex-preservable/manual). Os demais entram como stubs (implemented: false) — a skill não inventa código, mas aplica os tokens recomendados, comenta no fonte com figmaId e link para o Hub, e registra em MISSING_COMPONENTS.md no projeto.</p>
        </div>

        {/* Phase 1 */}
        <div className={iaStyles.subSection}>
          <div className={iaStyles.phaseHeader}>
            <span className={iaStyles.phaseBadge}>Fase 1</span>
            <h3 className={iaStyles.subSectionTitle}>Análise — roda automaticamente</h3>
          </div>
          <p className={iaStyles.sectionDesc}>A skill examina o projeto em 5 etapas, salva o resultado em <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--content-brand)' }}>DS_ANALYSIS.md</code> e apresenta um plano estruturado. Nenhum arquivo do projeto é modificado até a sua aprovação.</p>
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
          <p className={iaStyles.sectionDesc}>Após aprovação, a skill cria um <strong>backup git</strong> e executa por sprints: <strong>Sprint 1 — Foundation</strong> (tokens, components, CLAUDE.md), <strong>Sprints 2-N — Violations</strong> (por pasta, máx. 15 arquivos), <strong>Sprint N+1 — Components</strong> (3 passes: simple/complex/manual), <strong>Sprint Final</strong> (logos, ícones com tamanho preservado, DS_MIGRATION.md). Os arquivos gerados são:</p>
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
              <span className={iaStyles.exampleLabel}>Aplicar tudo (projeto pequeno)</span>
              <pre className={iaStyles.exampleCode}>{`# No Claude Code, digite:\n/trdr-ds\n\n# A skill analisa, gera SPRINT_PLAN.md e apresenta o plano.\n# Após o plano aparecer, responda:\nApply`}</pre>
            </div>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Projeto grande — sprint por sprint</span>
              <pre className={iaStyles.exampleCode}>{`# Análise e primeiro sprint:\n/trdr-ds\nApply\n\n# Sprint 1 (Foundation) executa e para.\n# Limpe o contexto:\n/clear\n\n# Continue o próximo sprint:\n/trdr-ds resume\n\n# Repita /clear + /trdr-ds resume até completar.`}</pre>
            </div>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Desfazer toda a migração</span>
              <pre className={iaStyles.exampleCode}>{`# A qualquer momento durante ou após a migração:\n/trdr-ds rollback\n\n# Confirme com:\nconfirmar\n\n# O projeto volta ao estado exato de antes da migração.`}</pre>
            </div>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Ver progresso e status dos sprints</span>
              <pre className={iaStyles.exampleCode}>{`# Tabela completa de sprints sem alterar nada:\n/trdr-ds status\n\n# Retomar de onde parou:\n/trdr-ds resume`}</pre>
            </div>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Apenas tokens (sem violações nem componentes)</span>
              <pre className={iaStyles.exampleCode}>{`/trdr-ds\n\n# Após o plano:\nOnly tokens`}</pre>
            </div>
            <div className={iaStyles.example}>
              <span className={iaStyles.exampleLabel}>Pular diretório ou invocar por frase</span>
              <pre className={iaStyles.exampleCode}>{`# Pular um caminho:\n/trdr-ds\nApply, skip src/vendor\n\n# Frase natural (sem /trdr-ds):\naplicar design system TRDR neste projeto`}</pre>
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
