// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StuffSwapMarket is ERC721Enumerable, Ownable {
    constructor(
    ) ERC721("StuffSwap", "SSWP") {}

// A data structure defined as a struct named Artwork that has multiple properties including name, artist, price, only owner can recieve payments, creatorAddress, initialSupply or total supply on an NFT, ipfs (storage and hash of the artworks digital file), and selling (true/false variable if the artwork is selling or not)
    struct Artwork {
        string name;
        string artist;
        uint256 price;
        address payable owner;
        address payable creatorAddress;
        uint256 initialSupply;
        string ipfs;
        bool selling;
    }
// Public mapping that maps NFT token ids to the Artwork struct
    mapping(uint256 => Artwork) public artCollection;

// Function that allows users to register NFT artworks on the marketplace 
    function registerArtwork(
        string memory name,
        string memory artist,
        uint256 price,
        address payable owner,
        address payable creator,
        uint256 mintAmount,
        string memory ipfs
    ) public returns (uint256) {
        uint256 tokenId = totalSupply();

        _mint(creator, tokenId);

        artCollection[tokenId] = Artwork(name, artist, price, owner, creator, mintAmount, ipfs, false);

        return tokenId;
    }

// Function that allows the owner of an NFT to list it for sale on the marketplace. Ensuring that the sender address matches the owner address.
    function listArtwork(
        uint256 tokenId,
        uint256 newPrice,
        address sender
    ) public returns (uint256) {
        require(artCollection[tokenId].owner == sender, "You dont have access to this");
        artCollection[tokenId].price = newPrice;
        artCollection[tokenId].selling = true;
        return artCollection[tokenId].price;
    }

// Function that allows users to purchase NFTs from the marketplace. Inside the function there is a _transfer function that transfers ownership including the tokenId from the NFTs current owner to the new owners address
    function buyArtwork(
        uint256 tokenId,
        address payable sender
    ) public returns (address) {
        _transfer(artCollection[tokenId].owner, sender, tokenId);
        return artCollection[tokenId].owner;
    }
}
