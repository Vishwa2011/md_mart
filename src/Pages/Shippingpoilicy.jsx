import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const ShippingPolicy = ({
  companyName = 'MD Mart',
  effectiveDate = 'November 10, 2025',
}) => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <main className="shippingpolicy-main">
        <header className="shippingpolicy-header">
          <h1>Shipping & Delivery Policy</h1>
          <p>
            Effective Date: <time dateTime={effectiveDate}>{effectiveDate}</time>
          </p>
          <p>
            Thank you for shopping with {companyName}! This Shipping & Delivery Policy
            outlines our process for handling, shipping, and delivering your orders to
            ensure a smooth shopping experience.
          </p>
        </header>

        <article className="shippingpolicy-article">
          <section className="shippingpolicy-section">
            <h3>1. Order Processing Time</h3>
            <p>
              All orders are processed within <strong>1–2 business days</strong>. Orders
              placed on weekends or public holidays will be processed on the next working
              day.
            </p>
          </section>

          <section className="shippingpolicy-section">
            <h3>2. Shipping Time & Delivery</h3>
            <p>
              Delivery time depends on your location and the shipping method chosen at
              checkout:
            </p>
            <ul>
              <li><strong>Local Delivery:</strong> 2–4 business days</li>
              <li><strong>Standard Shipping:</strong> 5–7 business days</li>
              <li><strong>Express Shipping:</strong> 1–3 business days</li>
            </ul>
            <p>
              Please note that delays can occur due to weather, logistics issues, or high
              order volume.
            </p>
          </section>

          <section className="shippingpolicy-section">
            <h3>3. Shipping Charges</h3>
            <p>
              Shipping costs are calculated during checkout based on the total order
              weight, delivery location, and chosen shipping method. Occasionally, we may
              offer <strong>free shipping promotions</strong> on eligible orders.
            </p>
          </section>

          <section className="shippingpolicy-section">
            <h3>4. Tracking Your Order</h3>
            <p>
              Once your order has been shipped, you will receive an email and/or SMS
              notification with a tracking number. You can use this tracking ID to monitor
              the delivery progress.
            </p>
          </section>

          <section className="shippingpolicy-section">
            <h3>5. International Shipping</h3>
            <p>
              Currently, {companyName} ships only within India. However, we are working on
              expanding our services to international customers in the near future.
            </p>
          </section>

          <section className="shippingpolicy-section">
            <h3>6. Delayed or Lost Shipments</h3>
            <p>
              If your package is delayed or lost in transit, please contact our support
              team immediately. We will coordinate with our courier partners to resolve
              the issue promptly.
            </p>
          </section>

          <section className="shippingpolicy-section">
            <h3>7. Incorrect Shipping Address</h3>
            <p>
              Please ensure that the shipping address provided during checkout is correct.
              {companyName} will not be responsible for orders shipped to incorrect or
              incomplete addresses provided by the customer.
            </p>
          </section>

          <section className="shippingpolicy-section">
            <h3>8. Damaged or Missing Items</h3>
            <p>
              If your order arrives damaged or items are missing, please contact us within{' '}
              <strong>48 hours</strong> of delivery with photos of the package and
              products. We will investigate and arrange for replacements or refunds as
              applicable.
            </p>
          </section>

          <section className="shippingpolicy-section">
            <h3>9. Contact Us</h3>
            <p>
              For any questions or concerns regarding shipping or delivery, feel free to
              reach out to us:
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

export default ShippingPolicy
