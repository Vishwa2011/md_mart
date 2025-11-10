import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Faq = () => {
  return (
    <>
    <Navbar />
    
    {/* <!-- Breadcrumb Section Start --> */}
    <section class="faq-breadcrumb pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-contain">
                        <h2>Help Center</h2>
                        <p>We are glad having you here looking for the answer. As our team hardly working on the
                            product, feel free to ask any questions. We Believe only your feedback might move us
                            forward.</p>
                        <div class="faq-form-tag">
                            <div class="input-group">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="search" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com" />
                                <div class="dropdown">
                                    <button class="btn btn-md faq-dropdown-button dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown">All
                                        Product <i class="fa-solid fa-angle-down ms-2"></i></button>
                                    <ul class="dropdown-menu faq-dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Faq Question section Start --> */}
    <section class="faq-contain">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="slider-4-2 product-wrapper">
                        <div>
                            <div class="faq-top-box">
                                <div class="faq-box-icon">
                                    <img src="../assets/images/inner-page/faq/start.png" class="blur-up lazyload"
                                        alt="" />
                                </div>

                                <div class="faq-box-contain">
                                    <h3>Getting Started</h3>
                                    <p>Find quick answers about orders, shipping, returns, and your account here.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="faq-top-box">
                                <div class="faq-box-icon">
                                    <img src="../assets/images/inner-page/faq/help.png" class="blur-up lazyload" alt="" />
                                </div>

                                <div class="faq-box-contain">
                                    <h3>Sales Question</h3>
                                    <p>
                                        Have questions about pricing, discounts, or bulk orders? 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="faq-top-box">
                                <div class="faq-box-icon">
                                    <img src="../assets/images/inner-page/faq/price.png" class="blur-up lazyload"
                                        alt="" />
                                </div>

                                <div class="faq-box-contain">
                                    <h3>Pricing & Plans</h3>
                                    <p>About our pricing options, membership benefits, and exclusive subscription plans.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="faq-top-box">
                                <div class="faq-box-icon">
                                    <img src="../assets/images/inner-page/faq/contact.png" class="blur-up lazyload"
                                        alt="" />
                                </div>

                                <div class="faq-box-contain">
                                    <h3>Support Contact</h3>
                                    <p>Need help? Contact our team anytime via the <a href="/Contact" class="theme-color text-decoration-underline">Contact Page</a> .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Faq Question section End --> */}

    {/* <!-- Faq Section Start --> */}
    <section class="faq-box-contain section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-xl-5">
                    <div class="faq-contain">
                        <h2>Frequently Asked Questions</h2>
                        <p>We are answering most frequent questions. No worries if you not find exact one. You can find
                            out more by searching or continuing clicking button below or directly <a
                                href="/Contact" class="theme-color text-decoration-underline">contact our
                                support.</a></p>
                    </div>
                </div>

                <div class="col-xl-7">
                    <div class="faq-accordion">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne">
                                        What is MD Mart and what do we offer? <i
                                            class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            <strong>MD Mart</strong> is a modern eCommerce platform designed to make your daily shopping experience easier, faster, and more convenient. 
                                            From groceries and household items to personal care and lifestyle products — we bring everything you need right to your doorstep.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo">
                                         How do I place an order on your website? <i
                                            class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                         <p>
                                            Placing an order is simple! Just browse through our products, add your desired items to the cart, 
                                            proceed to checkout, fill in your shipping details, and make a secure payment using any of our supported methods.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree">
                                       What payment methods do you accept? <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>We accept all major payment options including Credit/Debit Cards, UPI, Net Banking, Wallets, and Cash on Delivery (COD) 
                                        depending on your delivery location.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour">
                                        How long will it take to deliver my order? <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Delivery times depend on your location and product availability. 
                                        Generally, we deliver within <strong>2-5 business days</strong>. 
                                        You’ll receive regular updates via SMS or email once your order is dispatched.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive">
                                        How can I track my order? <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p> Once your order is shipped, we’ll send you a tracking link via email or SMS. 
                                        You can also log in to your account and view the real-time status of your order from the “My Orders” section.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSix">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix">
                                        What is your return and refund policy? <i
                                            class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>If you’re not satisfied with your purchase, you can request a return or replacement within 
                                        <strong>7 days</strong> of delivery. Refunds will be processed once the item passes quality inspection. 
                                        Please refer to our <a href="/Return">Return Policy</a> page for more details.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSeven">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven">
                                        Is my personal information secure? <i
                                        class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Absolutely! We take your privacy seriously. 
                                        All your personal and payment information is encrypted and protected using the latest security standards. 
                                        Learn more in our <a href="/Privacy">Privacy Policy</a></p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingEight">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight">
                                         Do you offer discounts or loyalty programs? <i
                                            class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseEight" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Yes! We frequently offer seasonal discounts, promo codes, and loyalty rewards for our regular customers. 
                                        Stay updated by subscribing to our newsletter or following us on social media.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingNine">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine">
                                        How can I contact customer support? <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseNine" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>You can reach our support team through the <a href="/contact">Contact Us</a> page, 
                                        email us at <strong>support@mdmart.com</strong>, or call our helpline between <strong>9 AM to 9 PM</strong>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Faq Section End --> */}
    <Footer />
    </>
  )
}

export default Faq