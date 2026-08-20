import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const contactInfo = [
  {
    label: 'Telefoon',
    value: '06 148 909 15',
    href: 'tel:0614890915',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
  },
  {
    label: 'E-mailadres',
    value: 'mkgroup@mksolidumgroup.nl',
    href: 'mailto:mkgroup@mksolidumgroup.nl',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
  },
  {
    label: 'Adres',
    value: 'Sterrenhof 10, 3723WR Bilthoven',
    href: null,
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
  },
  {
    label: 'Openingstijden',
    value: 'Ma\u2013Vr: 08:00\u201317:30',
    href: null,
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
]

function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #020817 0%, #0A1628 55%, #0F2044 100%)' }}>
        <div className="absolute inset-0 dot-pattern" />
        <div className="container-main relative z-10">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4 block">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> / Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">Neem contact op</h1>
          <p className="text-slate-300 max-w-lg">Wij staan klaar om u te helpen. Neem vrijblijvend contact op — wij reageren binnen één werkdag.</p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-24 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Contactgegevens</span>
              <h2 className="text-3xl font-black font-raleway text-slate-900 mb-6 leading-tight">
                Hoe kunt u ons bereiken?
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                MK Solidum Group bedient u vanuit twee divisies: MK Infra en MK Transport. Of het nu gaat om netwerk aanleg, netwerkbeheer of medisch vervoer — wij helpen u graag.
              </p>

              <div className="space-y-4 mb-10">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-200 transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{c.label}</p>
                      {c.href
                        ? <a href={c.href} className="font-semibold text-slate-800 hover:text-blue-600 transition-colors">{c.value}</a>
                        : <p className="font-semibold text-slate-800">{c.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-br from-slate-900 to-navy-800 rounded-2xl p-6" style={{ background: 'linear-gradient(135deg,#0A1628,#0F2044)' }}>
                <div className="text-3xl font-black text-blue-400 leading-none mb-3">&ldquo;</div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  MK Solidum Group — twee divisies, één betrouwbare partner. Onze kracht ligt in het volledig ontzorgen van onze klanten.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                    MK
                  </div>
                  <span className="text-slate-400 text-xs font-semibold">— MK Solidum Group team</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map area */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container-main">
          <h3 className="text-xl font-black font-raleway text-slate-900 mb-6 text-center">Onze locatie</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 border border-slate-200">
            <iframe
              title="MK Solidum Group locatie — Sterrenhof 10, Bilthoven"
              src="https://maps.google.com/maps?q=Sterrenhof+10,+3723WR+Bilthoven,+Nederland&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-slate-500 text-sm mt-3">
            Sterrenhof 10, 3723WR Bilthoven &mdash;{' '}
            <a
              href="https://maps.google.com/?q=Sterrenhof+10,+3723WR+Bilthoven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
