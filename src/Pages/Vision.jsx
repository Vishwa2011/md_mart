import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Vision = () => {
  return (
    <>
     <Navbar />
           {/* <!-- Breadcrumb Section Start --> */}
    <section class="breadcrumb-section pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-contain">
                        <h2>Our Vision</h2>
                        <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">
                                        <i class="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item active">Our Vision</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
        {/* <!-- Breadcrumb Section End --> */}
              {/* <!-- Fresh Vegetable Section Start --> */}
    <section class="fresh-vegetable-section section-lg-space">
        <div class="container-fluid-lg">
            <div class="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
                <div class="col-xl-6 col-12">
                    <div class="row g-sm-4 g-2">
                        <div class="col-12">
                            <div class="fresh-image-2">
                                <div>
                                    <img src="https://img.freepik.com/premium-vector/online-groceries-concept-illustration_114360-2272.jpg"
                                        class="bg-img blur-up lazyload" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-12">
                    <div class="fresh-contain p-center-left">
                        <div>
                                <div class="review-title">
                            <h4>Our vision</h4>
                            <h3>To Be the Most Trusted and Customer-Centric Online Shopping Destination.</h3>
                        </div>

                            <div class="delivery-list">
                                <p class="text-content">        Our vision is to become the most trusted and customer-centric online shopping destination — 
    where people can discover anything they need with confidence and convenience.  
    We aim to build a digital marketplace that connects quality products, trusted brands, and 
    happy customers across every corner of the country.  
    <br /><br />
    At <strong>MD Mart</strong>, we look forward to creating a future where shopping is 
    smarter, faster, and more rewarding for everyone.
                                </p>

                                <ul class="delivery-box">
                                    <li>
                                        <div class="delivery-box">
                                            <div class="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" class="blur-up lazyload" alt="" />
                                            </div>

                                            <div class="delivery-detail">
                                                <h5 class="text">Free delivery for all orders</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="delivery-box">
                                            <div class="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" class="blur-up lazyload" alt="" />
                                            </div>

                                            <div class="delivery-detail">
                                                <h5 class="text">Only fresh foods</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="delivery-box">
                                            <div class="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" class="blur-up lazyload" alt="" />
                                            </div>

                                            <div class="delivery-detail">
                                                <h5 class="text">Free delivery for all orders</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="delivery-box">
                                            <div class="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" class="blur-up lazyload" alt="" />
                                            </div>

                                            <div class="delivery-detail">
                                                <h5 class="text">Only fresh foods</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Fresh Vegetable Section End --> */} 
     <Footer />
    </>
  )
}

export default Vision