import React from 'react'

const QA = [
  {
    q: 'How is this different from a physician recruiting agency?',
    a: 'Agencies rent you their pipeline and charge 20–25% of first-year salary every time you hire — typically $30K to $60K per placement. We build the pipeline inside your clinic. After the engagement, the database, the outbound system, and the relationships stay with you. You hire the next physician for $0 in commission.',
  },
  {
    q: 'What size clinic is this for?',
    a: 'Huntr is built for US primary care clinics and physician groups that plan to hire 2+ physicians over the next 24 months — typically multi-provider practices, independent physician groups, ACOs, and DSO-style management groups in family medicine, internal medicine, and pediatrics.',
  },
  {
    q: 'Which states do you cover?',
    a: 'All 50 states. Our sourcing pulls from the national NPI Registry and individual state license boards, so your pipeline is always physicians licensed where you actually practice.',
  },
  {
    q: 'How long until our first hire?',
    a: 'Most clinics see their first physician interview within 30 days of launch and a signed offer within 60–120 days. Pipeline volume scales from there as the system compounds.',
  },
  {
    q: 'What if we already work with a recruiter?',
    a: 'Most of our clients still do, at first. Huntr replaces the recruiter slowly — every hire that comes through your in-house system is one you don’t pay a commission on. After 12 months, most clinics stop using their agency entirely.',
  },
  {
    q: 'Do you guarantee placements?',
    a: 'We guarantee the system: a sourced market, working outbound, booked physician calls. Hires are a function of your offer (comp, location, autonomy) — which is exactly why we build the playbooks with you up front. If physicians won’t join your clinic, no system will fix that, and we’ll tell you on the intro call.',
  },
]

export default function FAQ() {
  return (
    <section className="section section-cream" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="kicker">FAQ</span>
          <h2 className="section-title">
            Questions clinic owners <span className="accent">always ask</span>
          </h2>
        </div>

        <div className="faq">
          {QA.map((item, i) => (
            <details className="faq-item" key={item.q} open={i === 0}>
              <summary className="faq-q">
                <span>{item.q}</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
