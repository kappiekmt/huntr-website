import React from 'react'

export default function Hero({ bookHref }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow"><span className="dot" /> Built for US primary care &amp; physician groups</span>
          <h1 className="hero-title">
            Giving US clinics the ability to <span className="accent">recruit their own physicians</span>
          </h1>
          <p className="hero-sub">
            Huntr builds in-house physician headhunting systems for primary care
            clinics and physician groups — so you connect with doctors directly,
            beyond Indeed, job boards, and six-figure agency retainers.
          </p>

          <div className="hero-cta-row">
            <a href={bookHref} className="btn btn-primary" target="_blank" rel="noreferrer">
              Book a 20-min intro call →
            </a>
            <a href="#how" className="btn btn-ghost">See how it works</a>
          </div>

          <div className="hero-pillars">
            <div className="hero-pillar">
              <span className="check">✓</span>
              <span>Your clinic owns the pipeline</span>
            </div>
            <div className="hero-pillar">
              <span className="check">✓</span>
              <span>Your clinic controls the outreach</span>
            </div>
            <div className="hero-pillar">
              <span className="check">✓</span>
              <span>Your clinic keeps the system</span>
            </div>
          </div>
        </div>

        <div className="hero-card" aria-hidden="true">
          <div className="hero-card-head">
            <span className="hero-card-title">Physician Pipeline · Live</span>
            <span className="hero-card-badge">This week</span>
          </div>

          <div className="metric-grid">
            <div className="metric">
              <div className="metric-label">Qualified MDs sourced</div>
              <div className="metric-value">412<span className="delta">+38</span></div>
            </div>
            <div className="metric">
              <div className="metric-label">Calls booked</div>
              <div className="metric-value">17<span className="delta">+5</span></div>
            </div>
          </div>

          <div className="physician-row">
            <div>
              <div className="physician-name">Dr. Marcus Allen, MD</div>
              <div className="physician-meta">Family Medicine · Austin, TX</div>
            </div>
            <span className="physician-tag tag-booked">Booked</span>
          </div>
          <div className="physician-row">
            <div>
              <div className="physician-name">Dr. Priya Shah, DO</div>
              <div className="physician-meta">Internal Medicine · Phoenix, AZ</div>
            </div>
            <span className="physician-tag tag-replied">Replied</span>
          </div>
          <div className="physician-row">
            <div>
              <div className="physician-name">Dr. Jordan Reyes, MD</div>
              <div className="physician-meta">Family Medicine · Charlotte, NC</div>
            </div>
            <span className="physician-tag tag-warm">Warm lead</span>
          </div>
        </div>
      </div>
    </section>
  )
}
