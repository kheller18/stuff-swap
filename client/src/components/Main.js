import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import '../styles/Main.css';
import Trending from './Trending';
import { getSiteFilesPinata } from '../utils/pinataAPI';


const Main = props => {
  const [category, setCategory] = useState('All');
  const [siteContent, setSiteContent] = useState([]);

  // waits for component to mount and then gets site files
  useEffect(() => {
    // calls pinata function to get artwork
    const getSiteArtwork = async () => {
      const { ethereum } = window;
      let accounts;

      try {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (err) {
        console.log(err)
      }
      const artwork = await getSiteFilesPinata(accounts[0]);
      setSiteContent(artwork.rows);
    }
    getSiteArtwork();
  }, [])

  return (
    <div className='main-container'>
      <ul className='main-header'>
        <li value='All' className={category === 'All' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory("All")}>All</li>
        <li value='Accessories' className={category === 'Accessories' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory("Accessories")}>Accessories</li>
        <li value='Apparel' className={category === 'Apparel' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory("Apparel")}>Apparel</li>
        <li value='Art' className={category === 'Art' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory("Art")}>Art</li>
      </ul>
      {siteContent.length > 0 ?
        <div>
          <Carousel content={siteContent} />
          <Trending content={siteContent} />
        </div>
      : ''
      }
    </div>
  );
};

export default Main;
