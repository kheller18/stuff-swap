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
  const [walletAddress, setWalletAddress] = useState('');
  console.log(walletAddress);

  return (
    <Router>
      <div className='App'>
        {/* <Header userStatus={showUser} setUserStatus={setShowUser} cartStatus={showCart} setCartStatus={setShowCart} /> */}
        <Header wallet={walletAddress} setWalletAddress={setWalletAddress} />
        <Routes>
          <Route path='/' exact element={<Main wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/collection' element={<ShopCollections wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/artwork/register' element={<RegisterArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/artwork/update' element={<UpdateArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/settings' element={<RegisterArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/wallet' element={<Wallet wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/artwork/owned' element={<OwnedArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/artwork/sell' element={<SellArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
