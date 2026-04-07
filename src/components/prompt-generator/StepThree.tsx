'use client'

import { useState } from 'react'
import { components, ComponentCategory, COMPONENT_CATEGORY_LABELS } from '@/data/components'
import styles from './Steps.module.css'

interface StepThreeProps {
  selected: string[]
  onToggle: (slug: string) => void
  onGenerate: () => void
  onBack: () => void
}

export default function StepThree({ selected, onToggle, onGenerate, onBack }: StepThreeProps) {
  const [search, setSearch] = useState('')

  const filtered = search
    ? components.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.category.includes(search.toLowerCase())
      )
    : components

  const categories = Object.keys(COMPONENT_CATEGORY_LABELS) as ComponentCategory[]

  return (
    <div className={styles.step}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Quais componentes você vai usar?</h2>
        <p className={styles.subtitle}>
          Selecione os componentes que aparecem na interface. As specs serão incluídas no prompt.
          {selected.length > 0 && (
            <span className={styles.badge}>{selected.length} selecionados</span>
          )}
        </p>
      </div>

      <input
        type="text"
        className="trdr-input"
        placeholder="Buscar componente..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: 'var(--spacing-2xl)' }}
      />

      <div className={styles.compGroups}>
        {categories.map(cat => {
          const catComps = filtered.filter(c => c.category === cat)
          if (catComps.length === 0) return null
          return (
            <div key={cat} className={styles.compGroup}>
              <div className={styles.compGroupLabel}>{COMPONENT_CATEGORY_LABELS[cat]}</div>
              <div className={styles.compGrid}>
                {catComps.map(comp => {
                  const isSelected = selected.includes(comp.slug)
                  return (
                    <button
                      key={comp.slug}
                      className={`${styles.compChip} ${isSelected ? styles.compChipSelected : ''}`}
                      onClick={() => onToggle(comp.slug)}
                    >
                      {isSelected && (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {comp.name}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.actions}>
        <button className="trdr-btn trdr-btn-ghost" onClick={onBack}>← Voltar</button>
        <button className="trdr-btn trdr-btn-primary" onClick={onGenerate}>
          Gerar Prompt →
        </button>
      </div>
    </div>
  )
}
