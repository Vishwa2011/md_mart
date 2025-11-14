import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OffersPage = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const offers = [
    {
      img: "../assets/images/Banner5.jpg",
      title: "Winter Grocery Essentials",
      desc: "Stay cozy & stock up your pantry — up to 40% OFF!",
      code: "WINTER40",
      category: "Winter Essentials",
    },
    {
      img: "../assets/images/Banner7.jpg",
      title: "Spice It Up!",
      desc: "Hot discounts on authentic spices — flat 30% OFF.",
      code: "SPICE30",
      category: "Spices",
    },
    {
      img: "../assets/images/Banner4.jpg",
      title: "Clean & Fresh Savings",
      desc: "Get up to 25% OFF on detergent liquids & cleaning items.",
      code: "CLEAN25",
      category: "Detergent",
    },
    {
      img: "../assets/images/Banner6.jpg",
      title: "Smart Grocery Deals",
      desc: "Buy more, save more — groceries at up to 50% OFF!",
      code: "SAVE50",
      category: "Groceries",
    },
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  return (
    <div>
      <Navbar />
      <section className="offercouponpage-section">
        <div className="offercouponpage-container">
          <h2 className="offercouponpage-page-title">
            Exclusive Offers & Coupons
          </h2>

          {/* Offer Cards */}
          <div className="offercouponpage-grid">
            {offers.map((offer, index) => (
              <div className="offercouponpage-card" key={index}>
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="offercouponpage-img"
                />
                <div className="offercouponpage-content">
                  <h5>{offer.title}</h5>
                  <p>{offer.desc}</p>

                  <div className="offercouponpage-coupon-box">
                    <span className="offercouponpage-code">{offer.code}</span>
                    <button
                      className="offercouponpage-copy-btn"
                      onClick={() => handleCopy(offer.code)}
                    >
                      {copiedCode === offer.code ? "Copied!" : "Copy Code"}
                    </button>
                  </div>

                  {/* ✅ Message BELOW the coupon box */}
                  {copiedCode === offer.code && (
                    <p className="offercouponpage-copied-msg">
                       Coupon Code Copied!
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OffersPage;
