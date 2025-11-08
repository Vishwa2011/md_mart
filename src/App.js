import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Productdetails from './Pages/Productdetails';
import Blog from './Pages/Blog';



function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Shop' element={<Shop/>}/>
    <Route path='/Productdetails' element={<Productdetails/>} />
      <Route path='/Blog' element={<Blog/>} />
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
