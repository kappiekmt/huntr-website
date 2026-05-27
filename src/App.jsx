import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import LogoBar from './components/LogoBar.jsx'
import Problem from './components/Problem.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhatYouGet from './components/WhatYouGet.jsx'
import VersusTable from './components/VersusTable.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

const CALENDLY = 'https://calendly.com/kasper-joindigitalventures/huntr-intro'

export default function App() {
  return (
    <>
      <Nav bookHref={CALENDLY} />
      <Hero bookHref={CALENDLY} />
      <LogoBar />
      <Problem />
      <HowItWorks />
      <WhatYouGet bookHref={CALENDLY} />
      <VersusTable />
      <FAQ />
      <FinalCTA bookHref={CALENDLY} />
      <Footer />
    </>
  )
}
