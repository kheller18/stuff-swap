// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC721/ERC721Full.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract ArtRegistry is ERC721Enumerable, Ownable {
    constructor() public ERC721("ArtRegistryToken", "ART") {}

    struct Artwork {
        string name;
        string artist;
        uint256 price;
    }

    mapping(uint256 => Artwork) public artCollection;

    event Appraisal(uint256 tokenId, uint256 price, string reportURI);

    function registerArtwork(
        address owner,
        string memory name,
        string memory artist,
        uint256 initialPrice,
        string memory tokenURI
    ) public returns (uint256) {
        uint256 tokenId = totalSupply();

        _mint(owner, tokenId);
        // _setTokenURI(tokenId, tokenURI);
        tokenURI = 'https://ipfs.io/ipfs/Qmf9LwDLB3gkCqxEYfZbVT8AJtuPWEUSxNG86qucqMV7AV';

        artCollection[tokenId] = Artwork(name, artist, initialPrice);

        return tokenId;
    }

    function newAppraisal(
        uint256 tokenId,
        uint256 newPrice,
        string memory reportURI
    ) public returns (uint256) {
        artCollection[tokenId].price = newPrice;

        emit Appraisal(tokenId, newPrice, reportURI);

        return artCollection[tokenId].price;
    }
}
