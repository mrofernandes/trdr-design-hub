import styles from './Steps.module.css'

const options = [
  {
    type: 'trading-ui',
    label: 'Plataforma de Trading',
    description: 'Interface da plataforma principal — gráficos, boleta, painéis',
    icon: '📈',
  },
  {
    type: 'marketing',
    label: 'Site Institucional',
    description: 'Páginas de marketing, landing pages, site TRDR',
    icon: '🌐',
  },
  {
    type: 'app-desktop',
    label: 'App Desktop',
    description: 'App launcher ou outros softwares desktop TRDR',
    icon: '🖥️',
  },
  {
    type: 'formulario',
    label: 'Formulário / Controles',
    description: 'Tela de configuração, formulário, painel de settings',
    icon: '⚙️',
  },
  {
    type: 'dashboard',
    label: 'Dashboard / Relatório',
    description: 'Painéis analíticos, relatórios, Performance',
    icon: '📊',
  },
]

interface StepOneProps {
  onSelect: (type: string, label: string) => void
}

export default function StepOne({ onSelect }: StepOneProps) {
  return (
    <div className={styles.step}>
      <div className={styles.heading}>
        <h2 className={styles.title}>O que você está construindo?</h2>
        <p className={styles.subtitle}>Selecione o tipo de interface para receber os tokens e componentes mais relevantes.</p>
      </div>
      <div className={styles.optionsGrid}>
        {options.map(opt => (
          <button
            key={opt.type}
            className={styles.option}
            onClick={() => onSelect(opt.type, opt.label)}
          >
            <span className={styles.optionIcon}>{opt.icon}</span>
            <div>
              <div className={styles.optionLabel}>{opt.label}</div>
              <div className={styles.optionDesc}>{opt.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
