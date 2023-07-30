import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Payment from './components/Payment';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!cartItems.includes(item)) {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
      alert("Item added to Cart Successfully");
    }
    else {
      alert("Item already in Cart");
    }

  };



  return (


    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart
            cartItems={cartItems}

          />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
