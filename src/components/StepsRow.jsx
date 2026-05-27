import React from 'react'

const STEPS = [
  {
    num: '01',
    label: 'Build',
    title: 'Your physician market, mapped.',
    body: 'We pull every board-certified MD and DO licensed in your state, filter by specialty mix and commute radius, and refresh monthly. The list is yours from day one.',
  },
  {
    num: '02',
    label: 'Connect',
    title: 'Outbound that physicians actually open.',
    body: 'Email, LinkedIn and direct-mail sequences written for doctors — comp, autonomy, schedule, EHR — and tuned for deliverability. Calls land on your calendar, not ours.',
  },
  {
    num: '03',
    label: 'Convert',
    title: 'Hires today, a bench for the next opening.',
    body: 'Every conversation enriches the pipeline. Physicians who say “not now” stay warm — so when the next role opens, you start from a relationship, not a job post.',
  },
]

export default function StepsRow() {
  return (
    <section className="steps-section" id="how">
      <div className="container">
        <div className="steps-head">
          <div>
            <span className="eyebrow">The system</span>
            <h2>The three moves <em>your practice has to own.</em></h2>
          </div>
          <div className="tag">Build · Connect · Convert</div>
        </div>

        <div className="steps-row">
          {STEPS.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-label">{s.label}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
