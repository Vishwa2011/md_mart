import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Cart = () => {
  return (
    <>
    <Navbar />
     {/* <!-- Breadcrumb Section Start --> */}
    <section class="breadcrumb-section pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-contain">
                        <h2>Cart</h2>
                        <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">
                                        <i class="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item active">Cart</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Cart Section Start --> */}
    <section class="cart-section section-b-space">
        <div class="container-fluid-lg">
            <div class="row g-sm-5 g-3">
                <div class="col-xxl-9">
                    <div class="cart-table">
                        <div class="table-responsive-xl">
                            <table class="table">
                                <tbody>
                                    <tr class="product-box-contain">
                                        <td class="product-detail">
                                            <div class="product border-0">
                                                <a href="/Productdetails" class="product-image">
                                                    <img src="/assets/images/choco.png"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                                <div class="product-detail">
                                                    <ul>
                                                        <li class="name">
                                                            <a href="/Productdetails">Bell pepper</a>
                                                        </li>

                                                        <li class="text-content"><span class="text-title">Sold
                                                                By:</span> Fresho</li>

                                                        <li class="text-content"><span
                                                                class="text-title">Quantity</span> - 500 g</li>

                                                        <li>
                                                            <h5 class="text-content d-inline-block">Price :</h5>
                                                            <span>₹35.10</span>
                                                            <span class="text-content">₹45.68</span>
                                                        </li>

                                                        <li>
                                                            <h5 class="saving theme-color">Saving : ₹20.68</h5>
                                                        </li>

                                                        <li class="quantity-price-box">
                                                            <div class="cart_qty">
                                                                <div class="input-group">
                                                                    <button type="button" class="btn qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i class="fa fa-minus ms-0"></i>
                                                                    </button>
                                                                    <input class="form-control input-number qty-input"
                                                                        type="text" name="quantity" value="0" />
                                                                    <button type="button" class="btn qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i class="fa fa-plus ms-0"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <h5>Total: ₹35.10</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="price">
                                            <h4 class="table-title text-content">Price</h4>
                                            <h5>₹35.10 <del class="text-content">₹45.68</del></h5>
                                            <h6 class="theme-color">You Save : ₹20.68</h6>
                                        </td>

                                        <td class="quantity">
                                            <h4 class="table-title text-content">Qty</h4>
                                            <div class="quantity-price">
                                                <div class="cart_qty">
                                                    <div class="input-group">
                                                        <button type="button" class="btn qty-left-minus"
                                                            data-type="minus" data-field="">
                                                            <i class="fa fa-minus ms-0"></i>
                                                        </button>
                                                        <input class="form-control input-number qty-input" type="text"
                                                            name="quantity" value="0" />
                                                        <button type="button" class="btn qty-right-plus"
                                                            data-type="plus" data-field="">
                                                            <i class="fa fa-plus ms-0"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="subtotal">
                                            <h4 class="table-title text-content">Total</h4>
                                            <h5>₹35.10</h5>
                                        </td>

                                        <td class="save-remove">
                                            <h4 class="table-title text-content">Action</h4>
                                            <a class="save notifi-wishlist" href="#">Save for later</a>
                                            <a class="remove close_button" href="#">Remove</a>
                                        </td>
                                    </tr>

                                    <tr class="product-box-contain">
                                        <td class="product-detail">
                                            <div class="product border-0">
                                                <a href="/Productdetails" class="product-image">
                                                    <img src="/assets/images/soda.jpg"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                                <div class="product-detail">
                                                    <ul>
                                                        <li class="name">
                                                            <a href="/Productdetails">Eggplant</a>
                                                        </li>

                                                        <li class="text-content"><span class="text-title">Sold
                                                                By:</span> Nesto
                                                        </li>

                                                        <li class="text-content"><span
                                                                class="text-title">Quantity</span> - 250 g</li>

                                                        <li>
                                                            <h5 class="text-content d-inline-block">Price :</h5>
                                                            <span>₹35.10</span>
                                                            <span class="text-content">₹45.68</span>
                                                        </li>

                                                        <li>
                                                            <h5 class="saving theme-color">Saving : ₹20.68</h5>
                                                        </li>

                                                        <li class="quantity">
                                                            <div class="quantity-price">
                                                                <div class="cart_qty">
                                                                    <div class="input-group">
                                                                        <button type="button" class="btn qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i class="fa fa-minus ms-0"></i>
                                                                        </button>
                                                                        <input
                                                                            class="form-control input-number qty-input"
                                                                            type="text" name="quantity" value="0" />
                                                                        <button type="button" class="btn qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i class="fa fa-plus ms-0"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <h5>Total: ₹52.95</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="price">
                                            <h4 class="table-title text-content">Price</h4>
                                            <h5>₹52.95 <del class="text-content">₹68.49</del></h5>
                                            <h6 class="theme-color">You Save : ₹15.14</h6>
                                        </td>

                                        <td class="quantity">
                                            <h4 class="table-title text-content">Qty</h4>
                                            <div class="quantity-price">
                                                <div class="cart_qty">
                                                    <div class="input-group">
                                                        <button type="button" class="btn qty-left-minus"
                                                            data-type="minus" data-field="">
                                                            <i class="fa fa-minus ms-0"></i>
                                                        </button>
                                                        <input class="form-control input-number qty-input" type="text"
                                                            name="quantity" value="0" />
                                                        <button type="button" class="btn qty-right-plus"
                                                            data-type="plus" data-field="">
                                                            <i class="fa fa-plus ms-0"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="subtotal">
                                            <h4 class="table-title text-content">Total</h4>
                                            <h5>₹52.95</h5>
                                        </td>

                                        <td class="save-remove">
                                            <h4 class="table-title text-content">Action</h4>
                                            <a class="save notifi-wishlist" href="#">Save for later</a>
                                            <a class="remove close_button" href="#">Remove</a>
                                        </td>
                                    </tr>

                                    <tr class="product-box-contain">
                                        <td class="product-detail">
                                            <div class="product border-0">
                                                <a href="/Productdetails" class="product-image">
                                                    <img src="/assets/images/snack.png"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                                <div class="product-detail">
                                                    <ul>
                                                        <li class="name">
                                                            <a href="/Productdetails">Onion</a>
                                                        </li>

                                                        <li class="text-content"><span class="text-title">Sold
                                                                By:</span> Basket</li>

                                                        <li class="text-content"><span
                                                                class="text-title">Quantity</span> - 750 g</li>

                                                        <li>
                                                            <h5 class="text-content d-inline-block">Price :</h5>
                                                            <span>₹35.10</span>
                                                            <span class="text-content">₹45.68</span>
                                                        </li>

                                                        <li>
                                                            <h5 class="saving theme-color">Saving : ₹20.68</h5>
                                                        </li>

                                                        <li class="quantity">
                                                            <div class="quantity-price">
                                                                <div class="cart_qty">
                                                                    <div class="input-group">
                                                                        <button type="button" class="btn qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i class="fa fa-minus ms-0"></i>
                                                                        </button>
                                                                        <input
                                                                            class="form-control input-number qty-input"
                                                                            type="text" name="quantity" value="0" />
                                                                        <button type="button" class="btn qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i class="fa fa-plus ms-0"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <h5>Total: ₹67.36</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="price">
                                            <h4 class="table-title text-content">Price</h4>
                                            <h5>₹67.36 <del class="text-content">₹96.58</del></h5>
                                            <h6 class="theme-color">You Save : ₹29.22</h6>
                                        </td>

                                        <td class="quantity">
                                            <h4 class="table-title text-content">Qty</h4>
                                            <div class="quantity-price">
                                                <div class="cart_qty">
                                                    <div class="input-group">
                                                        <button type="button" class="btn qty-left-minus"
                                                            data-type="minus" data-field="">
                                                            <i class="fa fa-minus ms-0"></i>
                                                        </button>
                                                        <input class="form-control input-number qty-input" type="text"
                                                            name="quantity" value="0" />
                                                        <button type="button" class="btn qty-right-plus"
                                                            data-type="plus" data-field="">
                                                            <i class="fa fa-plus ms-0"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="subtotal">
                                            <h4 class="table-title text-content">Total</h4>
                                            <h5>₹67.36</h5>
                                        </td>

                                        <td class="save-remove">
                                            <h4 class="table-title text-content">Action</h4>
                                            <a class="save notifi-wishlist" href="#">Save for later</a>
                                            <a class="remove close_button" href="#">Remove</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-3">
                    <div class="summery-box p-sticky">
                        <div class="summery-header">
                            <h3>Cart Total</h3>
                        </div>

                        <div class="summery-contain">
                            <div class="coupon-cart">
                                <h6 class="text-content mb-2">Coupon Apply</h6>
                                <div class="mb-3 coupon-box input-group">
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter Coupon Code Here..." />
                                    <button class="btn-apply">Apply</button>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <h4>Subtotal</h4>
                                    <h4 class="price">₹125.65</h4>
                                </li>

                                <li>
                                    <h4>Coupon Discount</h4>
                                    <h4 class="price">(-) 0.00</h4>
                                </li>

                                <li class="align-items-start">
                                    <h4>Shipping</h4>
                                    <h4 class="price text-end">₹6.90</h4>
                                </li>
                            </ul>
                        </div>

                        <ul class="summery-total">
                            <li class="list-total border-top-0">
                                <h4>Total (USD)</h4>
                                <h4 class="price theme-color">₹132.58</h4>
                            </li>
                        </ul>

                        <div class="button-group cart-button">
                            <ul>
                                <li>
                                    <a href="/Checkout"
                                        class="btn btn-animation proceed-btn fw-bold">Process To Checkout</a>
                                </li>

                                <li>
                                    <a href='/'
                                        class="btn btn-light shopping-button text-dark">
                                        <i class="fa-solid fa-arrow-left-long"></i>Return To Shopping</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
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
                                        {/* <span class="span-name">Cake</span> */}
                                        <a href="/">
                                            <h5 class="name">Chocolate Chip Cookies 250 g</h5>
                                        </a>
                                        {/* <div class="product-rating mt-2">
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
                                        <h6 class="unit">500 G</h6> */}
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
                                        {/* <span class="span-name">Vegetable</span> */}
                                        <a href="/">
                                            <h5 class="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        {/* <div class="product-rating mt-2">
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
                                        <h6 class="unit">250 ml</h6> */}
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
                                        {/* <span class="span-name">Vegetable</span> */}
                                        <a href="/">
                                            <h5 class="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                        </a>
                                        {/* <div class="product-rating mt-2">
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
                                        <h6 class="unit">350 G</h6> */}
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
                                        {/* <span class="span-name">Snacks</span> */}
                                        <a href="/">
                                            <h5 class="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                        </a>
                                        {/* <div class="product-rating mt-2">
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
                                        <h6 class="unit">570 G</h6> */}
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
                                        {/* <span class="span-name">Snacks</span> */}
                                        <a href="/">
                                            <h5 class="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                                        </a>
                                        {/* <div class="product-rating mt-2">
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
                                        <h6 class="unit">100 G</h6> */}
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
                                        {/* <span class="span-name">Vegetable</span> */}
                                        <a href="/">
                                            <h5 class="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                        </a>
                                        {/* <div class="product-rating mt-2">
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

                                        <h6 class="unit">550 G</h6> */}

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
                                        {/* <span class="span-name">Snacks</span> */}
                                        <a href="/">
                                            <h5 class="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                        </a>
                                        {/* <div class="product-rating mt-2">
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
                                        <h6 class="unit">570 G</h6> */}
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
    </section>
    {/* <!-- Cart Section End --> */}
    <Footer />
    </>
  )
}

export default Cart