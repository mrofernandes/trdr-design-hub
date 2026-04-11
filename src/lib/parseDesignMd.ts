import fs from 'fs'
import path from 'path'

// ============================================================
// Leitura do arquivo
// ============================================================

export function readDesignMd(): string {
  const filePath = path.join(process.cwd(), 'designtokens.md')
  return fs.readFileSync(filePath, 'utf-8')
}

// ============================================================
// Tipos
// ============================================================

export interface TokenEntry {
  name: string
  value: string
  extra?: string  // used for alpha tokens, sub-rows, etc.
}

export interface TokenGroup {
  name: string    // e.g., "Azul (Blue)", "Blue — alpha:"
  entries: TokenEntry[]
}

export interface PrimitiveSubsection {
  title: string   // e.g., "Cores", "Espaçamentos"
  groups: TokenGroup[]
}

export interface SemanticToken {
  token: string
  cssVar: string
  dark: string
  light: string
  description: string
}

// ============================================================
// Helpers
// ============================================================

/** Parseia uma tabela markdown, retorna linhas (sem header/separator) */
function parseTable(text: string): string[][] {
  return text
    .split('\n')
    .filter(l => l.trim().startsWith('|') && !/^\|[-:\s|]+\|$/.test(l.trim()))
    .map(l =>
      l.split('|')
        .slice(1, -1)
        .map(c => c.trim().replace(/^`|`$/g, ''))
    )
}

// ============================================================
// Primitivos
// ============================================================

/**
 * Retorna as subseções de Tokens Primitivos (Seção 1) do design.md.
 * Cada subseção tem grupos (e.g., por paleta de cor) e suas entradas.
 */
export function parsePrimitiveSubsections(): PrimitiveSubsection[] {
  const content = readDesignMd()

  // Extrai o bloco da Seção 1
  const sec1Match = content.match(/^## 1\. Tokens Primitivos([\s\S]*?)(?=^## \d+\.|\z)/m)
  if (!sec1Match) return []
  const sec1 = sec1Match[1]

  const subsections: PrimitiveSubsection[] = []

  // Divide por ### subseções
  const subBlocks = sec1.split(/^### /m).filter(Boolean)

  for (const block of subBlocks) {
    const titleMatch = block.match(/^[\d.]+ (.+)/)
    if (!titleMatch) continue
    const title = titleMatch[1].trim()

    const groups: TokenGroup[] = []

    // Detecta se há #### subgrupos
    const hasSubgroups = /^####/m.test(block)

    if (hasSubgroups) {
      // Divide por #### grupos
      const groupBlocks = block.split(/^#### /m).filter(Boolean)
      for (const gb of groupBlocks) {
        const groupTitleMatch = gb.match(/^(.+)/)
        if (!groupTitleMatch) continue
        const groupName = groupTitleMatch[1].trim()

        // Encontra todas as tabelas dentro do bloco
        const tableMatches = gb.match(/\|.+\|(\n\|[-:\s|]+\|)+(\n\|.+\|)*/g) || []
        // Também procura por sub-headers em negrito (como "**Blue — alpha:**")
        const boldSections = gb.split(/\*\*(.+?)\*\*/)

        if (boldSections.length > 1) {
          // Tem sub-seções com nome
          let idx = 0
          while (idx < boldSections.length) {
            if (idx % 2 === 1) {
              // É um título bold
              const subTitle = boldSections[idx].trim()
              const subContent = boldSections[idx + 1] || ''
              const tableBlock = subContent.match(/\|.+\|(\n\|[-:\s|]+\|)+(\n\|.+\|)*/g)
              if (tableBlock) {
                const rows = parseTable(tableBlock[0])
                groups.push({
                  name: `${groupName} — ${subTitle}`,
                  entries: rows.map(r => ({ name: r[0], value: r[1] ?? '' })),
                })
              }
            }
            idx++
          }
          // Se também há tabela direta antes dos bold sections
          const firstTableMatch = boldSections[0].match(/\|.+\|(\n\|[-:\s|]+\|)+(\n\|.+\|)*/g)
          if (firstTableMatch) {
            const rows = parseTable(firstTableMatch[0])
            if (rows.length > 0) {
              groups.unshift({
                name: groupName,
                entries: rows.map(r => ({ name: r[0], value: r[1] ?? '' })),
              })
            }
          }
        } else {
          // Sem sub-seções bold, pega todas as tabelas juntas
          for (const table of tableMatches) {
            const rows = parseTable(table)
            if (rows.length > 0) {
              groups.push({
                name: groupName,
                entries: rows.map(r => ({ name: r[0], value: r[1] ?? '' })),
              })
            }
          }
        }
      }
    } else {
      // Sem subgrupos — pega todas as tabelas direto
      const tableMatches = block.match(/\|.+\|(\n\|[-:\s|]+\|)+(\n\|.+\|)*/g) || []
      for (const table of tableMatches) {
        const rows = parseTable(table)
        if (rows.length > 0) {
          groups.push({
            name: title,
            entries: rows.map(r => ({ name: r[0], value: r[1] ?? '', extra: r[2] })),
          })
        }
      }
    }

    if (groups.length > 0) {
      subsections.push({ title, groups })
    }
  }

  return subsections
}

// ============================================================
// Semânticos
// ============================================================

/**
 * Retorna todos os tokens semânticos da Seção 2 do design.md.
 * Tabela: Token | CSS Variable | Dark | Light | Descrição
 * Parseia todas as tabelas da seção (múltiplos subgrupos).
 */
export function parseSemanticTokens(): SemanticToken[] {
  const content = readDesignMd()

  const sec2Start = content.indexOf('## 2. Tokens Semânticos')
  if (sec2Start === -1) return []

  const sec3Start = content.indexOf('\n## 3.', sec2Start)
  const sec2 = sec3Start > 0
    ? content.slice(sec2Start, sec3Start)
    : content.slice(sec2Start)

  const tableMatches = sec2.match(/\|.+\|(\n\|[-:\s|]+\|)+(\n\|.+\|)*/g) || []

  const result: SemanticToken[] = []
  for (const table of tableMatches) {
    const rows = parseTable(table)
    for (const r of rows) {
      if (r.length >= 3 && r[0] && r[1]) {
        result.push({
          token: r[0],
          cssVar: r[1],
          dark: r[2],
          light: r[3] ?? '',
          description: r[4] ?? '',
        })
      }
    }
  }
  return result
}

// ============================================================
// Metadata
// ============================================================

export function getDesignMdMeta(): { lines: number; sizeKb: number } {
  const content = readDesignMd()
  const lines = content.split('\n').length
  const sizeKb = parseFloat((Buffer.byteLength(content, 'utf-8') / 1024).toFixed(1))
  return { lines, sizeKb }
}
