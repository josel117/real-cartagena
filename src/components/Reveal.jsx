import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * <Reveal> — envuelve cualquier elemento y lo anima al entrar en pantalla
 *
 * Props:
 *  - delay: string CSS delay ej. '0.1s', '0.2s' (default '0s')
 *  - direction: 'up' | 'down' | 'left' | 'right' | 'none' (default 'up')
 *  - className: clases adicionales al wrapper
 */
export default function Reveal({ children, delay = '0s', direction = 'up', className = '' }) {
  const [ref, isVisible] = useScrollReveal()

  const translate = {
    up:    'translateY(32px)',
    down:  'translateY(-32px)',
    left:  'translateX(32px)',
    right: 'translateX(-32px)',
    none:  'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    isVisible ? 1 : 0,
        transform:  isVisible ? 'translate(0,0)' : translate[direction],
        transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}