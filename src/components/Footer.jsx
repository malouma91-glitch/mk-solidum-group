import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/wie-zijn-wij', label: 'Over ons' },
  { to: '/diensten', label: 'Diensten' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/referenties', label: 'Referenties' },
  { to: '/faq', label: 'FAQ' },
  { to: '/kennisbank', label: 'Kennisbank' },
  { to: '/contact', label: 'Contact' },
]

const divisies = [
  { label: 'MK Infra', color: '#2563EB' },
  { label: 'MK Transport', color: '#10B981' },
]

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black font-raleway text-white">MK</span>
              <span className="text-2xl font-black font-raleway" style={{ background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solidum</span>
              <span className="text-sm font-semibold text-slate-500 ml-1">Group</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              Twee divisies, één partner. IT-infrastructuur en Transport — MK Solidum Group ontzorgt u volledig.
            </p>
            <div className="flex items-center gap-3">
              {['linkedin', 'facebook'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 group">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    {s === 'linkedin'
                      ? <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      : <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    }
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navigatie</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisies */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Divisies</h4>
            <ul className="space-y-3">
              {divisies.map((d) => (
                <li key={d.label}>
                  <Link to="/diensten" className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm text-slate-500">Sterrenhof 10, 3723WR Bilthoven</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:0614890915" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">06 148 909 15</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:mkgroup@mksolidumgroup.nl" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">mkgroup@mksolidumgroup.nl</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-main py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} MK Solidum Group B.V. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-600">
            <span>KvK: 66920280</span>
            <span>BTW: NL856752721B01</span>
            <span>RSIN: 856752721</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
