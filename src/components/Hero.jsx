import { useTheme } from '../context/ThemeContext'

const STADIUM_IMG = '/images/hero-bg.jpg'

export default function Hero() {
  const { dark } = useTheme()

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* ══════════════════════════════════════
          IMAGEN DE FONDO — Estadio Jaime Morón
          object-fit: cover garantiza que llene
          100% del área sin distorsión en cualquier
          resolución de pantalla.
      ══════════════════════════════════════ */}
      <img
        src={STADIUM_IMG}
        alt="Estadio Jaime Morón León — Cartagena"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* ── Overlay — en ambos modos oscurece la imagen para legibilidad ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: dark
            ? `linear-gradient(
                to top,
                rgba(10,10,10,1)    0%,
                rgba(10,10,10,0.82) 35%,
                rgba(10,10,10,0.45) 65%,
                rgba(10,10,10,0.15) 100%
              ), linear-gradient(
                to bottom,
                rgba(10,10,10,0.85) 0%,
                rgba(10,10,10,0)    20%
              ), linear-gradient(
                135deg,
                rgba(27,107,53,0.25) 0%,
                transparent 55%
              )`
            : `linear-gradient(
                to top,
                rgba(10,10,10,0.92) 0%,
                rgba(10,10,10,0.75) 35%,
                rgba(10,10,10,0.45) 65%,
                rgba(10,10,10,0.15) 100%
              ), linear-gradient(
                to bottom,
                rgba(10,10,10,0.7) 0%,
                rgba(10,10,10,0)   20%
              ), linear-gradient(
                135deg,
                rgba(245,200,0,0.12) 0%,
                transparent 55%
              )`,
        }}
      />

      {/* ── Franja decorativa izquierda ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, #F5C800, #1B6B35, transparent)',
        }}
      />

      {/* ══════════════════════════════════════
          CONTENIDO
          pt-[72px] compensa el navbar fijo
          El contenido vive en la mitad inferior
      ══════════════════════════════════════ */}
      <div
        className="relative flex flex-col justify-end px-6 lg:px-16 pb-20 lg:pb-28"
        style={{ zIndex: 3, minHeight: '100vh', paddingTop: '72px' }}
      >

        {/* ── Badge live ── */}
        <div className={`inline-flex items-center gap-2 self-start px-4 py-1.5 mb-5
                         border font-barlow text-[11px] tracking-[3px] uppercase
                         ${dark
                           ? 'bg-yellow/10 border-yellow/30 text-yellow'
                           : 'bg-yellow/15 border-yellow/50 text-yellow'
                         }`}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-yellow
                           animate-[blink_1.5s_ease-in-out_infinite]" />
          Torneo BetPlay · Categoría Primera B · 2025
        </div>

        {/* ── Título principal ── */}
        <h1
          className="font-bebas leading-[0.85] tracking-[3px] mb-6"
          style={{ fontSize: 'clamp(4rem, 13vw, 11rem)' }}
        >
          {/* REAL */}
          <div className="text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            REAL
          </div>

          {/* CARTAGENA */}
          <div
            className="text-yellow"
            style={{ textShadow: dark ? '0 0 60px rgba(245,200,0,0.4)' : '0 2px 30px rgba(0,0,0,0.4)' }}
          >
            CARTAGENA
          </div>

          {/* F.C. — outline */}
          <div
            style={{
              WebkitTextStroke: '2px #F5C800',
              color: 'transparent',
              textShadow: 'none',
            }}
          >
            F.C.
          </div>
        </h1>

        {/* ── Línea separadora con colores del club ── */}
        <div className="flex items-center gap-3 mb-5 self-start">
          <div className="w-10 h-[3px] bg-yellow" />
          <div className="w-6 h-[3px] bg-green" />
          <div className={`w-3 h-[3px] ${dark ? 'bg-white/20' : 'bg-gray-400/40'}`} />
        </div>

        {/* ── Eslogan ── */}
        <p className="font-barlow text-[1.05rem] tracking-[1px] max-w-[480px]
                       leading-relaxed mb-8 text-white/70"
           style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
          Nacidos en La Heroica, forjados por la pasión del Caribe.
          Más de seis décadas defendiendo los colores amarillo, verde y negro.
        </p>

        {/* ── Botones CTA ── */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo('#resultados')}
            className="btn-skew px-8 py-3.5 font-barlow font-black text-[13px] tracking-[2px] uppercase
                        border-none cursor-pointer transition-all duration-200
                        hover:-translate-y-1 hover:shadow-lg
                        bg-yellow text-dark hover:shadow-yellow/30"
          >
            Ver Resultados
          </button>
          <button
            onClick={() => scrollTo('#plantilla')}
            className="btn-skew px-8 py-3.5 font-barlow font-black text-[13px] tracking-[2px] uppercase
                        bg-transparent cursor-pointer transition-all duration-200
                        hover:-translate-y-1 border-2 border-yellow/60 text-yellow
                        hover:border-yellow hover:bg-yellow/10"
          >
            Conoce la Plantilla
          </button>
        </div>

        {/* ── Stats desktop — esquina inferior derecha ── */}
        <div className="absolute right-6 lg:right-16 bottom-20 lg:bottom-28 hidden md:flex flex-col gap-5 text-right">
          {[
            { num: '62',  label: 'Años de historia' },
            { num: '3°',  label: 'Posición actual'  },
            { num: '25K', label: 'Aficionados'       },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className={`font-bebas text-[3.2rem] leading-none
                              ${dark ? 'text-yellow' : 'text-green'}`}>
                {num}
              </div>
              <div className="font-barlow text-[10px] tracking-[2px] uppercase text-gray-400 mt-0.5">
                {label}
              </div>
            </div>
          ))}

          {/* Línea vertical decorativa */}
          <div className={`absolute -left-4 top-0 bottom-0 w-px
                          ${dark ? 'bg-yellow/20' : 'bg-green/20'}`} />
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35">
          <span className="font-barlow text-[9px] tracking-[4px] uppercase
                           text-gray-500">
            Scroll
          </span>
          {/* Línea animada */}
          <div className="relative w-px h-10 overflow-hidden">
            <div className={`absolute inset-x-0 top-0 h-full ${dark ? 'bg-yellow/50' : 'bg-green/50'}`} />
            <div
              className={`absolute inset-x-0 h-1/2 animate-[slideDown_1.8s_ease-in-out_infinite]
                          ${dark ? 'bg-yellow' : 'bg-green'}`}
              style={{ animationName: 'scrollDrop' }}
            />
          </div>
          <div className={`w-1 h-1 rounded-full ${dark ? 'bg-yellow/40' : 'bg-green/40'}`} />
        </div>

      </div>
    </section>
  )
}