import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>
          <a href="#top" className="brand">
            <span className="brand-mark">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="8.2" />
                <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
                <line x1="12" y1="0.5" x2="12" y2="3.4" />
                <line x1="12" y1="20.6" x2="12" y2="23.5" />
                <line x1="0.5" y1="12" x2="3.4" y2="12" />
                <line x1="20.6" y1="12" x2="23.5" y2="12" />
              </svg>
            </span>
            <span>huntr</span>
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
