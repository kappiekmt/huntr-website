import React from 'react'

function IconBuild() {
  return (
    <svg className="pc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v10l9 4" />
      <path d="M21 7v10l-9 4" />
    </svg>
  )
}
function IconConnect() {
  return (
    <svg className="pc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 20l5-9 4 7 5-12" />
      <circle cx="5" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="19" cy="6" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconConvert() {
  return (
    <svg className="pc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M14 20c0-3.3 2.7-6 6-6" />
    </svg>
  )
}

export default function Hero({ bookHref }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Physician Recruitment Systems · United States</span>

          <h1 className="hero-title">
            Giving US clinics the power to <span className="accent">recruit their own physicians.</span>
          </h1>

          <p className="hero-sub">
            We build internal recruitment systems for primary care groups — so
            you reach the doctors who never see a job board, and stop paying a
            commission to an agency on every hire.
          </p>

          <div className="hero-pillars">
            <p>Your practice owns the pipeline.</p>
            <p>Your practice runs the outreach.</p>
            <p>Your practice keeps the system.</p>
          </div>

          <a href={bookHref} className="btn btn-dark" target="_blank" rel="noreferrer">
            Book a short intro call <span className="arrow">→</span>
          </a>

          <div style={{ marginTop: 56 }}>
            <span className="dot-label">Supporting practices across the U.S.</span>
          </div>
        </div>

        <div className="process-stack" aria-hidden="true">
          <svg className="process-svg" viewBox="0 0 400 460" preserveAspectRatio="none">
            <path
              d="M 200 90 C 320 130, 320 200, 250 240 S 130 320, 200 380"
              fill="none"
              stroke="#C8941A"
              strokeWidth="1.2"
              strokeDasharray="3 6"
              opacity="0.6"
            />
          </svg>

          <div className="process-card pc-1">
            <IconBuild />
            <div className="pc-label">01 — Build</div>
            <h3 className="pc-title">Map your full physician market</h3>
            <p className="pc-body">Every board-certified MD &amp; DO in range</p>
          </div>

          <div className="process-card pc-2">
            <IconConnect />
            <div className="pc-label">02 — Connect</div>
            <h3 className="pc-title">Reach every qualified doctor directly</h3>
            <p className="pc-body">Outbound that lands, no middleman</p>
          </div>

          <div className="process-card pc-3">
            <IconConvert />
            <div className="pc-label">03 — Convert</div>
            <h3 className="pc-title">Hires today, a bench for tomorrow</h3>
            <p className="pc-body">Relationships you keep, in a system you own</p>
          </div>
        </div>
      </div>
    </section>
  )
}
