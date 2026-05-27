import { useInView } from '../hooks/useInView'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimateIn({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const { ref, inView } = useInView()

  const base = 'transition-all duration-700 ease-out'

  const hidden: Record<string, string> = {
    up: 'opacity-0 translate-y-8',
    left: 'opacity-0 -translate-x-8',
    right: 'opacity-0 translate-x-8',
    none: 'opacity-0',
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`${base} ${inView ? 'opacity-100 translate-x-0 translate-y-0' : hidden[direction]} ${className}`}
    >
      {children}
    </div>
  )
}
