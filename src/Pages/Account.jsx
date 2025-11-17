import React, { useEffect ,useState } from "react";
import $ from "jquery";
import Navbar from './Navbar'
import Footer from './Footer'
import { FaRupeeSign, FaBolt, FaSyncAlt, FaGift, FaWallet, FaPlus, FaTimes } from "react-icons/fa";
import { BiFontSize } from "react-icons/bi";



const giftCardsData = [
  {
    id: 1,
    title: "Amazon Gift Card",
    code: "#AMZ2548",
    amount: 150,
    status: "Active",
    image: "../assets/images/Giftcard.jpg",
  },
  {
    id: 2,
    title: "Flipkart Gift Card",
    code: "#FLP1536",
    amount: 200,
    status: "Pending",
    image: "../assets/images/Giftcard.jpg",
  },
  {
    id: 3,
    title: "Starbucks Gift Card",
    code: "#SBX1366",
    amount: 100,
    status: "Redeemed",
    image: "../assets/images/Giftcard.jpg",
  },
];

const Account = () => {
   const [showSidebar, setShowSidebar] = useState(true);
  const [showRight, setShowRight] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
const orders = [
    {
      items: [
        "/assets/images/choco.png",
        "/assets/images/dals.png",
        "/assets/images/snack.png",
        "/assets/images/ready-to-eat.png",
        "/assets/images/soda.jpg",
        "/assets/images/ready-to-eat.png",
        "/assets/images/dals.png",
      ],
      status: "Order delivered",
      date: "20th Mar 2025, 12:07 pm",
      amount: "69",
    },

    {
      items: [ "/assets/images/dals.png",
        "/assets/images/snack.png",],
      status: "Order delivered",
      date: "4th Jan 2025, 02:04 pm",
      amount: "116.18",
    },

    {
      items: ["/assets/images/snack.png",],
      status: "Order delivered",
      date: "1st Jan 2025, 05:31 pm",
      amount: "120.99",
    },

    {
      items: [        "/assets/images/ready-to-eat.png",
        "/assets/images/soda.jpg",
        "/assets/images/ready-to-eat.png",
        "/assets/images/dals.png",],
      status: "Order delivered",
      date: "26th Dec 2024, 09:40 am",
      amount: "216.89",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 991;
      setIsMobile(mobile);

      if (mobile) {
        setShowSidebar(true);
        setShowRight(false);
      } else {
        setShowSidebar(true);
        setShowRight(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = () => {
    if (isMobile) {
      setShowSidebar(false);
      setShowRight(true);
    }
  };

  const handleBack = () => {
    setShowSidebar(true);
    setShowRight(false);
  };
      const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
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
            // Ensure only one address box is selected and radio is checked
document.querySelectorAll('.address-box').forEach(box => {
    box.addEventListener('click', function() {
        // Remove active className from all boxes
        document.querySelectorAll('.address-box').forEach(b => b.classList.remove('active'));
        
        // Add active className to clicked box
        this.classList.add('active');

        // Check the radio button inside clicked box
        const radio = this.querySelector('input[type=radio]');
        if(radio) radio.checked = true;
    });
});

          }, []); // only run once
  return (
    <>
    <Navbar />


    {/* <!-- User Dashboard Section Start --> */}
    <section className="user-dashboard-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">

          {/* ------------------------------
              LEFT SIDEBAR (Always Mounted)
          ------------------------------- */}
          <div
            className="col-xxl-3 col-lg-4"
            style={{
              display: showSidebar ? "block" : (isMobile ? "none" : "block")
            }}
          >
            <div className="dashboard-left-sidebar">

              <div className="profile-box">
               

                <div className="profile-contain d-flex">
                  <div className="profile-image">
                    <div className="position-relative">
                      <img
                        src="/assets/images/CEO.jpg"
                        className="blur-up lazyload update_img"
                        alt=""
                      />

                      {/* <div className="cover-icon">
                        <i className="fa-solid fa-pen">
                          <input type="file" onChange={() => { }} />
                        </i>
                      </div> */}
                    </div>
                  </div>

                  <div className="profile-name">
                    <h3>Rajesh Patel</h3>
                    <h6 className="text-content ">
                     9987665432
                    </h6>
                  </div>
                </div>
              </div>

              {/* MENU SECTIONS */}
              <ul className="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">

                <li className="nav-item" role="presentation"></li>

                <section className="account-section p-3 pt-0 w-100" style={{ textAlign: 'center' }}>
                  <div className="card shadow-sm rounded-3 border-0 p-4">
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <h4 className="fw-bold d-flex align-items-center gap-2 mb-0">
                        <i className="fas fa-wallet " style={{ color: '#2baedd' }}></i>
                        MD Mart Cash & Gift Card
                      </h4>
                    </div>
                    <div className="balance-box bg-light p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-center">
                      <div>
                        <p className="text-muted mb-1">Available Balance</p>
                        <h3 className="fw-bold mb-0" style={{ color: '#2baedd' }}>₹0</h3>
                      </div>
                    </div>
                  </div>
                </section>

                <li className="nav-item p-3 pt-0" role="presentation"
                    style={{ borderBottom: '1px solid #b2b2b2' }}>
                  <button className="nav-link btn theme-bg-color mt-3 mt-md-0 px-2 py-2 rounded-2 fw-semibold"
                    style={{ color: '#fff' }}
                    id="pills-Balance-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Balance"
                    type="button"
                    onClick={handleTabClick}
                  >
                    Add Balance
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link active"
                    id="pills-dashboard-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-dashboard"
                    type="button"
                    onClick={handleTabClick}
                  >
                    DashBoard
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link"
                    id="pills-order-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-order"
                    type="button"
                    onClick={handleTabClick}
                  >
                    Order
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link"
                    id="pills-wishlist-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-wishlist"
                    type="button"
                    onClick={handleTabClick}
                  >
                    Your Wishlist
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link"
                    id="pills-card-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-card"
                    type="button"
                    onClick={handleTabClick}
                  >
                    Your Refunds
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link"
                    id="pills-address-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-address"
                    type="button"
                    onClick={handleTabClick}
                  >
                    Saved Address
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    onClick={handleTabClick}
                  >
                    Profile
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link"
                    id="pills-download-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-download"
                    type="button"
                    onClick={handleTabClick}
                  >
                    Help & Support
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button className="nav-link"
                    id="pills-security-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-security"
                    type="button"
                    onClick={handleTabClick}
                  >
                    E- Gift Cards
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link"
                    id="pills-policy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-policy"
                    type="button"
                    onClick={handleTabClick}
                  >
                    Policy
                  </button>
                </li>
</ul>
               <div className="d-flex justify-content-center">
                 <a href="/" className="nav-link btn theme-bg-color mt-3 mb-3 px-2 py-2 rounded-2 fw-semibold"
                    style={{ color: '#fff'}}
                    type="button" >
                    Log Out
                  </a>
               </div>
              
            </div>
          </div>

          {/* ---------------------------
              RIGHT SIDEBAR (Always Mounted)
          --------------------------- */}

          <div
            className="col-xxl-9 col-lg-8"
            style={{
              display: showRight ? "block" : (isMobile ? "none" : "block")
            }}
          >
            <div className="dashboard-right-sidebar active">

              {/* Mobile Back Button */}
              {/* {isMobile && (
                <>
                <div className="d-flex mb-3 " style={{borderBottom:'2px solid #2baedd'}}>
                 <button className="mobile-back-btn" onClick={handleBack}>
                  <i class="fa-solid fa-angle-left"></i>
                </button>
                    <h4 style={{marginLeft:'5px',fontWeight:'700'}}>Back</h4>
                </div>
                </>
              
              )} */}
              {isMobile && (
  <div className="mobile-header1">
    <button className="mobile-back-btn1" onClick={handleBack}>
      <i className="fa-solid fa-angle-left"></i>
    </button>

    <h4 className="mobile-header-title1">Back</h4>
  </div>
)}


               <div className="tab-content" id="pills-tabContent">
                            
                             <div className="tab-pane fade" id="pills-Balance" role="tabpanel">
                                <div className="dashboard-order">
                                    <div className="title">
                                        <h2>My Available Balance</h2>
                                        <span className="title-leaf title-leaf-gray">
                                            <svg className="icon-width bg-gray">
                                                <use href="../assets/svg/leaf.svg#leaf"></use>
                                            </svg>
                                        </span>
                                    </div>
                                     <div className="wallet-section">
      {/* Available Balance Card */}
      <div
        className="p-4 rounded-4 text-white mb-4"
        style={{
          background: "linear-gradient(90deg, rgb(43 174 221), rgb(43 174 221))",
          position: "relative",
          borderRadius:'10px'
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span>Available Balance</span>
            <h2 className="fw-bold mt-1">
              <FaRupeeSign className="me-1" />
              0
            </h2>
          </div>
            <img src="/assets/images/coin.png" alt="" style={{width:'50px'}} />
        </div>
      </div>

      {/* Feature Icons */}
      <div className="d-flex justify-content-around text-center mb-4">
        <div>
          <FaBolt size={24} className="text-primary mb-2" />
          <p className="mb-0 fw-semibold small">Easy & Fast<br />Payments</p>
        </div>
        <div>
          <FaSyncAlt size={24} className="text-primary mb-2" />
          <p className="mb-0 fw-semibold small">Instant<br />Refunds</p>
        </div>
        <div>
          <FaGift size={24} className="text-primary mb-2" />
          <p className="mb-0 fw-semibold small">Exclusive<br />Offers</p>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="card border-0 shadow-sm mb-4 rounded-4">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className="fw-bold mb-1">
             <img src="/assets/images/coin.png" alt="" style={{width:'40px'}} />
              MD Mart Cash
            </h6>
            <p className="text-muted small mb-0">
              Unavailable in your location. Please contact customer support for any queries.
            </p>
          </div>
          <div className="text-end">
            <h6 className="fw-bold mb-2">₹0</h6>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card border-0 shadow-sm mb-4 rounded-4">
        <div className="card-body">
          <h6 className="fw-bold mb-3">Recent Transactions</h6>
          <div className="mb-2">
            <div className="row">
                <div className="col-sm-10">
                    <p className="mb-1 fw-semibold">Placed Order #19ED6SPRI47612</p>
                    <small className="text-muted">04/01/2025 at 02:04pm</small>
                </div>
                <div className="col-sm-2"><div className="text-end text-dark fw-bold">₹75</div></div>
            </div>
          </div>
          <hr />
          <div className="mb-2">
            <div className="row">
                <div className="col-sm-10">
                    <p className="mb-1 fw-semibold">Free Cash - Valid for next order only</p>
                    <small className="text-muted">02/01/2025 at 10:06am</small>
                </div>
                <div className="col-sm-2">
                     <div className="text-end text-success fw-bold">+₹75</div>
                    <small className="d-block text-end text-muted">Expires 01/01/2026</small>
                </div>
            </div>
          </div>
          <hr />
          <div className="mb-2">
            <div className="row">
                <div className="col-sm-10">
            <p className="mb-1 fw-semibold">Free Cash Expired</p>
            <small className="text-muted">28/12/2024 at 02:04am</small>
                </div>
                <div className="col-sm-2">
            <div className="text-end text-dark fw-bold">₹50</div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="accordion" id="walletAccordion">
        <div className="accordion-item border-0 mb-2 rounded-3 shadow-sm">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fw-semibold"
              type="button"
              onClick={handleOpen}
            >
               How it works?
            </button>
          </h2>
        </div>

        <div className="accordion-item border-0 rounded-3 shadow-sm">
          <h2 className="accordion-header">
            <a className="accordion-button collapsed fw-semibold" type="button" href="/Faq">
               FAQs
            </a>
          </h2>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">How It Works</h5>
                <button
                  className="btn btn-light border-0"
                  onClick={handleClose}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body pt-0">
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item border-0">
                    MD Mart Cash is a wallet service for customers to purchase products until expiry.
                  </li>
                  <li className="list-group-item border-0">
                    MD Mart Cash is valid for 12 months from date of issue and is non-refundable.
                  </li>
                  <li className="list-group-item border-0">
                    Can only be used in serviceable cities and regions.
                  </li>
                  <li className="list-group-item border-0">
                    You can add balance or redeem gift vouchers anytime.
                  </li>
                  <li className="list-group-item border-0">
                    For support, contact <a href="mailto:support@mdmart.com">support@mdmart.com</a>.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade show active" id="pills-dashboard" role="tabpanel">
                                <div className="dashboard-home">
                              <div className="title">
                                        <h2>My Account</h2>
                                      <span className="title-leaf">
                                     <svg className="icon-width bg-gray">
                                       <use href="../assets/svg/leaf.svg#leaf"></use>
                                     </svg>
                                    </span>

                                    </div>

                                    <div className="dashboard-user-name">
                                        <h6 className="text-content">Hello, <b className="text-title">Rajesh Patel</b></h6>
                                        <p className="text-content">From your My Account Dashboard you have the ability to
                                            view a snapshot of your recent account activity and update your account
                                            information. Select a link below to view or edit information.</p>
                                    </div>

                                    <div className="total-box">
                                        <div className="row g-sm-4 g-3">
                                            <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                <a href="Ordersuccess">
                                                    <div className="total-contain">
                                                    <img src="../assets/images/svg/order.svg"
                                                        className="img-1 blur-up lazyload" alt="" />
                                                    <img src="../assets/images/svg/order.svg" className="blur-up lazyload"
                                                        alt="" />
                                                    <div className="total-detail">
                                                        <h5>Total Order</h5>
                                                        <h3 className="text-title">3658</h3>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>

                                            <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                               <a href="">
                                                 <div className="total-contain">
                                                    <img src="../assets/images/svg/pending.svg"
                                                        className="img-1 blur-up lazyload" alt="" />
                                                    <img src="../assets/images/svg/pending.svg" className="blur-up lazyload"
                                                        alt="" />
                                                    <div className="total-detail">
                                                        <h5>Total Pending Order</h5>
                                                        <h3 className="text-title">254</h3>
                                                    </div>
                                                </div>
                                               </a>
                                            </div>

                                            <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                <a href="/Wishlist">
                                                <div className="total-contain">
                                                    <img src="../assets/images/svg/wishlist.svg"
                                                        className="img-1 blur-up lazyload" alt="" />
                                                    <img src="../assets/images/svg/wishlist.svg"
                                                        className="blur-up lazyload" alt="" />
                                                    <div className="total-detail">
                                                        <h5>Total Wishlist</h5>
                                                        <h3 className="text-title">32158</h3>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    <div className="dashboard-title">
                                        <h3>Account Information</h3>
                                    </div>

                                    <div className="row g-4">
                                        <div className="col-xxl-6">
                                            <div className="dashboard-content-title">
                                                <h4>Contact Information <a href="javascript:void(0)"
                                                        data-bs-toggle="modal" data-bs-target="#editProfile">Edit</a>
                                                </h4>
                                            </div>
                                            <div className="dashboard-detail">
                                                <h6 className="text-content">MARK JECNO</h6>
                                                <h6 className="text-content">rajeshpatel01@gmail.com</h6>
                                                <a href="">Change Password</a>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6">
                                            <div className="dashboard-content-title">
                                                <h4>Newsletters <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        data-bs-target="#editProfile">Edit</a></h4>
                                            </div>
                                            <div className="dashboard-detail">
                                                <h6 className="text-content">You are currently not subscribed to any
                                                    newsletter</h6>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="dashboard-content-title">
                                                <h4>Address Book <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        data-bs-target="#editProfile">Edit</a></h4>
                                            </div>

                                            <div className="row g-4">
                                                <div className="col-xxl-6">
                                                    <div className="dashboard-detail">
                                                        <h6 className="text-content">Default Billing Address</h6>
                                                        <h6 className="text-content">You have not set a default billing
                                                            address.</h6>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                            data-bs-target="#editProfile">Edit Address</a>
                                                    </div>
                                                </div>

                                                <div className="col-xxl-6">
                                                    <div className="dashboard-detail">
                                                        <h6 className="text-content">Default Shipping Address</h6>
                                                        <h6 className="text-content">You have not set a default shipping
                                                            address.</h6>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                            data-bs-target="#editProfile">Edit Address</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-wishlist" role="tabpanel">
                                <div className="dashboard-wishlist">
                               <div className="title">
                                        <h2>My Wishlist History</h2>
                                        <span className="title-leaf title-leaf-gray">
                                            <svg className="icon-width bg-gray">
                                                <use href="../assets/svg/leaf.svg#leaf"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="row g-sm-4 g-3">
                                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                            <div className="product-box-3 theme-bg-white h-100">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <a href="/Productdetails">
                                                            <img src="/assets/images/picture/shop1.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>

                                                        <div className="product-header-top">
                                                            <button className="btn wishlist-button close_button">
                                                                
                                                                <i className="fa-solid fa-close"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product-footer">
                                                    <div className="product-detail">
                                                        <span className="span-name">Vegetable</span>
                                                        <a href="/Productdetails">
                                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                                        </a>
                                                        <p className="text-content mt-1 mb-2 product-content">Cheesy feet
                                                            cheesy grin brie. Mascarpone cheese and wine hard cheese the
                                                            big cheese everyone loves smelly cheese macaroni cheese
                                                            croque monsieur.</p>
                                                        <h6 className="unit mt-1">250 ml</h6>
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
                                                        <div className="add-to-cart-box mt-2">
                                                            <button className="btn btn-add-cart addcart-button"
                                                                tabindex="0">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                            <div className="product-box-3 theme-bg-white h-100">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <a href="/Productdetails">
                                                            <img src="/assets/images/picture/shop2.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>

                                                        <div className="product-header-top">
                                                            <button className="btn wishlist-button close_button">
                                                                <i className="fa-solid fa-close"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product-footer">
                                                    <div className="product-detail">
                                                        <span className="span-name">Vegetable</span>
                                                        <a href="/Productdetails">
                                                            <h5 className="name">Peanut Butter Bite Premium Butter Cookies
                                                                600 g</h5>
                                                        </a>
                                                        <p className="text-content mt-1 mb-2 product-content">Feta taleggio
                                                            croque monsieur swiss manchego cheesecake dolcelatte
                                                            jarlsberg. Hard cheese danish fontina boursin melted cheese
                                                            fondue.</p>
                                                        <h6 className="unit mt-1">350 G</h6>
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
                                                        <div className="add-to-cart-box mt-2">
                                                            <button className="btn btn-add-cart addcart-button"
                                                                tabindex="0">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                            <div className="product-box-3 theme-bg-white h-100">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <a href="/Productdetails">
                                                            <img src="/assets/images/picture/shop3.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>

                                                        <div className="product-header-top">
                                                            <button className="btn wishlist-button close_button">
                                                                <i className="fa-solid fa-close"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product-footer">
                                                    <div className="product-detail">
                                                        <span className="span-name">Snacks</span>
                                                        <a href="/Productdetails">
                                                            <h5 className="name">SnackAmor Combo Pack of Jowar Stick and
                                                                Jowar Chips</h5>
                                                        </a>
                                                        <p className="text-content mt-1 mb-2 product-content">Lancashire
                                                            hard cheese parmesan. Danish fontina mozzarella cream cheese
                                                            smelly cheese cheese and wine cheesecake dolcelatte stilton.
                                                            Cream cheese parmesan who moved my cheese when the cheese
                                                            comes out everybody's happy cream cheese red leicester
                                                            ricotta edam.</p>
                                                        <h6 className="unit mt-1">570 G</h6>
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
                                                        <div className="add-to-cart-box mt-2">
                                                            <button className="btn btn-add-cart addcart-button"
                                                                tabindex="0">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                            <div className="product-box-3 theme-bg-white h-100">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <a href="/Productdetails">
                                                            <img src="/assets/images/picture/shop4.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>

                                                        <div className="product-header-top">
                                                            <button className="btn wishlist-button close_button">
                                                                <i className="fa-solid fa-close"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product-footer">
                                                    <div className="product-detail">
                                                        <span className="span-name">Snacks</span>
                                                        <a href="/Productdetails">
                                                            <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g
                                                            </h5>
                                                        </a>
                                                        <p className="text-content mt-1 mb-2 product-content">Cheddar
                                                            cheddar pecorino hard cheese hard cheese cheese and biscuits
                                                            bocconcini babybel. Cow goat paneer cream cheese fromage
                                                            cottage cheese cauliflower cheese jarlsberg.</p>
                                                        <h6 className="unit mt-1">100 G</h6>
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
                                                        <div className="add-to-cart-box mt-2">
                                                            <button className="btn btn-add-cart addcart-button"
                                                                tabindex="0">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                            <div className="product-box-3 theme-bg-white h-100">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <a href="/Productdetails">
                                                            <img src="/assets/images/picture/shop5.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>

                                                        <div className="product-header-top">
                                                            <button className="btn wishlist-button close_button">
                                                                <i className="fa-solid fa-close"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product-footer">
                                                    <div className="product-detail">
                                                        <span className="span-name">Vegetable</span>
                                                        <a href="/Productdetails">
                                                            <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                                        </a>
                                                        <p className="text-content mt-1 mb-2 product-content">Bavarian
                                                            bergkase smelly cheese swiss cut the cheese lancashire who
                                                            moved my cheese manchego melted cheese. Red leicester paneer
                                                            cow when the cheese comes out everybody's happy croque
                                                            monsieur goat melted cheese port-salut.</p>
                                                        <h6 className="unit mt-1">550 G</h6>
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
                                                        <div className="add-to-cart-box mt-2">
                                                            <button className="btn btn-add-cart addcart-button"
                                                                tabindex="0">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                            <div className="product-box-3 theme-bg-white h-100">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <a href="/Productdetails">
                                                            <img src="/assets/images/picture/shop6.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>

                                                        <div className="product-header-top">
                                                            <button className="btn wishlist-button close_button">
                                                                <i className="fa-solid fa-close"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product-footer">
                                                    <div className="product-detail">
                                                        <span className="span-name">Vegetable</span>
                                                        <a href="/Productdetails">
                                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                                        </a>
                                                        <p className="text-content mt-1 mb-2 product-content">Melted cheese
                                                            babybel chalk and cheese. Port-salut port-salut cream cheese
                                                            when the cheese comes out everybody's happy cream cheese
                                                            hard cheese cream cheese red leicester.</p>
                                                        <h6 className="unit mt-1">1 Kg</h6>
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
                                                        <div className="add-to-cart-box mt-2">
                                                            <button className="btn btn-add-cart addcart-button"
                                                                tabindex="0">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                            <div className="product-box-3 theme-bg-white h-100">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <a href="/Productdetails">
                                                            <img src="/assets/images/picture/shop1.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>

                                                        <div className="product-header-top">
                                                            <button className="btn wishlist-button close_button">
                                                                <i className="fa-solid fa-close"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product-footer">
                                                    <div className="product-detail">
                                                        <span className="span-name">Vegetable</span>
                                                        <a href="/Productdetails">
                                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                                        </a>
                                                        <p className="text-content mt-1 mb-2 product-content">Squirty cheese
                                                            cottage cheese cheese strings. Red leicester paneer danish
                                                            fontina queso lancashire when the cheese comes out
                                                            everybody's happy cottage cheese paneer.</p>
                                                        <h6 className="unit mt-1">250 ml</h6>
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
                                                        <div className="add-to-cart-box mt-2">
                                                            <button className="btn btn-add-cart addcart-button"
                                                                tabindex="0">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus"></i>
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

                            <div className="tab-pane fade" id="pills-order" role="tabpanel">
                                <div className="dashboard-order">
                                    <div className="title">
                                        <h2>My Orders History</h2>
                                        <span className="title-leaf title-leaf-gray">
                                            <svg className="icon-width bg-gray">
                                                <use href="../assets/svg/leaf.svg#leaf"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    {/*  */}
                                      <div>
      {orders.map((o, i) => (
        <div className="order-card" key={i}>

         <div className="row">
            <div className="col-12">
                 {/* Images */}
          <div className="order-images">
            {o.items.slice(0, 7).map((src, index) => (
              <div key={index} className="order-image-wrapper">
                <img src={src} className="order-image" />

                {index === 6 && o.items.length > 7 && (
                  <span className="image-count">+{o.items.length - 6}</span>
                )}
              </div>
            ))}
          </div>
            </div>
         </div>
            <div className="row mt-3">
                <div className="col-sm-6">
                     {/* Details */}
          <div className="order-details">
            <p className="order-status">
              <span className="dot"></span> {o.status}
            </p>
            <p className="order-date">Placed at {o.date}</p>
          </div>
                </div>
                <div className="col-sm-6 ">
                      {/* Amount */}
          <div className="order-amount">
            ₹{o.amount} <span className="arrow">›</span>
          </div>
                </div>
            </div>
         

        
        </div>
      ))}
    </div>
                                    {/*  */}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-address" role="tabpanel">
                                <div className="dashboard-address">
                                    <div className="title title-flex">
                                        <div>
                                            <h2>My Address Book</h2>
                                            <span className="title-leaf">
                                                <svg className="icon-width bg-gray">
                                                     <use href="../assets/svg/leaf.svg#leaf"></use>
                                                </svg>
                                            </span>
                                        </div>

                                        <button className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                                            data-bs-toggle="modal" data-bs-target="#add-address"><i data-feather="plus"
                                                className="me-2"></i> Add New Address</button>
                                    </div>

                                    <div className="row g-sm-4 g-3">
                                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                            <div className="address-box">
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="jack"
                                                            id="flexRadioDefault2" checked />
                                                    </div>

                                                    <div className="label">
                                                        <label>Home</label>
                                                    </div>

                                                    <div className="table-responsive address-table">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <td colspan="2">Jack Jennas</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Address :</td>
                                                                    <td>
                                                                        <p>8424 James Lane South San Francisco, CA 94080
                                                                        </p>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Pin Code :</td>
                                                                    <td>+380</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Phone :</td>
                                                                    <td>+ 812-710-3798</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="button-group">
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#editProfile"><i data-feather="edit"></i>
                                                        Edit</button>
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#removeProfile"><i data-feather="trash-2"></i>
                                                        Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                            <div className="address-box">
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="jack"
                                                            id="flexRadioDefault3" />
                                                    </div>

                                                    <div className="label">
                                                        <label>Office</label>
                                                    </div>

                                                    <div className="table-responsive address-table">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <td colspan="2">Terry S. Sutton</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Address :</td>
                                                                    <td>
                                                                        <p>2280 Rose Avenue Kenner, LA 70062</p>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Pin Code :</td>
                                                                    <td>+25</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Phone :</td>
                                                                    <td>+ 504-228-0969</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="button-group">
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#editProfile"><i data-feather="edit"></i>
                                                        Edit</button>
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#removeProfile"><i data-feather="trash-2"></i>
                                                        Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                            <div className="address-box">
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="jack"
                                                            id="flexRadioDefault4" />
                                                    </div>

                                                    <div className="label">
                                                        <label>Neighbour</label>
                                                    </div>

                                                    <div className="table-responsive address-table">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <td colspan="2">Juan M. McKeon</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Address :</td>
                                                                    <td>
                                                                        <p>1703 Carson Street Lexington, KY 40593</p>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Pin Code :</td>
                                                                    <td>+78</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Phone :</td>
                                                                    <td>+ 859-257-0509</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="button-group">
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#editProfile"><i data-feather="edit"></i>
                                                        Edit</button>
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#removeProfile"><i data-feather="trash-2"></i>
                                                        Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                            <div className="address-box">
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="jack"
                                                            id="flexRadioDefault5" />
                                                    </div>

                                                    <div className="label">
                                                        <label>Home 2</label>
                                                    </div>

                                                    <div className="table-responsive address-table">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <td colspan="2">Gary M. Bailey</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Address :</td>
                                                                    <td>
                                                                        <p>2135 Burning Memory Lane Philadelphia, PA
                                                                            19135</p>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Pin Code :</td>
                                                                    <td>+26</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Phone :</td>
                                                                    <td>+ 215-335-9916</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="button-group">
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#editProfile"><i data-feather="edit"></i>
                                                        Edit</button>
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#removeProfile"><i data-feather="trash-2"></i>
                                                        Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                            <div className="address-box">
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="jack"
                                                            id="flexRadioDefault1" />
                                                    </div>

                                                    <div className="label">
                                                        <label>Home 2</label>
                                                    </div>

                                                    <div className="table-responsive address-table">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <td colspan="2">Gary M. Bailey</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Address :</td>
                                                                    <td>
                                                                        <p>2135 Burning Memory Lane Philadelphia, PA
                                                                            19135</p>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Pin Code :</td>
                                                                    <td>+26</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Phone :</td>
                                                                    <td>+ 215-335-9916</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="button-group">
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#editProfile"><i data-feather="edit"></i>
                                                        Edit</button>
                                                    <button className="btn btn-sm add-button w-100" data-bs-toggle="modal"
                                                        data-bs-target="#removeProfile"><i data-feather="trash-2"></i>
                                                        Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-card" role="tabpanel">
                               <div className="dashboard-card">
  <div className="title title-flex align-items-center justify-content-between">
    <div>
      <h2>My Refunds</h2>
      <span className="title-leaf">
        <svg className="icon-width bg-gray">
          <use href="../assets/svg/leaf.svg#leaf"></use>
        </svg>
      </span>
    </div>
  </div>

  <div className="row g-4 mt-2">
    {/* <!-- Refund Item 1 --> */}
    <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
      <div className="refund-card border rounded-4 p-3 shadow-sm h-100">
        <div className="d-flex align-items-center mb-3">
          <img
            src="../assets/images/veg-3/cate1/4.png"
            className="img-fluid rounded me-3"
            alt="Product"
            style={{width:'70px', height:'70px', objectFit:'cover'}}
            // style="width: 70px; height: 70px; object-fit: cover;"
          />
          <div>
            <h6 className="fw-semibold mb-1">Chips</h6>
            <small className="text-muted">Order ID: #2548</small>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold text-dark">Refund Amount:</span>
          <span className="fw-bold text-success">₹70.21</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold text-dark">Refund Status:</span>
          <span className="badge bg-success">Approved</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-semibold text-dark">Refund Date:</span>
          <span className="text-muted">08/05/2025</span>
        </div>

        <div className="d-flex justify-content-between border-top pt-2">
        
          <a href="" className="text-danger fw-semibold">
            <i className="far fa-times-circle me-1"></i>Cancel
          </a>
        </div>
      </div>
    </div>

    {/* <!-- Refund Item 2 --> */}
    <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
      <div className="refund-card border rounded-4 p-3 shadow-sm h-100">
        <div className="d-flex align-items-center mb-3">
          <img
            src="../assets/images/veg-3/cate1/5.png"
            className="img-fluid rounded me-3"
            alt="Product"
            style={{width:'70px', height:'70px', objectFit:'cover'}}
            // style="width: 70px; height: 70px; object-fit: cover;"
          />
          <div>
            <h6 className="fw-semibold mb-1">Soda</h6>
            <small className="text-muted">Order ID: #1536</small>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold text-dark">Refund Amount:</span>
          <span className="fw-bold text-warning">₹70.21</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold text-dark">Refund Status:</span>
          <span className="badge bg-warning text-dark">Pending</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-semibold text-dark">Requested On:</span>
          <span className="text-muted">11/09/2025</span>
        </div>

        <div className="d-flex justify-content-between border-top pt-2">
         
          <a href="" className="text-muted fw-semibold disabled">
            <i className="far fa-clock me-1"></i>In Process
          </a>
        </div>
      </div>
    </div>

    {/* <!-- Refund Item 3 --> */}
    <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
      <div className="refund-card border rounded-4 p-3 shadow-sm h-100">
        <div className="d-flex align-items-center mb-3">
          <img
            src="/assets/images/picture/kaju.png"
            className="img-fluid rounded me-3"
            alt="Product"
             style={{width:'70px', height:'70px', objectFit:'cover'}}
            // style="width: 70px; height: 70px; object-fit: cover;"
          />
          <div>
            <h6 className="fw-semibold mb-1">Cashew Nuts</h6>
            <small className="text-muted">Order ID: #1366</small>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold text-dark">Refund Amount:</span>
          <span className="fw-bold text-danger">₹70.21</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold text-dark">Refund Status:</span>
          <span className="badge bg-danger">Rejected</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-semibold text-dark">Rejected On:</span>
          <span className="text-muted">10/10/2025</span>
        </div>

        <div className="d-flex justify-content-between border-top pt-2">
         
          <a href=""  className="text-success fw-semibold">
            <i className="far fa-redo me-1"></i>Reapply
          </a>
        </div>
      </div>
    </div>
  </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-profile" role="tabpanel">
                                <div className="dashboard-profile">
                                  <div className="title">
                                        <h2>My Profile</h2>
                                        <span className="title-leaf">
                                            <svg className="icon-width bg-gray">
                                                 <use href="../assets/svg/leaf.svg#leaf"></use>
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="profile-detail dashboard-bg-box">
                                        <div className="dashboard-title">
                                            <h3>Profile Name</h3>
                                        </div>
                                        <div className="profile-name-detail">
                                            <div className="d-sm-flex align-items-center d-block">
                                                <h3>Rajesh Patel</h3>
                                                <div className="product-rating profile-rating">
                                                    <ul className="rating">
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

                                            <a href="javascript:void(0)" data-bs-toggle="modal"
                                                data-bs-target="#editProfile">Edit</a>
                                        </div>

                                        <div className="location-profile">
                                            <ul>
                                                <li>
                                                    <div className="location-box">
                                                        <i data-feather="map-pin"></i>
                                                        <h6>Downers Grove, IL</h6>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="location-box">
                                                        <i data-feather="mail"></i>
                                                        <h6>rajeshpatel01@gmail.com</h6>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="location-box">
                                                        <i data-feather="check-square"></i>
                                                        <h6>Licensed for 2 years</h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="profile-description">
                                            <p>Residences can be classified by and how they are connected to
                                                neighbouring residences and land. Different types of housing tenure can
                                                be used for the same physical type.</p>
                                        </div>
                                    </div>

                                    <div className="profile-about dashboard-bg-box">
                                        <div className="row">
                                            <div className="col-xxl-7">
                                                <div className="dashboard-title mb-3">
                                                    <h3>Profile About</h3>
                                                </div>

                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Gender :</td>
                                                                <td>Female</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Birthday :</td>
                                                                <td>21/05/1997</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Phone Number :</td>
                                                                <td>
                                                                    <a href=""> +91 846 - 547 -
                                                                        210</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Address :</td>
                                                                <td>549 Sulphur Springs Road, Downers, IL</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="dashboard-title mb-3">
                                                    <h3>Login Details</h3>
                                                </div>

                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Email :</td>
                                                                <td>
                                                                    <a href="#">rajeshpatel01@gmail.com
                                                                        <span data-bs-toggle="modal"
                                                                            data-bs-target="#editProfile">Edit</span></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Password :</td>
                                                                <td>
                                                                    <a href="#">●●●●●●
                                                                        <span data-bs-toggle="modal"
                                                                            data-bs-target="#editProfile">Edit</span></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="col-xxl-5">
                                                <div className="profile-image">
                                                    <img src="../assets/images/inner-page/dashboard-profile.png"
                                                        className="img-fluid blur-up lazyload" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-download" role="tabpanel">
                                <section className="faq-box-contain section-b-space">
                                                <div className="faq-accordion">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne">
                                        What is MD Mart and what do we offer? <i
                                            className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            <strong>MD Mart</strong> is a modern eCommerce platform designed to make your daily shopping experience easier, faster, and more convenient. 
                                            From groceries and household items to personal care and lifestyle products — we bring everything you need right to your doorstep.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo">
                                         How do I place an order on your website? <i
                                            className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                         <p>
                                            Placing an order is simple! Just browse through our products, add your desired items to the cart, 
                                            proceed to checkout, fill in your shipping details, and make a secure payment using any of our supported methods.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree">
                                       What payment methods do you accept? <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>We accept all major payment options including Credit/Debit Cards, UPI, Net Banking, Wallets, and Cash on Delivery (COD) 
                                        depending on your delivery location.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour">
                                        How long will it take to deliver my order? <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Delivery times depend on your location and product availability. 
                                        Generally, we deliver within <strong>2-5 business days</strong>. 
                                        You’ll receive regular updates via SMS or email once your order is dispatched.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive">
                                        How can I track my order? <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p> Once your order is shipped, we’ll send you a tracking link via email or SMS. 
                                        You can also log in to your account and view the real-time status of your order from the “My Orders” section.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix">
                                        What is your return and refund policy? <i
                                            className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>If you’re not satisfied with your purchase, you can request a return or replacement within 
                                        <strong>7 days</strong> of delivery. Refunds will be processed once the item passes quality inspection. 
                                        Please refer to our <a href="/Return">Return Policy</a> page for more details.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven">
                                        Is my personal information secure? <i
                                        className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Absolutely! We take your privacy seriously. 
                                        All your personal and payment information is encrypted and protected using the latest security standards. 
                                        Learn more in our <a href="/Privacy">Privacy Policy</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight">
                                         Do you offer discounts or loyalty programs? <i
                                            className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Yes! We frequently offer seasonal discounts, promo codes, and loyalty rewards for our regular customers. 
                                        Stay updated by subscribing to our newsletter or following us on social media.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine">
                                        How can I contact customer support? <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>You can reach our support team through the <a href="/contact">Contact Us</a> page, 
                                        email us at <strong>support@mdmart.com</strong>, or call our helpline between <strong>9 AM to 9 PM</strong>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                </div>
                                </section>
                            </div>

                            <div className="tab-pane fade" id="pills-security" role="tabpanel">
                              
                                 <div className="row g-4 mt-2">
  {giftCardsData.map((card) => (
    <div key={card.id} className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
      <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
        {/* Card Image */}
        <img
          src={card.image}
          className="card-img-top"
          alt={card.title}
          style={{ 
    width: "100%", 
    height: "auto",  // maintain height according to width
    objectFit: "contain", // no cropping
    background: "#f8f9fa" // optional background if image doesn't fill
  }}
        />

        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title fw-bold">{card.title}</h5>
          <p className="card-text text-muted mb-1">Code: {card.code}</p>
          <p className="h5 fw-bold text-primary mb-2">₹{card.amount.toFixed(2)}</p>

          {/* Status Badge */}
          <span
            className={`badge mb-3 ${
              card.status === "Active"
                ? "bg-success"
                : card.status === "Pending"
                ? "bg-warning text-dark"
                : "bg-danger"
            }`}
          >
            {card.status}
          </span>

          {/* Action Buttons */}
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary btn-sm">
              <i className="far fa-eye me-1"></i> View
            </button>
            <button
    className={`btn btn-sm flex-fill d-flex align-items-center justify-content-center ${
      card.status === "Redeemed" || card.status === "Expired"
        ? "btn-secondary disabled"
        : "btn-success"
    }`}
  >
    <i className="fas fa-gift me-2"></i> {/* icon */}
    Redeem
  </button>
          </div>
        </div>
      </div>
    </div>
  ))}
                                 </div>
                            </div>

                            <div className="tab-pane fade" id="pills-policy" role="tabpanel">
                                <div className="title">
                                        <h2>Privacy Policy</h2>
                                        <span className="title-leaf">
                                            <svg className="icon-width bg-gray">
                                                 <use href="../assets/svg/leaf.svg#leaf"></use>
                                            </svg>
                                        </span>
                                    </div>
                              <section className="faq-box-contain section-b-space pt-0">
                                                <div className="faq-accordion">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne">
                                        1. Data we collect <i
                                            className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            We collect information that you provide directly and information
              collected automatically when you use our services.
                                        </p>
                                        <ul className="privacypolicy-list list-disc list-inside mt-3 text-gray-700 space-y-2">
              <li>Name, email, phone number, address, and payment information.</li> <br />
              <li>Automatically collected data such as IP, device, and usage details.</li><br />
              <li>Information from third-party sources such as payment gateways or social media.</li>
            </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo">
                                         2. How we use your data <i
                                            className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                         {/* <p> */}
                                             <ul className="privacypolicy-list list-disc list-inside mt-3 text-gray-700 space-y-2">
              <li>To provide, maintain, and improve our services.</li> <br />
              <li>To process transactions and communicate with you.</li><br />
              <li>To detect and prevent fraudulent or unauthorized activity.</li><br />
              <li>To personalize your experience and offer relevant promotions.</li>
            </ul>
                                        {/* </p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree">
                                       3. Sharing & Disclosure <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>We do not sell your data. We may share it with trusted service providers, legal authorities, or as required by law.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour">
                                        4. Cookies & TrackingHow long will it take to deliver my order? <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p> We use cookies to enhance your experience. You can manage cookie preferences in your browser settings.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive">
                                        5. Security<i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>               We take reasonable measures to protect your personal information but cannot guarantee 100% security.
</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix">
                                        6. Your Rights <i
                                            className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>              You have the right to access, update, or delete your data. Contact us if you wish to exercise these rights.
</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven">
                                        7. Changes to this Policy<i
                                        className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>We may update this policy occasionally. Please review it periodically for updates.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight">
                                         8. Contact Us<i
                                            className="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p> If you have any questions about this Privacy Policy, contact us at:</p> 
                                        <address className="privacypolicy-address not-italic mt-3 text-gray-700">
              <strong>MD Mart</strong>
              <br />
              Email: <a href="mailto:mdmart.superstore@gmail.com" className="privacypolicy-email underline">mdmart.superstore@gmail.com</a>
            </address>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                                </div>
                                </section>
                            </div>

                        </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    {/* <!-- User Dashboard Section End --> */}


        {/* <!-- Edit Profile Start --> */}
    <div className="modal fade theme-modal" id="editProfile" tabindex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel2">Edit Profile</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row g-4">
                        <div className="col-xxl-12">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="pname" value="Jack Jennas" />
                                    <label for="pname">Full Name</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-6">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="email" className="form-control" id="email1" value="rajeshpatel01@gmail.com" />
                                    <label for="email1">Email address</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-6">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input className="form-control" type="tel" value="4567891234" name="mobile" id="mobile"
                                        maxlength="10" oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                            this.value.slice(0, this.maxLength);" />
                                    <label for="mobile">Email address</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-12">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="address1"
                                        value="8424 James Lane South San Francisco" />
                                    <label for="address1">Add Address</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-12">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="address2" value="CA 94080" />
                                    <label for="address2">Add Address 2</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-4">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <select className="form-select" id="floatingSelect1">
                                        <option selected>Choose Your Country</option>
                                        <option value="kingdom">United Kingdom</option>
                                        <option value="states">United States</option>
                                        <option value="fra">France</option>
                                        <option value="china">China</option>
                                        <option value="spain">Spain</option>
                                        <option value="italy">Italy</option>
                                        <option value="turkey">Turkey</option>
                                        <option value="germany">Germany</option>
                                        <option value="russian">Russian Federation</option>
                                        <option value="malay">Malaysia</option>
                                        <option value="mexico">Mexico</option>
                                        <option value="austria">Austria</option>
                                        <option value="hong">Hong Kong SAR, China</option>
                                        <option value="ukraine">Ukraine</option>
                                        <option value="thailand">Thailand</option>
                                        <option value="saudi">Saudi Arabia</option>
                                        <option value="canada">Canada</option>
                                        <option value="singa">Singapore</option>
                                    </select>
                                    <label for="floatingSelect">Country</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-4">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <select className="form-select" id="floatingSelect">
                                        <option selected>Choose Your City</option>
                                        <option value="kingdom">India</option>
                                        <option value="states">Canada</option>
                                        <option value="fra">Dubai</option>
                                        <option value="china">Los Angeles</option>
                                        <option value="spain">Thailand</option>
                                    </select>
                                    <label for="floatingSelect">City</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-4">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="address3" value="94080" />
                                    <label for="address3">Pin Code</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-animation btn-md fw-bold"
                        data-bs-dismiss="modal">Close</button>
                    <button type="button" data-bs-dismiss="modal"
                        className="btn theme-bg-color btn-md fw-bold text-light">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Edit Profile End --> */}
      {/* <!-- Edit Card Start --> */}
    <div className="modal fade theme-modal" id="editCard" tabindex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel8">Edit Card</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row g-4">
                        <div className="col-xxl-6">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="finame" value="Mark" />
                                    <label for="finame">First Name</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-6">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="laname" value="Jecno" />
                                    <label for="laname">Last Name</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-4">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <select className="form-select" id="floatingSelect12">
                                        <option selected>Card Type</option>
                                        <option value="kingdom">Visa Card</option>
                                        <option value="states">MasterCard Card</option>
                                        <option value="fra">RuPay Card</option>
                                        <option value="china">Contactless Card</option>
                                        <option value="spain">Maestro Card</option>
                                    </select>
                                    <label for="floatingSelect12">Card Type</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-animation btn-md fw-bold"
                        data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn theme-bg-color btn-md fw-bold text-light">Update Card</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Edit Card End --> */}
      {/* <!-- Remove Profile Modal Start --> */}
    <div className="modal fade theme-modal remove-profile" id="removeProfile" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header d-block text-center">
                    <h5 className="modal-title w-100" id="exampleModalLabel22">Are You Sure ?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="remove-box">
                        <p>The permission for the use/group, preview is inherited from the object, object will create a
                            new permission for this object</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-animation btn-md fw-bold" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn theme-bg-color btn-md fw-bold text-light"
                        data-bs-target="#removeAddress" data-bs-toggle="modal">Yes</button>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade theme-modal remove-profile" id="removeAddress" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center" id="exampleModalLabel12">Done!</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="remove-box text-center">
                        <h4 className="text-content">It's Removed.</h4>
                    </div>
                </div>
                <div className="modal-footer pt-0">
                    <button type="button" className="btn theme-bg-color btn-md fw-bold text-light"
                        data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Remove Profile Modal End --> */}
        {/* <!-- Add address modal box start --> */}
    <div className="modal fade theme-modal" id="add-address" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add a new address</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-floating mb-4 theme-form-floating">
                            <input type="text" className="form-control" id="fname" placeholder="Enter First Name" />
                            <label for="fname">First Name</label>
                        </div>
                    </form>

                    <form>
                        <div className="form-floating mb-4 theme-form-floating">
                            <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" />
                            <label for="lname">Last Name</label>
                        </div>
                    </form>

                    <form>
                        <div className="form-floating mb-4 theme-form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Enter Email Address" />
                            <label for="email">Email Address</label>
                        </div>
                    </form>

                    <form>
                        <div className="form-floating mb-4 theme-form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="address"
                                style={{height:'100px'}}></textarea>
                            <label for="address">Enter Address</label>
                        </div>
                    </form>

                    <form>
                        <div className="form-floating mb-4 theme-form-floating">
                            <input type="email" className="form-control" id="pin" placeholder="Enter Pin Code" />
                            <label for="pin">Pin Code</label>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-md" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn theme-bg-color btn-md text-white" data-bs-dismiss="modal">Save
                        changes</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Add address modal box end --> */}
    <Footer />
    </>
  )
}

export default Account