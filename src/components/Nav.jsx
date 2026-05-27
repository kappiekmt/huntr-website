import React from 'react'

function CrosshairMark({ size = 22 }) {
  return (
    <span className="brand-mark">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="8.2" />
        <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
        <line x1="12" y1="0.5" x2="12" y2="3.4" />
        <line x1="12" y1="20.6" x2="12" y2="23.5" />
        <line x1="0.5" y1="12" x2="3.4" y2="12" />
        <line x1="20.6" y1="12" x2="23.5" y2="12" />
      </svg>
    </span>
  )
}

export default function Nav({ bookHref }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <CrosshairMark />
          <span>huntr</span>
        </a>
        <a href={bookHref} className="btn btn-gold" target="_blank" rel="noreferrer">
          Book intro call <span className="arrow">→</span>
        </a>
      </div>
    </header>
  )
}

export { CrosshairMark }
