import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';

let jsonHeaders = {
  "Content-Type": "application/json",
  "pinata_api_key": process.env.REACT_APP_PINATA_API_KEY,
  "pinata_secret_api_key": process.env.REACT_APP_PINATA_API_SECRET,
}

let fileHeaders = {
  "pinata_api_key": process.env.REACT_APP_PINATA_API_KEY,
  "pinata_secret_api_key": process.env.REACT_APP_PINATA_API_SECRET,
}

// function to pin file to ipfs
export const pinFilePinata = () => {

}

// function to pin JSON to ipfs
export const pinJSONPinata = () => {

}


