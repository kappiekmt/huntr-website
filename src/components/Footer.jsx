import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              <span className="brand-mark">H</span>
              <span>Huntr</span>
            </a>
            <p className="footer-blurb">
              In-house physician recruitment systems for US primary care clinics
              and physician groups. Own your pipeline. Stop paying agencies.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#how">How it works</a></li>
              <li><a href="#what-you-get">What you get</a></li>
              <li><a href="#vs">Why Huntr</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="mailto:kasper@joindigitalventures.com">Contact</a></li>
              <li><a href="#top">About</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:kasper@joindigitalventures.com">kasper@joindigitalventures.com</a></li>
              <li><span>Kasper · Founder · Huntr</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Huntr. All rights reserved.</span>
          <span>Built for US primary care.</span>
        </div>
      </div>
    </footer>
  )
}
