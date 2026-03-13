import { useTheme } from '../context/ThemeContext'
import Reveal from './Reveal'
import { getUltimoPartido, getProximoPartido } from '../data/fixtures'

const RC_ID = 6119

function fmtFecha(fechaStr) {
  const d = new Date(fechaStr + 'T12:00:00')
  return d.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short', year: '2-digit' })
}

function EquipoCol({ equipo, dark }) {
  const isRC = equipo.id === RC_ID
  return (
    <div className="flex-1 flex flex-col items-center gap-2 min-w-0">
      <img
        src={equipo.escudo}
        alt={equipo.nombre}
        className="w-12 h-12 object-contain"
        onError={e => { e.target.style.opacity = '0' }}
      />
      <span className={`font-barlow font-bold text-[0.8rem] uppercase text-center leading-tight
                       ${isRC ? (dark ? 'text-yellow' : 'text-green') : (dark ? 'text-white' : 'text-gray-900')}`}>
        {equipo.nombre}
      </span>
    </div>
  )
}

function BadgeResultado({ partido, dark }) {
  const rcEsLocal = partido.local.id === RC_ID
  const rcGoles   = rcEsLocal ? partido.resultado.local : partido.resultado.visitante
  const rivGoles  = rcEsLocal ? partido.resultado.visitante : partido.resultado.local
  const won  = rcGoles > rivGoles
  const draw = rcGoles === rivGoles
  return (
    <span className={`font-barlow text-[9px] tracking-[2px] uppercase px-2 py-0.5 border mt-1 inline-block
                     ${won
                       ? dark ? 'bg-green/20 border-green/40 text-green-light' : 'bg-green/10 border-green/30 text-green'
                       : draw
                       ? dark ? 'bg-yellow/15 border-yellow/40 text-yellow' : 'bg-yellow/10 border-yellow/30 text-yellow-700'
                       : dark ? 'bg-red-900/30 border-red-700/40 text-red-400' : 'bg-red-50 border-red-200 text-red-500'
                     }`}>
      {won ? '✓ Victoria' : draw ? '— Empate' : '✗ Derrota'}
    </span>
  )
}

export default function Resultados() {
  const { dark } = useTheme()
  const ultimo  = getUltimoPartido()
  const proximo = getProximoPartido()

  const card = dark
    ? 'bg-surface border border-white/6'
    : 'bg-white border border-gray-200 shadow-sm'

  return (
    <section id="resultados" className={`px-6 lg:px-16 py-20 lg:py-28 ${dark ? 'bg-raised' : 'bg-cream-dark'}`}>

      <Reveal direction="up">
        <div className="text-center mb-12 lg:mb-14">
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-3
                          ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            En el campo
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
          </div>
          <h2 className={`font-bebas tracking-[1px] ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            RESULTADOS &amp; POSICIONES
          </h2>
        </div>
      </Reveal>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ─── Partidos ─── */}
        <Reveal direction="left" delay="0.1s">
          <div className="flex flex-col gap-4 h-full">

            {/* Último resultado */}
            {ultimo && (
              <div className={`${card} overflow-hidden`}>
                <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #1B6B35, #F5C800)' }} />
                <div className={`px-5 py-3 border-b ${dark ? 'border-white/6 bg-black/20' : 'border-gray-100 bg-gray-50'}`}>
                  <div className={`font-barlow font-bold text-[0.85rem] tracking-[1px] uppercase ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Último Resultado
                  </div>
                  <div className={`font-barlow text-[10px] tracking-[1.5px] uppercase ${dark ? 'text-white/30' : 'text-gray-400'}`}>
                    Torneo BetPlay Primera B · {fmtFecha(ultimo.fecha)}
                  </div>
                </div>
                <div className="p-6">
                  <div className={`font-barlow text-[10px] tracking-[2px] uppercase mb-5 ${dark ? 'text-white/30' : 'text-gray-400'}`}>
                    {ultimo.estadio}
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <EquipoCol equipo={ultimo.local}     dark={dark} />
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`font-bebas text-[3.5rem] leading-none tracking-[-2px] ${dark ? 'text-white' : 'text-gray-900'}`}>
                        {ultimo.resultado.local}
                        <span className={dark ? 'text-white/20' : 'text-gray-300'}> — </span>
                        {ultimo.resultado.visitante}
                      </div>
                      <BadgeResultado partido={ultimo} dark={dark} />
                    </div>
                    <EquipoCol equipo={ultimo.visitante} dark={dark} />
                  </div>
                </div>
              </div>
            )}

            {/* Próximo partido */}
            {proximo && (
              <div className={`${card} overflow-hidden`}>
                <div className={`h-[3px] ${dark ? 'bg-yellow' : 'bg-green'}`} />
                <div className={`px-5 py-3 border-b ${dark ? 'border-white/6 bg-black/20' : 'border-gray-100 bg-gray-50'}`}>
                  <div className={`font-barlow font-bold text-[0.85rem] tracking-[1px] uppercase ${dark ? 'text-yellow' : 'text-green'}`}>
                    Próximo Partido
                  </div>
                  <div className={`font-barlow text-[10px] tracking-[1.5px] uppercase ${dark ? 'text-white/30' : 'text-gray-400'}`}>
                    Torneo BetPlay Primera B · {fmtFecha(proximo.fecha)}
                  </div>
                </div>
                <div className="p-6">
                  <div className={`font-bebas text-[1.5rem] leading-none mb-0.5 ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {fmtFecha(proximo.fecha)}
                  </div>
                  <div className={`font-barlow text-[11px] tracking-[2px] uppercase mb-5 ${dark ? 'text-yellow' : 'text-green'}`}>
                    {proximo.hora} hrs · {proximo.estadio}
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <EquipoCol equipo={proximo.local}     dark={dark} />
                    <div className={`font-bebas text-[2.5rem] flex-shrink-0 ${dark ? 'text-white/20' : 'text-gray-300'}`}>VS</div>
                    <EquipoCol equipo={proximo.visitante} dark={dark} />
                  </div>
                </div>
              </div>
            )}

          </div>
        </Reveal>

        {/* ─── Tabla de posiciones Sofascore ─── */}
        <Reveal direction="right" delay="0.2s">
          <div className={`${card} overflow-hidden`}>
            <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #F5C800, #1B6B35)' }} />
            <div className={`px-5 py-3 border-b ${dark ? 'border-white/6 bg-black/20' : 'border-gray-100 bg-gray-50'}`}>
              <div className={`font-barlow font-bold text-[0.95rem] tracking-[1px] uppercase ${dark ? 'text-white' : 'text-gray-900'}`}>
                Tabla de Posiciones
              </div>
              <div className={`font-barlow text-[11px] tracking-[2px] ${dark ? 'text-white/30' : 'text-gray-400'}`}>
                BETPLAY PRIMERA B · 2026
              </div>
            </div>
            <iframe
              id="sofa-standings-embed-57659-89001"
              src={`https://widgets.sofascore.com/embed/tournament/57659/season/89001/standings/Apertura?widgetTitle=Apertura&showCompetitionLogo=true&widgetTheme=${dark ? 'dark' : 'light'}`}
              style={{ width: '100%', height: '530px', border: 'none', maxWidth: '768px' }}
              title="Tabla de posiciones Primera B"
              scrolling="no"
              loading="lazy"
            />
          </div>
        </Reveal>

      </div>

      <Reveal direction="up" delay="0.3s">
        <div className="text-center mt-8">
          <a href="https://www.sofascore.com/football/tournament/colombia/primera-b/1238#id:89001"
             target="_blank"
             rel="noopener noreferrer"
             className={`inline-flex items-center gap-2 font-barlow text-[11px] tracking-[2px] uppercase
                         no-underline transition-colors duration-200
                         ${dark ? 'text-white/30 hover:text-yellow' : 'text-gray-400 hover:text-green'}`}>
            Ver más en Sofascore →
          </a>
        </div>
      </Reveal>

    </section>
  )
}