# TRDR Design System

> Fonte de verdade do Design System TRDR. Qualquer interface ou IA deve conseguir construir qualquer tela consistente usando apenas este documento.

**Atualizado em:** 2026-04-08  
**Fontes primárias:** Figma (`design-system-variables.xlsx`) · 292 tokens · 82 componentes

---

## 1. Tokens Primitivos

Valores brutos sem semântica. **Nunca usar diretamente na UI** — sempre via tokens semânticos (Seção 2).

### 1.1 Cores

#### Azul (Blue)

| Token | Hex |
|---|---|
| `color.blue.50` | `#F0F7FF` |
| `color.blue.100` | `#E0EEFF` |
| `color.blue.200` | `#C1DDFF` |
| `color.blue.300` | `#A2CDFF` |
| `color.blue.400` | `#84BFFF` |
| `color.blue.500` | `#65B0FF` |
| `color.blue.600` | `#3D99FF` |
| `color.blue.700` | `#1E82FF` |
| `color.blue.800` | `#0066FF` |
| `color.blue.900` | `#0052CC` |

**Blue — alpha:**

| Token | Hex |
|---|---|
| `color.blue.500.alpha.08` | `#65B0FF14` |
| `color.blue.500.alpha.16` | `#65B0FF29` |
| `color.blue.500.alpha.32` | `#65B0FF52` |

#### Neutro (Neutral)

| Token | Hex |
|---|---|
| `color.neutral.50` | `#FFFFFF` |
| `color.neutral.100` | `#FAFAFA` |
| `color.neutral.200` | `#F5F5F5` |
| `color.neutral.300` | `#EEEEEE` |
| `color.neutral.400` | `#E8E8E8` |
| `color.neutral.500` | `#D2D2D2` |
| `color.neutral.600` | `#A4A4A4` |
| `color.neutral.700` | `#777777` |
| `color.neutral.800` | `#4A4A4A` |
| `color.neutral.900` | `#222222` |
| `color.neutral.1000` | `#1A1A1A` |
| `color.neutral.1100` | `#141519` |
| `color.neutral.1200` | `#0E0E0E` |

**Neutral — alpha:**

| Token | Hex |
|---|---|
| `color.neutral.600.alpha.0` | `#A4A4A400` |
| `color.neutral.600.alpha.08` | `#A4A4A414` |
| `color.neutral.600.alpha.16` | `#A4A4A429` |
| `color.neutral.600.alpha.32` | `#A4A4A452` |
| `color.neutral.1200.alpha.0` | `#0E0E0E00` |
| `color.neutral.1200.alpha.08` | `#0E0E0E14` |
| `color.neutral.1200.alpha.16` | `#0E0E0E29` |
| `color.neutral.1200.alpha.32` | `#0E0E0E52` |

#### Vermelho (Red)

| Token | Hex |
|---|---|
| `color.red.50` | `#FEF2F0` |
| `color.red.100` | `#FDE5E0` |
| `color.red.200` | `#FBC7C1` |
| `color.red.300` | `#F9A9A2` |
| `color.red.400` | `#F78B83` |
| `color.red.500` | `#F56D64` |
| `color.red.600` | `#F34F45` |
| `color.red.700` | `#F13126` |
| `color.red.800` | `#D91B0F` |
| `color.red.900` | `#A01407` |

**Red — alpha:**

| Token | Hex |
|---|---|
| `color.red.600.alpha.08` | `#F34F4514` |
| `color.red.600.alpha.12` | `#F34F451F` |
| `color.red.600.alpha.16` | `#F34F4529` |
| `color.red.600.alpha.32` | `#F34F4552` |
| `color.red.600.alpha.40` | `#F34F4566` |
| `color.red.600.alpha.48` | `#F34F457A` |
| `color.red.600.alpha.56` | `#F34F458F` |

#### Verde (Green)

| Token | Hex |
|---|---|
| `color.green.50` | `#F0FDF4` |
| `color.green.100` | `#E2FBEA` |
| `color.green.200` | `#C5F6D8` |
| `color.green.300` | `#A8F1C6` |
| `color.green.400` | `#8BECB4` |
| `color.green.500` | `#6DE7A2` |
| `color.green.600` | `#4FE290` |
| `color.green.700` | `#31DD7E` |
| `color.green.800` | `#13C870` |
| `color.green.900` | `#0B9E5C` |

**Green — alpha:**

| Token | Hex |
|---|---|
| `color.green.600.alpha.08` | `#4FE29014` |
| `color.green.600.alpha.12` | `#4FE2901F` |
| `color.green.600.alpha.16` | `#4FE29029` |
| `color.green.600.alpha.32` | `#4FE29052` |
| `color.green.600.alpha.40` | `#4FE29066` |
| `color.green.600.alpha.48` | `#4FE2907A` |
| `color.green.600.alpha.56` | `#4FE2908F` |

#### Amarelo (Yellow)

| Token | Hex |
|---|---|
| `color.yellow.50` | `#FFFBEB` |
| `color.yellow.100` | `#FFF7D6` |
| `color.yellow.200` | `#FFEFC2` |
| `color.yellow.300` | `#FFE8A8` |
| `color.yellow.400` | `#FFE18E` |
| `color.yellow.500` | `#FFDA74` |
| `color.yellow.600` | `#FFD35A` |
| `color.yellow.700` | `#FFCC40` |
| `color.yellow.800` | `#FFC500` |
| `color.yellow.900` | `#E6B000` |

**Yellow — alpha:**

| Token | Hex |
|---|---|
| `color.yellow.600.alpha.08` | `#FFD35A14` |
| `color.yellow.600.alpha.16` | `#FFD35A29` |
| `color.yellow.600.alpha.32` | `#FFD35A52` |

#### Laranja (Orange)

| Token | Hex |
|---|---|
| `color.orange.50` | `#FFF7ED` |
| `color.orange.100` | `#FFEDD5` |
| `color.orange.200` | `#FED7AA` |
| `color.orange.300` | `#FDBA74` |
| `color.orange.400` | `#FB923C` |
| `color.orange.500` | `#F97316` |
| `color.orange.600` | `#EA580C` |
| `color.orange.700` | `#C2410C` |
| `color.orange.800` | `#9A3412` |
| `color.orange.900` | `#7C2D12` |

**Orange — alpha:**

| Token | Hex |
|---|---|
| `color.orange.600.alpha.08` | `#EA580C14` |
| `color.orange.600.alpha.16` | `#EA580C29` |
| `color.orange.600.alpha.32` | `#EA580C52` |

#### Roxo (Purple)

| Token | Hex |
|---|---|
| `color.purple.50` | `#F1EFF5` |
| `color.purple.100` | `#D6D3E5` |
| `color.purple.200` | `#BBB4D6` |
| `color.purple.300` | `#9E94C9` |
| `color.purple.400` | `#8072BE` |
| `color.purple.500` | `#6350B3` |
| `color.purple.600` | `#50418E` |
| `color.purple.700` | `#3E3467` |
| `color.purple.800` | `#2A2542` |
| `color.purple.900` | `#161320` |

**Purple — alpha:**

| Token | Hex |
|---|---|
| `color.purple.500.alpha.08` | `#6350B314` |
| `color.purple.500.alpha.16` | `#6350B329` |
| `color.purple.500.alpha.32` | `#6350B352` |

---

### 1.2 Espaçamentos

| Token | Valor |
|---|---|
| `space.0` | `0px` |
| `space.50` | `4px` |
| `space.100` | `8px` |
| `space.200` | `12px` |
| `space.300` | `16px` |
| `space.400` | `20px` |
| `space.500` | `24px` |
| `space.600` | `32px` |
| `space.700` | `40px` |
| `space.800` | `48px` |
| `space.900` | `56px` |
| `space.1000` | `64px` |
| `space.1200` | `80px` |
| `space.1400` | `96px` |

---

### 1.3 Border Radius

| Token | Valor |
|---|---|
| `radius.0` | `0px` |
| `radius.50` | `2px` |
| `radius.100` | `4px` |
| `radius.200` | `8px` |
| `radius.300` | `12px` |
| `radius.400` | `16px` |
| `radius.500` | `20px` |
| `radius.600` | `24px` |
| `radius.700` | `32px` |
| `radius.full` | `9999px` |

---

### 1.4 Tipografia

#### Famílias de Fonte

| Token | Valor | Uso |
|---|---|---|
| `font.family.primary` | `Space Grotesk` | Títulos e displays |
| `font.family.secondary` | `Inter` | Corpo, labels, UI |
| `font.family.mono` | `Roboto Mono` | Código, dados numéricos |

#### Tamanhos de Fonte

| Token | Valor |
|---|---|
| `font.size.50` | `12px` |
| `font.size.100` | `14px` |
| `font.size.200` | `16px` |
| `font.size.300` | `18px` |
| `font.size.400` | `20px` |
| `font.size.500` | `24px` |
| `font.size.600` | `28px` |
| `font.size.700` | `32px` |
| `font.size.800` | `40px` |
| `font.size.900` | `48px` |

#### Pesos de Fonte

| Token | Valor |
|---|---|
| `font.weight.light` | `300` |
| `font.weight.regular` | `400` |
| `font.weight.medium` | `500` |
| `font.weight.semibold` | `600` |
| `font.weight.bold` | `700` |

#### Letter Spacing

| Token | Valor |
|---|---|
| `letter.spacing.tight` | `-0.8px` |
| `letter.spacing.normal` | `0px` |
| `letter.spacing.relaxed` | `0.2px` |
| `letter.spacing.loose` | `1px` |

---

### 1.5 Opacidades

| Token | Valor | Uso |
|---|---|---|
| `opacity.disabled` | `50%` | Estados desabilitados |
| `opacity.overlay` | `70%` | Overlays/modais |
| `opacity.hover` | `80%` | Estados de hover |

---

## 2. Tokens Semânticos

Tokens semânticos mapeiam primitivos para intenções de design. Suportam modo **dark** (padrão) e **light**. As colunas Dark/Light indicam o primitivo correspondente — consulte a Seção 1 para o valor hex.

> **Regra absoluta:** toda propriedade de cor na UI deve referenciar um token semântico. Nunca usar primitivos diretamente.

### 2.1 Backgrounds (`bg/`)

Cores de fundo de página e painéis globais. Hierarquia de profundidade: `bg/primary` (mais escuro/base) → `bg/secondary` → `bg/tertiary`.

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `bg/primary` | `--bg-primary` | `neutral.1200` | `neutral.300` | Fundo base de toda interface — a camada mais escura da hierarquia. Background da área de conteúdo principal e do canvas geral da plataforma de trading. É o "chão" sobre o qual todos os outros layers existem. Nunca nada deve ser mais escuro dentro de uma tela. |
| `bg/secondary` | `--bg-secondary` | `neutral.1100` | `neutral.200` | Fundo de painéis de navegação lateral (sidebar). O sutil tom frio/azulado cria separação visual da content area sem usar bordas. Exclusivo para elementos de navegação global — nunca para painéis internos de conteúdo. |
| `bg/tertiary` | `--bg-tertiary` | `neutral.1000` | `neutral.100` | Fundo de sub-áreas dentro do conteúdo principal. Situa-se entre bg/secondary e surface/secondary na hierarquia de profundidade. Na plataforma de trading: interior de sub-painéis e zonas de destaque dentro de janelas. |
| `bg/overlay` | `--bg-overlay` | `neutral.600/a16` | `neutral.600/a32` | Fundo de overlays, modais e drawers. Cobre o conteúdo abaixo com opacidade para focar atenção no modal. Sempre combinar com opacity/overlay. Nunca usar como fundo de página ou painel fixo. |
| `bg/inverse` | `--bg-inverse` | `neutral.50` | `neutral.1000` | Fundo claro (inverso) para casos onde a interface precisa de um contexto de alto contraste oposto ao tema dark. Usado em superfícies que precisam parecer "fora" do sistema dark. |
| `bg/Base alpha 0` | `--bg-base-alpha-0` | `neutral.1200/a0` | `neutral.600/a0` | Versão completamente transparente de bg/primary. Usada exclusivamente como ponto inicial ou final em gradientes que precisam "dissipar" sobre o fundo da página. Ex: hero gradient do hub. Nunca usar como fundo sólido. |
| `bg/bg-brand` | `--bg-bg-brand` | `blue.600` | `blue.600` | Fundo de áreas com destaque de marca primária. Usado em seções hero, banners de identidade TRDR e áreas de apresentação da marca. |
| `bg/bg-brand2` | `--bg-bg-brand2` | `purple.500` | `purple.500` | Variante secundária de fundo brand. Para contextos de marca menos prominentes ou que precisam de diferenciação visual em relação a bg/bg-brand. |
| `bg/bg-success` | `--bg-bg-success` | `green.700` | `green.700` | Fundo de áreas e banners de estado de sucesso. Versão contextual da cor de success para uso como background de seção. Usar para confirmações e banners de operação concluída. |
| `bg/bg-warning` | `--bg-bg-warning` | `yellow.700` | `yellow.700` | Fundo de áreas e banners de estado de aviso. Versão contextual da cor de warning para uso como background de seção inteira. Usar para banners de atenção e alertas de página. |
| `bg/bg-danger` | `--bg-bg-danger` | `red.600` | `red.600` | Fundo de áreas e banners de estado de perigo/erro crítico. Versão contextual da cor de error para uso como background de seção. Usar para alertas críticos e banners de sistema com erro grave. |

---

### 2.2 Superfícies (`surface/`)

Cores de superfície para cards, painéis de conteúdo e elementos interativos acima dos backgrounds.

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `surface/primary` | `--surface-primary` | `neutral.800` | `neutral.500` | Superfície neutra de média luminosidade. Usada para filter pills inativos, botões secundários em estado padrão e elementos de UI que precisam de um background visível mas sem cor. Indica "existe, pode interagir" sem destaque. |
| `surface/secondary` | `--surface-secondary` | `neutral.900` | `neutral.400` | Superfície padrão de cards, janelas e painéis de conteúdo — o token de superfície mais usado. No hub: fundo dos cards da home. Na plataforma: fundo das janelas e order book. Primeira camada de elevação acima de bg/primary. |
| `surface/tertiary` | `--surface-tertiary` | `neutral.1000` | `neutral.300` | Superfície para sub-seções dentro de um surface/secondary. Usado em painéis aninhados dentro de janelas ou áreas que precisam de uma terceira camada de profundidade visual. |
| `surface/interactive` | `--surface-interactive` | `blue.900` | `blue.400` | Superfície azul para estados ativos/selecionados em filtros, pills e seletores de segmento. Ex: filter pill ativo no hub. Reservado para filtros e toggles — NÃO usar para botão CTA primário (usar action/brand inverse/default). |
| `surface/disabled` | `--surface-disabled` | `neutral.1000` | `neutral.100` | Superfície de componentes desabilitados. Indica visualmente que o elemento não está disponível para interação. Combinar com content/disabled no texto. |
| `surface/brand` | `--surface-brand` | `blue.500/a16` | `blue.500/a16` | Superfície com cor brand para badges, tags e elementos com identidade visual TRDR. Usar em rótulos de produto, badges de destaque e elementos que comunicam pertencimento à marca. |
| `surface/info` | `--surface-info` | `blue.500/a08` | `blue.500/a08` | Fundo semi-transparente azul sutil para indicar contexto informativo em células, seções ou banners. Usar em tooltips expandidos e áreas de informação não-crítica. |
| `surface/success` | `--surface-success` | `green.600/a08` | `green.600/a08` | Fundo semi-transparente levíssimo (verde ~8% alpha) para indicar contexto positivo em células ou linhas. Ex: linha de ordem executada com sucesso, posição lucrativa. |
| `surface/warning` | `--surface-warning` | `yellow.600/a08` | `yellow.600/a08` | Fundo semi-transparente levíssimo (amarelo ~8% alpha) para indicar contexto de aviso em células ou áreas. Usar em linhas com condição de atenção — margem baixa, valores próximos do limite. |
| `surface/error` | `--surface-error` | `red.600/a08` | `red.600/a08` | Fundo semi-transparente levíssimo (vermelho ~8% alpha) para indicar contexto de erro em células ou linhas. Ex: linha da order book com ordem rejeitada. Nunca usar como fundo de card inteiro. |

---

### 2.3 Conteúdo (`content/`)

Cores de texto, ícones e elementos de conteúdo. Hierarquia: primary > secondary > tertiary > disabled/placeholder.

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `content/primary` | `--content-primary` | `neutral.50` | `neutral.1000` | Texto de máxima prioridade: títulos H1/H2, labels ativos de navegação, números críticos. Branco puro — máximo contraste sobre qualquer background dark. Usar quando o texto for o elemento mais importante daquele bloco. |
| `content/secondary` | `--content-secondary` | `neutral.400` | `neutral.900` | Texto de prioridade intermediária: subtítulos, descrições de cards, texto de corpo corrido, labels de formulário. Ligeiramente menos brilhante que /primary — cria hierarquia tipográfica sem perda de legibilidade. |
| `content/tertiary` | `--content-tertiary` | `neutral.600` | `neutral.800` | Texto de menor prioridade: labels de seção da sidebar (ex: "TOKENS", "COMPONENTES"), placeholders, metadados como fonte e horário, texto auxiliar. Nunca usar para texto que o usuário precise ler com atenção em fluxos críticos. |
| `content/placeholder` | `--content-placeholder` | `neutral.600` | `neutral.700` | Cor de texto placeholder em campos de input. Indica ao usuário o tipo de dado esperado antes de qualquer digitação. Desaparece ao digitar — nunca usar para texto de conteúdo permanente. |
| `content/disabled` | `--content-disabled` | `neutral.800` | `neutral.700` | Texto em estado desabilitado. Indica que o elemento não está disponível para interação. Usar APENAS em labels e textos de componentes no estado disabled — nunca em texto de conteúdo normal. |
| `content/inverse` | `--content-inverse` | `neutral.1000` | `neutral.50` | Texto escuro para uso sobre fundos claros, coloridos ou de alta luminosidade. Ex: label dentro de botão azul preenchido. Nunca usar sobre backgrounds escuros — o contraste seria insuficiente. |
| `content/brand` | `--content-brand` | `blue.600` | `blue.800` | Texto com cor da marca: links clicáveis, valores em destaque brand, labels interativos com identidade TRDR. Ex: "Link com ação" no hub, links de notícias na plataforma, valores com destaque azul. |
| `content/info` | `--content-info` | `blue.100` | `blue.600` | Texto de mensagens informativas e contexto não-crítico. Azul médio — comunica informação sem urgência. Usar em tooltips, dicas de preenchimento e mensagens de sistema informativas. |
| `content/success` | `--content-success` | `green.600` | `green.800` | Texto de estados de sucesso e valores financeiros positivos. Verde vibrante — para confirmações de ordem, ganhos e indicadores positivos. Ex: "+R$1.250" em tela de resultado. |
| `content/warning` | `--content-warning` | `yellow.600` | `yellow.800` | Texto de avisos e alertas de atenção. Amarelo — comunica risco iminente mas não erro crítico. Ex: "Margem insuficiente", "Stop loss muito próximo do preço de mercado". |
| `content/error` | `--content-error` | `red.600` | `red.800` | Texto de estados de erro e valores negativos. Vermelho — para mensagens de validação, erros de sistema e dados de perda. Nunca usar decorativamente. |

---

### 2.4 Bordas (`border/`)

Cores de borda para componentes, separadores e estados de interação.

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `border/subtle` | `--border-subtle` | `neutral.900` | `neutral.400` | Borda quasi-invisível para separações sutis entre seções e zonas visuais. Usar em divisores de seção, bordas de containers que não precisam se destacar e linhas de separação entre áreas de conteúdo. |
| `border/default` | `--border-default` | `neutral.800` | `neutral.600` | Borda padrão de componentes interativos: inputs, dropdowns, cards com borda explícita, botões outlined. É a borda que o usuário espera ver em campos de formulário e componentes com delimitação visível. |
| `border/strong` | `--border-strong` | `neutral.600` | `neutral.500` | Borda de alto contraste para elementos que precisam de forte delimitação visual. Ex: cards selecionados ativamente, elementos em destaque, separadores de alta importância. |
| `border/focus` | `--border-focus` | `blue.500` | `blue.500` | Cor de borda quando um elemento interativo recebe foco via teclado. Fundamental para acessibilidade — nunca remover ou sobrescrever em componentes focáveis. Deve ser sempre visível sobre qualquer background. |
| `border/disabled` | `--border-disabled` | `neutral.700` | `neutral.400` | Borda de componentes desabilitados. Indica visualmente a indisponibilidade do elemento. Combinar com surface/disabled e content/disabled. |

---

### 2.5 Ações (`action/`)

Cores de elementos interativos: botões, ícones de ação e estados de interação. Cada família de ação tem 5 estados: default, hover, active, disabled e alpha.

#### Brand — ações com identidade de marca

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `action/brand/default` | `--action-brand-default` | `blue.600` | `blue.700` | Estado padrão de ações com cor brand que NÃO são botões preenchidos. Usado em ícones interativos brand, indicadores ativos de aba, badges e highlights com identidade TRDR. Azul médio — visível mas não dominante. |
| `action/brand/hover` | `--action-brand-hover` | `blue.700` | `blue.800` | Estado hover de ações brand. Versão ligeiramente mais intensa que /default para feedback de mouse over em ícones, indicadores e elementos brand. |
| `action/brand/active` | `--action-brand-active` | `blue.800` | `blue.900` | Estado ativo/pressionado/selecionado de ações brand. Mais intenso que /default. Ex: underline azul sob aba ativa na página de tokens do hub. |
| `action/brand/disabled` | `--action-brand-disabled` | `neutral.700` | `neutral.300` | Estado desabilitado de ações brand. Indica que o elemento interativo brand não está disponível no momento. |
| `action/brand/alpha` | `--action-brand-alpha` | `blue.500/a08` | `blue.500/a08` | Versão semi-transparente da cor brand para highlights, overlays e indicadores sutis com identidade TRDR. |

#### Brand Inverse — botão CTA primário

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `action/brand inverse/default` | `--action-brand-inverse-default` | `blue.800` | `blue.600` | Background do botão CTA primário — o call-to-action mais importante de cada tela. Azul saturado e sólido. O texto deve ser content/primary (branco). Ex: botão "Gerar prompts" no hub. Usar apenas uma vez por contexto. |
| `action/brand inverse/hover` | `--action-brand-inverse-hover` | `blue.700` | `blue.700` | Estado hover do botão CTA primário. Versão ligeiramente mais clara para feedback de mouse over. |
| `action/brand inverse/active` | `--action-brand-inverse-active` | `blue.900` | `blue.800` | Estado pressionado/clicado do botão CTA primário. |
| `action/brand inverse/disabled` | `--action-brand-inverse-disabled` | `neutral.700` | `neutral.300` | Estado desabilitado do botão CTA primário. |
| `action/brand inverse/alpha` | `--action-brand-inverse-alpha` | `blue.500/a08` | `blue.500/a08` | Versão semi-transparente do CTA brand inverse para overlays e highlights sutis. |

#### Secondary — ações sem identidade de cor

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `action/secondary/default` | `--action-secondary-default` | `neutral.800` | `neutral.400` | Estado padrão de botões e ações secundárias sem identidade de cor. Background de botões que precisam de presença visual mas sem marca. Ex: "Cancelar Ordem", "Inverter" na plataforma de trading. |
| `action/secondary/hover` | `--action-secondary-hover` | `neutral.700` | `neutral.500` | Estado hover de ações secundárias. Feedback visual de mouse over em botões secundários. |
| `action/secondary/active` | `--action-secondary-active` | `neutral.600` | `neutral.600` | Estado ativo/pressionado de ações secundárias. |
| `action/secondary/disabled` | `--action-secondary-disabled` | `neutral.1000` | `neutral.100` | Estado desabilitado de ações secundárias. |
| `action/secondary/alpha` | `--action-secondary-alpha` | `neutral.600/a0` | `neutral.600/a0` | Versão semi-transparente de ação secundária para overlays e destaques sutis. |

#### Tertiary — ações de menor hierarquia (purple)

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `action/tertiary/default` | `--action-tertiary-default` | `purple.600` | `purple.700` | Estado padrão de ações terciárias — ghost buttons, links de ação inline, ações de menor importância hierárquica. Menos proeminente que secondary. |
| `action/tertiary/hover` | `--action-tertiary-hover` | `purple.700` | `purple.800` | Estado hover de ações terciárias. |
| `action/tertiary/active` | `--action-tertiary-active` | `purple.800` | `purple.900` | Estado ativo/pressionado de ações terciárias. |
| `action/tertiary/disabled` | `--action-tertiary-disabled` | `neutral.700` | `neutral.300` | Estado desabilitado de ações terciárias. |
| `action/tertiary/alpha` | `--action-tertiary-alpha` | `purple.500/a08` | `purple.500/a08` | Versão semi-transparente de ação terciária. |

#### Destructive — ações de risco/encerramento (orange)

> Nota: ações destrutivas usam laranja (não vermelho) para não conflitar com os tokens de baixa do mercado (`context/trading/down`).

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `action/destructive/default` | `--action-destructive-default` | `orange.600` | `orange.700` | Estado padrão de ações destrutivas — botões de exclusão, encerramento forçado, ações irreversíveis. Laranja de alta visibilidade que comunica risco sem conflitar com a semântica de queda de mercado (vermelha). |
| `action/destructive/hover` | `--action-destructive-hover` | `orange.700` | `orange.800` | Estado hover de ações destrutivas. |
| `action/destructive/active` | `--action-destructive-active` | `orange.800` | `orange.900` | Estado ativo/pressionado de ações destrutivas. |
| `action/destructive/disabled` | `--action-destructive-disabled` | `neutral.700` | `neutral.300` | Estado desabilitado de ações destrutivas. |
| `action/destructive/alpha` | `--action-destructive-alpha` | `orange.600/a08` | `orange.600/a08` | Versão semi-transparente de ação destrutiva para highlights sutis de risco. |

---

### 2.6 Contexto de Trading (`context/`)

Tokens exclusivos para interfaces de mercado financeiro. **Nunca usar fora do contexto de trading.**

#### Gráfico de Candles

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `context/chart/candles/up` | `--context-chart-candles-up` | `green.600` | `green.900` | Cor de preenchimento das velas de alta (bullish) no gráfico candlestick. Semanticamente específico para o gráfico — manter separado de context/trading/up para permitir customização independente. |
| `context/chart/candles/down` | `--context-chart-candles-down` | `red.600` | `red.800` | Cor de preenchimento das velas de baixa (bearish) no gráfico candlestick. Nunca usar para texto fora do contexto de visualização de candles. |

#### Movimentação de Preço

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `context/trading/up` | `--context-trading-up` | `green.600` | `green.800` | Verde vibrante para indicar movimento de preço para cima em tempo real. Variações positivas (%), preços subindo no order book, indicadores de alta. Cor que o trader associa imediatamente com alta. |
| `context/trading/down` | `--context-trading-down` | `red.600` | `red.800` | Vermelho para indicar movimento de preço para baixo em tempo real. Variações negativas, preços caindo, indicadores de tendência de baixa. |
| `context/trading/up-alpha` | `--context-trading-up-alpha` | `green.600/a16` | `green.600/a32` | Fundo semi-transparente verde (~16% alpha) para highlight de linhas/células com movimento positivo. Cria destaque colorido sem ofuscar o texto em tabelas densas de cotações. |
| `context/trading/down-alpha` | `--context-trading-down-alpha` | `red.600/a16` | `red.600/a32` | Fundo semi-transparente vermelho (~16% alpha) para highlight de linhas/células com movimento negativo. Análogo a /up-alpha para preços caindo no order book. |

#### Posições Long (Comprado)

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `context/trading/long/default` | `--context-trading-long-default` | `green.600/a08` | `green.600/a12` | Fundo muito sutil verde (~8% alpha) para indicar posição long aberta na watchlist ou order book. Mais discreto que /up-alpha — destaca a linha de posição sem distrair do conteúdo numérico. |
| `context/trading/long/hover` | `--context-trading-long-hover` | `green.600/a16` | `green.600/a32` | Estado hover de linha de posição long. Feedback visual de mouse over em rows de posição comprada. |
| `context/trading/long/active` | `--context-trading-long-active` | `green.600/a32` | `green.600/a40` | Estado ativo/selecionado de linha de posição long. Feedback de seleção de row de posição comprada. |
| `context/trading/long/text` | `--context-trading-long-text` | `green.500` | `green.900` | Texto para labels e valores de posição long. Verde levemente mais claro que /up — otimizado para legibilidade em texto pequeno. Ex: badge "LONG", P&L de posição comprada. |

#### Posições Short (Vendido)

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `context/trading/short/default` | `--context-trading-short-default` | `red.600/a08` | `red.600/a12` | Fundo muito sutil vermelho (~8% alpha) para indicar posição short aberta. Análogo a /long/default para o lado vendido. |
| `context/trading/short/hover` | `--context-trading-short-hover` | `red.600/a16` | `red.600/a32` | Estado hover de linha de posição short. Feedback visual de mouse over em rows de posição vendida. |
| `context/trading/short/active` | `--context-trading-short-active` | `red.600/a32` | `red.600/a40` | Estado ativo/selecionado de linha de posição short. |
| `context/trading/short/text` | `--context-trading-short-text` | `red.500` | `red.800` | Texto para labels de posição short. Vermelho suave, otimizado para legibilidade em texto pequeno. Ex: badge "SHORT", rótulos de direção de posição vendida. |

#### Stop Loss

| Token | CSS Variable | Dark | Light | Descrição |
|---|---|---|---|---|
| `context/trading/stop/default` | `--context-trading-stop-default` | `orange.500` | `orange.500` | Laranja para ordens de stop loss. Cor distinta de up/down (verde/vermelho) para não confundir com movimentação de preço. Aparece em indicadores de preço de stop no gráfico e campos de stop na order form. |
| `context/trading/stop/hover` | `--context-trading-stop-hover` | `orange.600` | `orange.600` | Estado hover de elementos de stop loss. Feedback de mouse over em botões ou indicadores de stop. |
| `context/trading/stop/active` | `--context-trading-stop-active` | `orange.700` | `orange.700` | Estado ativo/pressionado de elementos de stop loss. |
| `context/trading/stop/stop-alpha` | `--context-trading-stop-alpha` | `orange.600/a08` | `orange.600/a08` | Versão semi-transparente da cor de stop loss para highlights sutis de risco em áreas de stop no gráfico. |

---

## 3. Escala Responsiva

Tokens de escala que variam entre **Desktop** e **Mobile**. Usar em vez dos primitivos de espaçamento quando o layout precisa se adaptar por plataforma.

### 3.1 Espaçamento por Plataforma

| Token | CSS Variable | Desktop | Mobile |
|---|---|---|---|
| `scale/spacing/xs` | `--scale-spacing-xs` | `4px` | `8px` |
| `scale/spacing/sm` | `--scale-spacing-sm` | `8px` | `12px` |
| `scale/spacing/md` | `--scale-spacing-md` | `12px` | `16px` |
| `scale/spacing/lg` | `--scale-spacing-lg` | `16px` | `20px` |
| `scale/spacing/xl` | `--scale-spacing-xl` | `20px` | `24px` |
| `scale/spacing/2xl` | `--scale-spacing-2xl` | `24px` | `32px` |
| `scale/spacing/3xl` | `--scale-spacing-3xl` | `32px` | `40px` |
| `scale/spacing/3xl 2` | `--scale-spacing-3xl-2` | `40px` | `40px` |
| `scale/spacing/3xl 3` | `--scale-spacing-3xl-3` | `48px` | `40px` |
| `scale/spacing/3xl 4` | `--scale-spacing-3xl-4` | `56px` | `40px` |
| `scale/spacing/3xl 5` | `--scale-spacing-3xl-5` | `64px` | `40px` |
| `scale/spacing/3xl 6` | `--scale-spacing-3xl-6` | `80px` | `40px` |
| `scale/spacing/3xl 7` | `--scale-spacing-3xl-7` | `96px` | `40px` |

### 3.2 Border Radius por Plataforma

| Token | CSS Variable | Desktop | Mobile |
|---|---|---|---|
| `scale/radius/none` | `--scale-radius-none` | `0px` | `0px` |
| `scale/radius/xs` | `--scale-radius-xs` | `2px` | `4px` |
| `scale/radius/sm` | `--scale-radius-sm` | `4px` | `8px` |
| `scale/radius/md` | `--scale-radius-md` | `8px` | `12px` |
| `scale/radius/lg` | `--scale-radius-lg` | `16px` | `20px` |
| `scale/radius/xl` | `--scale-radius-xl` | `20px` | `24px` |
| `scale/radius/full` | `--scale-radius-full` | `9999px` | `9999px` |

---

## 4. Escala Tipográfica

Estilos compostos de texto. **Display e Heading** usam `font.family.primary` (Space Grotesk). **Body e Label** usam `font.family.secondary` (Inter).

| Estilo | Token | Tamanho | Peso | Letter Spacing |
|---|---|---|---|---|
| Display Large | `text/display/lg` | `48px` | `700 (bold)` | `-0.8px (tight)` |
| Display Medium | `text/display/md` | `40px` | `700 (bold)` | `-0.8px (tight)` |
| Heading XL | `text/heading/xl` | `32px` | `700 (bold)` | `0px (normal)` |
| Heading Large | `text/heading/lg` | `28px` | `600 (semibold)` | `0px (normal)` |
| Heading Medium | `text/heading/md` | `24px` | `600 (semibold)` | `0px (normal)` |
| Body Large | `text/body/lg` | `16px` | `500 (medium)` | `-0.8px (tight)` |
| Body Medium | `text/body/md` | `14px` | `400 (regular)` | `0px (normal)` |
| Body Small | `text/body/sm` | `12px` | `500 (medium)` | `0.2px (relaxed)` |
| Label Medium | `text/label/md` | `16px` | `600 (semibold)` | `0px (normal)` |
| Label Small | `text/label/sm` | `14px` | `600 (semibold)` | `0px (normal)` |
