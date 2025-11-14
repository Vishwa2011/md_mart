import React from 'react';

const Homeproduct = () => {
  return (
    <>
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex-2">
            <h2>Our Products</h2>

            <ul className="nav nav-tabs tab-style-color-2 tab-style-color" id="myTab">
              <li className="nav-item">
                <button className="nav-link btn active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button">
                  All
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link btn" id="cooking-tab" data-bs-toggle="tab" data-bs-target="#cooking" type="button">
                  Groceries & Daily Essentials
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link btn" id="fruits-tab" data-bs-toggle="tab" data-bs-target="#fruits" type="button">
                  Groceries & Daily Essentials
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link btn" id="beverage-tab" data-bs-toggle="tab" data-bs-target="#beverage" type="button">
                  Beverage
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link btn" id="dairy-tab" data-bs-toggle="tab" data-bs-target="#dairy" type="button">
                  Dairy
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="myTabContent">

            {/* ---------------- ALL TAB ---------------- */}
            <div className="tab-pane fade show active" id="all" role="tabpanel">
              <div className="row g-8">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp">
                  <div className="product-box-4">
                    <div className="product-image">

                      <div className="label-flex">
                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                          <i className="iconly-Heart icli"></i>
                        </button>
                      </div>

                      <a href="/Productdetails">
                        <img src="/assets/images/picture/kaju.png" className="img-fluid" alt="Image Size : 183 X 171" />
                      </a>

                      <ul className="option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                          <a href="/" data-bs-toggle="modal" data-bs-target="#view">
                            <i className="iconly-Show icli"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="product-detail">
                      <ul className="rating">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
                          </li>
                        ))}
                      </ul>

                      <a href="/Productdetails">
                        <h5 className="name">Noodles</h5>
                      </a>

                      {/* PRICE BLOCK */}
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

                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div className="qty-left-minus" data-type="minus">
                              <i className="fa-solid fa-minus"></i>
                            </div>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue="0" />
                            <div className="qty-right-plus" data-type="plus">
                              <i className="fa-solid fa-plus"></i>
                            </div>
                          </div>
                        </div>

                        <button className="buy-button buy-button-2 btn btn-cart">
                          <i className="iconly-Buy icli text-white m-0"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.05s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/2.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Candy</h5>
      </a>

      {/* PRICE BOX UPDATED */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" name="quantity" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <div className="discount">
          <label>50%</label>
        </div>

        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/3.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Ketchup</h5>
      </a>

      {/* PRICE BOX UPDATED */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" name="quantity" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
        </button>
      </div>
    </div>
  </div>
</div>
<div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.15s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/4.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Water</h5>
      </a>

      {/* PRICE BOX */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
        </button>
      </div>
    </div>
  </div>
</div>
<div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <div className="discount">
          <label>-25%</label>
        </div>

        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/5.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Shampoo</h5>
      </a>

      {/* PRICE BOX */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
        </button>
      </div>
    </div>
  </div>
</div>
<div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.25s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/6.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Tea</h5>
      </a>

      {/* PRICE BOX */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
        </button>
      </div>
    </div>
  </div>
</div>

              </div>
            </div>

            {/* ---------------- COOKING TAB ---------------- */}
            <div className="tab-pane fade" id="cooking" role="tabpanel">
              <div className="row g-8">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                  <div className="product-box-4">
                    <div className="product-image">

                      <div className="label-flex">
                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                          <i className="iconly-Heart icli"></i>
                        </button>
                      </div>

                      <a href="/Productdetails">
                        <img src="/assets/images/picture/kaju.png" className="img-fluid" alt="Image Size : 183 X 171" />
                      </a>

                      <ul className="option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                          <a href="/" data-bs-toggle="modal" data-bs-target="#view">
                            <i className="iconly-Show icli"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="product-detail">
                      <ul className="rating">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
                          </li>
                        ))}
                      </ul>

                      <a href="/Productdetails">
                        <h5 className="name">Butter</h5>
                      </a>

                      {/* PRICE BLOCK */}
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

                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div className="qty-left-minus">
                              <i className="fa-solid fa-minus"></i>
                            </div>
                            <input className="form-control input-number qty-input" type="text" defaultValue="0" />
                            <div className="qty-right-plus">
                              <i className="fa-solid fa-plus"></i>
                            </div>
                          </div>
                        </div>

                        <button className="buy-button buy-button-2 btn btn-cart">
                          <i className="iconly-Buy icli text-white m-0"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.05s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/2.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Candy</h5>
      </a>

      {/* PRICE BOX UPDATED */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" name="quantity" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
        </button>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>

            {/* ---------------- FRUITS TAB ---------------- */}
            <div className="tab-pane fade" id="fruits" role="tabpanel">
              <div className="row g-8">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                  <div className="product-box-4">
                    <div className="product-image">

                      <div className="label-flex">
                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                          <i className="iconly-Heart icli"></i>
                        </button>
                      </div>

                      <a href="/Productdetails">
                        <img src="/assets/images/picture/kaju.png" className="img-fluid" alt="" />
                      </a>

                      <ul className="option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                          <a href="/" data-bs-toggle="modal" data-bs-target="#view">
                            <i className="iconly-Show icli"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="product-detail">
                      <ul className="rating">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
                          </li>
                        ))}
                      </ul>

                      <a href="/Productdetails">
                        <h5 className="name">Chips</h5>
                      </a>

                      {/* PRICE BLOCK */}
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

                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div className="qty-left-minus">
                              <i className="fa-solid fa-minus"></i>
                            </div>
                            <input className="form-control input-number qty-input" type="text" defaultValue="0" />
                            <div className="qty-right-plus">
                              <i className="fa-solid fa-plus"></i>
                            </div>
                          </div>
                        </div>

                        <button className="buy-button buy-button-2 btn btn-cart">
                          <i className="iconly-Buy icli text-white m-0"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <div className="discount">
          <label>50%</label>
        </div>

        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/3.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Ketchup</h5>
      </a>

      {/* PRICE BOX UPDATED */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" name="quantity" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
        </button>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>

            {/* ---------------- BEVERAGE TAB ---------------- */}
            <div className="tab-pane fade" id="beverage" role="tabpanel">
              <div className="row g-8">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                  <div className="product-box-4">
                    <div className="product-image">

                      <div className="label-flex">
                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                          <i className="iconly-Heart icli"></i>
                        </button>
                      </div>

                      <a href="/Productdetails">
                        <img src="/assets/images/veg-3/cate1/8.png" className="img-fluid" alt="" />
                      </a>

                      <ul className="option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                          <a href="/" data-bs-toggle="modal" data-bs-target="#view">
                            <i className="iconly-Show icli"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="product-detail">
                      <ul className="rating">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
                          </li>
                        ))}
                      </ul>

                      <a href="/Productdetails">
                        <h5 className="name">Butter</h5>
                      </a>

                      {/* PRICE BLOCK */}
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

                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div className="qty-left-minus">
                              <i className="fa-solid fa-minus"></i>
                            </div>
                            <input className="form-control input-number qty-input" type="text" defaultValue="0" />
                            <div className="qty-right-plus">
                              <i className="fa-solid fa-plus"></i>
                            </div>
                          </div>
                        </div>

                        <button className="buy-button buy-button-2 btn btn-cart">
                          <i className="iconly-Buy icli text-white m-0"></i>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.15s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/4.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Water</h5>
      </a>

      {/* PRICE BOX */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
        </button>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>

            {/* ---------------- DAIRY TAB ---------------- */}
            <div className="tab-pane fade" id="dairy" role="tabpanel">
              <div className="row g-8">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                  <div className="product-box-4">
                    <div className="product-image">

                      <div className="label-flex">
                        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                          <i className="iconly-Heart icli"></i>
                        </button>
                      </div>

                      <a href="/Productdetails">
                        <img src="/assets/images/veg-3/cate1/2.png" className="img-fluid" alt="" />
                      </a>

                      <ul className="option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                          <a href="/" data-bs-toggle="modal" data-bs-target="#view">
                            <i className="iconly-Show icli"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="product-detail">
                      <ul className="rating">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
                          </li>
                        ))}
                      </ul>

                      <a href="/Productdetails">
                        <h5 className="name">Butter</h5>
                      </a>

                      {/* PRICE BLOCK */}
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

                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div className="qty-left-minus">
                              <i className="fa-solid fa-minus"></i>
                            </div>
                            <input className="form-control input-number qty-input" type="text" defaultValue="0" />
                            <div className="qty-right-plus">
                              <i className="fa-solid fa-plus"></i>
                            </div>
                          </div>
                        </div>

                        <button className="buy-button buy-button-2 btn btn-cart">
                          <i className="iconly-Buy icli text-white m-0"></i>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
  <div className="product-box-4">
    <div className="product-image">
      <div className="label-flex">
        <div className="discount">
          <label>-25%</label>
        </div>

        <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
          <i className="iconly-Heart icli"></i>
        </button>
      </div>

      <a href="/Productdetails">
        <img src="../assets/images/veg-3/cate1/5.png" className="img-fluid" alt="Image Size : 183 X 171" />
      </a>

      <ul className="option">
        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
          <a href="" data-bs-toggle="modal" data-bs-target="#view">
            <i className="iconly-Show icli"></i>
          </a>
        </li>
      </ul>
    </div>

    <div className="product-detail">
      <ul className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <i className="fa-solid fa-star text-xl fill" style={{ color: "#ffb321" }}></i>
          </li>
        ))}
      </ul>

      <a href="/Productdetails">
        <h5 className="name">Shampoo</h5>
      </a>

      {/* PRICE BOX */}
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

      <div className="price-qty">
        <div className="counter-number">
          <div className="counter">
            <div className="qty-left-minus" data-type="minus">
              <i className="fa-solid fa-minus"></i>
            </div>
            <input className="form-control input-number qty-input" type="text" value="0" readOnly />
            <div className="qty-right-plus" data-type="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <button className="buy-button buy-button-2 btn btn-cart">
          <i className="iconly-Buy icli text-white m-0"></i>
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
    </>
  );
};

export default Homeproduct;
