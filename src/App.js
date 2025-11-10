import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Productdetails from './Pages/Productdetails';
import Blog from './Pages/Blog';
import Blogdetails from './Pages/Blogdetails';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Checkout from './Pages/Checkout';
import Faq from './Pages/Faq';
import Otp from './Pages/Otp';
import Ordersuccess from './Pages/Ordersuccess';
import Ordertracking from './Pages/Ordertracking';
import Wishlist from './Pages/Wishlist';
import Account from './Pages/Account';
import Login from './Pages/Login';
import Privacy from './Pages/Privacy'
import Termscondition from './Pages/Terms&condition'



function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Shop' element={<Shop/>}/>
    <Route path='/Productdetails' element={<Productdetails/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Blogdetails' element={<Blogdetails/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Cart' element={<Cart />}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Checkout' element={<Checkout />}/>
      <Route path='/Faq' element={<Faq/>}/>
      <Route path='/Otp' element={<Otp/>}/>
      <Route path='/Ordersuccess' element={<Ordersuccess/>}/>
       <Route path='/Ordertracking' element={<Ordertracking/>}/>
       <Route path='/Wishlist' element={<Wishlist/>}/>
       <Route path='/Account' element={<Account/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Privacy' element={<Privacy/>}/>
       <Route path='/Terms' element={<Termscondition/>}/>
  </Routes>

  {/* <!-- Tap to top and theme setting button start --> */}
    <div class="theme-option">
      

        <div class="back-to-top">
            <a id="back-to-top" href="#">
                <i class="fas fa-chevron-up"></i>
            </a>
        </div>
    </div>
    {/* <!-- Tap to top and theme setting button end --> */}
  </>
  );
}

export default App;
