import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Blog = () => {
  return (
    <>
    <Navbar/>
 {/* <!-- Breadcrumb Section Start --> */}
    <section class="breadcrumb-section pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-contain">
                        <h2>Blog </h2>
                        <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">
                                        <i class="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item active">Blog </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Blog Section Start --> */}
    <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
            <div class="row g-4">
                <div class="col-xxl-9 col-xl-8 col-lg-7 order-lg-2">
                    <div class="row g-4">
                        <div class="col-12">
                            <div class="blog-box blog-list wow fadeInUp">
                                <div class="blog-image">
                                    <img src="/assets/images/picture/blog 1.jpg" class="blur-up lazyload" alt="" />
                                    {/* (450*300) */}
                                </div>

                                <div class="blog-contain blog-contain-2">
                                    <div class="blog-label">
                                        <span class="time"><i data-feather="clock"></i> <span>25 Feg, 2022</span></span>
                                        <span class="super"><i data-feather="user"></i> <span>Mark J.
                                                Speight</span></span>
                                    </div>
                                    <a href="/Blogdetails">
                                        <h3>one pot creamy mediterranean chicken pasta cream.</h3>
                                    </a>
                                    <p>Monterey jack cheese slices cream cheese cream cheese hard cheese roquefort
                                        emmental lancashire. Who moved my cheese dolcelatte st. agur blue cheese fromage
                                        mozzarella say cheese mascarpone blue castello.</p>
                                        <a href="/Blogdetails">
                                                 <button onclick="location.href = '/Blogdetails';" class="blog-button">Read
                                             More <i class="fa-solid fa-right-long"></i></button>

                                        </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="blog-box blog-list wow fadeInUp" data-wow-delay="0.05s">
                                <div class="blog-image">
                                    <img src="/assets/images/picture/blog 2.jpg" class="blur-up lazyload" alt="" />
                                </div>

                                <div class="blog-contain blog-contain-2">
                                    <div class="blog-label">
                                        <span class="time"><i data-feather="clock"></i> <span>25 Feg, 2022</span></span>
                                        <span class="super"><i data-feather="user"></i> <span>rebeus
                                                hagrid</span></span>
                                    </div>
                                    <a href="/Blogdetails">
                                        <h3>Crispy Frozen Vegetable is the on the Tempura.</h3>
                                    </a>
                                    <p>Manchego cauliflower cheese st. agur blue cheese red leicester monterey jack
                                        cheesecake the big cheese edam. Gouda monterey jack roquefort hard cheese feta
                                        croque monsieur cheeseburger manchego.</p>
                                          <a href="/Blogdetails">
                                    <button onclick="location.href = 'Blogdetails';" class="blog-button">Read
                                        More <i class="fa-solid fa-right-long"></i></button>
                                          </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="blog-box blog-list wow fadeInUp" data-wow-delay="0.1s">
                                <div class="blog-image">
                                    <a href="/Blogdetails">
                                        <img src="/assets/images/picture/blog 1.jpg" class="blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <label><i class="fa-solid fa-bolt-lightning"></i> popular</label>
                                </div>

                                <div class="blog-contain blog-contain-2">
                                    <div class="blog-label">
                                        <span class="time"><i data-feather="clock"></i> <span>25 Feg, 2022</span></span>
                                        <span class="super"><i data-feather="user"></i> <span>Chris C.
                                                Hall</span></span>
                                    </div>
                                    <a href="/Blogdetails">
                                        <h3>How to start regrowing green onions and other vegetables.</h3>
                                    </a>
                                    <p>Cheese triangles say cheese cheese and biscuits dolcelatte jarlsberg cream cheese
                                        taleggio fromage frais. Who moved my cheese cottage cheese cheese on toast
                                        rubber cheese melted cheese ricotta.</p>
                                          <a href="/Blogdetails">
                                                 <button onclick="location.href = '/Blogdetails';" class="blog-button">Read
                                                  More <i class="fa-solid fa-right-long"></i></button>
                                          </a>
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

                <div class="col-xxl-3 col-xl-4 col-lg-5 order-lg-1">
                    <div class="left-sidebar-box wow fadeInUp">
                        <div class="left-search-box">
                            <div class="search-box">
                                <input type="search" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Search...." />
                            </div>
                        </div>

                        <div class="accordion left-accordion-box" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne">
                                        Recent Post
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                    <div class="accordion-body pt-0">
                                        <div class="recent-post-box">
                                            <div class="recent-box">
                                                <a href="/Blogdetails" class="recent-image">
                                                    <img src="/assets/images/picture/blog 1.jpg"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>

                                                <div class="recent-detail">
                                                    <a href="/Blogdetails">
                                                        <h5 class="recent-name">Green onion knife and salad placed</h5>
                                                    </a>
                                                    <h6>25 Jan, 2022 <i data-feather="thumbs-up"></i></h6>
                                                </div>
                                            </div>

                                            <div class="recent-box">
                                                <a href="/Blogdetails" class="recent-image">
                                                    <img src="/assets/images/picture/blog 2.jpg"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>

                                                <div class="recent-detail">
                                                    <a href="/Blogdetails">
                                                        <h5 class="recent-name">Health and skin for your organic</h5>
                                                    </a>
                                                    <h6>25 Jan, 2022 <i data-feather="thumbs-up"></i></h6>
                                                </div>
                                            </div>

                                            <div class="recent-box">
                                                <a href="/Blogdetails" class="recent-image">
                                                    <img src="/assets/images/picture/blog 1.jpg"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>

                                                <div class="recent-detail">
                                                    <a href="/Blogdetails">
                                                        <h5 class="recent-name">Organics mix masala fresh & soft</h5>
                                                    </a>
                                                    <h6>25 Jan, 2022 <i data-feather="thumbs-up"></i></h6>
                                                </div>
                                            </div>

                                            <div class="recent-box">
                                                <a href="/Blogdetails" class="recent-image">
                                                    <img src="/assets/images/picture/blog 2.jpg"
                                                        class="img-fluid blur-up lazyload" alt="" />
                                                </a>

                                                <div class="recent-detail">
                                                    <a href="/Blogdetails">
                                                        <h5 class="recent-name">Fresh organics brand and picnic</h5>
                                                    </a>
                                                    <h6>25 Jan, 2022 <i data-feather="thumbs-up"></i></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo">Category</button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse collapse show">
        <div class="accordion-body p-0">
            <div class="category-list-box">
                <ul>
                    <li>
                        <a href="/Blog">
                            <div class="category-name">
                                <h5>Snacks & Namkeen</h5>
                                <span>10</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div class="category-name">
                                <h5>Beverages</h5>
                                <span>6</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div class="category-name">
                                <h5>Breakfast Items</h5>
                                <span>8</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div class="category-name">
                                <h5>Cleaning Supplies</h5>
                                <span>9</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div class="category-name">
                                <h5>Personal Care</h5>
                                <span>12</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div class="category-name">
                                <h5>Packaged Foods</h5>
                                <span>10</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree">Product Tags</button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse collapse show">
        <div class="accordion-body pt-0">
            <div class="product-tags-box">
                <ul>
                    <li><a href="">Snacks</a></li>
                    <li><a href="">Soft Drinks</a></li>
                    <li><a href="">Biscuits</a></li>
                    <li><a href="">Tea & Coffee</a></li>
                    <li><a href="">Detergent</a></li>
                    <li><a href="">Soap</a></li>
                    <li><a href="">Toothpaste</a></li>
                    <li><a href="">Cooking Oil</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseFour">Trending Products</button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse collapse show">
                                    <div class="accordion-body">
                                        <ul class="product-list product-list-2 border-0 p-0">
                                            <li>
                                                <div class="offer-product">
                                                    <a href="/Shop" class="offer-image">
                                                        <img src="/assets/images/picture/blog3.png"
                                                            class="blur-up lazyload" alt="" />
                                                    </a>

                                                    <div class="offer-detail">
                                                        <div>
                                                            <a href="/Shop">
                                                                <h6 class="name">Meatigo Premium Goat Curry</h6>
                                                            </a>
                                                            <span>450 G</span>
                                                            <h6 class="price theme-color">₹ 70.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="offer-product">
                                                    <a href="/Shop" class="offer-image">
                                                        <img src="/assets/images/picture/blog4.png"
                                                            class="blur-up lazyload" alt="" />
                                                    </a>

                                                    <div class="offer-detail">
                                                        <div>
                                                            <a href="/Shop">
                                                                <h6 class="name">Dates Medjoul Premium Imported</h6>
                                                            </a>
                                                            <span>450 G</span>
                                                            <h6 class="price theme-color">₹ 40.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="mb-0">
                                                <div class="offer-product">
                                                    <a href="/Shop" class="offer-image">
                                                        <img src="/assets/images/picture/blog5.png"
                                                            class="blur-up lazyload" alt="" />
                                                    </a>

                                                    <div class="offer-detail">
                                                        <div>
                                                            <a href="/Shop">
                                                                <h6 class="name">Apple Red Premium Imported</h6>
                                                            </a>
                                                            <span>1 KG</span>
                                                            <h6 class="price theme-color">₹ 80.00</h6>
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
    </section>
    {/* <!-- Blog Section End --> */}
    <Footer />
    </>
  )
}

export default Blog