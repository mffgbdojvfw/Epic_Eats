import logo from './logo.svg';
import Home from './pages/Home/Home';
import SignIn from './pages/Register/SignIn';
import SignUp from './pages/Register/SignUp';
import {BrowserRouter as Router,Routes,Route }from "react-router-dom"
// import FavoritesPage from './Cousins/FavoritesPage';
import Cart from './pages/cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Order from './pages/order/Order';
import Myorders from './pages/Myorders/Myorders';
import { useState } from 'react';

function App() {
  const[Token,setToken] = useState("")
  const[userId,setUserId] = useState("")
  return (
    <>
    <div>
      <ToastContainer/>
      <Router>
        <Routes>
        <Route exact path="/" element = {<Home/>}></Route>
        <Route exact path="/signin" element = {<SignIn/>}></Route>
        <Route exact path="/signup" element = {<SignUp/>}></Route>
        <Route exact path="/Cart" element = {<Cart/>}></Route>
        {/* <Route exact path="/SouthIndian" element = {<South/>}></Route> */}
        {/* <Route exact path="/fav" element = {<FavoritesPage/>}></Route> */}
        <Route exact path="/order" element = {<Placeorder/>}></Route>
        <Route exact path="/placeorder" element = {<Order/>}></Route>
        <Route exact path="/myorders" element = {<Myorders/>}></Route>
        {/* <Route exact path="/" element = {<CategorySlider/>}></Route> */}
        </Routes>
      </Router>
      
  
    </div>
    </>
  );
}

export default App;
