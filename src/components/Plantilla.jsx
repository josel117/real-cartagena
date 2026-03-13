import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { players } from '../data/players'
import Reveal from './Reveal'

function PlayerCard({ player, dark, size = 'normal' }) {
  const imgH  = size === 'small' ? 'h-[200px]' : 'h-[240px]'
  const cardW = size === 'small' ? 'w-[180px]' : 'w-[210px]'

  return (
    <div
      className={`flex-shrink-0 ${cardW}
                  border cursor-pointer group overflow-hidden
                  transition-all duration-300 hover:-translate-y-1.5
                  ${dark
                    ? 'bg-surface border-white/6 hover:border-yellow hover:shadow-[0_8px_24px_rgba(245,200,0,0.1)]'
                    : 'bg-white border-gray-100 shadow-sm hover:border-green hover:shadow-[0_12px_32px_rgba(27,107,53,0.12)]'
                  }`}
    >
      {/* Área de imagen */}
      <div className={`${imgH} relative overflow-hidden flex items-end justify-center
                      ${dark
                        ? 'bg-gradient-to-b from-green/40 via-dark/60 to-dark'
                        : 'bg-gradient-to-b from-green/15 via-cream to-cream-dark'
                      }`}>

        {/* Número decorativo de fondo */}
        <span className={`absolute top-1 left-2 font-bebas text-[4.5rem] leading-none select-none
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

        {/* Captain badge */}
        {player.captain && (
          <div className="absolute top-2 left-2 z-10 bg-yellow text-dark
                          font-barlow font-black text-[9px] tracking-[1px] uppercase px-1.5 py-0.5">
            ⭐ Capitán
          </div>
        )}

        {/* Número badge */}
        <div className={`absolute top-2 right-2 z-10 w-7 h-7 rounded-full
                        flex items-center justify-center font-bebas text-[0.85rem]
                        ${dark ? 'bg-dark/70 text-yellow' : 'bg-white/80 text-green'}`}>
          {player.number}
        </div>
      </div>

      {/* Info */}
      <div className="p-3 pb-4">
        <div className={`font-barlow text-[9px] tracking-[2px] uppercase mb-0.5
                        ${dark ? 'text-yellow/70' : 'text-green/70'}`}>
          {player.position}
        </div>
        <div className={`font-barlow font-bold text-[0.95rem] leading-tight
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


export default function Plantilla() {
  const { dark } = useTheme()
  const carousel = [...players, ...players]

  return (
    <section id="plantilla" className={`py-20 lg:py-28 overflow-hidden ${dark ? 'bg-dark' : 'bg-cream'}`}>

      {/* Header */}
      <Reveal direction="up">
        <div className="px-6 lg:px-16 mb-10">
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-3
                          ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            La Escuadra
          </div>
          <h2 className={`font-bebas tracking-[1px] ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            PLANTILLA 2025
          </h2>
        </div>
      </Reveal>

      {/* ── Carrusel infinito ── */}
      <div className="overflow-hidden">
        <div className="carousel-animate gap-5 w-max">
          {carousel.map((player, idx) => (
            <PlayerCard key={`${player.id}-${idx}`} player={player} dark={dark} />
          ))}
        </div>
      </div>

      {/* CTA ver plantilla completa */}
      <Reveal direction="up" delay="0.1s">
        <div className="text-center mt-10 px-6">
          <Link
            to="/plantilla"
            className={`inline-block btn-skew px-10 py-3.5 font-barlow font-black text-[14px] tracking-[2px] uppercase
                        no-underline transition-all duration-200 hover:-translate-y-0.5
                        ${dark ? 'bg-yellow text-dark' : 'bg-green text-white'}`}
          >
            Ver Plantilla Completa →
          </Link>
        </div>
      </Reveal>

    </section>
  )
}