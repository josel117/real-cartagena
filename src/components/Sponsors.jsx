import { useTheme } from '../context/ThemeContext'

const sponsors = [
  { name: 'CLARO',       color: '#E4002B' },
  { name: 'BANCOLOMBIA', color: '#FDB913' },
  { name: 'BAVARIA',     color: '#005B9A' },
  { name: 'NIKE',        color: '#111111' },
  { name: 'ÉXITO',       color: '#F7B500' },
  { name: 'COLOMBINA',   color: '#E31837' },
  { name: 'BETPLAY',     color: '#00A86B' },
]

export default function Sponsors() {
  const { dark } = useTheme()

  return (
    <section
      id="sponsors"
      className={`py-16 px-6 lg:px-16 border-y
                 ${dark
                   ? 'bg-raised border-white/6'
                   : 'bg-white border-gray-100'
                 }`}
    >
      <p className={`text-center font-barlow text-[11px] tracking-[3px] uppercase mb-8
                    ${dark ? 'text-white/25' : 'text-gray-400'}`}>
        Patrocinadores Oficiales · Temporada 2025
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 max-w-[1100px] mx-auto">
        {sponsors.map(({ name, color }) => (
          <div
            key={name}
            className={`sponsor-item w-[130px] h-[56px] flex items-center justify-center
                        border cursor-pointer
                        ${dark
                          ? 'bg-surface border-white/6 hover:border-yellow/30'
                          : 'bg-gray-50 border-gray-100 shadow-sm hover:border-green/30'
                        }`}
            style={{ '--hover-color': color }}
            onMouseEnter={e => {
              e.currentTarget.querySelector('span').style.color = color
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('span').style.color = ''
            }}
          >
            <span className={`font-bebas text-[1.2rem] tracking-[2px] transition-colors duration-300
                             ${dark ? 'text-white/70' : 'text-gray-500'}`}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}