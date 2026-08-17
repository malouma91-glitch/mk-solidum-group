/* ═══════════════════════════════════════════════════════
   MK Solidum Group B.V. — Divisies & Diensten
═══════════════════════════════════════════════════════ */

export const divisions = [
  {
    id: 'transport',
    name: 'MK Transport',
    tagline: 'Betrouwbaar vervoer, altijd onderweg',
    color: '#10B981',
    icon: 'truck',
    description: 'Gespecialiseerd in medische koeriersdiensten en logistieke distributie. Wij zorgen ervoor dat uw zendingen veilig, snel en op tijd aankomen.',
    services: [
      {
        id: 1,
        title: 'Medische Routes',
        shortDesc: 'Betrouwbare en tijdige bezorging van medische pakketten, labmonsters en farmaceutische producten door heel Nederland.',
        longDesc: 'MK Transport is gespecialiseerd in het vervoer van medische zendingen. Van labmonsters en bloeduitslagen tot farmaceutische leveringen — wij garanderen een veilige, geconditioneerde en tijdige aflevering. Onze chauffeurs zijn opgeleid en gecertificeerd voor het transport van gevoelig medisch materiaal.',
        image: '/images/medische-routes.png',
        slug: 'medische-routes',
      },
      {
        id: 2,
        title: 'Logistiek & Distributie',
        shortDesc: 'Flexibele koeriers- en distributiediensten voor bedrijven. Same-day delivery, vaste routes en maatwerk logistiek.',
        longDesc: 'Van same-day koeriersdiensten tot vaste distributieroutes — MK Transport biedt flexibele logistieke oplossingen die meegroeien met uw bedrijf. Wij werken voor e-commerce, groothandels, productiebedrijven en meer. Betrouwbaar, snel en altijd transparant over planning en tarieven.',
        image: '/images/logistiek-distributie.png',
        slug: 'logistiek-distributie',
      },
    ],
  },
  {
    id: 'infra',
    name: 'MK Infra',
    tagline: 'Uw netwerk, onze expertise',
    color: '#2563EB',
    icon: 'network',
    description: 'Complete IT-infrastructuuroplossingen van ontwerp tot installatie. Internet bekabeling, patchkasten en professionele netwerk aanleg voor bedrijven.',
    services: [
      {
        id: 3,
        title: 'Internet Bekabeling',
        shortDesc: 'Professionele gestructureerde bekabeling (CAT6A, CAT7, glasvezel) voor kantoor, bedrijfspand of datacenter.',
        longDesc: 'Gestructureerde bekabeling is het fundament van elke IT-infrastructuur. MK Infra levert en installeert copper en glasvezel bekabeling conform de nieuwste normen (TIA-568, ISO 11801). Van een klein kantoor tot een groot datacenter — wij zorgen voor een stabiele, toekomstbestendige bekabelingsinfrastructuur met gecertificeerde oplevering.',
        image: '/images/internet-bekabeling.png',
        slug: 'internet-bekabeling',
      },
      {
        id: 4,
        title: 'Patchkasten & Switches',
        shortDesc: 'Installatie en inrichting van patchkasten, switches en serverruimtes. Alles netjes gelabeld en gedocumenteerd.',
        longDesc: 'Een goed ingerichte patchkast is het hart van uw netwerk. MK Infra installeert en configureert patchkasten, managed switches en serverruimtes volgens best practices. Alles wordt netjes gelabeld, gedocumenteerd en opgeleverd met een testrapportage. Wij werken met toonaangevende merken als Ubiquiti en Extreme Networks.',
        image: '/images/patchkasten-switches.png',
        slug: 'patchkasten-switches',
      },
      {
        id: 5,
        title: 'Netwerk Aanleg',
        shortDesc: 'Complete netwerkoplossingen van ontwerp tot installatie. Wi-Fi, VLAN, firewalls en straalverbindingen.',
        longDesc: 'Een goed functionerend netwerk is essentieel voor uw bedrijfsvoering. MK Infra biedt complete netwerkoplossingen: van ontwerp en VLAN-segmentatie tot Wi-Fi installatie, firewalls en straalverbindingen. Wij werken met Ubiquiti UniFi, Extreme Networks en FortiGate voor enterprise-grade betrouwbaarheid.',
        image: '/images/netwerk-aanleg.png',
        slug: 'netwerk-aanleg',
      },
    ],
  },
  {
    id: 'security',
    name: 'MK Security',
    tagline: 'Uw veiligheid, onze prioriteit',
    color: '#EF4444',
    icon: 'shield',
    description: 'Professionele beveiligingsoplossingen voor uw bedrijfspand. IP-camerasystemen, toegangscontrole en 24/7 monitoring.',
    services: [
      {
        id: 6,
        title: 'Camerasystemen',
        shortDesc: 'IP-camerasystemen van Hikvision voor optimale beveiliging. Dag en nacht helder beeld, toegankelijk via uw telefoon.',
        longDesc: 'MK Security levert en installeert professionele IP-camerasystemen van Hikvision. Van adviesgesprek tot montage, configuratie en oplevering — wij ontzorgen u volledig. Inclusief NVR-opslag, AVG-compliance documentatie en de mogelijkheid om alles via de Hik-Connect app op uw telefoon te volgen.',
        image: '/images/camerasystemen.png',
        slug: 'camerasystemen',
      },
      {
        id: 7,
        title: 'Beveiliging van Panden',
        shortDesc: 'Toegangscontrole, alarmsystemen en beveiligingsadvies voor uw bedrijfspand. AJAX en Roger systemen.',
        longDesc: 'De veiligheid van uw pand en medewerkers staat voorop. MK Security levert complete beveiligingsoplossingen: toegangscontrolesystemen (Roger, AJAX), inbraakdetectie, alarmsystemen en beveiligingsadvies. Wij combineren fysieke beveiliging met slimme technologie voor maximale bescherming.',
        image: '/images/beveiliging-panden.png',
        slug: 'beveiliging-panden',
      },
    ],
  },
]

/* Flat list van alle services (voor backward compatibility) */
export const services = divisions.flatMap((d) => d.services)
