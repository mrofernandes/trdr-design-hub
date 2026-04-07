import { designMdContent } from '@/data/design-md-content'

export function generatePromptFromContext(userContext: string): string {
  return `Você é um especialista em implementação do Design System TRDR.

Sua tarefa é implementar o visual de um projeto TRDR, adaptando o Design System ao contexto descrito abaixo. Use o design.md completo como fonte de verdade absoluta para todos os tokens, componentes e padrões visuais.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTEXTO DO PROJETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${userContext}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
O QUE VOCÊ DEVE FAZER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Analisar o contexto acima e identificar quais telas, componentes e padrões de layout do Design System TRDR se aplicam
2. Implementar o visual usando EXCLUSIVAMENTE os tokens CSS do Design System (nunca valores hardcoded)
3. Adaptar os componentes do DS ao contexto específico do projeto mantendo a identidade visual TRDR
4. Garantir que o resultado seja consistente com as demais interfaces TRDR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGRAS ABSOLUTAS (nunca quebrar)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. NUNCA use cores hexadecimais diretas — sempre CSS variables (--bg-primary, --content-primary, etc.)
2. Dark mode é o PADRÃO da TRDR — nunca use light como default
3. Fontes obrigatórias: Space Grotesk (headings), Inter (body/UI), Roboto Mono (números/dados)
4. Espaçamentos SEMPRE via tokens: --spacing-xs/sm/md/lg/xl/2xl/3xl
5. Bordas SEMPRE via tokens: --radius-sm/md/lg/full
6. Não use Tailwind — os tokens CSS já formam um sistema completo
7. Suporte a light mode via [data-theme="light"] para todos os tokens semânticos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM TRDR — REFERÊNCIA COMPLETA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${designMdContent}`
}


// Mantido para compatibilidade — não usado na nova interface
export interface PromptConfig {
  projectType: string
  projectTypeLabel: string
  context: string
  contextLabel: string
  selectedComponents: string[]
}

export function generatePrompt(config: PromptConfig): string {
  return generatePromptFromContext(
    `Tipo: ${config.projectTypeLabel}\nContexto: ${config.contextLabel}`
  )
}
