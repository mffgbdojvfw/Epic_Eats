import React from 'react'
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Order from './pages/order/Order';
import List from './pages/list/List';
import Add from './pages/add/Add';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
  
    <div className="App">
      <ToastContainer/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Add/>}></Route>
        <Route exact path="/list" element={<List/>}></Route>
        <Route exact path="/order" element={<Order/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
