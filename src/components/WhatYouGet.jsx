import React from 'react'

const DELIVERABLES = [
  'A live database of every board-certified MD/DO in your service area, refreshed monthly',
  'Outbound sequences (email + LinkedIn + direct mail) that book physicians onto your calendar',
  'Conversion playbooks built around what physicians actually care about — autonomy, comp structure, call schedule, EHR',
  'A CRM that lives inside your clinic so nothing leaves with us',
  'Monthly performance reporting: pipeline, response rate, calls booked, hires',
  'Training so your office manager (not a recruiter) can run the system long-term',
]

export default function WhatYouGet({ bookHref }) {
  return (
    <section className="section section-navy" id="what-you-get">
      <div className="container split">
        <div>
          <span className="split-eyebrow">What you get</span>
          <h2>The recruitment infrastructure agencies don’t want you to have.</h2>
          <p>
            When we’re done, your clinic has its own physician pipeline,
            its own outbound machine, and a system that keeps producing hires
            long after our engagement ends — without ever cutting another check
            to a recruiter.
          </p>
          <ul className="deliverables">
            {DELIVERABLES.map((d) => (
              <li key={d}>
                <span className="check-yellow">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <a href={bookHref} className="btn btn-primary" target="_blank" rel="noreferrer">
            Book a 20-min intro call →
          </a>
        </div>

        <div className="compare-card" aria-hidden="true">
          <div className="compare-row head">
            <div>Cost per physician hire</div>
            <div className="vs" style={{ textAlign: 'center' }}>Agency</div>
            <div className="us" style={{ background: 'transparent', color: 'inherit', padding: 0 }}>Huntr</div>
          </div>
          <div className="compare-row body">
            <div className="label">Year 1 (2 hires)</div>
            <div className="vs">$80K+</div>
            <div className="us">Flat build fee</div>
          </div>
          <div className="compare-row body">
            <div className="label">Year 2 (3 hires)</div>
            <div className="vs">$120K+</div>
            <div className="us">$0</div>
          </div>
          <div className="compare-row body">
            <div className="label">Year 3 (3 hires)</div>
            <div className="vs">$120K+</div>
            <div className="us">$0</div>
          </div>
          <div className="compare-row body">
            <div className="label">Who owns the pipeline</div>
            <div className="vs">The agency</div>
            <div className="us">Your clinic</div>
          </div>
        </div>
      </div>
    </section>
  )
}
