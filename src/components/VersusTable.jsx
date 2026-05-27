import React from 'react'

const ROWS = [
  ['Pipeline ownership',     'The agency keeps it', 'Job board keeps the data', 'You own it forever'],
  ['Cost per hire',          '$30K–$60K commission', '$500/month + low quality',  'One-time build fee'],
  ['Reaches passive MDs',    'Sometimes',            'Almost never',              'Yes, by design'],
  ['Speed to first hire',    '4–9 months',           '3–12 months (or never)',    '60–120 days'],
  ['Works after engagement', 'Stops the day you stop paying', 'Stops when you cancel', 'Keeps running'],
]

export default function VersusTable() {
  return (
    <section className="section section-paper" id="vs">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Why Huntr</span>
          <h2 className="section-title">
            Stop renting your pipeline. <span className="accent">Own it.</span>
          </h2>
          <p className="section-lede">
            How Huntr compares to the two options most US clinics default to.
          </p>
        </div>

        <div className="compare-card" style={{ maxWidth: 980, margin: '0 auto' }}>
          <div className="compare-row head" style={{ gridTemplateColumns: '1.3fr 1fr 1fr 1fr' }}>
            <div></div>
            <div className="vs">Recruiting agency</div>
            <div className="vs">Indeed / ZipRecruiter</div>
            <div className="vs" style={{ color: 'var(--navy-800)' }}>Huntr</div>
          </div>
          {ROWS.map(([label, a, b, c]) => (
            <div className="compare-row body" key={label} style={{ gridTemplateColumns: '1.3fr 1fr 1fr 1fr' }}>
              <div className="label">{label}</div>
              <div className="vs">{a}</div>
              <div className="vs">{b}</div>
              <div className="us">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
