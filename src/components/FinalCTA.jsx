import React from 'react'

export default function FinalCTA({ bookHref }) {
  return (
    <section className="cta-final">
      <div className="container">
        <span className="eyebrow center on-dark">Twenty minutes</span>
        <h2>
          Build the physician pipeline <em>you should already own.</em>
        </h2>
        <p>
          A short intro call. We’ll map what your market looks like, how many
          hireable physicians sit inside your commute radius, and what a Huntr
          build would cost versus what you’re spending on recruiters today.
        </p>
        <a href={bookHref} className="btn btn-gold" target="_blank" rel="noreferrer">
          Book a short intro call <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}
