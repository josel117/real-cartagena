import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { players, categories } from '../data/players'

function PlayerCard({ player, dark }) {
  return (
    <div className={`border cursor-pointer group overflow-hidden
                    transition-all duration-300 hover:-translate-y-2
                    ${dark
                      ? 'bg-surface border-white/6 hover:border-yellow hover:shadow-[0_8px_32px_rgba(245,200,0,0.12)]'
                      : 'bg-white border-gray-100 shadow-sm hover:border-green hover:shadow-[0_12px_32px_rgba(27,107,53,0.12)]'
                    }`}>

      {/* Imagen */}
      <div className={`h-[220px] relative overflow-hidden flex items-end justify-center
                      ${dark
                        ? 'bg-gradient-to-b from-green/40 via-dark/60 to-dark'
                        : 'bg-gradient-to-b from-green/15 via-cream to-cream-dark'
                      }`}>

        <span className={`absolute top-1 left-2 font-bebas text-[4rem] leading-none select-none
                         ${dark ? 'text-yellow/8' : 'text-green/8'}`}>
          {player.number}
        </span>

        {player.img ? (
          <>
            <img src={player.img} alt={player.name}
                 className="absolute inset-0 w-full h-full object-cover object-top
                            group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <svg viewBox="0 0 100 120" className={`w-[52%] ${dark ? 'fill-white/15' : 'fill-gray-400/25'}`}
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="28" r="22" />
              <path d="M10 120 Q10 72 50 72 Q90 72 90 120Z" />
            </svg>
            <span className={`font-bebas text-[3rem] leading-none mt-1
                             ${dark ? 'text-yellow/30' : 'text-green/25'}`}>
              {player.number}
            </span>
          </div>
        )}

        {player.captain && (
          <div className="absolute top-2 left-2 z-10 bg-yellow text-dark
                          font-barlow font-black text-[9px] tracking-[1px] uppercase px-1.5 py-0.5">
            ⭐ Capitán
          </div>
        )}

        <div className={`absolute top-2 right-2 z-10 w-7 h-7 rounded-full
                        flex items-center justify-center font-bebas text-[0.85rem]
                        ${dark ? 'bg-dark/70 text-yellow' : 'bg-white/80 text-green'}`}>
          {player.number}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className={`font-barlow text-[9px] tracking-[2px] uppercase mb-0.5
                        ${dark ? 'text-yellow/70' : 'text-green/70'}`}>
          {player.position}
        </div>
        <div className={`font-barlow font-bold text-[1rem] leading-tight
                        ${dark ? 'text-white' : 'text-gray-900'}`}>
          {player.name}
        </div>
        {player.age && (
          <div className={`font-barlow text-[11px] mt-1
                          ${dark ? 'text-white/30' : 'text-gray-400'}`}>
            {player.age} años
          </div>
        )}
      </div>
    </div>
  )
}

export default function PlantillaPage() {
  const { dark } = useTheme()
  const [activeCategory, setActive] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? players
    : players.filter(p => p.category === activeCategory)

  const counts = {}
  categories.forEach(cat => {
    counts[cat] = cat === 'Todos' ? players.length : players.filter(p => p.category === cat).length
  })

  return (
    <div className={`min-h-screen pt-[72px] ${dark ? 'bg-dark' : 'bg-cream'}`}>

      {/* ── Hero de la página ── */}
      <div className={`relative px-6 lg:px-16 py-16 lg:py-20 overflow-hidden
                      ${dark ? 'bg-raised' : 'bg-cream-dark'}`}>
        {/* Marca de agua contenida */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className={`absolute right-0 top-0 font-bebas leading-none select-none
                           translate-x-1/4 -translate-y-1/4
                           ${dark ? 'text-yellow/4' : 'text-green/5'}`}
                style={{ fontSize: 'clamp(8rem, 20vw, 16rem)' }}>
            RC
          </span>
        </div>
        <div className="relative max-w-[1200px] mx-auto">
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-3
                          ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            Temporada 2025
          </div>
          <h1 className={`font-bebas tracking-[2px] leading-none mb-2
                         ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            PLANTILLA OFICIAL
          </h1>
          <p className={`font-barlow text-[1rem] max-w-[500px] ${dark ? 'text-white/40' : 'text-gray-500'}`}>
            {players.length} jugadores · Real Cartagena FC · Categoría Primera B
          </p>
        </div>
      </div>

      {/* ── Filtros ── */}
      <div className={`sticky top-[72px] z-40 px-6 lg:px-16 py-4 border-b
                      ${dark ? 'bg-dark/95 border-white/6 backdrop-blur-md' : 'bg-cream/95 border-gray-200 backdrop-blur-md'}`}>
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-barlow font-bold text-[12px] tracking-[1.5px] uppercase
                          px-4 py-2 border cursor-pointer transition-all duration-200
                          ${activeCategory === cat
                            ? dark
                              ? 'border-yellow text-yellow bg-yellow/10'
                              : 'border-green text-green bg-green/10'
                            : dark
                              ? 'border-white/12 text-white/40 hover:border-yellow/50 hover:text-yellow'
                              : 'border-gray-300 text-gray-400 hover:border-green hover:text-green'
                          }`}
            >
              {cat}
              <span className={`ml-2 text-[10px] ${activeCategory === cat
                ? dark ? 'text-yellow/60' : 'text-green/60'
                : dark ? 'text-white/20' : 'text-gray-300'}`}>
                {counts[cat]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="px-6 lg:px-16 py-12 max-w-[1200px] mx-auto">
        <div className="grid gap-5"
             style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {filtered.map(player => (
            <PlayerCard key={player.id} player={player} dark={dark} />
          ))}
        </div>
      </div>

    </div>
  )
}