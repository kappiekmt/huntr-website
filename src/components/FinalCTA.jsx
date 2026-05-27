import React from 'react'

export default function FinalCTA({ bookHref }) {
  return (
    <section className="cta-final">
      <div className="container">
        <h2>
          Stop paying recruiters. <span className="accent">Own your physician pipeline.</span>
        </h2>
        <p>
          20-minute intro call. We’ll map what a Huntr build would look like for
          your clinic — your market size, hireable physicians within commute, and
          what it would cost vs. what you’re paying today.
        </p>
        <a href={bookHref} className="btn btn-primary" target="_blank" rel="noreferrer">
          Book a 20-min intro call →
        </a>
      </div>
    </section>
  )
}
