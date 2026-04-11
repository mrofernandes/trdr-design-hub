/* ==========================================================================
   TRDR Design System — Componentes TypeScript
   Fonte: design.md v1.4 | 82 componentes
   ========================================================================== */

export type ComponentCategory =
  | 'formulario'
  | 'modal'
  | 'navegacao'
  | 'floating-menu'
  | 'trading'
  | 'configuracao'
  | 'ia'
  | 'outros'

export const COMPONENT_CATEGORY_LABELS: Record<ComponentCategory, string> = {
  formulario: 'Formulário / Controles',
  modal: 'Modais / Overlays',
  navegacao: 'Navegação',
  'floating-menu': 'Floating Menus',
  trading: 'Trading',
  configuracao: 'Configuração',
  ia: 'Inteligência Artificial',
  outros: 'Outros',
}

export interface ComponentProp {
  name: string
  type: string
  values: string[]
}

export interface ComponentDimension {
  label: string
  width?: string
  height: string
}

export interface TokenUsage {
  property: string
  token: string
  value: string
}

export interface ComponentCode {
  html?: string      // HTML + CSS inline/classes
  css?: string       // CSS Module usando tokens TRDR
  react?: string     // Componente React (TSX + CSS Module)
  prompt?: string    // Prompt otimizado para Claude Code
}

export interface DesignComponent {
  slug: string
  name: string
  figmaId: string
  category: ComponentCategory
  description: string
  props: ComponentProp[]
  dimensions: ComponentDimension[]
  tokens: TokenUsage[]
  anatomy?: string
  notes?: string
  implemented?: boolean
  code?: ComponentCode
}

export const components: DesignComponent[] = [
  // =========================================================================
  // FORMULÁRIO / CONTROLES
  // =========================================================================
  {
    slug: 'button',
    name: 'Button',
    figmaId: '1318:749',
    category: 'formulario',
    description: 'Botão principal do sistema com 10 variantes visuais, 2 tamanhos e 4 estados.',
    props: [
      { name: 'Variant', type: 'enum', values: ['Primary', 'Secondary', 'Ghost', 'Link', 'Link Danger', 'Destructive', 'Inverse', 'Long', 'Short', 'Secondary Destruct'] },
      { name: 'Size', type: 'enum', values: ['Default', 'Large'] },
      { name: 'State', type: 'enum', values: ['Default', 'Hover', 'Pressed', 'Disabled'] },
      { name: 'Icon Left', type: 'boolean', values: ['true', 'false'] },
      { name: 'Icon Right', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Default', height: '24px' },
      { label: 'Large', height: '32px' },
    ],
    tokens: [
      { property: 'BG Primary', token: 'action.brand.default', value: '#3D99FF' },
      { property: 'BG Secondary', token: 'action.secondary.default', value: '#4A4A4A' },
      { property: 'Text Primary', token: 'content.inverse', value: '#1A1A1A' },
      { property: 'Text Secondary', token: 'content.primary', value: '#FFFFFF' },
      { property: 'BG Destructive', token: 'action.destructive.default', value: '#F57C00' },
    ],
    anatomy: `[Icon?] [Label] [Icon?]
Padding: 8px horizontal (Default) / 12px (Large)`,
    notes: 'Variante "Long" e "Short" são botões de largura fixa pré-definida para contextos de formulário de trading.',
    implemented: true,
    code: {
      html: `<button class="btn btn-primary">Label</button>
<button class="btn btn-primary btn-lg">Label Large</button>
<button class="btn btn-secondary">Secundário</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-destructive">Destructive</button>`,
      css: `/* Button — Design System TRDR */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0 8px;
  height: 24px;
  border: none;
  border-radius: var(--scale-radius-sm);
  font-size: 12px;
  font-weight: 500;
  font-family: var(--font-inter);
  cursor: pointer;
  transition: background-color 0.15s ease;
  white-space: nowrap;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 1;
}

/* Large */
.btn-lg {
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
}

/* Primary */
.btn-primary {
  background: var(--action-brand-default);
  color: var(--content-inverse);
}
.btn-primary:hover  { background: var(--action-brand-hover); }
.btn-primary:active { background: var(--action-brand-active); }
.btn-primary:disabled { background: var(--action-brand-disabled); }

/* Secondary */
.btn-secondary {
  background: var(--action-secondary-default);
  color: var(--content-primary);
}
.btn-secondary:hover  { background: var(--action-secondary-hover); }
.btn-secondary:active { background: var(--action-secondary-active); }
.btn-secondary:disabled { background: var(--action-secondary-disabled); }

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--content-secondary);
  border: 1px solid var(--border-subtle);
}
.btn-ghost:hover { background: var(--surface-secondary); border-color: var(--border-default); }

/* Destructive */
.btn-destructive {
  background: var(--action-destructive-default);
  color: var(--content-inverse);
}
.btn-destructive:hover  { background: var(--action-destructive-hover); }
.btn-destructive:active { background: var(--action-destructive-active); }
.btn-destructive:disabled { background: var(--action-destructive-disabled); }`,
      react: `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'default' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant}\${size === 'lg' ? ' btn-lg' : ''} \${className}\`}
      {...props}
    >
      {children}
    </button>
  )
}

/* Uso:
<Button variant="primary">Confirmar</Button>
<Button variant="secondary" size="lg">Cancelar</Button>
<Button variant="ghost" disabled>Desabilitado</Button>
*/`,
      prompt: `Implemente o componente Button do Design System TRDR.

Variantes: Primary, Secondary, Ghost, Destructive
Tamanhos: Default (height: 24px, padding: 0 8px), Large (height: 32px, padding: 0 12px)
Estados: Default, Hover, Pressed, Disabled

Tokens TRDR obrigatórios:
- Primary BG: var(--action-brand-default) | hover: var(--action-brand-hover) | active: var(--action-brand-active) | disabled: var(--action-brand-disabled)
- Secondary BG: var(--action-secondary-default) | hover: var(--action-secondary-hover)
- Destructive BG: var(--action-destructive-default) | hover: var(--action-destructive-hover)
- Ghost: background transparent, border: 1px solid var(--border-subtle), hover BG: var(--surface-secondary)
- Text Primary: var(--content-inverse)
- Text Secondary/Ghost: var(--content-primary) ou var(--content-secondary)
- Border radius: var(--scale-radius-sm)
- Font: 12px (default) / 14px (large), weight 500, var(--font-inter)

Implemente como componente React com CSS Module. Use CSS custom properties do TRDR. O resultado deve ser pixel-perfect em relação ao Figma (Figma ID: 1318:749).`,
    },
  },
  {
    slug: 'text-input',
    name: 'Text Input',
    figmaId: '1327:17000',
    category: 'formulario',
    description: 'Campo de texto com 3 variantes, 8 estados e 2 tamanhos.',
    props: [
      { name: 'Variant', type: 'enum', values: ['Single Line', 'Multi Line', 'Quick Action'] },
      { name: 'Size', type: 'enum', values: ['Default', 'Small'] },
      { name: 'State', type: 'enum', values: ['Empty', 'Filled', 'Focused', 'Error', 'Warning', 'Success', 'Disabled', 'Read Only'] },
      { name: 'Label', type: 'boolean', values: ['true', 'false'] },
      { name: 'Helper Text', type: 'boolean', values: ['true', 'false'] },
      { name: 'Icon Left', type: 'boolean', values: ['true', 'false'] },
      { name: 'Icon Right', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Default', height: '36px' },
      { label: 'Small', height: '28px' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.tertiary', value: '#1A1A1A' },
      { property: 'Border default', token: 'border.default', value: '#4A4A4A' },
      { property: 'Border focus', token: 'border.focus', value: '#65B0FF' },
      { property: 'Border error', token: 'content.error', value: '#F34F45' },
      { property: 'Text', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Placeholder', token: 'content.tertiary', value: '#A4A4A4' },
    ],
    notes: 'Quick Action é uma variante compacta para inputs em toolbars e painéis de trading.',
    implemented: true,
  },
  {
    slug: 'dropdown',
    name: 'Dropdown',
    figmaId: '1462:16743',
    category: 'formulario',
    description: 'Seletor com chevron, 2 tamanhos e 3 estados. Abre um floating menu com opções.',
    props: [
      { name: 'Size', type: 'enum', values: ['Default', 'Small'] },
      { name: 'State', type: 'enum', values: ['Default', 'Hover', 'Disabled'] },
      { name: 'Stroke', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Default', height: '32px' },
      { label: 'Small', height: '24px' },
    ],
    tokens: [
      { property: 'Background', token: 'surface.secondary', value: '#222222' },
      { property: 'Border', token: 'border.default', value: '#4A4A4A' },
      { property: 'Text', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Chevron', token: 'content.tertiary', value: '#A4A4A4' },
    ],
  },
  {
    slug: 'combo-input',
    name: 'Combo Input',
    figmaId: '1551:11643',
    category: 'formulario',
    description: 'Input dividido com chevron de seleção integrado. Altura fixa de 24px.',
    props: [
      { name: 'State', type: 'enum', values: ['Default', 'Hover', 'Focused', 'Disabled'] },
    ],
    dimensions: [
      { label: 'Default', height: '24px' },
    ],
    tokens: [
      { property: 'Background', token: 'surface.secondary', value: '#222222' },
      { property: 'Border', token: 'border.default', value: '#4A4A4A' },
      { property: 'Text', token: 'content.primary', value: '#FFFFFF' },
    ],
    anatomy: `[Input area] | [Chevron btn]
Split visual com divider vertical interno`,
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    figmaId: '1462:18059',
    category: 'formulario',
    description: 'Caixa de seleção com estado indeterminado (mixed).',
    props: [
      { name: 'Type', type: 'enum', values: ['Checked', 'Unchecked', 'Mixed'] },
      { name: 'State', type: 'enum', values: ['Default', 'Focused'] },
    ],
    dimensions: [
      { label: 'Default', width: '16px', height: '16px' },
    ],
    tokens: [
      { property: 'BG checked', token: 'action.brand.default', value: '#3D99FF' },
      { property: 'BG unchecked', token: 'surface.secondary', value: '#222222' },
      { property: 'Border', token: 'border.default', value: '#4A4A4A' },
      { property: 'Check icon', token: 'content.inverse', value: '#1A1A1A' },
    ],
  },
  {
    slug: 'radio-button',
    name: 'Radio Button',
    figmaId: '1916:46361',
    category: 'formulario',
    description: 'Botão de seleção única. Duas variantes: Input (circular) e Button (retangular).',
    props: [
      { name: 'Variant', type: 'enum', values: ['Input', 'Button'] },
      { name: 'State', type: 'enum', values: ['Default', 'Hover', 'Checked', 'Disabled'] },
    ],
    dimensions: [
      { label: 'Input', width: '16px', height: '16px' },
    ],
    tokens: [
      { property: 'BG checked', token: 'action.brand.default', value: '#3D99FF' },
      { property: 'Border', token: 'border.default', value: '#4A4A4A' },
    ],
  },
  {
    slug: 'switch',
    name: 'Switch',
    figmaId: '1359:1740',
    category: 'formulario',
    description: 'Toggle on/off/mixed. Track de 32×16px com knob de 14px.',
    props: [
      { name: 'State', type: 'enum', values: ['On', 'Off', 'Mixed'] },
    ],
    dimensions: [
      { label: 'Track', width: '32px', height: '16px' },
    ],
    tokens: [
      { property: 'Track ON', token: 'action.brand.default', value: '#3D99FF' },
      { property: 'Track OFF', token: 'surface.secondary', value: '#222222' },
      { property: 'Knob', token: 'content.primary', value: '#FFFFFF' },
    ],
    anatomy: `[Track 32×16px radius-full]
  └── [Knob 14×14px radius-full]`,
    notes: 'Border radius: radius.full (9999px) no track e no knob.',
  },
  {
    slug: 'segmented-control',
    name: 'Segmented Control',
    figmaId: '1655:25490',
    category: 'formulario',
    description: 'Controle de abas compacto. De 2 a 6 tabs. Container arredondado com radius 64px.',
    props: [
      { name: 'Tabs', type: 'enum', values: ['2', '3', '4', '5', '6'] },
      { name: 'State', type: 'enum', values: ['Default', 'Active'] },
    ],
    dimensions: [
      { label: 'Default', height: '28px' },
    ],
    tokens: [
      { property: 'Container BG', token: 'surface.secondary', value: '#222222' },
      { property: 'Tab ativa', token: 'action.secondary.default', value: '#4A4A4A' },
      { property: 'Tab inativa text', token: 'content.tertiary', value: '#A4A4A4' },
    ],
    anatomy: `[Container radius-full bg surface.secondary]
  └── [Tab 1] [Tab 2] [Tab N...]
      Padding: 2px no container`,
    implemented: true,
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    figmaId: '1618:23706',
    category: 'formulario',
    description: 'Balão de ajuda contextual. 8 direções de posicionamento.',
    props: [
      { name: 'Direction', type: 'enum', values: ['Top', 'Bottom', 'Left', 'Right', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'] },
    ],
    dimensions: [
      { label: 'Default', height: 'auto' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.primary', value: '#0E0E0E' },
      { property: 'Shadow', token: 'elevation-300', value: 'shadow md' },
      { property: 'Text', token: 'content.secondary', value: '#E8E8E8' },
    ],
  },
  {
    slug: 'labels',
    name: 'Labels',
    figmaId: '1318:722',
    category: 'formulario',
    description: 'Labels de campo para inputs e controles de formulário.',
    props: [
      { name: 'Required', type: 'boolean', values: ['true', 'false'] },
      { name: 'Helper', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Label text', token: 'content.secondary', value: '#E8E8E8' },
      { property: 'Required marker', token: 'content.error', value: '#F34F45' },
      { property: 'Helper text', token: 'content.tertiary', value: '#A4A4A4' },
    ],
  },
  {
    slug: 'labeled-combo-input',
    name: 'LabeledComboInput',
    figmaId: '1973:94124',
    category: 'formulario',
    description: 'Combo input com label integrado. Usado em formulários de configuração de ordens.',
    props: [],
    dimensions: [{ label: 'Default', height: '52px' }],
    tokens: [
      { property: 'Background', token: 'surface.secondary', value: '#222222' },
    ],
  },
  {
    slug: 'color-picker-row',
    name: 'ColorPickerRow',
    figmaId: '1973:94117',
    category: 'formulario',
    description: 'Linha de seleção de cor para painéis de configuração de gráficos.',
    props: [],
    dimensions: [{ label: 'Default', height: '32px' }],
    tokens: [
      { property: 'Background', token: 'surface.secondary', value: '#222222' },
    ],
  },

  // =========================================================================
  // MODAIS / OVERLAYS
  // =========================================================================
  {
    slug: 'modal',
    name: 'Modal',
    figmaId: '1959:70722',
    category: 'modal',
    description: 'Modal com footer Standard ou Destructive. Suporta abas opcionais. 480px de largura.',
    props: [
      { name: 'Footer', type: 'enum', values: ['Standard', 'Destructive'] },
      { name: 'Tabs', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Default', width: '480px', height: 'auto' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Header height', token: '—', value: '44px' },
      { property: 'Footer height', token: '—', value: '48px' },
      { property: 'Border', token: 'border.subtle', value: '#222222' },
      { property: 'CTA destrutiva', token: 'action.destructive.default', value: '#F57C00' },
    ],
    anatomy: `[Header 44px] ← título + fechar
[Content flex-grow]
[Footer 48px] ← ações`,
  },
  {
    slug: 'notifications',
    name: 'Notifications',
    figmaId: '1926:58501',
    category: 'modal',
    description: 'Painel de notificações do sistema.',
    props: [],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
    ],
  },
  {
    slug: 'confirmacoes-execucao',
    name: 'Confirmações de Execução',
    figmaId: '2161:35731',
    category: 'modal',
    description: 'Modal de confirmação de ordens executadas. Exibe detalhes da operação.',
    props: [],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Long', token: 'context.trading.long.text', value: '#4FE290' },
      { property: 'Short', token: 'context.trading.short.text', value: '#F34F45' },
    ],
  },
  {
    slug: 'tp-sl-config',
    name: 'TP/SL Config',
    figmaId: '2161:35783',
    category: 'modal',
    description: 'Painel de configuração de Take Profit e Stop Loss.',
    props: [],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'TP color', token: 'context.trading.up', value: '#4FE290' },
      { property: 'SL color', token: 'context.trading.stop.default', value: 'rgba(255,100,0,0.16)' },
    ],
  },

  // =========================================================================
  // NAVEGAÇÃO
  // =========================================================================
  {
    slug: 'header-window',
    name: 'Header Window',
    figmaId: '243:3344',
    category: 'navegacao',
    description: 'Header interno de janela da plataforma de trading. Contém abas e ações.',
    props: [
      { name: 'Tabs', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Default', width: '476px', height: '41px' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Tab ativa — indicador', token: 'action.brand.default', value: '#3D99FF' },
      { property: 'Tab ativa — texto', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Tab inativa — texto', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Border bottom', token: 'border.subtle', value: '#222222' },
    ],
    anatomy: `[Tab 1 ▼ 2px azul] [Tab 2] [Tab N] → → → [Ações]
Indicador: border-bottom 2px action.brand.default na tab ativa`,
    notes: 'Estilo 1 de abas: bottom-border indicator. Diferente das pill tabs e do componente abas.',
  },
  {
    slug: 'hellobar',
    name: 'Hellobar',
    figmaId: '3:773',
    category: 'navegacao',
    description: 'Barra superior global de 1920×46px.',
    props: [],
    dimensions: [
      { label: 'Default', width: '1920px', height: '46px' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.primary', value: '#0E0E0E' },
    ],
  },
  {
    slug: 'header-desktop',
    name: 'Header Desktop',
    figmaId: '1921:55292',
    category: 'navegacao',
    description: 'Header principal da plataforma desktop e do app launcher.',
    props: [],
    dimensions: [
      { label: 'Default', width: '390px', height: '56px' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.primary', value: '#0E0E0E' },
      { property: 'Nav text', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Divider', token: 'border.subtle', value: '#222222' },
    ],
    anatomy: `[Logo] | [Nav items gap-16px] → → → [Conexões btn] | [Win controls]
Altura: 56px | Padding: 16px H / 8px V`,
  },
  {
    slug: 'abas',
    name: 'Abas',
    figmaId: '253:2861',
    category: 'navegacao',
    description: 'Barra de abas horizontal. Aba ativa com fundo surface.secondary.',
    props: [],
    dimensions: [
      { label: 'Default', width: '476px', height: '45px' },
    ],
    tokens: [
      { property: 'Tab ativa BG', token: 'action.secondary.default', value: '#4A4A4A' },
      { property: 'Tab inativa text', token: 'content.tertiary', value: '#A4A4A4' },
    ],
    notes: 'Estilo 2 de abas: fundo na tab ativa. Diferente do header-window (bottom-border) e pill tabs.',
    implemented: true,
  },
  {
    slug: 'sidebar-icon',
    name: 'SidebarIcon',
    figmaId: '1630:24282',
    category: 'navegacao',
    description: 'Ícone de sidebar com 3 estados: Default, Hover e Active.',
    props: [
      { name: 'State', type: 'enum', values: ['Default', 'Hover', 'Active'] },
    ],
    dimensions: [
      { label: 'Default', width: '64px', height: '24px' },
    ],
    tokens: [
      { property: 'Active', token: 'action.brand.default', value: '#3D99FF' },
      { property: 'Default', token: 'content.tertiary', value: '#A4A4A4' },
    ],
  },
  {
    slug: 'sub-menu-item',
    name: 'Sub-menu Item',
    figmaId: '1886:20967',
    category: 'navegacao',
    description: 'Item de sub-menu com estados Default, Hover e Pressed.',
    props: [
      { name: 'State', type: 'enum', values: ['Default', 'Hover', 'Pressed'] },
    ],
    dimensions: [
      { label: 'Default', width: '236px', height: '32px' },
    ],
    tokens: [
      { property: 'BG hover', token: 'surface.secondary', value: '#222222' },
      { property: 'Text', token: 'content.secondary', value: '#E8E8E8' },
    ],
    implemented: true,
  },
  {
    slug: 'menu-lateral',
    name: 'Menu Lateral',
    figmaId: '1875:20372',
    category: 'navegacao',
    description: 'Menu lateral completo da plataforma de trading. 48px de largura, 5 variantes.',
    props: [
      { name: 'Variant', type: 'enum', values: ['Gráfico', 'Análises', 'Mercado', 'Ferramentas', 'Configurações'] },
    ],
    dimensions: [
      { label: 'Default', width: '48px', height: '974px' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Border', token: 'border.subtle', value: '#222222' },
      { property: 'Icon ativo', token: 'content.brand', value: '#3D99FF' },
      { property: 'Icon inativo', token: 'content.tertiary', value: '#A4A4A4' },
    ],
  },
  {
    slug: 'link',
    name: 'Link',
    figmaId: '2161:33773',
    category: 'navegacao',
    description: 'Link padrão e ativo. 24×24px.',
    props: [
      { name: 'State', type: 'enum', values: ['Default', 'Active'] },
    ],
    dimensions: [
      { label: 'Default', width: '24px', height: '24px' },
    ],
    tokens: [
      { property: 'Default', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Active', token: 'content.brand', value: '#3D99FF' },
    ],
  },
  {
    slug: 'janela',
    name: 'Janela',
    figmaId: '1909:41600',
    category: 'navegacao',
    description: 'Container de janela flutuante completa da plataforma de trading.',
    props: [],
    dimensions: [
      { label: 'Default', width: '1709px', height: '1168px' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Border', token: 'border.default', value: '#4A4A4A' },
      { property: 'Radius', token: 'scale.radius.sm', value: '4px' },
    ],
    anatomy: `[header-window 41px] ← tabs + ações
────────────────────────────
[Conteúdo flex-grow]`,
    notes: 'Container universal da plataforma. Todo painel é uma janela.',
  },

  // =========================================================================
  // FLOATING MENUS
  // =========================================================================
  { slug: 'floating-menu-open-itens', name: 'Floating Menu Open Itens', figmaId: '2147:24092', category: 'floating-menu', description: 'Menu flutuante de itens abertos.', props: [], dimensions: [{ label: 'Default', width: '163px', height: '120px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }, { property: 'Radius', token: 'scale.radius.md', value: '8px' }] },
  { slug: 'floating-menu-color-picker', name: 'Floating Menu Color Picker', figmaId: '2147:24091', category: 'floating-menu', description: 'Seletor de cor flutuante.', props: [], dimensions: [{ label: 'Default', width: '160px', height: '175px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-mercados', name: 'Floating Menu Mercados', figmaId: '2147:24090', category: 'floating-menu', description: 'Seletor de mercados/ativos flutuante.', props: [], dimensions: [{ label: 'Default', width: '147px', height: '207px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-more-horiz', name: 'Floating Menu More Horiz', figmaId: '2147:24089', category: 'floating-menu', description: 'Menu de mais opções (…) horizontal.', props: [], dimensions: [{ label: 'Default', width: '172px', height: '192px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-conexoes', name: 'Floating Menu Conexões', figmaId: '1921:55384', category: 'floating-menu', description: 'Painel de gerenciamento de conexões.', props: [], dimensions: [{ label: 'Default', width: '260px', height: '305px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-configuracoes', name: 'Floating Menu Configurações', figmaId: '1921:55382', category: 'floating-menu', description: 'Painel de configurações rápidas.', props: [], dimensions: [{ label: 'Default', width: '260px', height: '239px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-tipo-grafico', name: 'Floating Menu Tipo de Gráfico', figmaId: '1923:56275', category: 'floating-menu', description: 'Seletor de tipo de gráfico (candle, linha, etc).', props: [], dimensions: [{ label: 'Default', width: '200px', height: '210px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-layouts', name: 'Floating Menu Layouts', figmaId: '1921:55383', category: 'floating-menu', description: 'Seletor de layouts de gráfico.', props: [], dimensions: [{ label: 'Default', width: '240px', height: '215px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-indicadores', name: 'Floating Menu Indicadores', figmaId: '1923:56276', category: 'floating-menu', description: 'Seletor de indicadores técnicos.', props: [], dimensions: [{ label: 'Default', width: '240px', height: '323px' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-boleta', name: 'Floating Menu Boleta', figmaId: '1916:47379', category: 'floating-menu', description: 'Menu contextual da boleta de ordens.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-seletor-ativo', name: 'Floating Menu Seletor Ativo', figmaId: '1916:47380', category: 'floating-menu', description: 'Seletor de ativo/instrumento financeiro.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-tp-sl', name: 'Floating Menu TP/SL', figmaId: '1916:47381', category: 'floating-menu', description: 'Configuração rápida de TP/SL.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-ordem', name: 'Floating Menu Ordem', figmaId: '1916:47382', category: 'floating-menu', description: 'Opções de ordem.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },
  { slug: 'floating-menu-posicao', name: 'Floating Menu Posição', figmaId: '1916:47383', category: 'floating-menu', description: 'Opções de posição aberta.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [{ property: 'Background', token: 'bg.primary', value: '#0E0E0E' }] },

  // =========================================================================
  // TRADING
  // =========================================================================
  {
    slug: 'grafico',
    name: 'Gráfico',
    figmaId: '1923:56349',
    category: 'trading',
    description: 'Área principal do gráfico de preços com candlesticks. Integra floating menus.',
    props: [],
    dimensions: [{ label: 'Default', height: 'flex-grow' }],
    tokens: [
      { property: 'Candle alta', token: 'context.chart.candles.up', value: '#31DD7E' },
      { property: 'Candle baixa', token: 'context.chart.candles.down', value: '#F34F45' },
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
    ],
  },
  {
    slug: 'boleta',
    name: 'Painel de Negociações (Boleta)',
    figmaId: '1916:47370',
    category: 'trading',
    description: 'Painel de entrada de ordens com campos de compra e venda.',
    props: [
      { name: 'Side', type: 'enum', values: ['Comprar', 'Vender'] },
    ],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Comprar BG', token: 'context.trading.long.default', value: 'rgba(79,226,144,0.08)' },
      { property: 'Vender BG', token: 'context.trading.short.default', value: 'rgba(243,79,69,0.08)' },
      { property: 'Comprar CTA', token: 'context.trading.long.text', value: '#4FE290' },
      { property: 'Vender CTA', token: 'context.trading.short.text', value: '#F34F45' },
      { property: 'Stop', token: 'context.trading.stop.default', value: 'rgba(255,100,0,0.16)' },
    ],
  },
  { slug: 'volume', name: 'Volume', figmaId: '266:7525', category: 'trading', description: 'Exibição do volume negociado em histograma.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [{ property: 'Barras', token: 'content.tertiary', value: '#A4A4A4' }] },
  {
    slug: 'ordens',
    name: 'Ordens',
    figmaId: '336:3114',
    category: 'trading',
    description: 'Lista de ordens abertas e executadas. Usa DataTable + DataTableRow.',
    props: [],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Header', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Row hover', token: 'surface.secondary', value: '#222222' },
    ],
  },
  { slug: 'resultado-row', name: 'Resultado Row', figmaId: '2168:50415', category: 'trading', description: 'Linha de resultado do dia.', props: [], dimensions: [{ label: 'Default', height: '32px' }], tokens: [{ property: 'Positivo', token: 'context.trading.up', value: '#4FE290' }, { property: 'Negativo', token: 'context.trading.down', value: '#F34F45' }] },
  { slug: 'dropdown-resultado', name: 'Dropdown Resultado do Dia', figmaId: '2168:50482', category: 'trading', description: 'Dropdown de resultado do dia com variantes positivo/negativo.', props: [{ name: 'Resultado', type: 'enum', values: ['Positivo', 'Negativo'] }], dimensions: [{ label: 'Default', height: '32px' }], tokens: [{ property: 'Positivo', token: 'context.trading.up', value: '#4FE290' }, { property: 'Negativo', token: 'context.trading.down', value: '#F34F45' }] },
  { slug: 'list', name: 'List', figmaId: '2150:28676', category: 'trading', description: 'Lista de itens da plataforma.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },
  { slug: 'data-table', name: 'DataTable', figmaId: '1973:94151', category: 'trading', description: 'Tabela de dados da plataforma de trading.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [{ property: 'Header BG', token: 'surface.secondary', value: '#222222' }, { property: 'Row border', token: 'border.subtle', value: '#222222' }] },
  { slug: 'data-table-row', name: 'DataTableRow', figmaId: '1973:94150', category: 'trading', description: 'Linha da DataTable.', props: [{ name: 'Side', type: 'enum', values: ['Long', 'Short', 'Neutral'] }], dimensions: [{ label: 'Default', height: '32px' }], tokens: [{ property: 'Long', token: 'context.trading.long.default', value: 'rgba(79,226,144,0.08)' }, { property: 'Short', token: 'context.trading.short.default', value: 'rgba(243,79,69,0.08)' }] },
  { slug: 'grid-saida-row', name: 'GridSaidaRow', figmaId: '1973:95100', category: 'trading', description: 'Linha do grid de saída de posições.', props: [], dimensions: [{ label: 'Default', height: '32px' }], tokens: [] },
  { slug: 'section-header', name: 'SectionHeader', figmaId: '1973:94119', category: 'trading', description: 'Header de seção dentro de painéis de trading.', props: [], dimensions: [{ label: 'Default', height: '32px' }], tokens: [{ property: 'Background', token: 'surface.secondary', value: '#222222' }, { property: 'Text', token: 'content.tertiary', value: '#A4A4A4' }] },
  { slug: 'container', name: 'Container', figmaId: '856:20717', category: 'trading', description: 'Container genérico de painel.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },
  { slug: 'conjunto', name: 'Conjunto', figmaId: '856:20709', category: 'trading', description: 'Agrupador de múltiplos painéis.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },

  // =========================================================================
  // CONFIGURAÇÃO
  // =========================================================================
  { slug: 'content-grafico-geral', name: 'Content GráficoGeral', figmaId: '1973:94390', category: 'configuracao', description: 'Painel de configuração geral do gráfico.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [{ property: 'Background', token: 'bg.secondary', value: '#141519' }] },
  { slug: 'content-estrategias', name: 'Content Estratégias', figmaId: '1973:95266', category: 'configuracao', description: 'Painel de configuração de estratégias.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },
  { slug: 'content-grafico-trade', name: 'Content GráficoTrade', figmaId: '1973:94706', category: 'configuracao', description: 'Configuração visual de trade no gráfico.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },
  { slug: 'content-cores-painel', name: 'Content CoresPainel', figmaId: '1973:94177', category: 'configuracao', description: 'Configuração de cores do painel.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },
  { slug: 'content-propriedades', name: 'Content Propriedades', figmaId: '1973:94957', category: 'configuracao', description: 'Painel de propriedades do instrumento.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },
  { slug: 'content-cores-livro', name: 'Content CoresLivro', figmaId: '1973:94188', category: 'configuracao', description: 'Configuração de cores do livro de ordens.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },
  { slug: 'content-grafico-legenda', name: 'Content GráficoLegenda', figmaId: '1973:94206', category: 'configuracao', description: 'Configuração da legenda do gráfico.', props: [], dimensions: [{ label: 'Default', height: 'auto' }], tokens: [] },

  // =========================================================================
  // IA
  // =========================================================================
  {
    slug: 'chat-ia',
    name: 'Chat IA',
    figmaId: '473:33085',
    category: 'ia',
    description: 'Interface de chat com assistente IA integrado à plataforma de trading.',
    props: [],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Input', token: 'surface.secondary', value: '#222222' },
      { property: 'Mensagem IA', token: 'surface.brand', value: 'rgba(0,82,204,0.16)' },
    ],
  },
  {
    slug: 'copiloto',
    name: 'Copiloto',
    figmaId: '2025:195768',
    category: 'ia',
    description: 'Painel copiloto que analisa e sugere ações de trading em tempo real.',
    props: [],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Sugestão positiva', token: 'context.trading.up', value: '#4FE290' },
      { property: 'Sugestão negativa', token: 'context.trading.down', value: '#F34F45' },
    ],
  },

  // =========================================================================
  // OUTROS
  // =========================================================================
  {
    slug: 'painel-cotacoes',
    name: 'Painel de Cotações',
    figmaId: '77:3681',
    category: 'outros',
    description: 'Exibe cotações em tempo real dos ativos. Coluna 1 da plataforma (358px).',
    props: [],
    dimensions: [
      { label: 'Default', width: '358px', height: 'auto' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Ask (alta)', token: 'context.trading.up', value: '#4FE290' },
      { property: 'Bid (baixa)', token: 'context.trading.down', value: '#F34F45' },
    ],
  },
  {
    slug: 'noticias',
    name: 'Notícias',
    figmaId: '66:2464',
    category: 'outros',
    description: 'Feed de notícias do mercado financeiro.',
    props: [],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Título', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Meta info', token: 'content.tertiary', value: '#A4A4A4' },
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    figmaId: '—',
    category: 'outros',
    description: 'Card de conteúdo — container com borda, padding e hover. Usado como base para cards de navegação e informação no Design Hub.',
    props: [
      { name: 'Variant', type: 'enum', values: ['Default', 'With Icon'] },
    ],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [
      { property: 'Background', token: 'surface.tertiary', value: '#1A1A1A' },
      { property: 'Border', token: 'border.subtle', value: '#222222' },
      { property: 'Radius', token: 'scale.radius.md', value: '12px' },
      { property: 'Padding', token: 'scale.spacing.2xl', value: '24px' },
    ],
    anatomy: `[Icon? 44px brand]\n[Title H-6]\n[Description B-3]`,
    notes: 'Hover: border-color passa para border.default, background para surface.secondary.',
    implemented: true,
    code: {
      html: `<a href="/destino" class="card">
  <span class="card-icon material-symbols-outlined">palette</span>
  <span class="card-title">Tokens</span>
  <p class="card-desc">Cores, espaçamentos e tokens semânticos do design system.</p>
</a>`,
      css: `/* Card — Design System TRDR */
.card {
  display: flex;
  flex-direction: column;
  gap: var(--scale-spacing-sm);
  padding: var(--scale-spacing-2xl);
  background: var(--surface-tertiary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--scale-radius-md);
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.card:hover {
  border-color: var(--border-default);
  background: var(--surface-secondary);
}

.card-icon {
  font-size: 24px;
  line-height: 1;
  color: var(--content-brand);
}

.card-title {
  font-size: 16px;  /* B-2: 16px, Medium 500 */
  font-weight: 500;
  color: var(--content-primary);
  font-family: var(--font-inter);
}

.card-desc {
  font-size: 12px;  /* B-4: 12px, Medium 500 */
  font-weight: 500;
  color: var(--content-tertiary);
  line-height: 1.5;
  font-family: var(--font-inter);
}`,
      react: `interface CardProps {
  href: string
  icon?: string          // Material Symbol name
  title: string
  description: string
}

export function Card({ href, icon, title, description }: CardProps) {
  return (
    <a href={href} className={styles.card}>
      {icon && (
        <span className={\`\${styles.icon} material-symbols-outlined\`}>
          {icon}
        </span>
      )}
      <span className={styles.title}>{title}</span>
      <p className={styles.desc}>{description}</p>
    </a>
  )
}

/* Card.module.css:
.card {
  display: flex;
  flex-direction: column;
  gap: var(--scale-spacing-sm);
  padding: var(--scale-spacing-2xl);
  background: var(--surface-tertiary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--scale-radius-md);
  text-decoration: none;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}
.card:hover {
  border-color: var(--border-default);
  background: var(--surface-secondary);
}
.icon { font-size: 24px; color: var(--content-brand); }
.title { font-size: 16px; font-weight: 500; color: var(--content-primary); }
.desc { font-size: 12px; font-weight: 500; color: var(--content-tertiary); line-height: 1.5; }
*/`,
      prompt: `Implemente o componente Card do Design System TRDR.

Estrutura: ícone (opcional, Material Symbols) + título + descrição
Comportamento: card clicável (link), com hover state

Tokens TRDR obrigatórios:
- Background: var(--surface-tertiary)
- Background hover: var(--surface-secondary)
- Border: 1px solid var(--border-subtle)
- Border hover: var(--border-default)
- Border radius: var(--scale-radius-md)
- Padding: var(--scale-spacing-2xl) (24px desktop)
- Gap entre elementos: var(--scale-spacing-sm)
- Ícone: font-size 24px, color var(--content-brand)
- Título: 16px (B-2), font-weight 500, var(--content-primary)
- Descrição: 12px (B-4), font-weight 500, var(--content-tertiary), line-height 1.5

Transição: border-color e background-color em 0.15s ease

Implemente como componente React com CSS Module. Use CSS custom properties do TRDR. O resultado deve ser pixel-perfect em relação ao Figma.`,
    },
  },
  {
    slug: 'componente-coringa',
    name: 'Componente Coringa',
    figmaId: '366:11277',
    category: 'outros',
    description: 'Componente placeholder genérico para áreas em desenvolvimento.',
    props: [],
    dimensions: [{ label: 'Default', height: 'auto' }],
    tokens: [],
  },
]

export function getComponentBySlug(slug: string): DesignComponent | undefined {
  return components.find(c => c.slug === slug)
}

export function getComponentsByCategory(category: ComponentCategory): DesignComponent[] {
  return components.filter(c => c.category === category)
}

export function filterComponents(search: string, category?: ComponentCategory): DesignComponent[] {
  let filtered = components
  if (category) filtered = filtered.filter(c => c.category === category)
  if (search) {
    const q = search.toLowerCase()
    filtered = filtered.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.figmaId.includes(q)
    )
  }
  return filtered
}
