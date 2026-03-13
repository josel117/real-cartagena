import { useTheme } from '../context/ThemeContext'
import { products } from '../data/products'
import Reveal from './Reveal'

function JerseyIcon({ type, dark }) {
  const jerseyClip = 'polygon(25% 0%, 75% 0%, 90% 15%, 100% 15%, 100% 70%, 85% 100%, 15% 100%, 0% 70%, 0% 15%, 10% 15%)'
  const colors = {
    'jersey-local':   '#F5C800',
    'jersey-away':    '#1B6B35',
    'jersey-special': '#111111',
  }
  if (colors[type]) {
    return (
      <div className="w-[110px] h-[140px] flex-shrink-0"
           style={{ background: colors[type], clipPath: jerseyClip,
                    outline: type === 'jersey-special' ? '2px solid #F5C800' : 'none',
                    outlineOffset: '-4px' }} />
    )
  }
  if (type === 'cap') {
    return (
      <div className="flex flex-col items-center">
        <div className="w-[110px] h-[70px] rounded-t-full bg-yellow relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[52px] h-[36px] rounded-t-full"
               style={{ background: dark ? '#0A0A0A' : '#F7F4EE' }} />
        </div>
        <div className="w-[36px] h-[16px] bg-green rounded-b" />
      </div>
    )
  }
  if (type === 'scarf') {
    return (
      <div className="w-[80px] h-[110px] rounded flex items-center justify-center font-bebas text-[1.3rem] text-dark tracking-[2px]"
           style={{ background: 'linear-gradient(180deg, #F5C800 40%, #1B6B35 100%)' }}>
        RC
      </div>
    )
  }
  if (type === 'pack') {
    return (
      <div className="w-[80px] h-[80px] rounded-full bg-yellow flex items-center justify-center font-bebas text-[1.1rem] text-dark">
        RCFC
      </div>
    )
  }
  return null
}

function BadgeChip({ badge, style }) {
  if (!badge) return null
  const cls = {
    'green':      'bg-green text-white',
    'dark-green': 'bg-green text-white',
    'black':      'bg-dark text-white',
    'yellow':     'bg-yellow text-dark',
  }
  return (
    <div className={`absolute top-3 left-3 font-barlow font-black text-[10px] tracking-[1px] uppercase px-2 py-0.5
                    ${cls[style] || 'bg-yellow text-dark'}`}>
      {badge}
    </div>
  )
}

export default function Tienda() {
  const { dark } = useTheme()

  const bg = dark
    ? 'bg-gradient-to-b from-muted/40 to-surface'
    : 'bg-gradient-to-b from-cream-dark to-white'

  return (
    <section id="tienda" className={`px-6 lg:px-16 py-20 lg:py-28 ${dark ? 'bg-raised' : 'bg-cream-dark'}`}>

      <Reveal direction="up">
        <div className="text-center mb-12 lg:mb-14">
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-3
                          ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            Tienda Oficial
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
          </div>
          <h2 className={`font-bebas tracking-[1px] ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            VISTE LOS COLORES
          </h2>
          <p className={`font-barlow text-[1rem] mt-1 tracking-[0.5px] ${dark ? 'text-white/40' : 'text-gray-400'}`}>
            Colección Oficial Temporada 2025
          </p>
        </div>
      </Reveal>

      <Reveal direction="up" delay="0.15s">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(product => (
          <a
            key={product.id}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group border overflow-hidden no-underline block
                       transition-all duration-300 hover:-translate-y-1.5
                       ${dark
                         ? 'bg-surface border-white/6 hover:border-yellow hover:shadow-[0_8px_24px_rgba(245,200,0,0.08)]'
                         : 'bg-white border-gray-100 shadow-sm hover:border-green hover:shadow-[0_16px_40px_rgba(27,107,53,0.1)]'
                       }`}
          >
            {/* Imagen del producto */}
            <div className={`aspect-[3/4] relative flex items-center justify-center overflow-hidden ${bg}`}>
              <BadgeChip badge={product.badge} style={product.badgeStyle} />
              {product.img ? (
                /* Foto real */
                <img
                  src={product.img}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover object-center
                             group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Ícono SVG de fallback */
                <JerseyIcon type={product.type} dark={dark} />
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <div className={`font-barlow text-[10px] tracking-[2px] uppercase mb-1.5
                              ${dark ? 'text-white/30' : 'text-gray-400'}`}>
                {product.category}
              </div>
              <div className={`font-barlow font-bold text-[1.05rem] uppercase tracking-[0.5px]
                              ${dark ? 'text-white' : 'text-gray-900'}`}>
                {product.name}
              </div>
              <div className={`font-bebas text-[1.5rem] mt-1 leading-none
                              ${dark ? 'text-yellow' : 'text-green'}`}>
                {product.price}{' '}
                <span className={`font-body text-[0.8rem] font-normal ${dark ? 'text-white/30' : 'text-gray-400'}`}>
                  COP
                </span>
              </div>
              <div className={`btn-skew-sm mt-3 py-2.5 text-center font-barlow font-black text-[13px] tracking-[2px] uppercase
                              transition-all duration-200 group-hover:brightness-110
                              ${dark ? 'bg-yellow text-dark' : 'bg-green text-white'}`}>
                Comprar Ahora
              </div>
            </div>
          </a>
          ))}
        </div>
      </Reveal>

    </section>
  )
}