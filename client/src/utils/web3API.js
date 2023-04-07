import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import { pinFilePinata, updatePinPinata, updateInitialPinPinata } from './pinataAPI';
import abi from '../contracts/compiled/stuffswapABI.json';

export const pinArtwork = async (item) => {
  const ipfsFileHash = await pinFilePinata(item);
  console.log(ipfsFileHash)
  const ipfsURI = `ipfs://${ipfsFileHash.IpfsHash}`;
  const { ethereum } = window;
  let web3 = new Web3(ethereum);
  let myContract = new web3.eth.Contract(abi,`${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`);
  let accounts;

  try {
    accounts =  await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    // return accounts[0];
  } catch (err) {
    console.log(err)
  }

  const createTransaction = await web3.eth.sendTransaction(
    {
      from: accounts[0],
      to: '0x5b9A6a113F636790F194b65Df69a758eed3eB6cc',
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

export const transferArtwork = async (item, newAddress) => {
  const { ethereum } = window;
  let web3 = new Web3(ethereum);
  let myContract = new web3.eth.Contract(abi,`${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`);
  let accounts;
  console.log(item);


  try {
    accounts =  await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    // return accounts[0];
  } catch (err) {
    console.log(err)
  }

  const createTransaction = await web3.eth.sendTransaction(
    {
      from: accounts[0],
      to: '0x5b9A6a113F636790F194b65Df69a758eed3eB6cc',
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

  })
  .catch(err => {console.log(err)});
}

export const getUserAddress = async () => {
  const { ethereum } = window;
  const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
  if (metamaskIsInstalled) {
    // Web3EthContract.setProvider(ethereum);
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
