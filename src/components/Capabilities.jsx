import React from 'react'

const ITEMS = [
  {
    num: '01',
    title: 'A live map of every qualified physician in your market',
    body: 'Sourced from the NPI Registry and state medical boards, filtered by specialty, board status, and distance from your clinic. Refreshed continuously, not scraped once.',
  },
  {
    num: '02',
    title: 'Outbound sequences written for physicians, not HR',
    body: 'Email, LinkedIn, and direct mail cadences that speak to autonomy, comp structure, call schedule, and EHR — the things doctors actually weigh — not generic recruiter copy.',
  },
  {
    num: '03',
    title: 'A booking system that sits inside your practice',
    body: 'Calls land on your calendar. Conversations stay in your inbox. The CRM lives on your side of the wall, so the pipeline never belongs to anyone but you.',
  },
  {
    num: '04',
    title: 'A bench that compounds, not a vendor you re-hire',
    body: 'Every physician who says “not now” stays warm. The next time you open a role, you start from a relationship — not from zero, and not from a new agency contract.',
  },
]

export default function Capabilities() {
  return (
    <section className="section section-paper-3" id="how">
      <div className="container">
        <div className="section-head left">
          <span className="eyebrow">What we build</span>
          <h2 className="section-title">
            A recruitment engine that <span className="accent">lives in your practice.</span>
          </h2>
          <p className="section-lede">
            Built once, run forever. After the engagement, the system, the data,
            and the relationships stay with you — not with us, and not with a
            recruiter holding your candidates hostage.
          </p>
        </div>

        <div className="cap-list">
          {ITEMS.map((it) => (
            <div className="cap-item" key={it.num}>
              <span className="cap-num">{it.num}</span>
              <h3 className="cap-title">{it.title}</h3>
              <p className="cap-body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
