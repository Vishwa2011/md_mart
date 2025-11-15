import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const ReturnPolicy = ({
  companyName = 'MD Mart',
  effectiveDate = 'November 10, 2025',
}) => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <main className="returnpolicy-main">
        <header className="returnpolicy-header">
          <h1>Return & Refund Policy</h1>
          <p>
            Effective Date: <time dateTime={effectiveDate}>{effectiveDate}</time>
          </p>
          <p>
            At {companyName}, we strive to ensure that you are fully satisfied with your
            purchase. This Return & Refund Policy outlines the terms and conditions
            under which returns and refunds are processed.
          </p>
        </header>

        <article className="returnpolicy-article">
          <section className="returnpolicy-section">
            <h3>1. Eligibility for Returns</h3>
            <p>
              You may request a return within <strong>7 days</strong> of receiving your
              order if:
            </p>
            <ul>
              <li>The item is defective, damaged, or incorrect.</li>
              <li>The product is unused, unwashed, and in its original packaging.</li>
              <li>Proof of purchase (invoice or order ID) is available.</li>
            </ul>
          </section>

          <section className="returnpolicy-section">
            <h3>2. Non-Returnable Items</h3>
            <p>
              Certain products cannot be returned due to hygiene or safety reasons,
              including:
            </p>
            <ul>
              <li>Perishable goods (like groceries, food items, etc.)</li>
              <li>Personal care and hygiene products</li>
              <li>Customized or personalized products</li>
            </ul>
          </section>

          <section className="returnpolicy-section">
            <h3>3. Return Process</h3>
            <p>
              To initiate a return, please contact our support team at{' '}
              <a href="mailto:mdmart.superstore@gmail.com" className="underline">
                mdmart.superstore@gmail.com
              </a>{' '}
              with your order details and reason for return.
            </p>
            <p>
              Once approved, you will receive instructions for shipping the product back.
              Items must be returned in their original condition.
            </p>
          </section>

          <section className="returnpolicy-section">
            <h3>4. Refund Process</h3>
            <p>
              Refunds will be processed after we receive and inspect the returned
              product. Approved refunds will be credited to your original payment
              method within <strong>5–10 business days</strong>.
            </p>
          </section>

          <section className="returnpolicy-section">
            <h3>5. Late or Missing Refunds</h3>
            <p>
              If you haven’t received a refund yet, first check your bank account again.
              Then contact your credit card company or bank, as it may take some time for
              your refund to be officially posted.
            </p>
          </section>

          <section className="returnpolicy-section">
            <h3>6. Exchange Policy</h3>
            <p>
              We only replace items if they are defective or damaged. If you need to
              exchange an item, contact us at{' '}
              <a href="mailto:mdmart.superstore@gmail.com" className="underline">
                mdmart.superstore@gmail.com
              </a>{' '}
              with your order number and details.
            </p>
          </section>

          <section className="returnpolicy-section">
            <h3>7. Cancellation Policy</h3>
            <p>
              Orders can be canceled before they are shipped. Once dispatched, the order
              can only be processed through our standard return procedure.
            </p>
          </section>

          <section className="returnpolicy-section">
            <h3>8. Contact Us</h3>
            <p>
              For any questions about our Return & Refund Policy, feel free to contact us:
            </p>
            <address>
              <strong>{companyName}</strong>
              <br />
              Email:{' '}
              <a href="mailto:mdmart.superstore@gmail.com" className="underline">
                mdmart.superstore@gmail.com
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

export default ReturnPolicy
