'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import styles from './SearchInput.module.css'

interface SearchInputProps {
  placeholder?: string
  paramName?: string
}

export default function SearchInput({
  placeholder = 'Buscar...',
  paramName = 'q',
}: SearchInputProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentValue = searchParams.get(paramName) ?? ''

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams.toString())
      if (e.target.value) {
        params.set(paramName, e.target.value)
      } else {
        params.delete(paramName)
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams, paramName]
  )

  return (
    <div className={styles.wrapper}>
      <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        className={`trdr-input ${styles.input}`}
        placeholder={placeholder}
        defaultValue={currentValue}
        onChange={handleChange}
      />
    </div>
  )
}
