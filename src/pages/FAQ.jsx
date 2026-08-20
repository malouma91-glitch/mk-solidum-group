import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqData = {
  algemeen: {
    label: 'Algemeen',
    color: '#2563EB',
    items: [
      { q: 'Wat doet MK Solidum Group?', a: 'MK Solidum Group is actief vanuit twee divisies: MK Infra (netwerken, bekabeling, glasvezel & netwerkbeheer) en MK Transport (medisch vervoer & logistiek). Wij bieden een totaaloplossing voor bedrijven die op zoek zijn naar een betrouwbare partner.' },
      { q: 'Waar zijn jullie gevestigd?', a: 'Ons kantoor is gevestigd in Bilthoven (gemeente De Bilt), nabij Utrecht. Wij werken door heel Nederland, met focus op de Randstad en Brabant.' },
      { q: 'Hoeveel kost een project?', a: 'Elk project is maatwerk — daarom geven wij altijd een vrijblijvende offerte na een inventarisatie. Kleine installaties starten vanaf enkele honderden euro\'s, grotere projecten lopen op tot tienduizenden euro\'s. Wij zijn altijd transparant over onze tarieven.' },
      { q: 'Werken jullie ook als onderaannemer?', a: 'Ja! Wij werken regelmatig als onderaannemer voor aannemers, installatiebureau\'s, telecombedrijven en facility managers. Wij leveren gekwalificeerde datamonteurs en chauffeurs met alle certificeringen.' },
      { q: 'Hoe snel kunnen jullie starten?', a: 'Voor kleine projecten kunnen wij vaak binnen een week starten. Grotere projecten plannen wij zorgvuldig in overleg. Bij storingen en spoed reageren wij dezelfde dag.' },
    ],
  },
  infra: {
    label: 'MK Infra',
    color: '#2563EB',
    items: [
      { q: 'Wat voor bekabeling installeren jullie?', a: 'Wij installeren gestructureerde bekabeling conform TIA/EIA-568 en ISO 11801. Standaard werken wij met Cat6A (10 Gbps) en glasvezel (single-mode & multi-mode). Elke installatie wordt gecertificeerd opgeleverd met een testrapportage.' },
      { q: 'Wat is een Wi-Fi site survey?', a: 'Een site survey is een professionele meting van uw ruimte om te bepalen waar access points optimaal geplaatst moeten worden. Wij meten signaalsterkte, interferentie en obstakels — zo krijgt u in één keer een dekkend Wi-Fi-netwerk zonder dode zones.' },
      { q: 'Met welke merken werken jullie?', a: 'Wij zijn niet gebonden aan één vaste leverancier. Voor kabels, patchkasten en access points werken wij met verschillende toonaangevende merken en kiezen wij per project wat het beste past bij uw budget en eisen. Voor certificering van bekabeling gebruiken wij FLUKE Networks meetapparatuur.' },
      { q: 'Bieden jullie ook netwerkbeheer aan?', a: 'Ja, wij bieden proactief netwerkbeheer: 24/7 monitoring, remote support, updates & patches en maandelijkse rapportages. Ideaal als u geen eigen IT-afdeling heeft.' },
    ],
  },
  transport: {
    label: 'MK Transport',
    color: '#10B981',
    items: [
      { q: 'Wat is GDP-gecertificeerd transport?', a: 'GDP staat voor Good Distribution Practice — een Europese richtlijn voor het transport van farmaceutische en medische producten. Onze chauffeurs en processen voldoen aan deze strenge eisen, zodat uw medische zendingen altijd veilig en conform regelgeving worden vervoerd.' },
      { q: 'Rijden jullie ook spoedritten?', a: 'Ja, wij verzorgen spoedritten door heel Nederland — ook buiten kantooruren. Denk aan urgente labmonsters, spoedingrepen of kritieke leveringen.' },
      { q: 'Kunnen jullie warehousing en logistiek coördineren?', a: 'Absoluut. Onze co-directeur Karim Charradi is specialist in warehouse management en logistieke coördinatie. Wij leveren coördinatoren, teamleiders en planners voor uw distributiecentrum.' },
    ],
  },
}

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between gap-4 p-5 bg-white hover:bg-slate-50 transition-colors">
        <span className="font-bold text-slate-800 text-sm pr-4">{q}</span>
        <svg className={`w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 pb-5 text-slate-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

function FAQ() {
  const [active, setActive] = useState('algemeen')

  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2044 100%)' }}>
        <div className="container-main text-center">
          <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3 block">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">Veelgestelde vragen</h1>
          <p className="text-slate-400 max-w-lg mx-auto">Antwoorden op de meest gestelde vragen over onze diensten, werkwijze en expertise.</p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-20 bg-white">
        <div className="container-main max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {Object.entries(faqData).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  active === key
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                style={active === key ? { background: cat.color } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {faqData[active].items.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <div className="mt-14 text-center bg-slate-50 rounded-2xl border border-slate-200 p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Vraag niet beantwoord?</h3>
            <p className="text-slate-500 text-sm mb-6">Neem gerust contact met ons op — wij helpen u graag persoonlijk.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-primary">Contact opnemen &rarr;</Link>
              <a href="https://wa.me/31614890915" target="_blank" rel="noopener noreferrer" className="btn-outline !text-green-600 !border-green-300 hover:!bg-green-50">
                WhatsApp ons
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
