import React from 'react'

export default function Nav({ bookHref }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">H</span>
          <span>Huntr</span>
        </a>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#what-you-get">What you get</a>
          <a href="#vs">Why Huntr</a>
          <a href="#faq">FAQ</a>
          <a href={bookHref} className="nav-cta" target="_blank" rel="noreferrer">Book intro call</a>
        </nav>
      </div>
    </header>
  )
}
