import React from 'react'

const LOGOS = [
  'Cedar Family Health',
  'Westbrook Medical',
  'BlueRidge Primary Care',
  'Summit Physician Group',
  'Northstar Health Partners',
]

export default function LogoBar() {
  return (
    <section className="logobar">
      <div className="container">
        <div className="logobar-label">Built for primary care groups across the United States</div>
        <div className="logobar-row">
          {LOGOS.map((l) => (
            <div className="logo-placeholder" key={l}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
