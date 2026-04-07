/* ==========================================================================
   TRDR Design System — Tokens TypeScript
   Fonte: design.md v1.4 | 292 tokens
   ========================================================================== */

export type TokenCategory =
  | 'primitivo-cor'
  | 'primitivo-spacing'
  | 'primitivo-radius'
  | 'primitivo-tipografia'
  | 'semantico-bg'
  | 'semantico-surface'
  | 'semantico-content'
  | 'semantico-border'
  | 'semantico-action'
  | 'semantico-trading'
  | 'scale-spacing'
  | 'scale-radius'

export const TOKEN_CATEGORY_LABELS: Record<TokenCategory, string> = {
  'primitivo-cor': 'Cores Primitivas',
  'primitivo-spacing': 'Espaçamentos Primitivos',
  'primitivo-radius': 'Border Radius Primitivo',
  'primitivo-tipografia': 'Tipografia Primitiva',
  'semantico-bg': 'Backgrounds',
  'semantico-surface': 'Surfaces',
  'semantico-content': 'Conteúdo (Texto)',
  'semantico-border': 'Bordas',
  'semantico-action': 'Ações',
  'semantico-trading': 'Contexto de Trading',
  'scale-spacing': 'Scale Spacing',
  'scale-radius': 'Scale Border Radius',
}

export interface DesignToken {
  name: string
  cssVar: string
  darkValue: string
  lightValue?: string
  description: string
  category: TokenCategory
  isColor?: boolean
}

export const tokens: DesignToken[] = [
  // =========================================================================
  // PRIMITIVOS — CORES AZUL
  // =========================================================================
  { name: 'color.blue.50', cssVar: '--color-blue-50', darkValue: '#F0F7FF', description: 'Azul mais claro', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.100', cssVar: '--color-blue-100', darkValue: '#E0EEFF', description: 'Azul 100', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.200', cssVar: '--color-blue-200', darkValue: '#C1DDFF', description: 'Azul 200', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.300', cssVar: '--color-blue-300', darkValue: '#A2CDFF', description: 'Azul 300', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.400', cssVar: '--color-blue-400', darkValue: '#84BFFF', description: 'Azul 400', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.500', cssVar: '--color-blue-500', darkValue: '#65B0FF', description: 'Azul 500 — border.focus', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.600', cssVar: '--color-blue-600', darkValue: '#3D99FF', description: 'Azul 600 — ação primária (brand)', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.700', cssVar: '--color-blue-700', darkValue: '#1E82FF', description: 'Azul 700 — hover do brand', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.800', cssVar: '--color-blue-800', darkValue: '#0066FF', description: 'Azul 800 — active do brand', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.900', cssVar: '--color-blue-900', darkValue: '#0052CC', description: 'Azul 900 — mais escuro', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.alpha.08', cssVar: '--color-blue-alpha-08', darkValue: '#0052CC14', description: 'Azul com alpha 8%', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.alpha.16', cssVar: '--color-blue-alpha-16', darkValue: '#0052CC29', description: 'Azul com alpha 16%', category: 'primitivo-cor', isColor: true },
  { name: 'color.blue.alpha.32', cssVar: '--color-blue-alpha-32', darkValue: '#0052CC52', description: 'Azul com alpha 32%', category: 'primitivo-cor', isColor: true },

  // NEUTRO
  { name: 'color.neutral.0', cssVar: '--color-neutral-0', darkValue: '#FFFFFF', description: 'Branco puro', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.50', cssVar: '--color-neutral-50', darkValue: '#FAFAFA', description: 'Quase branco', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.100', cssVar: '--color-neutral-100', darkValue: '#EEEEEE', description: 'Neutro 100', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.200', cssVar: '--color-neutral-200', darkValue: '#E8E8E8', description: 'Neutro 200', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.300', cssVar: '--color-neutral-300', darkValue: '#D2D2D2', description: 'Neutro 300', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.400', cssVar: '--color-neutral-400', darkValue: '#BCBCBC', description: 'Neutro 400', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.500', cssVar: '--color-neutral-500', darkValue: '#A4A4A4', description: 'Neutro 500 — content.tertiary (dark)', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.600', cssVar: '--color-neutral-600', darkValue: '#777777', description: 'Neutro 600', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.700', cssVar: '--color-neutral-700', darkValue: '#4A4A4A', description: 'Neutro 700 — surface.primary / border.default', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.800', cssVar: '--color-neutral-800', darkValue: '#222222', description: 'Neutro 800 — surface.secondary / border.subtle', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.900', cssVar: '--color-neutral-900', darkValue: '#1A1A1A', description: 'Neutro 900 — bg.tertiary', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.1000', cssVar: '--color-neutral-1000', darkValue: '#141519', description: 'Neutro 1000 — bg.secondary', category: 'primitivo-cor', isColor: true },
  { name: 'color.neutral.1200', cssVar: '--color-neutral-1200', darkValue: '#0E0E0E', description: 'Neutro 1200 — bg.primary', category: 'primitivo-cor', isColor: true },

  // VERDE
  { name: 'color.green.600', cssVar: '--color-green-600', darkValue: '#31DD7E', description: 'Verde primário — bg.success', category: 'primitivo-cor', isColor: true },
  { name: 'color.green.alpha.08', cssVar: '--color-green-alpha-08', darkValue: '#4FE29014', description: 'Verde alpha 8% — surface.success', category: 'primitivo-cor', isColor: true },
  { name: 'color.green.alpha.16', cssVar: '--color-green-alpha-16', darkValue: '#4FE29029', description: 'Verde alpha 16%', category: 'primitivo-cor', isColor: true },
  { name: 'color.green.alpha.32', cssVar: '--color-green-alpha-32', darkValue: '#4FE29052', description: 'Verde alpha 32%', category: 'primitivo-cor', isColor: true },
  { name: 'color.green.alpha.40', cssVar: '--color-green-alpha-40', darkValue: '#4FE29066', description: 'Verde alpha 40%', category: 'primitivo-cor', isColor: true },
  { name: 'color.green.alpha.56', cssVar: '--color-green-alpha-56', darkValue: '#4FE2908F', description: 'Verde alpha 56%', category: 'primitivo-cor', isColor: true },

  // VERMELHO
  { name: 'color.red.600', cssVar: '--color-red-600', darkValue: '#F34F45', description: 'Vermelho primário — bg.danger / short', category: 'primitivo-cor', isColor: true },
  { name: 'color.red.alpha.08', cssVar: '--color-red-alpha-08', darkValue: '#F34F4514', description: 'Vermelho alpha 8% — surface.error', category: 'primitivo-cor', isColor: true },
  { name: 'color.red.alpha.16', cssVar: '--color-red-alpha-16', darkValue: '#F34F4529', description: 'Vermelho alpha 16%', category: 'primitivo-cor', isColor: true },
  { name: 'color.red.alpha.32', cssVar: '--color-red-alpha-32', darkValue: '#F34F4552', description: 'Vermelho alpha 32%', category: 'primitivo-cor', isColor: true },
  { name: 'color.red.alpha.40', cssVar: '--color-red-alpha-40', darkValue: '#F34F4566', description: 'Vermelho alpha 40%', category: 'primitivo-cor', isColor: true },
  { name: 'color.red.alpha.56', cssVar: '--color-red-alpha-56', darkValue: '#F34F458F', description: 'Vermelho alpha 56%', category: 'primitivo-cor', isColor: true },

  // AMARELO
  { name: 'color.yellow.500', cssVar: '--color-yellow-500', darkValue: '#FFCC40', description: 'Amarelo primário — bg.warning', category: 'primitivo-cor', isColor: true },
  { name: 'color.yellow.alpha.08', cssVar: '--color-yellow-alpha-08', darkValue: '#FFCC4014', description: 'Amarelo alpha 8% — surface.warning', category: 'primitivo-cor', isColor: true },
  { name: 'color.yellow.alpha.16', cssVar: '--color-yellow-alpha-16', darkValue: '#FFCC4029', description: 'Amarelo alpha 16%', category: 'primitivo-cor', isColor: true },
  { name: 'color.yellow.alpha.32', cssVar: '--color-yellow-alpha-32', darkValue: '#FFCC4052', description: 'Amarelo alpha 32%', category: 'primitivo-cor', isColor: true },

  // LARANJA
  { name: 'color.orange.600', cssVar: '--color-orange-600', darkValue: '#F57C00', description: 'Laranja primário — action.destructive / stop loss', category: 'primitivo-cor', isColor: true },
  { name: 'color.orange.alpha.08', cssVar: '--color-orange-alpha-08', darkValue: '#FF640014', description: 'Laranja alpha 8%', category: 'primitivo-cor', isColor: true },
  { name: 'color.orange.alpha.16', cssVar: '--color-orange-alpha-16', darkValue: '#FF640029', description: 'Laranja alpha 16%', category: 'primitivo-cor', isColor: true },
  { name: 'color.orange.alpha.32', cssVar: '--color-orange-alpha-32', darkValue: '#FF640052', description: 'Laranja alpha 32%', category: 'primitivo-cor', isColor: true },

  // ROXO
  { name: 'color.purple.500', cssVar: '--color-purple-500', darkValue: '#7C4DFF', description: 'Roxo primário — action.tertiary', category: 'primitivo-cor', isColor: true },
  { name: 'color.purple.alpha.08', cssVar: '--color-purple-alpha-08', darkValue: '#7C4DFF14', description: 'Roxo alpha 8%', category: 'primitivo-cor', isColor: true },
  { name: 'color.purple.alpha.16', cssVar: '--color-purple-alpha-16', darkValue: '#7C4DFF29', description: 'Roxo alpha 16%', category: 'primitivo-cor', isColor: true },
  { name: 'color.purple.alpha.32', cssVar: '--color-purple-alpha-32', darkValue: '#7C4DFF52', description: 'Roxo alpha 32%', category: 'primitivo-cor', isColor: true },

  // =========================================================================
  // PRIMITIVOS — ESPAÇAMENTOS
  // =========================================================================
  { name: 'space.0', cssVar: '--space-0', darkValue: '0px', description: 'Zero', category: 'primitivo-spacing' },
  { name: 'space.50', cssVar: '--space-50', darkValue: '4px', description: 'Extra extra small', category: 'primitivo-spacing' },
  { name: 'space.100', cssVar: '--space-100', darkValue: '8px', description: 'Extra small', category: 'primitivo-spacing' },
  { name: 'space.200', cssVar: '--space-200', darkValue: '12px', description: 'Small', category: 'primitivo-spacing' },
  { name: 'space.300', cssVar: '--space-300', darkValue: '16px', description: 'Medium', category: 'primitivo-spacing' },
  { name: 'space.400', cssVar: '--space-400', darkValue: '20px', description: 'Large', category: 'primitivo-spacing' },
  { name: 'space.500', cssVar: '--space-500', darkValue: '24px', description: 'Extra large', category: 'primitivo-spacing' },
  { name: 'space.600', cssVar: '--space-600', darkValue: '32px', description: '2XL', category: 'primitivo-spacing' },
  { name: 'space.700', cssVar: '--space-700', darkValue: '40px', description: '3XL', category: 'primitivo-spacing' },
  { name: 'space.800', cssVar: '--space-800', darkValue: '48px', description: '4XL', category: 'primitivo-spacing' },
  { name: 'space.900', cssVar: '--space-900', darkValue: '56px', description: '5XL', category: 'primitivo-spacing' },
  { name: 'space.1000', cssVar: '--space-1000', darkValue: '64px', description: '6XL', category: 'primitivo-spacing' },
  { name: 'space.1200', cssVar: '--space-1200', darkValue: '80px', description: '7XL', category: 'primitivo-spacing' },
  { name: 'space.1400', cssVar: '--space-1400', darkValue: '96px', description: '8XL', category: 'primitivo-spacing' },

  // =========================================================================
  // PRIMITIVOS — BORDER RADIUS
  // =========================================================================
  { name: 'radius.0', cssVar: '--radius-prim-0', darkValue: '0px', description: 'Sem radius', category: 'primitivo-radius' },
  { name: 'radius.50', cssVar: '--radius-prim-50', darkValue: '2px', description: 'Extra small', category: 'primitivo-radius' },
  { name: 'radius.100', cssVar: '--radius-prim-100', darkValue: '4px', description: 'Small', category: 'primitivo-radius' },
  { name: 'radius.200', cssVar: '--radius-prim-200', darkValue: '8px', description: 'Medium', category: 'primitivo-radius' },
  { name: 'radius.300', cssVar: '--radius-prim-300', darkValue: '12px', description: 'Large', category: 'primitivo-radius' },
  { name: 'radius.400', cssVar: '--radius-prim-400', darkValue: '16px', description: 'Extra large', category: 'primitivo-radius' },
  { name: 'radius.500', cssVar: '--radius-prim-500', darkValue: '20px', description: '2XL', category: 'primitivo-radius' },
  { name: 'radius.600', cssVar: '--radius-prim-600', darkValue: '24px', description: '3XL', category: 'primitivo-radius' },
  { name: 'radius.700', cssVar: '--radius-prim-700', darkValue: '32px', description: '4XL', category: 'primitivo-radius' },
  { name: 'radius.full', cssVar: '--radius-prim-full', darkValue: '9999px', description: 'Circular / pill', category: 'primitivo-radius' },

  // =========================================================================
  // PRIMITIVOS — TIPOGRAFIA
  // =========================================================================
  { name: 'font.size.50', cssVar: '--font-size-50', darkValue: '12px', description: 'Text XS', category: 'primitivo-tipografia' },
  { name: 'font.size.100', cssVar: '--font-size-100', darkValue: '14px', description: 'Text SM — padrão da UI', category: 'primitivo-tipografia' },
  { name: 'font.size.200', cssVar: '--font-size-200', darkValue: '16px', description: 'Text MD', category: 'primitivo-tipografia' },
  { name: 'font.size.300', cssVar: '--font-size-300', darkValue: '18px', description: 'Text LG', category: 'primitivo-tipografia' },
  { name: 'font.size.400', cssVar: '--font-size-400', darkValue: '20px', description: 'Text XL', category: 'primitivo-tipografia' },
  { name: 'font.size.500', cssVar: '--font-size-500', darkValue: '24px', description: 'Text 2XL', category: 'primitivo-tipografia' },
  { name: 'font.size.600', cssVar: '--font-size-600', darkValue: '28px', description: 'Text 3XL', category: 'primitivo-tipografia' },
  { name: 'font.size.700', cssVar: '--font-size-700', darkValue: '32px', description: 'Heading LG', category: 'primitivo-tipografia' },
  { name: 'font.size.800', cssVar: '--font-size-800', darkValue: '40px', description: 'Display', category: 'primitivo-tipografia' },

  // =========================================================================
  // SEMÂNTICOS — BACKGROUNDS
  // =========================================================================
  { name: 'bg.primary', cssVar: '--bg-primary', darkValue: '#0E0E0E', lightValue: '#EEEEEE', description: 'Fundo base principal da aplicação', category: 'semantico-bg', isColor: true },
  { name: 'bg.secondary', cssVar: '--bg-secondary', darkValue: '#141519', lightValue: '#F5F5F5', description: 'Fundo elevado — janelas e painéis', category: 'semantico-bg', isColor: true },
  { name: 'bg.tertiary', cssVar: '--bg-tertiary', darkValue: '#1A1A1A', lightValue: '#FAFAFA', description: 'Fundo base do app desktop launcher', category: 'semantico-bg', isColor: true },
  { name: 'bg.inverse', cssVar: '--bg-inverse', darkValue: '#FFFFFF', lightValue: '#1A1A1A', description: 'Fundo invertido (tema oposto)', category: 'semantico-bg', isColor: true },
  { name: 'bg.overlay', cssVar: '--bg-overlay', darkValue: 'rgba(255,255,255,0.16)', description: 'Overlay translúcido', category: 'semantico-bg', isColor: true },
  { name: 'bg.brand', cssVar: '--bg-brand', darkValue: '#3D99FF', description: 'Fundo da marca (azul)', category: 'semantico-bg', isColor: true },
  { name: 'bg.warning', cssVar: '--bg-warning', darkValue: '#FFCC40', description: 'Fundo de alerta', category: 'semantico-bg', isColor: true },
  { name: 'bg.danger', cssVar: '--bg-danger', darkValue: '#F34F45', description: 'Fundo de erro/perigo', category: 'semantico-bg', isColor: true },
  { name: 'bg.success', cssVar: '--bg-success', darkValue: '#31DD7E', description: 'Fundo de sucesso', category: 'semantico-bg', isColor: true },
  { name: 'bg.base-alpha-0', cssVar: '--bg-base-alpha-0', darkValue: 'rgba(14,14,14,0)', description: 'Versão transparente do bg.primary — gradientes', category: 'semantico-bg', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — SURFACES
  // =========================================================================
  { name: 'surface.primary', cssVar: '--surface-primary', darkValue: '#4A4A4A', lightValue: '#D2D2D2', description: 'Superfície primária — buttons secondary, cards', category: 'semantico-surface', isColor: true },
  { name: 'surface.secondary', cssVar: '--surface-secondary', darkValue: '#222222', lightValue: '#E8E8E8', description: 'Superfície secundária — containers, tab lists', category: 'semantico-surface', isColor: true },
  { name: 'surface.tertiary', cssVar: '--surface-tertiary', darkValue: '#1A1A1A', lightValue: '#EEEEEE', description: 'Superfície terciária', category: 'semantico-surface', isColor: true },
  { name: 'surface.interactive', cssVar: '--surface-interactive', darkValue: '#0052CC', lightValue: '#84BFFF', description: 'Superfície interativa / hero bg', category: 'semantico-surface', isColor: true },
  { name: 'surface.disabled', cssVar: '--surface-disabled', darkValue: '#1A1A1A', lightValue: '#FAFAFA', description: 'Superfície de elemento desabilitado', category: 'semantico-surface', isColor: true },
  { name: 'surface.info', cssVar: '--surface-info', darkValue: 'rgba(61,153,255,0.08)', description: 'Superfície informativa (azul translúcido)', category: 'semantico-surface', isColor: true },
  { name: 'surface.error', cssVar: '--surface-error', darkValue: 'rgba(243,79,69,0.08)', description: 'Superfície de erro', category: 'semantico-surface', isColor: true },
  { name: 'surface.warning', cssVar: '--surface-warning', darkValue: 'rgba(255,204,64,0.08)', description: 'Superfície de alerta', category: 'semantico-surface', isColor: true },
  { name: 'surface.success', cssVar: '--surface-success', darkValue: 'rgba(79,226,144,0.08)', description: 'Superfície de sucesso — badge "Instalado"', category: 'semantico-surface', isColor: true },
  { name: 'surface.brand', cssVar: '--surface-brand', darkValue: 'rgba(0,82,204,0.16)', description: 'Superfície da marca — badge "Disponível"', category: 'semantico-surface', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — CONTEÚDO
  // =========================================================================
  { name: 'content.primary', cssVar: '--content-primary', darkValue: '#FFFFFF', lightValue: '#1A1A1A', description: 'Texto principal — máxima legibilidade', category: 'semantico-content', isColor: true },
  { name: 'content.secondary', cssVar: '--content-secondary', darkValue: '#E8E8E8', lightValue: '#222222', description: 'Texto secundário', category: 'semantico-content', isColor: true },
  { name: 'content.tertiary', cssVar: '--content-tertiary', darkValue: '#A4A4A4', lightValue: '#4A4A4A', description: 'Texto terciário — labels, hints, placeholders', category: 'semantico-content', isColor: true },
  { name: 'content.disabled', cssVar: '--content-disabled', darkValue: '#4A4A4A', lightValue: '#777777', description: 'Texto de elemento desabilitado', category: 'semantico-content', isColor: true },
  { name: 'content.inverse', cssVar: '--content-inverse', darkValue: '#1A1A1A', lightValue: '#FFFFFF', description: 'Texto sobre fundos coloridos (ex: botão azul)', category: 'semantico-content', isColor: true },
  { name: 'content.info', cssVar: '--content-info', darkValue: '#65B0FF', description: 'Texto informativo', category: 'semantico-content', isColor: true },
  { name: 'content.warning', cssVar: '--content-warning', darkValue: '#FFCC40', description: 'Texto de alerta', category: 'semantico-content', isColor: true },
  { name: 'content.error', cssVar: '--content-error', darkValue: '#F34F45', description: 'Texto de erro', category: 'semantico-content', isColor: true },
  { name: 'content.success', cssVar: '--content-success', darkValue: '#4FE290', description: 'Texto de sucesso — badge "Instalado"', category: 'semantico-content', isColor: true },
  { name: 'content.brand', cssVar: '--content-brand', darkValue: '#3D99FF', lightValue: '#0066FF', description: 'Texto da marca — links, badge "Disponível"', category: 'semantico-content', isColor: true },
  { name: 'content.on-brand', cssVar: '--content-on-brand', darkValue: '#FFFFFF', description: 'Texto sobre bg.brand', category: 'semantico-content', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — BORDAS
  // =========================================================================
  { name: 'border.default', cssVar: '--border-default', darkValue: '#4A4A4A', lightValue: '#A4A4A4', description: 'Borda padrão de componentes', category: 'semantico-border', isColor: true },
  { name: 'border.subtle', cssVar: '--border-subtle', darkValue: '#222222', lightValue: '#E8E8E8', description: 'Borda sutil — separadores, divisores', category: 'semantico-border', isColor: true },
  { name: 'border.strong', cssVar: '--border-strong', darkValue: '#A4A4A4', lightValue: '#D2D2D2', description: 'Borda forte — ênfase', category: 'semantico-border', isColor: true },
  { name: 'border.focus', cssVar: '--border-focus', darkValue: '#65B0FF', description: 'Borda de foco — acessibilidade', category: 'semantico-border', isColor: true },
  { name: 'border.disabled', cssVar: '--border-disabled', darkValue: '#777777', lightValue: '#E8E8E8', description: 'Borda de elemento desabilitado', category: 'semantico-border', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — AÇÕES
  // =========================================================================
  { name: 'action.brand.default', cssVar: '--action-brand-default', darkValue: '#3D99FF', lightValue: '#0066FF', description: 'Botão primário — CTA principal', category: 'semantico-action', isColor: true },
  { name: 'action.brand.hover', cssVar: '--action-brand-hover', darkValue: '#1E82FF', description: 'Hover do botão primário', category: 'semantico-action', isColor: true },
  { name: 'action.brand.active', cssVar: '--action-brand-active', darkValue: '#0066FF', description: 'Estado pressionado do botão primário', category: 'semantico-action', isColor: true },
  { name: 'action.brand.disabled', cssVar: '--action-brand-disabled', darkValue: 'rgba(0,82,204,0.16)', description: 'Botão primário desabilitado', category: 'semantico-action', isColor: true },
  { name: 'action.brand-inverse.default', cssVar: '--action-brand-inverse-default', darkValue: '#FFFFFF', description: 'Botão sobre fundo azul', category: 'semantico-action', isColor: true },
  { name: 'action.secondary.default', cssVar: '--action-secondary-default', darkValue: '#4A4A4A', lightValue: '#D2D2D2', description: 'Botão secundário — ação neutra', category: 'semantico-action', isColor: true },
  { name: 'action.secondary.hover', cssVar: '--action-secondary-hover', darkValue: '#777777', description: 'Hover do botão secundário', category: 'semantico-action', isColor: true },
  { name: 'action.secondary.active', cssVar: '--action-secondary-active', darkValue: '#A4A4A4', description: 'Estado pressionado do botão secundário', category: 'semantico-action', isColor: true },
  { name: 'action.tertiary.default', cssVar: '--action-tertiary-default', darkValue: '#7C4DFF', description: 'Botão roxo — ação terciária / FigJam', category: 'semantico-action', isColor: true },
  { name: 'action.tertiary.hover', cssVar: '--action-tertiary-hover', darkValue: '#6200EA', description: 'Hover do botão terciário', category: 'semantico-action', isColor: true },
  { name: 'action.destructive.default', cssVar: '--action-destructive-default', darkValue: '#F57C00', description: 'Botão destrutivo — laranja (aviso forte)', category: 'semantico-action', isColor: true },
  { name: 'action.destructive.hover', cssVar: '--action-destructive-hover', darkValue: '#FF6400', description: 'Hover do botão destrutivo', category: 'semantico-action', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — CONTEXTO TRADING
  // =========================================================================
  { name: 'context.chart.candles.up', cssVar: '--context-chart-up', darkValue: '#31DD7E', description: 'Candle de alta — verde', category: 'semantico-trading', isColor: true },
  { name: 'context.chart.candles.down', cssVar: '--context-chart-down', darkValue: '#F34F45', description: 'Candle de baixa — vermelho', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.up', cssVar: '--context-trading-up', darkValue: '#4FE290', description: 'Preço em alta', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.down', cssVar: '--context-trading-down', darkValue: '#F34F45', description: 'Preço em baixa', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.long.text', cssVar: '--context-trading-long-text', darkValue: '#4FE290', description: 'Texto de posição long (compra)', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.long.default', cssVar: '--context-trading-long-default', darkValue: 'rgba(79,226,144,0.08)', description: 'Superfície de posição long', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.long.hover', cssVar: '--context-trading-long-hover', darkValue: 'rgba(79,226,144,0.12)', description: 'Hover de posição long', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.long.active', cssVar: '--context-trading-long-active', darkValue: 'rgba(79,226,144,0.16)', description: 'Active de posição long', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.short.text', cssVar: '--context-trading-short-text', darkValue: '#F34F45', description: 'Texto de posição short (venda)', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.short.default', cssVar: '--context-trading-short-default', darkValue: 'rgba(243,79,69,0.08)', description: 'Superfície de posição short', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.short.hover', cssVar: '--context-trading-short-hover', darkValue: 'rgba(243,79,69,0.12)', description: 'Hover de posição short', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.short.active', cssVar: '--context-trading-short-active', darkValue: 'rgba(243,79,69,0.16)', description: 'Active de posição short', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.stop.default', cssVar: '--context-trading-stop-default', darkValue: 'rgba(255,100,0,0.16)', description: 'Superfície de stop loss', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.stop.hover', cssVar: '--context-trading-stop-hover', darkValue: 'rgba(255,100,0,0.24)', description: 'Hover de stop loss', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.stop.active', cssVar: '--context-trading-stop-active', darkValue: 'rgba(255,100,0,0.32)', description: 'Active de stop loss', category: 'semantico-trading', isColor: true },
  { name: 'context.trading.stop.alpha', cssVar: '--context-trading-stop-alpha', darkValue: 'rgba(255,100,0,0.08)', description: 'Alpha sutil de stop loss', category: 'semantico-trading', isColor: true },

  // =========================================================================
  // SCALE — SPACING (Desktop)
  // =========================================================================
  { name: 'scale.spacing.xs', cssVar: '--spacing-xs', darkValue: '4px', description: 'Extra small — ícones, gaps mínimos', category: 'scale-spacing' },
  { name: 'scale.spacing.sm', cssVar: '--spacing-sm', darkValue: '8px', description: 'Small — padding interno compacto', category: 'scale-spacing' },
  { name: 'scale.spacing.md', cssVar: '--spacing-md', darkValue: '12px', description: 'Medium — gap padrão entre elementos', category: 'scale-spacing' },
  { name: 'scale.spacing.lg', cssVar: '--spacing-lg', darkValue: '16px', description: 'Large — padding padrão de containers', category: 'scale-spacing' },
  { name: 'scale.spacing.xl', cssVar: '--spacing-xl', darkValue: '20px', description: 'Extra large', category: 'scale-spacing' },
  { name: 'scale.spacing.2xl', cssVar: '--spacing-2xl', darkValue: '24px', description: '2XL — padding de painéis e cards', category: 'scale-spacing' },
  { name: 'scale.spacing.3xl', cssVar: '--spacing-3xl', darkValue: '32px', description: '3XL — gap entre seções', category: 'scale-spacing' },
  { name: 'scale.spacing.3xl-2', cssVar: '--spacing-3xl-2', darkValue: '40px', description: '40px', category: 'scale-spacing' },
  { name: 'scale.spacing.3xl-3', cssVar: '--spacing-3xl-3', darkValue: '48px', description: '48px', category: 'scale-spacing' },
  { name: 'scale.spacing.3xl-4', cssVar: '--spacing-3xl-4', darkValue: '56px', description: '56px — altura do header', category: 'scale-spacing' },
  { name: 'scale.spacing.3xl-7', cssVar: '--spacing-3xl-7', darkValue: '96px', description: '96px — padding vertical site', category: 'scale-spacing' },

  // =========================================================================
  // SCALE — BORDER RADIUS
  // =========================================================================
  { name: 'scale.radius.none', cssVar: '--radius-none', darkValue: '0px', description: 'Sem radius', category: 'scale-radius' },
  { name: 'scale.radius.xs', cssVar: '--radius-xs', darkValue: '2px', description: 'Extra small', category: 'scale-radius' },
  { name: 'scale.radius.sm', cssVar: '--radius-sm', darkValue: '4px', description: 'Small — botões, badges, ícones', category: 'scale-radius' },
  { name: 'scale.radius.md', cssVar: '--radius-md', darkValue: '8px', description: 'Medium — cards, dropdowns, platform cards', category: 'scale-radius' },
  { name: 'scale.radius.lg', cssVar: '--radius-lg', darkValue: '16px', description: 'Large — pill tabs, activity cards, modais', category: 'scale-radius' },
  { name: 'scale.radius.xl', cssVar: '--radius-xl', darkValue: '20px', description: 'Extra large', category: 'scale-radius' },
  { name: 'scale.radius.full', cssVar: '--radius-full', darkValue: '9999px', description: 'Circular — switches, avatares, badges pill', category: 'scale-radius' },
]

export function filterTokens(tokens: DesignToken[], search: string, category?: TokenCategory): DesignToken[] {
  let filtered = tokens
  if (category) {
    filtered = filtered.filter(t => t.category === category)
  }
  if (search) {
    const q = search.toLowerCase()
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.darkValue.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.cssVar.toLowerCase().includes(q)
    )
  }
  return filtered
}
