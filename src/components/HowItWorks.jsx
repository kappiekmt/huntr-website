import React from 'react'

const STEPS = [
  {
    label: 'Build',
    title: 'Map every qualified physician in your market',
    body: 'We pull the full universe of board-certified MDs and DOs in your specialty mix, licensed in your state, within commuting distance of your clinic.',
    bullets: [
      'NPI Registry + state license boards',
      'Specialty, sub-specialty, board status',
      'Filtered for residency stage & seniority',
    ],
  },
  {
    label: 'Connect',
    title: 'Multi-channel outbound that books physicians',
    body: 'Email, LinkedIn, direct mail and SMS — sequenced and personalized. Messaging written for physicians, not nurses or front-office admins.',
    bullets: [
      'Sender warm-up + deliverability dialed in',
      'Cadences proven on US physicians',
      'Calls booked straight to your calendar',
    ],
  },
  {
    label: 'Convert',
    title: 'Hires today, a warm bench for tomorrow',
    body: 'Every conversation enriches your pipeline. Even physicians who say "not now" stay nurtured — so the next time you have an opening, you don’t start from zero.',
    bullets: [
      'Conversion playbooks (comp, autonomy, EHR)',
      'CRM lives in your clinic, not ours',
      'No retainer, no per-hire commission',
    ],
  },
]

export default function HowItWorks() {
  return (
    <section className="section section-cream" id="how">
      <div className="container">
        <div className="section-head">
          <span className="kicker">How it works</span>
          <h2 className="section-title">
            A recruitment system <span className="accent">your clinic owns</span>
          </h2>
          <p className="section-lede">
            Three phases. Built once, runs forever. The infrastructure — and the
            relationships — stay with your practice.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={s.label}>
              <div className="step-num">{i + 1}</div>
              <div className="step-label">{s.label}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="step-list">
                {s.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
