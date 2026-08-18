import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Netwerkaanleg Distributiecentrum',
    client: 'Logistiek bedrijf — Randstad',
    division: 'MK Infra',
    color: '#2563EB',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    scope: ['120 datapunten Cat6A', 'Glasvezel backbone', '24 access points (Ubiquiti)', 'Volledige patchkast inrichting'],
    result: 'Volledig netwerk operationeel in 3 weken. Wi-Fi dekking over 8.000 m² — inclusief koel- en expeditieruimtes.',
  },
  {
    title: 'GDP-gecertificeerd Medisch Transport',
    client: 'Farmaceutisch bedrijf — Utrecht',
    division: 'MK Transport',
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    scope: ['Dagelijkse routes naar 12 ziekenhuizen', 'Temperatuurbewaking medicijntransport', 'Spoedritten 24/7', 'GDP-compliance documentatie'],
    result: '100% leverbetrouwbaarheid in het eerste kwartaal. Nul afwijkingen bij GDP-audit.',
  },
  {
    title: 'Wi-Fi Upgrade Kantoorcomplex',
    client: 'Accountantskantoor — Utrecht',
    division: 'MK Infra',
    color: '#2563EB',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    scope: ['Wi-Fi site survey (3 verdiepingen)', '18 UniFi 6 Pro access points', 'VLAN-segmentatie (medewerkers/gasten)', 'Centraal beheer via UniFi Controller'],
    result: 'Naadloos Wi-Fi op alle verdiepingen. Klachten over bereik: van 15 per week naar 0.',
  },
  {
    title: 'Warehouse Coördinatie & Teamleiding',
    client: 'E-commerce fulfilment — Almere',
    division: 'MK Transport',
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    scope: ['2 warehouse coördinatoren geplaatst', 'Picking & packing optimalisatie', 'WMS-integratie en training', 'Flexibele opschaling piekmomenten'],
    result: 'Orderverwerkingstijd met 35% verkort. Foutpercentage gedaald van 2.1% naar 0.3%.',
  },
]

function Portfolio() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2044 100%)' }}>
        <div className="container-main text-center">
          <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3 block">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">Onze projecten</h1>
          <p className="text-slate-400 max-w-lg mx-auto">Een selectie van projecten die wij met trots hebben opgeleverd. Elk project vertelt een verhaal van kwaliteit en vakmanschap.</p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: p.color }}>
                      {p.division}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{p.client}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.scope.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: p.color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Resultaat</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{p.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-black mb-3">Benieuwd wat wij voor u kunnen doen?</h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">Elk project begint met een gratis adviesgesprek. Neem vandaag nog contact op!</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg">
              Gratis adviesgesprek &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
