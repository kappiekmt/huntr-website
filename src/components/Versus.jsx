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
              <li>A commission on every hire, for as long as you keep hiring</li>
              <li>The pipeline belongs to the vendor, not the practice</li>
              <li>The day the contract ends, the access ends with it</li>
              <li>The candidates are shared with the practice down the road</li>
            </ul>
          </div>
          <div className="compare-col you">
            <div className="head">With Huntr — your own system</div>
            <h3 className="title">You pay once. The system is yours.</h3>
            <ul>
              <li>A one-time build, no commission per hire</li>
              <li>The pipeline lives inside your practice, not ours</li>
              <li>The system keeps running long after our engagement ends</li>
              <li>Built only for you, never shared with another practice</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
