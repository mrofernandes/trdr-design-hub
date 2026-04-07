import { absoluteRules, contextTokenMap } from '@/data/ia-rules'
import { components } from '@/data/components'

export interface PromptConfig {
  projectType: string
  projectTypeLabel: string
  context: string
  contextLabel: string
  selectedComponents: string[]
}

export function generatePrompt(config: PromptConfig): string {
  const { projectType, projectTypeLabel, context, contextLabel, selectedComponents } = config

  const selectedComps = components.filter(c => selectedComponents.includes(c.slug))
  const tokenGroups = contextTokenMap[context] ?? contextTokenMap['configuracao']

  const tokensSection = tokenGroups
    .map(group => {
      return `  ${group.label}:\n${group.tokens.map(t => `    • ${t}`).join('\n')}`
    })
    .join('\n\n')

  const componentsSection = selectedComps.length > 0
    ? selectedComps.map(comp => {
      const mainDim = comp.dimensions[0]
      const dimStr = mainDim
        ? `${mainDim.width ? mainDim.width + ' × ' : ''}${mainDim.height}`
        : 'dimensão variável'

      const tokensStr = comp.tokens.length > 0
        ? comp.tokens.map(t => `    • ${t.property}: ${t.token} (${t.value})`).join('\n')
        : '    • Sem tokens específicos documentados'

      const propsStr = comp.props.length > 0
        ? comp.props.map(p => `    • ${p.name}: ${p.values.join(' | ')}`).join('\n')
        : ''

      return `### ${comp.name} (Figma: ${comp.figmaId})
  Descrição: ${comp.description}
  Dimensão: ${dimStr}
${tokensStr}${propsStr ? '\n  Props:\n' + propsStr : ''}`
    }).join('\n\n')
    : '  Nenhum componente específico selecionado. Use os componentes mais adequados ao contexto.'

  const rulesSection = absoluteRules
    .map(r => `  ${r.id}. ${r.rule}`)
    .join('\n')

  return `Você está criando uma interface para o produto TRDR.
Use EXCLUSIVAMENTE o TRDR Design System documentado abaixo.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTEXTO DO PROJETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tipo: ${projectTypeLabel}
Contexto: ${contextLabel}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOKENS RELEVANTES PARA ESTE CONTEXTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use CSS custom properties para todos os tokens:

${tokensSection}

Tokens universais (sempre usar):
  • --font-primary: Space Grotesk (headings)
  • --font-secondary: Inter (body, labels, UI)
  • --font-mono: Roboto Mono (números, dados financeiros)
  • Espaçamentos: --spacing-xs (4px) | --spacing-sm (8px) | --spacing-md (12px) | --spacing-lg (16px) | --spacing-xl (20px) | --spacing-2xl (24px) | --spacing-3xl (32px)
  • Radius: --radius-sm (4px) | --radius-md (8px) | --radius-lg (16px) | --radius-full (9999px)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENTES A USAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${componentsSection}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGRAS ABSOLUTAS DO DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${rulesSection}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTRUÇÕES DE IMPLEMENTAÇÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Stack: Next.js + TypeScript + CSS puro com CSS variables
• Tema: dark mode é o PADRÃO da TRDR — não use light como default
• Todos os valores de cor devem ser CSS vars, nunca hexadecimal direto
• Não use Tailwind — os tokens já formam um sistema completo
• Para dúvidas de design, consulte: /design-md na plataforma TRDR Design Hub

[Descreva aqui o que você quer construir]`
}
