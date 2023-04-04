import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import { pinFilePinata, updatePinPinata } from './pinataAPI';


const { ethereum } = window;
const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
if (metamaskIsInstalled) {
  Web3EthContract.setProvider(ethereum);
  let web3 = new Web3(ethereum);
  try {
    const accounts =  ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
  } catch (err) {
    // dispatch(connectFailed("Something went wrong."));
  }
}

export const pinArtwork = async (item) => {
  const ipfsFileHash = await pinFilePinata(item);
  // const tokenJSON =
}

export const getArtwork = () => {

}