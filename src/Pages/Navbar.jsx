import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Navbar() {
    const sliderRef = useRef(null);

  useEffect(() => {
    const $slider = $(sliderRef.current);

    // Wait for DOM to fully render before initializing slick
    const timer = setTimeout(() => {
      if ($slider.length && !$slider.hasClass("slick-initialized")) {
        $slider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          vertical: true,
          variableWidth: false,
          autoplay: true,
          autoplaySpeed: 2500,
          arrows: false,
        });
      }
    }, 100); // short delay ensures element exists

    // Close button functionality
    $(".close-notification").on("click", function () {
      $(".header-notification").addClass("remove");
    });

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
    };
  }, []);
  return (
    <div>
      
    {/* <!-- Header Start --> */}
    <header className="header-2">
       <div className="header-notification theme-bg-color overflow-hidden py-2">
      <div className="notification-slider" ref={sliderRef}>
        <div>
          <div className="timer-notification text-center">
            <h6>
              <strong className="me-1">Welcome to MD Mart!</strong> Wrap new
              offers/gift every single day on Weekends.
              <strong className="ms-1"> New Coupon Code: Fast024 </strong>
            </h6>
          </div>
        </div>

        <div>
          <div className="timer-notification text-center">
            <h6>
              Something you love is now on sale!
              <a href="/Shop" className="text-white">
                Buy Now!
              </a>
            </h6>
          </div>
        </div>
      </div>

      <button className="btn close-notification">
        <span>Close</span> <i className="fas fa-times"></i>
      </button>
    </div>
        <div className="top-nav top-header sticky-header sticky-header-3">
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="navbar-top">
                            <button className="navbar-toggler d-xl-none d-block p-0 me-3" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                <span className="navbar-toggler-icon">
                                    <i className="iconly-Category icli theme-color"></i>
                                </span>
                            </button>
                            <a href="/" className="web-logo nav-logo">
                                <img src="/assets/images/vendor-page/logo/mdmart.png" className="img-fluid blur-up lazyload" alt="" style={{width:'90px'}}/> 
                            </a>

                            <div className="search-full">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i data-feather="search" className="font-light"></i>
                                    </span>
                                    <input type="text" className="form-control search-type" placeholder="Search here.." />
                                    <span className="input-group-text close-search">
                                        <i data-feather="x" className="font-light"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="middle-box">
                                <div className="center-box">
                                    <div className="searchbar-box order-xl-1 d-none d-xl-block">
                                        <input type="search" className="form-control" id="exampleFormControlInput1"
                                            placeholder="search for product, delivered to your door..." />
                                        <button className="btn search-button">
                                            <i className="iconly-Search icli"></i>
                                        </button>
                                    </div>
                                    <div className="location-box-2">
                                        <button className="btn location-button" data-bs-toggle="modal"
                                            data-bs-target="#locationModal">
                                            <i className="iconly-Location icli"></i>
                                            <span className="locat-name">Your Location</span>
                                            <i className="fa-solid fa-angle-down down-arrow"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="rightside-menu">
                                <div className="dropdown-dollar">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown">
                                            <span>Language</span> <i className="fa-solid fa-angle-down"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a id="eng" className="dropdown-item" href="#">English</a>
                                            </li>
                                            <li>
                                                <a id="hin" className="dropdown-item" href="#">Hindi</a>
                                            </li>
                                            <li>
                                                <a id="guj" className="dropdown-item" href="#">Gujarati</a>
                                            </li>
                                            <li>
                                                <a id="arb" className="dropdown-item" href="#">Arabic</a>
                                            </li>
                                            <li>
                                                <a id="rus" className="dropdown-item" href="#">Russia</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Chinese</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="dropdown">
                                        <button className="dropdown-toggle m-0" type="button" id="dropdownMenuButton2"
                                            data-bs-toggle="dropdown">
                                            <span>Dollar</span> <i className="fa-solid fa-angle-down"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a id="usd" className="dropdown-item" href="javascript:void(0)">USD</a>
                                            </li>
                                            <li>
                                                <a id="inr" className="dropdown-item" href="javascript:void(0)">INR</a>
                                            </li>
                                            <li>
                                                <a id="eur" className="dropdown-item" href="javascript:void(0)">EUR</a>
                                            </li>
                                            <li>
                                                <a id="aud" className="dropdown-item" href="javascript:void(0)">AUD</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="option-list">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="header-icon user-icon search-icon">
                                                <i className="iconly-Profile icli"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="javascript:void(0)" className="header-icon search-box search-icon">
                                                <i className="iconly-Search icli"></i>
                                            </a>
                                        </li>

                                       

                                        <li className="onhover-dropdown">
                                            <a href="/Wishlist" className="header-icon swap-icon" title="Wishlist">
                                                <i className="iconly-Heart icli"></i>
                                            </a>

                                        </li>

                                        <li className="onhover-dropdown">
                                            <a href="/Cart" className="header-icon bag-icon">
                                                <small className="badge-number">2</small>
                                                <i className="iconly-Bag-2 icli"></i>
                                            </a>
                                            <div className="onhover-div">
                                                <ul className="cart-list">
                                                    <li>
                                                        <div className="drop-cart">
                                                            <a href="/Productdetails" className="drop-image">
                                                                <img src="/assets/images/choco.png"
                                                                    className="blur-up lazyload" alt="" /> 
                                                            </a>

                                                            <div className="drop-contain">
                                                                <a href="/Productdetails">
                                                                    <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                                                </a>
                                                                <h6><span>1 x</span> ₹80.58</h6>
                                                                <button className="close-button">
                                                                    <i className="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="drop-cart">
                                                            <a href="/Productdetails" className="drop-image">
                                                                <img src="/assets/images/soda.jpg"
                                                                    className="blur-up lazyload" alt="" /> 
                                                            </a>

                                                            <div className="drop-contain">
                                                                <a href="/Productdetails">
                                                                    <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                    </h5>
                                                                </a>
                                                                <h6><span>1 x</span> ₹25.68</h6>
                                                                <button className="close-button">
                                                                    <i className="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>


                                                <div className="price-box">
                                                    <h5>Price :</h5>
                                                    <h4 className="theme-color fw-bold">₹106.58</h4>
                                                </div>

                                                <div className="button-group">
                                                    <a href="/Cart" className="btn btn-sm cart-button">View Cart</a>
                                                    <a href="/Checkout" className="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</a>
                                                </div>
                                            </div>
                                        </li>
                                            <li >
                                          <a href="/login" className="header-icon swap-icon" title="Log in">
                                            <i className="fa-solid fa-right-to-bracket"></i> {/* Login icon */}
                                          </a>
                                        </li>

                                                 <li >
                                            <a href="/Account" className="header-icon swap-icon" title=" My Account">
                                       <i class="fa-solid fa-user-tie"></i>
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
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="main-nav">
                        <div className="header-nav-left">
                            <button className="dropdown-category dropdown-category-2">
                                <i className="iconly-Category icli"></i>
                                <span>All Categories</span>
                            </button>

                            <div className="category-dropdown">
                                <div className="category-title">
                                    <h5>Categories</h5>
                                    <button type="button" className="btn p-0 close-button text-content">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <ul className="category-list">

  {/* <!-- Beverages --> */}
  <li className="onhover-category-list">
    <a href="#" className="category-name">
      <img src="../assets/svg/1/cup.svg" alt="" />
      <h6>Beverages</h6>
      <i className="fa-solid fa-angle-right"></i>
    </a>
    <div className="onhover-category-box w-100">
      <div className="list-1">
        <div className="category-title-box">
          <h5>Hot & Cold Drinks</h5>
        </div>
        <ul>
          <li><a href="/Shop">Tea</a></li>
          <li><a href="/Shop">Green Tea</a></li>
          <li><a href="/Shop">Coffee</a></li>
          <li><a href="/Shop">Soft Drinks</a></li>
          <li><a href="/Shop">Fruit Juices</a></li>
          <li><a href="/Shop">Packaged Water</a></li>
          <li><a href="/Shop">Health Drinks</a></li>
        </ul>
      </div>
    </div>
  </li>

  {/* <!-- Breakfast & Dairy --> */}
  <li className="onhover-category-list">
    <a href="#" className="category-name">
      <img src="../assets/svg/1/breakfast.svg" alt="" />
      <h6>Breakfast & Dairy</h6>
      <i className="fa-solid fa-angle-right"></i>
    </a>
    <div className="onhover-category-box">
      <div className="list-1">
        <div className="category-title-box">
          <h5>Breakfast Items</h5>
        </div>
        <ul>
          <li><a href="/Shop">Oats & Porridge</a></li>
          <li><a href="/Shop">Corn Flakes</a></li>
          <li><a href="/Shop">Muesli & Granola</a></li>
          <li><a href="/Shop">Instant Noodles</a></li>
          <li><a href="/Shop">Pasta & Macaroni</a></li>
        </ul>
      </div>

      <div className="list-2">
        <div className="category-title-box">
          <h5>Dairy Products</h5>
        </div>
        <ul>
          <li><a href="/Shop">Milk</a></li>
          <li><a href="/Shop">Curd & Yogurt</a></li>
          <li><a href="/Shop">Paneer & Tofu</a></li>
          <li><a href="/Shop">Butter & Cheese</a></li>
          <li><a href="/Shop">Ghee</a></li>
          <li><a href="/Shop">Lassi & Buttermilk</a></li>
        </ul>
      </div>
    </div>
  </li>

  {/* <!-- Biscuits & Snacks --> */}
  <li className="onhover-category-list">
    <a href="#" className="category-name">
      <img src="../assets/svg/1/biscuit.svg" alt="" />
      <h6>Biscuits & Snacks</h6>
      <i className="fa-solid fa-angle-right"></i>
    </a>
    <div className="onhover-category-box">
      <div className="list-1">
        <div className="category-title-box">
          <h5>Biscuits & Cookies</h5>
        </div>
        <ul>
          <li><a href="/Shop">Salted Biscuits</a></li>
          <li><a href="/Shop">Cream Biscuits</a></li>
          <li><a href="/Shop">Digestive & Health Biscuits</a></li>
          <li><a href="/Shop">Cookies</a></li>
        </ul>
      </div>

      <div className="list-2">
        <div className="category-title-box">
          <h5>Namkeen & Chips</h5>
        </div>
        <ul>
          <li><a href="/Shop">Chips & Wafers</a></li>
          <li><a href="/Shop">Namkeen</a></li>
          <li><a href="/Shop">Popcorn</a></li>
          <li><a href="/Shop">Snack Bars</a></li>
        </ul>
      </div>
    </div>
  </li>

  {/* <!-- Grocery & Staples --> */}
  <li className="onhover-category-list">
    <a href="#" className="category-name">
      <img src="../assets/svg/1/grocery.svg" alt="" />
      <h6>Grocery & Staples</h6>
      <i className="fa-solid fa-angle-right"></i>
    </a>
    <div className="onhover-category-box">
      <div className="list-1">
        <div className="category-title-box">
          <h5>Grains & Pulses</h5>
        </div>
        <ul>
          <li><a href="/Shop">Rice & Poha</a></li>
          <li><a href="/Shop">Wheat & Flour</a></li>
          <li><a href="/Shop">Dals & Pulses</a></li>
          <li><a href="/Shop">Millets</a></li>
        </ul>
      </div>

      <div className="list-2">
        <div className="category-title-box">
          <h5>Masala & Oil</h5>
        </div>
        <ul>
          <li><a href="/Shop">Cooking Oils & Ghee</a></li>
          <li><a href="/Shop">Masalas & Spices</a></li>
          <li><a href="/Shop">Salt, Sugar & Jaggery</a></li>
          <li><a href="/Shop">Dry Fruits & Nuts</a></li>
        </ul>
      </div>
    </div>
  </li>

  {/* <!-- Home Care --> */}
  <li className="onhover-category-list">
    <a href="#" className="category-name">
      <img src="/assets/images/nursing-home.png" alt="" />
      <h6>Home Care</h6>
      <i className="fa-solid fa-angle-right"></i>
    </a>
    <div className="onhover-category-box w-100">
      <div className="list-1">
        <div className="category-title-box">
          <h5>Cleaning Essentials</h5>
        </div>
        <ul>
          <li><a href="/Shop">Detergents & Fabric Care</a></li>
          <li><a href="/Shop">Dishwash & Cleaners</a></li>
          <li><a href="/Shop">Floor Cleaners</a></li>
          <li><a href="/Shop">Air Fresheners</a></li>
        </ul>
      </div>
    </div>
  </li>


  {/* <!-- Personal Care --> */}
  <li className="onhover-category-list">
    <a href="#" className="category-name">
      <img src="/assets/images/personalcare.png" alt="" />
      <h6>Personal Care</h6>
      <i className="fa-solid fa-angle-right"></i>
    </a>
    <div className="onhover-category-box w-100">
      <div className="list-1">
        <div className="category-title-box">
          <h5>Daily Essentials</h5>
        </div>
        <ul>
          <li><a href="/Shop">Bath & Body</a></li>
          <li><a href="/Shop">Hair Care</a></li>
          <li><a href="/Shop">Oral Care</a></li>
          <li><a href="/Shop">Skin Care</a></li>
          <li><a href="/Shop">Shaving & Grooming</a></li>
        </ul>
      </div>
    </div>
  </li>

  {/* <!-- Baby Care --> */}
  <li className="onhover-category-list">
    <a href="#" className="category-name">
      <img src="/assets/images/babycar.png" alt="" />
      <h6>Baby Care</h6>
      <i className="fa-solid fa-angle-right"></i>
    </a>
    <div className="onhover-category-box w-100">
      <div className="list-1">
        <div className="category-title-box">
          <h5>For Babies</h5>
        </div>
        <ul>
          <li><a href="/Shop">Baby Food</a></li>
          <li><a href="/Shop">Diapers & Wipes</a></li>
          <li><a href="/Shop">Baby Skin Care</a></li>
          <li><a href="/Shop">Feeding Bottles</a></li>
        </ul>
      </div>
    </div>
  </li>

</ul>

                            </div>
                        </div>

                        <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                            <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                <div className="offcanvas-header navbar-shadow">
                                    <h5>Menu</h5>
                                    <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav">
                                        <li className="nav-item ">
                                            <a className="nav-link nav-link1 ps-xl-2 ps-0" href="/">Home</a>
                                        </li>


                                        <li className="nav-item dropdown dropdown-mega">
                                            <a className="nav-link dropdown-toggle ps-xl-2 ps-0" href=""
                                                data-bs-toggle="dropdown">Shop</a>

                                            <div className="dropdown-menu dropdown-menu-2">
                                                <div className="row">
                                                    <div className="dropdown-column col-xl-3">
                                                        <h5 className="dropdown-header">Cooking Essentials</h5>
                                                        <a className="dropdown-item" href="/Shop">
                                                           Rice
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                           Atta, Flours & Sooji
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Dals & Pulses
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Sabudana & Poha
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Edible Oils
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Salt & Sugar
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Millet & Organic
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Dry Fruits & Nuts
                                                        </a>
                                                    </div>

                                                    <div className="dropdown-column col-xl-3">
                                                        <h5 className="dropdown-header">Dairy Products</h5>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Fresh Milk
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Butter
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Cheese
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Yogurt
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Icecream
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Ghee
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Cream
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Buttermilk
                                                        </a>
                                                    </div>

                                                    <div className="dropdown-column col-xl-3">
                                                        <h5 className="dropdown-header">Bakery Products</h5>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Bread
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Cakes
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Rolls
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Buns
                                                        </a>
                                                        <a className="dropdown-item" href="/Shop">
                                                            Muffins
                                                        </a>
                                                    </div>



                                                    <div className="dropdown-column dropdown-column-img col-3"></div>
                                                </div>
                                            </div>
                                        </li>

                                       <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                                                data-bs-toggle="dropdown">Company</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/About">About Us</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/Mission">Mission</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/Vision">Vision</a>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link nav-link1 ps-xl-2 ps-0" href="/Blog">Blog</a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link nav-link1 ps-xl-2 ps-0" href="/Contact">Contact Us</a>
                                        </li>

                                     

                                     
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="right-nav">
                            <div className="nav-number">
                                <img src="../assets/images/icon/music.png" className="img-fluid blur-up lazyload" alt="" /> 
                                <span>(123) 456 7890</span>
                            </div>
                            <a href="javascript:void(0)" className="btn theme-bg-color ms-3 fire-button"
                                data-bs-toggle="modal" data-bs-target="#deal-box">
                                <div className="fire">
                                    <img src="../assets/images/icon/hot-sale.png" className="img-fluid" alt="" /> 
                                </div>
                                <span>Hot Deals</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Header End --> */}
     {/* <!-- mobile fix menu start --> */}
    <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
            <li className="active">
                <a href="/">
                    <i className="iconly-Home icli"></i>
                    <span>Home</span>
                </a>
            </li>

            <li className="mobile-category">
                <a href="#" >
                    <i className="iconly-Category icli js-link"></i>
                    <span>Category</span>
                </a>
            </li>

            {/* <li>
                <a href="#" className="search-box">
                    <i className="iconly-Search icli"></i>
                    <span>Search</span>
                </a>
            </li> */}

            <li>
                <a href="/Wishlist" className="notifi-wishlist">
                    <i className="iconly-Heart icli"></i>
                    <span>My Wish</span>
                </a>
            </li>

            <li>
                <a href="/Cart">
                    <i className="iconly-Bag-2 icli fly-cate"></i>
                    <span>Cart</span>
                </a>
            </li>
        </ul>
    </div>
    {/* <!-- mobile fix menu end --> */}
      {/* <!-- Location Modal Start --> */}
    <div className="modal location-modal fade theme-modal" id="locationModal" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Choose your Delivery Location</h5>
                    <p className="mt-1 text-content">Enter your address and we will specify the offer for your area.</p>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="location-list">
                        <div className="search-input">
                            <input type="search" className="form-control" placeholder="Search Your Area" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <div className="disabled-box">
                            <h6>Select a Location</h6>
                        </div>

                        <ul className="location-select custom-height">
                            <li>
                                <a href="#">
                                    <h6>Alabama</h6>
                                    <span>Min: ₹130</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>Arizona</h6>
                                    <span>Min: ₹150</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>California</h6>
                                    <span>Min: ₹110</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>Colorado</h6>
                                    <span>Min: ₹140</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>Florida</h6>
                                    <span>Min: ₹160</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>Georgia</h6>
                                    <span>Min: ₹120</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>Kansas</h6>
                                    <span>Min: ₹170</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>Minnesota</h6>
                                    <span>Min: ₹120</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>New York</h6>
                                    <span>Min: ₹110</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <h6>Washington</h6>
                                    <span>Min: ₹130</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Location Modal End --> */}
    {/* <!-- Deal Box Modal Start --> */}
    <div className="modal fade theme-modal deal-modal" id="deal-box" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <div>
                        <h5 className="modal-title w-100" id="deal_today">Deal Today</h5>
                        <p className="mt-1 text-content">Recommended deals for you.</p>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="deal-offer-box">
                        <ul className="deal-offer-list">
                            <li className="list-1">
                                <div className="deal-offer-contain">
                                    <a href="/Shop" className="deal-image">
                                        <img src="/assets/images/snack.png" className="blur-up lazyload"
                                            alt="" />
                                    </a>

                                    <a href="/Shop" className="deal-contain">
                                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                        <h6>₹52.57 <del>57.62</del> <span>500 G</span></h6>
                                    </a>
                                </div>
                            </li>

                            <li className="list-2">
                                <div className="deal-offer-contain">
                                    <a href="/Shop" className="deal-image">
                                        <img src="/assets/images/choco.png" className="blur-up lazyload"
                                            alt="" />
                                    </a>

                                    <a href="/Shop" className="deal-contain">
                                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                        <h6>₹52.57 <del>57.62</del> <span>500 G</span></h6>
                                    </a>
                                </div>
                            </li>

                            <li className="list-3">
                                <div className="deal-offer-contain">
                                    <a href="/Shop" className="deal-image">
                                        <img src="/assets/images/soda.jpg" className="blur-up lazyload"
                                            alt="" />
                                    </a>

                                    <a href="/Shop" className="deal-contain">
                                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                        <h6>₹52.57 <del>57.62</del> <span>500 G</span></h6>
                                    </a>
                                </div>
                            </li>

                            <li className="list-1">
                                <div className="deal-offer-contain">
                                    <a href="/Shop" className="deal-image">
                                        <img src="/assets/images/oils.png" className="blur-up lazyload"
                                            alt="" />
                                    </a>

                                    <a href="/Shop" className="deal-contain">
                                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                        <h6>₹52.57 <del>57.62</del> <span>500 G</span></h6>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Deal Box Modal End --> */}
    </div>
  )
}
