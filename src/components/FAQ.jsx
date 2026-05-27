import React from 'react'

const QA = [
  {
    q: 'How is this different from a physician recruiting agency?',
    a: 'An agency rents you access to their pipeline and charges a percentage of salary every time you hire from it. We build a pipeline that lives inside your practice. When we’re done, the system is yours — and the next hire costs nothing.',
  },
  {
    q: 'Who is Huntr built for?',
    a: 'Multi-physician primary care practices, independent physician groups, ACOs, and physician-led management groups in the US that expect to hire two or more physicians over the next 24 months.',
  },
  {
    q: 'Which states do you cover?',
    a: 'All fifty. Wherever your practice is licensed to operate, Huntr can build a recruitment system for it.',
  },
  {
    q: 'How quickly do hires happen?',
    a: 'Most practices see their first physician on a call within the first 30 days and a signed offer between months two and four. The system keeps producing long after that.',
  },
  {
    q: 'What if we already work with a recruiter?',
    a: 'Most of our practices still do when we start. Huntr replaces that line item gradually — every hire through your own system is one you don’t pay a commission on. After a year, most clinics retire the agency entirely.',
  },
  {
    q: 'Do you guarantee placements?',
    a: 'We guarantee the system. Whether physicians sign depends on what you offer them — compensation, autonomy, location, schedule. We work through that with you up front, and if the math doesn’t work, we’ll say so on the intro call.',
  },
]

export default function FAQ() {
  return (
    <section className="section section-paper" id="faq">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow center">Common questions</span>
          <h2 className="section-title">
            What clinic owners <span className="accent">always ask.</span>
          </h2>
        </div>

        <div className="faq">
          {QA.map((item, i) => (
            <details className="faq-item" key={item.q} open={i === 0}>
              <summary className="faq-q">
                <span>{item.q}</span>
                <span className="faq-toggle">+</span>
              </summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
