import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import { pinFilePinata, updatePinPinata } from './pinataAPI';
import abi from '../contracts/compiled/stuffswapABI.json';
const NODE_ENV = process.env.NODE_ENV;
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
  // const Contract = require('web3-eth-contract');
  // let w3 = new Web3(Web3.providers.HttpProvider(process.env.REACT_APP_WEB3_PROVIDER_URI));
  // const contractAddress = process.env.REACT_APP_SMART_CONTRACT_ADDRESS;
  // const contract = new Contract(abi, process.env.REACT_APP_SMART_CONTRACT_ADDRESS);

  // const contract = w3.eth.contract(
  //   contractAddress,
  //   Contract
  // )
  // return contract;
}

export const pinArtwork = async (item) => {
  const ipfsFileHash = await pinFilePinata(item);
  const ipfsURI = `ipfs://${ipfsFileHash.IpfsHash}`;
  // const contract = loadContract();
  const SmartContractObj = new Web3EthContract(
    abi,
    `${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`
  );
  const { ethereum } = window;
  const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
  let accounts;
  if (metamaskIsInstalled) {
    SmartContractObj.setProvider(process.env.REACT_APP_WEB3_PROVIDER_URI);
    // let web3 = new Web3(ethereum);
    // console.log(web3.currentProvider);
    // try {
    //   accounts =  await ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   console.log(accounts);
    //   // return accounts[0];
    // } catch (err) {
    //   // dispatch(connectFailed("Something went wrong."));
    // }
  } else {
    console.log('install metamask');
  }

  console.log(item)
  // const txHash = SmartContractObj.methods.registerArtwork(
  //   item.name,
  //   item.artist,
  //   item.price,
  //   accounts[0],
  //   accounts[0],
  //   20,
  //   ipfsURI
  // )
  const ganache = require("ganache");
  // let web3 = new Web3(ethereum, process.env.REACT_APP_WEB3_PROVIDER_URI);
  let web3 = new Web3(ethereum);
  // let web3 = new Web3(process.env.REACT_APP_WEB3_PROVIDER_URI);
  let myContract = new web3.eth.Contract(abi,`${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`);
  // web3.eth.setProvider('HTTP://127.0.0.1:7545')
  console.log(web3.eth.currentProvider)
  console.log(web3.currentProvider);

  console.log(web3);
  try {
    accounts =  await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    // return accounts[0];
  } catch (err) {
    // dispatch(connectFailed("Something went wrong."));
  }
  // to: '0x9F0AE3eCeF246055817486Ed0B3AdcFb0F665361',

  const createTransaction = await web3.eth.sendTransaction(
    {
      from: accounts[0],
      to: '0xAE1F4FC21C8a8156508122bB9DbBb1067349E955',
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
    // accountFrom.privateKey
  ).then(result => {console.log(result)})
  .catch(err => {console.log(err)});
  // value: web3.utils.toWei('.1', 'ether'),
  // gas: 210000,


  // console.log(SmartContractObj.methods.balanceOf(accounts[0]).call())
  // myContract.methods.totalSupply().call((err, result) => {
  //   if(err) {
  //     console.error('Error: ', err);
  //     // handle the error here
  //   }
  //   console.log(result);
  //   let supply = web3.utils.fromWei(result, 'ether');
  //   // You can add supply now to whatever part
  //   // of your page you want it displayed
  // });

  // console.log(await myContract.methods.totalSupply().call())
  // const receipt = await myContract.methods.balanceOf(accounts[0]).call();
  // console.log(receipt)

  // const txHash = contract.methods.send({from: '0x9F0AE3eCeF246055817486Ed0B3AdcFb0F665361'})
  // .call({from: '0x9F0AE3eCeF246055817486Ed0B3AdcFb0F665361', gas: 1000000}, function(error, result) {
  //   console.log(error)
  //   console.log(result)
  // })
    // .on('receipt', function(receipt) {
    //   console.log(receipt);
    // })


  // return txHash;
}

  // const abiResponse = await fetch("../contracts/compiled/stuffswapABI.json", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  // });
  // const abi = await abiResponse.json();
  // const send = async () => {
  //   // console.log(`Attempting to send transaction from ${accountFrom.address} to ${addressTo}`);

  //   // 4. Sign tx with PK
  //   const createTransaction = await web3.eth.accounts.signTransaction(
  //     {
  //       gas: 21000,
  //       to: addressTo,
  //       value: web3.utils.toWei('.2', 'ether'),
  //     },
  //     accountFrom.privateKey
  //   );

  //   // 5. Send tx and wait for receipt
  //   const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
  //   console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
  // }



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
