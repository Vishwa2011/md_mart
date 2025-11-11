import React from 'react'
import Navbar from './Navbar'
import Newsletter from '../component/Newsletter'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <Navbar />
            {/* <!-- home section start --> */}
<sectio

  className="home-section-2 home-section-small section-b-space"
  style={{ position: "relative", zIndex: 1 }}
>
    <div className="container-fluid-lg">
        <div className="row g-4">
            {/* LEFT MAIN BANNER */}
            <div className="col-xxl-6 col-md-8">
                <div className="home-contain h-100 position-relative" style={{ position: "relative" }}>
                    <img
                        src="../assets/images/Hero-img.jpg"
                        className="img-fluid bg-img blur-up lazyload"
                        alt="Image Size : 780 X 534"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    {/* overlay */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.4)",
                            zIndex: 1,
                        }}
                    ></div>

                    <div
                        className="home-detail home-width p-center-left"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "10%",
                            transform: "translateY(-50%)",
                            zIndex: 2,
                            color: "white",
                        }}
                    >
                        <div>
                            <h6
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    letterSpacing: "2px",
                                    color: "#a8e063",
                                }}
                            >
                                ORGANIC
                            </h6>
                            <h1
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "48px",
                                    margin: "10px 0",
                                }}
                            >
                                100% Fresh
                            </h1>
                            <h3
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 400,
                                    fontSize: "24px",
                                }}
                            >
                                Fruit & Vegetables
                            </h3>
                            <p
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    marginTop: "10px",
                                    color:'#fff'
                                }}
                            >
                                Free shipping on all your order. we deliver you enjoy
                            </p>
                            <a href="/Shop">
                                <button
                                    className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontWeight: 500,
                                        fontSize: "15px",
                                        backgroundColor: "#a8e063",
                                        color: "#000",
                                        border: "none",
                                        padding: "10px 25px",
                                        borderRadius: "6px",
                                        marginTop: "15px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Shop Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* MIDDLE BANNER */}
            <div className="col-xxl-3 col-md-4 ratio_medium d-md-block d-none">
                <div className="home-contain home-small h-100 position-relative" style={{ position: "relative" }}>
                    <img
                        src="../assets/images/Banner1.jpg"
                        className="img-fluid bg-img blur-up lazyload"
                        alt="Image Size : 375 X 534"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.4)",
                            zIndex: 1,
                        }}
                    ></div>

                    <div
                        className="home-detail text-center p-top-center w-100 text-white"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                            color: "white",
                        }}
                    >
                        <div>
                            <h4
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 600,
                                }}
                            >
                                Fresh & 100% Organic
                            </h4>
                            <h5
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 400,
                                }}
                            >
                                farmer's market
                            </h5>
                            <a href="/Shop">
                                <button
                                    className="btn bg-white theme-color mt-3 home-button mx-auto btn-2"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontWeight: 500,
                                        fontSize: "15px",
                                        backgroundColor: "#fff",
                                        color: "#000",
                                        border: "none",
                                        padding: "10px 25px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Shop Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE 2 SMALL BANNERS */}
            <div className="col-xxl-3 ratio_65 d-xxl-block d-none">
                <div className="row g-3">
                    {/* BANNER 2 */}
                    <div className="col-xxl-12 col-sm-6">
                        <div className="home-contain position-relative" style={{ position: "relative" }}>
                            <a href="/Shop">
                                <img
                                    src="../assets/images/Banner2.jpg"
                                    className="img-fluid bg-img blur-up lazyload"
                                    alt="Image Size : 375 X 252"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </a>
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                    zIndex: 1,
                                }}
                            ></div>
                            <div
                                className="home-detail text-white p-center text-center"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 2,
                                    color: "white",
                                }}
                            >
                                {/* <div>
                                    <h4
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Organic Lifestyle
                                    </h4>
                                    <h5
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 400,
                                        }}
                                    >
                                        Best Weekend Sales
                                    </h5>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* BANNER 3 */}
                    <div className="col-xxl-12 col-sm-6">
                        <div className="home-contain position-relative" style={{ position: "relative" }}>
                            <a href="/Shop">
                                <img
                                    src="../assets/images/Banner3.jpg"
                                    className="img-fluid bg-img blur-up lazyload"
                                    alt="Image Size : 375 X 252"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </a>
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                    zIndex: 1,
                                }}
                            ></div>
                            <div
                                className="home-detail text-white w-50 p-center-left home-p-sm"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "10%",
                                    transform: "translateY(-50%)",
                                    zIndex: 2,
                                    color: "white",
                                }}
                            >
                                {/* <div>
                                    <h4
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Safe food saves lives
                                    </h4>
                                    <h5
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 400,
                                        }}
                                    >
                                        Discount Offer
                                    </h5>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</sectio>

    {/* <!-- Home Section End --> */}

     {/* <!-- Category Section Start --> */}
    <section class="category-section-2">
        <div class="container-fluid-lg">
            <div class="title">
                <h2>Shop By Categories</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="category-slider arrow-slider">
                        <div>
                            <div class="shop-category-box border-0 wow fadeIn">
                                <a href="/Shop" class="circle-1">
                                    <img src="../assets/images/oils.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 97 X 86" />
                                </a>
                                <div class="category-name">
                                    <h6>Oils, Refined & Ghee</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.05s">
                                <a href="/Shop" class="circle-2">
                                    <img src="../assets/images/rice.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 97 X 86" />
                                </a>
                                <div class="category-name">
                                    <h6>Rice, Flour & Grains</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.1s">
                                <a href="/Shop" class="circle-3">
                                    <img src="../assets/images/food.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 97 X 86" />
                                </a>
                                <div class="category-name">
                                    <h6>Food Cupboard</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.15s">
                                <a href="/Shop" class="circle-4">
                                    <img src="../assets/images/dals.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 97 X 86" />
                                </a>
                                <div class="category-name">
                                    <h6>Dals & Pulses</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.2s">
                                <a href="/Shop" class="circle-4">
                                    <img src="../assets/images/drinks.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 97 X 86" />
                                </a>
                                <div class="category-name">
                                    <h6>Drinks & Beverages</h6>
                                </div>
                            </div>
                        </div>

                        {/* <div>
                            <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.25s">
                                <a href="/Shop" class="circle-1">
                                    <img src="../assets/images/fresh-fruits.png" class="img-fluid blur-up lazyload"
                                        alt="" />
                                </a>
                                <div class="category-name">
                                    <h6>Fresh Fruits & Vegetables</h6>
                                </div>
                            </div>
                        </div> */}

                        <div>
                            <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.3s">
                                <a href="/Shop" class="circle-2">
                                    <img src="../assets/images/ready-to-eat.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 97 X 86" />
                                </a>
                                <div class="category-name">
                                    <h6>Ready to eat Meals</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.35s">
                                <a href="/Shop" class="circle-3">
                                    <img src="../assets/images/instant-mixes.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 97 X 86" />
                                </a>
                                <div class="category-name">
                                    <h6>Instant Mixes</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.4s">
                                <a href="/Shop" class="circle-4">
                                    <img src="../assets/images/rice.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 97 X 86" />
                                </a>
                                <div class="category-name">
                                    <h6>Rice, Flour & Grains</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Category Section End --> */}

        {/* <!-- Value Section Start --> */}
    <section>
        <div class="container-fluid-lg">
            <div class="title">
                <h2>Best Value</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="three-slider arrow-slider ratio_65">
                        <div>
                            <div class="offer-banner hover-effect">
                                <img src="../assets/images/Banner4.jpg" class="img-fluid bg-img blur-up lazyload"
                                    alt="Image Size : 510 X 288" />
                                <div class="banner-detail">
                                    <h5 class="theme-color">Buy more, Save more</h5>
                                    <h6>Fresh Grocery</h6>
                                </div>
                                <div class="offer-box">
                                       <a href="/Shop">
                                       
                                    <button 
                                        class="btn-category btn theme-bg-color text-white">View Offer</button>
                                       </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="offer-banner hover-effect">
                                <img src="../assets/images/Banner5.jpg" class="img-fluid bg-img blur-up lazyload"
                                    alt="Image Size : 510 X 288" />
                                <div class="banner-detail">
                                    <h5 class="theme-color">Save More!</h5>
                                    <h6>Fresh Dairy Products</h6>
                                </div>
                                <div class="offer-box">
                                       <a href="/Shop">
                                       
                                    <button 
                                        class="btn-category btn theme-bg-color text-white">View Offer</button>
                                       </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="offer-banner hover-effect">
                                <img src="../assets/images/Banner6.jpg" class="img-fluid bg-img blur-up lazyload"
                                    alt="Image Size : 510 X 288" />
                                <div class="banner-detail">
                                    <h5 class="theme-color">Hot Deals!</h5>
                                    <h6>Groceries & Daily Essentials</h6>
                                </div>
                                <div class="offer-box">
                                       <a href="/Shop">
                                       
                                    <button
                                        class="btn-category btn theme-bg-color text-white">View Offer</button>
                                       </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="offer-banner hover-effect">
                                <img src="../assets/images/Banner7.jpg" class="img-fluid bg-img blur-up lazyload"
                                    alt="Image Size : 510 X 288" />
                                <div class="banner-detail">
                                    <h5 class="theme-color">Buy more, Save more</h5>
                                    <h6>Groceries & Daily Essentials</h6>
                                </div>
                                <div class="offer-box">
                                       <a href="/Shop">
                                       
                                    <button 
                                        class="btn-category btn theme-bg-color text-white">View
                                        Offer</button>
                                       </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Value Section End --> */}



        {/* <!-- Deal Section Start --> */}
    <section class="deal-section">
        <div class="container-fluid-lg">
            <div class="title">
                <h2>Deal Of The Day</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="three-slider-1 arrow-slider">
                        <div>
                            <div class="deal-box wow fadeInUp">
                                <a href="/Shop" class="category-image order-sm-2">
                                    <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 183 X 171" />
                                </a>

                                <div class="deal-detail order-sm-1">
                                    <button class="buy-box btn theme-bg-color text-white btn-cart">
                                        <i class="iconly-Buy icli m-0"></i>
                                    </button>
                                    <div class="hot-deal">
                                        <span>Hot Deals</span>
                                    </div>
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Shop" class="text-title">
                                        <h5>Noodles</h5>
                                    </a>
                                    <h5 class="price">₹70.21 <span>₹65.00</span></h5>
                                    <div class="progress custom-progressbar">
                                        <div class="progress-bar" style={{width: "50"}} role="progressbar"></div>
                                    </div>
                                    <h4 class="item">Sold: <span>30 Items</span></h4>
                                    <h4 class="offer">Hurry up offer end in</h4>
                                    <div class="timer" id="clockdiv-4" data-hours="1" data-minutes="2" data-seconds="3">
                                      <ul>
        <li>
            <div class="counter">
                <div class="days"><h6>0</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="hours"><h6>00</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="minutes"><h6>00</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="seconds"><h6>00</h6></div>
            </div>
        </li>
    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="deal-box wow fadeInUp" data-wow-delay="0.05s">
                                <a href="/Shop" class="category-image order-sm-2">
                                    <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 183 X 171" />
                                </a>

                                <div class="deal-detail order-sm-1">
                                    <button class="buy-box btn theme-bg-color text-white btn-cart">
                                        <i class="iconly-Buy icli m-0"></i>
                                    </button>
                                    <div class="hot-deal">
                                        <span>Hot Deals</span>
                                    </div>
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Shop" class="text-title">
                                        <h5>Butter</h5>
                                    </a>
                                    <h5 class="price">₹70.21 <span>₹65.00</span></h5>
                                    <div class="progress custom-progressbar">
                                        <div class="progress-bar" style={{width: "50"}} role="progressbar"></div>
                                    </div>
                                    <h4 class="item">Sold: <span>30 Items</span></h4>
                                    <h4 class="offer">Hurry up offer end in</h4>
                                    <div class="timer" id="clockdiv-1" data-hours="1" data-minutes="2" data-seconds="3">
                                      <ul>
        <li>
            <div class="counter">
                <div class="days"><h6>0</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="hours"><h6>00</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="minutes"><h6>00</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="seconds"><h6>00</h6></div>
            </div>
        </li>
    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="deal-box wow fadeInUp" data-wow-delay="0.1s">
                                <a href="/Shop" class="category-image order-sm-2">
                                    <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid blur-up lazyload"
                                        alt="Image Size : 183 X 171" />
                                </a>

                                <div class="deal-detail order-sm-1">
                                    <button class="buy-box btn theme-bg-color text-white btn-cart">
                                        <i class="iconly-Buy icli m-0"></i>
                                    </button>
                                    <div class="hot-deal">
                                        <span>Hot Deals</span>
                                    </div>
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Shop" class="text-title">
                                        <h5>cheese</h5>
                                    </a>
                                    <h5 class="price">₹70.21 <span>₹65.00</span></h5>
                                    <div class="progress custom-progressbar">
                                        <div class="progress-bar" style={{width: "50"}} role="progressbar"></div>
                                    </div>
                                    <h4 class="item">Sold: <span>30 Items</span></h4>
                                    <h4 class="offer">Hurry up offer end in</h4>
                                    <div class="timer" id="clockdiv-2" data-hours="1" data-minutes="2" data-seconds="3">
                                        <ul>
        <li>
            <div class="counter">
                <div class="days"><h6>0</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="hours"><h6>00</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="minutes"><h6>00</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="seconds"><h6>00</h6></div>
            </div>
        </li>
    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="deal-box wow fadeInUp" data-wow-delay="0.15s">
                                <div class="category-image order-sm-2">
                                    <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                </div>

                                <div class="deal-detail order-sm-1">
                                    <button class="buy-box btn theme-bg-color text-white btn-cart">
                                        <i class="iconly-Buy icli m-0"></i>
                                    </button>
                                    <div class="hot-deal">
                                        <span>Hot Deals</span>
                                    </div>
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Shop" class="text-title">
                                        <h5>Noodles</h5>
                                    </a>
                                    <h5 class="price">₹70.21 <span>₹65.00</span></h5>
                                    <div class="progress custom-progressbar">
                                        <div class="progress-bar" style={{width: "50"}} role="progressbar"></div>
                                    </div>
                                    <h4 class="item">Sold: <span>30 Items</span></h4>
                                    <h4 class="offer">Hurry up offer end in</h4>
                                    <div class="timer" id="clockdiv-3" data-hours="1" data-minutes="2" data-seconds="3">
                                     <ul>
        <li>
            <div class="counter">
                <div class="days"><h6>0</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="hours"><h6>00</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="minutes"><h6>00</h6></div>
            </div>
        </li>
        <li>
            <div class="counter">
                <div class="seconds"><h6>00</h6></div>
            </div>
        </li>
    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Deal Section End --> */}


      {/* <!-- Product Section Start --> */}
    <section class="product-section">
        <div class="container-fluid-lg">
            <div class="title title-flex-2">
                <h2>Our Products</h2>
                <ul class="nav nav-tabs tab-style-color-2 tab-style-color" id="myTab">
                    <li class="nav-item">
                        <button class="nav-link btn active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all"
                            type="button">All</button>
                    </li>

                    <li class="nav-item">
                        <button class="nav-link btn" id="cooking-tab" data-bs-toggle="tab" data-bs-target="#cooking"
                            type="button"> Groceries & Daily Essentials</button>
                    </li>

                    <li class="nav-item">
                        <button class="nav-link btn" id="fruits-tab" data-bs-toggle="tab" data-bs-target="#fruits"
                            type="button">Groceries & Daily Essentials</button>
                    </li>

                    <li class="nav-item">
                        <button class="nav-link btn" id="beverage-tab" data-bs-toggle="tab" data-bs-target="#beverage"
                            type="button">Beverage</button>
                    </li>

                    <li class="nav-item">
                        <button class="nav-link btn" id="dairy-tab" data-bs-toggle="tab" data-bs-target="#dairy"
                            type="button">Dairy</button>
                    </li>
                </ul>
            </div>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="all" role="tabpanel">
                    <div class="row g-8">
                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Noodles</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.05s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Candy</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <div class="discount">
                                            <label>50%</label>
                                        </div>

                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Ketchup</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.15s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Water</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <div class="discount">
                                            <label>-25%</label>
                                        </div>

                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/5.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Shampoo</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.25s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/6.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Tea</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/7.jpg" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Mayo</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.35s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <div class="discount">
                                            <label>-25%</label>
                                        </div>

                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/8.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Jam</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>









                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Bread</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.45s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">coffee</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <div class="discount">
                                            <label>50%</label>
                                        </div>

                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">pasta</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.55s">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <div class="discount">
                                            <label>-25%</label>
                                        </div>

                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Cookies</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="cooking" role="tabpanel">
                    <div class="row g-8">
                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Butter</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Butter</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">cheese</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Candy</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Ketchup</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Water</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/5.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">curd</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/6.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Mayo</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/7.jpg" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">pasta</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/8.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Cookies</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="fruits" role="tabpanel">
                    <div class="row g-8">
                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Chips</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Passion</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Blackberry</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Shampoo</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/5.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Chips</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/6.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Bread</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/7.jpg" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Noodles</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="beverage" role="tabpanel">
                    <div class="row g-8">
                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/8.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Butter</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Butter</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">cheese</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Candy</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Ketchup</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/5.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Water</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/6.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">curd</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/7.jpg" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Mayo</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/8.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">pasta</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Cookies</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="dairy" role="tabpanel">
                    <div class="row g-8">
                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Butter</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Butter</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">cheese</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/5.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Candy</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/6.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                     
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Ketchup</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/7.jpg" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                    
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Water</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/8.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                     
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">curd</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Mayo</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">pasta</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-2 col-lg-3 col-md-4 col-6">
                            <div class="product-box-4">
                                <div class="product-image">
                                    <div class="label-flex">
                                        <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                            <i class="iconly-Heart icli"></i>
                                        </button>
                                    </div>

                                    <a href="/Productdetails">
                                        <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                                    </a>

                                    <ul class="option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                                <i class="iconly-Show icli"></i>
                                            </a>
                                        </li>
                                    
                                    </ul>
                                </div>

                                <div class="product-detail">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <a href="/Productdetails">
                                        <h5 class="name">Cookies</h5>
                                    </a>
                                    <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                                    <div class="price-qty">
                                        <div class="counter-number">
                                            <div class="counter">
                                                <div class="qty-left-minus" data-type="minus" data-field="">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <div class="qty-right-plus" data-type="plus" data-field="">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="buy-button buy-button-2 btn btn-cart">
                                            <i class="iconly-Buy icli text-white m-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Product Section End --> */}

        {/* <!-- Banner Section Start --> */}
<section className="banner-section" style={{ marginTop: "40px" }}>
  <div className="container-fluid-lg">
    <div className="row gy-xl-0 gy-3">
      {/* Left Banner */}
      <div className="col-xl-6">
        <div
          className="banner-contain-3 hover-effect"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <img
            src="/assets/images/picture/banner1.webp"
            className="bg-img img-fluid"
            alt="Image Size : 781 X 406"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "10px",
            }}
          />
          {/* Dark Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 1,
              borderRadius: "10px",
            }}
          ></div>

          <div
            className="banner-detail banner-details-dark text-white p-center-left w-50 mend-auto"
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "#fff",
              width: "45%",
            }}
          >
            <div>
              <h6
                className="ls-expanded text-uppercase"
                style={{
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Premium
              </h6>
              <h3 className="mb-sm-3 mb-1" style={{ marginBottom: "10px" }}>
                Fresh Vegetable & Daily Eating
              </h3>
              <h4>Get Extra 50% Off</h4>
              <a href="/Shop">
                <button
                  className="btn theme-color bg-white btn-md fw-bold mt-sm-3 mt-1 mend-auto"
                  style={{
                    backgroundColor: "#fff",
                    color: "#4CAF50",
                    fontWeight: "bold",
                    border: "none",
                    padding: "10px 25px",
                    marginTop: "15px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Banner */}
      <div className="col-xl-6">
        <div
          className="banner-contain-3 hover-effect"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <img
            src="/assets/images/picture/banner3.jpg"
            className="bg-img img-fluid"
            alt="Image Size : 781 X 402"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "10px",
            }}
          />
          {/* Light Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(130 129 129 / 62%)",
              zIndex: 1,
              borderRadius: "10px",
            }}
          ></div>

          <div
            className="banner-detail text-dark p-center-left w-50 mend-auto"
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "#222",
              width: "45%",
            }}
          >
            <div>
              <h6
                className="ls-expanded text-uppercase"
                style={{
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                  color:'#fff',
                }}
              >
                Available
              </h6>
              <h3 className="mb-sm-3 mb-1" style={{ marginBottom: "10px",     color:'#fff', }}>
                100% Natural & Healthy Fruits
              </h3>
              <h4 className="text-content" style={{color:'#fff',}}>Weekend Special</h4>
              <a href="/Shop">
                <button
                  className="btn theme-bg-color text-white btn-md fw-bold mt-sm-3 mt-1 mend-auto"
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                    padding: "10px 25px",
                    marginTop: "15px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* <!-- Banner Section End --> */}














        {/* <!-- Product Section Start --> */}
    <section class="product-section-2">
        <div class="container-fluid-lg">
            <div class="row gy-sm-5 gy-4">
                <div class="col-xxl-3 col-md-6">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title title-border d-block">
                                <h3>NEW PRODUCTS</h3>
                            </div>

                            <div class="product-category-1 arrow-slider-2">
                                <div>
                                    <div class="row gy-sm-4 gy-3">
                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp">
                                                <a href="/Shop" class="product-image">
                                                    <img src="/assets/images/picture/kaju.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">cashew nuts</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/2.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Red cheese</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/3.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Detergent</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="row gy-sm-4 gy-3">
                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/4.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Candy</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                      
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/5.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Water</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                      
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/6.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Detergent</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
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
                    </div>
                </div>
                <div class="col-xxl-3 col-md-6">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title title-border d-block">
                                <h3>FEATURE PRODUCT</h3>
                            </div>

                            <div class="product-category-1 arrow-slider-2">
                                <div>
                                    <div class="row gy-sm-4 gy-3">
                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/6.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Almonds</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                      
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/5.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Jam</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 pb-1 wow fadeInUp" data-wow-delay="0.1s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/4.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Butter</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                      
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="row gy-sm-4 gy-3">
                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/3.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Noodles</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/2.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">curd</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                      
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/1.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Tea</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
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
                    </div>
                </div>

                <div class="col-xxl-3 col-md-6">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title title-border d-block">
                                <h3>BEST SELLER</h3>
                            </div>

                            <div class="product-category-1 arrow-slider-2">
                                <div>
                                    <div class="row gy-sm-4 gy-3">
                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp">
                                                <a href="/Shop" class="product-image">
                                                    <img src="/assets/images/picture/kaju.png" class="img-fluid"
                                                        alt="" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">cashew nuts</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/2.png" class="img-fluid"
                                                        alt="" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Red cheese</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                  
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/3.png" class="img-fluid"
                                                        alt="" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Detergent</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                     
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="row gy-sm-4 gy-3">
                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/4.png" class="img-fluid"
                                                        alt="" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Candy</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                 
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/5.png" class="img-fluid"
                                                        alt="" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Water</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/6.png" class="img-fluid"
                                                        alt="" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Detergent</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
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
                    </div>
                </div>

                <div class="col-xxl-3 col-md-6">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title title-border d-block">
                                <h3>ON SELL</h3>
                            </div>

                            <div class="product-category-1 arrow-slider-2">
                                <div>
                                    <div class="row gy-sm-4 gy-3">
                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/6.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Almonds</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/5.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Jam</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/4.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Butter</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                     
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="row gy-sm-4 gy-3">
                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/3.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Noodles</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/2.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">curd</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="product-box-4 wow fadeInUp pb-1" data-wow-delay="0.1s">
                                                <a href="/Shop" class="product-image">
                                                    <img src="../assets/images/veg-3/pro1/1.png" class="img-fluid"
                                                        alt="Image Size : 67 X 65" />
                                                </a>
                                                <div class="product-details">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>
                                                    <a href="/Productdetails">
                                                        <h4 class="name">Tea</h4>
                                                    </a>
                                                    <h5 class="price">₹75.20<del>₹65.21</del></h5>
                                                    <ul class="option">
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Add to Cart">
                                                            <a href="/Cart">
                                                                <i class="iconly-Buy icli"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Quick View">
                                                            <a href="" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                <i class="iconly-Show icli"></i>
                                                            </a>
                                                        </li> */}
                                                        <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Wishlist">
                                                            <a href="/Wishlist">
                                                                <i class="iconly-Heart icli"></i>
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Product Section End --> */}






        {/* <!-- Banner Section Start --> */}
    <section class="banner-section">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="banner-contain-3 section-b-space section-t-space hover-effect">
                        <img src="../assets/images/veg-3/banner/Main-Banner.png" class="img-fluid bg-img" alt="Image Size : 1590 X 428" />
                        <div class="banner-detail p-center text-dark  text-center p-0">
                            <div>
                                <h4 class="ls-expanded text-uppercase theme-color">Try Our New</h4>
                                <h2 class="my-3">100% Organic Best Quality Best Price</h2>
                                <h4 class="text-content fw-300">Best MD Mart Food Quality</h4>
                                   <a href="/Shop">
                                   
                                <button class="btn theme-bg-color mt-sm-4 btn-md mx-auto text-white fw-bold"
                                    >Shop Now</button>
                                   </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}

        {/* <!-- Product Section Start --> */}
    <section class="product-section">
        <div class="container-fluid-lg">
            <div class="title">
                <h2>Top Products</h2>
            </div>

            <div class="slider-6 img-slider slick-slider-1 arrow-slider">
                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Butter</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div> 
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <div class="discount">
                                    <label>-25%</label>
                                </div>

                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Cookies</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Butter</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Candy</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/5.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                              
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">cheese</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/6.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                             
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Water</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/7.jpg" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">curd</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <div class="discount">
                                    <label>50%</label>
                                </div>

                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/8.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">pasta</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <div class="discount">
                                    <label>-25%</label>
                                </div>

                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/1.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                             
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Bread</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <div class="discount">
                                    <label>50%</label>
                                </div>

                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Mayo</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/3.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Chips</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="Image Size : 183 X 171" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                              
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Blackberry</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/9.png" class="img-fluid" alt="" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Chips</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/12.png" class="img-fluid" alt="" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Noodles</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/2.png" class="img-fluid" alt="" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Butter</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/4.png" class="img-fluid" alt="" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                             
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Candy</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="product-box-4 wow fadeInUp">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/6.png" class="img-fluid" alt="" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                                <li>
                                    <i data-feather="star"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Water</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                        <div class="product-image">
                            <div class="label-flex">
                                <button class="btn p-0 wishlist btn-wishlist notifi-wishlist">
                                    <i class="iconly-Heart icli"></i>
                                </button>
                            </div>

                            <a href="/Productdetails">
                                <img src="../assets/images/veg-3/cate1/11.png" class="img-fluid" alt="" />
                            </a>

                            <ul class="option">
                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#view">
                                        <i class="iconly-Show icli"></i>
                                    </a>
                                </li>
                              
                            </ul>
                        </div>

                        <div class="product-detail">
                            <ul class="rating">
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                    <i data-feather="star" class="fill"></i>
                                </li>
                            </ul>
                            <a href="/Productdetails">
                                <h5 class="name">Mayo</h5>
                            </a>
                            <h5 class="price theme-color">₹70.21<del>₹65.25</del></h5>
                            <div class="price-qty">
                                <div class="counter-number">
                                    <div class="counter">
                                        <div class="qty-left-minus" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <input class="form-control input-number qty-input" type="text" name="quantity"
                                            value="0" />
                                        <div class="qty-right-plus" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <button class="buy-button buy-button-2 btn btn-cart">
                                    <i class="iconly-Buy icli text-white m-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Product Section End --> */}


    {/* <!-- Blog Section Start --> */}
    <section class="blog-section">
        <div class="container-fluid-lg">
            <div class="title">
                <h2>Blog</h2>
            </div>

            <div class="slider-3 arrow-slider">
                <div>
                    <div class="blog-box ratio_50">
                        <div class="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="../assets/images/veg-3/banner/Banner1.jpg" class="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div class="blog-detail">
                            <label>Conversion rate optimization</label>
                            <a href="/Blogdetails">
                                <h2>A Fresh Marketplace for Groceries & More</h2>
                            </a>
                            <div class="blog-list">
                                <span>March 9, 2021</span>
                                <span>By Emil Kristensen</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="blog-box ratio_50">
                        <div class="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="../assets/images/veg-3/banner/Banner3.jpg" class="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div class="blog-detail">
                            <label>Email Marketing</label>
                            <a href="/Blogdetails">
                                <h2>A Fresh Marketplace for Groceries & More</h2>
                            </a>
                            <div class="blog-list">
                                <span>March 9, 2021</span>
                                <span>By Emil Kristensen</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="blog-box ratio_50">
                        <div class="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="../assets/images/veg-3/banner/Banner4.jpg" class="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div class="blog-detail">
                            <label>Conversion rate optimization</label>
                            <a href="/Blogdetails">
                                <h2>A Fresh Marketplace for Groceries & More</h2>
                            </a>
                            <div class="blog-list">
                                <span>March 9, 2021</span>
                                <span>By Emil Kristensen</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="blog-box ratio_50">
                        <div class="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="../assets/images/veg-3/banner/Banner4.jpg" class="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div class="blog-detail">
                            <label>Conversion rate optimization</label>
                            <a href="/Blogdetails">
                                <h2>A Fresh Marketplace for Groceries & More</h2>
                            </a>
                            <div class="blog-list">
                                <span>March 9, 2021</span>
                                <span>By Emil Kristensen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}


    {/* <!-- Newsletter Section Start --> */}
    <Newsletter />
    {/* <!-- Newsletter Section End --> */}

    <Footer />























        {/* <!-- Quick View Modal Box Start --> */}
    <div class="modal fade theme-modal view-modal" id="view" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
            <div class="modal-content">
                <div class="modal-header p-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row g-sm-4 g-2">
                        <div class="col-lg-6">
                            <div class="slider-image">
                                <img src="../assets/images/product/category/img1.jpg" class="img-fluid blur-up lazyload"
                                    alt="Image Size : 750 X 750" />
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="right-sidebar-modal">
                                <h4 class="title-name">curdnut Butter Bite Premium Butter Cookies 600 g</h4>
                                <h4 class="price">₹36.99</h4>
                                <div class="product-rating">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span class="ms-2">8 Reviews</span>
                                    <span class="ms-2 text-danger">6 sold in last 16 hours</span>
                                </div>

                                <div class="product-detail">
                                    <h4>Product Details :</h4>
                                    <p>Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love.
                                        Caramels marshmallow icing dessert candy canes I love soufflé I love toffee.
                                        Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw. Bonbon
                                        muffin I love Detergent cake sugar plum dessert bonbon.</p>
                                </div>

                                <ul class="brand-list">
                                    <li>
                                        <div class="brand-box">
                                            <h5>Brand Name:</h5>
                                            <h6>Black Forest</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="brand-box">
                                            <h5>Product Code:</h5>
                                            <h6>W0690034</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="brand-box">
                                            <h5>Product Type:</h5>
                                            <h6>White Cream Cake</h6>
                                        </div>
                                    </li>
                                </ul>

                                <div class="select-size">
                                    <h4>Cake Size :</h4>
                                    <select class="form-select select-form-size">
                                        <option selected>Select Size</option>
                                        <option value="1.2">1/2 KG</option>
                                        <option value="0">1 KG</option>
                                        <option value="1.5">1/5 KG</option>
                                        <option value="red">Red Roses</option>
                                        <option value="pink">With Pink Roses</option>
                                    </select>
                                </div>

                                <div class="modal-button">
                                    <button onclick="location.href = '/Cart';"
                                        class="btn btn-md add-cart-button icon">Add
                                        To Cart</button>
                                    <button onclick="location.href = '/Productdetails';"
                                        class="btn theme-bg-color view-button icon text-white fw-bold btn-md">
                                        View More Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Quick View Modal Box End --> */}
    {/* <!-- Items section Start --> */}
    <div class="button-item">
        <button class="item-btn btn text-white">
            <i class="iconly-Bag-2 icli"></i>
        </button>
    </div>
    <div class="item-section">
        <button class="close-button">
            <i class="fas fa-times"></i>
        </button>
        <h6>
            <i class="iconly-Bag-2 icli"></i>
            <span>5 Items</span>
        </h6>
        <ul class="items-image">
            <li>
                <img src="../assets/images/veg-3/cate1/1.png" alt="" />
            </li>
            <li>
                <img src="../assets/images/veg-3/cate1/2.png" alt="" />
            </li>
            <li>+3</li>
        </ul>
        <button onclick="location.href = '/Cart';" class="btn item-button btn-sm fw-bold">₹ 20.70</button>
    </div>
    {/* <!-- Items section End --> */}

    {/* <!-- Cookie Bar Box Start --> */}
    <div class="cookie-bar-box">
        <div class="cookie-box">
            <div class="cookie-image">
                <img src="../assets/images/cookie-bar.png" class="blur-up lazyload" alt="" />
                <h2>Cookies!</h2>
            </div>

            <div class="cookie-contain">
                <h5 class="text-content">We use cookies to make your experience better</h5>
            </div>
        </div>

        <div class="button-group">
           <a href="/Privacy">
             <button class="btn privacy-button" >Privacy Policy</button>
            </a>
            <button class="btn ok-button">OK</button>
        </div>
    </div>
    {/* <!-- Cookie Bar Box End --> */}

    </div>
  )
}
