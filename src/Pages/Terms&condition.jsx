import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Terms.css'

const Terms = ({
  companyName = 'Your Company',
  effectiveDate = 'November 10, 2025',
}) => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <main className="termsandconditions-main">
        <header className="termsandconditions-header">
          <h1>Terms & Conditions</h1>
          <p>
            Effective Date: <time dateTime={effectiveDate}>{effectiveDate}</time>
          </p>
          <p>
            Welcome to {companyName}! These Terms & Conditions outline the rules and
            regulations for the use of our website and services.
          </p>
        </header>

        <article className="termsandconditions-article">
          <section className="termsandconditions-section">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing this website, you agree to comply with these terms and
              all applicable laws and regulations. If you do not agree, you are
              prohibited from using this site.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>2. Use License</h3>
            <ul>
              <li>
                Permission is granted to temporarily download one copy of the materials
                on this site for personal, non-commercial use only.
              </li>
              <li>
                This is a license grant, not a transfer of title, and under this license
                you may not modify or copy materials, use them commercially, or remove
                proprietary notations.
              </li>
            </ul>
          </section>

          <section className="termsandconditions-section">
            <h3>3. Disclaimer</h3>
            <p>
              All materials on {companyName}’s website are provided "as is." We make no
              warranties, expressed or implied, and hereby disclaim all other warranties,
              including implied warranties of merchantability or fitness for a
              particular purpose.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>4. Limitations</h3>
            <p>
              In no event shall {companyName} or its suppliers be liable for any damages
              arising out of the use or inability to use the materials on the site, even
              if we or an authorized representative has been notified of the possibility
              of such damage.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>5. Revisions & Errors</h3>
            <p>
              The materials appearing on {companyName}’s website could include technical,
              typographical, or photographic errors. We do not warrant that any materials
              are accurate or complete.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>6. Links</h3>
            <p>
              {companyName} is not responsible for the contents of any linked sites. The
              inclusion of any link does not imply endorsement by us.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>7. Modifications</h3>
            <p>
              We may revise these terms at any time without notice. By using this site,
              you agree to the current version of these Terms & Conditions.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>8. Governing Law</h3>
            <p>
              These terms shall be governed by and construed in accordance with the laws
              of your jurisdiction, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>9. Contact Us</h3>
            <p>
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <address>
              <strong>{companyName}</strong>
              <br />
              Email:{' '}
              <a href="mailto:legal@yourcompany.com" className="underline">
                legal@yourcompany.com
              </a>
            </address>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default Terms
