import React from 'react'

export default function Versus() {
  return (
    <section className="section section-navy" id="vs">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow center on-dark">The shift</span>
          <h2 className="section-title">
            Stop renting your pipeline. <span className="accent">Own it.</span>
          </h2>
          <p className="section-lede">
            How most US practices hire physicians today — versus what changes
            when the recruitment system lives in-house.
          </p>
        </div>

        <div className="compare">
          <div className="compare-col">
            <div className="head">Today — agency &amp; job boards</div>
            <h3 className="title">You pay for the introduction, again and again.</h3>
            <ul>
              <li>20–25% of first-year salary, every placement</li>
              <li>Candidates are shared with the practice down the road</li>
              <li>The pipeline disappears the day you stop the contract</li>
              <li>Job boards return the same applicants every clinic gets</li>
              <li>Passive physicians — the ones you actually want — are invisible</li>
            </ul>
          </div>
          <div className="compare-col you">
            <div className="head">With Huntr — your own system</div>
            <h3 className="title">You pay once to build it, then it keeps producing.</h3>
            <ul>
              <li>A one-time build, no commission per hire</li>
              <li>Candidates are sourced and contacted only for you</li>
              <li>The database, sequences, and CRM stay with your practice</li>
              <li>Direct outreach to physicians who never apply anywhere</li>
              <li>A warm bench that compounds with every conversation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
