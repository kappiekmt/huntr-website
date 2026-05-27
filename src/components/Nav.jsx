import React from 'react'

export default function Nav({ bookHref }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          huntr<span className="brand-dot" />
        </a>
        <a href={bookHref} className="btn btn-dark" target="_blank" rel="noreferrer">
          Book intro call <span className="arrow">→</span>
        </a>
      </div>
    </header>
  )
}
