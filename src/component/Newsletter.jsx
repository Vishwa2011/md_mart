import React from 'react'

export default function Newsletter() {
  return (
    <div>
        
    <section class="newsletter-section-2 section-b-space">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="newsletter-box hover-effect"  style={{
    backgroundImage: "url('https://themes.pixelstrap.com/fastkart/assets/images/veg-3/shape/background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-3/shape/background.png" class="img-fluid bg-img d-none" alt="" />

                        <div class="row">
                            <div class="col-xxl-8 col-xl-7">
                                <div class="newsletter-detail p-center-left text-white">
                                    <div>
                                        <h2>Subscribe For New Offers</h2>
                                        <h4>Join our subscribers list to get the latest news, updates and special offers
                                            delivered directly in your inbox.</h4>
                                        <form class="row g-2">
                                            <div class="col-sm-10 col-12">
                                                <div class="newsletter-form">
                                                    <input type="email" class="form-control" id="email"
                                                        placeholder="Enter your email" />
                                                    <button type="submit" class="btn bg-white theme-color btn-md fw-500
                                                        submit-button">Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xxl-4 col-xl-5 d-xl-block d-none">
                                <div class="shape-box">
                                    <img src="/assets/images/snack.png" alt="" class="img-fluid image-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}
