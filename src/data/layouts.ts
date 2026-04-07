/* ==========================================================================
   TRDR Design System — Padrões de Layout
   Fonte: design.md v1.4 — Seções 5, 6 e 7
   ========================================================================== */

export interface LayoutPattern {
  id: string
  name: string
  source: string
  resolution: string
  description: string
  diagram: string
  zones: { name: string; size: string; description: string }[]
  tokens: { property: string; token: string; value: string }[]
  notes: string
}

export const layouts: LayoutPattern[] = [
  {
    id: 'trading-desktop',
    name: 'Plataforma de Trading — Desktop',
    source: '1920 cripto derivativos (ID: 470:30661)',
    resolution: '1918×1079px',
    description: 'Layout principal da plataforma de trading. 3 colunas com gap de 2px entre janelas. Tudo sobre fundo bg.primary.',
    diagram: `┌─────────────────────────────────────────────────────────────────┐
│  hellobar                                              40px     │
├─────────────┬──────────────────────────────┬───────────────────┤
│  Coluna 1   │        Coluna 2              │    Coluna 3       │
│  337px      │  flex (min 800px)            │    357px          │
│             │                              │                   │
│  Cotações   │  [Menu lateral 48px]         │  Boleta           │
│  358px h    │  [Gráfico principal]         │  (controle ordens)│
│             │  [Volume]                    │                   │
│  Livro de   │                              │  Ordens /         │
│  ordens     │                              │  Notícias 565px   │
│             │                              │                   │
└─────────────┴──────────────────────────────┴───────────────────┘
         gap: 2px          gap: 2px`,
    zones: [
      { name: 'hellobar', size: '1920×40px', description: 'Barra superior global' },
      { name: 'Coluna 1', size: '337px largura', description: 'Painel de cotações (358px) + Livro de ordens' },
      { name: 'Coluna 2', size: 'flex min-800px', description: 'Menu lateral (48px) + Gráfico + Volume' },
      { name: 'Coluna 3', size: '357px largura', description: 'Boleta de ordens + Ordens/Notícias (565px)' },
    ],
    tokens: [
      { property: 'Background geral', token: 'bg.primary', value: '#0E0E0E' },
      { property: 'Gap entre colunas', token: '—', value: '2px' },
      { property: 'Conteúdo altura', token: '—', value: '1022px' },
    ],
    notes: 'Cada coluna contém uma ou mais janelas (componente janela). O gap de 2px é o único espaçamento entre painéis.',
  },
  {
    id: 'janela',
    name: 'Padrão de Janela',
    source: 'Componente janela (ID: 1909:41600)',
    resolution: '1709×1168px (máximo)',
    description: 'Container reutilizável que encapsula todo o conteúdo da plataforma. Todo painel é uma janela.',
    diagram: `┌─ janela ─────────────────────────────────────────┐
│ [header-window 41px] — tabs + ações              │
├──────────────────────────────────────────────────┤
│                                                  │
│  Conteúdo (flex-grow)                           │
│                                                  │
└──────────────────────────────────────────────────┘`,
    zones: [
      { name: 'header-window', size: '41px altura', description: 'Tabs + ações de janela' },
      { name: 'Conteúdo', size: 'flex-grow', description: 'Área de conteúdo variável' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Border', token: 'border.default', value: '#4A4A4A' },
      { property: 'Radius', token: 'scale.radius.sm', value: '4px' },
    ],
    notes: 'O border radius de 4px é específico do container janela — menor que o radius.md padrão.',
  },
  {
    id: 'header-window-pattern',
    name: 'Header de Janela (header-window)',
    source: 'Componente header-window (ID: 243:3344)',
    resolution: '476×41px',
    description: 'Padrão de abas com indicador de 2px na borda inferior. Estilo 1 do sistema de abas TRDR.',
    diagram: `[Tab ativa ▼]  [Tab 2]  [Tab 3]  → → → → [Ações]
    │
    └── border-bottom: 2px solid action.brand.default (#3D99FF)`,
    zones: [
      { name: 'Tab ativa', size: 'auto', description: '2px border-bottom azul, texto content.primary' },
      { name: 'Tabs inativas', size: 'auto', description: 'Texto content.tertiary, sem fundo' },
      { name: 'Ações', size: 'auto', description: 'Botões de controle da janela (fechar, expandir)' },
    ],
    tokens: [
      { property: 'Tab ativa — indicador', token: 'action.brand.default', value: '#3D99FF' },
      { property: 'Tab ativa — texto', token: 'content.primary', value: '#FFFFFF' },
      { property: 'Tab inativa — texto', token: 'content.tertiary', value: '#A4A4A4' },
      { property: 'Background', token: 'bg.secondary', value: '#141519' },
      { property: 'Border bottom', token: 'border.subtle', value: '#222222' },
    ],
    notes: 'Este é o Estilo 1 de abas. Diferente do componente "abas" (Estilo 2) e das pill tabs (Estilo 3).',
  },
  {
    id: 'site-institucional',
    name: 'Site Institucional TRDR',
    source: 'Homepage (ID: 2273:53009)',
    resolution: '1920×3378px',
    description: 'Layout do site de marketing/branding. Tipografia maior, gradientes, foco em impacto visual.',
    diagram: `┌─────────────────────────────────────────────────────┐
│  Header 72px  (max-width: 1600px)                   │
├─────────────────────────────────────────────────────┤
│  Hero 1206px  (gradiente bg: azul → preto)          │
│  H-1: Space Grotesk 80px                           │
│  Gradiente texto: #3D99FF → #FFFFFF                │
├─────────────────────────────────────────────────────┤
│  Seção 4   791px  (padding-v: 96px)                │
├─────────────────────────────────────────────────────┤
│  Seção 2   657px  (padding-v: 96px)                │
├─────────────────────────────────────────────────────┤
│  Seção 3   652px  (padding-v: 96px)                │
└─────────────────────────────────────────────────────┘
Content max-width: 1312px  |  Header max-width: 1600px`,
    zones: [
      { name: 'Header', size: '72px altura', description: 'Nav + logo + CTA. Max-width: 1600px' },
      { name: 'Hero', size: '1206px altura', description: 'Heading H-1 + gradiente de texto + CTA principal' },
      { name: 'Seções', size: '652–791px', description: 'Features, prova social, etc. Padding 96px vertical' },
    ],
    tokens: [
      { property: 'Background', token: 'bg.primary', value: '#0E0E0E' },
      { property: 'Heading H-1', token: 'site.heading.h1', value: 'Space Grotesk 500 80px lh1.1' },
      { property: 'Heading H-2', token: 'site.heading.h2', value: 'Space Grotesk 500 56px lh1.1' },
      { property: 'Body', token: 'site.body.lg', value: 'Inter 400 18px lh1.4' },
      { property: 'Gradiente texto', token: 'gradient.text.brand', value: 'linear-gradient(90deg, #3D99FF 0%, #FFFFFF 100%)' },
      { property: 'Gradiente hero', token: 'gradient.bg.hero', value: 'linear-gradient(180deg, #0052CC 0%, #0E0E0E 40%)' },
      { property: 'Content max-width', token: 'site.content.max-width', value: '1312px' },
      { property: 'Section padding-v', token: 'site.section.padding-v', value: '96px' },
    ],
    notes: 'A tipografia do site é DIFERENTE da plataforma — escala maior para impacto de branding. Não misture as escalas.',
  },
  {
    id: 'app-launcher',
    name: 'App Desktop — Launcher TRDR',
    source: 'Tela Operar (ID: 1124:25168)',
    resolution: '1549×944px',
    description: 'App desktop launcher que gerencia múltiplas plataformas de trading. Shell própria com Electron-like structure.',
    diagram: `┌─────────────────────────────────────────────────────────────┐
│  Header Desktop 56px — bg.primary #0E0E0E                  │
│  [Logo] | [Nav gap-16px] → → → [Conexões] | [Win controls] │
├──────────────────┬──────────────────────────────────────────┤
│  Sidebar 320px   │  Main Area flex-1 (1229px)              │
│  border-r subtle │                                          │
│                  │  [Hero 364px — imagem + gradiente]      │
│  Plataformas     │  ──────────────────────────────────────  │
│  (platform cards)│  [Pill Tabs 468px + Activity Card]      │
│                  │                                          │
├──────────────────┴──────────────────────────────────────────┤
│  Footer 48px — bg.primary #0E0E0E | border-top subtle      │
│                              [Central de Ajuda] | [v1.0.0] │
└─────────────────────────────────────────────────────────────┘`,
    zones: [
      { name: 'Header', size: '1549×56px', description: 'Logo + nav (5 itens) + conexões + controles Windows' },
      { name: 'Sidebar', size: '320px largura', description: 'Lista de platform cards com status badges' },
      { name: 'Hero', size: '1229×364px', description: 'Preview da plataforma + gradiente overlay + ações' },
      { name: 'Info Panel', size: '1229×468px', description: 'Pill tabs + activity card com estatísticas' },
      { name: 'Footer', size: '1549×48px', description: 'Links de ajuda e versão do app' },
    ],
    tokens: [
      { property: 'App background', token: 'bg.tertiary', value: '#1A1A1A' },
      { property: 'Header/Footer', token: 'bg.primary', value: '#0E0E0E' },
      { property: 'Sidebar border', token: 'border.subtle', value: '#222222' },
      { property: 'Platform card ativo', token: 'surface.secondary', value: '#222222' },
      { property: 'Icon container brand', token: '—', value: 'rgba(61,153,255,0.1)' },
      { property: 'Pill tab ativa', token: 'action.brand.default', value: '#3D99FF' },
      { property: 'Pill tab container', token: 'surface.secondary', value: '#222222' },
    ],
    notes: 'O token bg.tertiary (#1A1A1A) é exclusivo do app launcher. A sidebar tem border-right border.subtle. Pill tabs usam radius-lg (16px) no container.',
  },
]
