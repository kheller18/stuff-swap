import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopCollections from './components/ShopCollections';
import Main from './components/Main';
import RegisterArtwork from './components/RegisterArtwork';
import OwnedArtwork from './components/OwnedArtwork';
import SellArtwork from './components/SellArtwork';
import UpdateArtwork from './components/UpdateArtwork';
import Art from './components/Art';
import './App.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [cart, setCart] = useState([]);

  // defines routes for the site and their respective components and props
  return (
    <Router>
      <div className='App'>
        <Header content={cart} setContent={setCart} wallet={walletAddress} setWalletAddress={setWalletAddress} />
        <Routes>
          <Route path='/' exact element={<Main wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/collection' element={<ShopCollections wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/artwork/register' element={<RegisterArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/artwork/update' element={<UpdateArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/settings' element={<RegisterArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/artwork/item' element={<Art content={cart} setContent={setCart} wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/artwork/owned' element={<OwnedArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
          <Route path='/user/artwork/sell' element={<SellArtwork wallet={walletAddress} setWalletAddress={setWalletAddress} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
