import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const articles = [
  {
    id: 'cat6-vs-cat6a',
    title: 'Cat6 vs Cat6A — Wat is het verschil en wat heeft u nodig?',
    category: 'Infra',
    color: '#2563EB',
    readTime: '4 min',
    image: '/images/kennisbank/cat6-kabel.jpg',
    intro: 'Bij netwerkaanleg komt u al snel de keuze tegen: Cat6 of Cat6A? Het verschil lijkt klein, maar de impact op uw netwerk is groot.',
    content: [
      { type: 'h2', text: 'Wat is Cat6?' },
      { type: 'p', text: 'Cat6 (Category 6) is de standaard netwerkkabel die snelheden tot 1 Gbps ondersteunt over een afstand van maximaal 100 meter. Voor de meeste kantooromgevingen met minder dan 50 werkplekken is Cat6 nog steeds een prima keuze.' },
      { type: 'h2', text: 'Wat is Cat6A?' },
      { type: 'p', text: 'Cat6A (Category 6 Augmented) is de verbeterde versie. Het grote verschil: Cat6A ondersteunt snelheden tot 10 Gbps over 100 meter. De kabel is dikker, beter afgeschermd tegen interferentie en biedt betere toekomstbestendigheid.' },
      { type: 'h2', text: 'Wanneer kiest u voor Cat6A?' },
      { type: 'p', text: 'Wij adviseren Cat6A bij nieuwbouwprojecten, datacenters, zorginstellingen en bedrijven die toekomstbestendig willen bouwen. De meerkosten zijn beperkt (10-15%) maar de extra capaciteit betaalt zich terug zodra u meer bandbreedte nodig heeft.' },
      { type: 'h2', text: 'Onze aanbeveling' },
      { type: 'p', text: 'Bij MK Solidum Group installeren wij standaard Cat6A. De reden is simpel: de bekabeling in uw pand gaat 25+ jaar mee, maar uw bandbreedtebehoefte groeit elk jaar. Met Cat6A bent u voorbereid op de toekomst — zonder opnieuw te hoeven investeren in bekabeling.' },
    ],
  },
  {
    id: 'gdp-transport',
    title: 'Wat is GDP-gecertificeerd transport en waarom is het belangrijk?',
    category: 'Transport',
    color: '#10B981',
    readTime: '5 min',
    image: '/images/kennisbank/gdp-transport.jpg',
    intro: 'GDP staat voor Good Distribution Practice — de Europese standaard voor het veilig transporteren van farmaceutische en medische producten.',
    content: [
      { type: 'h2', text: 'Wat houdt GDP in?' },
      { type: 'p', text: 'Good Distribution Practice (GDP) is een kwaliteitssysteem dat waarborgt dat geneesmiddelen en medische producten tijdens opslag en transport in goede staat blijven. Het is wettelijk verplicht voor iedereen die betrokken is bij de distributie van farmaceutische producten.' },
      { type: 'h2', text: 'Waarom is het belangrijk?' },
      { type: 'p', text: 'Medicijnen, vaccins en labmonsters zijn temperatuurgevoelig. Een onderbreking in de koelketen kan een heel batch waardeloos maken — of erger, gevaarlijk. GDP-certificering garandeert dat uw zending onder de juiste omstandigheden wordt vervoerd.' },
      { type: 'h2', text: 'Hoe werkt MK Transport hiermee?' },
      { type: 'p', text: 'Al onze chauffeurs zijn GDP-gecertificeerd. Wij rijden met temperatuurgecontroleerde voertuigen, documenteren elke stap en kunnen op verzoek de volledige keten traceren. Van ophalen bij het laboratorium tot afleveren bij de apotheek — alles conform GDP-richtlijnen.' },
    ],
  },
  {
    id: 'camerasysteem-avg',
    title: 'Camerabewaking en de AVG — Waar moet u op letten?',
    category: 'Security',
    color: '#EF4444',
    readTime: '6 min',
    image: '/images/kennisbank/camera-avg.jpg',
    intro: 'Een camerasysteem installeren is technisch eenvoudig. Maar voldoen aan de AVG/GDPR-wetgeving? Daar gaat het vaak mis.',
    content: [
      { type: 'h2', text: 'De AVG en cameratoezicht' },
      { type: 'p', text: 'De Algemene Verordening Gegevensbescherming (AVG/GDPR) stelt strenge eisen aan het gebruik van camerabewaking. Camera\'s registreren persoonsgegevens (beelden), en daar zijn regels aan verbonden.' },
      { type: 'h2', text: 'Wat moet u regelen?' },
      { type: 'p', text: '1. Gerechtvaardigd belang — U moet een goede reden hebben (beveiliging, diefstalpreventie). 2. Informatieplicht — Duidelijke bordjes bij de ingang. 3. Bewaartermijn — Beelden maximaal 4 weken bewaren. 4. Toegangsbeleid — Alleen geautoriseerde personen mogen beelden bekijken. 5. DPIA — Bij grootschalige bewaking is een Data Protection Impact Assessment verplicht.' },
      { type: 'h2', text: 'Hoe helpt MK Security?' },
      { type: 'p', text: 'Wij leveren bij elke installatie een compleet AVG-pakket: camerabeleid document, waarschuwingsborden, bewaartermijn configuratie in de NVR en een gebruikershandleiding. Zo voldoet u direct aan de wet — zonder zelf alles uit te hoeven zoeken.' },
    ],
  },
  {
    id: 'wifi-site-survey',
    title: 'Wat is een Wi-Fi site survey en waarom heeft u het nodig?',
    category: 'Infra',
    color: '#2563EB',
    readTime: '4 min',
    image: '/images/kennisbank/wifi-survey.jpg',
    intro: 'Een Wi-Fi site survey is het verschil tussen een netwerk dat "wel werkt" en een netwerk dat overal perfect werkt.',
    content: [
      { type: 'h2', text: 'Wat is een site survey?' },
      { type: 'p', text: 'Een Wi-Fi site survey is een professionele meting van uw gebouw om de optimale plaatsing van access points te bepalen. Wij meten signaalsterkte, interferentie, obstakels (muren, metaal, glas) en het verwachte aantal gebruikers per zone.' },
      { type: 'h2', text: 'Waarom is het nodig?' },
      { type: 'p', text: 'Zonder site survey plaatst u access points op gevoel. Het gevolg: dode zones, overbelaste access points en frustratie bij medewerkers. Een site survey voorkomt dit — het is een investering van een paar uur die u jaren aan problemen bespaart.' },
      { type: 'h2', text: 'Hoe doen wij dit?' },
      { type: 'p', text: 'Wij voeren zowel passieve als actieve site surveys uit met professionele meetapparatuur. Na de meting krijgt u een heatmap van uw pand met de aanbevolen AP-plaatsing, kanaalindeling en verwachte capaciteit. Onze engineers installeren vervolgens Ubiquiti UniFi access points met naadloze roaming.' },
    ],
  },
  {
    id: 'toekomst-bekabeling',
    title: 'Cat7, Cat8 en glasvezel — De toekomst van bekabeling in 2026',
    category: 'Innovatie',
    color: '#8B5CF6',
    readTime: '6 min',
    image: '/images/kennisbank/glasvezel.jpg',
    animated: true, // glowing animatie op kaart
    youtubeId: 'er3v4PVNQqE', // fiber optic uitleg video
    intro: 'Cat6A is vandaag de standaard, maar de technologie staat niet stil. Wat komt er na Cat6A en wanneer loont het om vooruit te kijken?',
    content: [
      { type: 'h2', text: 'Cat7 — Al beschikbaar, maar weinig gebruikt' },
      { type: 'p', text: 'Cat7 (Class F) ondersteunt 10 Gbps over 100 meter, net als Cat6A. Het verschil zit in de afscherming: Cat7 gebruikt S/FTP (individueel afgeschermde paren + algehele folie). Hierdoor is de kabel dikker, stijver en duurder. In de praktijk kiezen weinig Nederlandse installateurs voor Cat7, omdat Cat6A dezelfde snelheid haalt voor minder geld en betere handelsbaarheid.' },
      { type: 'h2', text: 'Cat8 — Gebouwd voor het datacenter' },
      { type: 'p', text: 'Cat8 (Class I en Class II) is de nieuwste standaard en haalt snelheden tot 25-40 Gbps. Klinkt indrukwekkend, maar er is een groot nadeel: de maximale afstand is slechts 30 meter. Cat8 is daarom ontworpen voor datacenter switch-to-switch verbindingen, niet voor kantoorbekabeling. Voor een doorsnee kantoor of bedrijfspand is Cat8 overkill en onpraktisch.' },
      { type: 'h2', text: 'Glasvezel — De echte toekomst' },
      { type: 'p', text: 'Terwijl koperkabel verbetert in kleine stappen, maakt glasvezel sprongen. Singlemode glasvezel haalt vandaag al 100 Gbps+ over kilometers afstand. De kosten van glasvezel dalen elk jaar, en steeds meer bedrijven kiezen voor fiber-to-the-desk. Bij nieuwbouwprojecten in 2026 adviseren wij al hybride installaties: Cat6A voor de werkplekken, glasvezel voor de backbone tussen verdiepingen en gebouwen.' },
      { type: 'h2', text: 'Wi-Fi 7 — De draadloze revolutie' },
      { type: 'p', text: 'Wi-Fi 7 (802.11be) is in 2025-2026 op de markt gekomen en biedt theoretische snelheden tot 46 Gbps. Dit betekent niet dat bekabeling overbodig wordt — integendeel. Elk Wi-Fi access point heeft een bekabelde backhaul nodig, en met Wi-Fi 7 moet die backhaul minimaal 10 Gbps aankunnen. Dat betekent: Cat6A of glasvezel naar elke AP. Meer draadloze snelheid = meer bekabeling nodig.' },
      { type: 'h2', text: 'PoE++ en de groeiende stroomvraag' },
      { type: 'p', text: 'Power over Ethernet (PoE) groeit snel. PoE++ (IEEE 802.3bt) levert tot 90W per poort — genoeg voor camera\'s, access points, displays en zelfs LED-verlichting. Dit maakt bekabeling nog belangrijker: één kabel voor data én stroom. Cat6A is hiervoor de minimale vereiste; goedkopere Cat5e en Cat6 kabels kunnen de warmte bij hoog vermogen niet goed afvoeren.' },
      { type: 'h2', text: 'Ons advies voor 2026 en verder' },
      { type: 'p', text: 'Bij MK Solidum Group adviseren wij: installeer vandaag Cat6A voor werkplekken (toekomstbestendig voor 10-15 jaar), glasvezel voor de backbone, en plan uw infrastructuur alvast voor Wi-Fi 7 access points. Sla Cat7 over — het biedt geen meerwaarde boven Cat6A. En Cat8? Alleen relevant als u een eigen datacenter bouwt. De echte innovatie zit in slimme hybride installaties die koperen werkplekbekabeling combineren met glasvezel backbone.' },
    ],
  },
  {
    id: 'netwerk-kosten',
    title: 'Wat kost netwerkaanleg voor een kantoor? Een eerlijk overzicht',
    category: 'Infra',
    color: '#2563EB',
    readTime: '5 min',
    image: '/images/kennisbank/netwerk-kosten.jpg',
    intro: 'De meestgestelde vraag: wat kost het? Wij geven u een eerlijk en transparant overzicht van de kosten voor netwerkaanleg.',
    content: [
      { type: 'h2', text: 'Kostenfactoren' },
      { type: 'p', text: 'De kosten van netwerkaanleg hangen af van: aantal datapunten, type bekabeling (Cat6A of glasvezel), afstand, aantal access points, switches en firewalls, en de complexiteit van het pand (nieuwbouw vs. bestaand).' },
      { type: 'h2', text: 'Richtprijzen' },
      { type: 'p', text: 'Klein kantoor (10-20 werkplekken): €2.500 - €6.000. Middelgroot kantoor (20-50 werkplekken): €6.000 - €15.000. Groot kantoor/pand (50+ werkplekken): €15.000 - €40.000+. Dit zijn richtprijzen inclusief materiaal, arbeid en certificering. De exacte prijs hangt af van uw specifieke situatie.' },
      { type: 'h2', text: 'Wat zit er inbegrepen?' },
      { type: 'p', text: 'Bij MK Solidum Group is onze offerte altijd compleet: materiaal, arbeid, patchkasten, switches, labeling, certificering en documentatie. Geen verborgen kosten, geen verrassingen achteraf. Wij geven altijd vooraf een gedetailleerde specificatie zodat u precies weet waar u aan toe bent.' },
    ],
  },
]

/* ── Artikel kaart thumbnail ── */
function ArticleCard({ a, onClick, index }) {
  return (
    <ScrollReveal delay={index * 100}>
      <button
        onClick={onClick}
        className="text-left bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group w-full"
      >
        {/* Thumbnail */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={a.image}
            alt={a.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Animated glow overlay voor innovatie/glasvezel artikel */}
          {a.animated && (
            <div
              className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #8B5CF6 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease infinite',
              }}
            />
          )}

          {/* Donkere overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Categorie badge */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-lg" style={{ background: a.color }}>
              {a.category}
            </span>
          </div>

          {/* Video badge */}
          {a.youtubeId && (
            <div className="absolute top-4 right-4">
              <span className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full bg-red-600 text-white shadow-lg">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Video
              </span>
            </div>
          )}

          {/* Leestijd */}
          <div className="absolute bottom-4 right-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-sm">
              {a.readTime}
            </span>
          </div>
        </div>

        {/* Tekst */}
        <div className="p-6">
          <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
            {a.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{a.intro}</p>
          <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
            Lees meer
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </button>
    </ScrollReveal>
  )
}

function Kennisbank() {
  const [activeArticle, setActiveArticle] = useState(null)

  if (activeArticle) {
    const a = articles.find((x) => x.id === activeArticle)
    return (
      <div>
        {/* Hero detail */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2044 100%)' }}>
          <div className="container-main">
            <button
              onClick={() => setActiveArticle(null)}
              className="text-blue-400 text-sm font-bold mb-6 hover:underline flex items-center gap-1 transition-colors hover:text-blue-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Terug naar kennisbank
            </button>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white mb-4 inline-block" style={{ background: a.color }}>
              {a.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-black font-raleway text-white mb-4 leading-tight max-w-3xl">
              {a.title}
            </h1>
            <p className="text-slate-400 text-sm">{a.readTime} leestijd</p>
          </div>
        </section>

        {/* Artikel body */}
        <section className="py-16 bg-white">
          <article className="container-main max-w-3xl">
            {/* Header afbeelding */}
            <div className="relative rounded-2xl overflow-hidden mb-10 shadow-xl">
              <img src={a.image} alt={a.title} className="w-full h-72 object-cover" loading="lazy" />
              {a.animated && (
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #8B5CF6)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 3s ease infinite',
                  }}
                />
              )}
            </div>

            {/* YouTube video embed */}
            {a.youtubeId && (
              <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${a.youtubeId}?rel=0&modestbranding=1`}
                    title="Video uitleg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">{a.intro}</p>

            {a.content.map((block, i) =>
              block.type === 'h2' ? (
                <h2 key={i} className="text-xl font-black text-slate-900 mt-10 mb-4 flex items-center gap-3">
                  <span className="w-1 h-5 rounded-full inline-block shrink-0" style={{ background: a.color }} />
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="text-slate-600 leading-relaxed mb-4">{block.text}</p>
              )
            )}

            {/* CTA */}
            <div className="mt-12 rounded-2xl border p-8 text-center" style={{ background: `${a.color}0d`, borderColor: `${a.color}30` }}>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vragen over dit onderwerp?</h3>
              <p className="text-slate-500 text-sm mb-4">Onze specialisten helpen u graag verder — geheel vrijblijvend.</p>
              <Link to="/contact" className="btn-primary">Neem contact op &rarr;</Link>
            </div>
          </article>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* ── CSS animatie voor gradient ── */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #020817 0%, #0A1628 55%, #0F2044 100%)' }}>
        <div className="absolute inset-0 dot-pattern opacity-40" />
        {/* Animated glow blobs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: '#2563EB', animation: 'gradientShift 6s ease infinite' }} />
        <div className="absolute bottom-10 right-1/4 w-56 h-56 rounded-full blur-3xl opacity-10" style={{ background: '#06B6D4', animation: 'gradientShift 8s ease infinite reverse' }} />
        <div className="container-main relative z-10 text-center">
          <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3 block">Kennisbank</span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">
            Kennis delen,<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #2563EB, #06B6D4)' }}>
              vertrouwen bouwen
            </span>
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Artikelen, tips en inzichten over transport, IT-infrastructuur en beveiliging. Geschreven door onze specialisten.
          </p>
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-10">
            {[
              { val: '6', label: 'Artikelen' },
              { val: '3', label: 'Divisies' },
              { val: '1', label: 'Video' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-white">{s.val}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artikelen grid */}
      <section className="py-20 bg-slate-50">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <ArticleCard key={a.id} a={a} onClick={() => setActiveArticle(a.id)} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kennisbank
