import React from 'react'

const ITEMS = [
  {
    stat: '$30K', unit: '–$60K',
    title: 'Agency fees per placement',
    body: 'Retained search firms take 20–25% of first-year salary. Hire 4 physicians this year and you’ve burned $200K+ on commissions alone.',
  },
  {
    stat: '9', unit: 'months',
    title: 'Average time-to-hire',
    body: 'Posting on Indeed, ZipRecruiter and Doximity attracts the same applicants every clinic in town is already chasing. Good physicians don’t apply — they get recruited.',
  },
  {
    stat: '83', unit: '%',
    title: 'Of physicians are passive',
    body: 'The doctors you actually want aren’t on the job market. They need to be sourced, contacted, and convinced. Your HR team doesn’t have time for that.',
  },
]

export default function Problem() {
  return (
    <section className="section section-paper" id="problem">
      <div className="container">
        <div className="section-head">
          <span className="kicker">The hiring problem</span>
          <h2 className="section-title">
            Why your last physician hire took <span className="accent">9+ months</span>
          </h2>
          <p className="section-lede">
            US clinics are stuck between two bad options: rent the pipeline from
            an agency at $30K–$60K a head, or spray-and-pray on job boards full
            of the wrong candidates. Huntr gives you a third option.
          </p>
        </div>

        <div className="problem-grid">
          {ITEMS.map((it) => (
            <div className="problem-card" key={it.title}>
              <div className="problem-stat">{it.stat}<span className="unit">{it.unit}</span></div>
              <h3 className="problem-title">{it.title}</h3>
              <p className="problem-body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
