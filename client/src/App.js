import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Redirect, Route  } from 'react-router-dom';
// import Engine from './components/Engine';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ShopCollections from './components/ShopCollections';
import Main from './components/Main';
import Cart from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <Router>
      <div className='App'>
        <Header cartStatus={showCart} setCartStatus={setShowCart} />
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/collection' element={<ShopCollections />} />
          {/* <Route path='*' element={<Main />} /> */}
          {/* <Redirect to='/' /> */}
          {/* <Route path='/login' exact component={Engine} />
          <Route path='/signup' exact component={Engine} /> */}
        </Routes>
        {showCart ?
          <Cart setCartStatus={setShowCart} />
        : null
        }
        <Footer />
      </div>
    </Router>
  );
};

export default App;
