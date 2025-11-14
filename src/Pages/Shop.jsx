import React, { useEffect } from "react";
import $ from "jquery";
import Navbar from './Navbar'
import Footer from './Footer'

const Shop = () => {
  
     useEffect(() => {
    /**=====================
        Quantity 2 js
    ==========================**/
    $(".addcart-button").click(function () {
      $(this).next().addClass("open");
      $(".add-to-cart-box .qty-input").val("1");
    });

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
  }, []); // only run once
  return (
    <>
       <Navbar />

           {/* <!-- Shop Section Start --> */}
    <section class="section-b-space shop-section">
        <div class="container-fluid-lg">
            <div class="row">
               

                <div class="col-custom-12">
                    <div class="show-button">
                       

                        <div class="top-filter-menu">
                            <div class="category-dropdown">
                                <h5 class="text-content">Sort By :</h5>
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown">
                                        <span>Most Popular</span> <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" id="pop" href="">Popularity</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="low" href="">Low - High
                                                Price</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="high" href="">High - Low
                                                Price</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="rating" href="">Average
                                                Rating</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="aToz" href="">A - Z Order</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="zToa" href="">Z - A Order</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="off" href="">% Off - Hight To
                                                Low</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div class="filter-category">
                            <ul>
                                <li>
                                    <a href="">Beverages</a>
                                </li>
                                <li>
                                    <a href="">Frozen Foods</a>
                                </li>
                                <li>
                                    <a href="">Biscuits & Snack</a>
                                </li>
                                <li>
                                    <a href="">Milk & Dairies</a>
                                </li>
                              
                            </ul>
                        </div>
                    </div>

                    <div
                        class="row g-sm-4 g-3 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 product-list-section">
                        <div>
                            <div class="product-box-3 h-100 wow fadeInUp">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop1.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Cheesy feet cheesy grin brie.
                                            Mascarpone cheese and wine hard cheese the big cheese everyone loves smelly
                                            cheese macaroni cheese croque monsieur.</p>
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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.05s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop2.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <span class="sold-out-badge">Sold Out</span>
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Feta taleggio croque monsieur
                                            swiss manchego cheesecake dolcelatte jarlsberg. Hard cheese danish fontina
                                            boursin melted cheese fondue.</p>
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
                                        <div class="add-to-cart-box" style={{background:'#9fa4aa'}}>
                                            <button class="btn btn-add-cart addcart-button">Notify
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-bell"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                               



                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop3.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Lancashire hard cheese
                                            parmesan. Danish fontina mozzarella cream cheese smelly cheese cheese and
                                            wine cheesecake dolcelatte stilton. Cream cheese parmesan who moved my
                                            cheese when the cheese comes out everybody's happy cream cheese red
                                            leicester ricotta edam.</p>
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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.15s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop4.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Cheddar cheddar pecorino hard
                                            cheese hard cheese cheese and biscuits bocconcini babybel. Cow goat paneer
                                            cream cheese fromage cottage cheese cauliflower cheese jarlsberg.</p>
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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop5.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <span class="sold-out-badge">Sold Out</span>
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Bavarian bergkase smelly
                                            cheese swiss cut the cheese lancashire who moved my cheese manchego melted
                                            cheese. Red leicester paneer cow when the cheese comes out everybody's happy
                                            croque monsieur goat melted cheese port-salut.</p>
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
                                        <div class="add-to-cart-box" style={{background:'#9fa4aa'}}>
                                            <button class="btn btn-add-cart addcart-button">Notify
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-bell"></i>
                                                </span>
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.25s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop6.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Melted cheese babybel chalk
                                            and cheese. Port-salut port-salut cream cheese when the cheese comes out
                                            everybody's happy cream cheese hard cheese cream cheese red leicester.</p>
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

                                        <h6 class="unit">1 Kg</h6>

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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop1.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Squirty cheese cottage cheese
                                            cheese strings. Red leicester paneer danish fontina queso lancashire when
                                            the cheese comes out everybody's happy cottage cheese paneer.</p>
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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.35s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop2.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Swiss ricotta cauliflower
                                            cheese squirty cheese cheesy grin camembert de normandie airedale edam.
                                            Squirty cheese babybel cheesecake the big cheese cauliflower cheese hard
                                            cheese cheese and biscuits cheese and wine.</p>
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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.4s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop3.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <span class="sold-out-badge">Sold Out</span>
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
                                        <a href="/Productdetails">
                                            <h5 class="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Boursin the big cheese
                                            cheeseburger. Jarlsberg smelly cheese chalk and cheese gouda blue castello
                                            monterey jack swiss boursin. Halloumi cheesy feet mozzarella red leicester
                                            paneer boursin who moved my cheese croque monsieur.</p>
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
                                        <div class="add-to-cart-box" style={{background:'#9fa4aa'}}>
                                            <button class="btn btn-add-cart addcart-button">Notify
                                                <span class="add-icon bg-light-gray">
                                                    <i class="fa-solid fa-bell"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.45s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop4.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Halloumi mozzarella monterey
                                            jack smelly cheese emmental bocconcini when the cheese comes out everybody's
                                            happy pecorino. Cut the cheese stilton danish fontina cheesy grin rubber
                                            cheese smelly cheese roquefort paneer.</p>
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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop5.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Manchego cow cheddar.
                                            Port-salut roquefort hard cheese babybel when the cheese comes out
                                            everybody's happy brie dolcelatte croque monsieur.</p>
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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.55s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop6.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Roquefort say cheese the big
                                            cheese ricotta chalk and cheese when the cheese comes out everybody's happy
                                            brie lancashire.</p>
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

                                        <h6 class="unit">1 Kg</h6>

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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.6s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop1.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Lancashire when the cheese
                                            comes out everybody's happy blue castello halloumi boursin stinking bishop
                                            pecorino fromage frais.</p>
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
                            <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.65s">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/picture/shop2.png"
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
                                        <a href="/Productdetails">
                                            <h5 class="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                        </a>
                                        <p class="text-content mt-1 mb-2 product-content">Say cheese cheese and biscuits
                                            feta. Queso bocconcini danish fontina camembert de normandie brie airedale
                                            ricotta feta. Pecorino edam gouda caerphilly croque monsieur red leicester
                                            cheese triangles caerphilly.</p>
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
                    </div>

                    <nav class="custom-pagination">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="" tabindex="-1">
                                    <i class="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="">
                                    <i class="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Shop Section End --> */}

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
                                    <a href="Productdetails"
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
    </>
  )
}

export default Shop
