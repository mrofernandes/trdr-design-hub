# TRDR Design System

> Fonte de verdade do Design System TRDR. CSS variables do Hub são derivadas deste documento.

**Fontes primárias:** `design-system-variables.xlsx` · Figma MCP (82 componentes, 2026-04-07)

---

## 1. Tokens Primitivos

Os primitivos são valores brutos. **Nunca use diretamente na UI** — use os tokens semânticos da seção 2.

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
| `color.blue.500.alpha.08` | `#0052CC14` |
| `color.blue.500.alpha.16` | `#0052CC29` |
| `color.blue.500.alpha.32` | `#0052CC52` |

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
| `color.neutral.600.alpha.0` | `#FFFFFF00` |
| `color.neutral.600.alpha.08` | `#FFFFFF14` |
| `color.neutral.600.alpha.16` | `#FFFFFF29` |
| `color.neutral.600.alpha.32` | `#FFFFFF52` |
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
| `color.red.600.alpha.08` | `#F1312614` |
| `color.red.600.alpha.12` | `#F131261F` |
| `color.red.600.alpha.16` | `#F1312629` |
| `color.red.600.alpha.32` | `#F1312652` |
| `color.red.600.alpha.40` | `#F1312666` |
| `color.red.600.alpha.48` | `#F131267A` |
| `color.red.600.alpha.56` | `#F131268F` |

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
| `color.yellow.600.alpha.08` | `#FFCC4014` |
| `color.yellow.600.alpha.16` | `#FFCC4029` |
| `color.yellow.600.alpha.32` | `#FFCC4052` |

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
| `color.orange.600.alpha.08` | `#F9731614` |
| `color.orange.600.alpha.16` | `#F9731629` |
| `color.orange.600.alpha.32` | `#F9731652` |

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

## 2. Tokens Semânticos — Hub

Tokens semânticos utilizados no Design Hub. Cada token mapeia para uma CSS variable.

### 2.1 Cores Semânticas

| Token | CSS Variable | Dark | Base Primitiva |
|---|---|---|---|
| `bg/primary` | `--bg-primary` | `#0E0E0E` | `neutral.1200` |
| `bg/secondary` | `--bg-secondary` | `#141519` | `neutral.1100` |
| `border/subtle` | `--border-subtle` | `#222222` | `neutral.900` |
| `border/default` | `--border-default` | `#4A4A4A` | `neutral.800` |
| `content/primary` | `--content-primary` | `#FFFFFF` | `neutral.50` |
| `content/secondary` | `--content-secondary` | `#E8E8E8` | `neutral.400` |
| `content/tertiary` | `--content-tertiary` | `#A4A4A4` | `neutral.600` |
| `content/brand` | `--content-brand` | `#3D99FF` | `blue.600` |
| `surface/secondary` | `--surface-secondary` | `#222222` | `neutral.900` |
| `surface/tertiary` | `--surface-tertiary` | `#1A1A1A` | `neutral.1000` |
| `surface/interactive` | `--surface-interactive` | `#0052CC` | `blue.900` |
| `action/brand/default` | `--action-brand-default` | `#0066FF` | `blue.800` |
