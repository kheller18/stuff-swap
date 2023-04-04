//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract BagNTagToken is ERC721, Ownable {
  
    using Strings for uint256;
    
    uint256 public constant MAX_TOKENS = 2000;
    uint256 private constant TOKEN_RESERVED = 5;
    uint256 public price = 10000000000000000;
    uint256 public constant MAX_MINT_PER_TX = 5;

    bool public isSaleActive = true;
    uint256 public totalSupply;
    mapping(address => uint256) private mintedPerWallet;

    string public baseUri;
    string public baseExtension = ".json";

    constructor() ERC721("BagNTagToken", "BNT") {
        // base IPFS URI of the NFTs 
        baseUri = "ipfs://XXXXXXXXXXXXXXXXXXXXXXX/";
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

        for (uint256 i = 1; i <= _numTokens; ++i) {
            _safeMint(msg.sender, curTotalSupply + i);
        }
        mintedPerWallet[msg.sender] += _numTokens;
        totalSupply += _numTokens;
    }

    //owner only functions 
    function flipSaleState() external onlyOwner {
        isSaleActive = !isSaleActive;
    }

    function setBaseURI(string memory _baseUri) external onlyOwner {
        baseUri = _baseUri;
    }    

    function withdrawALL() external payable onlyOwner {
        uint256 balance = address(this). balance;
        uint256 balanceOne = balance * 50 / 50;
        uint256 balanceTwo = balance * 50 / 50;
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
 