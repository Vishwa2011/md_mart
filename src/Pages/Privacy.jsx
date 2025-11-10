import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Privacy = ({
  companyName = 'Your Company',
  effectiveDate = 'November 10, 2025',
}) => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* <!-- Breadcrumb Section Start --> */}
    <section class="breadcrumb-section pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-contain">
                        <h2>Privacy Policy</h2>
                        <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">
                                        <i class="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item active">Privacy Policy</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
        {/* <!-- Breadcrumb Section End --> */}
      <main className="privacypolicy-main min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
        <header className="privacypolicy-header max-w-4xl mx-auto mb-8">
          <div className="privacypolicy-header-box p-6 rounded-2xl ">
            <h1 className="privacypolicy-title text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
            <p className="privacypolicy-date mt-2 text-sm text-gray-600">
              Effective date: <time dateTime={effectiveDate}>{effectiveDate}</time>
            </p>
            <p className="privacypolicy-intro mt-4 text-gray-700">
              {companyName} respects your privacy and is committed to protecting your
              personal data. This policy explains what we collect, why we collect it,
              how we use it, and the rights you have over your information.
            </p>
          </div>
        </header>

        <article id="main-content" className="privacypolicy-article max-w-4xl mx-auto space-y-6">
          <section className="privacypolicy-section bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="privacypolicy-heading text-xl font-semibold">1. Data we collect</h3>
            <p className="privacypolicy-text mt-3 text-gray-700">
              We collect information that you provide directly and information
              collected automatically when you use our services.
            </p>
            <ul className="privacypolicy-list list-disc list-inside mt-3 text-gray-700 space-y-2">
              <li>Name, email, phone number, address, and payment information.</li>
              <li>Automatically collected data such as IP, device, and usage details.</li>
              <li>Information from third-party sources such as payment gateways or social media.</li>
            </ul>
          </section>

          <section className="privacypolicy-section bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="privacypolicy-heading text-xl font-semibold">2. How we use your data</h3>
            <ul className="privacypolicy-list list-disc list-inside mt-3 text-gray-700 space-y-2">
              <li>To provide, maintain, and improve our services.</li>
              <li>To process transactions and communicate with you.</li>
              <li>To detect and prevent fraudulent or unauthorized activity.</li>
              <li>To personalize your experience and offer relevant promotions.</li>
            </ul>
          </section>

          <section className="privacypolicy-section bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="privacypolicy-heading text-xl font-semibold">3. Sharing & Disclosure</h3>
            <p className="privacypolicy-text mt-3 text-gray-700">
              We do not sell your data. We may share it with trusted service providers, legal authorities, or as required by law.
            </p>
          </section>

          <section className="privacypolicy-section bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="privacypolicy-heading text-xl font-semibold">4. Cookies & Tracking</h3>
            <p className="privacypolicy-text mt-3 text-gray-700">
              We use cookies to enhance your experience. You can manage cookie preferences in your browser settings.
            </p>
          </section>

          <section className="privacypolicy-section bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="privacypolicy-heading text-xl font-semibold">5. Security</h3>
            <p className="privacypolicy-text mt-3 text-gray-700">
              We take reasonable measures to protect your personal information but cannot guarantee 100% security.
            </p>
          </section>

          <section className="privacypolicy-section bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="privacypolicy-heading text-xl font-semibold">6. Your Rights</h3>
            <p className="privacypolicy-text mt-3 text-gray-700">
              You have the right to access, update, or delete your data. Contact us if you wish to exercise these rights.
            </p>
          </section>

          <section className="privacypolicy-section bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="privacypolicy-heading text-xl font-semibold">7. Changes to this Policy</h3>
            <p className="privacypolicy-text mt-3 text-gray-700">
              We may update this policy occasionally. Please review it periodically for updates.
            </p>
          </section>

          <section className="privacypolicy-section bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="privacypolicy-heading text-xl font-semibold">8. Contact Us</h3>
            <p className="privacypolicy-text mt-3 text-gray-700">
              If you have any questions about this Privacy Policy, contact us at:
            </p>
            <address className="privacypolicy-address not-italic mt-3 text-gray-700">
              <strong>{companyName}</strong>
              <br />
              Email: <a href="mailto:privacy@yourcompany.com" className="privacypolicy-email underline">privacy@yourcompany.com</a>
            </address>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default Privacy
