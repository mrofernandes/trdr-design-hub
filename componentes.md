# TRDR Design System — Componentes

> Documentação dos componentes do Design System TRDR. Use este arquivo junto com `designtokens.md` para construir qualquer interface com consistência pixel-perfect.

**Atualizado em:** 2026-04-11  
**Fontes primárias:** Figma (arquivo de Componentes TRDR) · 82 componentes  
**Arquivo:** `componentes.md`

---

## Categorias

| Categoria | Descrição |
|---|---|
| `formulario` | Inputs, botões, checkboxes, selects e controles de formulário |
| `modal` | Modais, drawers, tooltips e overlays |
| `navegacao` | Tabs, breadcrumbs, menus e navegação |
| `floating-menu` | Menus flutuantes, dropdowns e popovers |
| `trading` | Componentes específicos da plataforma de trading |
| `configuracao` | Painéis e componentes de configuração |
| `ia` | Componentes de Inteligência Artificial |
| `outros` | Componentes diversos |

---

## Como usar este arquivo

Cada componente documenta:
- **Tokens** — quais CSS custom properties usar (`var(--bg-secondary)`, etc.)
- **Props/Variantes** — combinações visuais disponíveis no Figma
- **Dimensões** — tamanhos por variante
- **Anatomia** — estrutura HTML esperada
- **Código** — implementação copiável (HTML+CSS e React)

Para obter tokens completos, consulte `designtokens.md`.

---

## Componentes por Categoria

### Formulário / Controles

#### Button
- **Figma ID:** `1318:749`
- **Variantes:** Primary, Secondary, Ghost, Link, Link Danger, Destructive, Inverse, Long, Short, Secondary Destruct
- **Tamanhos:** Default (24px altura), Large (32px altura)
- **Estados:** Default, Hover, Pressed, Disabled
- **Tokens principais:**
  - background: `var(--action-brand-default)` (Primary)
  - color: `var(--content-inverse)`
  - border-radius: `var(--scale-radius-sm)`
  - padding: `0 var(--scale-spacing-md)`

#### Input / TextField
- **Figma ID:** consultar Figma
- **Variantes:** Default, Error, Disabled, With Icon
- **Tokens principais:**
  - background: `var(--surface-primary)`
  - border: `1px solid var(--border-default)`
  - border-radius: `var(--scale-radius-sm)`
  - color: `var(--content-primary)`
  - placeholder: `var(--content-placeholder)`

---

> **Nota:** Este arquivo está em construção. Os componentes serão documentados progressivamente conforme são implementados no Design Hub. Para a listagem completa dos 82 componentes com props e tokens, acesse `/componentes` no Design Hub.
