import Web3 from 'web3';
import { pinFilePinata, updatePinPinata, updateInitialPinPinata } from './pinataAPI';
import abi from '../contracts/compiled/stuffswapABI.json';

// function for registering artwork
export const pinArtwork = async (item) => {
  const ipfsFileHash = await pinFilePinata(item);
  const ipfsURI = `ipfs://${ipfsFileHash.IpfsHash}`;
  const { ethereum } = window;
  let web3 = new Web3(ethereum);
  let myContract = new web3.eth.Contract(abi,`${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`);
  let accounts;

  try {
    accounts =  await ethereum.request({
      method: "eth_requestAccounts",
    });
  } catch (err) {
    console.log(err)
  }

  // web3 transaction using metamask to sign trnascation and register artwork
  const createTransaction = await web3.eth.sendTransaction(
    {
      from: accounts[0],
      to: `${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`,
      data: myContract.methods.registerArtwork(
        item.name,
        item.artist,
        item.price,
        accounts[0],
        accounts[0],
        1,
        ipfsURI
      ).encodeABI(),
      common: {
        networkId: 5777,
        chainId: 1337
      }
    },
  ).then(async result => {
    const tokenId = web3.utils.hexToNumber(result.logs[0].topics[3]);
    await updateInitialPinPinata(item, ipfsFileHash, tokenId);
  }).catch(err => {console.log(err)});
}

// function to get tokenIds per address
export const getArtwork = async () => {
  const { ethereum } = window;
  let web3 = new Web3(ethereum);
  let myContract = new web3.eth.Contract(abi,`${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`);
  let accounts;

  try {
    accounts =  await ethereum.request({
      method: "eth_requestAccounts",
    });
    const tokenIds = await myContract.methods.getTokenIds(accounts[0]);
    return tokenIds;
  } catch (err) {
    console.log(err)
  }
}

// function to sell and transfer ownership of artwork
export const transferArtwork = async (item, newAddress) => {
  const { ethereum } = window;
  let web3 = new Web3(ethereum);
  let myContract = new web3.eth.Contract(abi,`${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`);
  let accounts;

  try {
    accounts =  await ethereum.request({
      method: "eth_requestAccounts",
    });
  } catch (err) {
    console.log(err)
  }

  // web3 transaction which calls solidity method to buy artwork and transfers ownership once transaction is signed
  const createTransaction = await web3.eth.sendTransaction(
    {
      from: accounts[0],
      to: `${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`,
      data: myContract.methods.buyArtwork(
        item.metadata.keyvalues.tokenId,
        accounts[0],
      ).encodeABI(),
      common: {
        networkId: 5777,
        chainId: 1337
      }
    },
  ).then(async result => {
    await updatePinPinata(item, accounts[0]);
  }).catch(err => {console.log(err)});
}

// function to get the current user address in the window
export const getUserAddress = async () => {
  const { ethereum } = window;
  const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
  if (metamaskIsInstalled) {
    let web3 = new Web3(ethereum);
    try {
      const accounts =  await ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (err) {
    }
  } else {
    console.log('install metamask');
  }
}
