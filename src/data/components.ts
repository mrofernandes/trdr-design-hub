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
      { property: 'BG Primary', token: 'action.brand-inverse.default', value: '#0066FF' },
      { property: 'BG Primary Hover', token: 'action.brand-inverse.hover', value: '#1E82FF' },
      { property: 'BG Primary Active', token: 'action.brand-inverse.active', value: '#0052CC' },
      { property: 'BG Secondary', token: 'action.secondary.default', value: '#4A4A4A' },
      { property: 'Text sobre Primary/Secondary', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Text Ghost', token: 'content.secondary', value: '#E8E8E8' },
      { property: 'BG Destructive', token: 'action.destructive.default', value: '#F57C00' },
      { property: 'BG Long (trading)', token: 'context.trading.long.default', value: 'rgba(79,226,144,0.08)' },
      { property: 'Text Long (trading)', token: 'context.trading.long.text', value: '#4FE290' },
      { property: 'BG Short (trading)', token: 'context.trading.short.default', value: 'rgba(243,79,69,0.08)' },
      { property: 'Text Short (trading)', token: 'context.trading.short.text', value: '#F34F45' },
      { property: 'Border radius', token: 'scale.radius.md', value: '8px' },
      { property: 'Border Ghost', token: 'border.default', value: '#4A4A4A' },
      { property: 'Font family', token: 'font.secondary', value: 'Inter' },
      { property: 'Font size Default', token: 'font-size-100', value: '14px' },
      { property: 'Font weight', token: 'text.label.sm.weight', value: '600 (SemiBold)' },
    ],
    anatomy: `[Icon Left?] [Label] [Icon Right?]
Gap: 4px | Padding: 8px H (Default) / 12px H (Large)
Height: 24px (Default) / 32px (Large) | Border-radius: 8px`,
    notes: 'Variantes "Long" e "Short" são botões para contextos de trading (compra/venda). "Secondary Destruct" é Ghost com cor destrutiva. "Inverse" é usado sobre fundos claros.',
    implemented: true,
    code: {
      html: `<!-- Primary -->
<button class="trdr-btn trdr-btn-primary">Confirmar</button>
<button class="trdr-btn trdr-btn-primary trdr-btn-lg">Confirmar (Large)</button>
<button class="trdr-btn trdr-btn-primary" disabled>Desabilitado</button>

<!-- Secondary -->
<button class="trdr-btn trdr-btn-secondary">Cancelar</button>

<!-- Ghost -->
<button class="trdr-btn trdr-btn-ghost">Ghost</button>

<!-- Destructive -->
<button class="trdr-btn trdr-btn-destructive">Excluir</button>

<!-- Inverse -->
<button class="trdr-btn trdr-btn-inverse">Inverse</button>

<!-- Link -->
<button class="trdr-btn trdr-btn-link">Ver mais</button>

<!-- Link Danger -->
<button class="trdr-btn trdr-btn-link-danger">Remover</button>

<!-- Secondary Destruct -->
<button class="trdr-btn trdr-btn-secondary-destruct">Cancelar operação</button>

<!-- Long / Short — Trading -->
<button class="trdr-btn trdr-btn-long">Long</button>
<button class="trdr-btn trdr-btn-short">Short</button>`,
      css: `/* Button — Design System TRDR | Figma: 1318:749 */
.trdr-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);       /* 4px */
  height: 24px;
  padding: 0 var(--spacing-sm); /* 0 8px */
  border-radius: var(--radius-md); /* 8px */
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.trdr-btn-lg {
  height: 32px;
  padding: 0 var(--spacing-md); /* 0 12px */
}

/* Primary */
.trdr-btn-primary {
  background-color: var(--action-brand-inverse-default); /* #0066FF */
  color: var(--content-primary);
  border: 0.5px solid var(--action-brand-inverse-default);
}
.trdr-btn-primary:hover  { background-color: var(--action-brand-inverse-hover); border-color: var(--action-brand-inverse-hover); }
.trdr-btn-primary:active { background-color: var(--action-brand-inverse-active); border-color: var(--action-brand-inverse-active); }
.trdr-btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }

/* Secondary */
.trdr-btn-secondary {
  background-color: var(--action-secondary-default); /* #4A4A4A */
  color: var(--content-primary);
}
.trdr-btn-secondary:hover  { background-color: var(--action-secondary-hover); }
.trdr-btn-secondary:active { background-color: var(--action-secondary-active); }
.trdr-btn-secondary:disabled { background-color: var(--action-secondary-disabled); color: var(--content-disabled); cursor: not-allowed; }

/* Ghost */
.trdr-btn-ghost {
  background-color: transparent;
  color: var(--content-secondary); /* #E8E8E8 */
  border: 1px solid var(--border-default); /* #4A4A4A */
}
.trdr-btn-ghost:hover  { background-color: var(--surface-secondary); border-color: var(--border-strong); color: var(--content-primary); }
.trdr-btn-ghost:active { background-color: var(--surface-primary); }
.trdr-btn-ghost:disabled { color: var(--content-disabled); border-color: var(--border-disabled); opacity: 0.5; cursor: not-allowed; }

/* Destructive */
.trdr-btn-destructive {
  background-color: var(--action-destructive-default); /* #F57C00 */
  color: var(--content-primary);
}
.trdr-btn-destructive:hover  { background-color: var(--action-destructive-hover); }
.trdr-btn-destructive:active { background-color: var(--action-destructive-active); }

/* Inverse */
.trdr-btn-inverse {
  background-color: var(--bg-inverse); /* #FFFFFF */
  color: var(--content-inverse);       /* #1A1A1A */
  border: 0.5px solid var(--bg-inverse);
}
.trdr-btn-inverse:hover { background-color: var(--color-neutral-100); }

/* Link */
.trdr-btn-link {
  background-color: transparent;
  color: var(--content-brand); /* #3D99FF */
  padding-left: 0;
  padding-right: 0;
}
.trdr-btn-link:hover { color: var(--action-brand-hover); text-decoration: underline; }

/* Link Danger */
.trdr-btn-link-danger {
  background-color: transparent;
  color: var(--content-error); /* #F34F45 */
  padding-left: 0;
  padding-right: 0;
}
.trdr-btn-link-danger:hover { color: var(--action-destructive-hover); text-decoration: underline; }

/* Secondary Destruct */
.trdr-btn-secondary-destruct {
  background-color: transparent;
  color: var(--action-destructive-default);
  border: 1px solid var(--action-destructive-default);
}
.trdr-btn-secondary-destruct:hover { background-color: var(--action-destructive-disabled); }

/* Long — Trading compra (verde) */
.trdr-btn-long {
  background-color: var(--context-trading-long-default);
  color: var(--context-trading-long-text);
  min-width: 80px;
}
.trdr-btn-long:hover { background-color: var(--context-trading-long-hover); }

/* Short — Trading venda (vermelho) */
.trdr-btn-short {
  background-color: var(--context-trading-short-default);
  color: var(--context-trading-short-text);
  min-width: 80px;
}
.trdr-btn-short:hover { background-color: var(--context-trading-short-hover); }`,
      react: `import Button from '@/components/ui/Button'

// Variantes principais
<Button variant="primary">Confirmar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Excluir</Button>

// Tamanho Large
<Button variant="primary" size="lg">Confirmar (Large)</Button>

// Com ícone (Material Symbols)
<Button
  variant="primary"
  iconLeft={<span style={{ fontFamily: 'Material Symbols Outlined', fontSize: 16 }}>add</span>}
>
  Nova posição
</Button>

// Disabled
<Button variant="primary" disabled>Processando...</Button>

// Variantes de link
<Button variant="link">Ver mais</Button>
<Button variant="link-danger">Remover</Button>

// Inverse (sobre fundo claro)
<Button variant="inverse">Ação</Button>

// Secondary Destruct
<Button variant="secondary-destruct">Cancelar operação</Button>

// Trading
<Button variant="long">Long</Button>
<Button variant="short">Short</Button>

// Interface de Props:
// variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'inverse'
//         | 'link' | 'link-danger' | 'secondary-destruct' | 'long' | 'short'
// size?: 'default' | 'lg'
// iconLeft?: React.ReactNode
// iconRight?: React.ReactNode
// + todos os atributos nativos do <button>`,
      prompt: `Implemente o componente Button do Design System TRDR. Figma ID: 1318:749.

DIMENSÕES:
- Default: height 24px, padding 0 8px, gap 4px
- Large: height 32px, padding 0 12px, gap 4px
- Border-radius: var(--radius-md) — 8px (OBRIGATÓRIO, não usar --radius-sm)

TIPOGRAFIA:
- font-family: var(--font-secondary) — Inter
- font-size: 14px (ambos os tamanhos)
- font-weight: 600 (SemiBold)

10 VARIANTES com tokens obrigatórios:

Primary:
  BG: var(--action-brand-inverse-default) /* #0066FF */
  Color: var(--content-primary)
  Border: 0.5px solid var(--action-brand-inverse-default)
  Hover: var(--action-brand-inverse-hover) | Active: var(--action-brand-inverse-active)

Secondary:
  BG: var(--action-secondary-default) /* #4A4A4A */
  Color: var(--content-primary)
  Hover: var(--action-secondary-hover) | Active: var(--action-secondary-active)

Ghost:
  BG: transparent | Color: var(--content-secondary) /* #E8E8E8 */
  Border: 1px solid var(--border-default)
  Hover: BG var(--surface-secondary), border var(--border-strong), color var(--content-primary)

Destructive:
  BG: var(--action-destructive-default) /* #F57C00 */
  Color: var(--content-primary)
  Hover: var(--action-destructive-hover) | Active: var(--action-destructive-active)

Inverse:
  BG: var(--bg-inverse) /* #FFFFFF */
  Color: var(--content-inverse) /* #1A1A1A */
  Border: 0.5px solid var(--bg-inverse)

Link:
  BG: transparent | Color: var(--content-brand) | padding-x: 0
  Hover: color var(--action-brand-hover), text-decoration underline

Link Danger:
  BG: transparent | Color: var(--content-error) | padding-x: 0
  Hover: color var(--action-destructive-hover), text-decoration underline

Secondary Destruct:
  BG: transparent | Color: var(--action-destructive-default)
  Border: 1px solid var(--action-destructive-default)
  Hover: BG var(--action-destructive-disabled)

Long (trading compra):
  BG: var(--context-trading-long-default) | Color: var(--context-trading-long-text)
  min-width: 80px
  Hover: var(--context-trading-long-hover) | Active: var(--context-trading-long-active)

Short (trading venda):
  BG: var(--context-trading-short-default) | Color: var(--context-trading-short-text)
  min-width: 80px
  Hover: var(--context-trading-short-hover) | Active: var(--context-trading-short-active)

Disabled (global): opacity 0.4, cursor not-allowed

Implemente como componente React com CSS Module. Props: variant, size, iconLeft, iconRight + atributos nativos do button. Resultado deve ser pixel-perfect em relação ao Figma.`,
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
    anatomy: `Container 1 (borda inferior quando há footer):\n  [Header: Icon? 44px brand | Badges direita]\n  [Title H-6: Space Grotesk 500, 26px, content/secondary]\n  [Desc B-3: Inter 400, 14px, content/tertiary]\nContainer 2 (footer, opcional):\n  [Figma ID B-4: Inter 500, 12px, content/tertiary | Badges direita]`,
    notes: 'Hover: border-color passa para border.default, background para surface.secondary. Gap entre containers: scale/spacing/md (12px). Container 1 recebe border-bottom + pb:12px quando há footer.',
    implemented: true,
    code: {
      html: `<!-- Card com footer (variante componente) — Design System TRDR (Figma: 2316:2462) -->
<a href="/destino" class="card">

  <!-- Container 1: conteúdo principal -->
  <div class="card-container1 card-has-footer">
    <div class="card-header">
      <!-- Ícone (opcional) -->
      <span class="card-icon material-symbols-outlined">palette</span>
      <!-- Badges do header (opcional) -->
      <div class="card-badges">
        <span class="trdr-badge trdr-badge-neutral">Tokens</span>
      </div>
    </div>
    <!-- H-6: Space Grotesk 500, 26px -->
    <span class="card-title">Design Tokens</span>
    <!-- B-3: Inter 400, 14px, content/tertiary -->
    <p class="card-desc">Cores, espaçamentos e tokens semânticos do design system.</p>
  </div>

  <!-- Container 2: footer (opcional) -->
  <div class="card-footer">
    <code class="card-figma-id">2316:2462</code>
    <div class="card-badges">
      <span class="trdr-badge trdr-badge-success">Implementado</span>
    </div>
  </div>

</a>`,
      css: `/* Card — Design System TRDR (Figma node: 2316:2462, 380×154) */
.card {
  display: flex;
  flex-direction: column;
  gap: var(--scale-spacing-md);          /* 12px entre container1 e footer */
  min-width: 250px;
  padding: var(--scale-spacing-2xl);     /* 24px */
  background: var(--surface-tertiary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--scale-radius-md); /* 12px */
  text-decoration: none;
  overflow: hidden;
  transition: border-color 0.15s ease, background-color 0.15s ease;
  cursor: pointer;
}

.card:hover {
  border-color: var(--border-default);
  background: var(--surface-secondary);
}

/* Container 1 — conteúdo principal */
.card-container1 {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
}

/* Borda inferior quando há footer */
.card-has-footer {
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: var(--scale-spacing-md); /* 12px */
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

/* Material Symbols Outlined — ExtraLight (wght 100) */
.card-icon {
  font-family: 'Material Symbols Outlined';
  font-size: 44px;
  font-style: normal;
  line-height: 1;
  color: var(--content-brand);
  font-variation-settings: 'FILL' 0, 'GRAD' 0, 'wght' 100, 'opsz' 48;
}

.card-badges {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

/* H-6: Space Grotesk Medium 500, 26px */
.card-title {
  font-family: var(--font-primary); /* Space Grotesk */
  font-size: 26px;
  font-weight: 500;
  line-height: 1.1;
  color: var(--content-secondary);
}

/* B-3: Inter Regular 400, 14px */
.card-desc {
  font-family: var(--font-secondary); /* Inter */
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--content-tertiary);
  margin: 0;
}

/* Container 2 — footer */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* B-4: Inter Medium 500, 12px, 0.2px tracking */
.card-figma-id {
  font-family: var(--font-secondary);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: var(--content-tertiary);
  font-style: normal;
}`,
      react: `'use client'
import Link from 'next/link'
import styles from './Card.module.css'

interface CardBadge {
  label: string
  variant?: 'neutral' | 'brand' | 'success'
}

interface CardProps {
  href: string
  icon?: string             // Material Symbols Outlined name (ex: 'palette')
  title: string
  description: string
  headerBadges?: CardBadge[] // badges no header (topo direito)
  footerLeft?: string        // texto do footer (ex: Figma ID '2316:2462')
  footerBadges?: CardBadge[] // badges do footer
  className?: string
}

export default function Card({
  href, icon, title, description,
  headerBadges, footerLeft, footerBadges, className = '',
}: CardProps) {
  const hasFooter = footerLeft || (footerBadges && footerBadges.length > 0)

  return (
    <Link href={href} className={\`\${styles.card} \${className}\`}>

      {/* Container 1 — conteúdo principal */}
      <div className={\`\${styles.container1} \${hasFooter ? styles.hasBorder : ''}\`}>
        <div className={styles.header}>
          {icon && (
            <span
              className={styles.icon}
              style={{ fontVariationSettings: "'FILL' 0, 'GRAD' 0, 'wght' 100, 'opsz' 48" }}
            >
              {icon}
            </span>
          )}
          {headerBadges && headerBadges.length > 0 && (
            <div className={styles.badges}>
              {headerBadges.map(b => (
                <span key={b.label} className={\`trdr-badge trdr-badge-\${b.variant ?? 'neutral'}\`}>
                  {b.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className={styles.title}>{title}</span>
        <p className={styles.desc}>{description}</p>
      </div>

      {/* Container 2 — footer (opcional) */}
      {hasFooter && (
        <div className={styles.container2}>
          {footerLeft && <code className={styles.footerLeft}>{footerLeft}</code>}
          {footerBadges && footerBadges.length > 0 && (
            <div className={styles.badges}>
              {footerBadges.map(b => (
                <span key={b.label} className={\`trdr-badge trdr-badge-\${b.variant ?? 'neutral'}\`}>
                  {b.label}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

    </Link>
  )
}

/* Card.module.css — estrutura dois containers */
/*
.card {
  display: flex; flex-direction: column;
  gap: var(--scale-spacing-md);
  padding: var(--scale-spacing-2xl);
  background: var(--surface-tertiary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--scale-radius-md);
  text-decoration: none; cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}
.card:hover { border-color: var(--border-default); background: var(--surface-secondary); }
.container1 { display: flex; flex-direction: column; gap: 8px; width: 100%; }
.hasBorder { border-bottom: 1px solid var(--border-subtle); padding-bottom: var(--scale-spacing-md); }
.header { display: flex; align-items: flex-start; justify-content: space-between; width: 100%; }
.icon { font-family: 'Material Symbols Outlined'; font-size: 44px; color: var(--content-brand); }
.badges { display: flex; align-items: center; gap: 4px; }
.title { font-family: var(--font-primary); font-size: 26px; font-weight: 500; color: var(--content-secondary); }
.desc { font-family: var(--font-secondary); font-size: 14px; font-weight: 400; color: var(--content-tertiary); margin: 0; }
.container2 { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.footerLeft { font-family: var(--font-secondary); font-size: 12px; font-weight: 500; letter-spacing: 0.2px; color: var(--content-tertiary); }
*/`,
      prompt: `Implemente o componente Card do Design System TRDR.
Referência Figma: nó 2316:2462 (380×154)

Estrutura de dois containers separados por borda:

Container 1 (conteúdo principal):
- Header: ícone Material Symbols Outlined 44px ExtraLight (wght 100) em var(--content-brand) à esquerda + badges à direita (opcional)
- Título H-6: Space Grotesk Medium 500, 26px, line-height 1.1, var(--content-secondary)
- Descrição B-3: Inter Regular 400, 14px, line-height 1.2, var(--content-tertiary)
- Quando há footer: recebe border-bottom 1px solid var(--border-subtle) + padding-bottom 12px

Container 2 (footer, opcional):
- Esquerda: Figma ID em B-4 (Inter Medium 500, 12px, 0.2px tracking, var(--content-tertiary))
- Direita: badges (trdr-badge-success = implementado, trdr-badge-brand = código)

Tokens TRDR obrigatórios:
- Background: var(--surface-tertiary) → hover: var(--surface-secondary)
- Border: 1px solid var(--border-subtle) → hover: var(--border-default)
- Border radius: var(--scale-radius-md) — 12px
- Padding: var(--scale-spacing-2xl) — 24px
- Gap entre containers: var(--scale-spacing-md) — 12px
- Transição: border-color e background-color em 0.15s ease

Implemente como componente React com CSS Module. Use as classes .trdr-badge e .trdr-badge-{variant} para os badges. O componente deve aceitar as props: href, icon?, title, description, headerBadges?, footerLeft?, footerBadges?.`,
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
