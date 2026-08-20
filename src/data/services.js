/* ═══════════════════════════════════════════════════════
   MK Solidum Group B.V. — Divisies & Diensten
═══════════════════════════════════════════════════════ */

export const divisions = [
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
        image: '/images/werk/werk-patchkast-open.jpg',
        slug: 'internet-bekabeling',
      },
      {
        id: 4,
        title: 'Patchkasten & Switches',
        shortDesc: 'Installatie en inrichting van patchkasten, switches en serverruimtes. Alles netjes gelabeld en gedocumenteerd.',
        longDesc: 'Een goed ingerichte patchkast is het hart van uw netwerk. MK Infra installeert en configureert patchkasten, managed switches en serverruimtes volgens best practices. Alles wordt netjes gelabeld, gedocumenteerd en opgeleverd met een testrapportage. Wij zijn niet gebonden aan één leverancier en kiezen per project de beste merken voor uw budget en eisen.',
        image: '/images/werk/werk-serverruimte.jpg',
        slug: 'patchkasten-switches',
      },
      {
        id: 5,
        title: 'Netwerk Aanleg',
        shortDesc: 'Complete netwerkoplossingen van ontwerp tot installatie. Wi-Fi, VLAN, firewalls en straalverbindingen.',
        longDesc: 'Een goed functionerend netwerk is essentieel voor uw bedrijfsvoering. MK Infra biedt complete netwerkoplossingen: van ontwerp en VLAN-segmentatie tot Wi-Fi installatie, firewalls en straalverbindingen. Wij werken met verschillende toonaangevende merken en kiezen per project de apparatuur die het beste past bij uw situatie, voor enterprise-grade betrouwbaarheid.',
        image: '/images/werk/werk-ap-installatie.jpg',
        slug: 'netwerk-aanleg',
      },
      {
        id: 8,
        title: 'Netwerkbeheer',
        shortDesc: 'Doorlopend beheer en monitoring van uw netwerk na installatie - van reactief onderhoud tot volledig ontzorgd met SLA.',
        longDesc: 'Naast de aanleg van uw netwerk verzorgen wij ook het beheer, zodat u niet zelf hoeft bij te houden of alles blijft werken. Basis Onderhoud is inzetbaar op uurtarief wanneer nodig. Proactief Beheer (vanaf €99 per maand) omvat remote monitoring, maandelijkse health-checks, firmware-updates en reactie binnen 1 werkdag. Volledig Ontzorgd met SLA (op maat, richtprijs vanaf €250 per maand) is bedoeld voor grotere organisaties: 24/7 monitoring, reactietijd binnen 4 uur en kwartaalrapportage. Zo blijft uw netwerk stabiel, veilig en up-to-date, zonder dat u er zelf naar hoeft om te kijken.',
        image: '/images/werk/werk-bekabeling-testen.jpg',
        slug: 'netwerkbeheer',
      },
    ],
  },
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
]

/* Flat list van alle services (voor backward compatibility) */
export const services = divisions.flatMap((d) => d.services)
