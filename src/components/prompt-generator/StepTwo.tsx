import styles from './Steps.module.css'

const contextsByProjectType: Record<string, { ctx: string; label: string; desc: string }[]> = {
  'trading-ui': [
    { ctx: 'trading-ui', label: 'Trading — Geral', desc: 'Candlesticks, preços, posições long/short' },
    { ctx: 'dashboard', label: 'Dashboard de Performance', desc: 'Resultados, gráficos analíticos, P&L' },
    { ctx: 'formulario', label: 'Formulário de Ordem', desc: 'Boleta, inputs de quantidade, alavancagem' },
    { ctx: 'configuracao', label: 'Configuração', desc: 'Settings, preferências, personalização' },
  ],
  'marketing': [
    { ctx: 'marketing', label: 'Landing Page / Hero', desc: 'Seções de marketing, headings grandes, CTAs' },
    { ctx: 'marketing', label: 'Features / Benefícios', desc: 'Cards de features, listas, comparativos' },
    { ctx: 'formulario', label: 'Formulário de Contato', desc: 'Formulários de cadastro, newsletter' },
  ],
  'app-desktop': [
    { ctx: 'app-desktop', label: 'App Shell', desc: 'Header, sidebar, footer do app launcher' },
    { ctx: 'app-desktop', label: 'Catálogo de Plataformas', desc: 'Cards de plataformas com status badges' },
    { ctx: 'dashboard', label: 'Atividade do Usuário', desc: 'Estatísticas de uso, histórico de acesso' },
  ],
  'formulario': [
    { ctx: 'formulario', label: 'Formulário de Configuração', desc: 'Inputs, selects, switches, checkboxes' },
    { ctx: 'configuracao', label: 'Painel de Preferências', desc: 'Tabs de configuração, seções organizadas' },
    { ctx: 'trading-ui', label: 'Formulário de Ordem', desc: 'Boleta compra/venda com validações' },
  ],
  'dashboard': [
    { ctx: 'dashboard', label: 'Dashboard Principal', desc: 'KPIs, gráficos, métricas em destaque' },
    { ctx: 'trading-ui', label: 'Dashboard de Trading', desc: 'Performance, resultados, operações' },
    { ctx: 'configuracao', label: 'Relatório Configurável', desc: 'Filtros, períodos, exportação' },
  ],
}

interface StepTwoProps {
  projectType: string
  onSelect: (ctx: string, label: string) => void
  onBack: () => void
}

export default function StepTwo({ projectType, onSelect, onBack }: StepTwoProps) {
  const options = contextsByProjectType[projectType] ?? contextsByProjectType['formulario']

  return (
    <div className={styles.step}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Qual o contexto principal?</h2>
        <p className={styles.subtitle}>O contexto define quais tokens serão incluídos no prompt.</p>
      </div>
      <div className={styles.optionsList}>
        {options.map((opt, i) => (
          <button
            key={i}
            className={styles.optionRow}
            onClick={() => onSelect(opt.ctx, opt.label)}
          >
            <div className={styles.optionLabel}>{opt.label}</div>
            <div className={styles.optionDesc}>{opt.desc}</div>
          </button>
        ))}
      </div>
      <div className={styles.actions}>
        <button className="trdr-btn trdr-btn-ghost" onClick={onBack}>← Voltar</button>
      </div>
    </div>
  )
}
