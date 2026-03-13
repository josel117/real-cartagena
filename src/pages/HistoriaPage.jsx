import { useTheme } from '../context/ThemeContext'

const timeline = [
  {
    year: '1971',
    title: 'El Nacimiento de La Heroica',
    text: 'El 5 de enero de 1971, la Dimayor dio vía libre a la creación del Real Cartagena, con la ficha alquilada del Atlético Bucaramanga. El 7 de febrero debutó oficialmente ante su público con una victoria 1-0 sobre el Once Caldas, con gol de Mauro Márquez — el primer gol en la historia del club. El uniforme: amarillo con vivos verdes, pantaloneta verde y el escudo de la ciudad en el pecho.',
    icon: '🏙️',
  },
  {
    year: '1983–1989',
    title: 'Filial de Millonarios',
    text: 'En 1983, con el club al borde de la desaparición, Millonarios tendió la mano firmando un convenio que convirtió al Real Cartagena en su escuela oficial en la costa. Este apoyo económico y deportivo fue clave para sobrevivir una época difícil y seguir formando futbolistas en Bolívar.',
    icon: '🤝',
  },
  {
    year: '1992',
    title: 'Regreso al Profesionalismo',
    text: 'El 2 de febrero de 1992 nace el Real Cartagena moderno, al adquirir la ficha de la Dimayor del Sporting de Barranquilla. Bajo la presidencia de Eduardo Pardo Porte, el club regresó a la Primera División luego de 21 años de ausencia, generando una ilusión enorme en toda la ciudad heroica.',
    icon: '📋',
  },
  {
    year: '1999',
    title: 'Primer Ascenso: Campeones de la Primera B',
    text: 'Con el apoyo del América de Cali como filial y el técnico Hernán Darío Herrera al mando, el Real Cartagena conquistó el título de la Primera B y ascendió a la élite del fútbol colombiano. El sueño de La Heroica se hacía realidad después de años de perseverancia en la segunda categoría.',
    icon: '🏆',
  },
  {
    year: '2004',
    title: 'Segundo Ascenso: Historia en el Fútbol Colombiano',
    text: 'Real Cartagena logró el ascenso por segunda vez, convirtiéndose en el primer equipo en lograrlo en dos ocasiones desde la creación de la Primera B en 1991. Una hazaña histórica que reflejó el alma luchadora del club costeño.',
    icon: '⭐',
  },
  {
    year: '2005',
    title: 'Subcampeones de Colombia',
    text: 'En el Torneo Finalización 2005, el Real Cartagena vivió su mejor momento en la Primera A. Con el Estadio Pedro de Heredia a reventar y figuras como David Yepes y Carlos Valdés, el equipo llegó a la gran final del fútbol colombiano, quedando subcampeón frente al Deportivo Cali.',
    icon: '🥈',
  },
  {
    year: '2008',
    title: 'Tercer Título en la Primera B',
    text: 'Real Cartagena volvió a conquistar la Primera B en 2008, sumando su tercer título en la segunda categoría del fútbol colombiano y reafirmando su espíritu de club grande que siempre regresa.',
    icon: '🏆',
  },
  {
    year: '2025',
    title: 'Rumbo a la Élite',
    text: 'Hoy, con Jarlan Barrera como capitán y alma del equipo, y el goleador Mauro Manotas al frente del ataque, el Real Cartagena compite con determinación en el Torneo BetPlay de la Categoría Primera B. La ciudad heroica espera con ansias el regreso a la Primera División.',
    icon: '🌟',
  },
]

const palmares = [
  { titulo: 'Campeón Primera B', años: '1999 · 2004 · 2008', color: 'gold' },
  { titulo: 'Subcampeón Primera A', años: '2005-II', color: 'silver' },
]

const stats = [
  { num: '54',   label: 'Años de historia' },
  { num: '3',    label: 'Títulos Primera B' },
  { num: '16K',  label: 'Aforo estadio' },
  { num: '1ª B', label: 'División actual' },
]

export default function HistoriaPage() {
  const { dark } = useTheme()

  return (
    <div className={`min-h-screen pt-[72px] ${dark ? 'bg-dark' : 'bg-cream'}`}>

      {/* ── Hero ── */}
      <div className="relative h-[45vh] min-h-[340px] overflow-hidden">
        <img src="/images/sobre-nosotros.jpg" alt="Real Cartagena FC"
             className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.25) 100%)' }} />
        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-16 pb-14">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-3 text-yellow">
              <span className="w-8 h-0.5 bg-yellow" />
              Desde 1971
            </div>
            <h1 className="font-bebas text-white tracking-[2px] leading-none"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              NUESTRA HISTORIA
            </h1>
            <p className="font-barlow text-white/50 text-[1rem] mt-2 max-w-[500px]">
              Más de cinco décadas de pasión, lucha y orgullo por los colores de La Heroica.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className={`border-b ${dark ? 'bg-raised border-white/6' : 'bg-cream-dark border-gray-200'}`}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className={`font-bebas text-[2.8rem] leading-none ${dark ? 'text-yellow' : 'text-green'}`}>{num}</div>
              <div className={`font-barlow text-[11px] tracking-[2px] uppercase mt-1 ${dark ? 'text-white/30' : 'text-gray-400'}`}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-16 lg:py-20">

        {/* ── Intro con imagen ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          <div>
            <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-4 ${dark ? 'text-yellow' : 'text-green'}`}>
              <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
              Quiénes somos
            </div>
            <h2 className={`font-bebas leading-none tracking-[1px] mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              MÁS QUE UN CLUB,<br />UN SENTIMIENTO
            </h2>
            <p className={`font-body text-[1rem] leading-relaxed mb-4 ${dark ? 'text-white/60' : 'text-gray-600'}`}>
              Real Cartagena Fútbol Club nació en 1971 en el corazón de la ciudad amurallada, Cartagena de Indias.
              Sus colores amarillo, verde y negro representan el alma caribeña: el sol del Caribe, la naturaleza
              exuberante de la costa y la determinación de su gente.
            </p>
            <p className={`font-body text-[1rem] leading-relaxed mb-4 ${dark ? 'text-white/60' : 'text-gray-600'}`}>
              "La Heroica" es el apodo de la propia Cartagena de Indias, Patrimonio de la Humanidad por la UNESCO,
              ciudad que resistió siglos de invasiones y hoy es símbolo de orgullo colombiano. Esa misma resistencia
              define el ADN del club: luchar siempre, sin importar las circunstancias.
            </p>
            <p className={`font-body text-[1rem] leading-relaxed ${dark ? 'text-white/60' : 'text-gray-600'}`}>
              A lo largo de su historia, el club ha sido un referente del fútbol costeño, formando jugadores
              de alto nivel y representando con orgullo a una de las ciudades más emblemáticas de Colombia.
            </p>
          </div>

          <div className={`relative overflow-hidden border ${dark ? 'border-white/8' : 'border-gray-200'}`}
               style={{ aspectRatio: '4/5' }}>
            <img src="/images/sobre-nosotros.jpg" alt="Real Cartagena FC"
                 className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 pointer-events-none"
                 style={{ background: dark
                   ? 'linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 50%)'
                   : 'linear-gradient(to top, rgba(27,107,53,0.25) 0%, transparent 50%)' }} />
            <div className={`absolute bottom-4 left-4 font-bebas text-[0.95rem] tracking-[2px] px-3 py-1
                            ${dark ? 'bg-yellow text-dark' : 'bg-green text-white'}`}>
              FUNDADO 1971
            </div>
          </div>
        </div>

        {/* ── Palmarés ── */}
        <div className="mb-20 lg:mb-24">
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-2 ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            Palmarés
          </div>
          <h2 className={`font-bebas leading-none tracking-[1px] mb-8 ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            TÍTULOS Y LOGROS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {palmares.map(({ titulo, años, color }) => (
              <div key={titulo}
                   className={`flex items-center gap-5 p-5 border
                               ${dark ? 'bg-surface border-white/6' : 'bg-white border-gray-200 shadow-sm'}`}>
                <div className={`w-14 h-14 flex-shrink-0 flex items-center justify-center text-[2rem]
                                ${color === 'gold'
                                  ? dark ? 'bg-yellow/15' : 'bg-yellow/20'
                                  : dark ? 'bg-white/8' : 'bg-gray-100'}`}>
                  🏆
                </div>
                <div>
                  <div className={`font-barlow font-bold text-[1rem] ${dark ? 'text-white' : 'text-gray-900'}`}>{titulo}</div>
                  <div className={`font-bebas text-[1.4rem] leading-tight ${color === 'gold' ? dark ? 'text-yellow' : 'text-green' : dark ? 'text-white/50' : 'text-gray-400'}`}>{años}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-2 ${dark ? 'text-yellow' : 'text-green'}`}>
          <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
          Cronología
        </div>
        <h2 className={`font-bebas leading-none tracking-[1px] mb-12 ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          HISTORIA AÑO A AÑO
        </h2>

        <div className="relative">
          {/* Línea vertical más gruesa */}
          <div className={`absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-[2px] ${dark ? 'bg-white/20' : 'bg-gray-300'}`} />

          <div className="space-y-10 lg:space-y-0">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={item.year}
                     className={`relative flex lg:items-start gap-0 pl-14 lg:pl-0 lg:mb-16
                                 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                  {/* Texto */}
                  <div className={`lg:w-[46%] ${isLeft ? 'lg:pr-14' : 'lg:pl-14'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`font-bebas text-[2.2rem] leading-none ${dark ? 'text-yellow' : 'text-green'}`}>
                        {item.year}
                      </div>
                      {/* Línea decorativa más gruesa */}
                      <div className={`flex-1 h-[2px] max-w-[60px] ${dark ? 'bg-yellow/50' : 'bg-green/40'}`} />
                    </div>
                    <h3 className={`font-barlow font-bold text-[1.05rem] mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`font-body text-[0.9rem] leading-relaxed ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                      {item.text}
                    </p>
                  </div>

                  {/* Dot más visible */}
                  <div className={`absolute left-[10px] lg:left-1/2 lg:-translate-x-1/2 mt-3 lg:mt-2
                                  w-[18px] h-[18px] rounded-full border-2 flex-shrink-0
                                  ${dark ? 'bg-dark border-yellow' : 'bg-cream border-green'}`} />

                  {/* Lado opuesto — icono */}
                  <div className={`hidden lg:flex lg:w-[46%] lg:items-start
                                  ${isLeft ? 'lg:pl-14' : 'lg:pr-14'}`}
                       style={{ paddingTop: 'calc(2.2rem + 0.75rem)' }}>
                    <div className={`w-16 h-16 flex items-center justify-center text-[2rem] border-2 flex-shrink-0
                                    ${dark
                                      ? 'bg-yellow/8 border-yellow/20'
                                      : 'bg-green/8 border-green/20'
                                    }`}>
                      {item.icon}
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* ── Escudos ── */}
        <div className={`mt-20 lg:mt-24 p-8 border text-center ${dark ? 'bg-surface border-white/6' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-6 justify-center ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            Evolución del escudo
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
          </div>
          <div className="grid grid-cols-2 gap-8 max-w-[360px] mx-auto">
            {[{ era: '1993 – 2013', label: 'Escudo histórico' }, { era: '2013 – Actual', label: 'Escudo actual' }].map(({ era, label }) => (
              <div key={era} className="text-center">
                <div className={`w-full aspect-square border flex items-center justify-center mb-3
                                ${dark ? 'bg-raised border-white/6' : 'bg-cream-dark border-gray-200'}`}>
                  <img src="/images/logo.png" alt={label} className="w-3/4 h-3/4 object-contain opacity-70" />
                </div>
                <div className={`font-bebas text-[1.1rem] ${dark ? 'text-yellow' : 'text-green'}`}>{era}</div>
                <div className={`font-barlow text-[11px] tracking-[1px] uppercase ${dark ? 'text-white/30' : 'text-gray-400'}`}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Estadio ── */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-4 ${dark ? 'text-yellow' : 'text-green'}`}>
              <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
              Estadio
            </div>
            <h2 className={`font-bebas leading-none tracking-[1px] mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              JAIME MORÓN LEÓN
            </h2>
            <p className={`font-body text-[1rem] leading-relaxed mb-4 ${dark ? 'text-white/60' : 'text-gray-600'}`}>
              Ubicado en el barrio El Campestre de Cartagena de Indias, el Estadio Jaime Morón León es
              el hogar del Real Cartagena con capacidad para 16.068 espectadores. Fue sede de la
              Copa Mundial Sub-20 de 2011 y uno de los escenarios más calientes del fútbol colombiano.
            </p>
            <p className={`font-body text-[1rem] leading-relaxed ${dark ? 'text-white/60' : 'text-gray-600'}`}>
              En la temporada 2005-II, el Real Cartagena fue el mejor equipo local de Colombia,
              obteniendo 33 de 39 puntos posibles. La hinchada amarilla convirtió este estadio en
              una fortaleza imposible de rendir.
            </p>
          </div>
          <div className={`overflow-hidden border h-[280px] ${dark ? 'border-white/8' : 'border-gray-200'}`}>
            <img src="/images/hero-bg.jpg" alt="Estadio Jaime Morón León"
                 className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        {/* ── Hinchada ── */}
        <div className={`mt-12 p-8 border ${dark ? 'bg-surface border-white/6' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-4 ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            La hinchada
          </div>
          <h2 className={`font-bebas leading-none tracking-[1px] mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            REBELIÓN AURIVERDE NORTE
          </h2>
          <p className={`font-body text-[1rem] leading-relaxed max-w-[700px] ${dark ? 'text-white/60' : 'text-gray-600'}`}>
            Fundada el 11 de marzo de 2001, la Rebelión Auriverde Norte es la barra popular del Real Cartagena.
            Su nombre reivindica la pasión, el aguante y el folclor costeño como un acto de bravura — resistencia
            en el sentido más caribeño de la palabra. Más que una barra, es una comunidad que vive los colores
            del club en los barrios de Cartagena, día a día, más allá de los 90 minutos.
          </p>
        </div>

      </div>
    </div>
  )
}