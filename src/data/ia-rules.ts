/* ==========================================================================
   TRDR Design System — Regras para IA + Mapa de Contexto
   Fonte: design.md v1.4 — Seção 9: Guia para IA
   ========================================================================== */

export interface AbsoluteRule {
  id: number
  rule: string
  rationale: string
  example?: string
}

export interface ContextTokenGroup {
  label: string
  tokens: string[]
}

export const absoluteRules: AbsoluteRule[] = [
  {
    id: 1,
    rule: 'Nunca use primitivos diretamente na UI',
    rationale: 'Primitivos são valores brutos (ex: color.blue.600). A UI deve usar tokens semânticos (ex: action.brand.default) para garantir que o tema dark/light funcione corretamente.',
    example: '❌ background: #00A8CC\n✅ background: var(--action-brand-default)',
  },
  {
    id: 2,
    rule: 'Nunca use color.* ou space.* em componentes finais',
    rationale: 'Use sempre os equivalentes semânticos: bg.*, surface.*, content.*, scale.spacing.* etc.',
    example: '❌ color: var(--color-neutral-500)\n✅ color: var(--content-tertiary)',
  },
  {
    id: 3,
    rule: 'Números e dados financeiros → Roboto Mono',
    rationale: 'Tabelas de preços, P&L, quantidades e qualquer dado numérico da plataforma de trading devem usar fonte monoespaçada para alinhamento visual.',
    example: 'font-family: var(--font-mono)',
  },
  {
    id: 4,
    rule: 'Títulos de página e headings → JetBrains Mono',
    rationale: 'JetBrains Mono é a fonte primária da marca. Usada para display, headings e impacto visual técnico e financeiro.',
    example: 'font-family: var(--font-primary)',
  },
  {
    id: 5,
    rule: 'Todo restante da UI → Inter',
    rationale: 'Inter é a fonte secundária: body text, labels, inputs, nav, tooltips, tudo que não é heading ou número.',
    example: 'font-family: var(--font-secondary)',
  },
  {
    id: 6,
    rule: 'Espaçamentos → sempre scale.spacing.*',
    rationale: 'Os tokens de scale respeitam as variações desktop/mobile automaticamente. Usar pixels fixos quebraria a responsividade do sistema.',
    example: 'padding: var(--spacing-lg) — nunca padding: 16px',
  },
  {
    id: 7,
    rule: 'Border radius → sempre scale.radius.*',
    rationale: 'O sistema de radius é padronizado: sm=4px (botões), md=8px (cards), lg=16px (modais/pills), full=9999px (switches/badges).',
    example: 'border-radius: var(--radius-md)',
  },
]

// Hierarquia de z-index semântico
export const layerHierarchy = `bg.primary (fundo base)
  └── bg.secondary / bg.tertiary (áreas de conteúdo)
        └── surface.primary / secondary / tertiary (cards, painéis)
              └── componentes interativos (inputs, buttons)
                    └── overlays / modais / tooltips`

// Como usar tokens de ação
export const actionTokenGuide = [
  { label: 'Botão primário (CTA)', token: 'action.brand.*', example: 'OPERAR, Salvar, Confirmar' },
  { label: 'Botão secundário', token: 'action.secondary.*', example: 'Cancelar, Voltar' },
  { label: 'Botão terciário / FigJam', token: 'action.tertiary.*', example: 'Ações de anotação' },
  { label: 'Botão destrutivo', token: 'action.destructive.*', example: 'Fechar posição, Excluir' },
]

// Como usar tokens de trading
export const tradingTokenGuide = [
  { label: 'Preço em alta / Compra', token: 'context.trading.up / context.trading.long.*' },
  { label: 'Preço em baixa / Venda', token: 'context.trading.down / context.trading.short.*' },
  { label: 'Stop Loss', token: 'context.trading.stop.*' },
  { label: 'Candle verde', token: 'context.chart.candles.up' },
  { label: 'Candle vermelho', token: 'context.chart.candles.down' },
]

// Mapa contexto → tokens relevantes (para o Gerador de Prompts)
export const contextTokenMap: Record<string, ContextTokenGroup[]> = {
  'trading-ui': [
    { label: 'Backgrounds', tokens: ['bg.primary → #0E0E0E', 'bg.secondary → #141519'] },
    { label: 'Surfaces', tokens: ['surface.primary → #4A4A4A', 'surface.secondary → #222222'] },
    { label: 'Bordas', tokens: ['border.default → #4A4A4A', 'border.subtle → #222222'] },
    { label: 'Trading — Long', tokens: ['context.trading.long.text → #4FE290', 'context.trading.long.default → rgba(79,226,144,0.08)'] },
    { label: 'Trading — Short', tokens: ['context.trading.short.text → #F34F45', 'context.trading.short.default → rgba(243,79,69,0.08)'] },
    { label: 'Trading — Stop', tokens: ['context.trading.stop.default → rgba(255,100,0,0.16)'] },
    { label: 'Candlesticks', tokens: ['context.chart.candles.up → #31DD7E', 'context.chart.candles.down → #F34F45'] },
  ],
  'marketing': [
    { label: 'Backgrounds', tokens: ['bg.primary → #0E0E0E', 'bg.secondary → #141519'] },
    { label: 'Tipografia site', tokens: ['site.heading.h1 → JetBrains Mono 80px 500', 'site.heading.h2 → JetBrains Mono 56px 500', 'site.body.lg → Inter 18px 400'] },
    { label: 'Gradientes', tokens: ['gradient.text.brand → linear-gradient(90deg, #00A8CC 0%, #FFFFFF 100%)', 'gradient.bg.hero → linear-gradient(180deg, #002933 0%, #0E0E0E 40%)'] },
    { label: 'Ações site', tokens: ['action.brand.default → #00A8CC', 'action.brand-inverse.default → #005266'] },
  ],
  'configuracao': [
    { label: 'Backgrounds', tokens: ['bg.primary → #0E0E0E', 'bg.secondary → #141519'] },
    { label: 'Formulários', tokens: ['surface.secondary → #222222', 'border.default → #4A4A4A', 'border.focus → #00D4FF'] },
    { label: 'Texto', tokens: ['content.primary → #FFFFFF', 'content.secondary → #E8E8E8', 'content.tertiary → #A4A4A4'] },
  ],
  'formulario': [
    { label: 'Inputs', tokens: ['bg.tertiary → #1A1A1A', 'border.default → #4A4A4A', 'border.focus → #00D4FF'] },
    { label: 'Estados', tokens: ['content.error → #F34F45', 'content.success → #4FE290', 'content.warning → #FFCC40'] },
    { label: 'Texto', tokens: ['content.primary → #FFFFFF', 'content.tertiary → #A4A4A4 (placeholder)'] },
  ],
  'dashboard': [
    { label: 'Containers', tokens: ['bg.secondary → #141519', 'surface.secondary → #222222'] },
    { label: 'Dados', tokens: ['content.primary → #FFFFFF', 'content.brand → #00A8CC'] },
    { label: 'Positivo/Negativo', tokens: ['context.trading.up → #4FE290', 'context.trading.down → #F34F45'] },
  ],
  'app-desktop': [
    { label: 'Shell', tokens: ['bg.tertiary → #1A1A1A', 'bg.primary → #0E0E0E (header/footer)'] },
    { label: 'Cards', tokens: ['surface.secondary → #222222', 'border.subtle → #222222'] },
    { label: 'Status badges', tokens: ['surface.success → rgba(79,226,144,0.08)', 'content.success → #4FE290', 'surface.brand → #00D4FF29', 'content.brand → #00A8CC'] },
  ],
}

// Template de CLAUDE.md gerado pela skill /trdr-ds
export const claudeMdTemplate = `# [Nome do Projeto] — Context for Claude Code

## Design System
Este projeto usa o TRDR Design System.
Referência completa: https://trdr.mrocontent.com.br

## Regras Absolutas (nunca quebre estas)
1. NUNCA use tokens primitivos diretamente (--color-*, --space-*) — use sempre tokens semânticos
2. Backgrounds: --bg-primary (#0E0E0E), --bg-secondary (#141519), --bg-tertiary (#1A1A1A)
3. Texto: --content-primary (branco), --content-secondary (#E8E8E8), --content-tertiary (#A4A4A4)
4. CTA principal: --action-brand-inverse-default (#005266) para botões preenchidos
5. Fontes: --font-primary = JetBrains Mono (headings) | --font-secondary = Inter (body) | --font-mono = Roboto Mono (números)
6. Espaçamento: sempre var(--spacing-xs/sm/md/lg/xl/2xl/3xl) — nunca px hardcoded
7. Border radius: sempre var(--radius-sm/md/lg/full) — nunca px hardcoded

## Arquivos de tokens
- Tokens: src/styles/tokens.css (300+ CSS custom properties — dark + light mode)
- Componentes: src/styles/components.css (classes utilitárias .trdr-*)

## Referência rápida — tokens mais usados
| Token | CSS Variable | Valor (dark) |
|-------|-------------|-------|
| Background | --bg-primary | #0E0E0E |
| Surface | --surface-secondary | #222222 |
| Texto principal | --content-primary | #FFFFFF |
| Texto secundário | --content-tertiary | #A4A4A4 |
| Brand (texto/ícone) | --content-brand | #00A8CC |
| Botão primário (bg) | --action-brand-inverse-default | #005266 |
| Borda | --border-default | #4A4A4A |
| Foco | --border-focus | #00D4FF |
| Sucesso | --content-success | #4FE290 |
| Erro | --content-error | #F34F45 |
| Aviso | --content-warning | #FFCC40 |

## Classes de componentes disponíveis
.trdr-btn, .trdr-btn-primary, .trdr-btn-secondary, .trdr-btn-ghost, .trdr-btn-destructive
.trdr-btn-long (compra), .trdr-btn-short (venda)
.trdr-badge, .trdr-badge-brand, .trdr-badge-success, .trdr-badge-neutral
.trdr-card, .trdr-card-hover
.trdr-input, .trdr-table
.trdr-segment-control, .trdr-segment-active, .trdr-segment-inactive

## Código de componentes
Para qualquer componente: https://trdr.mrocontent.com.br/componentes/[slug]
Disponíveis: button, text-input, switch, dropdown, checkbox, radio-button, combo-input, tooltip, boleta, segmented-control, abas, sub-menu-item, janela, floating-menu, tabela-cotacoes, tabela-ordens
(Verifique o Hub — novos componentes são adicionados regularmente)

## Hierarquia de camadas
bg.primary (base) → bg.secondary/tertiary (áreas de conteúdo) → surface.* (cards, painéis)
→ componentes interativos → overlays/modais/tooltips
`
