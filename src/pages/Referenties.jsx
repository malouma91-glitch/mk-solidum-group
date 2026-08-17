import { useState } from 'react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    id: 1,
    company: 'Fulfilment Achterhoek',
    initials: 'FA',
    color: '#1a8fd1',
    text: '"We zijn zeer tevreden over de lange termijn samenwerking met MK Solidum Group. Een betrouwbare partij, geen onnodige kosten, goed bereikbaar, hard werken en netjes opleveren van werkzaamheden. Kortom de perfecte partner voor gedegen advies en realisatie van de gevraagde diensten."',
    role: 'Fulfilment Achterhoek',
  },
  {
    id: 2,
    company: 'JUICT',
    initials: 'JU',
    color: '#1a3a5c',
    text: '"JUICT is actief als ICT-dienstverlener (voornamelijk) in de regio Oost-Nederland en bedient onderhand ongeveer 250 organisaties in het MKB. Met diensten op het gebied van Systeembeheer, Cloud, Security en VoIP worden ICT-omgeving gebouwd en onderhouden."',
    role: 'JUICT voor IT',
  },
  {
    id: 3,
    company: 'ROC Midden Nederland',
    initials: 'ROC',
    color: '#1e8449',
    text: '"Dankzij MK Solidum Group beschikken wij nu over een betrouwbare en schaalbare Wi-Fi infrastructuur die onze studenten en docenten overal in het gebouw optimaal ondersteunt. De implementatie verliep soepel en de nazorg is uitstekend."',
    role: 'Hoofd ICT, ROC Midden Nederland',
  },
  {
    id: 4,
    company: 'Gemeente Nieuwegein',
    initials: 'GN',
    color: '#1a3a5c',
    text: '"MK Solidum Group heeft voor ons een complete netwerkinfrastructuur gerealiseerd in ons nieuwe gemeentekantoor. Het project verliep vlekkeloos, binnen de afgesproken tijd en het budget. Professioneel, communicatief sterk en ze weten wat ze doen."',
    role: 'IT Manager, Gemeente Nieuwegein',
  },
  {
    id: 5,
    company: 'Logistiek Bedrijf XL',
    initials: 'LBX',
    color: '#e67e22',
    text: '"Voor onze nieuwe distributielocatie heeft MK Solidum Group een complete glasvezel en netwerk infrastructuur aangelegd. Van advies tot oplevering was alles perfect geregeld. De kwaliteit van de installatie is uitstekend."',
    role: 'Operations Director, LBX',
  },
  {
    id: 6,
    company: 'Tech Startup Hub',
    initials: 'TSH',
    color: '#2563EB',
    text: '"Als snelgroeiend techbedrijf hebben wij een flexibele en schaalbare IT-infrastructuur nodig. MK Solidum Group heeft precies begrepen wat wij nodig hadden en een oplossing geleverd die met ons kan meegroeien. Uitstekende service."',
    role: 'CTO, Tech Startup Hub',
  },
]

/* Partner logos – tekstueel gestyled (zoals de originele website) */
const partners = [
  { name: 'LogiLink.', color: '#004899', weight: '700' },
  { name: 'HIKVISION', color: '#e60012', weight: '800', style: 'italic' },
  { name: '⊙ foobot', color: '#f5821f', weight: '700' },
  { name: 'roger', color: '#005baa', weight: '700', style: 'italic' },
  { name: 'UBIQUITI', color: '#005baa', weight: '800' },
]

function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  function prev() { setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)) }
  function next() { setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)) }

  const t = testimonials[current]

  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Referenties</span>
          <h2 className="text-3xl md:text-4xl font-black font-raleway text-slate-900">Klanten aan het woord</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Big quote marks */}
          <div className="absolute -left-8 -top-4 text-7xl font-black leading-none select-none pointer-events-none" style={{ color: '#2563EB', opacity: 0.15 }}>"</div>
          <div className="absolute -right-8 -bottom-4 text-7xl font-black leading-none select-none pointer-events-none rotate-180" style={{ color: '#2563EB', opacity: 0.15 }}>"</div>

          {/* Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Logo panel */}
              <div className="md:w-44 flex items-center justify-center p-10 shrink-0 relative"
                style={{ background: `linear-gradient(135deg, ${t.color}12, ${t.color}08)` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}>
                  {t.initials}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow p-8 flex flex-col justify-center">
                <h4 className="font-black text-slate-900 text-lg mb-3">{t.company}</h4>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-4">{t.text}</p>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Dots + controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`slider-dot transition-all ${i === current ? 'active' : ''}`}
                />
              ))}
            </div>

            <button onClick={next}
              className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function PartnerLogos() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200">
      <div className="container-main">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
          Onze merken &amp; partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p) => (
            <div key={p.name} className="opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-default select-none">
              <span
                style={{
                  color: p.color,
                  fontWeight: p.weight,
                  fontStyle: p.style || 'normal',
                  fontSize: '1.15rem',
                  letterSpacing: '0.02em',
                  fontFamily: p.name === 'HIKVISION' ? 'Arial, sans-serif' : 'inherit',
                }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AllTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <h3 className="text-2xl font-black font-raleway text-slate-900 mb-10 text-center">Alle referenties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.company}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Referenties() {
  return (
    <div>
      {/* Page header */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #020817 0%, #0A1628 55%, #0F2044 100%)' }}>
        <div className="absolute inset-0 dot-pattern" />
        <div className="container-main relative z-10">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4 block">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> / Referenties
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">Referenties</h1>
          <p className="text-slate-300 max-w-lg">Wat onze klanten over ons zeggen. Wij zijn trots op onze langdurige en succesvolle samenwerkingen.</p>
        </div>
      </section>

      <TestimonialSlider />
      <PartnerLogos />
      <AllTestimonials />

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A1628, #0F2044)' }}>
        <div className="container-main text-center">
          <h2 className="text-3xl font-black font-raleway text-white mb-4">Wilt u ook een tevreden klant worden?</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-lg mx-auto">
            Neem vrijblijvend contact met ons op en ontdek wat MK Solidum Group voor uw organisatie kan betekenen.
          </p>
          <Link to="/contact" className="btn-primary">
            Neem contact op →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Referenties
