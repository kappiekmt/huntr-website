import React from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function PrivacyPolicy({ bookHref }) {
  return (
    <>
      <Nav bookHref={bookHref} homeHref="/" />
      <main className="legal">
        <div className="container legal-inner">
          <a href="/" className="legal-back">← Back to huntr</a>
          <span className="eyebrow">Legal</span>
          <h1 className="legal-title">Privacy <span className="accent">Policy</span></h1>
          <p className="legal-updated">Last updated: June 2, 2026</p>

          <p className="legal-lede">
            Huntr builds in-house physician recruitment systems for U.S. primary
            care clinics. This policy explains what information we collect when you
            visit this site or book a call with us, how we use it, and the choices
            you have.
          </p>

          <section className="legal-section">
            <h2>1. Who we are</h2>
            <p>
              "Huntr" ("we", "us", "our") operates this website. If you have any
              questions about this policy or how we handle your information, you can
              reach us at <a href="mailto:kasper@joindigitalventures.com">kasper@joindigitalventures.com</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information we collect</h2>
            <p>We keep data collection to the minimum needed to run our business:</p>
            <ul>
              <li>
                <strong>Information you give us.</strong> When you book an intro
                call, you provide details through our scheduling provider (Calendly)
                — typically your name, email address, and any notes you choose to
                share. If you email us directly, we receive whatever you include in
                that message.
              </li>
              <li>
                <strong>Usage information.</strong> Like most websites, our hosting
                provider may automatically log basic technical data such as your IP
                address, browser type, and the pages you view. This is used to keep
                the site secure and running.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How we use your information</h2>
            <ul>
              <li>To schedule, prepare for, and follow up on calls you request.</li>
              <li>To respond to your questions and provide our services.</li>
              <li>To operate, maintain, and secure this website.</li>
              <li>To comply with legal obligations.</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not use it for
              advertising to third parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Service providers</h2>
            <p>
              We rely on a small number of trusted third parties to operate this
              site and our business — for example, <strong>Calendly</strong> for
              scheduling and our website hosting provider. These providers process
              data only on our behalf and are subject to their own privacy policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data retention</h2>
            <p>
              We keep personal information only as long as needed for the purposes
              described above or as required by law. When it is no longer needed, we
              delete or anonymize it.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access, correct,
              or delete the personal information we hold about you, or to object to
              certain uses of it. To make a request, email us at{' '}
              <a href="mailto:kasper@joindigitalventures.com">kasper@joindigitalventures.com</a>{' '}
              and we will respond within a reasonable timeframe.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Security</h2>
            <p>
              We take reasonable measures to protect your information. No method of
              transmission or storage is completely secure, however, so we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will revise
              the "Last updated" date above. Material changes will be reflected on
              this page.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact</h2>
            <p>
              Questions about this policy? Email us at{' '}
              <a href="mailto:kasper@joindigitalventures.com">kasper@joindigitalventures.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
