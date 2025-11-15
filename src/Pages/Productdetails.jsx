import React, { useEffect, useState } from "react";
import $ from "jquery";
import Navbar from './Navbar'
import Footer from './Footer'

const Productdetails = () => {
    const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 1,
    minutes: 2,
    seconds: 3,
  });
  const [selected, setSelected] = useState("1kg");

  const weights = ["1kg", "2kg", "3kg"];
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(interval);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
         useEffect(() => {
        /**=====================
            Quantity 2 js
        ==========================**/
       
    
        $(".qty-left-minus").on("click", function () {
          var $qty = $(this).siblings(".qty-input");
          var _val = $($qty).val();
          if (_val === "1") {
            var _removeCls = $(this).parents(".cart_qty");
            $(_removeCls).removeClass("open");
          }
          var currentVal = parseInt($qty.val());
          if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
          }
        });
    
        $(".qty-right-plus").click(function () {
          if ($(this).prev().val() < 9) {
            $(this).prev().val(+$(this).prev().val() + 1);
          }
        });
        $(".product-package .select-package li").click(function () {
    // Remove active class from all
    $(".product-package .select-package li").removeClass("active");

    // Add active class to clicked li
    $(this).addClass("active");

    // Select the radio input inside clicked li
    $(this).find('input[type=radio]').prop('checked', true);
});

      }, []); // only run once
  return (
    <>
      <Navbar />
    
      {/* <!-- Product Left Sidebar Start --> */}
    <section class="product-section">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
                    <div class="row g-4">
                        <div class="col-xl-6 wow fadeInUp">
                            <div class="product-left-box">
                                <div class="row g-sm-4 g-2">
                                    <div class="col-12">
                                        <div class="product-main no-arrow">
                                            <div>
                                                <div class="slider-image">
                                                    <img src="../assets/images/fruit/product/1.png" id="img-1"
                                                        data-zoom-image="../assets/images/fruit/product/1.png" class="
                                                        img-fluid image_zoom_cls-0 blur-up lazyload" alt="" />
                                                </div>
                                            </div>

                                            <div>
                                                <div class="slider-image">
                                                    <img src="../assets/images/fruit/product/2.png"
                                                        data-zoom-image="../assets/images/fruit/product/2.png" class="
                                                        img-fluid image_zoom_cls-1 blur-up lazyload" alt="" />
                                                </div>
                                            </div>

                                            <div>
                                                <div class="slider-image">
                                                    <img src="../assets/images/fruit/product/3.png"
                                                        data-zoom-image="../assets/images/fruit/product/3.png" class="
                                                        img-fluid image_zoom_cls-2 blur-up lazyload" alt="" />
                                                </div>
                                            </div>

                                            <div>
                                                <div class="slider-image">
                                                    <img src="../assets/images/fruit/product/4.png"
                                                        data-zoom-image="../assets/images/fruit/product/4.png" class="
                                                        img-fluid image_zoom_cls-3 blur-up lazyload" alt="" />
                                                </div>
                                            </div>

                                            <div>
                                                <div class="slider-image">
                                                    <img src="../assets/images/fruit/product/1.png"
                                                        data-zoom-image="../assets/images/fruit/product/1.png" class="
                                                        img-fluid image_zoom_cls-4 blur-up lazyload" alt="" />
                                                </div>
                                            </div>

                                            <div>
                                                <div class="slider-image">
                                                    <img src="../assets/images/fruit/product/2.png"
                                                        data-zoom-image="../assets/images/fruit/product/2.png" class="
                                                        img-fluid image_zoom_cls-5 blur-up lazyload" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="left-slider-image left-slider no-arrow slick-top">
                                            <div>
                                                <div class="sidebar-image">
                                                    <img src="/assets/images/cake1.png"
                                                        class="img-fluid blur-up lazyload" alt="" style={{height:'113px'}} />
                                                </div>
                                            </div>

                                            <div>
                                                <div class="sidebar-image">
                                                    <img src="/assets/images/choco.png"
                                                        class="img-fluid blur-up lazyload" alt="" style={{height:'113px'}}/>
                                                </div>
                                            </div>

                                            <div>
                                                <div class="sidebar-image">
                                                    <img src="/assets/images/snack.png"
                                                        class="img-fluid blur-up lazyload" alt="" style={{height:'113px'}} />
                                                </div>
                                            </div>

                                            <div>
                                                <div class="sidebar-image">
                                                    <img src="/assets/images/oils.png"
                                                        class="img-fluid blur-up lazyload" alt="" style={{height:'113px'}}/>
                                                </div>
                                            </div>

                                            <div>
                                                <div class="sidebar-image">
                                                    <img src="/assets/images/7days.png"
                                                        class="img-fluid blur-up lazyload" alt="" style={{height:'113px'}}/>
                                                </div>
                                            </div>

                                            <div>
                                                <div class="sidebar-image">
                                                    <img src="/assets/images/buttor.png"
                                                        class="img-fluid blur-up lazyload" alt="" style={{height:'113px'}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 wow fadeInUp">
                            <div class="right-box-contain">
                                <h6 class="offer-top">30% Off</h6>
                                <h2 class="name">Deliciously Ripe Peach</h2>
                                <div class="price-rating">
      <div style={{ display: "flex" }}>
        <h5
          className=" theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
            fontWeight:"600"
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
      <h3>
                                    <span class="offer theme-color" style={{fontSize:'15px',margin:'10px'}}>(8% off)</span></h3>
      </div>
                                    <div class="product-rating custom-rate">
                                        <ul class="rating">
                                            <li>
                                                 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                            </li>
                                            <li>
                                                 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                            </li>
                                            <li>
                                                 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                            </li>
                                            <li>
                                                 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                            </li>
                                            <li>
                                                 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                            </li>
                                        </ul>
                                        <span class="review">23 Customer Review</span>
                                    </div>
                                </div>

                                <div class="product-contain">
                                    <p class="w-100">Incorporate our Deliciously Ripe Peaches into your healthy
                                        lifestyle or relish them as an occasional indulgence. Whichever way you choose
                                        to enjoy them, be prepared for a symphony of flavors that celebrate the natural
                                        goodness of this summer fruit.</p>
                                </div>

                   <div className="product-package">
      <div className="product-title">
        <h4>Weight</h4>
      </div>

      <ul className="rectangle select-package" style={{ display: "flex" }}>
        {weights.map((w) => (
          <h5
            key={w}
            onClick={() => setSelected(w)}
            className="weight-box"
            style={{
              background: selected === w ? "#ffe6f3" : "#f7fdff",
              borderStyle: "solid",
              borderColor: selected === w ? "#ED439F" : "#2baedd",
              borderWidth: "1px 3px 3px 1px",
              color: selected === w ? "#ED439F" : "#2baedd",
              padding: "15px",
              borderRadius: "10px",
              marginRight: "10px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {w.toUpperCase()}
          </h5>
        ))}
      </ul>
    </div>

                                <div
      class="time deal-timer product-deal-timer mx-md-0 mx-auto"
      id="clockdiv-1"
      data-hours="1"
      data-minutes="2"
      data-seconds="3"
    >
      <div class="product-title">
        <h4>Hurry up! Sales Ends In</h4>
      </div>
      <ul>
        <li>
          <div class="counter d-block">
            <div class="days d-block">
              <h5>{String(timeLeft.days).padStart(2, "0")}</h5>
            </div>
            <h6>Days</h6>
          </div>
        </li>
        <li>
          <div class="counter d-block">
            <div class="hours d-block">
              <h5>{String(timeLeft.hours).padStart(2, "0")}</h5>
            </div>
            <h6>Hours</h6>
          </div>
        </li>
        <li>
          <div class="counter d-block">
            <div class="minutes d-block">
              <h5>{String(timeLeft.minutes).padStart(2, "0")}</h5>
            </div>
            <h6>Min</h6>
          </div>
        </li>
        <li>
          <div class="counter d-block">
            <div class="seconds d-block">
              <h5>{String(timeLeft.seconds).padStart(2, "0")}</h5>
            </div>
            <h6>Sec</h6>
          </div>
        </li>
      </ul>
                                 </div>



                                <div class="note-box product-package">
                                    <div class="cart_qty qty-box product-qty">
                                        <div class="input-group">
                                            <button type="button" class="qty-left-minus" data-type="minus"
                                                data-field="">
                                                <i class="fa fa-minus"></i>
                                            </button>
                                            <input class="form-control input-number qty-input" type="text"
                                                name="quantity" value="1" />
                                            <button type="button" class="qty-right-plus" data-type="plus" data-field="">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <a href="/Cart"
                                        class="btn btn-md bg-dark cart-button text-white w-100">Add To Basket</a>
                                </div>

                                <div class="buy-box">
                                    <a href="/Wishlist">
                                       <i class="fa-solid fa-heart"></i>
                                        <span>Add To Wishlist</span>
                                    </a>

                                  
                                </div>

                                <div class="pickup-box">
                                   

                                    <div class="product-info">
                                        <ul class="product-info-list product-info-list-2">
                                            <li>Type : <a href="">Fruit</a></li>
                                            <li>MFG : <a href="">Jun 4, 2022</a></li>
                                            <li>Stock : <a href="">5 Items Left</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="payment-option">
                                    <div class="product-title">
                                        <h4>Guaranteed Safe Checkout</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src="../assets/images/product/payment/1.svg"
                                                    class="blur-up lazyload" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="../assets/images/product/payment/2.svg"
                                                    class="blur-up lazyload" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="../assets/images/product/payment/3.svg"
                                                    class="blur-up lazyload" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="../assets/images/product/payment/4.svg"
                                                    class="blur-up lazyload" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="../assets/images/product/payment/5.svg"
                                                    class="blur-up lazyload" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp">
                    <div class="right-sidebar-box">
                        <div class="vendor-box">
                          
                   <h3>Why Shop MD Mart</h3>
                            <p class="vendor-detail">At MD Mart, we make everyday shopping simple, reliable, and affordable. From quality products to quick delivery, we ensure a smooth experience from start to finish. With trusted brands, secure payments, and friendly support, MD Mart is your go-to destination for everything you need — all in one place.</p>

                       
                        </div>

                        <div class="pt-25">
                            <div class="hot-line-number">
                                <h5>Hotline Order:</h5>
                                <h6>Mon - Fri: 07:00 am - 08:30PM</h6>
                                <h3>+91 97258 17388</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Product Left Sidebar End --> */}
    {/* <!-- Related Product Section Start --> */}
    <section class="related-product-2">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="related-product">
                        <div class="product-title-2">
                            <h4>Frequently bought together</h4>
                        </div>

                        <div class="related-box">
                            <div class="related-image">
                                <ul>
                                    <li>
                                        <div class="product-box product-box-bg wow fadeInUp">
                                            <div class="product-image">
                                                <a href="/">
                                                    <img src="/assets/images/choco.png"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div class="product-detail">
                                                <a href="/">
                                                    <h6 class="name">Fantasy Crunchy Choco Chip Cookies</h6>
                                                </a>

                                                      <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "20px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                            </div>
                                            
                                        </div>
                                    </li>

                                    <li>
                                        <div class="product-box product-box-bg wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="product-image">
                                                <a href="/">
                                                    <img src="/assets/images/cake1.png"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div class="product-detail">
                                                <a href="/">
                                                    <h6 class="name">Chocolate Chip Cookies 250 g</h6>
                                                </a>

                                                      <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "20px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="product-box product-box-bg wow fadeInUp">
                                            <div class="product-image">
                                                <a href="/">
                                                    <img src="/assets/images/buttor.png"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div class="product-detail">
                                                <a href="/">
                                                    <h6 class="name">Peanut Butter Bite Premium Butter Cookies 600 g</h6>
                                                </a>

                                                      <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "20px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="bundle-list">
                                <ul>
                                    <li>
                                        <div class="form-check">
                                            <input class="checkbox_animated" type="checkbox" value="" id="check1" />
                                            <label class="form-check-label" for="check1">
                                                <span class="color color-1"> Fantasy Crunchy Choco Chip Cookies
                                                    <span>₹12</span></span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="form-check">
                                            <input class="checkbox_animated" type="checkbox" value="" id="check2" />
                                            <label class="form-check-label" for="check2">
                                                <span class="color color-1">Chocolate Chip Cookies
                                                    <span>₹15</span></span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="form-check">
                                            <input class="checkbox_animated" type="checkbox" value="" id="check3" />
                                            <label class="form-check-label" for="check3">
                                                <span class="color color-1"> Peanut Butter Bite Premium Butter Cookies
                                                    <span>₹12</span></span>
                                            </label>
                                        </div>
                                    </li>

                                    <li class="content">
                                        <h5>Product Selected for</h5>
                                             <div style={{ display: "flex",marginTop:'10px' }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹210.21
        </h5>

        <h5 style={{ marginTop: "5px" }}>
          <del>₹212.25</del>
        </h5>
      </div>
                                        <button class="btn text-white theme-bg-color btn-md mt-sm-4 mt-3 fw-bold"><i
                                                class="fa-solid fa-cart-shopping me-2"></i> Add All To Basket</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Related Product Section End --> */}
      {/* <!-- Nav Tab Section Start --> */}
    <section>
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="product-section-box m-0">
                        <ul class="nav nav-tabs custom-nav" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="description-tab" data-bs-toggle="tab"
                                    data-bs-target="#description" type="button" role="tab">Description</button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info"
                                    type="button" role="tab">Additional
                                    info</button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="care-tab" data-bs-toggle="tab" data-bs-target="#care"
                                    type="button" role="tab">Care
                                    Instructions</button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review"
                                    type="button" role="tab">Review</button>
                            </li>
                        </ul>

                        <div class="tab-content custom-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="description" role="tabpanel">
                                <div class="product-description">
                                    <div class="nav-desh">
                                        <p>Indulge in the vibrant and tangy goodness of our premium fresh oranges.
                                            Sourced from the finest orchards, our oranges are a testament to quality and
                                            flavor. Each orange is meticulously handpicked to ensure that you receive a
                                            fruit that's at the peak of its juiciness and taste.</p>

                                        <p>Our oranges boast a tantalizing balance of sweet and tangy flavors, making
                                            them a delightful treat for your taste buds. Bursting with natural vitamins,
                                            especially vitamin C, these juicy treasures are a great way to boost your
                                            immune system and maintain overall health.</p>

                                        <p>Whether enjoyed as a quick and refreshing snack or incorporated into your
                                            favorite recipes, our fresh oranges add a burst of color and flavor to your
                                            meals. Their succulent texture and invigorating aroma make them a versatile
                                            ingredient in both savory and sweet culinary creations.</p>

                                        <p>By choosing our premium fresh oranges, you're not only indulging in a
                                            delectable fruit but also supporting sustainable and responsible agriculture
                                            practices. Join us in savoring the pure essence of nature's bounty with
                                            every bite of our succulent, premium fresh oranges.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="info" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table info-table">
                                        <tbody>
                                            <tr>
                                                <td>Specialty</td>
                                                <td>Vegetarian</td>
                                            </tr>
                                            <tr>
                                                <td>Ingredient Type</td>
                                                <td>Vegetarian</td>
                                            </tr>
                                            <tr>
                                                <td>Brand</td>
                                                <td>Lavian Exotique</td>
                                            </tr>
                                            <tr>
                                                <td>Form</td>
                                                <td>Bar Brownie</td>
                                            </tr>
                                            <tr>
                                                <td>Package Information</td>
                                                <td>Box</td>
                                            </tr>
                                            <tr>
                                                <td>Manufacturer</td>
                                                <td>Prayagh Nutri Product Pvt Ltd</td>
                                            </tr>
                                            <tr>
                                                <td>Item part number</td>
                                                <td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
                                            </tr>
                                            <tr>
                                                <td>Net Quantity</td>
                                                <td>40.00 count</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="care" role="tabpanel">
                                <div class="information-box">
                                    <ul>
                                        <li>Store cream cakes in a refrigerator. Fondant cakes should be
                                            stored in an air conditioned environment.</li>

                                        <li>Slice and serve the cake at room temperature and make sure
                                            it is not exposed to heat.</li>

                                        <li>Use a serrated knife to cut a fondant cake.</li>

                                        <li>Sculptural elements and figurines may contain wire supports
                                            or toothpicks or wooden skewers for support.</li>

                                        <li>Please check the placement of these items before serving to
                                            small children.</li>

                                        <li>The cake should be consumed within 24 hours.</li>

                                        <li>Enjoy your cake!</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="review" role="tabpanel">
                                <div class="review-box">
                                    <div class="row">
                                        <div class="col-xl-5">
                                            <div class="product-rating-box">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="product-main-rating">
                                                            <h2>3.40
                                                                 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                            </h2>

                                                            <h5>5 Overall Rating</h5>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-12">
                                                        <ul class="product-rating-list">
                                                            <li>
                                                                <div class="rating-product">
                                                                    <h5>5 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i></h5>
                                                                    <div class="progress">
                                                                        <div class="progress-bar" style={{width:"40%"}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 class="total">2</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="rating-product">
                                                                    <h5>4 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i></h5>
                                                                    <div class="progress">
                                                                        <div class="progress-bar"  style={{width:"20%"}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 class="total">1</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="rating-product">
                                                                    <h5>3 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i></h5>
                                                                    <div class="progress">
                                                                        <div class="progress-bar"  style={{width:"0%"}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 class="total">0</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="rating-product">
                                                                    <h5>2 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i></h5>
                                                                    <div class="progress">
                                                                        <div class="progress-bar" style={{width:"20%"}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 class="total">1</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="rating-product">
                                                                    <h5>1 <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i></h5>
                                                                    <div class="progress">
                                                                        <div class="progress-bar"  style={{width:"20%"}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 class="total">1</h5>
                                                                </div>
                                                            </li>

                                                        </ul>

                                                        <div class="review-title-2">
                                                            <h4 class="fw-bold">Review this product</h4>
                                                            <p>Let other customers know what you think</p>
                                                            <button class="btn" type="button" data-bs-toggle="modal"
                                                                data-bs-target="#writereview">Write a
                                                                review</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-7">
                                            <div class="review-people">
                                                <ul class="review-list">
                                                    <li>
                                                        <div class="people-box">
                                                            <div>
                                                                <div class="people-image people-text">
                                                                    <img alt="user" class="img-fluid "
                                                                        src="/assets/images/CEO.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="people-comment">
                                                                <div class="people-name"><a href=""
                                                                        class="name">Jack Doe</a>
                                                                    <div class="date-time">
                                                                        <h6 class="text-content"> 29 Sep 2023
                                                                            06:40:PM
                                                                        </h6>
                                                                        <div class="product-rating">
                                                                            <ul class="rating">
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    <p>Avoid this product. The quality is
                                                                        terrible, and
                                                                        it started falling apart almost
                                                                        immediately. I
                                                                        wish I had read more reviews before
                                                                        buying.
                                                                        Lesson learned.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="people-box">
                                                            <div>
                                                                <div class="people-image people-text">
                                                                    <img alt="user" class="img-fluid "
                                                                        src="/assets/images/operation.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="people-comment">
                                                                <div class="people-name"><a href=""
                                                                        class="name">Jessica
                                                                        Miller</a>
                                                                    <div class="date-time">
                                                                        <h6 class="text-content"> 29 Sep 2023
                                                                            06:34:PM
                                                                        </h6>
                                                                        <div class="product-rating">
                                                                            <div class="product-rating">
                                                                                <ul class="rating">
                                                                                    <li>
                                                                                         <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                    </li>
                                                                                    <li>
                                                                                       <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                    </li>
                                                                                    <li>
                                                                                         <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                    </li>
                                                                                    <li>
                                                                                         <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    <p>Honestly, I regret buying this item. The
                                                                        quality
                                                                        is subpar, and it feels like a waste of
                                                                        money. I
                                                                        wouldn't recommend it to anyone.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="people-box">
                                                            <div>
                                                                <div class="people-image people-text">
                                                                    <img alt="user" class="img-fluid "
                                                                        src="/assets/images/CEO.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="people-comment">
                                                                <div class="people-name"><a href=""
                                                                        class="name">Rome Doe</a>
                                                                    <div class="date-time">
                                                                        <h6 class="text-content"> 29 Sep 2023
                                                                            06:18:PM
                                                                        </h6>
                                                                        <div class="product-rating">
                                                                            <ul class="rating">
                                                                                <li>
                                                                                    <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                   <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    <p>I am extremely satisfied with this
                                                                        purchase. The
                                                                        item arrived promptly, and the quality
                                                                        is
                                                                        exceptional. It's evident that the
                                                                        makers paid
                                                                        attention to detail. Overall, a
                                                                        fantastic buy!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="people-box">
                                                            <div>
                                                                <div class="people-image people-text">
                                                                    <img alt="user" class="img-fluid "
                                                                        src="/assets/images/operation.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="people-comment">
                                                                <div class="people-name"><a href=""
                                                                        class="name">Sarah
                                                                        Davis</a>
                                                                    <div class="date-time">
                                                                        <h6 class="text-content"> 29 Sep 2023
                                                                            05:58:PM
                                                                        </h6>
                                                                        <div class="product-rating">
                                                                            <ul class="rating">
                                                                                <li>
                                                                                    <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                   <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    <p>I am genuinely delighted with this item.
                                                                        It's a
                                                                        total winner! The quality is superb, and
                                                                        it has
                                                                        added so much convenience to my daily
                                                                        routine.
                                                                        Highly satisfied customer!</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="people-box">
                                                            <div>
                                                                <div class="people-image people-text">
                                                                    <img alt="user" class="img-fluid "
                                                                        src="/assets/images/CEO.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="people-comment">
                                                                <div class="people-name"><a href=""
                                                                        class="name">John Doe</a>
                                                                    <div class="date-time">
                                                                        <h6 class="text-content"> 29 Sep 2023
                                                                            05:22:PM
                                                                        </h6>
                                                                        <div class="product-rating">
                                                                            <ul class="rating">
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                  <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    <p>Very impressed with this purchase. The
                                                                        item is of
                                                                        excellent quality, and it has exceeded
                                                                        my
                                                                        expectations.</p>
                                                                </div>
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Nav Tab Section End --> */}

    {/* <!-- Related Product Section Start --> */}
    <section class="product-list-section section-b-space">
        <div class="container-fluid-lg">
          <div class="title">
                <h2>Related Products</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="slider-6_1 product-wrapper">
                        <div>
                            <div class="product-box-3 wow fadeInUp">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/">
                                            <img src="/assets/images/cake1.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i class="fa-solid fa-eye"></i> 
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" class="notifi-wishlist">
                                                   <i class="fa-solid fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                        <span class="span-name">Cake</span>
                                        <a href="/">
                                            <h5 class="name">Chocolate Chip Cookies 250 g</h5>
                                        </a>
                                        <div class="product-rating mt-2">
                                            <ul class="rating">
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 class="unit">500 G</h6>
                                           <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                        <div class="add-to-cart-box bg-white">
                                            <button class="btn btn-add-cart addcart-button">Add
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div class="cart_qty qty-box">
                                                <div class="input-group bg-white">
                                                    <button type="button" class="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" class="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 wow fadeInUp" data-wow-delay="0.05s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/">
                                            <img src="/assets/images/flour.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i class="fa-solid fa-eye"></i> 
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" class="notifi-wishlist">
                                                   <i class="fa-solid fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-footer">
                                    <div class="product-detail">
                                        <span class="span-name">Vegetable</span>
                                        <a href="/">
                                            <h5 class="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <div class="product-rating mt-2">
                                            <ul class="rating">
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>
                                        <h6 class="unit">250 ml</h6>
                                             <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                        <div class="add-to-cart-box bg-white">
                                            <button class="btn btn-add-cart addcart-button">Add
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div class="cart_qty qty-box">
                                                <div class="input-group bg-white">
                                                    <button type="button" class="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" class="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/">
                                            <img src="/assets/images/buttor.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i class="fa-solid fa-eye"></i> 
                                                </a>
                                            </li>

                                          

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" class="notifi-wishlist">
                                                   <i class="fa-solid fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                        <span class="span-name">Vegetable</span>
                                        <a href="/">
                                            <h5 class="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                        </a>
                                        <div class="product-rating mt-2">
                                            <ul class="rating">
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                            </ul>
                                            <span>(2.4)</span>
                                        </div>
                                        <h6 class="unit">350 G</h6>
                                              <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                        <div class="add-to-cart-box bg-white">
                                            <button class="btn btn-add-cart addcart-button">Add
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div class="cart_qty qty-box">
                                                <div class="input-group bg-white">
                                                    <button type="button" class="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" class="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 wow fadeInUp" data-wow-delay="0.15s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/">
                                            <img src="/assets/images/snack.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i class="fa-solid fa-eye"></i> 
                                                </a>
                                            </li>

                                       

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" class="notifi-wishlist">
                                                   <i class="fa-solid fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                        <span class="span-name">Snacks</span>
                                        <a href="/">
                                            <h5 class="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                        </a>
                                        <div class="product-rating mt-2">
                                            <ul class="rating">
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 class="unit">570 G</h6>
                                            <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                        <div class="add-to-cart-box bg-white">
                                            <button class="btn btn-add-cart addcart-button">Add
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div class="cart_qty qty-box">
                                                <div class="input-group bg-white">
                                                    <button type="button" class="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" class="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/">
                                            <img src="/assets/images/7days.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i class="fa-solid fa-eye"></i> 
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" class="notifi-wishlist">
                                                   <i class="fa-solid fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                        <span class="span-name">Snacks</span>
                                        <a href="/">
                                            <h5 class="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                                        </a>
                                        <div class="product-rating mt-2">
                                            <ul class="rating">
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                            </ul>
                                            <span>(3.8)</span>
                                        </div>
                                        <h6 class="unit">100 G</h6>
                                           <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                        <div class="add-to-cart-box bg-white">
                                            <button class="btn btn-add-cart addcart-button">Add
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div class="cart_qty qty-box">
                                                <div class="input-group bg-white">
                                                    <button type="button" class="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" class="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 wow fadeInUp" data-wow-delay="0.25s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/">
                                            <img src="/assets/images/choco.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i class="fa-solid fa-eye"></i> 
                                                </a>
                                            </li>

                                            

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" class="notifi-wishlist">
                                                   <i class="fa-solid fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                        <span class="span-name">Vegetable</span>
                                        <a href="/">
                                            <h5 class="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                        </a>
                                        <div class="product-rating mt-2">
                                            <ul class="rating">
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>

                                        <h6 class="unit">550 G</h6>

                                              <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                        <div class="add-to-cart-box bg-white">
                                            <button class="btn btn-add-cart addcart-button">Add
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div class="cart_qty qty-box">
                                                <div class="input-group bg-white">
                                                    <button type="button" class="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" class="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       <div>
                            <div class="product-box-3 wow fadeInUp" data-wow-delay="0.15s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/">
                                            <img src="/assets/images/snack.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i class="fa-solid fa-eye"></i> 
                                                </a>
                                            </li>

                                       

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" class="notifi-wishlist">
                                                   <i class="fa-solid fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                        <span class="span-name">Snacks</span>
                                        <a href="/">
                                            <h5 class="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                        </a>
                                        <div class="product-rating mt-2">
                                            <ul class="rating">
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                                <li>
                                                     <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 class="unit">570 G</h6>
                                            <div style={{ display: "flex" }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
      </div>
        <h6 class="unit-dis">10% Off</h6>
                                        <div class="add-to-cart-box bg-white">
                                            <button class="btn btn-add-cart addcart-button">Add
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div class="cart_qty qty-box">
                                                <div class="input-group bg-white">
                                                    <button type="button" class="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" class="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
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
    {/* <!-- Related Product Section End --> */}

      <Footer />

       {/* <!-- Review Modal Start --> */}
    <div class="modal fade theme-modal question-modal" id="writereview" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Write a review</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <form class="product-review-form">
                        <div class="product-wrapper">
                            <div class="product-image">
                                <img class="img-fluid" alt="Fantasy Crunchy Choco Chip Cookies0"
                                    src="/assets/images/choco.png" />
                            </div>
                            <div class="product-content">
                                <h5 class="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                <div class="product-review-rating">
                                    <div class="product-rating">
                                        <h6 class="price-number">₹16.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-box">
                            <div class="product-review-rating">
                                <label>Rating</label>
                                <div class="product-rating">
                                    <ul class="rating">
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="review-box">
                            <label for="content" class="form-label">Your Question *</label>
                            <textarea id="content" rows="3" class="form-control" placeholder="Your Question"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-md btn-theme-outline fw-bold"
                        data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-md fw-bold text-light theme-bg-color">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Review Modal End --> */}
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
                                <img src="/assets/images/picture/bigest.jpg" class="img-fluid blur-up lazyload"
                                    alt="" />
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="right-sidebar-modal">
                                <h4 class="title-name">Peanut Butter Bite Premium Butter Cookies 600 g</h4>
                                <h4 class="price">₹36.99</h4>
                                <div class="product-rating">
                                    <ul class="rating">
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
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
                                        muffin I love carrot cake sugar plum dessert bonbon.</p>
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
                                    <a href="/Cart"
                                        class="btn btn-md add-cart-button icon">Add
                                        To Cart</a>
                                    <a href="/Productdetails"
                                        class="btn theme-bg-color view-button icon text-white fw-bold btn-md">
                                        View More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Quick View Modal Box End --> */}
     {/* <!-- Sticky Cart Box Start --> */}
    <div class="sticky-bottom-cart">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="cart-content">
                        <div class="product-image">
                            <img src="/assets/images/choco.png" class="img-fluid blur-up lazyload"
                                alt="" />
                            <div class="content">
                                <h5>Creamy Chocolate Cake</h5>
                                <div style={{ display: "flex",marginTop:'10px' }}>
        <h5
          className="price theme-color"
          style={{
            background: "#f7fdff",
            borderStyle: "solid",
            borderColor: "#2baedd",
            borderWidth: "1px 3px 3px 1px",
            color: "#2baedd",
            padding: "5px",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
                                <span className=" theme-color" style={{margin:'10px'}}>55% off</span>
      </div>
                            </div>
                        </div>
                        <div class="selection-section">
                            <div class="form-group mb-0">
                                <select id="input-state" class="form-control form-select">
                                    <option selected disabled>Choose Weight...</option>
                                    <option>1/2 KG</option>
                                    <option>1 KG</option>
                                    <option>1.5 KG</option>
                                </select>
                            </div>
                            <div class="cart_qty qty-box product-qty m-0">
                                <div class="input-group h-100">
                                    <button type="button" class="qty-left-minus" data-type="minus" data-field="">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                    <input class="form-control input-number qty-input" type="text" name="quantity"
                                        value="1" />
                                    <button type="button" class="qty-right-plus" data-type="plus" data-field="">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="add-btn">
                            <a class="btn theme-bg-color text-white wishlist-btn" href="/Wishlist"><i
                                    class="fa fa-bookmark"></i> Wishlist</a>
                            <a class="btn theme-bg-color text-white" href="/Checkout"><i
                                    class="fas fa-shopping-cart"></i> Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Sticky Cart Box End --> */}
    </>
  )
}

export default Productdetails