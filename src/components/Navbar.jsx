import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Club',       href: '#sobre-nosotros' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Plantilla',  href: '#plantilla' },
  { label: 'Noticias',   href: '#comunicados' },
  { label: 'Tienda',     href: '#tienda' },
]

export default function Navbar() {
  const { dark, setDark } = useTheme()
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    if (href.startsWith('/')) {
      navigate(href)
    } else if (location.pathname !== '/') {
      navigate('/' + href)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // ── Colores según estado ──────────────────────────────────
  const navBg = scrolled
    ? dark ? 'bg-dark/98 shadow-lg shadow-black/50 border-b border-yellow/15'
           : 'bg-cream/95 shadow-lg border-b border-black/8'
    : dark ? 'bg-dark/90 border-b border-white/5'
           : 'bg-cream/85 border-b border-transparent'

  const linkColor    = dark ? 'text-white/60 hover:text-yellow' : 'text-gray-500 hover:text-green'
  const lineColor    = dark ? 'bg-yellow' : 'bg-green'
  const burgerColor  = dark ? 'bg-white'  : 'bg-gray-700'
  const mobileBg     = dark ? 'bg-dark border-white/10'   : 'bg-cream border-black/10'
  const mobileLinkCl = dark ? 'text-white/70 hover:text-yellow border-white/5' : 'text-gray-600 hover:text-green border-black/5'
  const toggleBorder = dark ? 'border-white/10 hover:border-yellow/50 bg-surface' : 'border-black/10 hover:border-green bg-white'
  const toggleLabel  = dark ? 'text-white/40' : 'text-gray-400'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                     px-6 lg:px-16 h-[72px] backdrop-blur-md transition-all duration-300 ${navBg}`}>

      {/* ── Logo ── */}
      <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-3 no-underline group">
        <img src="/images/logo.png" alt="Real Cartagena FC"
             className="w-[42px] h-[42px] object-contain group-hover:scale-105 transition-transform duration-200" />
        <span className={`font-bebas text-[22px] tracking-[2px] leading-none ${dark ? 'text-white' : 'text-gray-900'}`}>
          REAL <span className={dark ? 'text-yellow' : 'text-green'}>CARTAGENA</span>
        </span>
      </a>

      {/* ── Desktop links ── */}
      <ul className="hidden lg:flex gap-10 list-none">
        {links.map(({ label, href }) => (
          <li key={href}>
            <button onClick={() => handleNav(href)}
              className={`relative font-barlow font-semibold text-[13px] tracking-[1.5px] uppercase
                         transition-all duration-200 bg-transparent border-none cursor-pointer
                         hover:scale-105 group pb-1 ${linkColor}`}>
              {label}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] ${lineColor}
                               group-hover:w-full transition-all duration-250 ease-out rounded-full`} />
            </button>
          </li>
        ))}
      </ul>

      {/* ── Right controls ── */}
      <div className="flex items-center gap-3">

        {/* Theme toggle */}
        <button onClick={() => setDark(!dark)}
          className={`flex items-center gap-2 px-3 py-1.5 border rounded-none
                      transition-all duration-200 cursor-pointer ${toggleBorder}`}
          title="Cambiar tema">
          <div className={`relative w-9 h-5 rounded-full border transition-all duration-300 flex-shrink-0
                          ${dark ? 'bg-yellow border-yellow' : 'bg-gray-200 border-gray-300'}`}>
            <div className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300
                            ${dark ? 'left-4 bg-dark' : 'left-0.5 bg-gray-400'}`} />
          </div>
          <span className={`font-barlow text-[11px] tracking-[2px] uppercase hidden sm:block ${toggleLabel}`}>
            {dark ? '🌙 Oscuro' : '☀️ Claro'}
          </span>
        </button>

        {/* CTA Tienda */}
        <button onClick={() => handleNav('#tienda')}
          className={`btn-skew-sm px-5 py-2.5 font-barlow font-black text-[13px] tracking-[2px] uppercase
                      border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5
                      ${dark ? 'bg-yellow text-dark hover:bg-yellow-dark' : 'bg-green text-white hover:brightness-110'}`}>
          🛒 Tienda
        </button>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer">
          <span className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className={`absolute top-[72px] left-0 right-0 border-b lg:hidden z-50 ${mobileBg}`}>
          {links.map(({ label, href }) => (
            <button key={href} onClick={() => handleNav(href)}
              className={`block w-full text-left px-6 py-4 font-barlow font-semibold text-[14px]
                         tracking-[2px] uppercase border-b bg-transparent border-l-0 border-r-0
                         border-t-0 cursor-pointer transition-colors ${mobileLinkCl}`}>
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}