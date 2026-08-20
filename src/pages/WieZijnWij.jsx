import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { team, management } from '../data/team'

const values = [
  {
    title: 'Kwaliteit',
    desc: 'Wij leveren altijd hoogwaardige producten en diensten. Kwaliteit staat bij ons op de eerste plaats — in zowel materialen als vakmanschap.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: 'Betrouwbaarheid',
    desc: 'U kunt op ons rekenen. Wij komen onze afspraken na en staan altijd voor u klaar, ook na de oplevering van een project.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: 'Innovatie',
    desc: 'De wereld staat nooit stil. Wij volgen de laatste ontwikkelingen op de voet en implementeren de meest moderne oplossingen.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
]

function WieZijnWij() {
  return (
    <div>
      {/* Hero header */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #020817 0%, #0A1628 55%, #0F2044 100%)' }}>
        <div className="absolute inset-0 dot-pattern" />
        <div className="container-main relative z-10">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4 block">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> / Over ons
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">Wie zijn wij?</h1>
          <p className="text-slate-300 max-w-lg">Maak kennis met MK Solidum Group — uw partner in transport en IT-infrastructuur.</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Over ons</span>
              <h2 className="text-3xl font-black font-raleway text-slate-900 mb-6 leading-tight">
                Twee divisies, één betrouwbare partner
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                MK Solidum Group B.V. is opgericht in 2016 en gevestigd in Bilthoven. Wat begon als een koeriersdienst is uitgegroeid tot een groep met twee gespecialiseerde divisies.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                <strong className="text-slate-700">MK Transport</strong> verzorgt medische koeriers- en logistieke diensten door heel Nederland. <strong className="text-slate-700">MK Infra</strong> is gespecialiseerd in internet bekabeling, patchkasten, netwerk aanleg en netwerkbeheer.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Bij MK Solidum Group staat de klant centraal. Wij luisteren naar uw wensen en vertalen die naar concrete, passende oplossingen. Wij werken niet voor u, maar met u.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary">Contact opnemen &rarr;</Link>
                <Link to="/diensten" className="btn-outline !text-slate-700 !border-slate-300 hover:!border-blue-500 hover:!text-blue-600">Onze diensten</Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                <img
                  src="/images/werk/werk-hoogwerker-bekabeling.jpg"
                  alt="MK Solidum Group aan het werk - bekabeling op locatie"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-slate-900 text-lg leading-none">2016</p>
                  <p className="text-slate-400 text-xs font-medium mt-0.5">Opgericht</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { v: '2', l: 'Divisies' },
              { v: '2016', l: 'Opgericht' },
              { v: '6+', l: 'Diensten' },
              { v: '24/7', l: 'Bereikbaar' },
            ].map((s) => (
              <div key={s.l}>
                <div className="stat-number mb-1">{s.v}</div>
                <div className="text-slate-500 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2044 100%)' }}>
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3 block">Onze kernwaarden</span>
            <h2 className="text-3xl font-black font-raleway text-white mb-4">Waar wij voor staan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-24 bg-white">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Leiderschap</span>
            <h2 className="text-3xl font-black font-raleway text-slate-900 mb-4">De oprichters achter MK Solidum Group</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              MK Solidum Group is opgericht door twee gedreven ondernemers die samen de expertise hebben om transport en IT-infrastructuur onder één dak te bieden.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {management.map((person) => (
              <div key={person.name} className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-700 flex flex-col">
                <div className="absolute top-5 right-5">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: person.badgeColor }}>
                    {person.badge}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-0">
                  <div className="w-full aspect-square sm:w-56 sm:aspect-auto sm:h-full shrink-0 overflow-hidden">
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-7 flex flex-col justify-between">
                    <div>
                      <p className="font-black text-white text-xl leading-tight mb-1">{person.name}</p>
                      <p className="text-blue-400 font-semibold text-sm mb-4">{person.role}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-5">{person.bio}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {person.specialisaties.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-300 font-medium border border-white/10">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-14">
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Hoe wij werken</span>
            <h2 className="text-3xl font-black font-raleway text-slate-900 mb-4">Een hecht kernteam, versterkt met specialisten</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Mohammed en Karim staan zelf aan het roer. Voor de uitvoering op de weg, de werkvloer en straks ook in het veld bij data-projecten werken wij met een vast netwerk van zelfstandige zzp-specialisten — mensen die hun eigen dagen en uren plannen, met eigen materiaal werken, en op projectbasis in combinatie met een uurtarief worden ingezet.
            </p>
          </div>

          {Object.values(team).map((division) => (
            <div key={division.division} className="mb-16">
              {/* Divisie header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: division.color }} />
                <h3 className="text-xl font-black font-raleway text-slate-900">{division.division}</h3>
                <div className="flex-1 h-px bg-slate-200 ml-2" />
              </div>

              {/* Werkwijze */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 mb-8">
                <p className="text-slate-600 text-sm leading-relaxed">{division.workforce}</p>
              </div>

              {/* Certificeringen */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Certificeringen & normen {division.division}</p>
                <div className="flex flex-wrap gap-2">
                  {division.certifications.map((cert) => (
                    <span key={cert} className="text-xs px-3 py-1.5 rounded-full font-semibold text-white" style={{ background: division.color }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <Link to="/contact" className="btn-primary">Neem contact op &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Contact</span>
              <h2 className="text-3xl font-black font-raleway text-slate-900 mb-4">Wilt u meer weten?</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Wij staan altijd klaar om uw vragen te beantwoorden. Neem vandaag nog contact met ons op voor een vrijblijvend advies.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Telefoon', value: '06 148 909 15', href: 'tel:0614890915' },
                  { label: 'E-mail', value: 'mkgroup@mksolidumgroup.nl', href: 'mailto:mkgroup@mksolidumgroup.nl' },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-card transition-all duration-200 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        {c.label === 'Telefoon'
                          ? <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          : <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        }
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{c.label}</p>
                      <p className="text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">{c.value}</p>
                    </div>
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

export default WieZijnWij
