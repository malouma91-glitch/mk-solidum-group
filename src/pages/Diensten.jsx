import { Link } from 'react-router-dom'
import { divisions } from '../data/services'
import ContactForm from '../components/ContactForm'

const divColors = { infra: '#2563EB', transport: '#10B981' }

function DivisionBlock({ division }) {
  const color = divColors[division.id]
  return (
    <div id={`divisie-${division.id}`} className="py-20">
      <div className="container-main">
        {/* Division header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1.5 h-12 rounded-full" style={{ background: color }} />
          <div>
            <h2 className="text-3xl font-black font-raleway text-slate-900">{division.name}</h2>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color }}>{division.tagline}</p>
          </div>
        </div>
        <p className="text-slate-500 leading-relaxed max-w-2xl mb-12">{division.description}</p>

        {/* Services */}
        <div className="space-y-16">
          {division.services.map((service, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={service.id} className={`grid md:grid-cols-2 gap-14 items-center`}>
                <div className={isEven ? '' : 'md:order-2'}>
                  <div className="rounded-2xl overflow-hidden shadow-xl h-[26rem] relative bg-slate-900">
                    {/* Blurred fill zodat staande foto's niet bijgesneden hoeven te worden */}
                    <img
                      src={service.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
                    />
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="relative w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(2,8,23,0.35), transparent 45%)' }} />
                    {/* Division badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold" style={{ background: color }}>
                      {division.name}
                    </div>
                  </div>
                </div>
                <div className={isEven ? '' : 'md:order-1'}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-5"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                    <span className="text-xs font-black">0{service.id}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black font-raleway text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.longDesc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 4px 18px ${color}50` }}>
                    Meer informatie &rarr;
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Diensten() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #020817 0%, #0A1628 55%, #0F2044 100%)' }}>
        <div className="absolute inset-0 dot-pattern" />
        <div className="container-main relative z-10">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4 block">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> / Diensten
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">Onze diensten</h1>
          <p className="text-slate-300 max-w-xl leading-relaxed">
            Twee divisies, zeven diensten. Van IT-infrastructuur en netwerkbeheer tot medisch transport en warehouse-coördinatie — MK Solidum Group is uw totaalpartner.
          </p>
        </div>
      </section>

      {/* Quick links per divisie */}
      <section className="bg-white py-6 border-b border-slate-200 shadow-sm">
        <div className="container-main">
          <div className="flex flex-wrap gap-2 justify-center">
            {divisions.map((d) => (
              <a key={d.id} href={`#divisie-${d.id}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:text-white px-4 py-2 rounded-full transition-all duration-200"
                style={{ '--hover-bg': divColors[d.id] }}
                onMouseEnter={(e) => { e.currentTarget.style.background = divColors[d.id]; e.currentTarget.style.color = 'white' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: divColors[d.id] }} />
                {d.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divisie blokken */}
      {divisions.map((div, i) => (
        <div key={div.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
          <DivisionBlock division={div} />
        </div>
      ))}

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Offerte</span>
              <h2 className="text-3xl font-black font-raleway text-slate-900 mb-4">Interesse in een dienst?</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Wilt u meer weten over een van onze diensten of een vrijblijvende offerte aanvragen? Wij helpen u graag verder en reageren binnen één werkdag.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                {[
                  { label: 'Telefoon', val: '06 148 909 15', href: 'tel:0614890915' },
                  { label: 'E-mail', val: 'mkgroup@mksolidumgroup.nl', href: 'mailto:mkgroup@mksolidumgroup.nl' },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                    <span className="text-blue-600 font-bold text-sm w-16">{c.label}:</span>
                    <span className="font-semibold">{c.val}</span>
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Diensten
