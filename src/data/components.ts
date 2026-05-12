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
      { property: 'BG Primary', token: 'action.brand.default', value: '#00D4FF' },
      { property: 'BG Primary Hover', token: 'action.brand.hover', value: '#00A8CC' },
      { property: 'BG Primary Active', token: 'action.brand.active', value: '#007D99' },
      { property: 'BG Secondary', token: 'action.secondary.default', value: '#4A4A4A' },
      { property: 'Text sobre Primary', token: 'content.inverse', value: '#1A1A1A' },
      { property: 'Text sobre Secondary', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Text Ghost', token: 'content.secondary', value: '#E8E8E8' },
      { property: 'BG Destructive', token: 'action.destructive.default', value: '#EA580C' },
      { property: 'BG Long (trading)', token: 'context.trading.long.default', value: '#4FE29014' },
      { property: 'Text Long (trading)', token: 'context.trading.long.text', value: '#6DE7A2' },
      { property: 'BG Short (trading)', token: 'context.trading.short.default', value: '#F1312614' },
      { property: 'Text Short (trading)', token: 'context.trading.short.text', value: '#F56D64' },
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
  background-color: var(--action-brand-default); /* #00D4FF */
  color: var(--content-inverse);
  border: 0.5px solid var(--action-brand-default);
}
.trdr-btn-primary:hover  { background-color: var(--action-brand-hover); border-color: var(--action-brand-hover); }
.trdr-btn-primary:active { background-color: var(--action-brand-active); border-color: var(--action-brand-active); }
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
  background-color: var(--action-destructive-default); /* #EA580C */
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
  color: var(--content-brand); /* #00D4FF */
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
  BG: var(--action-brand-default) /* #00D4FF */
  Color: var(--content-inverse)
  Border: 0.5px solid var(--action-brand-default)
  Hover: var(--action-brand-hover) | Active: var(--action-brand-active)

Secondary:
  BG: var(--action-secondary-default) /* #4A4A4A */
  Color: var(--content-primary)
  Hover: var(--action-secondary-hover) | Active: var(--action-secondary-active)

Ghost:
  BG: transparent | Color: var(--content-secondary) /* #E8E8E8 */
  Border: 1px solid var(--border-default)
  Hover: BG var(--surface-secondary), border var(--border-strong), color var(--content-primary)

Destructive:
  BG: var(--action-destructive-default) /* #EA580C */
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
      { property: 'Border focus', token: 'border-focus', value: '#00D4FF' },
      { property: 'Border multi-line/variable/disabled', token: 'border-strong', value: '#A4A4A4' },
      { property: 'Texto Single Line', token: 'content-primary', value: '#FFFFFF' },
      { property: 'Texto Quick Action', token: 'content-tertiary', value: '#A4A4A4' },
      { property: 'Placeholder', token: 'content-tertiary', value: '#A4A4A4' },
      { property: 'Texto disabled', token: 'content-disabled', value: '#4A4A4A' },
      { property: 'Borda error', token: 'content-error', value: '#F34F45' },
      { property: 'Borda warning', token: 'content-warning', value: '#FFD35A' },
      { property: 'Borda success', token: 'content-success', value: '#4FE290' },
    ],
    anatomy: `[div wrapper h=24px border-radius=5px bg=surface-primary border=transparent gap=4px]
  └── [span icon-slot 24×24px, opcional] → ícone de busca 13px
  └── [input flex=1 bg=transparent no-border 14px/400]
  └── [button clear 24×24px, opcional, aparece quando iconLeft + value]
— Large: h=32px, mesma tipografia (14px/400)
— Multi Line: [div wrapper padding=4px_8px border=border-strong auto-height]
  └── [textarea flex=1 resize=none 11px/450]
— Quick Action: h=32px padding=0_4px gap=8px sempre com icon-slot, texto 11px/450 cor tertiary
— Variable: padding=0_4px border=border-strong sempre visível, texto 11px/450`,
    notes: 'Quick Action é uma variante compacta para inputs em toolbars — texto em cor tertiary (#A4A4A4), sempre com ícone de busca. Variable é o estado de input de fórmula/variável com borda sempre visível. Border radius fixo: 5px. O botão clear só aparece quando iconLeft=true e há valor digitado.',
    implemented: true,
    code: {
      html: `<!-- Single Line Default (14px) -->
<div class="trdr-text-input">
  <input type="text" placeholder="Placeholder" />
</div>

<!-- Single Line Large (14px, 32px height) -->
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

<!-- Quick Action (32px, texto tertiary, gap 8px) -->
<div class="trdr-text-input trdr-text-input-quick">
  <span class="trdr-text-input-icon-slot" aria-hidden="true">
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M9 9L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </span>
  <input type="text" placeholder="Filtrar..." />
</div>

<!-- Variable state (borda sempre visível, 11px) -->
<div class="trdr-text-input trdr-text-input-variable">
  <input type="text" value="WINFUT" />
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
  gap: 4px;
}

.trdr-text-input:focus-within { border-color: var(--border-focus); /* #00D4FF */ }

.trdr-text-input-lg         { height: 32px; }
.trdr-text-input-icon       { padding: 0; gap: 0; }
.trdr-text-input-lg.trdr-text-input-icon { padding: 0 4px; gap: 0; }

.trdr-text-input-quick { height: 32px; padding: 0 4px; gap: 8px; }

.trdr-text-input-variable {
  padding: 0 4px;
  border-color: var(--border-strong);          /* #A4A4A4 — sempre visível */
}
.trdr-text-input-variable:focus-within { border-color: var(--border-focus); }

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

/* Single Line (Default + Large): 14px / 400 */
.trdr-text-input input {
  flex: 1; min-width: 0; background: transparent;
  border: none; outline: none;
  color: var(--content-primary);              /* #FFFFFF */
  font-size: 14px; font-weight: 400; letter-spacing: 0; line-height: 1.2;
  padding: 0; width: 100%;
}

/* Textarea (Multi Line): 11px / 450 */
.trdr-text-input textarea {
  flex: 1; min-width: 0; background: transparent;
  border: none; outline: none;
  color: var(--content-primary);              /* #FFFFFF */
  font-size: 11px; font-weight: 450; letter-spacing: 0.055px; line-height: 16px;
  padding: 0; width: 100%; resize: none;
}

.trdr-text-input input::placeholder,
.trdr-text-input textarea::placeholder { color: var(--content-tertiary); /* #A4A4A4 */ }

/* Quick Action: 11px / 450 / cor tertiary */
.trdr-text-input-quick input {
  font-size: 11px; font-weight: 450; letter-spacing: 0.055px; line-height: 16px;
  color: var(--content-tertiary);             /* #A4A4A4 */
}

/* Variable: 11px / 450 */
.trdr-text-input-variable input {
  font-size: 11px; font-weight: 450; letter-spacing: 0.055px; line-height: 16px;
}

.trdr-text-input-disabled input,
.trdr-text-input-disabled textarea { color: var(--content-disabled); cursor: not-allowed; }`,
      react: `import TextInput from '@/components/ui/TextInput'

// Single Line Default (14px/400)
<TextInput placeholder="Placeholder" />

// Single Line Large (14px/400, 32px height)
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

// Quick Action (toolbar) — texto tertiary, 11px
<TextInput
  variant="quick-action"
  placeholder="Filtrar..."
  value={val}
  onChange={e => setVal(e.target.value)}
  onClear={() => setVal('')}
/>

// Variable state — borda sempre visível, 11px
<TextInput isVariable value="WINFUT" />

// Multi Line (textarea, 11px/450)
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
- variable (isVariable=true): input de fórmula com borda sempre visível e padding compacto

TIPOGRAFIA (confirmada no Figma node 1327:17000):
- Single Line Default e Large: font-size 14px, font-weight 400, letter-spacing 0, line-height 1.2
- Multi Line: font-size 11px, font-weight 450, letter-spacing 0.055px, line-height 16px
- Quick Action: font-size 11px, font-weight 450, letter-spacing 0.055px, line-height 16px
- Variable: font-size 11px, font-weight 450, letter-spacing 0.055px, line-height 16px

TAMANHOS:
- default: height 24px, padding 0 8px, gap 4px
- large:   height 32px, padding 0 8px (sem icon) / 0 4px (com icon), gap 0
- Quick Action é sempre large (32px), padding 0 4px, gap 8px

TOKENS OBRIGATÓRIOS:
- Background: --surface-primary (#4A4A4A)
- Border focus: --border-focus (#00D4FF) — via :focus-within no wrapper
- Border multi-line/variable/disabled: --border-strong (#A4A4A4)
- Texto Single Line: --content-primary (#FFFFFF)
- Texto Quick Action: --content-tertiary (#A4A4A4) — texto em cor tertiary por design
- Placeholder: --content-tertiary (#A4A4A4)
- Texto disabled: --content-disabled (#4A4A4A)
- Border error: --content-error (#F34F45)
- Border warning: --content-warning (#FFD35A)
- Border success: --content-success (#4FE290)

BORDER RADIUS: 5px FIXO (não usar token de radius)

ICON LEFT:
- Container 24×24px, ícone de busca SVG 13px centralizado
- Quick Action sempre tem icon, Single Line e Large são opcionais
- Com icon: wrapper sem padding (0) e gap=0 em Default | padding 0 4px, gap=0 em Large

BOTÃO CLEAR (X):
- Aparece apenas quando iconLeft=true + value não vazio + não disabled + não readOnly
- Container 24×24px, SVG X 11px, cor content-tertiary, hover: content-primary
- tabIndex={-1} para não receber foco via tab

VARIABLE STATE:
- Wrapper padding: 0 4px (reduzido vs 0 8px do default)
- Border: border-strong (#A4A4A4) sempre visível (mesmo sem foco)
- Em foco: substitui por border-focus (#00D4FF)

MULTI LINE:
- Border default sempre visível: var(--border-strong)
- padding: 4px 8px
- Textarea com resize: none

ESTADOS CSS:
- :focus-within no wrapper = borda focus (não no input/textarea)
- disabled: borda strong + cursor not-allowed em wrapper E input/textarea
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
      { property: 'Border focused/active', token: 'border-focus', value: '#00D4FF' },
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
.trdr-dropdown-active   { border-color: var(--border-focus); } /* #00D4FF */

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
- Border focused/active: --border-focus (#00D4FF)
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
      { property: 'Chevron border', token: 'border-focus', value: '#00D4FF' },
      { property: 'Border hover', token: 'border-strong', value: '#A4A4A4' },
      { property: 'Selected chevron bg', token: 'surface-brand', value: '#00D4FF29' },
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
- Chevron border PADRÃO: --border-focus (#00D4FF) — SEMPRE ciano por padrão
- Border hover: --border-strong (#A4A4A4) na seção input
- Selected Input: border-focus na seção input, chevron sem borda
- Selected Chevron: --surface-brand (#00D4FF29) no chevron

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
      { property: 'BG Checked / Mixed', token: 'action-brand-default', value: '#00D4FF' },
      { property: 'BG Unchecked', token: 'surface-secondary', value: '#222222' },
      { property: 'Border padrão', token: 'border-default', value: '#4A4A4A' },
      { property: 'Border hover', token: 'border-strong', value: '#A4A4A4' },
      { property: 'Focus ring', token: 'border-focus', value: '#00D4FF' },
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
  background: var(--action-brand-default);   /* #00D4FF */
  border-color: var(--action-brand-default);
}

.trdr-checkbox input:focus-visible ~ .trdr-checkbox-box {
  outline: 2px solid var(--border-focus);    /* #00D4FF */
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
- BG Checked/Mixed: --action-brand-default (#00D4FF)
- BG Unchecked: --surface-secondary (#222222)
- Border padrão: --border-default (#4A4A4A)
- Border hover: --border-strong (#A4A4A4)
- Focus ring: outline 2px --border-focus (#00D4FF) offset 2px
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
      { property: 'Circle On bg', token: 'action-brand-default', value: '#00D4FF' },
      { property: 'Circle Off bg', token: 'surface-secondary', value: '#222222' },
      { property: 'Circle border', token: 'border-default', value: '#4A4A4A' },
      { property: 'Dot (On)', token: '—', value: '#FFFFFF' },
      { property: 'Focus ring', token: 'border-focus', value: '#00D4FF' },
      { property: 'Button border default', token: 'border-subtle', value: '#222222' },
      { property: 'Button border active', token: 'border-default', value: '#4A4A4A' },
      { property: 'Button bg active', token: 'surface-brand', value: '#00D4FF29' },
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
  background: var(--surface-brand);          /* #00D4FF29 */
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
- On: bg=--action-brand-default (#00D4FF), border=action-brand-default
  → Dot interno: 6×6px branco via ::after
- Hover Off: border=--border-strong (#A4A4A4)
- Focus: outline 2px --border-focus (#00D4FF) offset 2px

VARIANTE BUTTON (pill):
- Height: 24px, border-radius: 5px, padding: 0 8px
- Default: border=--border-subtle (#222222)
- Active: bg=--surface-brand (#00D4FF29), border=--border-default
- Focused: border=--border-focus (#00D4FF)
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
      { property: 'Track On / Mixed', token: 'action-brand-default', value: '#00D4FF' },
      { property: 'Track Off', token: 'surface-primary', value: '#4A4A4A' },
      { property: 'Track Disabled', token: 'surface-secondary', value: '#222222' },
      { property: 'Knob', token: '—', value: '#FFFFFF' },
      { property: 'Focus border', token: 'border-focus', value: '#00D4FF' },
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
  background-color: var(--action-brand-default); /* #00D4FF */
}

.trdr-switch:disabled .trdr-switch-track {
  background-color: var(--surface-secondary); /* #222222 */
}

.trdr-switch:focus-visible .trdr-switch-track {
  outline: 1px solid var(--border-focus); /* #00D4FF */
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
- Track On/Mixed: --action-brand-default (#00D4FF)
- Track Off: --surface-primary (#4A4A4A)
- Track Disabled: --surface-secondary (#222222)
- Knob: #FFFFFF (não tem token, é sempre branco)
- Focus outline: --border-focus (#00D4FF)
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
    code: {
      html: `<!-- 2 tabs -->
<div class="trdr-segment-control">
  <span class="trdr-segment trdr-segment-active">Avançado</span>
  <span class="trdr-segment trdr-segment-inactive">Simples</span>
</div>

<!-- 5 tabs -->
<div class="trdr-segment-control">
  <span class="trdr-segment trdr-segment-active">Filtro 1</span>
  <span class="trdr-segment trdr-segment-inactive">Filtro 2</span>
  <span class="trdr-segment trdr-segment-inactive">Filtro 3</span>
  <span class="trdr-segment trdr-segment-inactive">Filtro 4</span>
  <span class="trdr-segment trdr-segment-inactive">Filtro 5</span>
</div>`,
      css: `.trdr-segment-control {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);         /* 8px */
  flex-wrap: wrap;
}

.trdr-segment {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);  /* 8px 12px */
  border-radius: var(--spacing-lg);              /* 16px — pill */
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.trdr-segment-active {
  background-color: var(--action-secondary-default);  /* #4A4A4A */
  color: var(--content-primary);                      /* #FFFFFF */
}

.trdr-segment-inactive {
  background-color: var(--surface-secondary);  /* #222222 */
  color: var(--content-tertiary);              /* #A4A4A4 */
}

.trdr-segment-inactive:hover {
  color: var(--content-secondary);  /* #E8E8E8 */
}`,
      react: `import { useState } from 'react'

export default function Example() {
  const [active, setActive] = useState('avancado')
  const tabs = [
    { id: 'avancado', label: 'Avançado' },
    { id: 'simples', label: 'Simples' },
  ]

  return (
    <div className="trdr-segment-control">
      {tabs.map(tab => (
        <span
          key={tab.id}
          className={\`trdr-segment \${active === tab.id ? 'trdr-segment-active' : 'trdr-segment-inactive'}\`}
          onClick={() => setActive(tab.id)}
        >
          {tab.label}
        </span>
      ))}
    </div>
  )
}`,
      prompt: `Implemente o componente Segmented Control do Design System TRDR.

ESPECIFICAÇÕES:
- Container (.trdr-segment-control): display inline-flex, gap 8px (--spacing-sm), flex-wrap wrap
- Segment (.trdr-segment): padding 8px 12px (--spacing-sm/--spacing-md), border-radius 16px (pill), font 14px/400 Inter
- Ativo (.trdr-segment-active): bg --action-secondary-default (#4A4A4A), color --content-primary (#FFFFFF)
- Inativo (.trdr-segment-inactive): bg --surface-secondary (#222222), color --content-tertiary (#A4A4A4)
- Hover inativo: color --content-secondary (#E8E8E8)
- Transição: 0.15s ease em background-color e color

Use classes CSS globais. Gerencie o estado ativo via useState no React.`,
    },
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

  // =========================================================================
  // NAVEGAÇÃO
  // =========================================================================
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
    code: {
      html: `<div class="trdr-abas">
  <div class="trdr-abas-item trdr-abas-item-active">
    <span>Todos os tokens</span>
  </div>
  <div class="trdr-abas-item">
    <span>Primitivos</span>
  </div>
  <div class="trdr-abas-item">
    <span>Semânticos</span>
  </div>
  <div class="trdr-abas-item">
    <span>Scale</span>
  </div>
  <div class="trdr-abas-item">
    <span>Tipografia</span>
  </div>
</div>`,
      css: `.trdr-abas {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid var(--border-subtle);  /* #222222 */
  overflow-x: auto;
  height: 45px;
}

.trdr-abas-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 12px;
  cursor: pointer;
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 500;
  color: var(--content-tertiary);      /* #A4A4A4 */
  white-space: nowrap;
  transition: color 0.15s ease;
}

.trdr-abas-item:hover { color: var(--content-secondary); }

.trdr-abas-item-active {
  color: var(--content-primary);       /* #FFFFFF */
}

.trdr-abas-item-active::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background-color: var(--action-brand-active);  /* #007D99 */
}`,
      react: `import { useState } from 'react'

const tabs = ['Todos os tokens', 'Primitivos', 'Semânticos', 'Scale', 'Tipografia']

export default function Example() {
  const [active, setActive] = useState(0)

  return (
    <div className="trdr-abas">
      {tabs.map((tab, i) => (
        <div
          key={tab}
          className={\`trdr-abas-item \${i === active ? 'trdr-abas-item-active' : ''}\`}
          onClick={() => setActive(i)}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}`,
      prompt: `Implemente o componente Abas do Design System TRDR.

ESPECIFICAÇÕES PIXEL-PERFECT:
- Container (.trdr-abas): flex, align-items stretch, border-bottom 1px --border-subtle (#222222), height 45px, overflow-x auto
- Item (.trdr-abas-item): position relative, padding 0 12px, flex col centered, font 16px/500 Inter
- Tab inativa: color --content-tertiary (#A4A4A4), hover: --content-secondary (#E8E8E8)
- Tab ativa (.trdr-abas-item-active): color --content-primary (#FFFFFF)
- Indicador ativo: ::after position absolute, bottom 0, left 0, right 0, height 2px, bg --action-brand-active (#007D99)
- Largura total: 476px | Transição: color 0.15s ease`,
    },
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
    code: {
      html: `<div class="trdr-sub-menu">
  <div class="trdr-sub-menu-item trdr-sub-menu-item-active">
    <span class="material-symbols-outlined" style="font-size:20px;color:var(--content-tertiary)">palette</span>
    <span>Todos os tokens</span>
  </div>
  <div class="trdr-sub-menu-item">
    <span class="material-symbols-outlined" style="font-size:20px;color:var(--content-tertiary)">widgets</span>
    <span>Catálogo</span>
  </div>
  <div class="trdr-sub-menu-item">
    <span class="material-symbols-outlined" style="font-size:20px;color:var(--content-tertiary)">smart_toy</span>
    <span>Guia &amp; Regras</span>
  </div>
</div>`,
      css: `.trdr-sub-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 236px;
  background-color: var(--bg-secondary);     /* #141519 */
  border: 1px solid var(--border-subtle);    /* #222222 */
  border-radius: var(--radius-sm);           /* 4px */
  padding: 8px;
}

.trdr-sub-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 400;
  color: var(--content-secondary);           /* #E8E8E8 */
  transition: background-color 0.1s;
}

.trdr-sub-menu-item:hover,
.trdr-sub-menu-item-active {
  background-color: var(--surface-secondary);  /* #222222 */
}`,
      react: `import { useState } from 'react'

const items = [
  { icon: 'palette', label: 'Todos os tokens' },
  { icon: 'widgets', label: 'Catálogo' },
  { icon: 'smart_toy', label: 'Guia & Regras' },
]

export default function Example() {
  const [active, setActive] = useState(0)

  return (
    <div className="trdr-sub-menu">
      {items.map(({ icon, label }, i) => (
        <div
          key={label}
          className={\`trdr-sub-menu-item \${i === active ? 'trdr-sub-menu-item-active' : ''}\`}
          onClick={() => setActive(i)}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 20, color: 'var(--content-tertiary)' }}
          >
            {icon}
          </span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}`,
      prompt: `Implemente o componente Sub-menu Item do Design System TRDR.

ESPECIFICAÇÕES:
- Container (.trdr-sub-menu): flex-col, gap 4px, width 236px, bg --bg-secondary (#141519), border 1px --border-subtle (#222222), radius --radius-sm (4px), padding 8px
- Item (.trdr-sub-menu-item): flex, gap 8px, height 32px, padding 0 8px, radius 4px, font 14px/400 Inter, color --content-secondary (#E8E8E8)
- Hover / Ativo (.trdr-sub-menu-item-active): bg --surface-secondary (#222222)
- Ícone: Material Symbols Outlined, font-size 20px, color --content-tertiary (#A4A4A4)
- Transição: background-color 0.1s

Implemente com estado ativo via useState.`,
    },
  },

  // =========================================================================
  // TRADING
  // =========================================================================
  {
    slug: 'boleta',
    name: 'Painel de Negociações (Boleta)',
    figmaId: '903:1853',
    category: 'trading',
    implemented: true,
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

  // =========================================================================
  // TRADING — TABELAS
  // =========================================================================
  {
    slug: 'tabela-cotacoes',
    name: 'Tabela de Cotações',
    figmaId: '77:3681',
    category: 'trading',
    implemented: true,
    description: 'Tabela de cotações em tempo real. Exibe ativo, último preço, variação % com código de cor (verde/vermelho), tendência (seta), quantidade e dados de oferta/demanda.',
    props: [
      { name: 'rows', type: 'CotacaoRow[]', values: ['array de dados de cotação'] },
    ],
    dimensions: [
      { label: 'Largura total', width: '800px', height: '—' },
      { label: 'Altura do header', width: '—', height: '32px' },
      { label: 'Altura da linha', width: '—', height: '32px' },
      { label: 'Célula Último', width: '80px', height: '32px' },
    ],
    tokens: [
      { property: 'Var% positivo', token: 'context.trading.up', value: '#4FE290' },
      { property: 'Var% negativo', token: 'context.trading.down', value: '#F34F45' },
      { property: 'Cell Último bg', token: 'surface.primary', value: '#4A4A4A' },
      { property: 'Row alternada', token: '—', value: 'rgba(255,255,255,0.08)' },
      { property: 'Row hover', token: 'surface.secondary', value: '#222222' },
      { property: 'Header border', token: 'border.default', value: '#4A4A4A' },
      { property: 'Header text', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Cell text', token: 'content.primary', value: '#FFFFFF' },
    ],
    anatomy: `Tabela (table-layout: fixed, border-collapse: collapse):
  [thead > tr (32px, border-bottom 1px --border-default)]
    [th: 14px/400 --content-tertiary | padding: 4px 8px]
    Colunas: Ativo(65) Último(80) Q Últ(65) Var%(65) Tend(65) Dif(65) Stat(65) QOfc(65) Ofc(65) Ofv(65) QOfv(65) Teórico(65)
  [tbody > tr (32px, cursor pointer)]
    [tr:nth-child(even): bg rgba(255,255,255,0.08)]
    [tr:hover: bg --surface-secondary]
    [tr.selected: bg --bg-secondary]
    [td: 14px/400 --content-primary | padding: 4px 8px]
    [td.col-ultimo: bg --surface-primary #4A4A4A]
    [td.col-var-up: color --context-trading-up #4FE290]
    [td.col-var-down: color --context-trading-down #F34F45]
    [td.col-tend: ícone Material Symbols arrow_drop_up/down]`,
    code: {
      html: `<!-- Tabela de Cotações TRDR (Figma: 77:3681) -->
<div style="width:100%;overflow-x:auto;background:var(--bg-primary)">
  <table class="trdr-tabela-cotacoes">
    <colgroup>
      <col style="width:65px"> <col style="width:80px"> <col style="width:65px">
      <col style="width:65px"> <col style="width:65px"> <col style="width:65px">
      <col style="width:65px"> <col style="width:65px"> <col style="width:65px">
      <col style="width:65px"> <col style="width:65px"> <col style="width:65px">
    </colgroup>
    <thead>
      <tr>
        <th>Ativo</th><th>Último</th><th>Q Últ</th><th>Var %</th>
        <th>Tend</th><th>Dif</th><th>Stat...</th><th>QOfc</th>
        <th>Ofc</th><th>Ofv</th><th>QOfv</th><th>Teórico</th>
      </tr>
    </thead>
    <tbody>
      <tr class="trdr-tabela-cotacoes-row-selected">
        <td>ITUB4</td>
        <td class="col-ultimo">50.47</td>
        <td>100</td>
        <td class="col-var-down">-0.72%</td>
        <td><span class="col-tend-icon col-tend-down">arrow_drop_down</span></td>
        <td>0.36</td><td>.</td><td>1.000</td>
        <td>50.47</td><td>50.49</td><td>1.300</td><td>.</td>
      </tr>
      <tr>
        <td>VALE3</td>
        <td class="col-ultimo">92,00</td>
        <td>200</td>
        <td class="col-var-up">+1.20%</td>
        <td><span class="col-tend-icon col-tend-up">arrow_drop_up</span></td>
        <td>0.50</td><td>.</td><td>2.700</td>
        <td>92,00</td><td>92,10</td><td>4.000</td><td>.</td>
      </tr>
    </tbody>
  </table>
</div>`,
      css: `/* Tabela de Cotações — TRDR Design System */
/* Tokens: --context-trading-up (#4FE290), --context-trading-down (#F34F45) */
/* Tokens: --surface-primary (#4A4A4A), --surface-secondary (#222222)       */
/* Tokens: --border-default (#4A4A4A), --content-tertiary (#A4A4A4)          */

.trdr-tabela-cotacoes {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: var(--font-secondary); /* Inter */
  font-size: 14px;
  font-weight: 400;
  color: var(--content-primary);         /* #FFFFFF */
}

.trdr-tabela-cotacoes thead tr {
  height: 32px;
  border-bottom: 1px solid var(--border-default); /* #4A4A4A */
}

.trdr-tabela-cotacoes th {
  padding: 4px 8px;
  text-align: left;
  color: var(--content-tertiary);   /* #A4A4A4 */
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.trdr-tabela-cotacoes tbody tr {
  height: 32px;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.trdr-tabela-cotacoes tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.08);
}

.trdr-tabela-cotacoes tbody tr:hover {
  background: var(--surface-secondary); /* #222222 */
}

.trdr-tabela-cotacoes tbody tr.trdr-tabela-cotacoes-row-selected {
  background: var(--bg-secondary); /* #141519 */
}

.trdr-tabela-cotacoes td {
  padding: 4px 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.trdr-tabela-cotacoes td.col-ultimo {
  background: var(--surface-primary); /* #4A4A4A */
}

.trdr-tabela-cotacoes .col-var-up   { color: var(--context-trading-up);   } /* #4FE290 */
.trdr-tabela-cotacoes .col-var-down { color: var(--context-trading-down); } /* #F34F45 */

.trdr-tabela-cotacoes .col-tend-icon {
  font-family: 'Material Symbols Outlined';
  font-size: 20px;
  font-variation-settings: 'FILL' 1, 'GRAD' 0, 'wght' 400;
  vertical-align: middle;
}
.trdr-tabela-cotacoes .col-tend-up   { color: var(--context-trading-up);   }
.trdr-tabela-cotacoes .col-tend-down { color: var(--context-trading-down); }`,
      react: `import TabelaCotacoes, { CotacaoRow } from '@/components/ui/TabelaCotacoes'

const rows: CotacaoRow[] = [
  {
    ativo: 'ITUB4',
    ultimo: '50.47',
    qUlt: 100,
    varPct: -0.72,
    tend: 'down',
    dif: '0.36',
    qOfc: '1.000',
    ofc: '50.47',
    ofv: '50.49',
    qOfv: '1.300',
    selected: true,
  },
  {
    ativo: 'VALE3',
    ultimo: '92,00',
    qUlt: 200,
    varPct: 1.20,
    tend: 'up',
    dif: '0.50',
  },
]

export default function Example() {
  return <TabelaCotacoes rows={rows} />
}`,
      prompt: `Crie um componente React 'TabelaCotacoes' pixel-perfect baseado no Figma TRDR (node 77:3681).

ESTRUTURA:
- Elemento <table> com table-layout: fixed e border-collapse: collapse
- Wrapper <div> com overflow-x: auto e background: var(--bg-primary)

HEADER (thead > tr):
- height: 32px
- border-bottom: 1px solid var(--border-default) /* #4A4A4A */
- th: padding 4px 8px, font 14px/400, color var(--content-tertiary) /* #A4A4A4 */

COLUNAS (colgroup):
Ativo=65px, Último=80px, Q Últ=65px, Var%=65px, Tend=65px, Dif=65px,
Stat=65px, QOfc=65px, Ofc=65px, Ofv=65px, QOfv=65px, Teórico=65px

DATA ROWS (tbody > tr):
- height: 32px, cursor: pointer
- tr:nth-child(even): background rgba(255,255,255,0.08)
- tr:hover: background var(--surface-secondary) /* #222222 */
- tr.selected: background var(--bg-secondary) /* #141519 */
- td: padding 4px 8px, font 14px/400, color var(--content-primary) /* #FFFFFF */
- td.col-ultimo: background var(--surface-primary) /* #4A4A4A */
- td variação positiva: color var(--context-trading-up) /* #4FE290 */
- td variação negativa: color var(--context-trading-down) /* #F34F45 */
- td tendência: ícone Material Symbols Outlined 'arrow_drop_up'/'arrow_drop_down', 20px, FILL 1

INTERFACE TypeScript:
interface CotacaoRow {
  ativo: string; ultimo: string|number; qUlt?: string|number
  varPct: number; tend?: 'up'|'down'|null; dif?: string|number
  status?: string; qOfc?: string|number; ofc?: string|number
  ofv?: string|number; qOfv?: string|number; teorico?: string|number
  selected?: boolean
}

Usar APENAS tokens semânticos TRDR. NUNCA hex direto. NUNCA --scale-spacing-*.`,
    },
  },
  {
    slug: 'tabela-ordens',
    name: 'Tabela de Ordens',
    figmaId: '336:3114',
    category: 'trading',
    implemented: true,
    description: 'Tabela de histórico de ordens. Exibe horário, ativo, tipo C/V (colorido), preço, quantidade, status (Aberta/Executada/Cancelada) e origem. Linhas canceladas recebem fundo vermelho translúcido.',
    props: [
      { name: 'rows', type: 'OrdemRow[]', values: ['array de dados de ordens'] },
    ],
    dimensions: [
      { label: 'Largura total', width: '896px', height: '—' },
      { label: 'Altura do header', width: '—', height: '32px' },
      { label: 'Altura da linha', width: '—', height: '32px' },
    ],
    tokens: [
      { property: 'C (Compra) text', token: 'context.trading.long.text', value: '#6DE7A2' },
      { property: 'V (Venda) text', token: 'context.trading.short.text', value: '#F56D64' },
      { property: 'Row cancelada bg', token: 'context.trading.short.default', value: 'rgba(241,49,38,0.08)' },
      { property: 'Row hover', token: 'surface.secondary', value: '#222222' },
      { property: 'Header border', token: 'border.default', value: '#4A4A4A' },
      { property: 'Header text', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Cell text', token: 'content.primary', value: '#FFFFFF' },
    ],
    anatomy: `Tabela (table-layout: fixed, border-collapse: collapse):
  [thead > tr (32px, border-bottom 1px --border-default)]
    [th: 14px/400 --content-tertiary | padding: 4px 8px]
    Colunas: Horário(81) Ativo(80) C/V(65) Preço(104) Médio(79)
             Qtde(65) Disp(65) Aberta(65) Exec(65) Status(86) Validade(79) Origem(65)
  [tbody > tr (32px, cursor pointer)]
    [tr:nth-child(even): bg rgba(255,255,255,0.05)]
    [tr:hover: bg --surface-secondary]
    [tr.cancelada: bg --context-trading-short-default]
    [td: 14px/400 --content-primary | padding: 4px 8px | text-overflow: ellipsis]
    [td.col-cv-c: color --context-trading-long-text #6DE7A2, font-weight 600]
    [td.col-cv-v: color --context-trading-short-text #F56D64, font-weight 600]`,
    code: {
      html: `<!-- Tabela de Ordens TRDR (Figma: 336:3114) -->
<div style="width:100%;overflow-x:auto;background:var(--bg-primary)">
  <table class="trdr-tabela-ordens">
    <colgroup>
      <col style="width:81px"> <col style="width:80px"> <col style="width:65px">
      <col style="width:104px"><col style="width:79px"> <col style="width:65px">
      <col style="width:65px"> <col style="width:65px"> <col style="width:65px">
      <col style="width:86px"> <col style="width:79px"> <col style="width:65px">
    </colgroup>
    <thead>
      <tr>
        <th>Horário</th><th>Ativo</th><th>C/V</th><th>Preço</th>
        <th>Médio</th><th>Qtde</th><th>Disp</th><th>Aberta</th>
        <th>Exec</th><th>Status</th><th>Validade</th><th>Origem</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>11:32:56</td><td>WDOK18</td>
        <td class="col-cv-c">C</td>
        <td>3.425.600</td><td>3.425.600</td>
        <td>20</td><td>.</td><td>.</td><td>20</td>
        <td>Aberta</td><td>.</td><td>Loss</td>
      </tr>
      <tr>
        <td>11:35:24</td><td>WDOK18</td>
        <td class="col-cv-v">V</td>
        <td>3.425.600</td><td>3.425.600</td>
        <td>19</td><td>.</td><td>.</td><td>19</td>
        <td>Aberta</td><td>.</td><td>Criptor</td>
      </tr>
      <tr class="trdr-tabela-ordens-row-cancelada">
        <td>11:36:03</td><td>WDOK18</td>
        <td class="col-cv-c">C</td>
        <td>3.425.600</td><td>3.425.600</td>
        <td>16</td><td>.</td><td>.</td><td>16</td>
        <td>Cancelada</td><td>.</td><td>Criptor</td>
      </tr>
    </tbody>
  </table>
</div>`,
      css: `/* Tabela de Ordens — TRDR Design System */
/* Tokens: --context-trading-long-text (#6DE7A2) — C (Compra)               */
/* Tokens: --context-trading-short-text (#F56D64) — V (Venda)               */
/* Tokens: --context-trading-short-default — fundo linha cancelada           */
/* Tokens: --border-default (#4A4A4A), --content-tertiary (#A4A4A4)          */

.trdr-tabela-ordens {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: var(--font-secondary); /* Inter */
  font-size: 14px;
  font-weight: 400;
  color: var(--content-primary); /* #FFFFFF */
}

.trdr-tabela-ordens thead tr {
  height: 32px;
  border-bottom: 1px solid var(--border-default); /* #4A4A4A */
}

.trdr-tabela-ordens th {
  padding: 4px 8px;
  text-align: left;
  color: var(--content-tertiary);  /* #A4A4A4 */
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.trdr-tabela-ordens tbody tr {
  height: 32px;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.trdr-tabela-ordens tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.05);
}

.trdr-tabela-ordens tbody tr:hover {
  background: var(--surface-secondary); /* #222222 */
}

.trdr-tabela-ordens tbody tr.trdr-tabela-ordens-row-cancelada {
  background: var(--context-trading-short-default); /* rgba(241,49,38,0.08) */
}

.trdr-tabela-ordens td {
  padding: 4px 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.trdr-tabela-ordens .col-cv-c {
  color: var(--context-trading-long-text);  /* #6DE7A2 */
  font-weight: 600;
}

.trdr-tabela-ordens .col-cv-v {
  color: var(--context-trading-short-text); /* #F56D64 */
  font-weight: 600;
}`,
      react: `import TabelaOrdens, { OrdemRow } from '@/components/ui/TabelaOrdens'

const rows: OrdemRow[] = [
  {
    horario: '11:32:56',
    ativo: 'WDOK18',
    tipo: 'C',
    preco: '3.425.600',
    medio: '3.425.600',
    qtde: 20,
    exec: 20,
    status: 'aberta',
    origem: 'Loss',
  },
  {
    horario: '11:35:24',
    ativo: 'WDOK18',
    tipo: 'V',
    preco: '3.425.600',
    medio: '3.425.600',
    qtde: 19,
    exec: 19,
    status: 'aberta',
    origem: 'Criptor',
  },
  {
    horario: '11:36:03',
    ativo: 'WDOK18',
    tipo: 'C',
    preco: '3.425.600',
    medio: '3.425.600',
    qtde: 16,
    exec: 16,
    status: 'cancelada',
    origem: 'Criptor',
  },
]

export default function Example() {
  return <TabelaOrdens rows={rows} />
}`,
      prompt: `Crie um componente React 'TabelaOrdens' pixel-perfect baseado no Figma TRDR (node 336:3114).

ESTRUTURA:
- Elemento <table> com table-layout: fixed e border-collapse: collapse
- Wrapper <div> com overflow-x: auto e background: var(--bg-primary)

HEADER (thead > tr):
- height: 32px
- border-bottom: 1px solid var(--border-default) /* #4A4A4A */
- th: padding 4px 8px, font 14px/400, color var(--content-tertiary) /* #A4A4A4 */

COLUNAS (colgroup):
Horário=81px, Ativo=80px, C/V=65px, Preço=104px, Médio=79px,
Qtde=65px, Disp=65px, Aberta=65px, Exec=65px, Status=86px, Validade=79px, Origem=65px

DATA ROWS (tbody > tr):
- height: 32px, cursor: pointer
- tr:nth-child(even): background rgba(255,255,255,0.05)
- tr:hover: background var(--surface-secondary) /* #222222 */
- tr.cancelada: background var(--context-trading-short-default) /* rgba(241,49,38,0.08) */
- td: padding 4px 8px, font 14px/400, color var(--content-primary), text-overflow ellipsis
- td.col-cv-c (Compra): color var(--context-trading-long-text) /* #6DE7A2 */, font-weight 600
- td.col-cv-v (Venda): color var(--context-trading-short-text) /* #F56D64 */, font-weight 600

INTERFACE TypeScript:
type OrdemStatus = 'aberta' | 'executada' | 'cancelada' | 'parcial'
interface OrdemRow {
  horario: string; ativo: string; tipo: 'C'|'V'
  preco: string|number; medio?: string|number
  qtde: number; disp?: string|number; aberta?: string|number; exec?: string|number
  status: OrdemStatus; validade?: string; origem?: string
}

Usar APENAS tokens semânticos TRDR. NUNCA hex direto. NUNCA --scale-spacing-*.`,
    },
  },

  // =========================================================================
  // OUTROS
  // =========================================================================
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

  // =========================================================================
  // FLOATING MENU — menu flutuante genérico (compound component)
  // =========================================================================
  {
    slug: 'floating-menu',
    name: 'Floating Menu',
    figmaId: '1921:55380',
    category: 'floating-menu',
    implemented: true,
    description: 'Menu flutuante genérico do TRDR — compound component com Item, Title e Divider. Cobre desde listas simples de ações até menus seccionados com ícones Material Symbols. Usado em Janela, seletor de ativo, configurações, indicadores e notificações.',
    props: [
      { name: 'width', type: 'number | string', values: ['172', '240', '260', '280', '300', 'auto'] },
      { name: 'children', type: 'ReactNode', values: ['FloatingMenu.Item, FloatingMenu.Title, FloatingMenu.Divider, custom content'] },
      { name: 'Item.icon', type: 'string', values: ['nome do Material Symbols (ex: "close", "star", "search")'] },
      { name: 'Item.disabled', type: 'boolean', values: ['true', 'false'] },
      { name: 'Item.onClick', type: 'function', values: ['() => void'] },
      { name: 'Title.size', type: 'enum', values: ['"default" (14px)', '"sm" (10px)'] },
    ],
    dimensions: [
      { label: 'Item height', width: '—', height: '32px' },
      { label: 'Menu padding', width: '8px', height: '8px' },
      { label: 'Ações da janela (5 itens)', width: '172px', height: '192px' },
      { label: 'Notificações (4 itens)', width: '300px', height: '182px' },
      { label: 'Configurações (5 itens + dropdown)', width: '260px', height: '239px' },
    ],
    tokens: [
      { property: 'Menu background', token: 'bg.secondary', value: '#141519' },
      { property: 'Menu border', token: 'border.subtle', value: '#222222' },
      { property: 'Menu border-radius', token: 'radius.md', value: '8px' },
      { property: 'Item border-radius', token: 'radius.sm', value: '4px' },
      { property: 'Item label color', token: 'content.secondary', value: '#E8E8E8' },
      { property: 'Item icon color', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Item hover background', token: 'surface.secondary', value: '#222222' },
      { property: 'Title color', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Divider color', token: 'border.subtle', value: '#222222' },
      { property: 'Menu gap', token: 'spacing.xs', value: '4px' },
      { property: 'Item padding', token: 'spacing.sm', value: '8px' },
    ],
    anatomy: `Container: bg-secondary, border-subtle, radius-md 8px, shadow 0 4px 12px rgba(0,0,0,0.3), padding 8px, gap 4px

FloatingMenu.Title — rótulo de seção: content-tertiary, 14px (padrão) ou 10px (size="sm"), padding-left 8px
FloatingMenu.Item — botão: 32px height, padding 0 8px, gap 8px, radius-sm 4px
  └ [Icon?: 20px Material Symbols Outlined, content-tertiary] [Label: Inter 14px, content-secondary, flex-1]
  └ :hover → background surface-secondary | :disabled → opacity 0.45, cursor not-allowed
FloatingMenu.Divider — separador: 1px solid border-subtle, full-width`,
    code: {
      html: `<!-- Floating Menu TRDR — HTML com classes globais -->

<!-- Exemplo 1: ações simples (sem título) -->
<div class="trdr-floating-menu" style="width:172px" role="menu">
  <button class="trdr-floating-menu-item" role="menuitem">
    <span class="material-symbols-outlined" style="font-size:20px;line-height:20px;font-variation-settings:'FILL' 0,'GRAD' 0;color:var(--content-tertiary)">close</span>
    Fechar
  </button>
  <button class="trdr-floating-menu-item" role="menuitem">
    <span class="material-symbols-outlined" style="font-size:20px;line-height:20px;font-variation-settings:'FILL' 0,'GRAD' 0;color:var(--content-tertiary)">remove</span>
    Minimizar
  </button>
  <button class="trdr-floating-menu-item" role="menuitem">
    <span class="material-symbols-outlined" style="font-size:20px;line-height:20px;font-variation-settings:'FILL' 0,'GRAD' 0;color:var(--content-tertiary)">keep</span>
    Fixar
  </button>
</div>

<!-- Exemplo 2: com título, divisor e seções -->
<div class="trdr-floating-menu" style="width:240px" role="menu">
  <p class="trdr-floating-menu-title">Favoritos</p>
  <button class="trdr-floating-menu-item" role="menuitem">
    <span class="material-symbols-outlined" style="font-size:20px;line-height:20px;font-variation-settings:'FILL' 0,'GRAD' 0;color:var(--content-tertiary)">star</span>
    WINFUT (Q19)
  </button>
  <button class="trdr-floating-menu-item" role="menuitem">
    <span class="material-symbols-outlined" style="font-size:20px;line-height:20px;font-variation-settings:'FILL' 0,'GRAD' 0;color:var(--content-tertiary)">star</span>
    PETR4
  </button>
  <div class="trdr-floating-menu-divider" role="separator"></div>
  <p class="trdr-floating-menu-title">Recentes</p>
  <button class="trdr-floating-menu-item" role="menuitem">
    <span class="material-symbols-outlined" style="font-size:20px;line-height:20px;font-variation-settings:'FILL' 0,'GRAD' 0;color:var(--content-tertiary)">history</span>
    BBDC4
  </button>
  <div class="trdr-floating-menu-divider" role="separator"></div>
  <button class="trdr-floating-menu-item" role="menuitem">
    <span class="material-symbols-outlined" style="font-size:20px;line-height:20px;font-variation-settings:'FILL' 0,'GRAD' 0;color:var(--content-tertiary)">search</span>
    Buscar ativo...
  </button>
</div>`,
      css: `/* Floating Menu TRDR — classes globais */

/* Container */
.trdr-floating-menu {
  background: var(--bg-secondary);          /* #141519 */
  border: 1px solid var(--border-subtle);   /* #222222 */
  border-radius: var(--radius-md);          /* 8px */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.30);
  padding: var(--spacing-sm);               /* 8px */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);                   /* 4px */
  overflow: hidden;
}

/* Item — botão de ação */
.trdr-floating-menu-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);                   /* 8px */
  height: 32px;
  padding: 0 var(--spacing-sm);
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);          /* 4px */
  cursor: pointer;
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--content-secondary);          /* #E8E8E8 */
  text-align: left;
  width: 100%;
  flex-shrink: 0;
  transition: background 0.12s ease;
}

.trdr-floating-menu-item:not(:disabled):hover {
  background: var(--surface-secondary);     /* #222222 */
}

.trdr-floating-menu-item:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

/* Título de seção */
.trdr-floating-menu-title {
  color: var(--content-tertiary);           /* #A4A4A4 */
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  width: 100%;
  flex-shrink: 0;
  padding: 0 var(--spacing-sm);
}

.trdr-floating-menu-title-sm {             /* size="sm" — mercados, color-picker */
  font-size: 10px;
  line-height: 15px;
  padding: 4px var(--spacing-xs) 2px;
}

/* Divisor */
.trdr-floating-menu-divider {
  height: 1px;
  background: var(--border-subtle);        /* #222222 */
  width: 100%;
  flex-shrink: 0;
}`,
      react: `import FloatingMenu from '@/components/ui/FloatingMenu'

// Ações simples (como na Janela)
<FloatingMenu width={172}>
  <FloatingMenu.Item icon="close" onClick={onClose}>Fechar</FloatingMenu.Item>
  <FloatingMenu.Item icon="remove" onClick={onMinimize}>Minimizar</FloatingMenu.Item>
  <FloatingMenu.Item icon="arrow_outward" onClick={onMaximize}>Maximizar</FloatingMenu.Item>
  <FloatingMenu.Item icon="keep" onClick={onPin}>Fixar</FloatingMenu.Item>
  <FloatingMenu.Item icon="edit" onClick={onRename}>Renomear aba</FloatingMenu.Item>
</FloatingMenu>

// Com seções e divisores (como seletor de ativo)
<FloatingMenu width={280}>
  <FloatingMenu.Title>Favoritos</FloatingMenu.Title>
  <FloatingMenu.Item icon="star" onClick={() => selectAtivo('WINFUT')}>WINFUT (Q19)</FloatingMenu.Item>
  <FloatingMenu.Item icon="star" onClick={() => selectAtivo('PETR4')}>PETR4</FloatingMenu.Item>
  <FloatingMenu.Divider />
  <FloatingMenu.Title>Recentes</FloatingMenu.Title>
  <FloatingMenu.Item icon="history" onClick={() => selectAtivo('BBDC4')}>BBDC4</FloatingMenu.Item>
  <FloatingMenu.Item icon="history" onClick={() => selectAtivo('ITUB4')}>ITUB4</FloatingMenu.Item>
  <FloatingMenu.Divider />
  <FloatingMenu.Item icon="search">Buscar ativo...</FloatingMenu.Item>
</FloatingMenu>

// Item desabilitado
<FloatingMenu width={240}>
  <FloatingMenu.Item icon="bar_chart">Volume</FloatingMenu.Item>
  <FloatingMenu.Item icon="trending_up">Média Móvel</FloatingMenu.Item>
  <FloatingMenu.Item icon="add" disabled>Indicador premium</FloatingMenu.Item>
</FloatingMenu>

// Conteúdo customizado (qualquer ReactNode como children)
<FloatingMenu width={260}>
  <FloatingMenu.Title>Conta</FloatingMenu.Title>
  <div style={{ padding: '4px 8px' }}>
    {/* Dropdown, Checkbox, Slider, etc. */}
  </div>
  <FloatingMenu.Divider />
  <FloatingMenu.Item icon="logout">Sair</FloatingMenu.Item>
</FloatingMenu>`,
      prompt: `Implemente o componente FloatingMenu do Design System TRDR — menu flutuante genérico pixel-perfect com Figma 1921:55380.

COMPOUND COMPONENT — 4 partes:
1. FloatingMenu (container): bg var(--bg-secondary) #141519, border 1px solid var(--border-subtle) #222, border-radius var(--radius-md) 8px, box-shadow 0 4px 12px rgba(0,0,0,0.30), padding var(--spacing-sm) 8px, gap var(--spacing-xs) 4px, flex-col, overflow hidden. Prop width?: number|string.

2. FloatingMenu.Item (button): height 32px, padding 0 var(--spacing-sm) 8px, gap var(--spacing-sm) 8px, border-radius var(--radius-sm) 4px, background transparent, color var(--content-secondary) #E8E8E8, font Inter 14px/400. :hover (não disabled) → background var(--surface-secondary) #222. :disabled → opacity 0.45, cursor not-allowed. Props: icon?: string (Material Symbols name), disabled?: boolean, onClick, children.

3. FloatingMenu.Title (p): color var(--content-tertiary) #A4A4A4, font Inter 14px/400. Prop size: "default" (14px, padding-left 8px) | "sm" (10px/15px, padding 4px 4px 2px — usado em mercados/color-picker). children: string.

4. FloatingMenu.Divider (div): height 1px, background var(--border-subtle) #222, width 100%.

ICON (Material Symbols Outlined): font-family 'Material Symbols Outlined', font-size 20px, line-height 20px, font-variation-settings: 'FILL' 0 'GRAD' 0, color var(--content-tertiary) #A4A4A4, flex-shrink 0.

LABEL: flex:1, min-width 0, overflow hidden, text-overflow ellipsis, white-space nowrap.

API: import FloatingMenu from '@/components/ui/FloatingMenu'
<FloatingMenu width={172}>
  <FloatingMenu.Item icon="close" onClick={fn}>Fechar</FloatingMenu.Item>
  <FloatingMenu.Title>Seção</FloatingMenu.Title>
  <FloatingMenu.Divider />
</FloatingMenu>

Use Object.assign(FloatingMenuRoot, { Item, Title, Divider }) para montar o compound component. NUNCA hex direto — apenas tokens var(--*). NUNCA --scale-spacing-* ou --scale-radius-*.`,
    },
  },

  // =========================================================================
  // JANELA — composto: header + abas de filtros + container com slot
  // =========================================================================
  {
    slug: 'janela',
    name: 'Janela',
    figmaId: '1909:41600',
    category: 'trading',
    implemented: true,
    description: 'Janela de ferramenta de trading — componente composto com header (badge AI, abas de ferramentas com underline, dropdown Multi e ações), linha de abas em pill (filtros) e Container central com slot swappable que recebe qualquer conteúdo via children. Inclui floating menu opcional de ações (Fechar, Minimizar, Maximizar, Fixar, Renomear) e scrollbars laterais/inferior visuais.',
    props: [
      { name: 'tools', type: 'JanelaTool[]', values: ['{ label, icon? }'] },
      { name: 'activeTool', type: 'number', values: ['0', '1', '2'] },
      { name: 'onToolChange', type: 'function', values: ['(index) => void'] },
      { name: 'tabs', type: 'string[]', values: ['["Aba 1", ...]'] },
      { name: 'activeTab', type: 'number', values: ['0..N'] },
      { name: 'onTabChange', type: 'function', values: ['(index) => void'] },
      { name: 'multiLabel', type: 'string', values: ['Multi'] },
      { name: 'showSideScroll', type: 'boolean', values: ['true', 'false'] },
      { name: 'showBottomScroll', type: 'boolean', values: ['true', 'false'] },
      { name: 'showActionsMenu', type: 'boolean', values: ['true', 'false'] },
      { name: 'actions', type: 'JanelaAction[]', values: ['{ icon, label, onClick? }'] },
      { name: 'children', type: 'ReactNode', values: ['conteúdo do slot central'] },
    ],
    dimensions: [
      { label: 'Janela total', width: '476px', height: '312px' },
      { label: 'Header', width: '476px', height: '41px' },
      { label: 'Pill tabs row', width: '476px', height: '45px' },
      { label: 'Container central', width: '476px', height: '226px' },
      { label: 'Tag AI', width: 'hug', height: '19px' },
      { label: 'Pill (filtro)', width: 'hug', height: '31px' },
      { label: 'Botão Multi', width: '65px', height: '33px' },
      { label: 'Floating actions menu', width: '172px', height: '192px' },
      { label: 'Scrollbar lateral', width: '14px', height: '—' },
      { label: 'Scrollbar inferior', width: '—', height: '14px' },
    ],
    tokens: [
      { property: 'Janela bg / Header bg', token: 'bg.secondary', value: '#141519' },
      { property: 'Pill row bg / Container bg', token: 'bg.tertiary', value: '#1A1A1A' },
      { property: 'Tag AI bg', token: 'bg.brand', value: '#00D4FF' },
      { property: 'Pill ativa bg / Multi bg', token: 'action.secondary.default', value: '#4A4A4A' },
      { property: 'Pill inativa bg', token: 'surface.secondary', value: '#222222' },
      { property: 'Texto pill ativa / título', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Texto item floating', token: 'content.secondary', value: '#E8E8E8' },
      { property: 'Texto pill inativa / ícones / aba inativa', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Ícone link / underline aba ativa', token: 'bg.brand', value: '#00D4FF' },
      { property: 'Stroke header / pill row / floating', token: 'border.subtle', value: '#222222' },
      { property: 'Radius pill / botão Multi', token: 'radius.lg', value: '16px' },
      { property: 'Radius janela / floating menu', token: 'radius.md', value: '8px' },
      { property: 'Radius Tag AI / item floating', token: 'radius.sm', value: '4px' },
      { property: 'Padding pill / gap header', token: 'spacing.sm', value: '8px' },
      { property: 'Padding pill horizontal', token: 'spacing.md', value: '12px' },
      { property: 'Padding container interno', token: 'spacing.lg', value: '16px' },
    ],
    anatomy: `Janela 476×312 com border-radius 8px e border subtle, em coluna:

1. HEADER (41px, bg --bg-secondary, border-bottom subtle):
   [Tag AI 19h #00D4FF radius 4] · [Tabs Ferramentas 14/16.8 com underline 2px brand na ativa + chevron 40×40] · [Divider 1×33 · Link cyan 24×24 · Multi 65×33 bg secondary radius 16 · more_horiz 24×24 · close 24×24]

2. PILL TABS (45px, bg --bg-tertiary, padding 8, gap 8, border-bottom subtle):
   5 pills 31h padding 8/12 radius 16. Ativa: bg --action-secondary-default + texto primary. Inativas: bg --surface-secondary + texto tertiary.

3. CONTAINER (226px, bg --bg-tertiary, padding 16, gap 8):
   Slot via children. Fallback visual: texto "Componente coringa". Scrollbars opcionais (lateral 14×, inferior ×14) com setas Material e thumb arredondado radius 16.

4. FLOATING ACTIONS MENU (172×192, opcional, ancorado em more_horiz):
   bg --bg-secondary, border subtle, radius 8, shadow drop. 5 ações (Fechar/Minimizar/Maximizar/Fixar/Renomear) 32h cada com ícone Material 20px tertiary + label Inter 14 secondary. Hover bg --surface-secondary.`,
    notes: 'Slot via React.children: passe qualquer componente (Boleta, Card, gráfico, etc.) como filho. O componente expõe estado controlado e não-controlado para activeTool/activeTab.',
    code: {
      html: `<!-- Janela TRDR — exemplo estático (Figma 1909:41600) -->
<div class="trdr-janela">

  <!-- HEADER -->
  <div class="trdr-janela-header">
    <span class="trdr-janela-tag-ai">
      <span class="material-symbols-outlined" style="font-size:12px">auto_awesome</span>
      AI
    </span>

    <div class="trdr-janela-tool-tabs">
      <button class="trdr-janela-tool-tab trdr-janela-tool-tab-active">Ferramenta 1</button>
      <button class="trdr-janela-tool-tab">Ferramenta 2</button>
      <button class="trdr-janela-tool-tab">Ferramenta 3</button>
      <button class="trdr-janela-tool-chevron">
        <span class="material-symbols-outlined">keyboard_arrow_down</span>
      </button>
    </div>

    <div class="trdr-janela-header-actions">
      <span class="trdr-janela-divider"></span>
      <button class="trdr-janela-icon-button trdr-janela-icon-link">
        <span class="material-symbols-outlined">link</span>
      </button>
      <button class="trdr-janela-multi">
        Multi
        <span class="material-symbols-outlined" style="font-size:16px">keyboard_arrow_down</span>
      </button>
      <button class="trdr-janela-icon-button">
        <span class="material-symbols-outlined">more_horiz</span>
      </button>
      <button class="trdr-janela-icon-button">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
  </div>

  <!-- PILL TABS (filtros) -->
  <div class="trdr-janela-pill-row" role="tablist">
    <button class="trdr-janela-pill trdr-janela-pill-active">Aba 1</button>
    <button class="trdr-janela-pill">Aba 2</button>
    <button class="trdr-janela-pill">Aba 3</button>
    <button class="trdr-janela-pill">Aba 4</button>
    <button class="trdr-janela-pill">Aba 5</button>
  </div>

  <!-- CONTAINER (slot) -->
  <div class="trdr-janela-container">
    <div class="trdr-janela-container-inner">
      <!-- Slot: substitua pelo seu componente -->
      <span class="trdr-janela-coringa">Componente coringa</span>
    </div>
  </div>

  <!-- FLOATING MENU (opcional — more_horiz) -->
  <div class="trdr-janela-actions-menu" role="menu">
    <button class="trdr-janela-action-item"><span class="material-symbols-outlined">close</span>Fechar</button>
    <button class="trdr-janela-action-item"><span class="material-symbols-outlined">remove</span>Minimizar</button>
    <button class="trdr-janela-action-item"><span class="material-symbols-outlined">arrow_outward</span>Maximizar</button>
    <button class="trdr-janela-action-item"><span class="material-symbols-outlined">keep</span>Fixar</button>
    <button class="trdr-janela-action-item"><span class="material-symbols-outlined">edit</span>Renomear aba</button>
  </div>

</div>`,
      css: `/* Janela TRDR — Figma 1909:41600 (476×312)
 * Tokens semânticos usados (todos em src/styles/tokens.css):
 * --bg-secondary #141519   --bg-tertiary #1A1A1A   --bg-brand #00D4FF
 * --surface-secondary #222222   --action-secondary-default #4A4A4A
 * --content-primary #FFFFFF   --content-secondary #E8E8E8   --content-tertiary #A4A4A4
 * --border-subtle #222222
 * --radius-sm 4px   --radius-md 8px   --radius-lg 16px
 * --spacing-xs 4px  --spacing-sm 8px  --spacing-md 12px  --spacing-lg 16px
 */

.trdr-janela {
  width: 476px;
  height: 312px;
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
  font-family: var(--font-secondary);
}

/* HEADER */
.trdr-janela-header {
  display: flex; align-items: center; gap: 8px;
  height: 41px; padding: 0 8px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-subtle);
}
.trdr-janela-tag-ai {
  display: inline-flex; align-items: center; gap: 2px;
  padding: 2px 4px;
  background: var(--bg-brand);
  border-radius: var(--radius-sm);
  font-size: 11px; font-weight: 600;
  color: var(--content-primary);
}
.trdr-janela-tool-tabs {
  display: flex; align-items: stretch; flex: 1; min-width: 0; height: 100%;
  overflow: hidden;
}
.trdr-janela-tool-tab {
  padding: 0 12px; height: 100%;
  background: transparent; border: none; cursor: pointer;
  font-size: 14px; line-height: 16.8px;
  color: var(--content-tertiary);
  position: relative; transition: color 0.15s ease;
  white-space: nowrap;
}
.trdr-janela-tool-tab:hover:not(.trdr-janela-tool-tab-active) { color: var(--content-secondary); }
.trdr-janela-tool-tab-active { color: var(--content-primary); }
.trdr-janela-tool-tab-active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0;
  height: 2px; background: var(--bg-brand);
}
.trdr-janela-tool-chevron {
  width: 40px; height: 40px;
  display: inline-flex; align-items: center; justify-content: center;
  background: transparent; border: none; cursor: pointer;
  color: var(--content-tertiary);
}
.trdr-janela-header-actions {
  display: flex; align-items: center; gap: 8px; flex-shrink: 0; height: 100%;
}
.trdr-janela-divider { width: 1px; height: 33px; background: var(--border-subtle); }
.trdr-janela-icon-button {
  width: 24px; height: 24px;
  display: inline-flex; align-items: center; justify-content: center;
  background: transparent; border: none; cursor: pointer;
  color: var(--content-tertiary);
  transition: color 0.15s ease;
}
.trdr-janela-icon-button:hover { color: var(--content-secondary); }
.trdr-janela-icon-link { color: var(--bg-brand); }
.trdr-janela-multi {
  display: inline-flex; align-items: center; gap: 4px;
  height: 33px; padding: 0 8px;
  background: var(--action-secondary-default);
  border: none; border-radius: var(--radius-lg);
  cursor: pointer;
  font-size: 14px; color: var(--content-primary);
}

/* PILL TABS (filtros) */
.trdr-janela-pill-row {
  display: flex; align-items: center; gap: 8px;
  height: 45px; padding: 8px;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-subtle);
  overflow: hidden;
}
.trdr-janela-pill {
  height: 31px; padding: 8px 12px;
  background: var(--surface-secondary);
  border: none; border-radius: var(--radius-lg);
  font-size: 14px; line-height: 16.8px;
  color: var(--content-tertiary);
  cursor: pointer; white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease;
}
.trdr-janela-pill-active {
  background: var(--action-secondary-default);
  color: var(--content-primary);
}

/* CONTAINER (slot) */
.trdr-janela-container {
  flex: 1; position: relative;
  background: var(--bg-tertiary);
  display: flex; flex-direction: column; overflow: hidden;
}
.trdr-janela-container-inner {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: 16px; gap: 8px; overflow: auto; min-height: 0;
}
.trdr-janela-coringa {
  font-size: 14px; line-height: 16.8px; color: var(--content-primary);
}

/* FLOATING MENU */
.trdr-janela-actions-menu {
  position: absolute; top: 45px; right: 40px;
  width: 172px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 12px rgba(0,0,0,0.30);
  padding: 8px; display: flex; flex-direction: column; gap: 4px;
  z-index: 10;
}
.trdr-janela-action-item {
  display: flex; align-items: center; gap: 8px;
  height: 32px; padding: 0 8px;
  background: transparent; border: none; cursor: pointer;
  border-radius: var(--radius-sm);
  font-size: 14px; line-height: 16.8px;
  color: var(--content-secondary);
  text-align: left;
  transition: background 0.12s ease;
}
.trdr-janela-action-item:hover { background: var(--surface-secondary); }
.trdr-janela-action-item .material-symbols-outlined { color: var(--content-tertiary); font-size: 20px; }`,
      react: `import Janela from '@/components/ui/Janela'
import Boleta from '@/components/ui/Boleta'

// Versão default — slot vazio mostra "Componente coringa"
<Janela />

// Com tabs/ferramentas customizadas e callback
<Janela
  tools={[
    { label: 'Book', icon: 'view_list' },
    { label: 'Gráfico', icon: 'show_chart' },
  ]}
  tabs={['Mercado', 'Posições', 'Histórico']}
  activeTab={0}
  onTabChange={(i) => console.log('tab', i)}
/>

// Com conteúdo customizado no slot
<Janela activeTab={2} showSideScroll showBottomScroll>
  <Boleta versao="simples" />
</Janela>

// Com floating menu de ações aberto
<Janela
  showActionsMenu
  onActionsMenuToggle={() => setMenuOpen(v => !v)}
  actions={[
    { icon: 'close', label: 'Fechar', onClick: handleClose },
    { icon: 'remove', label: 'Minimizar' },
    { icon: 'arrow_outward', label: 'Maximizar' },
  ]}
/>`,
      prompt: `Implemente o componente Janela do Design System TRDR — janela de ferramenta de trading composta, pixel-perfect com o Figma 1909:41600.

DIMENSÕES (fixas): 476×312 px, border-radius var(--radius-md) (8px), border 1px solid var(--border-subtle), background var(--bg-secondary), overflow hidden, position relative, font-family var(--font-secondary). Layout em coluna com 3 faixas:

1. HEADER (height 41px, bg var(--bg-secondary), border-bottom 1px var(--border-subtle), padding 0 8px, gap 8px):
   - Tag AI: padding 2px 4px, gap 2px, bg var(--bg-brand) #00D4FF, border-radius var(--radius-sm) 4px, texto "AI" Inter 11/600 var(--content-primary). Ícone Material "auto_awesome" 12px à esquerda.
   - Abas Ferramentas (flex:1, height 100%, overflow hidden): 3 botões "Ferramenta N", padding 0 12px, font Inter 14/16.8 var(--content-tertiary); ativa muda para var(--content-primary) e ganha ::after com height 2px var(--bg-brand) (#00D4FF) no bottom 0 left/right 0. Botão chevron 40×40 com ícone Material "keyboard_arrow_down" tertiary.
   - Controles à direita (gap 8px): divider vertical 1×33 var(--border-subtle); botão ícone "link" 24×24 cor var(--bg-brand) (cyan); botão "Multi" 33h padding 0 8px gap 4 bg var(--action-secondary-default) (#4A4A4A) radius var(--radius-lg) (16px) texto primary + chevron 16px; botões ícone "more_horiz" e "close" 24×24 tertiary.

2. PILL TABS (height 45px, bg var(--bg-tertiary) #1A1A1A, padding 8px, gap 8px, border-bottom subtle, overflow hidden):
   - 5 pills "Aba 1..Aba 5". Cada pill 31h padding 8px 12px radius var(--radius-lg) Inter 14/16.8 whitespace nowrap.
   - Ativa: bg var(--action-secondary-default) #4A4A4A, texto var(--content-primary).
   - Inativa: bg var(--surface-secondary) #222222, texto var(--content-tertiary). Hover muda texto para var(--content-secondary).

3. CONTAINER CENTRAL (flex 1, bg var(--bg-tertiary), padding 16px, gap 8px, position relative, overflow hidden):
   - Slot via children. Quando vazio mostrar fallback "Componente coringa" centralizado, Inter 14/16.8 var(--content-primary).
   - Scrollbars opcionais (controlados por props showSideScroll/showBottomScroll):
     • Lateral (right 0, top 0, bottom 6px, width 14px, bg var(--bg-secondary), border-left subtle): seta cima 12×12 Material "arrow_drop_up", track 6px com thumb radius 16 bg var(--action-secondary-default) 60% de altura, seta baixo "arrow_drop_down".
     • Inferior (left 0, right 14px, height 14px, bg var(--bg-secondary), border-top subtle): seta esquerda "arrow_left", track horizontal com thumb radius 16, seta direita "arrow_right".
     • Canto: quando ambos ativos, 14×14 no canto inferior direito com bg secondary e borders.

4. FLOATING ACTIONS MENU (opcional, posição absoluta top 45px right 40px, width 172px):
   - bg var(--bg-secondary), border 1px var(--border-subtle), border-radius var(--radius-md) (8px), box-shadow 0 4px 12px rgba(0,0,0,0.30), padding 8px, gap 4px, z-index 10.
   - 5 ações: { close: Fechar, remove: Minimizar, arrow_outward: Maximizar, keep: Fixar, edit: Renomear aba }. Cada item: height 32px, padding 0 8px, gap 8px, border-radius var(--radius-sm), ícone Material 20px var(--content-tertiary), label Inter 14/16.8 var(--content-secondary). Hover bg var(--surface-secondary).

API React (TypeScript): props { tools?: JanelaTool[]; activeTool?: number; onToolChange?; tabs?: string[]; activeTab?: number; onTabChange?; multiLabel?: string; onMultiClick?; onLinkClick?; onClose?; showSideScroll?: boolean; showBottomScroll?: boolean; showActionsMenu?: boolean; onActionsMenuToggle?; actions?: JanelaAction[]; children?: ReactNode }. Suporta estado controlado E não-controlado (defaultActiveTool/defaultActiveTab). aria-selected nas pills, aria-expanded no botão de menu, role="tab"/"tablist"/"menu"/"menuitem".

Use APENAS tokens semânticos do TRDR (var(--bg-*), var(--surface-*), var(--content-*), var(--action-*), var(--border-*), var(--radius-*), var(--spacing-*)). NUNCA hex direto. NUNCA --scale-spacing-* ou --scale-radius-* (não existem). O componente deve funcionar nos dois temas (light e dark) sem alterações.`,
    },
  },

  // =========================================================================
  // NEWS CARD
  // =========================================================================
  {
    slug: 'news-card',
    name: 'News Card',
    figmaId: '66:2373',
    category: 'trading',
    description: 'Card de notícia financeira — exibe título, fonte, tempo e indicador de sentimento (alta/baixa/neutro). Usado em feeds de notícias dentro do contexto de trading.',
    implemented: true,
    props: [
      { name: 'sentiment', type: 'enum', values: ['up', 'down', 'neutral'] },
      { name: 'title', type: 'string', values: [] },
      { name: 'source', type: 'string', values: [] },
      { name: 'time', type: 'string', values: [] },
      { name: 'href', type: 'string', values: [] },
    ],
    dimensions: [
      { label: 'Default', width: '100%', height: '74px' },
      { label: 'Dot indicador', width: '4px', height: '4px' },
      { label: 'Botão de ação', width: '20px', height: '20px' },
    ],
    tokens: [
      { property: 'Border bottom', token: 'border.subtle', value: '#222222' },
      { property: 'Dot — alta', token: 'context.trading.up', value: '#4FE290' },
      { property: 'Dot — baixa', token: 'context.trading.down', value: '#F34F45' },
      { property: 'Dot — neutro', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Título', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Fonte / Tempo', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Separador •', token: 'content.disabled', value: '#4A4A4A' },
      { property: 'Hover BG', token: 'surface.secondary', value: '#222222' },
      { property: 'Padding', token: 'spacing.sm + spacing.lg', value: '8px 16px' },
      { property: 'Gap inner', token: 'spacing.sm', value: '8px' },
      { property: 'Radius botão', token: 'radius.sm', value: '4px' },
    ],
    anatomy: `Container (border-bottom subtle, padding 8px 16px):\n  [Dot 4×4px] [Content flex-1 gap-8px] [Action 20×20px]\n  Content:\n    [Title — Inter 14/400/1.2 content-primary]\n    [Meta row gap-8px h-16px]\n      [Source 14/400] [• 12px disabled] [Time 14/400]`,
    notes: 'O dot indicador sobe (up) ou desce (down) conforme sentimento da notícia. Hover aplica surface.secondary. Quando href é passado, o container se torna um <a> com target _blank.',
    code: {
      html: `<!-- News Card — Design System TRDR (Figma: 66:2373) -->
<!-- sentiment: adicionar .trdr-news-card-dot-up | -down | -neutral -->
<div class="trdr-news-card">
  <div class="trdr-news-card-inner">
    <div class="trdr-news-card-dot trdr-news-card-dot-up"></div>
    <div class="trdr-news-card-content">
      <p class="trdr-news-card-title">Bitcoin ETF sees record inflows as institutional interest grows</p>
      <div class="trdr-news-card-meta">
        <span class="trdr-news-card-source">CoinDesk</span>
        <span class="trdr-news-card-sep">•</span>
        <span class="trdr-news-card-time">2h ago</span>
      </div>
    </div>
    <button class="trdr-news-card-action" aria-label="Abrir notícia">
      <span class="material-symbols-outlined" style="font-size:12px;line-height:12px">open_in_new</span>
    </button>
  </div>
</div>`,
      css: `/* News Card — Design System TRDR (Figma node: 66:2373, 313×74) */
.trdr-news-card {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;        /* --spacing-sm --spacing-lg */
  border-bottom: 1px solid var(--border-subtle);  /* #222222 */
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.trdr-news-card:hover {
  background-color: var(--surface-secondary);     /* #222222 */
}

.trdr-news-card-inner {
  display: flex;
  gap: 8px;                 /* --spacing-sm */
  align-items: flex-start;
  width: 100%;
}

.trdr-news-card-dot {
  width: 4px;
  height: 4px;
  border-radius: 9999px;
  flex-shrink: 0;
  margin-top: 6px;
}

.trdr-news-card-dot-up     { background-color: var(--context-trading-up);   }  /* #4FE290 */
.trdr-news-card-dot-down   { background-color: var(--context-trading-down); }  /* #F34F45 */
.trdr-news-card-dot-neutral{ background-color: var(--content-tertiary);     }  /* #A4A4A4 */

.trdr-news-card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.trdr-news-card-title {
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--content-primary);                  /* #FFFFFF */
  width: 100%;
}

.trdr-news-card-meta {
  display: flex;
  gap: 8px;
  align-items: center;
  height: 16px;
  white-space: nowrap;
}

.trdr-news-card-source,
.trdr-news-card-time {
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--content-tertiary);                 /* #A4A4A4 */
}

.trdr-news-card-sep {
  font-size: 12px;
  line-height: 16px;
  color: var(--content-disabled);                 /* #4A4A4A */
}

.trdr-news-card-action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-sm);                /* 4px */
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--content-tertiary);
  transition: background-color 0.15s ease;
}

.trdr-news-card-action:hover {
  background-color: var(--surface-secondary);
}`,
      react: `import NewsCard from '@/components/ui/NewsCard'

// Notícia de alta (dot verde)
<NewsCard
  sentiment="up"
  title="Bitcoin ETF sees record inflows as institutional interest grows"
  source="CoinDesk"
  time="2h ago"
  href="https://coindesk.com/article/..."
/>

// Notícia de baixa (dot vermelho)
<NewsCard
  sentiment="down"
  title="Petrobras shares fall on dividend cut concerns"
  source="Valor Econômico"
  time="45m ago"
/>

// Neutro com callback no botão de ação
<NewsCard
  sentiment="neutral"
  title="Banco Central mantém Selic em 10,5% ao ano"
  source="Folha"
  time="1h ago"
  onShare={() => console.log('share clicked')}
/>`,
      prompt: `Implemente o componente NewsCard do Design System TRDR — card de notícia financeira, pixel-perfect com o Figma 66:2373.

DIMENSÕES (fixas): width 100%, border-bottom 1px solid var(--border-subtle) (#222222), padding 8px 16px, cursor pointer. Hover: background-color var(--surface-secondary) (#222222).

LAYOUT INTERNO (flex-row, gap 8px, align-items flex-start):
1. DOT INDICADOR (4×4px, border-radius 9999px, flex-shrink 0, margin-top 6px):
   - sentiment="up"      → background var(--context-trading-up) #4FE290
   - sentiment="down"    → background var(--context-trading-down) #F34F45
   - sentiment="neutral" → background var(--content-tertiary) #A4A4A4

2. CONTENT (flex: 1, flex-col, gap 8px, min-width 0):
   - Título: font-family var(--font-secondary), 14px/400/1.2, color var(--content-primary) #FFFFFF, width 100%
   - Meta row (flex-row, gap 8px, height 16px, white-space nowrap, align-items center):
     • Fonte: 14px/400/1.2 var(--content-tertiary) #A4A4A4
     • Separador "•": 12px/16px var(--content-disabled) #4A4A4A
     • Tempo: 14px/400/1.2 var(--content-tertiary) #A4A4A4

3. BOTÃO DE AÇÃO (20×20px, border-radius var(--radius-sm) 4px, padding 4px, flex-shrink 0):
   - background transparent, border none, color var(--content-tertiary)
   - Hover: background var(--surface-secondary)
   - Ícone: Material Symbols "open_in_new" 12px

API React: props { title: string; source: string; time: string; sentiment?: 'up' | 'down' | 'neutral'; href?: string; onShare?: () => void }
Quando href é passado, renderizar como <a target="_blank" rel="noreferrer">, senão como <div>.

Use APENAS tokens semânticos do TRDR. NUNCA hex direto. NUNCA --scale-spacing-* ou --scale-radius-*.`,
    },
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

export function getComponentByFigmaId(figmaId: string): DesignComponent | undefined {
  return components.find(c => c.figmaId === figmaId)
}
