import { Suspense } from 'react'
import TokenTable from '@/components/tokens/TokenTable'
import SearchInput from '@/components/ui/SearchInput'
import { TokenCategory, TOKEN_CATEGORY_LABELS } from '@/data/tokens'
import Link from 'next/link'
import styles from '../page-layout.module.css'

interface PageProps {
  searchParams: Promise<{ q?: string; cat?: string }>
}

export default async function TokensPage({ searchParams }: PageProps) {
  const params = await searchParams
  const search = params.q ?? ''
  const category = (params.cat as TokenCategory) ?? undefined

  const categories = Object.entries(TOKEN_CATEGORY_LABELS) as [TokenCategory, string][]

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Tokens</h1>
          <p className={styles.subtitle}>292 tokens do design system TRDR — primitivos, semânticos e scale.</p>
        </div>
        <div className={styles.nav}>
          <Link href="/tokens/primitivos" className="trdr-btn trdr-btn-ghost">Primitivos</Link>
          <Link href="/tokens/semanticos" className="trdr-btn trdr-btn-ghost">Semânticos</Link>
        </div>
      </div>

      <div className={styles.toolbar}>
        <Suspense>
          <SearchInput placeholder="Buscar token por nome, valor ou CSS var..." />
        </Suspense>
        <div className={styles.filters}>
          <Link
            href="/tokens"
            className={`trdr-badge ${!category ? 'trdr-badge-brand' : 'trdr-badge-neutral'}`}
          >
            Todos
          </Link>
          {categories.map(([cat, label]) => (
            <Link
              key={cat}
              href={`/tokens?cat=${cat}`}
              className={`trdr-badge ${category === cat ? 'trdr-badge-brand' : 'trdr-badge-neutral'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <Suspense fallback={<div style={{ color: 'var(--content-tertiary)' }}>Carregando...</div>}>
        <TokenTable search={search} category={category} />
      </Suspense>
    </div>
  )
}
