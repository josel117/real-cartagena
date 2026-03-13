import { useTheme } from '../context/ThemeContext'
import { useNavigate, useLocation } from 'react-router-dom'

const navCols = [
  {
    title: 'Navegación',
    links: [
      { label: 'Sobre el Club', href: '#sobre-nosotros' },
      { label: 'Resultados',    href: '#resultados' },
      { label: 'Plantilla',     href: '#plantilla' },
      { label: 'Noticias',      href: '#comunicados' },
      { label: 'Tienda',        href: '#tienda' },
    ],
  },
  {
    title: 'Estadio',
    links: [
      { label: 'Jaime Morón León', href: '#' },
      { label: 'Cómo llegar',      href: '#' },
      { label: 'Entradas',         href: '#' },
      { label: 'Palco VIP',        href: '#' },
      { label: 'Guía del hincha',  href: '#' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: '📧 info@realcartagena.com', href: 'mailto:info@realcartagena.com' },
      { label: '📞 +57 (5) 660-0000',       href: 'tel:+5756600000' },
      { label: '📍 Cartagena, Colombia',    href: '#' },
      { label: 'Prensa',                    href: '#' },
      { label: 'Patrocinios',              href: '#' },
    ],
  },
]

const socials = [
  { icon: '𝕏',  label: 'Twitter/X',  href: 'https://x.com/RealCartagenaFC' },
  { icon: '📷', label: 'Instagram',   href: 'https://instagram.com/realcartagenafc' },
  { icon: 'f',  label: 'Facebook',    href: 'https://facebook.com/realcartagenafc' },
  { icon: '▶',  label: 'YouTube',     href: 'https://youtube.com/@realcartagenafc' },
  { icon: '♪',  label: 'TikTok',      href: 'https://tiktok.com/@realcartagenafc' },
]

export default function Footer() {
  const { dark }   = useTheme()
  const navigate   = useNavigate()
  const location   = useLocation()

  const handleNav = (e, href) => {
    if (!href.startsWith('#')) return // links externos o mailto, se comportan normal

    e.preventDefault()

    if (location.pathname === '/') {
      // Ya estamos en home — solo hacer scroll
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Estamos en otra página — ir a home y luego hacer scroll
      navigate('/')
      // Esperamos a que la home cargue y luego scrolleamos
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  return (
    <footer className={`px-6 lg:px-16 pt-16 pb-8
                       ${dark ? 'bg-dark border-t border-white/6' : 'bg-cream border-t border-gray-200'}`}>

      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b
                       ${dark ? 'border-white/6' : 'border-gray-200'}`}>

          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="Real Cartagena FC"
                   className="w-[40px] h-[40px] object-contain flex-shrink-0" />
              <span className={`font-bebas text-[20px] tracking-[2px] leading-none ${dark ? 'text-white' : 'text-gray-900'}`}>
                REAL <span className={dark ? 'text-yellow' : 'text-green'}>CARTAGENA</span>
              </span>
            </div>
            <p className={`font-body text-[0.88rem] leading-relaxed mb-5
                          ${dark ? 'text-white/40' : 'text-gray-500'}`}>
              Real Cartagena Fútbol Club — Orgullo del Caribe colombiano desde 1971.
              Forjando campeones en La Heroica.
            </p>
            {/* Redes */}
            <div className="flex gap-2">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`w-9 h-9 flex items-center justify-center text-[14px] border no-underline
                             transition-all duration-200
                             ${dark
                               ? 'bg-surface border-white/8 text-white/50 hover:bg-yellow hover:text-dark hover:border-yellow'
                               : 'bg-white border-gray-200 text-gray-500 hover:bg-green hover:text-white hover:border-green'
                             }`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {navCols.map(({ title, links }) => (
            <div key={title}>
              <div className={`font-barlow font-bold text-[12px] tracking-[2px] uppercase mb-4
                              ${dark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </div>
              <ul className="list-none flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={e => handleNav(e, href)}
                      className={`font-body text-[0.88rem] no-underline transition-colors duration-200
                                 ${dark
                                   ? 'text-white/40 hover:text-yellow'
                                   : 'text-gray-500 hover:text-green'
                                 }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-2 pt-6
                        font-barlow text-[12px] tracking-[1px] uppercase
                        ${dark ? 'text-white/25' : 'text-gray-400'}`}>
          <span>
            © 2025{' '}
            <strong className={dark ? 'text-yellow' : 'text-green'}>Real Cartagena FC</strong>
            . Todos los derechos reservados.
          </span>
          <span>Categoría Primera B · Torneo BetPlay</span>
        </div>

      </div>
    </footer>
  )
}