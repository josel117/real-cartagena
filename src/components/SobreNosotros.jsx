import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Reveal from './Reveal'

const stats = [
  { num: '18K',  label: 'Capacidad Estadio' },
  { num: '52+',  label: 'Años compitiendo'  },
  { num: '2',    label: 'Títulos Nacionales' },
]

export default function SobreNosotros() {
  const { dark } = useTheme()

  return (
    <section id="sobre-nosotros" className={`px-6 lg:px-16 py-20 lg:py-28 ${dark ? 'bg-dark' : 'bg-cream'}`}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Visual ── */}
        <Reveal direction="left">
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
            <div className={`w-full aspect-[4/5] relative overflow-hidden border
                            ${dark ? 'border-white/6' : 'border-green/15'}`}>
              <img
                src="/images/sobre-nosotros.jpg"
                alt="Real Cartagena FC"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay sutil con colores del club */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: dark
                    ? 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)'
                    : 'linear-gradient(to top, rgba(27,107,53,0.35) 0%, transparent 50%)',
                }}
              />
            </div>
            {/* Badge año */}
            <div className={`absolute -bottom-5 -right-3 lg:-right-5 w-[90px] h-[90px] lg:w-[100px] lg:h-[100px]
                            hex flex flex-col items-center justify-center font-bebas
                            ${dark ? 'bg-yellow text-dark' : 'bg-green text-white'}`}>
              <span className="text-[1.6rem] lg:text-[1.8rem] leading-none">1971</span>
              <span className="text-[0.5rem] tracking-[1px]">FUNDACIÓN</span>
            </div>
          </div>
        </Reveal>

        {/* ── Contenido ── */}
        <div className="mt-8 lg:mt-0">
          <Reveal direction="up" delay="0.1s">
            <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-3
                            ${dark ? 'text-yellow' : 'text-green'}`}>
              <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
              Nuestra Historia
            </div>
            <h2 className={`font-bebas leading-none tracking-[1px] mb-5
                           ${dark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              MÁS QUE<br />UN CLUB
            </h2>
          </Reveal>

          <Reveal direction="up" delay="0.2s">
            <p className={`font-body leading-relaxed mb-3 text-[0.95rem] lg:text-base
                          ${dark ? 'text-white/60' : 'text-gray-600'}`}>
              Real Cartagena Fútbol Club nació en las calles de la ciudad amurallada, en el corazón
              del Caribe colombiano. Fundado en 1971, el club ha representado el orgullo, la cultura
              y la garra de una ciudad que vive el fútbol con una intensidad única.
            </p>
            <p className={`font-body leading-relaxed text-[0.95rem] lg:text-base
                          ${dark ? 'text-white/60' : 'text-gray-600'}`}>
              El Estadio Jaime Morón León, con capacidad para 18.000 espectadores, es la fortaleza
              amarilla donde los sueños cobran vida.
            </p>
          </Reveal>

          <Reveal direction="up" delay="0.3s">
            <div className={`mt-6 px-5 py-4 border-l-4
                            ${dark ? 'border-yellow bg-yellow/4' : 'border-green bg-green-pale'}`}>
              <p className={`font-barlow text-[1rem] lg:text-[1.1rem] italic leading-snug
                            ${dark ? 'text-white/80' : 'text-green'}`}>
                "La Heroica no descansa. Cartagena es más que una ciudad — es un sentimiento
                que se lleva en cada partido, en cada gol, en cada victoria."
              </p>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal direction="up" delay="0.4s">
            <div className="flex flex-wrap gap-6 lg:gap-8 mt-7">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <div className={`font-bebas text-[2.2rem] lg:text-[2.5rem] leading-none
                                  ${dark ? 'text-yellow' : 'text-green'}`}>
                    {num}
                  </div>
                  <div className="font-barlow text-[11px] tracking-[2px] uppercase text-gray-400 mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay="0.5s">
            <div className="mt-8">
              <Link
                to="/historia"
                className={`inline-flex items-center gap-2 btn-skew px-8 py-3.5
                            font-barlow font-black text-[13px] tracking-[2px] uppercase
                            no-underline transition-all duration-200 hover:-translate-y-1
                            ${dark
                              ? 'bg-yellow text-dark hover:shadow-lg hover:shadow-yellow/20'
                              : 'bg-green text-white hover:shadow-lg hover:shadow-green/20'
                            }`}
              >
                Conocer más historia →
              </Link>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}