import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import { pinFilePinata, updatePinPinata } from './pinataAPI';
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
      to: '0xD1bDd85157cE0D55Cd8D2C9F26172E6E463d7D39',
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
  ).then(result => {console.log(result)})
  .catch(err => {console.log(err)});

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
    console.log(accounts);
    const tokenIds = await myContract.methods.getTokenIds(accounts[0]);
    console.log(myContract)
    console.log(tokenIds);
    return tokenIds;
    // return accounts[0];
  } catch (err) {
    console.log(err)
  }
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
