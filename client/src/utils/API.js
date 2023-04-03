import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import axios from 'axios';
const FormData = require('form-data');
// require('dotenv').config();
// const fs = require('fs')
// const JWT = 'Bearer PASTE_YOUR_PINATA_JWT'


let jsonHeaders = {
  "Content-Type": "application/json",
  "pinata_api_key": process.env.REACT_APP_PINATA_API_KEY,
  "pinata_secret_api_key": process.env.REACT_APP_PINATA_API_SECRET,
}

let fileHeaders = {
  "pinata_api_key": `${process.env.REACT_APP_PINATA_API_KEY}`,
  "pinata_secret_api_key": `${process.env.REACT_APP_PINATA_API_SECRET}`,
}

export const pinFilePinata = async (info) => {
  const formData = new FormData();
  const metadata = JSON.stringify({
    name: info.name,
    artist: info.artist,
    price: info.price
  });
  const options = JSON.stringify({
    cidVersion: 0,
  })

  formData.append('file', info.file);
  formData.append('pinataMetadata', metadata);
  formData.append('pinataOptions', options);

  try {
    const res = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
          'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
          'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
          "Content-Type": "multipart/form-data"
      },
  });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

// function to pin JSON to ipfs
export const pinJSONPinata = () => {

}


