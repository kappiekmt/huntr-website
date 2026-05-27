import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>
          <a href="#top" className="brand">
            huntr<span className="brand-dot" />
          </a>
          <p className="footer-tag">
            Helping US clinics take control of physician hiring — without
            agencies or job boards.
          </p>
        </div>
        <div className="footer-copy">
          © {year} Huntr · Built for U.S. primary care
        </div>
      </div>
    </footer>
  )
}
