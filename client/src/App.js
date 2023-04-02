import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Redirect, Route  } from 'react-router-dom';
// import Engine from './components/Engine';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ShopCollections from './components/ShopCollections';
import Main from './components/Main';
import RegisterArtwork from './components/RegisterArtwork';
import Wallet from './components/Wallet';
import OwnedArtwork from './components/OwnedArtwork';
import SellArtwork from './components/SellArtwork';
import UpdateArtwork from './components/UpdateArtwork';

function App() {

  return (
    <Router>
      <div className='App'>
        {/* <Header userStatus={showUser} setUserStatus={setShowUser} cartStatus={showCart} setCartStatus={setShowCart} /> */}
        <Header />
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/collection' element={<ShopCollections />} />
          <Route path='/user/artwork/register' element={<RegisterArtwork />} />
          <Route path='/user/artwork/update' element={<UpdateArtwork />} />
          <Route path='/user/settings' element={<RegisterArtwork />} />
          <Route path='/user/wallet' element={<Wallet />} />
          <Route path='/user/artwork/owned' element={<OwnedArtwork />} />
          <Route path='/user/artwork/sell' element={<SellArtwork />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
