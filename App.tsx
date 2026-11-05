import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Compass, Menu, Orbit, Search, Sparkles, Telescope, X } from 'lucide-react'
import Starfield from './components/Starfield'
import { planets } from './data/planets'

export default function App() {
  const [activePlanet, setActivePlanet] = useState('Earth')
  const [menuOpen, setMenuOpen] = useState(false)
  const selected = planets.find(p => p.name === activePlanet) ?? planets[2]

  const scrollToPlanets = () => document.getElementById('planets')?.scrollIntoView({ behavior: 'smooth' })

  return <main>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <Starfield />
    <header className="topbar">
      <a className="brand" href="#" aria-label="Universe X home"><span className="brand-mark"><Orbit size={19} /></span> UNIVERSE<span className="brand-x">X</span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a>
        <a href="#planets" onClick={() => setMenuOpen(false)}>Solar system</a>
        <a href="#mission" onClick={() => setMenuOpen(false)}>Our mission</a>
      </nav>
      <a className="top-cta" href="#planets">Start exploring <ArrowRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section className="hero" id="explore">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <span className="live-dot" /> YOUR COSMIC JOURNEY STARTS HERE
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }}>
          EXPLORE<br /><span>BEYOND</span><br />THE KNOWN<span className="period">.</span>
        </motion.h1>
        <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>
          A new perspective on our cosmic neighbourhood. Discover strange worlds, distant wonders and the science that connects them.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>
          <button className="primary-button" onClick={scrollToPlanets}>Begin your journey <ArrowRight size={17} /></button>
          <a className="text-link" href="#mission"><span className="play-icon">↗</span> Discover Universe X</a>
        </motion.div>
        <div className="hero-meta"><span>01 / INFINITE POSSIBILITIES</span><span>MADE FOR THE CURIOUS</span></div>
      </div>
      <motion.div className="planet-stage" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: .2 }}>
        <div className="orbit orbit-a" /><div className="orbit orbit-b" />
        <div className="planet-glow" />
        <div className="hero-planet"><div className="planet-shade" /><div className="planet-highlight" /></div>
        <div className="moon moon-one" /><div className="moon moon-two" />
        <div className="planet-label label-top"><span>CELESTIAL BODY / 003</span><b>EARTH</b></div>
        <div className="planet-label label-bottom"><span>149.6 MILLION KM</span><b>OUR HOME PLANET</b></div>
        <div className="coordinate">α 00h 42m 44s<br />δ +41° 16′ 9″</div>
      </motion.div>
      <button className="scroll-cue" onClick={scrollToPlanets}><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></button>
    </section>

    <section className="intro-strip" id="mission">
      <div><span className="section-kicker">A UNIVERSE OF DISCOVERY</span><h2>Curiosity has<br />no <em>gravity.</em></h2></div>
      <p>Space is not just somewhere we look. It is a story we are part of. Universe X brings the wonders of astronomy closer through interactive experiences, clear explanations and a little cosmic perspective.</p>
      <div className="strip-icon"><Telescope size={34} strokeWidth={1} /></div>
    </section>

    <section className="planet-section" id="planets">
      <div className="section-heading">
        <div><span className="section-kicker">THE NEIGHBOURHOOD</span><h2>Our solar <em>system.</em></h2></div>
        <span className="section-count">01 — 08 <Orbit size={17} /></span>
      </div>
      <div className="planet-layout">
        <div className="planet-list">
          {planets.map((planet, i) => <button key={planet.name} className={activePlanet === planet.name ? 'planet-row active' : 'planet-row'} onClick={() => setActivePlanet(planet.name)}>
            <span className="planet-index">0{i + 1}</span><span className="planet-dot" style={{ background: planet.color, boxShadow: `0 0 16px ${planet.color}80` }} /><span className="planet-name">{planet.name}</span><span className="planet-type">{planet.type}</span><ArrowRight className="row-arrow" size={16} />
          </button>)}
        </div>
        <motion.div className="planet-info" key={selected.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
          <div className="info-top"><span>PLANET PROFILE / {String(planets.indexOf(selected) + 1).padStart(2, '0')}</span><span className="info-status"><i /> DATA PREVIEW</span></div>
          <div className="info-planet-wrap"><div className="info-planet" style={{ '--planet-color': selected.color } as React.CSSProperties} /><span className="info-orbit" /></div>
          <div className="info-content"><span className="section-kicker">{selected.type}</span><h3>{selected.name}<span>.</span></h3><p>{selected.description}</p>
            <div className="planet-stats"><div><span>FROM THE SUN</span><b>{selected.distance}</b></div><div><span>DIAMETER</span><b>{selected.diameter}</b></div></div>
          </div>
        </motion.div>
      </div>
      <div className="planet-footnote"><Sparkles size={15} /> Select a world to preview its profile. Detailed planetary exploration is coming in the next release.</div>
    </section>

    <section className="coming-section">
      <div className="coming-copy"><span className="section-kicker">THE JOURNEY CONTINUES</span><h2>There is more<br />out <em>there.</em></h2><p>Galaxies, cosmic mysteries, historic missions and the incredible science of our universe. Your next discovery is waiting.</p><a href="#explore" className="text-link">Back to the beginning <ArrowRight size={16} /></a></div>
      <div className="coming-cards">
        <article className="coming-card galaxy-card"><div className="card-orb" /><span>02 / DEEP SPACE</span><b>Galaxy<br />explorer</b><small>COMING NEXT</small></article>
        <article className="coming-card mystery-card"><div className="card-hole" /><span>03 / THE UNKNOWN</span><b>Cosmic<br />mysteries</b><small>COMING NEXT</small></article>
      </div>
    </section>

    <footer><a className="brand" href="#"><span className="brand-mark"><Orbit size={17} /></span> UNIVERSE<span className="brand-x">X</span></a><span>© 2026 UNIVERSE X · CREATED BY ARPAN GOSWAMI</span><span>THE COSMOS IS CALLING.</span></footer>
  </main>
}