import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Termscondition = ({
  companyName = 'Fastkart',
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
            regulations for the use of our website and services. By accessing this site,
            you agree to these terms in full.
          </p>
        </header>

        <article className="termsandconditions-article">

          <section className="termsandconditions-section">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By using {companyName}’s website, you confirm that you accept these terms
              and agree to comply with them. If you disagree with any part of the terms,
              please do not use our services.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>2. User Accounts</h3>
            <p>
              To access certain features of the website, you may be required to create
              an account. You are responsible for maintaining the confidentiality of
              your login credentials and for all activities under your account.
            </p>
            <ul>
              <li>You must provide accurate, current, and complete information.</li>
              <li>
                {companyName} reserves the right to suspend or terminate your account
                if any information provided is inaccurate or misleading.
              </li>
            </ul>
          </section>

          <section className="termsandconditions-section">
            <h3>3. Purchases & Payments</h3>
            <p>
              All purchases made through {companyName} are subject to product availability
              and confirmation of the order price. We accept various online payment methods.
            </p>
            <ul>
              <li>Prices are subject to change without prior notice.</li>
              <li>
                Payment must be completed before an order is processed and shipped.
              </li>
              <li>
                You agree to provide valid payment information and authorize us to
                charge the specified amount.
              </li>
            </ul>
          </section>

          <section className="termsandconditions-section">
            <h3>4. Shipping & Delivery</h3>
            <p>
              We strive to deliver your products on time, but delivery times may vary
              due to factors beyond our control. Any estimated delivery date is not
              guaranteed.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>5. Returns & Refunds</h3>
            <p>
              If you are not satisfied with your purchase, you may request a return or
              exchange within the time frame specified in our Return Policy. The product
              must be unused and in its original condition.
            </p>
            <p>
              Refunds will be processed using the original payment method, subject to
              verification and approval.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>6. Intellectual Property Rights</h3>
            <p>
              All content on this site, including text, graphics, logos, images, and
              software, is the property of {companyName} or its content suppliers and
              protected by copyright and trademark laws.
            </p>
            <p>
              You may not reproduce, distribute, or exploit any part of the site
              without written permission from {companyName}.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>7. Prohibited Activities</h3>
            <ul>
              <li>Using the site for any unlawful purpose.</li>
              <li>
                Attempting to gain unauthorized access to our systems or data.
              </li>
              <li>
                Posting or transmitting any harmful, offensive, or misleading content.
              </li>
              <li>Disrupting or interfering with site functionality or security.</li>
            </ul>
          </section>

          <section className="termsandconditions-section">
            <h3>8. Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites that are not owned
              or controlled by {companyName}. We are not responsible for the content,
              policies, or practices of such websites.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>9. Disclaimer</h3>
            <p>
              The materials on {companyName}’s website are provided "as is" without
              warranties of any kind. We make no representations or guarantees regarding
              the accuracy or reliability of the information.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>10. Limitation of Liability</h3>
            <p>
              In no event shall {companyName} or its affiliates be liable for any direct,
              indirect, or consequential damages resulting from your use of the website
              or services.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>11. Modifications to Terms</h3>
            <p>
              We may update or revise these Terms & Conditions at any time. Updated
              versions will be posted on this page with a revised effective date.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>12. Governing Law</h3>
            <p>
              These terms shall be governed by and interpreted in accordance with the
              laws of India. Any disputes will be subject to the jurisdiction of courts
              located in Surat, Gujarat.
            </p>
          </section>

          <section className="termsandconditions-section">
            <h3>13. Contact Us</h3>
            <p>
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <address>
              <strong>{companyName}</strong>
              <br />
              Email:{' '}
              <a href="mailto:fastkart@gmail.com" className="underline">
                fastkart@gmail.com
              </a>
              <br />
              Address: 123 Market Street, Surat, Gujarat, India
            </address>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default Termscondition
