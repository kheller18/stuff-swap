// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ArtRegistry is ERC721Enumerable, Ownable {
    constructor(
    ) ERC721("StuffSwap", "SSWP") {}

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

    mapping(uint256 => Artwork) public artCollection;

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

    function buyArtwork(
        uint256 tokenId,
        address payable sender
    ) public returns (address) {
        _transfer(artCollection[tokenId].owner, sender, tokenId);
        return artCollection[tokenId].owner;
    }
}
