import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ═══════════════════════════════════════════════════════
   PERSONA — Daan van den Berg, Adviseur bij MK Solidum Group
   Warm, direct, deskundig — behandelt klant als koning
═══════════════════════════════════════════════════════ */
const PERSONA = {
  name: 'Daan',
  full: 'Daan van den Berg',
  role: 'Adviseur bij MK Solidum Group',
  // Realistic professional Dutch male from Unsplash
  photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80',
}

/* Willekeurig element uit array */
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

/* ── Intentie-detectie ── */
function detectIntent(input) {
  const t = input.toLowerCase()

  if (/\b(hallo|hoi|hey|hi|dag|goedemorgen|goedemiddag|goedenavond|goeiemiddag|goeiemorgen|joehoe|hello|goeie)\b/.test(t)) return 'greeting'
  if (/\b(bedankt|dankjewel|dankuwel|dank u|dank je|super|geweldig|top|prima|fijn|perfect|mooi|hartstikke)\b/.test(t)) return 'thanks'
  if (/\b(doei|tot ziens|bye|ciao|later|tot later|afsluiten|ik ga)\b/.test(t)) return 'bye'
  if (/\b(hoe gaat|hoe is|hoe gaat het|alles goed|hoe ben|hoe staat)\b/.test(t)) return 'smalltalk'
  if (/\b(wie zijn jullie|over jullie|jullie bedrijf|wat is mk|mk solidum|solidum group|opgericht|geschiedenis|achtergrond)\b/.test(t)) return 'company'
  if (/\b(naam|wie ben|wie is daan|stelt u voor|wie praat|wie ben jij)\b/.test(t)) return 'whoami'
  if (/\b(prijs|kosten|tarief|budget|euro|betaal|goedkoop|duur|wat kost|hoeveel|investering|kostenplaatje)\b/.test(t)) return 'price'
  if (/\b(offerte|quote|aanvraag|voorstel|vrijblijvend|aanvragen)\b/.test(t)) return 'quote'
  if (/\b(glasvezel|fiber|fibre|optisch|single.mode|multi.mode|glas|vezel)\b/.test(t)) return 'fiber'
  if (/\b(wifi|wi.fi|draadloos|wireless|access.?point|dekking|bereik|hotspot|wlan|ssid)\b/.test(t)) return 'wifi'
  if (/\b(netwerk|network|switch|router|vlan|firewall|lan|wan|infra|routing|subnet|dhcp)\b/.test(t)) return 'network'
  if (/\b(camera|bewaking|beveiliging|cctv|inbraak|toegangscontrole|nvr|beveiligingscamera|ip.camera|ptz)\b/.test(t)) return 'camera'
  if (/\b(kabel|bekabeling|utp|cat6|cat7|cat8|patch|structured|kabeltrekken|datakabel)\b/.test(t)) return 'cabling'
  if (/\b(straal|ptp|ptmp|point.to.point|microgolf|brug|bridge|radio|airmax|ubnt.bridge)\b/.test(t)) return 'radio'
  if (/\b(werkgebied|nederland|locatie|regio|provincie|stad|waar|amsterdam|rotterdam|utrecht|den haag)\b/.test(t)) return 'area'
  if (/\b(hoelang|hoe lang|doorlooptijd|planning|wanneer|snel|levertijd|tijdlijn|dagen|weken|maanden)\b/.test(t)) return 'timeline'
  if (/\b(garantie|service|support|storing|onderhoud|nazorg|reparatie|defect|kapot|werkt niet)\b/.test(t)) return 'support'
  if (/\b(merk|ubiquiti|hikvision|extreme|ajax|logilink|partner|leverancier|fortigate|cisco|unifi)\b/.test(t)) return 'brands'
  if (/\b(kantoor|school|zorg|ziekenhuis|horeca|hotel|magazijn|retail|gemeente|overheid|mkb|bedrijf|logistiek)\b/.test(t)) return 'sector'
  if (/\b(telecom|provider|internet|uplink|glasvezel.provider|isp|bandbreedte)\b/.test(t)) return 'telecom'
  if (/\b(beheer|managed|monitoring|cloud|proactief|it.beheer|outsourcing|remote)\b/.test(t)) return 'managed'
  if (/\b(vpn|remote.work|thuiswerken|veilig|encryptie|beveiligde verbinding|ssl|tls)\b/.test(t)) return 'vpn'
  if (/\b(telefonie|voip|pbx|sip|trunking|oproep|bellen|pbx.systeem)\b/.test(t)) return 'voip'
  if (/\b(contact|bellen|mailen|bereiken|telefoon|mail|afspraak|terugbellen)\b/.test(t)) return 'contact'
  if (/\b(diensten|aanbod|wat doen|specialisatie|wat bied|portfolio|overzicht)\b/.test(t)) return 'services'
  if (/\b(project|referentie|voorbeeld|klant|eerder|ervaring|portfolio|case)\b/.test(t)) return 'references'
  if (/\b(duurzaam|energie|poe|zuinig|verbruik|groen|milieu)\b/.test(t)) return 'sustainability'
  if (/\b(transport|koerier|bezorging|rit|chauffeur|rijden|vervoer|levering|vrachtbrief)\b/.test(t)) return 'transport'
  if (/\b(medisch|ziekenhuis|laboratorium|apotheek|bloed|monsters|geneesmiddelen|gdp|farmaceu)\b/.test(t)) return 'medical'
  if (/\b(magazijn|warehouse|opslag|depot|distributiecentrum|logistiek|pallets|picking|fulfilment|wms)\b/.test(t)) return 'warehouse'
  if (/\b(samenwerken|partner|onderaannemer|uitbesteden|inhuren|opdracht|subcontract|flex|zzp|inlenen)\b/.test(t)) return 'partnership'

  // ── Bedrijf & team ──
  if (/\b(bedrijf|over ons|history|wat doen jullie precies|hoe lang bestaan)\b/.test(t)) return 'company'
  if (/\b(team|directeur|eigenaar|mohammed|karim|oprichter|management|bestuur|wie staat|medewerkers|personeel)\b/.test(t)) return 'team'
  if (/\b(openingstijden|hoe laat|wanneer open|bereikbaar|ma t\/m|maandag|werkdagen|buiten kantoor|avond|weekend)\b/.test(t)) return 'opening_hours'
  if (/\b(adres|locatie|kantoor|bilthoven|waar zitten|bezoek|vestiging|parkeren|postcode|utrecht)\b/.test(t)) return 'address'
  if (/\b(kvk|kamer van koophandel|btw|rsin|registratie|inschrijving|btw-nummer|btwnummer)\b/.test(t)) return 'kvk'

  // ── Security specifiek ──
  if (/\b(alarm|inbraakdetectie|inbraak|detector|bewegingsmelder|sirene|alertering|melding)\b/.test(t)) return 'alarm'
  if (/\b(toegang|toegangspas|badge|keypad|pincode|sleutelbeheer|deurcontrole|toegangskaart|paslezer)\b/.test(t)) return 'access_control'

  // ── Spoed & storingen ──
  if (/\b(spoed|urgent|spoedrit|calamiteit|noodgeval|haast|zo snel|direct|nu|breakdown|niet meer)\b/.test(t)) return 'emergency'

  // ── Certificeringen ──
  if (/\b(certificaat|gecertificeerd|certificering|iso|tia|norm|keurmerk|bewijs|diploma)\b/.test(t)) return 'certification'

  return 'unknown'
}

/* ── Antwoorden per intentie ── */
function buildResponse(intent, _input, ctx) {
  const name = ctx.customerName ? `, ${ctx.customerName}` : ''

  switch (intent) {

    case 'greeting':
      return {
        text: pick([
          `Hé, hallo${name}! 👋 Daan hier, adviseur bij MK Solidum Group. Fijn dat u even langssurft. Waarmee kan ik u vandaag helpen?`,
          `Hallo${name}! Welkom bij MK Solidum Group. Ik ben Daan — zegt u het maar, wat kan ik voor u doen?`,
          `Goeiedag${name}! Daan van den Berg hier. Leuk dat u contact opneemt — waar kan ik u mee van dienst zijn?`,
          `Hoi${name}! Daan van MK Solidum Group hier. Fijn dat u er bent. Heeft u een vraag over ons aanbod, of is er iets specifieks waar ik u mee kan helpen?`,
        ]),
        suggestions: ['Welke diensten bieden jullie?', 'Wat kosten jullie diensten?', 'Ik wil een offerte'],
      }

    case 'whoami':
      return {
        text: pick([
          `Haha, goeie vraag! Ik ben Daan van den Berg, adviseur bij MK Solidum Group. Ik help klanten dagelijks met vragen over netwerken, glasvezel, Wi-Fi, camerabeveiliging — alles op het gebied van IT-infrastructuur.\n\nKan ik ook u ergens mee helpen? 😄`,
          `Ik ben Daan! Adviseur bij MK Solidum Group in Bilthoven. Mijn werk is om klanten te helpen de juiste IT-infrastructuurkeuzes te maken — van advies tot oplevering. Wat kan ik voor u doen?`,
        ]),
        suggestions: ['Wat doet MK Solidum Group?', 'Offerte aanvragen', 'Hoe bereik ik jullie?'],
      }

    case 'smalltalk':
      return {
        text: pick([
          `Goed, dank u! Drukke dag hier, maar altijd tijd voor een klant. 😄 En met u — alles naar wens? Waarmee kan ik u helpen?`,
          `Prima, dank voor het vragen! Midden in een mooi project, maar ik ben er helemaal voor u. Wat kan ik voor u betekenen?`,
          `Goed hoor — druk maar lekker! Klanten zoals u maken het werk de moeite waard. Zegt u het maar, wat speelt er bij u?`,
          `Heel goed! Net een installatie afgerond in Utrecht, nu even rustig. Dus perfect moment om u te helpen. Wat is uw vraag? 😊`,
        ]),
        suggestions: ['Ik zoek een netwerkoplossing', 'Wat doet MK Solidum Group precies?', 'Ik wil een offerte'],
      }

    case 'thanks':
      return {
        text: pick([
          `Graag gedaan${name}! Dat is precies waarom wij hier zijn. 😊 Heeft u verder nog vragen, of wilt u dat ik een afspraak inplan?`,
          `Geen dank${name} — dat is vanzelfsprekend! Mocht u later nog iets willen weten, ik sta voor u klaar.`,
          `Mijn plezier! En als er ooit iets is — een storing, een vraag of een nieuw project — aarzel dan niet. Wij zijn er altijd. 🤝`,
          `Hè, dat is fijn om te horen! Als er nog iets is, gewoon even sturen. Wij helpen u graag.`,
        ]),
        suggestions: ['Offerte aanvragen', 'Afspraak inplannen', 'Nee, dank u'],
      }

    case 'bye':
      return {
        text: pick([
          `Tot ziens${name}! Fijn gesprek gehad. Als u ooit vragen heeft, weet u ons te vinden. Succes! 👋`,
          `Dag${name}! Prettige dag nog. En mocht er iets zijn — **06 148 909 15** of **mkgroup@mksolidumgroup.nl**. We helpen u graag. 😊`,
          `Doei${name}! Hopelijk tot snel. Wij staan altijd voor u klaar. Fijne dag verder! ☀️`,
        ]),
        suggestions: [],
      }

    case 'services':
      return {
        text: pick([
          `Zeker! MK Solidum Group werkt vanuit **drie divisies**:\n\n🚚 **MK Transport**\n• Medische koeriersdiensten\n• Logistiek & distributie\n\n🌐 **MK Infra**\n• Internet bekabeling (CAT6A, glasvezel)\n• Patchkasten & switches\n• Netwerk aanleg (Wi-Fi, VLAN, firewalls)\n\n🎥 **MK Security**\n• IP-camerasystemen (Hikvision)\n• Beveiliging van panden (AJAX, Roger)\n\nWat spreekt u het meeste aan?`,
          `Goede vraag! Wij werken vanuit drie divisies. **MK Transport** voor medisch vervoer en logistiek, **MK Infra** voor IT-infrastructuur en netwerken, en **MK Security** voor camerabewaking en pandbeveiliging.\n\nElke divisie heeft zijn eigen specialisten. Wat is uw situatie? Dan verwijs ik u naar de juiste afdeling.`,
        ]),
        suggestions: ['MK Transport', 'MK Infra', 'MK Security', 'Offerte aanvragen'],
      }

    case 'price':
      return {
        text: pick([
          `Begrijpelijk dat u dat als eerste vraagt! 😄\n\nEerlijk gezegd: wij werken altijd met maatwerk. Een offerte voor een kantoor van 10 werkplekken is heel anders dan een magazijn van 5.000 m².\n\nMaar dit kan ik u beloven: wij zijn transparant. Geen verborgen kosten, geen verrassingen achteraf. Wat voor project heeft u in gedachten?`,
          `Goede vraag, en ik snap dat u dat wilt weten. Maar ik wil u geen getal noemen dat niet klopt met uw situatie.\n\nKortweg: kleine installaties starten vaak vanaf een paar honderd euro. Grotere projecten lopen op tot tienduizenden euro's — maar dan krijgt u ook een complete, gecertificeerde installatie met documentatie en garantie.\n\nKan ik iets meer over uw project horen?`,
          `Dat verschilt sterk per project — en ik wil u geen verkeerd beeld geven. Wat ik wel kan zeggen: wij zijn eerlijk geprijsd, transparant in onze offertes en er komen nooit verrassingen achteraf.\n\nWat is de situatie bij u? Nieuw pand, uitbreiding of vervanging?`,
        ]),
        suggestions: ['Nieuw kantoor inrichten', 'Uitbreiding bestaand netwerk', 'Offerte aanvragen'],
      }

    case 'quote':
      return {
        text: pick([
          `Dat regel ik graag voor u! Een offerte is altijd vrijblijvend — u zit nergens aan vast. 👍\n\nNormaal gesproken plannen wij eerst een kort adviesgesprek op locatie in — duurt een half uurtje. Dan zien wij precies wat u nodig heeft en geven wij een eerlijke prijs.\n\nBel ons op **06 148 909 15** of mail naar **mkgroup@mksolidumgroup.nl**. Of vraag het direct aan via onze website!`,
          `Zeker, dat is de beste stap! Een offerte bij ons is gratis en volledig vrijblijvend.\n\nWij doen het liefst een korte rondleiding bij u op locatie — zo weet u zeker dat de offerte klopt met uw situatie. Geen standaard prijslijst die misschien niet past.\n\nMail naar **mkgroup@mksolidumgroup.nl** of bel **06 148 909 15** — dan plannen wij iets in. 📅`,
        ]),
        suggestions: ['Offerte via website', '06 148 909 15 bellen', 'mkgroup@mksolidumgroup.nl mailen'],
      }

    case 'fiber':
      return {
        text: pick([
          `Ah, glasvezel — mijn favoriet! 😄 Als u iets wilt wat de komende 30 jaar meekan, is glasvezel de enige juiste keuze.\n\nWij leveren:\n• **Multi-mode** — binnen gebouwen, hoge snelheid op korte afstand\n• **Single-mode** — tussen gebouwen of over lange afstand, tot 40 km\n\nAlles wordt ingemeten met een OTDR en gecertificeerd opgeleverd. U krijgt een volledig testrapport mee.\n\nGaat het om verbinding binnen één pand, of wilt u meerdere locaties koppelen?`,
          `Glasvezel — goede keuze! Bandbreedte tot 100 Gbps, nauwelijks verzwakking over afstand en levensduur van meer dan 30 jaar.\n\nWij installeren zowel indoor als outdoor glasvezel, inclusief lassen, patchkasten en eindmeting. Altijd gecertificeerd conform TIA-568 en ISO 11801.\n\nWat is uw situatie — één gebouw of meerdere locaties verbinden?`,
        ]),
        suggestions: ['Eén gebouw verbinden', 'Meerdere locaties koppelen', 'Wat kost glasvezel?'],
      }

    case 'wifi':
      return {
        text: pick([
          `Wi-Fi is iets waar wij enorm veel in doen. En het verschil tussen professioneel Wi-Fi en "gewoon een router neerzetten" is enorm. 😅\n\nOnze aanpak:\n1. **Site survey** — wij meten de ruimte en bepalen de optimale plaatsing\n2. **Installatieplan** — aantal access points, kanalen, stroomvoorziening\n3. **Installatie & configuratie** — Ubiquiti UniFi, naadloze roaming\n4. **Oplevering** — heatmap, dekking gemeten, documentatie\n\nHoe groot is uw pand, en hoeveel gelijktijdige gebruikers verwacht u?`,
          `Wi-Fi, doen wij dagelijks! Van kleine kantoren tot magazijnen met 500+ gelijktijdige gebruikers.\n\nBelangrijkste vraag: wat gaat er nu mis, of is het een nieuw pand? Als het een nieuw pand is, beginnen wij altijd met een site survey — zo is het in één keer goed.\n\nWij werken met Ubiquiti UniFi: centraal beheer, naadloze roaming, hoge betrouwbaarheid. Geen dure jaarlijkse licenties.`,
        ]),
        suggestions: ['Nieuw pand inrichten', 'Bestaande Wi-Fi verbeteren', 'Wat is een site survey?'],
      }

    case 'network':
      return {
        text: pick([
          `Netwerken is onze kern — letterlijk en figuurlijk. 😄 Van een simpele switch voor 10 werkplekken tot een volledig beheerde enterprise-omgeving.\n\nWij ontwerpen en installeren:\n• **Switches** — managed, PoE, stackable (Ubiquiti, Extreme Networks)\n• **Firewalls** — FortiGate, Ubiquiti USG/UDM\n• **VLAN-segmentatie** — scheiding van netwerken per afdeling\n• **Routing & redundantie** — dubbele uplinks, failover\n\nEen goed netwerk merk je niet — het werkt gewoon. Wat speelt er bij u?`,
          `Netwerken is ons dagelijks brood! Wat ik altijd eerlijk zeg: een slecht netwerk kost u meer dan u denkt — in productiviteitsverlies, frustratie en soms ook in beveiliging.\n\nWij doen het compleet: ontwerp, installatie, VLAN-structuur, firewalls en documentatie. En na oplevering laten wij u niet los.\n\nGaat het om een nieuw netwerk of verbetering van het bestaande?`,
        ]),
        suggestions: ['Nieuw netwerk opzetten', 'Bestaand netwerk verbeteren', 'Wat zijn de kosten?'],
      }

    case 'camera':
      return {
        text: pick([
          `Camerabeveiliging is een onderwerp dat veel mensen onderschatten — totdat er iets mis gaat. Wij installeren systemen van **Hikvision**: marktleider, scherp beeld dag én nacht, 24/7 bereikbaar via uw telefoon.\n\nWat wij altijd meenemen:\n• **AVG-compliance** — camerabeleid, bordje plaatsing, bewaarbeleid\n• **NVR-opslag** — lokale opslag, geen maandelijkse cloudkosten\n• **Toegangscontrole** — combinatie met AJAX of Roger\n\nGaat het om buiten, binnen, of beide? En hoeveel camera's denkt u nodig te hebben?`,
          `Goede stap! Camerabewaking werkt preventief én geeft u achteraf bewijs. Wij doen het compleet — camera's, opslag, kabels, montage en de AVG-documentatie.\n\nHikvision is onze vaste partner: geweldig beeld kwaliteit, betrouwbare hardware, betaalbaar. En u kunt alles via de Hik-Connect app op uw telefoon volgen.\n\nWat is de situatie? Bedrijfspand, magazijn of kantoor?`,
        ]),
        suggestions: ['Binnen camera\'s', 'Buiten + binnen', 'Hoe zit het met de AVG?'],
      }

    case 'cabling':
      return {
        text: pick([
          `Bekabeling — de basis van alles. Slechte bekabeling is als een slecht fundament: u bouwt er alles op, maar als het fundament rammelt, heeft u later ellende.\n\nWij installeren:\n• **Cat6A** — standaard voor 10 Gbps tot 100 m\n• **Cat7** — extra afscherming, ideaal bij veel storing\n• **Glasvezel** — voor backbone en langere afstanden\n\nElke verbinding wordt gecertificeerd. U krijgt een testrapportage mee — dat geeft u ook 25 jaar garantie op de prestaties.\n\nGaat het om een nieuw pand of vervanging van bestaande bekabeling?`,
          `Ah, bekabeling! Al jaren onze specialiteit. Wij werken conform **TIA/EIA-568** en **ISO 11801** — de internationale normen. Alles netjes in patchkasten, gelabeld, gedocumenteerd.\n\nWij werken ook samen met aannemers en projectontwikkelaars bij nieuwbouwprojecten — dan lopen de kabels al mee vóór de gipswanden dicht gaan.\n\nWat voor project heeft u in gedachten?`,
        ]),
        suggestions: ['Nieuwbouwproject', 'Bestaand pand renoveren', 'Wat is Cat6A?'],
      }

    case 'radio':
      return {
        text: pick([
          `Straalverbindingen — handig als graven niet kan of te duur is. Wij gebruiken **Ubiquiti AirMax**: stabiel, snel, en te installeren op elk dak.\n\n• **PTP** (point-to-point) — twee locaties koppelen, tot meerdere kilometers\n• **PTMP** (point-to-multipoint) — één centrale zender, meerdere ontvangers\n• Latency onder 1 ms — prima voor VoIP, camerabeelden en bedrijfsverkeer\n\nBelangrijkste vraag: is er **vrij zicht** (line-of-sight) tussen de locaties? Dat is de enige harde eis. Hoever liggen de locaties uit elkaar?`,
          `Goede optie als bekabeling geen optie is! Wij installeren PTP- en PTMP-verbindingen door heel Nederland — tot meerdere kilometers, afhankelijk van line-of-sight.\n\nWij voeren altijd eerst een linkberekening uit: Fresnel-zone, signaalsterkte, interferentie. Zo weten wij vóóraf of het werkt — geen giswerk.\n\nHoever liggen de locaties uit elkaar, en heeft u al zicht op het dak van beide gebouwen?`,
        ]),
        suggestions: ['Twee gebouwen koppelen', 'Meerdere locaties verbinden', 'Offerte aanvragen'],
      }

    case 'area':
      return {
        text: pick([
          `Wij werken door heel Nederland! 🇳🇱 Ons kantoor zit in **Bilthoven** (Utrecht), maar onze monteurs zijn dagelijks onderweg — van Groningen tot Zeeland.\n\nReiskosten communiceren wij altijd transparant vooraf. Geen verrassingen achteraf.\n\nIn welke regio zit u? Dan weet ik of er iemand uit de buurt kan komen voor een snel adviesgesprek.`,
          `Heel Nederland, ja! Wij werken dagelijks in Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven — maar ook in kleinere gemeenten en industrieterreinen.\n\nVoor grotere projecten werken wij ook samen met lokale aannemers. Zo kunnen wij altijd snel en efficiënt ter plaatse zijn.\n\nWaar zit u?`,
        ]),
        suggestions: ['Noord-Holland', 'Utrecht / Bilthoven', 'Zuid-Holland', 'Andere regio'],
      }

    case 'timeline':
      return {
        text: pick([
          `Goede vraag, en eerlijk antwoord: het hangt af van de omvang.\n\n• **Klein kantoor** (10-20 werkplekken): 1-3 dagen\n• **Middelgroot pand**: 1-2 weken\n• **Groot project** (meerdere verdiepingen/gebouwen): 3-6 weken\n\nWat wij altijd doen: wij communiceren de planning vooraf, werken 's avonds of in het weekend als u door moet kunnen werken, en oplevering is altijd op tijd.\n\nHeeft u een harde deadline? Dan kijken wij samen wat mogelijk is.`,
          `Dat verschilt per project! Maar om u een idee te geven:\n\n• Eenvoudige bekabeling: 1-2 dagen\n• Wi-Fi-installatie inclusief site survey: 2-5 dagen\n• Netwerk + bekabeling + camera compleet: 2-4 weken\n\nWij plannen altijd zó dat u zo min mogelijk hinder heeft. Heeft u al een gewenste startdatum?`,
        ]),
        suggestions: ['Zo snel mogelijk', 'Binnen een maand', 'Planning bespreken'],
      }

    case 'support':
      return {
        text: pick([
          `Service na oplevering — daar zetten wij echt op in. Standaard bieden wij:\n\n• **2 jaar installatiegarantie** op ons werk\n• **Fabrieksgarantie** op hardware (2-5 jaar, afhankelijk van merk)\n• **Storingsdienst** — bereikbaar bij calamiteiten\n• **Optioneel onderhoudscontract** — dan monitoren wij proactief\n\nEerlijk gezegd: de meeste klanten bellen ons nooit voor een storing, omdat de systemen gewoon werken. Maar als het toch een keer mis gaat, zijn wij er snel bij.\n\nWilt u meer weten over ons onderhoudscontract?`,
          `Na oplevering laten wij u niet los — dat is ons uitgangspunt. Wij bieden service & support, een storingslijn en optioneel proactief beheer.\n\nBij een **onderhoudscontract** monitoren wij uw netwerk op afstand. Problemen lossen wij dan op vóórdat u ze merkt. Ideaal als u geen eigen IT-afdeling heeft.\n\nHerkent u de situatie dat een leverancier na oplevering niet meer te bereiken was? Dat is precies wat wij niet doen. 😊`,
        ]),
        suggestions: ['Onderhoudscontract bespreken', 'Wat valt onder garantie?', 'Offerte aanvragen'],
      }

    case 'brands':
      return {
        text: pick([
          `Wij zijn officieel partner van de merken die wij aanraden — bewust. Wij adviseren alleen wat wij zelf ook zouden kopen.\n\nOnze vaste partners:\n• **Ubiquiti** — netwerk, Wi-Fi, straalverbindingen\n• **Extreme Networks** — enterprise switches & routing\n• **Hikvision** — IP-camera's en NVR-systemen\n• **AJAX** — draadloos alarmsysteem\n• **Roger** — toegangscontrole\n• **LogiLink** — passieve bekabeling\n\nEigen voorraad — geen lange levertijden. Storingen lossen wij vaak dezelfde dag op.`,
          `Goede vraag! Wij kiezen merken op kwaliteit én support — niet op marge. \n\n**Ubiquiti UniFi** voor netwerk en Wi-Fi: uitstekend product, geen dure licenties. **Hikvision** voor camera's: marktleider met reden — betrouwbaar en scherp geprijsd. **Extreme Networks** voor enterprise: carrier-grade kwaliteit.\n\nHeeft u al een voorkeur, of laten wij u adviseren?`,
        ]),
        suggestions: ['Ubiquiti UniFi info', 'Hikvision camera\'s', 'Extreme Networks', 'Laat mij adviseren'],
      }

    case 'sector':
      return {
        text: pick([
          `Wij werken in bijna alle sectoren — en dat merk je aan de aanpak. Elke sector heeft zijn eigen eisen:\n\n• **Zorg** — hoge beschikbaarheid, redundantie, medische veiligheid\n• **Onderwijs** — robuuste Wi-Fi voor veel apparaten, contentfiltering\n• **Horeca** — gastenwifi, aparte netwerken, beveiliging\n• **Industrie/Magazijn** — industriële Wi-Fi, barcodedragers, harsh environment\n• **Retail** — POS-systemen, camerabeveiliging, toegangscontrole\n• **MKB/Kantoor** — compleet en beheersbaar netwerk\n\nIn welke sector zit u?`,
          `Goede vraag! Wij bedienen de zorg, onderwijs, retail, horeca, industrie en overheid — elk met hun eigen specifieke eisen.\n\nBijvoorbeeld: een distributiecentrum heeft andere Wi-Fi-eisen dan een ziekenhuis. En een hotel heeft andere beveiligingswensen dan een basisschool.\n\nWat is uw sector? Dan vertel ik u wat wij daar al voor anderen hebben gedaan.`,
        ]),
        suggestions: ['Zorg / ziekenhuis', 'Onderwijs', 'Industrie / magazijn', 'Kantoor / MKB'],
      }

    case 'telecom':
      return {
        text: pick([
          `Internetverbinding — de slagader van uw bedrijf. Wij leveren zelf geen internet, maar wij zorgen dat de verbinding die u heeft optimaal verdeeld wordt over uw netwerk.\n\nVoor **redundantie** adviseren wij altijd twee providers: als de ene uitvalt, schakelt het netwerk automatisch over. Downtime voorkomen is altijd goedkoper dan downtime oplossen.\n\nWat voor verbinding heeft u nu? En ervaart u problemen met de bandbreedte of beschikbaarheid?`,
          `Goede vraag over uplinks en bandbreedte. Wij helpen u met het optimaal benutten van uw internetverbinding via QoS, load balancing en redundantie.\n\nWerk u met één provider? Dan adviseer ik altijd een tweede als backup — glasvezel als primair, 4G/5G als fallback. Zo bent u altijd bereikbaar.\n\nWat is uw huidige situatie?`,
        ]),
        suggestions: ['Redundante verbinding opzetten', 'Bandbreedte optimaliseren', 'Offerte aanvragen'],
      }

    case 'managed':
      return {
        text: pick([
          `Beheerd netwerk — steeds populairder, en begrijpelijk. U wilt gewoon dat het werkt, zonder zelf IT-specialist te zijn.\n\nWij bieden **proactief netwerkbeheer**:\n• Monitoring 24/7 — wij zien een probleem vóórdat u het merkt\n• Remote support — veel problemen oplossen wij op afstand\n• Updates & patches — altijd up-to-date en veilig\n• Maandelijkse rapportage — u weet altijd hoe het ervoor staat\n\nInteressant voor u? Dan kunnen wij een beheercontract op maat samenstellen.`,
          `Managed services — precies waar steeds meer bedrijven voor kiezen. Zeker als u geen eigen IT-afdeling heeft.\n\nWij nemen het beheer van uw netwerk volledig over: monitoring, updates, storingen afhandelen, documentatie bijhouden. U betaalt een vast maandbedrag en heeft altijd een aanspreekpunt.\n\nWilt u meer weten over wat een beheercontract bij ons inhoudt?`,
        ]),
        suggestions: ['Beheercontract bespreken', 'Wat kost dat per maand?', 'Offerte aanvragen'],
      }

    case 'vpn':
      return {
        text: pick([
          `VPN en veilig thuiswerken — zeker relevant na de afgelopen jaren! Wij configureren VPN-oplossingen die écht veilig zijn, niet die gratis consumer-apps.\n\nWij werken met **FortiGate** en **Ubiquiti** voor site-to-site VPN en client-VPN. Versleuteld, met tweefactorauthenticatie, en centraal beheerd.\n\nHoeveel medewerkers werken er thuis of op locatie? Dan kan ik inschatten wat de beste oplossing is.`,
          `Veilig thuiswerken of remote access — een must tegenwoordig. Een goede VPN-oplossing zorgt dat uw medewerkers veilig verbinding maken met het bedrijfsnetwerk, alsof ze op kantoor zitten.\n\nWij configureren dit op uw firewall en zorgen voor een gebruiksvriendelijke client-software. Werkt op laptop, tablet en telefoon.\n\nWat is uw huidige situatie — heeft u al een firewall?`,
        ]),
        suggestions: ['VPN opzetten', 'Firewall bespreken', 'Offerte aanvragen'],
      }

    case 'voip':
      return {
        text: pick([
          `VoIP en IP-telefonie — wij werken samen met VoIP-providers en zorgen dat uw netwerk klaar is voor betrouwbare telefonie.\n\nBelangrijkste aandachtspunt: **QoS** (Quality of Service). Spraakverkeer moet prioriteit krijgen boven dataverkeer — anders krijgt u haperingen en echoproblemen.\n\nWij configureren dit op uw switches en routers en testen het voor oplevering. Heeft u al een VoIP-provider, of zoekt u ook daarvoor advies?`,
          `Telefonie over IP — doen wij regelmatig. Wij zorgen voor de netwerkinfrastructuur die VoIP betrouwbaar maakt: VLAN voor spraak, QoS-configuratie, PoE-switches voor de IP-telefoons.\n\nWerkt u met een specifieke provider of centrex-platform? Dan stem ik de configuratie daar op af.\n\nWat is uw huidige telefoniesituatie?`,
        ]),
        suggestions: ['VoIP-netwerk inrichten', 'QoS bespreken', 'Offerte aanvragen'],
      }

    case 'contact':
      return {
        text: pick([
          `U kunt ons altijd bereiken! 📞\n\n• **Telefoon**: 06 148 909 15 — ma t/m vr, 08:00–17:30\n• **E-mail**: mkgroup@mksolidumgroup.nl — reactie binnen één werkdag\n• **Adres**: Bilthoven (Utrecht) — bezoek op afspraak\n\nOf zal ik een terugbelverzoek voor u doorzetten? Dan belt een van onze adviseurs u vandaag nog terug.`,
          `Bereikbaar zijn is voor ons heel belangrijk. U kunt ons bellen op **06 148 909 15**, mailen naar **mkgroup@mksolidumgroup.nl**, of het contactformulier invullen op onze website.\n\nWilt u liever dat wij u bellen? Geef het aan — dan zorg ik dat een collega u zo snel mogelijk terugbelt. Wij reageren altijd dezelfde dag.`,
        ]),
        suggestions: ['06 148 909 15', 'mkgroup@mksolidumgroup.nl', 'Contactformulier openen'],
      }

    case 'references':
      return {
        text: pick([
          `Wij hebben mooie referenties door heel Nederland! Vanwege privacy kunnen wij niet altijd namen noemen, maar wij hebben projecten gedaan voor:\n\n• Logistieke bedrijven en distributiecentra (Wi-Fi + bekabeling)\n• Zorginstellingen (netwerk + camerabeveiliging)\n• Onderwijsinstellingen (Wi-Fi voor 500+ gebruikers)\n• Gemeentes en overheidsinstanties (glasvezel + netwerk)\n• MKB-kantoren (complete IT-infrastructuur)\n\nWilt u referenties zien die passen bij uw sector? Dan zoek ik die voor u op.`,
          `Goede vraag! Wij hebben al veel mooie projecten afgerond. Op onze website staat een aantal referenties, maar er zijn er ook die wij op verzoek kunnen delen.\n\nWat is uw sector? Dan kan ik u een vergelijkbaar project beschrijven — inclusief wat de uitdaging was en hoe wij dat hebben opgelost.`,
        ]),
        suggestions: ['Referentie in mijn sector', 'Naar de referentiepagina', 'Offerte aanvragen'],
      }

    case 'sustainability':
      return {
        text: pick([
          `Duurzaamheid speelt steeds meer mee — ook in IT-infrastructuur. Een paar dingen die wij standaard meenemen:\n\n• **PoE (Power over Ethernet)** — één kabel voor data én stroom, minder bekabeling\n• **Energy-efficient hardware** — Ubiquiti en Extreme Networks scoren goed op verbruik\n• **Slimme switches** — automatisch stand-by bij inactief poort\n• **Lange levensduur** — wij kiezen hardware die 10+ jaar meekan\n\nDuurzame IT-keuzes zijn ook financieel slim: minder stroomverbruik, minder vervanging. Heeft u hier specifieke wensen voor?`,
          `Mooi dat u dat meeneemt! PoE-infrastructuur en energie-efficiënte hardware kunnen het stroomverbruik aanzienlijk verlagen.\n\nWij adviseren altijd om te kiezen voor hardware met lage TDP (thermal design power) en slim netbeheer — zo verbruikt het netwerk 's nachts automatisch minder.\n\nWat zijn uw duurzaamheidsdoelen? Dan denk ik graag mee.`,
        ]),
        suggestions: ['PoE uitleggen', 'Duurzame hardware kiezen', 'Offerte aanvragen'],
      }

    case 'transport':
      return {
        text: pick([
          `MK Transport is onze logistieke divisie — en een heel veelzijdige! 🚚\n\nWij verzorgen:\n• **Medisch transport** — ziekenhuizen, laboratoria, apotheken\n• **Koeriersdiensten** — same-day, spoedritten, regelmatige routes\n• **Distributie & logistiek** — vaste en flexibele distributiestructuren\n• **Warehouse coördinatie** — ons team coördineert ook in uw magazijn\n\nAl onze chauffeurs zijn GDP-gecertificeerd en beschikken over de juiste papieren. Wat heeft u nodig?`,
          `Transport is één van onze drie pijlers! Wij rijden voor ziekenhuizen, laboratoria, farmaceutische bedrijven en logistieke partijen.\n\nKarim Charradi — onze co-directeur — is specialist in warehouse en transportcoördinatie. Hij zorgt dat onze mensen bij uw locatie naadloos aansluiten op uw processen.\n\nWat is uw transportvraagstuk?`,
        ]),
        suggestions: ['Medisch transport', 'Koeriersdiensten', 'Warehousing & logistiek', 'Offerte transport'],
      }

    case 'medical':
      return {
        text: pick([
          `Medisch transport is ons specialisme binnen MK Transport. Wij rijden dagelijks voor:\n\n• Ziekenhuizen (lab-monsters, bloed, medicatie)\n• Apotheken (spoed- en reguliere leveringen)\n• Laboratoria (tijdkritische monsters)\n• Farmaceutische bedrijven (GDP-gecertificeerd)\n\nAl ons medisch transport valt onder **GDP-richtlijnen** (Good Distribution Practice). Temperatuurbewaking, correct verpakt, op tijd — zonder uitzondering.\n\nVoor welke instelling zoekt u transport?`,
          `Medisch transport vereist precisie, timing en de juiste certificering. Dat hebben wij allemaal.\n\nOnze GDP-gecertificeerde chauffeurs kennen de protocollen voor het vervoer van bloedmonsters, medicijnen en temperatuurgevoelige producten. Wij rijden vaste routes én spoedritten — ook buiten kantooruren.\n\nWelke instelling bent u, en hoe frequent heeft u transport nodig?`,
        ]),
        suggestions: ['GDP-transport uitleggen', 'Vaste routes plannen', 'Spoedritten', 'Offerte aanvragen'],
      }

    case 'warehouse':
      return {
        text: pick([
          `Warehouse management en coördinatie — Karim Charradi, onze co-directeur, is hier de expert. 📦\n\nWij leveren:\n• **Coördinatoren** voor in uw warehouse of distributiecentrum\n• **Teamleiders** voor het aansturen van picking, packing en expeditie\n• **Logistieke planners** voor route- en capaciteitsplanning\n• **Flex inzet** — dagelijks, wekelijks of projectbasis\n\nWij sluiten volledig aan op uw WMS en werkprocessen. Geen inwerkperiode die u geld kost — wij zijn er snel ingewijd.\n\nWelke functie heeft u nodig?`,
          `Warehouse coördinatie is iets waar Karim alles van weet — hij heeft zelf jarenlang als coördinator gewerkt bij grote opdrachtgevers.\n\nWij plaatsen coördinatoren, teamleiders en planners in uw distributiecentrum. Tijdelijk, flexibel of structureel. Altijd gekoppeld aan onze eigen kwaliteitsborging.\n\nMag ik vragen: gaat het om een tijdelijke behoefte of zoekt u een structurele oplossing?`,
        ]),
        suggestions: ['Coördinator inhuren', 'Teamleider warehouse', 'Flex inzet logistiek', 'Offerte bespreken'],
      }

    case 'partnership':
      return {
        text: pick([
          `Samenwerken met MK Solidum Group — absoluut een goed idee! 🤝\n\nWij werken op twee manieren samen:\n\n**Als onderaannemer voor u:**\n• Wij voeren uit wat u opdraagt — transport, infra of security\n• Wij werken discreet onder uw vlag als dat gewenst is\n• Vaste prijsafspraken, geen verrassingen\n\n**U besteedt bij ons uit:**\n• Wij nemen een volledige dienst over — van planning tot uitvoering\n• U houdt regie, wij zorgen voor de rest\n\nWat voor samenwerking ziet u voor zich?`,
          `Wij werken graag als partner of onderaannemer voor andere bedrijven. Denk aan installatiebureau's, telecombedrijven, aannemers en facility managers die extra capaciteit nodig hebben.\n\nWij zijn flexibel, betrouwbaar en hebben alle certificeringen in huis. U hoeft niet bang te zijn voor kwaliteitsproblemen — wij werken conform uw standaarden.\n\nBent u opdrachtgever die ons wil inhuren, of zoekt u een structurele samenwerking?`,
        ]),
        suggestions: ['Ons inhuren als onderaannemer', 'Dienst uitbesteden', 'Vaste samenwerking bespreken', 'Contact opnemen'],
      }

    case 'company':
      return {
        text: pick([
          `MK Solidum Group B.V. is opgericht op **26 september 2016** — oorspronkelijk als Kali Transport V.O.F. en sindsdien uitgegroeid tot een volwaardige multi-divisie groep.\n\nWat wij doen:\n🚚 **MK Transport** — medisch transport & logistiek\n🌐 **MK Infra** — IT-infrastructuur & netwerken\n🔐 **MK Security** — camerabewaking & pandbeveiliging\n\nKantoor: **Bilthoven (Utrecht)** — maar wij werken door heel Nederland. Eén partner voor drie vakgebieden — dat is onze kracht.`,
          `MK Solidum Group bestaat al since 2016 en heeft zich ontwikkeld van een transportbedrijf naar een volledige dienstverlener op het gebied van transport, IT-infrastructuur en beveiliging.\n\nWij geloven in één aanspreekpunt voor meerdere behoeften. Geen losse leveranciers, geen miscommunicatie — gewoon één partij die alles regelt.\n\nKvK-nummer: **66920280** | Gevestigd in **Bilthoven**\n\nWat wilt u van ons weten?`,
        ]),
        suggestions: ['Onze drie divisies', 'Ons team', 'Offerte aanvragen', 'Contact opnemen'],
      }

    case 'team':
      return {
        text: pick([
          `Achter MK Solidum Group staan twee eigenaren:\n\n👤 **Mohammed Alou** — Eigenaar & Directeur\nSpecialist in data, netwerken en beveiliging. Verantwoordelijk voor **MK Infra** en **MK Security** — van bekabeling en netwerk aanleg tot camerasystemen en toegangscontrole. VCA VOL gecertificeerd.\n\n👤 **Karim Charradi** — Eigenaar & Directeur\nDe specialist in transport, warehouse en logistiek. Uw aanspreekpunt voor alles binnen **MK Transport** — medische routes, distributie en magazijncoördinatie. VCA VOL gecertificeerd.\n\nSamen een combinatie van technische kennis én operationele expertise. U praat altijd met iemand die het vak door en door kent.`,
          `MK Solidum Group wordt geleid door twee eigenaren die elk hun eigen vakgebied hebben:\n\n**Mohammed Alou** — data monteur, netwerken & beveiliging (MK Infra + MK Security)\n**Karim Charradi** — transport, logistiek & warehouse (MK Transport)\n\nBeide heren zijn **VCA VOL gecertificeerd** en dagelijks actief in het veld. Geen managers achter een bureau — mensen die het werk zelf kennen.\n\nVraag over transport of logistiek? Dan is Karim uw man. IT-infrastructuur of beveiliging? Dan is Mohammed uw aanspreekpunt. Wie heeft u nodig?`,
        ]),
        suggestions: ['Transport / logistiek → Karim', 'Infra / security → Mohammed', 'Offerte aanvragen'],
      }

    case 'opening_hours':
      return {
        text: pick([
          `Onze kantooruren zijn **maandag t/m vrijdag van 08:00 tot 17:30**. 📅\n\nMaar eerlijk gezegd: voor urgente zaken zijn wij ook buiten kantooruren bereikbaar. Zeker voor medisch transport gaan wij ook 's avonds en in het weekend de weg op.\n\n📞 **06 148 909 15** — voor spoedgevallen altijd beschikbaar\n✉️ **mkgroup@mksolidumgroup.nl** — reactie binnen één werkdag\n\nHeeft u een spoedvraag of is het een regulier verzoek?`,
          `Kantooruren: **ma t/m vr, 08:00–17:30**.\n\nVoor medisch transport en spoedritten zijn wij ook buiten kantooruren actief. De planning loopt door — u hoeft nooit te wachten als er haast bij is.\n\nRegelmatige vragen beantwoorden wij altijd dezelfde dag. Wat kan ik voor u doen?`,
        ]),
        suggestions: ['Spoedrit aanvragen', 'Reguliere afspraak', '06 148 909 15 bellen'],
      }

    case 'address':
      return {
        text: pick([
          `Ons kantoor staat in **Bilthoven, Utrecht** 📍\n\n**Sterrenhof 10, 3721 WL Bilthoven**\n\nCentrale ligging in Nederland — goed bereikbaar vanuit Utrecht, Amersfoort, Hilversum en Amsterdam. Voldoende parkeerruimte aanwezig.\n\nBezoek is altijd **op afspraak** — bel even en wij plannen iets in dat u uitkomt. Wat brengt u naar ons?`,
          `Ons vestigingsadres:\n\n📍 **Sterrenhof 10**\n**3721 WL Bilthoven (Utrecht)**\n\nKleine 10 minuten van Utrecht Centraal, goed bereikbaar via A28. Maar wij komen ook graag bij u langs — dat doen wij het liefst voor een eerste adviesgesprek.\n\nAfspraak maken? Bel **06 148 909 15** of mail **mkgroup@mksolidumgroup.nl**.`,
        ]),
        suggestions: ['Afspraak inplannen', 'Route bekijken', 'Liever een huisbezoek'],
      }

    case 'kvk':
      return {
        text: `Geen probleem — voor inkoopafdelingen en offerteaanvragen:\n\n🏢 **MK Solidum Group B.V.**\n📋 **KvK-nummer:** 66920280\n🔢 **RSIN/BTW:** 856752721\n📍 **Adres:** Sterrenhof 10, 3721 WL Bilthoven\n📞 **Tel:** 06 148 909 15\n✉️ **Mail:** mkgroup@mksolidumgroup.nl\n\nHeeft u een specifiek document nodig zoals een KvK-uittreksel of bankgarantie? Dan sturen wij dat graag toe.`,
        suggestions: ['KvK-uittreksel opvragen', 'Offerte aanvragen', 'Contact opnemen'],
      }

    case 'alarm':
      return {
        text: pick([
          `Alarmsystemen — één van onze MK Security specialiteiten! Wij werken met **AJAX Systems**: het modernste draadloze alarmsysteem op de markt.\n\nWaarom AJAX?\n• **Volledig draadloos** — geen kabelbreuk, snelle installatie\n• **GSM + WiFi + Ethernet** — drie communicatiemiddelen tegelijk\n• **Real-time meldingen** op uw telefoon\n• **Sabotagedetectie** — wordt er aan de behuizing gerommeld? Direct alarm\n• **Accu-backup** — ook bij stroomuitval actief\n\nWij koppelen het alarmsysteem desgewenst ook aan een **particulier beveiligingsbedrijf** voor actieve bewaking. Gaat het om een klein pand of een groter complex?`,
          `Inbraakdetectie met AJAX — wij installeren dit regelmatig voor kantoren, magazijnen en winkels.\n\nHet mooie van AJAX: de app geeft u **real-time inzicht** in wat er in uw pand gebeurt. Beweging gedetecteerd? Deur open? U krijgt direct een melding — waar u ook bent.\n\nWij adviseren altijd een combinatie: **alarm + camera + toegangscontrole**. Dan heeft u een volledig beeld én bewijs bij een incident.\n\nWat is uw situatie — alleen alarm, of een compleet pakket?`,
        ]),
        suggestions: ['AJAX alarmsysteem info', 'Compleet beveiligingspakket', 'Offerte beveiliging'],
      }

    case 'access_control':
      return {
        text: pick([
          `Toegangscontrole — essentieel als u wilt bepalen wie wanneer waar mag zijn. Wij werken met **Roger** en **AJAX**:\n\n🔑 **Roger** — voor grotere installaties met veel deuren en gebruikers\n• Kaartlezers, PIN-pads, biometrisch\n• Centraal beheer via software\n• Tijdzonebeheer — wie mag wanneer welke deur openen\n• Koppeling met HR-systemen mogelijk\n\n🔒 **AJAX** — voor kleinere installaties of als aanvulling op het alarmsysteem\n• Smart locks en magneetsloten\n• Beheer via app\n\nBij hoeveel deuren en hoeveel gebruikers denkt u? Dan geef ik u een richting.`,
          `Toegangscontrole is meer dan een sleutel vervangen door een pas. Het gaat om **weten wie er is, wanneer, en waar**.\n\nWij installeren complete toegangscontrolesystemen van Roger — van één deur tot een complex met honderden deuren en medewerkers. Inclusief:\n• Personeelsbeheer (wie heeft toegang tot welke zone)\n• Tijdregistratie (optioneel)\n• Koppeling met NVR/camerasysteem\n• AVG-conform\n\nGaat het om uw hoofdingang, een serverruimte, of het hele pand?`,
        ]),
        suggestions: ['Roger toegangscontrole', 'Combinatie alarm + toegang', 'Offerte aanvragen'],
      }

    case 'emergency':
      return {
        text: pick([
          `Spoed? Geen probleem — wij zijn er voor u! 🚨\n\nBel ons **direct** op **06 148 909 15** — ook buiten kantooruren voor urgente gevallen.\n\nVoor **medisch transport** (spoedritten, tijdkritische monsters): wij zijn dag en nacht bereikbaar.\n\nVoor **IT-storingen** (netwerk plat, camera's offline): wij proberen dezelfde dag te komen.\n\nVoor **beveiligingsstoringen** (alarm, toegangscontrole): we behandelen dit als prioriteit.\n\nBel direct — dan regelen wij de rest. 📞`,
          `Urgent? Bel ons meteen: **06 148 909 15** 📞\n\nWij begrijpen dat sommige situaties niet kunnen wachten. Medische transporten, netwerkstoringen, beveiligingsincidenten — wij behandelen spoedgevallen altijd met prioriteit.\n\nKunt u kort beschrijven wat er speelt? Dan schakel ik direct de juiste persoon in.`,
        ]),
        suggestions: ['06 148 909 15 bellen', 'mkgroup@mksolidumgroup.nl', 'Terugbelverzoek spoed'],
      }

    case 'certification':
      return {
        text: pick([
          `Certificeringen zijn voor ons geen papierwerk — het is een garantie voor u. Dit hebben wij in huis:\n\n🦺 **VCA VOL** — Veiligheid, Gezondheid en Milieu Checklist Aannemers (Volledig)\nBeide eigenaren zijn VCA VOL gecertificeerd. Verplicht voor veel opdrachtgevers in de bouw, industrie en infra.\n\n🏅 **GDP-certificering** (Good Distribution Practice)\nVerplicht voor medisch en farmaceutisch transport. Onze chauffeurs zijn allen gecertificeerd.\n\n📐 **TIA/EIA-568 & ISO 11801**\nInternationale normen voor gestructureerde bekabeling. Wij meten en certificeren élke verbinding na installatie.\n\n📄 **Testrapportage**\nBij elke bekabelingsinstallatie ontvangt u een volledig testrapport — 25 jaar garantie op de bekabelingsprestaties.\n\n🔒 **AVG-compliance (GDPR)**\nBij camerasystemen leveren wij standaard het volledige AVG-pakket mee.\n\nHeeft u een specifiek certificaat nodig voor uw aanbesteding of inkoop?`,
          `Goede vraag — certificeringen zijn ons bewijs van kwaliteit.\n\n• **VCA VOL** — veiligheid op de werkvloer ✅\n• **GDP** — medisch transport ✅\n• **TIA-568 / ISO 11801** — bekabeling ✅\n• **AVG-compliance** — camerabeveiliging ✅\n• Gecertificeerde testrapportages bij elke oplevering ✅\n\nVoor aanbestedingen en inkoopafdelingen kunnen wij alle relevante documenten aanleveren. Wat heeft u nodig?`,
        ]),
        suggestions: ['GDP-certificaat opvragen', 'Testrapportage info', 'Offerte aanvragen'],
      }

    case 'unknown':
    default: {
      if (ctx.messageCount >= 3) {
        return {
          text: pick([
            `Hmm, dat is een vraag waar ik even over moet nadenken. 😅 Eerlijk gezegd kan ik dit het beste doorspelen naar een collega die hier meer van weet.\n\nZal ik zorgen dat iemand u terugbelt? Of bel zelf even: **06 148 909 15**. Dan helpen wij u direct verder.`,
            `Goede vraag — maar ik wil u geen half antwoord geven. Dit soort vragen beantwoorden wij het liefst persoonlijk.\n\nMag ik u doorverwijzen? **06 148 909 15** of **mkgroup@mksolidumgroup.nl** — dan koppelen wij de juiste specialist aan u.`,
          ]),
          suggestions: ['Terugbelverzoek', 'Ik stel een andere vraag', 'Offerte aanvragen'],
        }
      }
      return {
        text: pick([
          `Dat snap ik niet helemaal — mijn excuses! 😊 Kunt u uw vraag iets anders formuleren? Of kies een van de opties hieronder.`,
          `Interessant! Ik wil u goed helpen, maar ik weet niet helemaal zeker wat u bedoelt. Kunt u iets meer context geven? Of kies hieronder een onderwerp.`,
          `Hmm, daar moet ik even over nadenken. 🤔 Kunt u uw vraag iets specifieker stellen? Dan kan ik u veel beter helpen.`,
        ]),
        suggestions: ['Diensten bekijken', 'Offerte aanvragen', 'Contact opnemen'],
      }
    }
  }
}

/* ── Markdown-achtige formatter — renderloze aanpak ── */
function formatText(text) {
  if (!text) return null
  const lines = text.split('\n')
  return lines.map((line, i) => {
    const segments = []
    let remaining = line
    let segIdx = 0
    // Split op **bold** patronen
    const regex = /\*\*([^*]+)\*\*/g
    let lastIdx = 0
    let match
    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIdx) {
        segments.push(<span key={segIdx++}>{line.slice(lastIdx, match.index)}</span>)
      }
      segments.push(<strong key={segIdx++} className="font-semibold text-white">{match[1]}</strong>)
      lastIdx = regex.lastIndex
    }
    if (lastIdx < line.length) {
      segments.push(<span key={segIdx++}>{line.slice(lastIdx)}</span>)
    }
    return (
      <span key={i} className="block leading-relaxed">
        {segments.length > 0 ? segments : remaining}
      </span>
    )
  })
}

/* ── Typing dots ── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-blue-400"
          animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: `Hallo! 👋 U spreekt met **Daan van den Berg**, adviseur bij MK Solidum Group. Fijn dat u contact opneemt!\n\nWij helpen u met **transport**, **IT-infrastructuur** en **beveiliging**. Waarmee kan ik u vandaag helpen?`,
      suggestions: ['Welke divisies hebben jullie?', 'Ik wil een offerte', 'Wat zijn de kosten?'],
      time: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [unread, setUnread] = useState(1)
  const openRef = useRef(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const timerRef = useRef(null)
  // Conversatiegeheugen als ref — geen re-render nodig, geen stale closures
  const ctx = useRef({ topic: null, askedName: false, customerName: null, messageCount: 0 })

  useEffect(() => {
    // Reset ctx bij elke mount
    ctx.current = { topic: null, askedName: false, customerName: null, messageCount: 0 }
    return () => {
      // Cleanup pending timer bij unmount
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    openRef.current = open
    if (open) {
      setUnread(0)
      const t = setTimeout(() => inputRef.current?.focus(), 300)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    // Annuleer eventuele lopende timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    const userMsg = { id: Date.now(), from: 'user', text: trimmed, time: new Date() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    // Simuleer leessnelheid — kort maar realistisch
    const delay = 700 + Math.min(trimmed.length * 12, 1000)

    timerRef.current = setTimeout(() => {
      timerRef.current = null
      ctx.current.messageCount++
      const intent = detectIntent(trimmed)
      const response = buildResponse(intent, trimmed, ctx.current)
      // Zet topic als het intent een specifiek onderwerp is
      if (!['greeting', 'smalltalk', 'thanks', 'bye', 'unknown', 'whoami'].includes(intent)) {
        ctx.current.topic = intent
      }
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: 'bot',
          text: response.text,
          suggestions: response.suggestions ?? [],
          time: new Date(),
        },
      ])
      if (!openRef.current) {
        setUnread((n) => n + 1)
      }
    }, delay)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* ── Floating button ── */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2 group">
        {/* Tooltip — alleen zichtbaar bij hover */}
        {!open && (
          <div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 text-xs font-semibold text-white px-3 py-1.5 rounded-full pointer-events-none"
            style={{ background: 'rgba(15,32,68,0.92)', border: '1px solid rgba(37,99,235,0.35)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
            Stel een vraag
          </div>
        )}

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', boxShadow: '0 4px 16px rgba(37,99,235,0.4)' }}
          aria-label="Chat openen"
        >
          {unread > 0 && !open && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white z-10">
              {unread}
            </span>
          )}
          <AnimatePresence mode="wait">
            {open ? (
              <motion.svg key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatwindow"
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
            className="fixed bottom-24 right-6 z-[9998] w-[380px] max-w-[calc(100vw-20px)] flex flex-col rounded-2xl overflow-hidden"
            style={{ height: 'min(580px, calc(100vh-130px))', boxShadow: '0 28px 70px rgba(0,0,0,0.4), 0 0 0 1px rgba(37,99,235,0.2)' }}
          >
            {/* ── Header ── */}
            <div
              className="shrink-0 px-4 py-3 flex items-center gap-3 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#060e1e,#0a1628)' }}
            >
              {/* Scan line accent */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute top-0 bottom-0 w-2/3 opacity-[0.07]"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(96,165,250,1),transparent)', animation: 'scanLine 5s linear infinite' }}
                />
              </div>

              {/* Avatar — echte foto */}
              <div className="relative shrink-0">
                <img
                  src={PERSONA.photo}
                  alt={PERSONA.full}
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ border: '2px solid rgba(37,99,235,0.5)' }}
                  onError={(e) => {
                    // Fallback: initialen als de foto niet laadt
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback initialen */}
                <div
                  className="w-11 h-11 rounded-full items-center justify-center text-white text-xs font-black"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', display: 'none', border: '2px solid rgba(37,99,235,0.5)' }}
                >
                  DvdB
                </div>
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-[#060e1e]"
                  style={{ boxShadow: '0 0 7px rgba(74,222,128,0.9)' }}
                />
              </div>

              <div className="flex-grow min-w-0">
                <p className="font-bold text-white text-sm">{PERSONA.full}</p>
                <p className="text-xs text-slate-400">{PERSONA.role}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" style={{ boxShadow: '0 0 4px rgba(74,222,128,0.9)' }} />
                  <span className="text-[10px] text-green-400 font-medium">Online · Reageert direct</span>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-[9px] text-slate-500">📞 06 148 909 15</p>
                <p className="text-[9px] text-slate-500 mt-0.5">Ma–Vr 08:00–17:30</p>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.6),rgba(6,182,212,0.5),transparent)' }}
              />
            </div>

            {/* ── Messages ── */}
            <div
              className="flex-grow min-h-0 overflow-y-auto px-3 py-4 space-y-4"
              style={{ background: '#08111e', scrollbarWidth: 'thin', scrollbarColor: 'rgba(37,99,235,0.25) transparent' }}
            >
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div className={`flex gap-2.5 ${msg.from === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* Bot avatar in gesprek */}
                    {msg.from === 'bot' && (
                      <div className="w-8 h-8 rounded-full shrink-0 overflow-hidden mt-0.5" style={{ border: '1.5px solid rgba(37,99,235,0.4)' }}>
                        <img
                          src={PERSONA.photo}
                          alt="Daan"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.style.background = 'linear-gradient(135deg,#2563EB,#06B6D4)'
                            e.target.parentElement.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;height:100%;color:white;font-size:9px;font-weight:900">D</span>'
                          }}
                        />
                      </div>
                    )}
                    {/* Gebruiker avatar */}
                    {msg.from === 'user' && (
                      <div
                        className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-slate-400 text-[9px] font-black mt-0.5"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        U
                      </div>
                    )}

                    <div className={`max-w-[80%] flex flex-col gap-1.5 ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                      <div
                        className="px-4 py-2.5 rounded-2xl text-[13px]"
                        style={
                          msg.from === 'user'
                            ? { background: 'linear-gradient(135deg,#2563EB,#1d4ed8)', color: '#fff', borderBottomRightRadius: 4, boxShadow: '0 4px 16px rgba(37,99,235,0.35)' }
                            : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: '#CBD5E1', borderBottomLeftRadius: 4 }
                        }
                      >
                        {formatText(msg.text)}
                      </div>

                      {/* Quick replies — alleen laatste bot-bericht */}
                      {msg.from === 'bot' && msg.suggestions?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-0.5">
                          {msg.suggestions.map((s) => (
                            <button
                              key={s}
                              onClick={() => sendMessage(s)}
                              className="text-[11px] font-semibold px-3 py-1 rounded-full transition-all duration-200 text-blue-300"
                              style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.28)' }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,99,235,0.22)'; e.currentTarget.style.color = '#BFDBFE' }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,99,235,0.1)'; e.currentTarget.style.color = '#93C5FD' }}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}

                      <span className="text-[10px] text-slate-700 px-1">
                        {msg.from === 'bot' ? `Daan · ` : ''}{msg.time.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-2.5 items-end"
                  >
                    <div
                      className="w-8 h-8 rounded-full shrink-0 overflow-hidden"
                      style={{ border: '1.5px solid rgba(37,99,235,0.4)' }}
                    >
                      <img
                        src={PERSONA.photo}
                        alt="Daan"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.style.background = 'linear-gradient(135deg,#2563EB,#06B6D4)'
                          e.target.parentElement.style.display = 'flex'
                          e.target.parentElement.style.alignItems = 'center'
                          e.target.parentElement.style.justifyContent = 'center'
                          e.target.parentElement.innerHTML = '<span style="color:white;font-size:9px;font-weight:900">D</span>'
                        }}
                      />
                    </div>
                    <div
                      className="rounded-2xl rounded-bl-sm"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <TypingDots />
                    </div>
                    <span className="text-[10px] text-slate-600 mb-1">Daan typt...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* ── Input ── */}
            <form
              onSubmit={handleSubmit}
              className="shrink-0 flex items-center gap-2 px-3 py-3"
              style={{ background: '#060e1e', borderTop: '1px solid rgba(37,99,235,0.12)' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Typ uw vraag aan Daan..."
                disabled={typing}
                className="flex-grow text-[13px] text-slate-200 rounded-xl px-4 py-2.5 outline-none placeholder:text-slate-600 disabled:opacity-50"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(37,99,235,0.18)', transition: 'all 0.2s' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(37,99,235,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)' }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(37,99,235,0.18)'; e.target.style.boxShadow = 'none' }}
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || typing}
                whileHover={input.trim() && !typing ? { scale: 1.1 } : {}}
                whileTap={input.trim() && !typing ? { scale: 0.9 } : {}}
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 disabled:opacity-40"
                style={{ background: input.trim() && !typing ? 'linear-gradient(135deg,#2563EB,#06B6D4)' : 'rgba(255,255,255,0.04)', boxShadow: input.trim() && !typing ? '0 4px 16px rgba(37,99,235,0.4)' : 'none' }}
              >
                <svg className={`w-4 h-4 ${input.trim() && !typing ? 'text-white' : 'text-slate-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
            </form>

            {/* Footer */}
            <div
              className="shrink-0 text-center py-1.5"
              style={{ background: '#060e1e', borderTop: '1px solid rgba(255,255,255,0.03)' }}
            >
              <p className="text-[10px] text-slate-700">Gesprek met Daan van den Berg · MK Solidum Group · 06 148 909 15</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
