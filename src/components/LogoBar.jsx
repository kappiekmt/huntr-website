import React from 'react'

const LOGOS = ['Cedar Family Health', 'Westbrook Medical', 'Summit Physician Group', 'Northstar Health']

export default function LogoBar() {
  return (
    <section className="logobar">
      <div className="container">
        <div className="logobar-label">Trusted by clinics &amp; physician groups across the United States</div>
        <div className="logobar-row">
          {LOGOS.map((l) => (
            <div className="logo-placeholder" key={l}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
