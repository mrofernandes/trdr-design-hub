'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

interface SearchInputBaseProps {
  placeholder?: string
  className?: string
}

interface SearchInputControlledProps extends SearchInputBaseProps {
  value: string
  onChange: (value: string) => void
  paramName?: never
}

interface SearchInputUrlProps extends SearchInputBaseProps {
  value?: never
  onChange?: never
  paramName?: string
}

export type SearchInputProps = SearchInputControlledProps | SearchInputUrlProps

export default function SearchInput(props: SearchInputProps) {
  const { placeholder = 'Buscar...', className } = props

  if ('value' in props && props.onChange) {
    return (
      <div className={`trdr-search-input ${className ?? ''}`}>
        <svg className="trdr-search-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="trdr-input"
          placeholder={placeholder}
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      </div>
    )
  }

  return <SearchInputUrl placeholder={placeholder} paramName={(props as SearchInputUrlProps).paramName} className={className} />
}

function SearchInputUrl({ placeholder, paramName = 'q', className }: { placeholder: string; paramName?: string; className?: string }) {
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
    <div className={`trdr-search-input ${className ?? ''}`}>
      <svg className="trdr-search-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        className="trdr-input"
        placeholder={placeholder}
        defaultValue={currentValue}
        onChange={handleChange}
      />
    </div>
  )
}
