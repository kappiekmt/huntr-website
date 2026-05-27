import React from 'react'

export default function Hero({ bookHref }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <span className="eyebrow on-dark center">For US Primary Care · Est. 2026</span>

        <h1 className="hero-title">
          Hire the physicians who <span className="accent">never see a job board.</span>
        </h1>

        <p className="hero-sub">
          Huntr builds the in-house recruitment system your practice should already
          own — so you reach board-certified MDs and DOs directly, and stop paying
          a year of salary every time you need to fill a chair.
        </p>

        <div className="hero-cta-row">
          <a href={bookHref} className="btn btn-gold" target="_blank" rel="noreferrer">
            Book a short intro call <span className="arrow">→</span>
          </a>
          <a href="#how" className="btn btn-dark">How it works</a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item"><strong>50</strong>States covered</div>
          <div className="hero-meta-item"><strong>0%</strong>Per-hire commission</div>
          <div className="hero-meta-item"><strong>100%</strong>Pipeline ownership</div>
        </div>
      </div>
    </section>
  )
}
