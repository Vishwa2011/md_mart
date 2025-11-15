import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <Navbar />
        {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>About Us</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">About Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}
      {/* <!-- Fresh Vegetable Section Start --> */}
    <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
            <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
                <div className="col-xl-6 col-12">
                    <div className="row g-sm-4 g-2">
                     <div className="col-12">
                            <div className="fresh-image-2">
                              <div>
                                <img
                                  src="../assets/images/Img1.jpg"
                                  alt="Fresh Image"
                                  className="resimg"
                                />
                              </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <div className="fresh-contain p-center-left">
                        <div>
                            <div className="review-title">
                                <h4>About Us</h4>
                                <h2>Your Trusted Online Shopping Destination</h2>
                            </div>

                            <div className="delivery-list">
                                <p className="text-content " style={{textAlign:'justify'}} >
                                    Founded in 2019, our journey began with a simple vision — to make quality products accessible and affordable for everyone.
                                     What started as a small online store has now grown into a trusted eCommerce brand serving thousands of happy customers across the country.
                                     <br /><br />
                                     We believe shopping should be easy, enjoyable, and reliable. That’s why we handpick every product with care,
                                     ensuring the best quality and unbeatable value. From everyday essentials to the latest trends,
                                     we constantly update our collection with new arrivals every month, keeping your shopping experience fresh and exciting.
                                     <br /><br />
                                     Our dedicated team works 24/7 to bring innovation, style, and convenience to your doorstep.
                                     With secure payment options, fast delivery, and a responsive support team,
                                     we’re not just an online store — we’re your trusted shopping partner.
                                </p>
                                <ul className="delivery-box">
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Free delivery for all orders</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Top Quality Products</h5>
                                            </div>
                                        </div>
                                    </li>
                                            
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Genuine & Authentic Items</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Trusted & Verified</h5>
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
      {/* <!-- Client Section Start --> */}
    <section className="client-section section-lg-space">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="about-us-title text-center">
                        <h4>What We Do</h4>
                        <h2 className="center">We are Trusted by Clients</h2>
                    </div>

                    <div className="slider-3_1 product-wrapper">
                        <div>
                            <div className="clint-contain">
                                <div className="client-icon">
                                    <img src="../assets/svg/3/work.svg" className="blur-up lazyload" alt="" />
                                </div>
                                <h2>10+</h2>
                                <h4>Years in Business</h4>
                                <p>We’ve been serving happy customers for over a decade — delivering quality
                                products, unbeatable deals, and excellent service every step of the way.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="clint-contain">
                                <div className="client-icon">
                                    <img src="../assets/svg/3/buy.svg" className="blur-up lazyload" alt="" />
                                </div>
                                <h2>80K +</h2>
                                <h4>Products Sold</h4>
                                <p>We’ve successfully sold over 80,000 products worldwide, delivering quality,
      trust, and value to our growing family of happy customers every day.</p>
                            </div>
                        </div>

                        <div>
                            <div className="clint-contain">
                                <div className="client-icon">
                                    <img src="../assets/svg/3/user.svg" className="blur-up lazyload" alt="" />
                                </div>
                                <h2>90%</h2>
                                <h4>Happy Customers</h4>
                                <p>With 90% customer satisfaction, we take pride in delivering a seamless shopping
      experience, top-quality products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Client Section End --> */}
    
    {/* <!-- Team Section Start --> */}
    <section className="team-section section-lg-space">
        <div className="container-fluid-lg">
            <div className="about-us-title text-center">
                <h4 className="text-content">Our Creative Team</h4>
                <h2 className="center">MD  team member</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="slider-user product-wrapper">
                        <div>
                            <div className="team-box">
                                <div className="team-image">
                                    <img src="../assets/images/CEO.jpg" className="img-fluid blur-up lazyload"
                                        alt="" />
                                </div>

                                <div className="team-name">
                                    <h3>Rohit Sharma</h3>
                                    <h5>Founder & CEO</h5>
                                    <p>Passionate about building seamless shopping experiences and leading the team toward innovation.</p>
                                    <ul className="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" className="fb-bg">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://in.pinterest.com/" className="pint-bg">
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/" className="twitter-bg">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" className="insta-bg">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="team-box">
                                <div className="team-image">
                                    <img src="../assets/images/operation.jpg" className="img-fluid blur-up lazyload"
                                        alt="" />
                                </div>

                                <div className="team-name">
                                    <h3>Priya Mehta</h3>
                                    <h5>Operations Manager</h5>
                                    <p>Ensures smooth operations and logistics, keeping everything from inventory to delivery
        running efficiently for a seamless customer experience.</p>
                                    <ul className="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" className="fb-bg">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://in.pinterest.com/" className="pint-bg">
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/" className="twitter-bg">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" className="insta-bg">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="team-box">
                                <div className="team-image">
                                    <img src="../assets/images/marketing.jpg" className="img-fluid blur-up lazyload"
                                        alt="" />
                                </div>

                                <div className="team-name">
                                    <h3>Vikram Yadav</h3>
                                    <h5>Marketing Head</h5>
                                    <p> Leads our marketing and branding efforts, ensuring our customers are aware of the latest
        products, deals, and promotions across all channels.</p>
                                    <ul className="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" className="fb-bg">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://in.pinterest.com/" className="pint-bg">
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/" className="twitter-bg">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" className="insta-bg">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="team-box">
                                <div className="team-image">
                                    <img src="../assets/images/logistics.jpg" className="img-fluid blur-up lazyload"
                                        alt="" />
                                </div>

                                <div className="team-name">
                                    <h3>Raj</h3>
                                    <h5>Logistics Head</h5>
                                    <p>Manages shipping, warehousing, and delivery operations to ensure that every order reaches
    our customers accurately and on time.</p>
                                    <ul className="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" className="fb-bg">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://in.pinterest.com/" className="pint-bg">
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/" className="twitter-bg">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" className="insta-bg">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="team-box">
                                <div className="team-image">
                                    <img src="../assets/images/product-manager.jpg" className="img-fluid blur-up lazyload"
                                        alt="" />
                                </div>

                                <div className="team-name">
                                    <h3>Aarav Patel</h3>
                                    <h5>Product Manager</h5>
                                    <p>Oversees product selection and development, ensuring our customers get high-quality, trendy
    products that meet their needs.</p>
                                    <ul className="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" className="fb-bg">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://in.pinterest.com/" className="pint-bg">
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/" className="twitter-bg">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" className="insta-bg">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Team Section End --> */}
    



    {/* <!-- Review Section Start --> */}
    <section className="review-section section-lg-space">
        <div className="container-fluid">
            <div className="about-us-title text-center">
                <h4 className="text-content">Latest Testimonials</h4>
                <h2 className="center">What people says</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="slider-4-half product-wrapper">
                        <div>
                            <div className="reviewer-box">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Hear From Our Team</h3>

                                <p>"Building this platform has been an incredible journey. Every challenge has helped us
        grow, and seeing our customers happy is the ultimate reward."</p>

                                <div className="reviewer-profile">
                                    <div className="reviewer-image">
                                        <img src="../assets/images/CEO.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </div>

                                    <div className="reviewer-name">
                                        <h4>Rohit Sharma</h4>
                                        <h6>Founder & CEO</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviewer-box">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Smooth Operations, Happy Customers</h3>

                                <p> "Ensuring smooth operations and timely deliveries keeps our customers satisfied.
      I take pride in making everything run like clockwork."</p>
                                <div className="reviewer-profile">
                                    <div className="reviewer-image">
                                        <img src="../assets/images/operation.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </div>

                                    <div className="reviewer-name">
                                        <h4>Priya Mehta</h4>
                                        <h6>Operation Manager</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviewer-box">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Creative Marketing That Connects</h3>

                                <p>"Marketing is all about connecting with our customers. I love finding creative ways
      to showcase our products and keep our audience engaged."</p>
                                <div className="reviewer-profile">
                                    <div className="reviewer-image">
                                        <img src="../assets/images/marketing.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </div>

                                    <div className="reviewer-name">
                                        <h4>Vikram Yadav</h4>
                                        <h6>Marketing Head</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviewer-box">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Helping Customers Every Day</h3>

                                <p>"Helping our customers solve problems quickly is what I enjoy most. Their satisfaction
      drives everything we do."</p>
                                <div className="reviewer-profile">
                                    <div className="reviewer-image">
                                        <img src="../assets/images/customer-support.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </div>

                                    <div className="reviewer-name">
                                        <h4>Neha Sharma</h4>
                                        <h6>Customer Support Lead</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviewer-box">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Curating Products Our Customers Love</h3>

                                <p>"I’m passionate about curating products that our customers love. Seeing them excited
      about new arrivals is the best part of my job."</p>
                                <div className="reviewer-profile">
                                    <div className="reviewer-image">
                                        <img src="../assets/images/product-manager.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </div>

                                    <div className="reviewer-name">
                                        <h4>Aarav Patel</h4>
                                        <h6>Product Manager</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviewer-box">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Delivering Excellence Every Time</h3>

                                <p> "From warehouse to doorstep, making sure each order reaches our customers safely
      and on time is my mission every day."</p>

                                <div className="reviewer-profile">
                                    <div className="reviewer-image">
                                        <img src="../assets/images/logistics.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </div>

                                    <div className="reviewer-name">
                                        <h4>Raj</h4>
                                        <h6>Logistics Head</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviewer-box">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Enhancing Every Customer Journey</h3>

                                <p>"I strive to make every customer interaction seamless and enjoyable. From browsing to checkout,
    our goal is to create a shopping experience that delights every time."</p>
                                <div className="reviewer-profile">
                                    <div className="reviewer-image">
                                        <img src="../assets/images/customer-exp-manager.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </div>

                                    <div className="reviewer-name">
                                        <h4>Priya Verma</h4>
                                        <h6>Customer Experience Manager</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviewer-box">
                                <i className="fa-solid fa-quote-right"></i>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Ensuring Every Product is Perfect</h3>

                                <p>"I make sure every product meets our high standards before it reaches our customers. Quality
    is the heart of what we do."</p>
                                <div className="reviewer-profile">
                                    <div className="reviewer-image">
                                        <img src="../assets/images/QA-manager.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </div>

                                    <div className="reviewer-name">
                                        <h4>Karan Joshi </h4>
                                        <h6>Quality Assurance Manager</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Review Section End --> */}
    
    {/* <!-- Blog Section Start --> */}
    <section className="section-lg-space">
        <div className="container-fluid-lg">
            <div className="about-us-title text-center">
                <h4 className="text-content">Our Blog</h4>
                <h2 className="center">Our Latest Blog</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="slider-5 ratio_87">
                        <div>
                            <div className="blog-box">
                                <div className="blog-box-image">
                                    <div className="blog-image">
                                        <a href="/Blogdetails" className="rounded-3">
                                            <img src="/assets/images/picture/about1.jpg" className="bg-img blur-up lazyload"
                                                alt="" />
                                        </a>
                                    </div>
                                </div>

                                <a href="/Blogdetails" className="blog-detail d-block">
                                    <h6>Farmart</h6>
                                    <h5>Fresh Juices</h5>
                                </a>
                            </div>
                        </div>
   <div>
                            <div className="blog-box">
                                <div className="blog-box-image">
                                    <div className="blog-image">
                                        <a href="/Blogdetails" className="rounded-3">
                                            <img src="/assets/images/picture/about3.jpg" className="bg-img blur-up lazyload"
                                                alt="" />
                                        </a>
                                    </div>
                                </div>

                                <a href="/Blogdetails" className="blog-detail d-block">
                                    <h6>Vegetables</h6>
                                    <h5>Fresh Vegetables</h5>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="blog-box">
                                <div className="blog-box-image">
                                    <div className="blog-image">
                                        <a href="/Blogdetails" className="rounded-3">
                                            <img src="/assets/images/picture/about2.jpg" className="bg-img blur-up lazyload"
                                                alt="" />
                                        </a>
                                    </div>
                                </div>

                                <a href="/Blogdetails" className="blog-detail d-block">
                                    <h6>Fruits</h6>
                                    <h5>Fresh Fruits</h5>
                                </a>
                            </div>
                        </div>

                     

                        <div>
                            <div className="blog-box">
                                <div className="blog-box-image">
                                    <div className="blog-image">
                                        <a href="/Blogdetails" className="rounded-3">
                                            <img src="../assets/images/fresh-milk.jpg" className="bg-img blur-up lazyload"
                                                alt="" />
                                        </a>
                                    </div>
                                </div>

                                <a href="/Blogdetails" className="blog-detail d-block">
                                    <h6>Milk</h6>
                                    <h5>Fresh Milk</h5>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="blog-box">
                                <div className="blog-image">
                                    <a href="/Blogdetails" className="rounded-3">
                                        <img src="../assets/images/soda.jpg" className="bg-img blur-up lazyload"
                                            alt="" />
                                    </a>
                                </div>

                                <a href="/Blogdetails" className="blog-detail d-block">
                                    <h6>soda</h6>
                                    <h5>Soda 500ml</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}
    <Footer />
    </>
  )
}

export default About