import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import Reveal from './Reveal'

const noticias = [
  {
    id: 1,
    tipo: 'Resultado',
    tipoColor: 'green',
    titulo: '¡Victoria! Real Cartagena 4-0 Orsomarso',
    desc: 'Goleada contundente en el Jaime Morón León. Gran actuación del equipo que sigue escalando posiciones en el Torneo Apertura 2026.',
    tags: ['#LaHeroica', '#VamosCartagena'],
    rt: 287, likes: '1.4K', comments: 94,
    tiempo: '6 Mar 2026',
    emoji: '⚽',
  },
  {
    id: 2,
    tipo: 'Clasificación',
    tipoColor: 'yellow',
    titulo: 'Real Cartagena, 3º en la tabla con 18 puntos',
    desc: '5 victorias, 3 empates, 1 derrota. Los Auriverdes están en zona de clasificación a los cuadrangulares finales.',
    tags: ['#RealCartagena', '#AperturaB2026'],
    rt: 145, likes: '892', comments: 67,
    tiempo: '10 Mar 2026',
    emoji: '🏆',
  },
  {
    id: 3,
    tipo: 'Próximo',
    tipoColor: 'blue',
    titulo: 'Envigado FC vs Real Cartagena — Lun 16 Mar',
    desc: 'Partido de visitante ante Envigado en el Polideportivo Sur. 16:05 hrs. ¡La Heroica necesita tu aliento!',
    tags: ['#VamosHeroicos'],
    rt: 203, likes: '1.1K', comments: 58,
    tiempo: '12 Mar 2026',
    emoji: '📋',
  },
]

const tagColors = {
  green:  { badge: 'bg-green-light text-white', dot: 'bg-green-light' },
  yellow: { badge: 'bg-yellow text-dark',       dot: 'bg-yellow'      },
  blue:   { badge: 'bg-blue-500 text-white',    dot: 'bg-blue-400'    },
}

// Carga el script de Twitter una sola vez
function useTwitterWidget(dark) {
  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)
    return () => {}
  }, [dark])
}

export default function Comunicados() {
  const { dark } = useTheme()
  useTwitterWidget(dark)

  return (
    <section id="comunicados"
      className={`px-6 lg:px-16 py-20 lg:py-28 ${dark ? 'bg-dark' : 'bg-cream'}`}>

      {/* Header */}
      <Reveal direction="up">
        <div className="text-center mb-12 lg:mb-14">
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-3
                          ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            Redes Oficiales
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
          </div>
          <h2 className={`font-bebas tracking-[1px] ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            ÚLTIMAS NOTICIAS
          </h2>
          <p className={`font-barlow text-[1rem] mt-1 ${dark ? 'text-white/40' : 'text-gray-400'}`}>
            Comunicados oficiales · @RealCartagena
          </p>
        </div>
      </Reveal>

      {/* ── Layout: cards izquierda + timeline derecha ── */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">

        {/* Cards noticias */}
        <Reveal direction="left" delay="0.1s">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {noticias.map((n) => {
              const tc = tagColors[n.tipoColor]
              return (
                <div key={n.id}
                  className={`group relative flex border overflow-hidden cursor-pointer
                             transition-all duration-300 hover:-translate-y-1
                             ${dark
                               ? 'bg-surface border-white/6 hover:border-white/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
                               : 'bg-white border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                             }`}>
                  {/* Barra lateral coloreada */}
                  <div className={`w-[3px] flex-shrink-0 ${tc.dot}`} />

                  {/* Emoji */}
                  <div className={`w-[70px] flex-shrink-0 flex items-center justify-center text-[2.5rem]
                                  ${dark ? 'bg-black/20' : 'bg-gray-50'}`}>
                    {n.emoji}
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col flex-1 p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`font-barlow font-black text-[9px] tracking-[2px] uppercase px-1.5 py-0.5 ${tc.badge}`}>
                        {n.tipo}
                      </span>
                      <span className={`font-barlow text-[10px] ${dark ? 'text-white/30' : 'text-gray-400'}`}>
                        {n.tiempo}
                      </span>
                    </div>
                    <h3 className={`font-barlow font-bold text-[0.92rem] leading-snug mb-1
                                   ${dark ? 'text-white' : 'text-gray-900'}`}>
                      {n.titulo}
                    </h3>
                    <p className={`font-body text-[0.82rem] leading-relaxed
                                  ${dark ? 'text-white/45' : 'text-gray-500'}`}>
                      {n.desc}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      {n.tags.map(tag => (
                        <span key={tag} className={`font-barlow font-semibold text-[10px]
                                                   ${dark ? 'text-yellow/60' : 'text-green/70'}`}>
                          {tag}
                        </span>
                      ))}
                      <span className={`ml-auto font-barlow text-[11px] flex gap-3
                                       ${dark ? 'text-white/25' : 'text-gray-300'}`}>
                        <span>🔁 {n.rt}</span>
                        <span>❤️ {n.likes}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Twitter Timeline */}
        <Reveal direction="right" delay="0.2s">
          <div className={`border overflow-hidden ${dark ? 'border-white/6' : 'border-gray-200'}`}>
            <div className={`px-4 py-3 border-b flex items-center gap-2
                            ${dark ? 'border-white/6 bg-black/20' : 'border-gray-100 bg-gray-50'}`}>
              <span className={`font-bebas text-[1.1rem] tracking-[1px]
                               ${dark ? 'text-white' : 'text-gray-900'}`}>
                𝕏 @RealCartagena
              </span>
            </div>

            {/* Widget oficial de X — solo funciona en producción */}
            <div className="overflow-hidden">
              <a className="twitter-timeline"
                 data-theme={dark ? 'dark' : 'light'}
                 data-height="520"
                 data-chrome="noheader nofooter noborders"
                 data-tweet-limit="4"
                 href="https://twitter.com/RealCartagena">
                {/* Placeholder visible solo en localhost */}
                <div className={`flex flex-col items-center justify-center gap-3 py-16 px-6 text-center
                                ${dark ? 'bg-surface' : 'bg-gray-50'}`}>
                  <span className="text-[3rem]">𝕏</span>
                  <p className={`font-barlow text-[0.85rem] ${dark ? 'text-white/40' : 'text-gray-400'}`}>
                    Los tweets aparecerán aquí cuando el sitio esté publicado en producción.
                  </p>
                  <a href="https://twitter.com/RealCartagena"
                     target="_blank" rel="noopener noreferrer"
                     className={`font-barlow font-bold text-[12px] tracking-[2px] uppercase
                                no-underline ${dark ? 'text-yellow' : 'text-green'}`}>
                    Ver en Twitter →
                  </a>
                </div>
              </a>
            </div>

          </div>
        </Reveal>

      </div>

      {/* CTA */}
      <Reveal direction="up" delay="0.25s">
        <div className="text-center mt-10">
          <a href="https://twitter.com/RealCartagena"
             target="_blank" rel="noopener noreferrer"
             className={`inline-flex items-center gap-3 btn-skew px-10 py-3.5
                         font-barlow font-black text-[13px] tracking-[2px] uppercase
                         no-underline transition-all duration-200 hover:-translate-y-1
                         ${dark
                           ? 'border-2 border-yellow/40 text-yellow hover:bg-yellow/6 hover:border-yellow'
                           : 'border-2 border-green/60 text-green hover:bg-green/6 hover:border-green'
                         }`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px]
                             ${dark ? 'bg-yellow/20' : 'bg-green/15'}`}>𝕏</span>
            Seguir en X / Twitter
          </a>
        </div>
      </Reveal>

    </section>
  )
}