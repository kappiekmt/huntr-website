import React from 'react'

const STEPS = [
  {
    num: '01',
    label: 'We Build',
    title: 'A system tailored to your practice.',
    body: 'Designed around your specialty mix, your geography, and the kind of physicians your practice actually wants on the roster.',
  },
  {
    num: '02',
    label: 'You Own',
    title: 'Every component. Forever.',
    body: 'When the build is done, the system lives inside your practice. No vendor lock-in, no monthly retainer, no commission per hire.',
  },
  {
    num: '03',
    label: 'You Hire',
    title: 'On your terms, without a recruiter.',
    body: 'Physicians, hired directly into your practice — without ever writing another check to an agency or job board.',
  },
]

export default function StepsRow() {
  return (
    <section className="steps-section" id="how">
      <div className="container">
        <div className="steps-head">
          <div>
            <span className="eyebrow">The model</span>
            <h2>We build the system. <em>You own it.</em></h2>
          </div>
          <div className="tag">Built · Owned · Operated by you</div>
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
