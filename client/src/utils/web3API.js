import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import { pinFilePinata, updatePinPinata } from './pinataAPI';
import abi from '../contracts/compiled/stuffswapABI.json';
// import { Buffer } from 'buffer';

// const { ethereum } = window;
// const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
// if (metamaskIsInstalled) {
//   Web3EthContract.setProvider(ethereum);
//   let web3 = new Web3.eth.contract(contract, '0xa921Ebe62e53CC1cA33092dda23063c769E33483');
//   // let web3 = new Web3(ethereum);
//   try {
//     const accounts =  ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     console.log(accounts);
//   } catch (err) {
//     // dispatch(connectFailed("Something went wrong."));
//   }
// }
const loadContract = () => {
  const Contract = require('web3-eth-contract');
  // let w3 = new Web3(Web3.providers.HttpProvider(process.env.REACT_APP_WEB3_PROVIDER_URI));
  // const contractAddress = process.env.REACT_APP_SMART_CONTRACT_ADDRESS;
  const contract = new Contract(abi, process.env.REACT_APP_SMART_CONTRACT_ADDRESS);

  // const contract = w3.eth.contract(
  //   contractAddress,
  //   Contract
  // )
  return contract;
}

export const pinArtwork = async (item) => {
  const ipfsFileHash = await pinFilePinata(item);
  const ipfsURI = `ipfs://${ipfsFileHash}`;
  const contract = await loadContract();
  // const txHash = await contract.functions.registerArtwork(
  console.log(item)
  const txHash = await contract.methods.registerArtwork(
    item.address,
    item.name,
    item.artist,
    item.price,
    ipfsURI
  )
  // .send({from: item.address, gas: 1000000});
  console.log(txHash);
  // const tokenJSON =

}

export const getArtwork = () => {

}

export const getUserAddress = async () => {
  const { ethereum } = window;
  const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
  if (metamaskIsInstalled) {
    Web3EthContract.setProvider(ethereum);
    let web3 = new Web3(ethereum);
    try {
      const accounts =  await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      return accounts[0];
    } catch (err) {
      // dispatch(connectFailed("Something went wrong."));
    }
  } else {
    console.log('install metamask');
  }
}
