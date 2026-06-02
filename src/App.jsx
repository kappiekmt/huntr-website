import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import StepsRow from './components/StepsRow.jsx'
import LogoBar from './components/LogoBar.jsx'
import Manifesto from './components/Manifesto.jsx'
import Versus from './components/Versus.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'

const BOOK = 'https://calendly.com/gethuntr-info/30min'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/privacy') {
    return <PrivacyPolicy bookHref={BOOK} />
  }

  return (
    <>
      <Nav bookHref={BOOK} />
      <Hero bookHref={BOOK} />
      <StepsRow />
      <LogoBar />
      <Manifesto />
      <Versus />
      <FAQ />
      <FinalCTA bookHref={BOOK} />
      <Footer />
    </>
  )
}
