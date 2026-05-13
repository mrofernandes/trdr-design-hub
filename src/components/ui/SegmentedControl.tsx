'use client'

export interface SegmentedControlProps {
  tabs: string[]
  active?: number
  onChange?: (index: number) => void
  className?: string
}

export default function SegmentedControl({
  tabs,
  active = 0,
  onChange,
  className = '',
}: SegmentedControlProps) {
  return (
    <div className={['trdr-segment-control', className].filter(Boolean).join(' ')}>
      {tabs.map((label, i) => (
        <button
          key={label}
          type="button"
          className={`trdr-segment ${i === active ? 'trdr-segment-active' : 'trdr-segment-inactive'}`}
          onClick={() => onChange?.(i)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
