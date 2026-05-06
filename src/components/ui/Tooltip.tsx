import styles from './Tooltip.module.css'

export type TooltipDirection =
  | 'top-center' | 'top-left' | 'top-right'
  | 'bottom-center' | 'bottom-left' | 'bottom-right'
  | 'right' | 'left'

export interface TooltipProps {
  text: string
  hotkey?: string
  direction?: TooltipDirection
  className?: string
}

const directionClasses: Record<TooltipDirection, string> = {
  'top-center':    styles.topCenter,
  'top-left':      styles.topLeft,
  'top-right':     styles.topRight,
  'bottom-center': styles.bottomCenter,
  'bottom-left':   styles.bottomLeft,
  'bottom-right':  styles.bottomRight,
  'right':         styles.right,
  'left':          styles.left,
}

const arrowClasses: Record<TooltipDirection, string> = {
  'top-center':    styles.arrowUp,
  'top-left':      styles.arrowUp,
  'top-right':     styles.arrowUp,
  'bottom-center': styles.arrowDown,
  'bottom-left':   styles.arrowDown,
  'bottom-right':  styles.arrowDown,
  'right':         styles.arrowRight,
  'left':          styles.arrowLeft,
}

export default function Tooltip({ text, hotkey, direction = 'top-center', className }: TooltipProps) {
  return (
    <div className={`${styles.tooltip} ${directionClasses[direction]} ${className ?? ''}`} role="tooltip">
      <div className={styles.content}>
        <span className={styles.text}>{text}</span>
        {hotkey && <span className={styles.hotkey}>{hotkey}</span>}
      </div>
      <span className={`${styles.arrow} ${arrowClasses[direction]}`} aria-hidden="true" />
    </div>
  )
}
