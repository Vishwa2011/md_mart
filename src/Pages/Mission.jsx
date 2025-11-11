import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Mission = () => {
  return (
    <>
<Navbar />
      {/* <!-- Breadcrumb Section Start --> */}
    <section class="breadcrumb-section pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-contain">
                        <h2>Mission</h2>
                        <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">
                                        <i class="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item active">Mission</li>
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
                            <h4>Our Mission</h4>
                            <h3>Delivering Quality, Value, and Convenience to Every Customer.</h3>
                        </div>

                            <div class="delivery-list">
                                <p class="text-content">     Our mission is to redefine the online shopping experience by offering a wide range of high-quality products 
    at affordable prices — all from the comfort of your home.  
    We aim to bring convenience, trust, and satisfaction to every customer by delivering genuine products, 
    fast shipping, and friendly service.  
    <br /><br />
    At <strong>MD Mart</strong>, we believe shopping should be simple, enjoyable, and reliable — 
    that’s why we’re committed to innovation, customer happiness, and excellence in every order.
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

export default Mission