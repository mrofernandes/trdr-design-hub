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
  { name: 'bg/primary', cssVar: '--bg-primary', darkValue: '#0E0E0E', lightValue: '#EEEEEE', description: 'Fundo base de toda interface — a camada mais escura da hierarquia. Background da área de conteúdo principal e do canvas geral da plataforma de trading. É o "chão" sobre o qual todos os outros layers existem. Nunca nada deve ser mais escuro dentro de uma tela.', category: 'semantico-bg', isColor: true },
  { name: 'bg/secondary', cssVar: '--bg-secondary', darkValue: '#141519', lightValue: '#F5F5F5', description: 'Fundo de painéis de navegação lateral (sidebar). O sutil tom frio/azulado cria separação visual da content area sem usar bordas. Exclusivo para elementos de navegação global — nunca para painéis internos de conteúdo.', category: 'semantico-bg', isColor: true },
  { name: 'bg/tertiary', cssVar: '--bg-tertiary', darkValue: '#1A1A1A', lightValue: '#FAFAFA', description: 'Fundo de sub-áreas dentro do conteúdo principal. Situa-se entre bg/secondary e surface/secondary na hierarquia de profundidade. Na plataforma de trading: interior de sub-painéis e zonas de destaque dentro de janelas.', category: 'semantico-bg', isColor: true },
  { name: 'bg/overlay', cssVar: '--bg-overlay', darkValue: '#A4A4A429', lightValue: '#A4A4A452', description: 'Fundo de overlays, modais e drawers. Cobre o conteúdo abaixo com opacidade para focar atenção no modal. Sempre combinar com opacity/overlay. Nunca usar como fundo de página ou painel fixo.', category: 'semantico-bg', isColor: true },
  { name: 'bg/inverse', cssVar: '--bg-inverse', darkValue: '#FFFFFF', lightValue: '#1A1A1A', description: 'Fundo claro (inverso) para casos onde a interface precisa de um contexto de alto contraste oposto ao tema dark. Usado em superfícies que precisam parecer "fora" do sistema dark.', category: 'semantico-bg', isColor: true },
  { name: 'bg/Base alpha 0', cssVar: '--bg-base-alpha-0', darkValue: '#0E0E0E00', lightValue: '#A4A4A400', description: 'Versão completamente transparente de bg/primary. Usada exclusivamente como ponto inicial ou final em gradientes que precisam "dissipar" sobre o fundo da página. Ex: hero gradient do hub. Nunca usar como fundo sólido.', category: 'semantico-bg', isColor: true },
  { name: 'bg/bg-brand', cssVar: '--bg-bg-brand', darkValue: '#3D99FF', lightValue: '#3D99FF', description: 'Fundo de áreas com destaque de marca primária. Usado em seções hero, banners de identidade TRDR e áreas de apresentação da marca.', category: 'semantico-bg', isColor: true },
  { name: 'bg/bg-brand2', cssVar: '--bg-bg-brand2', darkValue: '#6350B3', lightValue: '#6350B3', description: 'Variante secundária de fundo brand. Para contextos de marca menos prominentes ou que precisam de diferenciação visual em relação a bg/bg-brand.', category: 'semantico-bg', isColor: true },
  { name: 'bg/bg-success', cssVar: '--bg-bg-success', darkValue: '#31DD7E', lightValue: '#31DD7E', description: 'Fundo de áreas e banners de estado de sucesso. Versão contextual da cor de success para uso como background de seção. Usar para confirmações e banners de operação concluída.', category: 'semantico-bg', isColor: true },
  { name: 'bg/bg-warning', cssVar: '--bg-bg-warning', darkValue: '#FFCC40', lightValue: '#FFCC40', description: 'Fundo de áreas e banners de estado de aviso. Versão contextual da cor de warning para uso como background de seção inteira. Usar para banners de atenção e alertas de página.', category: 'semantico-bg', isColor: true },
  { name: 'bg/bg-danger', cssVar: '--bg-bg-danger', darkValue: '#F34F45', lightValue: '#F34F45', description: 'Fundo de áreas e banners de estado de perigo/erro crítico. Versão contextual da cor de error para uso como background de seção. Usar para alertas críticos e banners de sistema com erro grave.', category: 'semantico-bg', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — SURFACES
  // =========================================================================
  { name: 'surface/primary', cssVar: '--surface-primary', darkValue: '#4A4A4A', lightValue: '#D2D2D2', description: 'Superfície neutra de média luminosidade. Usada para filter pills inativos, botões secundários em estado padrão e elementos de UI que precisam de um background visível mas sem cor. Indica "existe, pode interagir" sem destaque.', category: 'semantico-surface', isColor: true },
  { name: 'surface/secondary', cssVar: '--surface-secondary', darkValue: '#222222', lightValue: '#E8E8E8', description: 'Superfície padrão de cards, janelas e painéis de conteúdo — o token de superfície mais usado. No hub: fundo dos cards da home. Na plataforma: fundo das janelas e order book. Primeira camada de elevação acima de bg/primary.', category: 'semantico-surface', isColor: true },
  { name: 'surface/tertiary', cssVar: '--surface-tertiary', darkValue: '#1A1A1A', lightValue: '#EEEEEE', description: 'Superfície para sub-seções dentro de um surface/secondary. Usado em painéis aninhados dentro de janelas ou áreas que precisam de uma terceira camada de profundidade visual.', category: 'semantico-surface', isColor: true },
  { name: 'surface/interactive', cssVar: '--surface-interactive', darkValue: '#0052CC', lightValue: '#84BFFF', description: 'Superfície azul para estados ativos/selecionados em filtros, pills e seletores de segmento. Ex: filter pill ativo no hub. Reservado para filtros e toggles — NÃO usar para botão CTA primário (usar action/brand inverse/default).', category: 'semantico-surface', isColor: true },
  { name: 'surface/disabled', cssVar: '--surface-disabled', darkValue: '#1A1A1A', lightValue: '#FAFAFA', description: 'Superfície de componentes desabilitados. Indica visualmente que o elemento não está disponível para interação. Combinar com content/disabled no texto.', category: 'semantico-surface', isColor: true },
  { name: 'surface/brand', cssVar: '--surface-brand', darkValue: '#65B0FF29', lightValue: '#65B0FF29', description: 'Superfície com cor brand para badges, tags e elementos com identidade visual TRDR. Usar em rótulos de produto, badges de destaque e elementos que comunicam pertencimento à marca.', category: 'semantico-surface', isColor: true },
  { name: 'surface/info', cssVar: '--surface-info', darkValue: '#65B0FF14', lightValue: '#65B0FF14', description: 'Fundo semi-transparente azul sutil para indicar contexto informativo em células, seções ou banners. Usar em tooltips expandidos e áreas de informação não-crítica.', category: 'semantico-surface', isColor: true },
  { name: 'surface/success', cssVar: '--surface-success', darkValue: '#4FE29014', lightValue: '#4FE29014', description: 'Fundo semi-transparente levíssimo (verde ~8% alpha) para indicar contexto positivo em células ou linhas. Ex: linha de ordem executada com sucesso, posição lucrativa.', category: 'semantico-surface', isColor: true },
  { name: 'surface/warning', cssVar: '--surface-warning', darkValue: '#FFD35A14', lightValue: '#FFD35A14', description: 'Fundo semi-transparente levíssimo (amarelo ~8% alpha) para indicar contexto de aviso em células ou áreas. Usar em linhas com condição de atenção — margem baixa, valores próximos do limite.', category: 'semantico-surface', isColor: true },
  { name: 'surface/error', cssVar: '--surface-error', darkValue: '#F34F4514', lightValue: '#F34F4514', description: 'Fundo semi-transparente levíssimo (vermelho ~8% alpha) para indicar contexto de erro em células ou linhas. Ex: linha da order book com ordem rejeitada. Nunca usar como fundo de card inteiro.', category: 'semantico-surface', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — CONTEÚDO
  // =========================================================================
  { name: 'content/primary', cssVar: '--content-primary', darkValue: '#FFFFFF', lightValue: '#1A1A1A', description: 'Texto de máxima prioridade: títulos H1/H2, labels ativos de navegação, números críticos. Branco puro — máximo contraste sobre qualquer background dark. Usar quando o texto for o elemento mais importante daquele bloco.', category: 'semantico-content', isColor: true },
  { name: 'content/secondary', cssVar: '--content-secondary', darkValue: '#E8E8E8', lightValue: '#222222', description: 'Texto de prioridade intermediária: subtítulos, descrições de cards, texto de corpo corrido, labels de formulário. Ligeiramente menos brilhante que /primary — cria hierarquia tipográfica sem perda de legibilidade.', category: 'semantico-content', isColor: true },
  { name: 'content/tertiary', cssVar: '--content-tertiary', darkValue: '#A4A4A4', lightValue: '#4A4A4A', description: 'Texto de menor prioridade: labels de seção da sidebar (ex: "TOKENS", "COMPONENTES"), placeholders, metadados como fonte e horário, texto auxiliar. Nunca usar para texto que o usuário precise ler com atenção em fluxos críticos.', category: 'semantico-content', isColor: true },
  { name: 'content/placeholder', cssVar: '--content-placeholder', darkValue: '#A4A4A4', lightValue: '#777777', description: 'Cor de texto placeholder em campos de input. Indica ao usuário o tipo de dado esperado antes de qualquer digitação. Desaparece ao digitar — nunca usar para texto de conteúdo permanente.', category: 'semantico-content', isColor: true },
  { name: 'content/disabled', cssVar: '--content-disabled', darkValue: '#4A4A4A', lightValue: '#777777', description: 'Texto em estado desabilitado. Indica que o elemento não está disponível para interação. Usar APENAS em labels e textos de componentes no estado disabled — nunca em texto de conteúdo normal.', category: 'semantico-content', isColor: true },
  { name: 'content/inverse', cssVar: '--content-inverse', darkValue: '#1A1A1A', lightValue: '#FFFFFF', description: 'Texto escuro para uso sobre fundos claros, coloridos ou de alta luminosidade. Ex: label dentro de botão azul preenchido. Nunca usar sobre backgrounds escuros — o contraste seria insuficiente.', category: 'semantico-content', isColor: true },
  { name: 'content/brand', cssVar: '--content-brand', darkValue: '#3D99FF', lightValue: '#0066FF', description: 'Texto com cor da marca: links clicáveis, valores em destaque brand, labels interativos com identidade TRDR. Ex: "Link com ação" no hub, links de notícias na plataforma, valores com destaque azul.', category: 'semantico-content', isColor: true },
  { name: 'content/info', cssVar: '--content-info', darkValue: '#E0EEFF', lightValue: '#3D99FF', description: 'Texto de mensagens informativas e contexto não-crítico. Azul médio — comunica informação sem urgência. Usar em tooltips, dicas de preenchimento e mensagens de sistema informativas.', category: 'semantico-content', isColor: true },
  { name: 'content/success', cssVar: '--content-success', darkValue: '#4FE290', lightValue: '#13C870', description: 'Texto de estados de sucesso e valores financeiros positivos. Verde vibrante — para confirmações de ordem, ganhos e indicadores positivos. Ex: "+R$1.250" em tela de resultado.', category: 'semantico-content', isColor: true },
  { name: 'content/warning', cssVar: '--content-warning', darkValue: '#FFD35A', lightValue: '#FFC500', description: 'Texto de avisos e alertas de atenção. Amarelo — comunica risco iminente mas não erro crítico. Ex: "Margem insuficiente", "Stop loss muito próximo do preço de mercado".', category: 'semantico-content', isColor: true },
  { name: 'content/error', cssVar: '--content-error', darkValue: '#F34F45', lightValue: '#D91B0F', description: 'Texto de estados de erro e valores negativos. Vermelho — para mensagens de validação, erros de sistema e dados de perda. Nunca usar decorativamente.', category: 'semantico-content', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — BORDAS
  // =========================================================================
  { name: 'border/subtle', cssVar: '--border-subtle', darkValue: '#222222', lightValue: '#E8E8E8', description: 'Borda quasi-invisível para separações sutis entre seções e zonas visuais. Usar em divisores de seção, bordas de containers que não precisam se destacar e linhas de separação entre áreas de conteúdo.', category: 'semantico-border', isColor: true },
  { name: 'border/default', cssVar: '--border-default', darkValue: '#4A4A4A', lightValue: '#A4A4A4', description: 'Borda padrão de componentes interativos: inputs, dropdowns, cards com borda explícita, botões outlined. É a borda que o usuário espera ver em campos de formulário e componentes com delimitação visível.', category: 'semantico-border', isColor: true },
  { name: 'border/strong', cssVar: '--border-strong', darkValue: '#A4A4A4', lightValue: '#D2D2D2', description: 'Borda de alto contraste para elementos que precisam de forte delimitação visual. Ex: cards selecionados ativamente, elementos em destaque, separadores de alta importância.', category: 'semantico-border', isColor: true },
  { name: 'border/focus', cssVar: '--border-focus', darkValue: '#65B0FF', lightValue: '#65B0FF', description: 'Cor de borda quando um elemento interativo recebe foco via teclado. Fundamental para acessibilidade — nunca remover ou sobrescrever em componentes focáveis. Deve ser sempre visível sobre qualquer background.', category: 'semantico-border', isColor: true },
  { name: 'border/disabled', cssVar: '--border-disabled', darkValue: '#777777', lightValue: '#E8E8E8', description: 'Borda de componentes desabilitados. Indica visualmente a indisponibilidade do elemento. Combinar com surface/disabled e content/disabled.', category: 'semantico-border', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — AÇÕES: BRAND
  // =========================================================================
  { name: 'action/brand/default', cssVar: '--action-brand-default', darkValue: '#3D99FF', lightValue: '#1E82FF', description: 'Estado padrão de ações com cor brand que NÃO são botões preenchidos. Usado em ícones interativos brand, indicadores ativos de aba, badges e highlights com identidade TRDR. Azul médio — visível mas não dominante.', category: 'semantico-action', isColor: true },
  { name: 'action/brand/hover', cssVar: '--action-brand-hover', darkValue: '#1E82FF', lightValue: '#0066FF', description: 'Estado hover de ações brand. Versão ligeiramente mais intensa que /default para feedback de mouse over em ícones, indicadores e elementos brand.', category: 'semantico-action', isColor: true },
  { name: 'action/brand/active', cssVar: '--action-brand-active', darkValue: '#0066FF', lightValue: '#0052CC', description: 'Estado ativo/pressionado/selecionado de ações brand. Mais intenso que /default. Ex: underline azul sob aba ativa na página de tokens do hub.', category: 'semantico-action', isColor: true },
  { name: 'action/brand/disabled', cssVar: '--action-brand-disabled', darkValue: '#777777', lightValue: '#EEEEEE', description: 'Estado desabilitado de ações brand. Indica que o elemento interativo brand não está disponível no momento.', category: 'semantico-action', isColor: true },
  { name: 'action/brand/alpha', cssVar: '--action-brand-alpha', darkValue: '#65B0FF14', lightValue: '#65B0FF14', description: 'Versão semi-transparente da cor brand para highlights, overlays e indicadores sutis com identidade TRDR.', category: 'semantico-action', isColor: true },
  // =========================================================================
  // SEMÂNTICOS — AÇÕES: BRAND INVERSE (CTA)
  // =========================================================================
  { name: 'action/brand inverse/default', cssVar: '--action-brand-inverse-default', darkValue: '#0066FF', lightValue: '#3D99FF', description: 'Background do botão CTA primário — o call-to-action mais importante de cada tela. Azul saturado e sólido. O texto deve ser content/primary (branco). Ex: botão "Gerar prompts" no hub. Usar apenas uma vez por contexto.', category: 'semantico-action', isColor: true },
  { name: 'action/brand inverse/hover', cssVar: '--action-brand-inverse-hover', darkValue: '#1E82FF', lightValue: '#1E82FF', description: 'Estado hover do botão CTA primário. Versão ligeiramente mais clara para feedback de mouse over.', category: 'semantico-action', isColor: true },
  { name: 'action/brand inverse/active', cssVar: '--action-brand-inverse-active', darkValue: '#0052CC', lightValue: '#0066FF', description: 'Estado pressionado/clicado do botão CTA primário.', category: 'semantico-action', isColor: true },
  { name: 'action/brand inverse/disabled', cssVar: '--action-brand-inverse-disabled', darkValue: '#777777', lightValue: '#EEEEEE', description: 'Estado desabilitado do botão CTA primário.', category: 'semantico-action', isColor: true },
  { name: 'action/brand inverse/alpha', cssVar: '--action-brand-inverse-alpha', darkValue: '#65B0FF14', lightValue: '#65B0FF14', description: 'Versão semi-transparente do CTA brand inverse para overlays e highlights sutis.', category: 'semantico-action', isColor: true },
  // =========================================================================
  // SEMÂNTICOS — AÇÕES: SECONDARY
  // =========================================================================
  { name: 'action/secondary/default', cssVar: '--action-secondary-default', darkValue: '#4A4A4A', lightValue: '#E8E8E8', description: 'Estado padrão de botões e ações secundárias sem identidade de cor. Background de botões que precisam de presença visual mas sem marca. Ex: "Cancelar Ordem", "Inverter" na plataforma de trading.', category: 'semantico-action', isColor: true },
  { name: 'action/secondary/hover', cssVar: '--action-secondary-hover', darkValue: '#777777', lightValue: '#D2D2D2', description: 'Estado hover de ações secundárias. Feedback visual de mouse over em botões secundários.', category: 'semantico-action', isColor: true },
  { name: 'action/secondary/active', cssVar: '--action-secondary-active', darkValue: '#A4A4A4', lightValue: '#A4A4A4', description: 'Estado ativo/pressionado de ações secundárias.', category: 'semantico-action', isColor: true },
  { name: 'action/secondary/disabled', cssVar: '--action-secondary-disabled', darkValue: '#1A1A1A', lightValue: '#FAFAFA', description: 'Estado desabilitado de ações secundárias.', category: 'semantico-action', isColor: true },
  { name: 'action/secondary/alpha', cssVar: '--action-secondary-alpha', darkValue: '#A4A4A400', lightValue: '#A4A4A400', description: 'Versão semi-transparente de ação secundária para overlays e destaques sutis.', category: 'semantico-action', isColor: true },
  // =========================================================================
  // SEMÂNTICOS — AÇÕES: TERTIARY
  // =========================================================================
  { name: 'action/tertiary/default', cssVar: '--action-tertiary-default', darkValue: '#50418E', lightValue: '#3E3467', description: 'Estado padrão de ações terciárias — ghost buttons, links de ação inline, ações de menor importância hierárquica. Menos proeminente que secondary.', category: 'semantico-action', isColor: true },
  { name: 'action/tertiary/hover', cssVar: '--action-tertiary-hover', darkValue: '#3E3467', lightValue: '#2A2542', description: 'Estado hover de ações terciárias.', category: 'semantico-action', isColor: true },
  { name: 'action/tertiary/active', cssVar: '--action-tertiary-active', darkValue: '#2A2542', lightValue: '#161320', description: 'Estado ativo/pressionado de ações terciárias.', category: 'semantico-action', isColor: true },
  { name: 'action/tertiary/disabled', cssVar: '--action-tertiary-disabled', darkValue: '#777777', lightValue: '#EEEEEE', description: 'Estado desabilitado de ações terciárias.', category: 'semantico-action', isColor: true },
  { name: 'action/tertiary/alpha', cssVar: '--action-tertiary-alpha', darkValue: '#6350B314', lightValue: '#6350B314', description: 'Versão semi-transparente de ação terciária.', category: 'semantico-action', isColor: true },
  // =========================================================================
  // SEMÂNTICOS — AÇÕES: DESTRUCTIVE
  // =========================================================================
  { name: 'action/destructive/default', cssVar: '--action-destructive-default', darkValue: '#EA580C', lightValue: '#C2410C', description: 'Estado padrão de ações destrutivas — botões de exclusão, encerramento forçado, ações irreversíveis. Laranja de alta visibilidade que comunica risco sem conflitar com a semântica de queda de mercado (vermelha).', category: 'semantico-action', isColor: true },
  { name: 'action/destructive/hover', cssVar: '--action-destructive-hover', darkValue: '#C2410C', lightValue: '#9A3412', description: 'Estado hover de ações destrutivas.', category: 'semantico-action', isColor: true },
  { name: 'action/destructive/active', cssVar: '--action-destructive-active', darkValue: '#9A3412', lightValue: '#7C2D12', description: 'Estado ativo/pressionado de ações destrutivas.', category: 'semantico-action', isColor: true },
  { name: 'action/destructive/disabled', cssVar: '--action-destructive-disabled', darkValue: '#777777', lightValue: '#EEEEEE', description: 'Estado desabilitado de ações destrutivas.', category: 'semantico-action', isColor: true },
  { name: 'action/destructive/alpha', cssVar: '--action-destructive-alpha', darkValue: '#EA580C14', lightValue: '#EA580C14', description: 'Versão semi-transparente de ação destrutiva para highlights sutis de risco.', category: 'semantico-action', isColor: true },

  // =========================================================================
  // SEMÂNTICOS — CONTEXTO TRADING: GRÁFICO
  // =========================================================================
  { name: 'context/chart/candles/up', cssVar: '--context-chart-candles-up', darkValue: '#4FE290', lightValue: '#0B9E5C', description: 'Cor de preenchimento das velas de alta (bullish) no gráfico candlestick. Semanticamente específico para o gráfico — manter separado de context/trading/up para permitir customização independente.', category: 'semantico-trading', isColor: true },
  { name: 'context/chart/candles/down', cssVar: '--context-chart-candles-down', darkValue: '#F34F45', lightValue: '#D91B0F', description: 'Cor de preenchimento das velas de baixa (bearish) no gráfico candlestick. Nunca usar para texto fora do contexto de visualização de candles.', category: 'semantico-trading', isColor: true },
  // =========================================================================
  // SEMÂNTICOS — CONTEXTO TRADING: MOVIMENTAÇÃO DE PREÇO
  // =========================================================================
  { name: 'context/trading/up', cssVar: '--context-trading-up', darkValue: '#4FE290', lightValue: '#13C870', description: 'Verde vibrante para indicar movimento de preço para cima em tempo real. Variações positivas (%), preços subindo no order book, indicadores de alta. Cor que o trader associa imediatamente com alta.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/down', cssVar: '--context-trading-down', darkValue: '#F34F45', lightValue: '#D91B0F', description: 'Vermelho para indicar movimento de preço para baixo em tempo real. Variações negativas, preços caindo, indicadores de tendência de baixa.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/up-alpha', cssVar: '--context-trading-up-alpha', darkValue: '#4FE29029', lightValue: '#4FE29052', description: 'Fundo semi-transparente verde (~16% alpha) para highlight de linhas/células com movimento positivo. Cria destaque colorido sem ofuscar o texto em tabelas densas de cotações.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/down-alpha', cssVar: '--context-trading-down-alpha', darkValue: '#F34F4529', lightValue: '#F34F4552', description: 'Fundo semi-transparente vermelho (~16% alpha) para highlight de linhas/células com movimento negativo. Análogo a /up-alpha para preços caindo no order book.', category: 'semantico-trading', isColor: true },
  // =========================================================================
  // SEMÂNTICOS — CONTEXTO TRADING: POSIÇÕES LONG
  // =========================================================================
  { name: 'context/trading/long/default', cssVar: '--context-trading-long-default', darkValue: '#4FE29014', lightValue: '#4FE2901F', description: 'Fundo muito sutil verde (~8% alpha) para indicar posição long aberta na watchlist ou order book. Mais discreto que /up-alpha — destaca a linha de posição sem distrair do conteúdo numérico.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/long/hover', cssVar: '--context-trading-long-hover', darkValue: '#4FE29029', lightValue: '#4FE29052', description: 'Estado hover de linha de posição long. Feedback visual de mouse over em rows de posição comprada.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/long/active', cssVar: '--context-trading-long-active', darkValue: '#4FE29052', lightValue: '#4FE29066', description: 'Estado ativo/selecionado de linha de posição long. Feedback de seleção de row de posição comprada.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/long/text', cssVar: '--context-trading-long-text', darkValue: '#6DE7A2', lightValue: '#0B9E5C', description: 'Texto para labels e valores de posição long. Verde levemente mais claro que /up — otimizado para legibilidade em texto pequeno. Ex: badge "LONG", P&L de posição comprada.', category: 'semantico-trading', isColor: true },
  // =========================================================================
  // SEMÂNTICOS — CONTEXTO TRADING: POSIÇÕES SHORT
  // =========================================================================
  { name: 'context/trading/short/default', cssVar: '--context-trading-short-default', darkValue: '#F34F4514', lightValue: '#F34F451F', description: 'Fundo muito sutil vermelho (~8% alpha) para indicar posição short aberta. Análogo a /long/default para o lado vendido.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/short/hover', cssVar: '--context-trading-short-hover', darkValue: '#F34F4529', lightValue: '#F34F4552', description: 'Estado hover de linha de posição short. Feedback visual de mouse over em rows de posição vendida.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/short/active', cssVar: '--context-trading-short-active', darkValue: '#F34F4552', lightValue: '#F34F4566', description: 'Estado ativo/selecionado de linha de posição short.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/short/text', cssVar: '--context-trading-short-text', darkValue: '#F56D64', lightValue: '#D91B0F', description: 'Texto para labels de posição short. Vermelho suave, otimizado para legibilidade em texto pequeno. Ex: badge "SHORT", rótulos de direção de posição vendida.', category: 'semantico-trading', isColor: true },
  // =========================================================================
  // SEMÂNTICOS — CONTEXTO TRADING: STOP LOSS
  // =========================================================================
  { name: 'context/trading/stop/default', cssVar: '--context-trading-stop-default', darkValue: '#F97316', lightValue: '#F97316', description: 'Laranja para ordens de stop loss. Cor distinta de up/down (verde/vermelho) para não confundir com movimentação de preço. Aparece em indicadores de preço de stop no gráfico e campos de stop na order form.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/stop/hover', cssVar: '--context-trading-stop-hover', darkValue: '#EA580C', lightValue: '#EA580C', description: 'Estado hover de elementos de stop loss. Feedback de mouse over em botões ou indicadores de stop.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/stop/active', cssVar: '--context-trading-stop-active', darkValue: '#C2410C', lightValue: '#C2410C', description: 'Estado ativo/pressionado de elementos de stop loss.', category: 'semantico-trading', isColor: true },
  { name: 'context/trading/stop/stop-alpha', cssVar: '--context-trading-stop-alpha', darkValue: '#EA580C14', lightValue: '#EA580C14', description: 'Versão semi-transparente da cor de stop loss para highlights sutis de risco em áreas de stop no gráfico.', category: 'semantico-trading', isColor: true },

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
