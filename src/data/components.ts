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
    description: 'Campo de texto com 3 variantes (Single Line, Multi Line, Quick Action), estados de validação e 2 tamanhos.',
    props: [
      { name: 'variant', type: 'enum', values: ['single-line', 'multi-line', 'quick-action'] },
      { name: 'size', type: 'enum', values: ['default', 'large'] },
      { name: 'validation', type: 'enum', values: ['default', 'error', 'warning', 'success'] },
      { name: 'iconLeft', type: 'boolean', values: ['true', 'false'] },
      { name: 'disabled', type: 'boolean', values: ['true', 'false'] },
      { name: 'readOnly', type: 'boolean', values: ['true', 'false'] },
      { name: 'placeholder', type: 'string', values: [] },
      { name: 'onClear', type: 'function', values: [] },
    ],
    dimensions: [
      { label: 'Default (Single Line)', height: '24px', width: '—' },
      { label: 'Large (Single Line)', height: '32px', width: '—' },
      { label: 'Quick Action', height: '32px', width: '—' },
      { label: 'Multi Line', height: 'auto (min 56px)', width: '—' },
      { label: 'Icon slot', height: '24px', width: '24px' },
    ],
    tokens: [
      { property: 'Background', token: 'surface-primary', value: '#4A4A4A' },
      { property: 'Border focus', token: 'border-focus', value: '#65B0FF' },
      { property: 'Border multi-line/disabled', token: 'border-strong', value: '#A4A4A4' },
      { property: 'Texto preenchido', token: 'content-primary', value: '#FFFFFF' },
      { property: 'Placeholder', token: 'content-tertiary', value: '#A4A4A4' },
      { property: 'Texto disabled', token: 'content-disabled', value: '#4A4A4A' },
      { property: 'Borda error', token: 'content-error', value: '#F34F45' },
      { property: 'Borda warning', token: 'content-warning', value: '#FFCC40' },
      { property: 'Borda success', token: 'content-success', value: '#4FE290' },
    ],
    anatomy: `[div wrapper h=24px border-radius=5px bg=surface-primary border=transparent]
  └── [span icon-slot 24×24px, opcional] → ícone de busca 13px
  └── [input flex=1 bg=transparent no-border]
  └── [button clear 24×24px, opcional, aparece quando iconLeft + value]
— Multi Line: [div wrapper padding=4px_8px border=border-strong auto-height]
  └── [textarea flex=1 resize=none]
— Quick Action: padding=0_4px gap=8px sempre com icon-slot`,
    notes: 'Quick Action é uma variante compacta para inputs em toolbars e painéis de trading. Border radius fixo: 5px (não token). O botão clear só aparece quando iconLeft=true e há valor digitado.',
    implemented: true,
    code: {
      html: `<!-- Single Line Default -->
<div class="trdr-text-input">
  <input type="text" placeholder="Placeholder" />
</div>

<!-- Single Line Large -->
<div class="trdr-text-input trdr-text-input-lg">
  <input type="text" placeholder="Placeholder" />
</div>

<!-- Com ícone esquerdo e botão clear -->
<div class="trdr-text-input trdr-text-input-icon">
  <span class="trdr-text-input-icon-slot" aria-hidden="true">
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M9 9L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </span>
  <input type="text" placeholder="Buscar..." value="WINFUT" />
  <button class="trdr-text-input-clear" type="button" aria-label="Limpar campo">
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path d="M1 1L10 10M10 1L1 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>
</div>

<!-- Quick Action -->
<div class="trdr-text-input trdr-text-input-quick">
  <span class="trdr-text-input-icon-slot" aria-hidden="true">...</span>
  <input type="text" placeholder="Buscar..." />
</div>

<!-- Multi Line -->
<div class="trdr-text-input trdr-text-input-multiline">
  <textarea rows="3" placeholder="Observações..."></textarea>
</div>

<!-- Error / Warning / Success -->
<div class="trdr-text-input trdr-text-input-error">
  <input type="text" value="Valor inválido" />
</div>

<!-- Disabled -->
<div class="trdr-text-input trdr-text-input-disabled">
  <input type="text" value="Indisponível" disabled />
</div>`,
      css: `.trdr-text-input {
  display: inline-flex;
  align-items: center;
  background-color: var(--surface-primary);   /* #4A4A4A */
  border: 1px solid transparent;
  border-radius: 5px;                          /* fixo, não token */
  height: 24px;
  padding: 0 8px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
}

.trdr-text-input:focus-within { border-color: var(--border-focus); /* #65B0FF */ }

.trdr-text-input-lg         { height: 32px; }
.trdr-text-input-icon       { padding: 0; }
.trdr-text-input-lg.trdr-text-input-icon { padding: 0 4px; }

.trdr-text-input-quick { height: 32px; padding: 0 4px; gap: 8px; }

.trdr-text-input-multiline {
  height: auto; min-height: 56px;
  align-items: flex-start; padding: 4px 8px;
  border-color: var(--border-strong);          /* #A4A4A4 */
}
.trdr-text-input-multiline:focus-within { border-color: var(--border-focus); }

.trdr-text-input-error,   .trdr-text-input-error:focus-within   { border-color: var(--content-error); }
.trdr-text-input-warning, .trdr-text-input-warning:focus-within { border-color: var(--content-warning); }
.trdr-text-input-success, .trdr-text-input-success:focus-within { border-color: var(--content-success); }

.trdr-text-input-disabled,
.trdr-text-input-disabled:focus-within { border-color: var(--border-strong); cursor: not-allowed; }

.trdr-text-input input,
.trdr-text-input textarea {
  flex: 1; min-width: 0; background: transparent;
  border: none; outline: none;
  color: var(--content-primary);              /* #FFFFFF */
  font-size: 11px; font-weight: 450; letter-spacing: 0.055px; line-height: 16px;
  padding: 0; width: 100%; resize: none;
}

.trdr-text-input input::placeholder,
.trdr-text-input textarea::placeholder { color: var(--content-tertiary); /* #A4A4A4 */ }

.trdr-text-input-lg input,
.trdr-text-input-quick input { font-size: 12px; font-weight: 500; letter-spacing: 0.2px; }

.trdr-text-input-disabled input,
.trdr-text-input-disabled textarea { color: var(--content-disabled); cursor: not-allowed; }`,
      react: `import TextInput from '@/components/ui/TextInput'

// Single Line Default
<TextInput placeholder="Placeholder" />

// Single Line Large
<TextInput size="large" placeholder="Placeholder" />

// Com ícone e clear
const [val, setVal] = useState('')
<TextInput
  iconLeft
  placeholder="Buscar instrumento..."
  value={val}
  onChange={e => setVal(e.target.value)}
  onClear={() => setVal('')}
/>

// Quick Action (toolbar)
<TextInput
  variant="quick-action"
  placeholder="Filtrar..."
  value={val}
  onChange={e => setVal(e.target.value)}
  onClear={() => setVal('')}
/>

// Multi Line (textarea)
<TextInput
  variant="multi-line"
  rows={4}
  placeholder="Observações..."
  value={val}
  onChange={e => setVal(e.target.value)}
/>

// Validação
<TextInput validation="error" value="Valor inválido" />
<TextInput validation="warning" value="Verifique" />
<TextInput validation="success" value="Confirmado" />

// Disabled / Read Only
<TextInput disabled value="Indisponível" />
<TextInput readOnly value="Somente leitura" />`,
      prompt: `Implemente o componente TextInput do Design System TRDR.

VARIANTES:
- single-line (padrão): <input type="text"> dentro de um wrapper div
- multi-line: <textarea> dentro do wrapper, altura auto (min 56px)
- quick-action: como single-line mas sempre com icon-left, padding compacto

TAMANHOS:
- default: height 24px, padding 0 8px, font 11px/450
- large:   height 32px, padding 0 8px (sem icon) / 0 4px (com icon), font 12px/500
- Quick Action é sempre large (32px)

TOKENS OBRIGATÓRIOS:
- Background: --surface-primary (#4A4A4A)
- Border focus: --border-focus (#65B0FF) — via :focus-within no wrapper
- Border multi-line/disabled: --border-strong (#A4A4A4)
- Texto: --content-primary (#FFFFFF)
- Placeholder: --content-tertiary (#A4A4A4)
- Texto disabled: --content-disabled (#4A4A4A)
- Border error: --content-error (#F34F45)
- Border warning: --content-warning (#FFCC40)
- Border success: --content-success (#4FE290)

BORDER RADIUS: 5px FIXO (não usar token de radius)

ICON LEFT:
- Container 24×24px, ícone de busca SVG 13px centralizado
- Quick Action sempre tem icon, Single Line e Large são opcionais
- Com icon: wrapper sem padding (0) em Default | padding 0 4px em Large

BOTÃO CLEAR (X):
- Aparece apenas quando iconLeft=true + value não vazio + não disabled
- Container 24×24px, SVG X 11px, cor content-tertiary, hover: content-primary
- tabIndex={-1} para não receber foco via tab

MULTI LINE:
- Border default sempre visível: var(--border-strong) — diferente do Single Line
- padding: 4px 8px (não 0 8px)
- Altura automática via textarea nativo (não height fixo)

ESTADOS CSS:
- :focus-within no wrapper = borda focus (não no input)
- disabled: borda strong + cursor not-allowed em wrapper E input
- readOnly: sem borda adicional, cursor default
- Validação: error/warning/success sobrescreve a borda (inclusive no focus)

Resultado deve ser pixel-perfect em relação ao Figma node 1327:17000.`,
    },
  },
  {
    slug: 'dropdown',
    name: 'Dropdown',
    figmaId: '1462:16743',
    category: 'formulario',
    description: 'Seletor com chevron, 2 tamanhos (Default 24px / Large 32px) e 3 estados. Suporta stroke, sem stroke e icon lead. Abre um floating menu com opções.',
    props: [
      { name: 'Size', type: 'enum', values: ['Default', 'Large'] },
      { name: 'State', type: 'enum', values: ['Default', 'Focused', 'Active', 'Disabled'] },
      { name: 'Stroke', type: 'boolean', values: ['true', 'false'] },
      { name: 'Icon Lead', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Default', height: '24px' },
      { label: 'Large', height: '32px' },
    ],
    tokens: [
      { property: 'Background', token: 'surface-primary', value: '#4A4A4A' },
      { property: 'Border padrão', token: 'border-strong', value: '#A4A4A4' },
      { property: 'Border focused/active', token: 'border-focus', value: '#65B0FF' },
      { property: 'Texto', token: 'content-primary', value: '#FFFFFF' },
      { property: 'Texto disabled', token: 'content-tertiary', value: '#A4A4A4' },
      { property: 'Chevron', token: 'content-tertiary', value: '#A4A4A4' },
    ],
    anatomy: `[button display=inline-flex border-radius=5px]
  └── [Icon Lead 24×24px opcional]
  └── [Label flex=1 overflow=ellipsis]
  └── [Chevron Down 24×24px]`,
    implemented: true,
    code: {
      html: `<!-- Default -->
<button class="trdr-dropdown">
  <span class="trdr-dropdown-label">Mercado</span>
  <span class="trdr-dropdown-chevron">
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
</button>

<!-- Large -->
<button class="trdr-dropdown trdr-dropdown-lg">
  <span class="trdr-dropdown-label">Instrumento</span>
  <span class="trdr-dropdown-chevron">...</span>
</button>

<!-- Disabled -->
<button class="trdr-dropdown" disabled>
  <span class="trdr-dropdown-label">Indisponível</span>
  <span class="trdr-dropdown-chevron">...</span>
</button>`,
      css: `.trdr-dropdown {
  display: inline-flex;
  align-items: center;
  background-color: var(--surface-primary);   /* #4A4A4A */
  border: 1px solid var(--border-strong);      /* #A4A4A4 */
  border-radius: 5px;
  height: 24px;
  padding: 0 4px 0 var(--spacing-sm);         /* right=4px, left=8px */
  font-family: var(--font-secondary);
  font-size: 12px;
  font-weight: 500;
  color: var(--content-primary);              /* #FFFFFF */
  cursor: pointer;
  min-width: 80px;
  transition: border-color 0.15s ease;
}

.trdr-dropdown-lg       { height: 32px; }
.trdr-dropdown-no-stroke { border-color: transparent; }
.trdr-dropdown-active   { border-color: var(--border-focus); } /* #65B0FF */

.trdr-dropdown:hover:not(:disabled) { border-color: var(--border-focus); }
.trdr-dropdown:focus-visible        { outline: none; border-color: var(--border-focus); }
.trdr-dropdown:disabled             { color: var(--content-tertiary); cursor: not-allowed; }

.trdr-dropdown-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.trdr-dropdown-chevron {
  flex-shrink: 0;
  width: 24px; height: 24px;
  display: flex; align-items: center; justify-content: center;
  color: var(--content-tertiary);
}`,
      react: `import Dropdown from '@/components/ui/Dropdown'
import { useState } from 'react'

export default function Example() {
  const [value, setValue] = useState('WINQ25')

  return (
    <>
      {/* Default size */}
      <Dropdown value={value} size="default" />

      {/* Large size */}
      <Dropdown value="WINFUT" size="lg" />

      {/* Sem borda */}
      <Dropdown value="Mercado" stroke={false} />

      {/* Disabled */}
      <Dropdown value="Indisponível" disabled />

      {/* Active (aberto) */}
      <Dropdown value={value} state="active" />
    </>
  )
}`,
      prompt: `Implemente o componente Dropdown do Design System TRDR.

ESPECIFICAÇÕES PIXEL-PERFECT:
- Default: 24px altura | Large: 32px altura
- Padding: left=8px (--spacing-sm), right=4px
- Border-radius: 5px (não é --radius-sm, é 5px fixo)
- Font: 12px / 500 / --font-secondary

TOKENS OBRIGATÓRIOS:
- Background: --surface-primary (#4A4A4A)
- Border padrão: --border-strong (#A4A4A4)
- Border focused/active: --border-focus (#65B0FF)
- Texto: --content-primary (#FFFFFF)
- Texto disabled: --content-tertiary (#A4A4A4)
- Chevron: --content-tertiary (#A4A4A4)

ESTRUTURA:
- Container: button com flex, border, bg
- Label: flex=1 com text-overflow ellipsis
- Chevron: 24×24px, SVG path chevron-down

COMPORTAMENTO:
- :hover → border-color: --border-focus
- :focus-visible → outline: none, border-color: --border-focus
- .trdr-dropdown-active → border-color: --border-focus
- :disabled → content-tertiary, cursor not-allowed
- Variante sem-stroke: border-color transparent`,
    },
  },
  {
    slug: 'combo-input',
    name: 'Combo Input',
    figmaId: '1551:11643',
    category: 'formulario',
    description: 'Input numérico split: área de valor (flex-1) + botão chevron (24×24px) separados por 1px gap. Altura 24px.',
    props: [
      { name: 'State', type: 'enum', values: ['Default', 'Hover', 'Selected Input', 'Selected Chevron'] },
      { name: 'Icon Lead', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Altura', height: '24px' },
      { label: 'Chevron', width: '24px', height: '24px' },
    ],
    tokens: [
      { property: 'BG value', token: 'surface-primary', value: '#4A4A4A' },
      { property: 'BG chevron default', token: 'surface-primary', value: '#4A4A4A' },
      { property: 'Chevron border', token: 'border-focus', value: '#65B0FF' },
      { property: 'Border hover', token: 'border-strong', value: '#A4A4A4' },
      { property: 'Selected chevron bg', token: 'surface-brand', value: 'rgba(0,82,204,0.16)' },
      { property: 'Texto', token: 'content-primary', value: '#FFFFFF' },
    ],
    anatomy: `[div display=flex gap=1px height=24px]
  └── [Input Value: flex=1, radius=5px 0 0 5px, bg=surface-primary]
        └── [Icon Lead 24×24px opcional]
        └── [Valor numérico 12px/500]
  └── [Chevron: 24×24px, radius=0 5px 5px 0, border=border-focus]
        └── [ChevronDown SVG]`,
    implemented: true,
    code: {
      html: `<!-- Default -->
<div class="trdr-combo-input">
  <div class="trdr-combo-input-value">16</div>
  <button class="trdr-combo-input-chevron" aria-label="Abrir opções">
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>

<!-- Hover -->
<div class="trdr-combo-input trdr-combo-input-hover">
  <div class="trdr-combo-input-value">16</div>
  <button class="trdr-combo-input-chevron">...</button>
</div>

<!-- Selected Input -->
<div class="trdr-combo-input trdr-combo-input-selected-input">
  <div class="trdr-combo-input-value">16</div>
  <button class="trdr-combo-input-chevron">...</button>
</div>`,
      css: `.trdr-combo-input {
  display: inline-flex;
  align-items: stretch;
  gap: 1px;                        /* Split visual */
  height: 24px;
  font-family: var(--font-secondary);
  font-size: 12px; font-weight: 500;
  color: var(--content-primary);
}

.trdr-combo-input-value {
  flex: 1;
  display: flex; align-items: center;
  background-color: var(--surface-primary);  /* #4A4A4A */
  border: 1px solid transparent;
  border-right: none;
  border-radius: 5px 0 0 5px;
  padding: 0 0 0 var(--spacing-sm);
  transition: border-color 0.12s ease;
}

.trdr-combo-input-chevron {
  width: 24px; height: 24px;
  display: flex; align-items: center; justify-content: center;
  background-color: var(--surface-primary);
  border: 1px solid var(--border-focus);   /* Sempre com borda focus */
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  color: var(--content-tertiary);
}

.trdr-combo-input-hover .trdr-combo-input-value { border-color: var(--border-strong); }
.trdr-combo-input-selected-input .trdr-combo-input-value { border-color: var(--border-focus); }
.trdr-combo-input-selected-input .trdr-combo-input-chevron { border-color: transparent; }
.trdr-combo-input-selected-chevron .trdr-combo-input-chevron { background: var(--surface-brand); }`,
      react: `import ComboInput from '@/components/ui/ComboInput'
import { useState } from 'react'

export default function Example() {
  const [value, setValue] = useState('16')

  return (
    <>
      <ComboInput value={value} />
      <ComboInput value="32" state="hover" />
      <ComboInput value="8" state="selected-input" />
      <ComboInput value="16" state="selected-chevron" onChevronClick={() => console.log('abrir menu')} />
    </>
  )
}`,
      prompt: `Implemente o componente ComboInput do Design System TRDR.

ESPECIFICAÇÕES PIXEL-PERFECT:
- Container: display=flex, gap=1px, height=24px
- Input Value: flex=1, padding-left=8px, border-radius=5px 0 0 5px
- Chevron: width=24px, height=24px, border-radius=0 5px 5px 0

TOKENS OBRIGATÓRIOS:
- BG ambas as seções: --surface-primary (#4A4A4A)
- Chevron border PADRÃO: --border-focus (#65B0FF) — SEMPRE azul por padrão
- Border hover: --border-strong (#A4A4A4) na seção input
- Selected Input: border-focus na seção input, chevron sem borda
- Selected Chevron: --surface-brand (rgba(0,82,204,0.16)) no chevron

COMPORTAMENTO:
- O gap de 1px entre seções cria o "split" visual
- O chevron sempre tem borda focus no estado default (design TRDR)
- Selecionar o input ativa borda focus na seção esquerda`,
    },
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    figmaId: '1462:18059',
    category: 'formulario',
    description: 'Caixa de seleção com 3 estados: Checked, Unchecked e Mixed (indeterminado). 16×16px, border-radius 5px.',
    props: [
      { name: 'Type', type: 'enum', values: ['Checked', 'Unchecked', 'Mixed'] },
      { name: 'State', type: 'enum', values: ['Default', 'Focused'] },
      { name: 'Disabled', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Box', width: '16px', height: '16px' },
    ],
    tokens: [
      { property: 'BG Checked / Mixed', token: 'action-brand-default', value: '#3D99FF' },
      { property: 'BG Unchecked', token: 'surface-secondary', value: '#222222' },
      { property: 'Border padrão', token: 'border-default', value: '#4A4A4A' },
      { property: 'Border hover', token: 'border-strong', value: '#A4A4A4' },
      { property: 'Focus ring', token: 'border-focus', value: '#65B0FF' },
      { property: 'Check / Dash', token: '—', value: '#FFFFFF' },
    ],
    anatomy: `[label cursor=pointer gap=8px]
  └── [input type=checkbox hidden]
  └── [Box 16×16px border-radius=5px]
        └── [Checkmark SVG 8×7px | Dash SVG 8×2px (mixed)]
  └── [Label 12px/500]`,
    implemented: true,
    code: {
      html: `<!-- Checked -->
<label class="trdr-checkbox">
  <input type="checkbox" checked />
  <span class="trdr-checkbox-box trdr-checkbox-checked">
    <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
      <path d="M1 3L3 5.5L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
  <span>Aceitar termos</span>
</label>

<!-- Unchecked -->
<label class="trdr-checkbox">
  <input type="checkbox" />
  <span class="trdr-checkbox-box"></span>
  <span>Receber atualizações</span>
</label>

<!-- Mixed (indeterminado) -->
<label class="trdr-checkbox">
  <input type="checkbox" />
  <span class="trdr-checkbox-box trdr-checkbox-checked trdr-checkbox-mixed">
    <svg width="8" height="2" viewBox="0 0 8 2" fill="none">
      <path d="M1 1H7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </span>
  <span>Selecionar todos</span>
</label>`,
      css: `.trdr-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.trdr-checkbox-box {
  flex-shrink: 0;
  width: 16px; height: 16px;
  border-radius: 5px;                        /* Não é --radius-sm */
  border: 1px solid var(--border-default);   /* #4A4A4A */
  background: var(--surface-secondary);      /* #222222 */
  display: flex; align-items: center; justify-content: center;
  transition: background 0.12s ease, border-color 0.12s ease;
}

.trdr-checkbox:hover .trdr-checkbox-box { border-color: var(--border-strong); }

.trdr-checkbox-box.trdr-checkbox-checked {
  background: var(--action-brand-default);   /* #3D99FF */
  border-color: var(--action-brand-default);
}

.trdr-checkbox input:focus-visible ~ .trdr-checkbox-box {
  outline: 2px solid var(--border-focus);    /* #65B0FF */
  outline-offset: 2px;
}`,
      react: `import Checkbox from '@/components/ui/Checkbox'
import { useState } from 'react'

export default function Example() {
  const [terms, setTerms] = useState(false)
  const [updates, setUpdates] = useState<boolean | 'mixed'>('mixed')

  return (
    <>
      <Checkbox checked={terms} onChange={setTerms} label="Aceitar termos" />
      <Checkbox checked={updates} onChange={(v) => setUpdates(v)} label="Selecionar todos" />
      <Checkbox checked={false} onChange={() => {}} label="Desativado" disabled />
    </>
  )
}`,
      prompt: `Implemente o componente Checkbox do Design System TRDR.

ESPECIFICAÇÕES PIXEL-PERFECT:
- Box: 16×16px, border-radius: 5px (fixo, não token)
- Gap label: 8px
- Checkmark SVG: 8×7px, traço branco (stroke 1.5)
- Mixed (indeterminado): traço horizontal 8×2px branco

TOKENS OBRIGATÓRIOS:
- BG Checked/Mixed: --action-brand-default (#3D99FF)
- BG Unchecked: --surface-secondary (#222222)
- Border padrão: --border-default (#4A4A4A)
- Border hover: --border-strong (#A4A4A4)
- Focus ring: outline 2px --border-focus (#65B0FF) offset 2px
- Check/Dash: #FFFFFF

ESTADOS:
- checked=true: bg + border = action-brand-default, checkmark SVG visível
- checked='mixed': mesmo visual de checked + dash horizontal
- :hover → border-strong
- :focus-visible → outline border-focus
- disabled: opacity 0.5, cursor not-allowed`,
    },
  },
  {
    slug: 'radio-button',
    name: 'Radio Button',
    figmaId: '1916:46361',
    category: 'formulario',
    description: 'Seleção única com 2 variantes: Input (círculo 16×16px) e Button (pill 24px). Estados: Default, Active, Focused, Disabled.',
    props: [
      { name: 'Variant', type: 'enum', values: ['Input', 'Button'] },
      { name: 'State', type: 'enum', values: ['Default', 'Active', 'Focused', 'Disabled'] },
      { name: 'Label', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Input circle', width: '16px', height: '16px' },
      { label: 'Button pill', height: '24px' },
    ],
    tokens: [
      { property: 'Circle On bg', token: 'action-brand-default', value: '#3D99FF' },
      { property: 'Circle Off bg', token: 'surface-secondary', value: '#222222' },
      { property: 'Circle border', token: 'border-default', value: '#4A4A4A' },
      { property: 'Dot (On)', token: '—', value: '#FFFFFF' },
      { property: 'Focus ring', token: 'border-focus', value: '#65B0FF' },
      { property: 'Button border default', token: 'border-subtle', value: '#222222' },
      { property: 'Button border active', token: 'border-default', value: '#4A4A4A' },
      { property: 'Button bg active', token: 'surface-brand', value: 'rgba(0,82,204,0.16)' },
    ],
    anatomy: `[Input] → label > input[type=radio] hidden + círculo 16×16px + label text
[Button] → button pill 24px height | border varia por estado`,
    implemented: true,
    code: {
      html: `<!-- Input On -->
<label class="trdr-radio-input">
  <input type="radio" name="mercado" checked />
  <span class="trdr-radio-circle trdr-radio-circle-on"></span>
  <span>WINQ25</span>
</label>

<!-- Input Off -->
<label class="trdr-radio-input">
  <input type="radio" name="mercado" />
  <span class="trdr-radio-circle"></span>
  <span>WINFUT</span>
</label>

<!-- Button Default -->
<button class="trdr-radio-button">Label</button>

<!-- Button Active -->
<button class="trdr-radio-button trdr-radio-button-active">Label</button>`,
      css: `.trdr-radio-input {
  display: inline-flex; align-items: center;
  gap: var(--spacing-sm); cursor: pointer;
  font-family: var(--font-secondary); font-size: 12px; font-weight: 500;
  color: var(--content-primary);
}

.trdr-radio-circle {
  flex-shrink: 0; width: 16px; height: 16px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-default);   /* #4A4A4A */
  background: var(--surface-secondary);       /* #222222 */
  display: flex; align-items: center; justify-content: center;
  position: relative;
  transition: border-color 0.12s ease, background 0.12s ease;
}

.trdr-radio-circle-on {
  background: var(--action-brand-default);
  border-color: var(--action-brand-default);
}

.trdr-radio-circle-on::after {
  content: ''; width: 6px; height: 6px;
  border-radius: var(--radius-full);
  background: #ffffff;
}

.trdr-radio-button {
  display: inline-flex; align-items: center; justify-content: center;
  height: 24px; padding: 0 var(--spacing-sm); border-radius: 5px;
  border: 1px solid var(--border-subtle);    /* #222222 */
  font-family: var(--font-secondary); font-size: 12px; font-weight: 500;
  color: var(--content-primary); cursor: pointer;
  transition: border-color 0.12s ease, background 0.12s ease;
}

.trdr-radio-button-active {
  background: var(--surface-brand);          /* rgba(0,82,204,0.16) */
  border-color: var(--border-default);
}

.trdr-radio-button:focus-visible { outline: none; border-color: var(--border-focus); }`,
      react: `import RadioButton from '@/components/ui/RadioButton'
import { useState } from 'react'

export default function Example() {
  const [selected, setSelected] = useState('winq25')

  return (
    <>
      {/* Input variant */}
      <RadioButton
        variant="input"
        checked={selected === 'winq25'}
        label="WINQ25"
        onChange={() => setSelected('winq25')}
        name="mercado"
      />
      <RadioButton
        variant="input"
        checked={selected === 'winfut'}
        label="WINFUT"
        onChange={() => setSelected('winfut')}
        name="mercado"
      />

      {/* Button variant */}
      <RadioButton variant="button" label="Boleta" state="active" />
      <RadioButton variant="button" label="Gráfico" />
      <RadioButton variant="button" label="Desativado" state="disabled" />
    </>
  )
}`,
      prompt: `Implemente o componente RadioButton do Design System TRDR com 2 variantes.

VARIANTE INPUT (círculo):
- Círculo: 16×16px, border-radius: 9999px (radius-full)
- Off: bg=--surface-secondary (#222222), border=--border-default (#4A4A4A)
- On: bg=--action-brand-default (#3D99FF), border=action-brand-default
  → Dot interno: 6×6px branco via ::after
- Hover Off: border=--border-strong (#A4A4A4)
- Focus: outline 2px --border-focus (#65B0FF) offset 2px

VARIANTE BUTTON (pill):
- Height: 24px, border-radius: 5px, padding: 0 8px
- Default: border=--border-subtle (#222222)
- Active: bg=--surface-brand (rgba(0,82,204,0.16)), border=--border-default
- Focused: border=--border-focus (#65B0FF)
- Disabled: opacity 0.6, cursor not-allowed

FONT: 12px / 500 / --font-secondary / --content-primary`,
    },
  },
  {
    slug: 'switch',
    name: 'Switch',
    figmaId: '1359:1740',
    category: 'formulario',
    description: 'Toggle on/off/mixed. Track de 32×16px com knob de 14px. Suporta estado indeterminado (mixed) com ícone de traço.',
    props: [
      { name: 'Type', type: 'enum', values: ['On', 'Off', 'Mixed'] },
      { name: 'Disabled', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Track', width: '32px', height: '16px' },
      { label: 'Knob', width: '14px', height: '14px' },
      { label: 'Componente total', height: '24px' },
    ],
    tokens: [
      { property: 'Track On / Mixed', token: 'action-brand-default', value: '#3D99FF' },
      { property: 'Track Off', token: 'surface-primary', value: '#4A4A4A' },
      { property: 'Track Disabled', token: 'surface-secondary', value: '#222222' },
      { property: 'Knob', token: '—', value: '#FFFFFF' },
      { property: 'Focus border', token: 'border-focus', value: '#65B0FF' },
      { property: 'Label padrão', token: 'content-primary', value: '#FFFFFF' },
      { property: 'Label disabled', token: 'content-tertiary', value: '#A4A4A4' },
    ],
    anatomy: `[button role=switch height=24px gap=8px]
  └── [Track 32×16px radius-full bg=action-brand-default|surface-primary]
        └── [Knob 14×14px radius-full white, esquerda=Off, direita=On]
        └── [Mixed: traço horizontal 8×1.5px branco centralizado]
  └── [Label 12px/500 font-secondary]`,
    notes: 'Knob: top=1px, left=1px (Off) ou right=1px (On). Foco via :focus-visible com outline border-focus.',
    implemented: true,
    code: {
      html: `<!-- On -->
<button class="trdr-switch" role="switch" aria-checked="true">
  <span class="trdr-switch-track trdr-switch-track-on">
    <span class="trdr-switch-knob"></span>
  </span>
  <span>Ativar notificações</span>
</button>

<!-- Off -->
<button class="trdr-switch" role="switch" aria-checked="false">
  <span class="trdr-switch-track">
    <span class="trdr-switch-knob"></span>
  </span>
  <span>Ativar notificações</span>
</button>

<!-- Mixed -->
<button class="trdr-switch" role="switch" aria-checked="mixed">
  <span class="trdr-switch-track trdr-switch-track-mixed">
    <span class="trdr-switch-mixed-icon">
      <span class="trdr-switch-mixed-dash"></span>
    </span>
  </span>
  <span>Ativar notificações</span>
</button>

<!-- Disabled -->
<button class="trdr-switch" role="switch" aria-checked="false" disabled>
  <span class="trdr-switch-track">
    <span class="trdr-switch-knob"></span>
  </span>
  <span>Desativado</span>
</button>`,
      css: `.trdr-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);         /* 8px */
  height: 24px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: var(--font-secondary);
  font-size: 12px;
  font-weight: 500;
  color: var(--content-primary);  /* #FFFFFF */
  letter-spacing: 0.2px;
  transition: color 0.15s ease;
}

.trdr-switch:disabled {
  cursor: not-allowed;
  color: var(--content-tertiary); /* #A4A4A4 */
}

.trdr-switch-track {
  position: relative;
  width: 32px;
  height: 16px;
  border-radius: var(--radius-full); /* 9999px */
  background-color: var(--surface-primary); /* #4A4A4A — Off */
  flex-shrink: 0;
  transition: background-color 0.15s ease;
}

.trdr-switch-track-on,
.trdr-switch-track-mixed {
  background-color: var(--action-brand-default); /* #3D99FF */
}

.trdr-switch:disabled .trdr-switch-track {
  background-color: var(--surface-secondary); /* #222222 */
}

.trdr-switch:focus-visible .trdr-switch-track {
  outline: 1px solid var(--border-focus); /* #65B0FF */
  outline-offset: 2px;
}

.trdr-switch-knob {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: var(--radius-full);
  background-color: #ffffff;
  top: 1px;
  left: 1px;
  transition: left 0.15s ease, right 0.15s ease;
}

.trdr-switch-track-on .trdr-switch-knob {
  left: auto;
  right: 1px;
}

.trdr-switch-mixed-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trdr-switch-mixed-dash {
  width: 8px;
  height: 1.5px;
  background-color: #ffffff;
  border-radius: 1px;
}`,
      react: `import Switch from '@/components/ui/Switch'
import { useState } from 'react'

export default function Example() {
  const [type, setType] = useState<'on' | 'off' | 'mixed'>('off')

  return (
    <Switch
      type={type}
      label="Ativar notificações"
      onChange={setType}
    />
  )
}

// Disabled
<Switch type="on" label="Sempre ativo" disabled />

// Mixed (indeterminado)
<Switch type="mixed" label="Configuração parcial" onChange={setType} />`,
      prompt: `Implemente o componente Switch do Design System TRDR.

ESPECIFICAÇÕES PIXEL-PERFECT:
- Track: 32×16px, border-radius: 9999px (--radius-full)
- Knob: 14×14px, border-radius: 9999px, cor #FFFFFF
- Knob Off: top=1px, left=1px | Knob On: top=1px, right=1px
- Gap track→label: 8px (--spacing-sm)
- Altura total: 24px
- Label: 12px, weight 500, font-secondary

TOKENS OBRIGATÓRIOS:
- Track On/Mixed: --action-brand-default (#3D99FF)
- Track Off: --surface-primary (#4A4A4A)
- Track Disabled: --surface-secondary (#222222)
- Knob: #FFFFFF (não tem token, é sempre branco)
- Focus outline: --border-focus (#65B0FF)
- Label padrão: --content-primary (#FFFFFF)
- Label disabled: --content-tertiary (#A4A4A4)

COMPORTAMENTO:
- role="switch", aria-checked="true"|"false"|"mixed"
- Estado Mixed: traço horizontal 8×1.5px branco centralizado no track
- Transição suave 0.15s no knob e background do track
- :focus-visible com outline no track (não no botão inteiro)
- :disabled: cursor not-allowed, label muted, track escurecido`,
    },
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
    description: 'Balão de ajuda contextual com seta direcional. 8 direções. Padding 12×8px, bg-primary, max-width 200px.',
    props: [
      { name: 'Direction', type: 'enum', values: ['TopCenter', 'TopLeft', 'TopRight', 'BottomCenter', 'BottomLeft', 'BottomRight', 'Right', 'Left'] },
      { name: 'Hotkey', type: 'boolean', values: ['true', 'false'] },
    ],
    dimensions: [
      { label: 'Padding H', width: '12px', height: '—' },
      { label: 'Padding V', height: '8px' },
      { label: 'Seta (caret)', width: '12px', height: '6px' },
      { label: 'Max width', width: '200px', height: '—' },
    ],
    tokens: [
      { property: 'Background', token: 'bg-primary', value: '#0E0E0E' },
      { property: 'Texto', token: 'content-primary', value: '#FFFFFF' },
      { property: 'Hotkey', token: 'content-secondary', value: '#E8E8E8' },
      { property: 'Seta', token: 'bg-primary', value: '#0E0E0E' },
      { property: 'Shadow', token: '—', value: 'drop-shadow 0.25px + 1.5px + 6px' },
    ],
    anatomy: `[div role=tooltip position=relative border-radius=5px]
  └── [Content: flex gap=4px padding=8px/12px]
        └── [Texto flex=1]
        └── [Hotkey opcional]
  └── [Seta 12×6px CSS clip-path absolute]`,
    implemented: true,
    code: {
      html: `<!-- TopCenter -->
<div class="trdr-tooltip trdr-tooltip-top-center" role="tooltip">
  <div class="trdr-tooltip-content">
    <span>Tooltip text</span>
    <span class="trdr-tooltip-hotkey">⌘V</span>
  </div>
  <span class="trdr-tooltip-arrow trdr-tooltip-arrow-up" aria-hidden="true"></span>
</div>

<!-- BottomLeft -->
<div class="trdr-tooltip trdr-tooltip-bottom-left" role="tooltip">
  <div class="trdr-tooltip-content">
    <span>Alinhar à esquerda</span>
  </div>
  <span class="trdr-tooltip-arrow trdr-tooltip-arrow-down" aria-hidden="true"></span>
</div>`,
      css: `.trdr-tooltip {
  position: relative;
  display: inline-flex; flex-direction: column; align-items: center;
  max-width: 200px;
  background-color: var(--bg-primary);  /* #0E0E0E */
  border-radius: 5px;
  filter: drop-shadow(0px 0px 0.25px rgba(0,0,0,0.15)) drop-shadow(0px 5px 6px rgba(0,0,0,0.13));
}

.trdr-tooltip-content {
  display: flex; align-items: center; gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);  /* 8px / 12px */
  font-family: var(--font-secondary); font-size: 12px; font-weight: 500;
  color: var(--content-primary); white-space: nowrap;
}

.trdr-tooltip-hotkey { color: var(--content-secondary); }

.trdr-tooltip-arrow {
  position: absolute;
  width: 12px; height: 6px;
  background-color: var(--bg-primary);
}

.trdr-tooltip-arrow-up    { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
.trdr-tooltip-arrow-down  { clip-path: polygon(0% 0%, 100% 0%, 50% 100%); }
.trdr-tooltip-arrow-left  { width: 6px; height: 12px; clip-path: polygon(0% 50%, 100% 0%, 100% 100%); }
.trdr-tooltip-arrow-right { width: 6px; height: 12px; clip-path: polygon(0% 0%, 100% 50%, 0% 100%); }

.trdr-tooltip-top-center    .trdr-tooltip-arrow { top: -6px; left: 50%; transform: translateX(-50%); }
.trdr-tooltip-top-left      .trdr-tooltip-arrow { top: -6px; left: 8px; }
.trdr-tooltip-top-right     .trdr-tooltip-arrow { top: -6px; right: 8px; }
.trdr-tooltip-bottom-center .trdr-tooltip-arrow { bottom: -6px; left: 50%; transform: translateX(-50%); }
.trdr-tooltip-bottom-left   .trdr-tooltip-arrow { bottom: -6px; left: 8px; }
.trdr-tooltip-bottom-right  .trdr-tooltip-arrow { bottom: -6px; right: 8px; }
.trdr-tooltip-right         .trdr-tooltip-arrow { top: 50%; right: -6px; transform: translateY(-50%); }
.trdr-tooltip-left          .trdr-tooltip-arrow { top: 50%; left: -6px; transform: translateY(-50%); }`,
      react: `import Tooltip from '@/components/ui/Tooltip'

export default function Example() {
  return (
    <>
      <Tooltip text="Salvar" hotkey="⌘S" direction="top-center" />
      <Tooltip text="Alinhar à esquerda" direction="bottom-left" />
      <Tooltip text="Mais opções" direction="right" />
      <Tooltip text="Voltar" direction="left" />
    </>
  )
}`,
      prompt: `Implemente o componente Tooltip do Design System TRDR.

ESPECIFICAÇÕES PIXEL-PERFECT:
- Background: --bg-primary (#0E0E0E)
- Border-radius: 5px
- Padding: 8px vertical, 12px horizontal (--spacing-sm / --spacing-md)
- Max-width: 200px
- Font: 12px / 500 / --font-secondary
- Seta (caret): 12×6px via CSS clip-path, bg = --bg-primary

TOKENS OBRIGATÓRIOS:
- Background + seta: --bg-primary (#0E0E0E)
- Texto: --content-primary (#FFFFFF)
- Hotkey: --content-secondary (#E8E8E8)
- Shadow: filter drop-shadow multicamadas

SETAS CSS POR DIREÇÃO:
- top-*: seta acima, clip-path polygon(50% 0%, 0% 100%, 100% 100%), top=-6px
- bottom-*: seta abaixo, clip-path polygon(0% 0%, 100% 0%, 50% 100%), bottom=-6px
- left/right: seta lateral 6×12px, posicionada em top=50%
- Alinhamentos: center=50%+translateX, left=8px, right=8px`,
    },
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
    figmaId: '903:1853',
    category: 'trading',
    description: 'Painel lateral de entrada de ordens. Inclui segmented control Avançado/Simples, campos de estratégia, quantidade e preço, botões de compra/venda por tipo de ordem, ação Zerar e resumo de posição.',
    props: [
      { name: 'versao', type: 'enum', values: ['avancado', 'simples'] },
    ],
    dimensions: [
      { label: 'Largura fixa', width: '283px', height: '—' },
      { label: 'Abas (header)', width: '100%', height: '45px' },
      { label: 'Input de campo', width: '100%', height: '32px' },
      { label: 'Botão de ação', width: 'flex-1', height: '32–34px' },
    ],
    tokens: [
      { property: 'Comprar BG', token: 'context.trading.long.default', value: 'rgba(79,226,144,0.08)' },
      { property: 'Comprar hover BG', token: 'context.trading.long.hover', value: 'rgba(79,226,144,0.12)' },
      { property: 'Comprar texto', token: 'context.trading.long.text', value: '#4FE290' },
      { property: 'Vender BG', token: 'context.trading.short.default', value: 'rgba(243,79,69,0.08)' },
      { property: 'Vender hover BG', token: 'context.trading.short.hover', value: 'rgba(243,79,69,0.12)' },
      { property: 'Vender texto', token: 'context.trading.short.text', value: '#F34F45' },
      { property: 'Zerar borda/texto', token: 'color.orange.500', value: '#FF6400' },
      { property: 'Zerar hover BG', token: 'context.trading.stop.alpha', value: 'rgba(255,100,0,0.08)' },
      { property: 'Segment control BG', token: 'surface.secondary', value: '#222222' },
      { property: 'Segment ativo BG', token: 'action.secondary.default', value: '#4A4A4A' },
      { property: 'Input BG', token: 'surface.primary', value: '#4A4A4A' },
      { property: 'Borda seção', token: 'border.subtle', value: '#222222' },
      { property: 'Posição "Zerado"', token: 'content.success', value: '#4FE290' },
    ],
    anatomy: 'Painel de 283px de largura com border-left sutil. 3 seções: Abas (45px, segmented control pill), Container (padding 8px, gap 16px — linhas de info, inputs 32px, quick buttons e checkbox TP/SL), Botões (padding 8px, gap 8px — rows de Compra+Venda, Zerar, Cancel, grupo Cancelar/Inverter, resumo Posição).',
    code: {
      html: `<!-- Painel de Negociações (Boleta) -->
<div class="trdr-boleta">

  <!-- Abas -->
  <div class="trdr-boleta-abas">
    <div class="trdr-boleta-segment-control">
      <button class="trdr-boleta-segment trdr-boleta-segment-active">Avançado</button>
      <button class="trdr-boleta-segment">Simples</button>
    </div>
  </div>

  <!-- Campos -->
  <div class="trdr-boleta-container">
    <!-- Estratégia -->
    <div style="display:flex;align-items:center;justify-content:space-between">
      <span class="trdr-boleta-label">Estratégia</span>
      <span style="color:var(--content-primary);font-size:12px;font-weight:500">Manejo ▾</span>
    </div>

    <!-- Disponível -->
    <div style="display:flex;align-items:center;justify-content:space-between">
      <span class="trdr-boleta-label">Disp.</span>
      <span style="color:var(--content-primary);font-size:12px;font-weight:500">258.010.200,00 USDT</span>
    </div>

    <!-- Quantidade -->
    <div style="display:flex;flex-direction:column;gap:8px">
      <span class="trdr-boleta-label">Quantidade</span>
      <input class="trdr-boleta-input" placeholder="Inserir" />
      <div style="display:flex;gap:4px">
        <button class="trdr-boleta-quick-btn">1</button>
        <button class="trdr-boleta-quick-btn">2</button>
        <button class="trdr-boleta-quick-btn">3</button>
      </div>
    </div>

    <!-- Preço da Ordem -->
    <div style="display:flex;flex-direction:column;gap:8px">
      <span class="trdr-boleta-label">Preço da Ordem</span>
      <input class="trdr-boleta-input" value="0,00" />
    </div>

    <!-- TP/SL -->
    <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
      <input type="checkbox" style="display:none" />
      <span style="width:16px;height:16px;border:1px solid var(--border-default);border-radius:5px;background:var(--surface-tertiary);flex-shrink:0;display:block"></span>
      <span style="font-size:12px;font-weight:500;color:var(--content-primary)">TP/SL</span>
    </label>
  </div>

  <!-- Botões -->
  <div class="trdr-boleta-botoes">
    <div style="display:flex;gap:8px">
      <button class="trdr-boleta-btn-long">CP Limite</button>
      <button class="trdr-boleta-btn-short">VD Limite</button>
    </div>
    <div style="display:flex;gap:8px">
      <button class="trdr-boleta-btn-long">CP Mercado</button>
      <button class="trdr-boleta-btn-short">VD Mercado</button>
    </div>
    <div style="display:flex;gap:8px">
      <button class="trdr-boleta-btn-long">Bid</button>
      <button class="trdr-boleta-btn-short">Ask</button>
    </div>
    <button class="trdr-boleta-btn-zerar">Zerar (5)</button>
    <button class="trdr-boleta-btn-ghost">Cancelar ordens (2) + Zerar (5)</button>
    <div style="display:flex;gap:8px">
      <button class="trdr-boleta-btn-ghost" style="width:auto;flex-shrink:0">Cancelar Ordem</button>
      <button class="trdr-boleta-btn-ghost" style="flex:1;min-width:100px">Inverter</button>
    </div>
  </div>

</div>`,
      css: `/* Boleta — variáveis usadas */
/* --context-trading-long-default: rgba(79,226,144,0.08)  */
/* --context-trading-long-hover:   rgba(79,226,144,0.12)  */
/* --context-trading-long-text:    #4FE290               */
/* --context-trading-short-default: rgba(243,79,69,0.08)  */
/* --context-trading-short-hover:   rgba(243,79,69,0.12)  */
/* --context-trading-short-text:    #F34F45               */
/* --color-orange-500:             #FF6400  (Zerar)        */
/* --context-trading-stop-alpha:   rgba(255,100,0,0.08)   */
/* --surface-secondary:            #222222                */
/* --action-secondary-default:     #4A4A4A                */
/* --surface-primary:              #4A4A4A                */
/* --border-subtle:                #222222                */
/* --content-success:              #4FE290                */

.trdr-boleta { width: 283px; border-left: 1px solid var(--border-subtle); }

.trdr-boleta-btn-long {
  flex: 1;
  background: var(--context-trading-long-default);
  border-radius: var(--radius-md);
  padding: 8px;
  border: none; cursor: pointer;
  font-size: 14px; font-weight: 600;
  color: var(--context-trading-long-text);
  transition: background 0.15s ease;
}
.trdr-boleta-btn-long:hover { background: var(--context-trading-long-hover); }

.trdr-boleta-btn-short {
  flex: 1;
  background: var(--context-trading-short-default);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  border: none; cursor: pointer;
  font-size: 14px; font-weight: 600;
  color: var(--context-trading-short-text);
  transition: background 0.15s ease;
}
.trdr-boleta-btn-short:hover { background: var(--context-trading-short-hover); }

.trdr-boleta-btn-zerar {
  width: 100%; height: 32px;
  border: 1px solid var(--color-orange-500);
  border-radius: var(--radius-md);
  background: transparent; cursor: pointer;
  font-size: 14px; font-weight: 600;
  color: var(--color-orange-500);
  transition: background 0.15s ease;
}
.trdr-boleta-btn-zerar:hover { background: var(--context-trading-stop-alpha); }`,
      react: `import Boleta from '@/components/ui/Boleta'

// Versão padrão (Avançado)
<Boleta />

// Versão Simples
<Boleta versao="simples" />

// Com className customizado
<Boleta versao="avancado" className="meu-override" />`,
      prompt: `Implemente o componente Boleta do Design System TRDR — painel lateral de negociações de 283px de largura.

ESTRUTURA (3 seções com border-left: 1px solid --border-subtle):

1. ABAS (height: 45px, padding: 8px, border-bottom sutil)
   - Segmented control pill (border-radius: 9999px, bg: --surface-secondary #222)
   - 2 segments: "Avançado" (ativo) e "Simples" (inativo)
   - Segment ativo: bg --action-secondary-default #4A4A4A, radius 16px, padding 8px 12px
   - Segment inativo: bg transparente, text --content-tertiary

2. CONTAINER — campos do formulário (padding: 8px, gap: 16px, border-bottom sutil)
   - Linha "Estratégia": label (tertiary 12px/500) + valor "Manejo" + chevron (primary)
   - Linha "Disp.": label + valor "258.010.200,00 USDT" (primary)
   - Grupo "Quantidade": label 12px + input 32px (bg --surface-primary, radius 8px, padding 8px) + 3 quick buttons (border --border-default, radius 8px, padding 8px 12px, font 14px/600 secondary, gap 4px)
   - Grupo "Preço da Ordem": label 12px + input 32px
   - Linha "TP/SL": checkbox 16x16 (border default, radius 5px, bg --surface-tertiary) + label primary

3. BOTÕES (padding: 8px, gap: 8px)
   - 4 rows de ação (gap 8px cada):
     • Long (flex:1, bg --context-trading-long-default, text --context-trading-long-text #4FE290, radius 8px, padding 8px, font 14px/600)
     • Short (flex:1, bg --context-trading-short-default, text --context-trading-short-text #F34F45, radius 8px, padding 8px 12px, font 14px/600)
   - "Zerar (5)": width 100%, height 32px, border 1px sólido --color-orange-500 (#FF6400), text --color-orange-500, radius 8px
   - "Cancelar ordens (2) + Zerar (5)": width 100%, border --border-default, text --content-secondary, radius 8px
   - Row "Cancelar Ordem" (shrink-0) + "Inverter" (flex:1 min-width:100px): ambos border --border-default
   - Resumo Posição: "Posição" (14px tertiary) / "Zerado" (16px --content-success #4FE290), + 2 linhas meta 12px tertiary

Hover states: long-hover rgba(79,226,144,0.12), short-hover rgba(243,79,69,0.12), zerar-hover --context-trading-stop-alpha.
Resultado pixel-perfect com exatamente 283px de largura.`,
    },
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
