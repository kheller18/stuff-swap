//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract BagNTagToken is ERC721, Ownable {
  
    using Strings for uint256;
    
    uint256 public constant MAX_TOKENS = 2000;

    // how many tokens will be minted to the owners wallet once the nft is deployed
    uint256 private constant TOKEN_RESERVED = 5;
    uint256 public price = 10000000000000000;

    //max mint per transaction
    uint256 public constant MAX_MINT_PER_TX = 5;

    //true because public sale is going on. 
    //This allows you to pause the functions and fix issues in the contract without having to destroy the contract and start from scratch
    bool public isSaleActive = true;
    uint256 public totalSupply;

    // keeps track of how many nfts each wallet has minted 
    mapping(address => uint256) private mintedPerWallet;

    string public baseUri;
    string public baseExtension = ".json";

    constructor() ERC721("BagNTagToken", "BNT") {
        // base IPFS URI of the NFTs 
        baseUri = "ipfs://XXXXXXXXXXXXXXXXXXXXXXX/";

        //this is a loop it takes how many tokens you have reserved and will mint all of them. 
        //When you deploy the contract there should be 5 minted in the total supply. 
        for (uint256 i = 1; i < TOKEN_RESERVED; ++i) {
            _safeMint(msg.sender, i);
        }
        
        totalSupply = TOKEN_RESERVED;
    }
    //public functions
    function mint(uint256 _numTokens) external payable {
        require(isSaleActive, "The sale is paused.");
        require(_numTokens <= MAX_MINT_PER_TX, "You can only mint a maximum of 5 NFTs per transaction.");
        require(mintedPerWallet[msg.sender] + _numTokens <= 5, "You can only mint 5 per wallet.");
        uint256 curTotalSupply = totalSupply;
        require(curTotalSupply + _numTokens <= MAX_TOKENS, "Exceeds 'MAX_TOKENS'");
        require(_numTokens * price <= msg.value, "Insufficient funds. You need more ETH!");

        //once it goes through all of the required check points it will then go through the loop. 
        // The loop sees the '_numtokens' number of tokens and mints them to the wallet whos minting.  
        for (uint256 i = 1; i <= _numTokens; ++i) {
            _safeMint(msg.sender, curTotalSupply + i);
        }
        //this code updates how many tokens are minted by a wallet, and will update the totalsupply left
        mintedPerWallet[msg.sender] += _numTokens;
        totalSupply += _numTokens;
    }

    //owner only functions 

    //if function is active and you call it, it will make it inactive. if its inactive it will be active. only owner can call function
    function flipSaleState() external onlyOwner {
        isSaleActive = !isSaleActive;
    }

    //if URI needs to change location (server) this allows away to do that. 
    function setBaseURI(string memory _baseUri) external onlyOwner {
        baseUri = _baseUri;
    }    

    //allows you to adjust price such as if presale price is different than mint day price
    function setPrice(uint256, _price) external onlyOwner {
        price = _price
    }


    function withdrawALL() external payable onlyOwner {

        //grabs eth balance of smart contract
        uint256 balance = address(this). balance;

        //these next lines show how much you are splitting the balance with in this case we are splitting it 50%
        uint256 balanceOne = balance * 50 / 100;
        uint256 balanceTwo = balance * 50 / 100;
        
        //these next lines will transfer eth with their corrosponding rations to the correct wallet 
        (bool transferOne, ) = payable(0x761d86566b0175dA0431bcbe5f16e30881b52472).call{value: balanceOne}("");
        (bool transferTwo, ) = payable(0xec6Ef650E8e1009fcCDa35F2EaC9fb66a7a518ce).call{value: balanceTwo}("");
        require(transferOne && transferTwo, "transfer failed.");
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI =_baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
            : "";
    }

    //internal functions 
    function _baseURI() internal view virtual override returns (string memory) {
        return baseUri;
    }
}
 