import React from 'react'

export interface TableProps {
  bordered?: boolean
  compact?: boolean
  striped?: boolean
  hoverable?: boolean
  className?: string
  children: React.ReactNode
}

export default function Table({
  bordered = false,
  compact = false,
  striped = false,
  hoverable = true,
  className,
  children,
}: TableProps) {
  const tableClasses = [
    'trdr-table',
    compact ? 'trdr-table-compact' : '',
    striped ? 'trdr-table-striped' : '',
    bordered ? 'trdr-table-bordered' : '',
    !hoverable ? 'trdr-table-no-hover' : '',
    className,
  ].filter(Boolean).join(' ')

  const table = <table className={tableClasses}>{children}</table>

  if (bordered) {
    return <div className="trdr-table-wrapper">{table}</div>
  }

  return table
}
