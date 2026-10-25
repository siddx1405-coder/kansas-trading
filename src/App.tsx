import { useState } from 'react'

const base = `${import.meta.env.BASE_URL}customer/`

const services = [
  { number: '01', title: 'Curtains & Blinds', text: 'Made-to-measure curtains, sheers, roller blinds and precise installation for every kind of window.' },
  { number: '02', title: 'Sofas & Upholstery', text: 'Beautiful furniture, careful repairs and reupholstery that give well-loved pieces a refined second life.' },
  { number: '03', title: 'Carpets & Grass', text: 'Indoor carpets and durable artificial grass, professionally supplied and fitted for a seamless finish.' },
  { number: '04', title: 'UPVC Flooring', text: 'Practical, elegant flooring in contemporary wood finishes—measured, prepared and installed with care.' },
]

const projects = [
  { src: `${base}6d31cfae-273e-4e3b-a1e1-95fad1082b4b.png`, title: 'Full-height drapery', tag: 'Curtains' },
  { src: `${base}516d56b1-8fbe-460e-847e-64fa16e4bf75.png`, title: 'Garden transformation', tag: 'Grass carpet' },
  { src: `${base}3b75e74b-91da-4b7e-9d16-36131adfd090.png`, title: 'Herringbone finish', tag: 'UPVC flooring' },
  { src: `${base}79254405-a9bf-4f78-8627-5b99c5261ae0.png`, title: 'Soft layered sheers', tag: 'Curtains' },
  { src: `${base}fe370795-8305-43aa-9a06-c80cfb495d51.png`, title: 'Modern roller blinds', tag: 'Blinds' },
  { src: `${base}021cc51f-d95e-4bc8-a291-cb41228b935e.png`, title: 'Quiet luxury', tag: 'Curtains' },
]

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
const MenuIcon = ({ open }: { open: boolean }) => open
  ? <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
  : <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark">K</span>
          <span><b>KANSAS</b><small>TRADING & FURNITURE</small></span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          <a href="#services" onClick={close}>Services</a>
          <a href="#projects" onClick={close}>Our work</a>
          <a href="#about" onClick={close}>About</a>
          <a className="nav-cta nav-whatsapp" href="https://wa.me/97451500327" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a>
          <a className="nav-cta" href="#contact" onClick={close}>Contact <Arrow /></a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><MenuIcon open={menuOpen} /></button>
      </header>

      <section className="hero" id="top">
        <img src={`${base}8b362f9e-56f5-45ee-b748-b625e31dca02.png`} alt="Elegant custom curtains installed in a luxury interior" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">INTERIORS, FINISHED BEAUTIFULLY</p>
          <h1>Crafted comfort.<br /><em>Made for your space.</em></h1>
          <p className="hero-copy">Curtains, furniture, carpets and flooring—thoughtfully supplied, expertly fitted and made to last.</p>
          <a className="button light" href="#projects">Explore our work <Arrow /></a>
        </div>
        <div className="hero-note"><span>01</span><p>Custom solutions<br />from measure to fit</p></div>
      </section>

      <section className="intro" id="about">
        <p className="eyebrow dark">WELCOME TO KANSAS TRADING</p>
        <div className="intro-grid">
          <h2>Details make a room<br /><em>feel like home.</em></h2>
          <div>
            <p>We bring together beautiful materials, skilled workmanship and personal service to transform everyday spaces. From the first measurement to the final fitting, every detail is handled with care.</p>
            <a className="text-link" href="#services">Discover what we do <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-head">
          <div><p className="eyebrow dark">WHAT WE DO</p><h2>Complete interior<br /><em>finishing services.</em></h2></div>
          <p>One trusted team for the finishing touches that bring warmth, comfort and character to your space.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Enquire about ${service.title}`}><Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-head projects-head">
          <div><p className="eyebrow">SELECTED PROJECTS</p><h2>Our work,<br /><em>in real homes.</em></h2></div>
          <p>Explore a selection of recent installations, each tailored to the room and the people who live there.</p>
        </div>
        <div className="gallery">
          {projects.map((project, i) => (
            <figure className={`project p${i + 1}`} key={project.src}>
              <img src={project.src} alt={project.title} />
              <figcaption><span>{project.tag}</span><h3>{project.title}</h3></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="process">
        <p className="eyebrow dark">SIMPLE FROM START TO FINISH</p>
        <h2>From idea to installation,<br /><em>we make it effortless.</em></h2>
        <div className="steps">
          <article><span>01</span><h3>Consult</h3><p>Tell us what you need and we’ll help you choose the right style, material and finish.</p></article>
          <article><span>02</span><h3>Measure</h3><p>We take accurate measurements and prepare a clear solution tailored to your space.</p></article>
          <article><span>03</span><h3>Install</h3><p>Our team completes the work carefully, efficiently and with a clean professional finish.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-image"><img src={`${base}b4014bab-7319-463c-acb5-6a9a4e18fcae.png`} alt="Custom curtains in a bright modern home" /></div>
        <div className="contact-copy">
          <p className="eyebrow">READY TO TRANSFORM YOUR SPACE?</p>
          <h2>Let’s make something<br /><em>beautiful together.</em></h2>
          <p>Share your measurements, inspiration or requirements with the Kansas Trading team for a tailored recommendation and quote.</p>
          <div className="contact-actions" aria-label="Contact Kansas Trading">
            <a className="contact-action whatsapp" href="https://wa.me/97451500327" target="_blank" rel="noreferrer">
              <span>WhatsApp</span><small>+974 5150 0327</small>
            </a>
            <a className="contact-action whatsapp" href="https://wa.me/97455509210" target="_blank" rel="noreferrer">
              <span>WhatsApp</span><small>+974 5550 9210</small>
            </a>
            <a className="contact-action" href="tel:+97451500327">
              <span>Call</span><small>+974 5150 0327</small>
            </a>
            <a className="contact-action" href="tel:+97455509210">
              <span>Call</span><small>+974 5550 9210</small>
            </a>
            <a className="contact-action email" href="mailto:islamrafique697@gmail.com">
              <span>Email</span><small>islamrafique697@gmail.com</small>
            </a>
          </div>
          <div className="contact-meta"><span>CURTAINS</span><span>FURNITURE</span><span>CARPETS</span><span>FLOORING</span></div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">K</span><span><b>KANSAS</b><small>TRADING & FURNITURE</small></span></a>
        <p>Thoughtful interiors. Professional installation.</p>
        <p>© {new Date().getFullYear()} Kansas Trading</p>
      </footer>
    </main>
  )
}
