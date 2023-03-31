//Build a dApp Back-End Contract
pragma solidity ^0.5.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC721/ERC721Full.sol";

contract BagNTagToken is ERC721Full {
    constructor() public ERC721Full("BagNTagToken", "BNT") { }

    //With this function, we allow users to register new pieces of artwork

    function registerArtwork(address owner, string memory tokenURI)
        public
        returns (uint256)
    {
        //function named totalSupply returns the total number of tokens that we have minted.
        uint256 tokenId = totalSupply();
        
        //This function uses the owner address and the token ID to mint a new token.
        _mint(owner, tokenId);
        
        //Call the _setTokenURI function to permanently associate the value of tokenURI with the token on the blockchain
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}
