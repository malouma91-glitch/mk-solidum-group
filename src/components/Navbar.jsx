import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/wie-zijn-wij', label: 'Over ons' },
  { to: '/diensten', label: 'Diensten' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/referenties', label: 'Referenties' },
  { to: '/faq', label: 'FAQ' },
  { to: '/kennisbank', label: 'Kennisbank' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.92)'
          : 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled
          ? '0 4px 32px rgba(37,99,235,0.10), 0 1px 0 rgba(37,99,235,0.08)'
          : '0 1px 0 rgba(226,232,240,0.8)',
      }}
    >
      <div className="navbar-border absolute bottom-0 left-0 right-0" />

      <div className="container-main flex justify-between items-center py-3.5">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-1 group">
          <span className="text-[1.3rem] font-black font-raleway text-slate-900 tracking-tight transition-all duration-300 group-hover:text-slate-700">
            MK
          </span>
          <span
            className="text-[1.3rem] font-black font-raleway tracking-tight transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg,#2563EB,#06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 8px rgba(37,99,235,0.3))',
            }}
          >
            Solidum
          </span>
          <span className="text-[0.75rem] font-semibold text-slate-400 ml-0.5 hidden sm:inline">Group</span>
          <span className="ml-1.5 mt-auto mb-1 flex items-end">
            <span className="glow-dot w-1.5 h-1.5 rounded-full inline-block bg-blue-500" />
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `nav-link-glow relative text-sm font-semibold tracking-wide px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: 'rgba(37,99,235,0.07)',
                        boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.15)',
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    style={{
                      background: 'linear-gradient(90deg,#2563EB,#06B6D4)',
                      boxShadow: '0 0 6px rgba(37,99,235,0.5)',
                    }}
                  />
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="btn-shimmer ml-3 relative inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #1a56db 50%, #0f46c9 100%)',
              boxShadow: '0 4px 18px rgba(37,99,235,0.45), 0 0 0 1px rgba(37,99,235,0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.6), 0 0 0 1px rgba(37,99,235,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.45), 0 0 0 1px rgba(37,99,235,0.2)'
            }}
          >
            <span
              className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity"
              style={{ boxShadow: '0 0 0 3px rgba(37,99,235,0.25)' }}
            />
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Offerte aanvragen
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-200"
          style={{ background: menuOpen ? 'rgba(37,99,235,0.08)' : 'transparent', border: '1px solid rgba(37,99,235,0.15)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 rounded-full bg-slate-700 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 rounded-full bg-slate-700 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`w-5 h-0.5 rounded-full bg-slate-700 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="py-3 px-4 space-y-1 border-t" style={{ background: 'rgba(248,250,252,0.98)', borderColor: 'rgba(37,99,235,0.1)' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-semibold py-2.5 px-3 rounded-xl transition-all ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 shadow-inner'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="glow-dot w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />}
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-shimmer flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-bold text-sm"
              style={{
                background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
                boxShadow: '0 4px 16px rgba(37,99,235,0.4)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
