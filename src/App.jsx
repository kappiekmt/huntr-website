import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import StepsRow from './components/StepsRow.jsx'
import LogoBar from './components/LogoBar.jsx'
import Manifesto from './components/Manifesto.jsx'
import Capabilities from './components/Capabilities.jsx'
import Versus from './components/Versus.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

const BOOK = 'https://calendly.com/kasper-joindigitalventures/huntr-intro'

export default function App() {
  return (
    <>
      <Nav bookHref={BOOK} />
      <Hero bookHref={BOOK} />
      <StepsRow />
      <LogoBar />
      <Manifesto />
      <Capabilities />
      <Versus />
      <FAQ />
      <FinalCTA bookHref={BOOK} />
      <Footer />
    </>
  )
}
